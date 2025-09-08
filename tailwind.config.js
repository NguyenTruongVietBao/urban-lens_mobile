/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#5265FF",
        secondary: "#FE7474",
        link: "#4B4DED",
        dark: "#131629",
        light: "#FFFFFF",
        success: "#31D0AA",
        error: "#FF4D4D",
        text: "#09101D",
        subText: "#8C8CA1",
        accent: "#ECF1F4",
      },
      fontFamily: {
        mBlack: ["MontserratBlack", "sans-serif"],
        mBold: ["MontserratBold", "sans-serif"],
        mExtraBold: ["MontserratExtraBold", "sans-serif"],
        mLight: ["MontserratLight", "sans-serif"],
        mMedium: ["MontserratMedium", "sans-serif"],
        mRegular: ["MontserratRegular", "sans-serif"],
        mSemiBold: ["MontserratSemiBold", "sans-serif"],
        mThin: ["MontserratThin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
