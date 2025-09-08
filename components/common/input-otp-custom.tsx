import React, { useEffect, useRef } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface OTPInputProps {
  length?: 4 | 6;
  value: string;
  onChange: (otp: string) => void;
  onComplete?: (otp: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
  testID?: string;
}

export default function OTPInput({
  length = 4,
  value,
  onChange,
  onComplete,
  disabled = false,
  autoFocus = true,
  className = "",
  testID,
}: OTPInputProps) {
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const otpArray = value.split("").slice(0, length);

  // Fill empty slots
  while (otpArray.length < length) {
    otpArray.push("");
  }

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (value.length === length && onComplete) {
      onComplete(value);
    }
  }, [value, length, onComplete]);

  const handleTextChange = (text: string, index: number) => {
    if (disabled) return;

    // Only allow numeric input
    const numericText = text.replace(/[^0-9]/g, "");

    if (numericText.length <= 1) {
      const newOtpArray = [...otpArray];
      newOtpArray[index] = numericText;
      const newOtp = newOtpArray.join("");
      onChange(newOtp);

      // Auto focus next input
      if (numericText && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyPress = (key: string, index: number) => {
    if (disabled) return;

    if (key === "Backspace") {
      if (!otpArray[index] && index > 0) {
        // If current input is empty, go to previous and clear it
        const newOtpArray = [...otpArray];
        newOtpArray[index - 1] = "";
        onChange(newOtpArray.join(""));
        inputRefs.current[index - 1]?.focus();
      } else if (otpArray[index]) {
        // Clear current input
        const newOtpArray = [...otpArray];
        newOtpArray[index] = "";
        onChange(newOtpArray.join(""));
      }
    }
  };

  const handleInputPress = (index: number) => {
    if (disabled) return;
    inputRefs.current[index]?.focus();
  };

  const getContainerClasses = () => {
    return `flex-row justify-center items-center ${className}`;
  };

  const getInputClasses = (
    index: number,
    isFilled: boolean,
    isFocused: boolean
  ) => {
    let baseClasses =
      "w-16 h-16 border-2 rounded-xl text-center text-3xl font-mBold";

    if (disabled) {
      baseClasses += " bg-gray-100 border-gray-200 text-gray-400";
    } else if (isFocused) {
      baseClasses += " border-primary text-gray-900";
    } else if (isFilled) {
      baseClasses += " border-primary text-gray-900";
    } else {
      baseClasses += " border-gray-300 bg-white text-gray-900";
    }

    return baseClasses;
  };

  const getSpacingClasses = (index: number) => {
    if (length === 6) {
      return index === 2 ? "mr-6" : index < length - 1 ? "mr-3" : "";
    }
    return index < length - 1 ? "mr-3" : "";
  };

  return (
    <View className={getContainerClasses()} testID={testID}>
      {otpArray.map((digit, index) => {
        const isFilled = digit !== "";

        return (
          <TouchableOpacity
            key={index}
            onPress={() => handleInputPress(index)}
            activeOpacity={1}
            className={getSpacingClasses(index)}
            testID={`${testID}-input-${index}`}
          >
            <TextInput
              ref={(ref) => {
                inputRefs.current[index] = ref;
              }}
              value={digit}
              onChangeText={(text) => handleTextChange(text, index)}
              onKeyPress={({ nativeEvent }) =>
                handleKeyPress(nativeEvent.key, index)
              }
              keyboardType="numeric"
              maxLength={1}
              selectTextOnFocus
              editable={!disabled}
              className={getInputClasses(index, isFilled, false)}
              textAlign="center"
              autoComplete="sms-otp"
              textContentType="oneTimeCode"
              placeholder="—"
              placeholderTextColor="#D1D5DB"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
