import { ImageResponse } from "next/og";
import { Inter } from "next/font/google";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Load Inter font
const inter = Inter({ subsets: ["latin"], weight: ["900"] });

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          fontWeight: 900,
          fontFamily: `${inter.style.fontFamily}, Helvetica Neue, Arial, sans-serif`,
        }}
      >
        ツ
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
