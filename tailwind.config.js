/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: "#FF9C01",
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
