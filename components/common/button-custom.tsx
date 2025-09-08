import React from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

interface ButtonCustomProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

export default function ButtonCustom({
  title,
  onPress,
  disabled = false,
  className = "",
  icon,
  loading = false,
}: ButtonCustomProps) {
  const getButtonClasses = () => {
    let baseClasses =
      "bg-primary px-6 py-3 rounded-xl flex-row items-center justify-center min-h-12";

    if (disabled || loading) {
      baseClasses += " opacity-50";
    } else {
      baseClasses += " active:bg-blue-700";
    }

    return `${baseClasses} ${className}`;
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View className="flex-row items-center">
          <ActivityIndicator size="small" color="#FFFFFF" className="mr-2" />
          <Text className="text-white font-semibold text-base">Loading...</Text>
        </View>
      );
    }

    return (
      <View className="flex-row items-center justify-center gap-2">
        <Text className="text-white font-mSemiBold text-lg">{title}</Text>
        {icon && <View className="mr-2">{icon}</View>}
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={getButtonClasses()}
      activeOpacity={0.8}
    >
      {renderContent()}
    </TouchableOpacity>
  );
}
