import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 96,
  height: 96,
};
export const contentType = "image/svg+xml";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <svg width="96px" height="96px" viewBox="0 0 96 96" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>favicon</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="favicon" fillRule="nonzero">
            <rect id="Rectangle" fill="#000000" x="0" y="0" width="96" height="96" rx="10"></rect>
            <path d="M70.4205,36.0085 C69.071,25.9588 60.9744,19.7443 47.196,19.7443 C33.2401,19.7443 24.0426,26.2074 24.0781,36.7188 C24.0426,44.8864 29.1918,50.1776 39.8452,52.3082 L49.2912,54.1903 C54.0497,55.1491 56.2159,56.8892 56.2869,59.6236 C56.2159,62.8551 52.7003,65.1634 47.4091,65.1634 C42.0114,65.1634 38.4247,62.8551 37.5014,58.4162 L22.6222,59.1974 C24.0426,69.6378 32.9205,76.0653 47.3736,76.0653 C61.5071,76.0653 71.6278,68.8565 71.6634,58.0966 C71.6278,50.2131 66.4787,45.4901 55.8963,43.3239 L46.0241,41.3352 C40.946,40.2344 39.0639,38.4943 39.0994,35.8665 C39.0639,32.5994 42.7571,30.4688 47.4446,30.4688 C52.7003,30.4688 55.8253,33.3452 56.571,36.8608 L70.4205,36.0085 Z" id="Path" fill="#FFFFFF"></path>
          </g>
        </g>
      </svg>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
