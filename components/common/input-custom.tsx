import { Eye, EyeOff } from "lucide-react-native";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

interface InputCustomProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "url"
    | "number-pad"
    | "name-phone-pad";
  icon?: React.ReactNode;
  isPassword?: boolean;
  editable?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
  onSubmitEditing?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
}

export default function InputCustom({
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  icon,
  isPassword = false,
  editable = true,
  autoCorrect = true,
  returnKeyType = "done",
  onSubmitEditing,
  onFocus,
  onBlur,
  className = "",
}: InputCustomProps) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getContainerClasses = () => {
    let baseClasses =
      "w-96 h-16 border rounded-xl flex-row items-center px-4 bg-white ";

    if (isFocused) {
      baseClasses += " border-primary border-2";
    } else {
      baseClasses += " border-gray-300";
    }

    if (!editable) {
      baseClasses += " bg-gray-100 border-gray-200";
    }

    return `${baseClasses} ${className}`;
  };

  return (
    <View className={getContainerClasses()}>
      {icon && <View className="mr-3">{icon}</View>}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={isPassword && !isPasswordVisible}
        keyboardType={keyboardType}
        editable={editable}
        autoCorrect={autoCorrect}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={"text-base text-gray-500 font-mMedium flex-1"}
      />

      {isPassword && (
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          className="p-1 ml-2"
          activeOpacity={0.7}
        >
          {isPasswordVisible ? (
            <Eye size={20} color="#6B7280" />
          ) : (
            <EyeOff size={20} color="#6B7280" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}
