/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface SwaLogoProps {
  className?: string;
  size?: number;
}

export default function SwaLogo({ className = '', size = 52 }: SwaLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none`}
    >
      {/* Outer Circle Container (Globe Base) */}
      <circle cx="256" cy="256" r="236" fill="#15803d" stroke="#000000" strokeWidth="14" />
      
      {/* Globe Background with Vibrant Green Radial Gradient */}
      <circle cx="256" cy="256" r="229" fill="url(#globeGrad)" />
      
      {/* White Grid Lines (Meridians & Parallels) of the Globe */}
      <g stroke="#ffffff" strokeWidth="3.5" opacity="0.65" fill="none">
        {/* Parallels (Horizontal Lines) */}
        <line x1="27" y1="256" x2="485" y2="256" />
        <path d="M 58 170 Q 256 220 454 170" />
        <path d="M 58 342 Q 256 292 454 342" />
        <path d="M 115 100 Q 256 160 397 100" />
        <path d="M 115 412 Q 256 352 397 412" />
        
        {/* Meridians (Vertical Curves) */}
        <line x1="256" y1="27" x2="256" y2="485" />
        <path d="M 170 58 Q 220 256 170 454" />
        <path d="M 342 58 Q 292 256 342 454" />
        <path d="M 100 115 Q 180 256 100 397" />
        <path d="M 412 115 Q 332 256 412 397" />
      </g>

      {/* Styled Two Hands Cradling the Globe from Bottom */}
      {/* Left Hand (Blue, #1e80ff or similar vibrant blue) and Hand border */}
      <g stroke="#000000" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round">
        {/* Left hand path */}
        <path
          d="M 180 435 
             C 160 410, 140 375, 120 330
             C 105 295, 95 240, 110 200
             C 113 192, 123 188, 128 198
             C 133 208, 128 225, 124 240
             C 120 255, 125 270, 131 280
             C 129 265, 135 245, 142 225
             C 145 215, 155 212, 159 220
             C 162 228, 158 245, 152 265
             C 148 280, 151 292, 159 300
             C 156 285, 162 265, 172 248
             C 176 240, 186 238, 189 246
             C 192 254, 186 270, 180 288
             C 174 305, 178 318, 188 325
             C 183 312, 191 298, 202 284
             C 207 278, 215 280, 217 286
             C 219 292, 215 302, 209 312
             C 195 335, 185 375, 238 425
             C 248 435, 245 455, 230 458
             C 210 460, 195 450, 180 435 Z"
          fill="#2563eb"
        />

        {/* Right Hand (Blue) - Mirrored */}
        <path
          d="M 332 435 
             C 352 410, 372 375, 392 330
             C 407 295, 417 240, 402 200
             C 399 192, 389 188, 384 198
             C 379 208, 384 225, 388 240
             C 392 255, 387 270, 381 280
             C 383 265, 377 245, 370 225
             C 367 215, 357 212, 353 220
             C 350 228, 354 245, 360 265
             C 364 280, 361 292, 353 300
             C 356 285, 350 265, 340 248
             C 336 240, 326 238, 323 246
             C 320 254, 326 270, 332 288
             C 338 305, 334 318, 324 325
             C 329 312, 321 298, 310 284
             C 305 278, 297 280, 295 286
             C 293 292, 297 302, 303 312
             C 317 335, 327 375, 274 425
             C 264 435, 267 455, 282 458
             C 302 460, 317 450, 332 435 Z"
          fill="#2563eb"
        />
      </g>

      {/* SWA Bold Typography overlaid on top of Globe */}
      <g stroke="#000000" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
        
        {/* 'S' in Red */}
        <path
          d="M 194 140
             C 194 110, 150 110, 150 135
             C 150 162, 194 162, 194 190
             C 194 218, 148 218, 148 185"
          fill="none"
          stroke="#ef4444"
          strokeWidth="28"
        />

        {/* 'W' in Yellow with Dripping Water Elements */}
        {/* Main W body paths with dripping water effects */}
        <path
          d="M 215 125
             L 232 245
             Q 232 295, 235 305
             Q 238 315, 241 305
             C 244 290, 244 260, 244 235
             L 256 160
             L 268 235
             C 268 260, 268 290, 271 305
             Q 274 315, 277 305
             Q 280 295, 280 245
             L 297 125"
          fill="none"
          stroke="#facc15"
          strokeWidth="24"
        />

        {/* Organic wavy dripping water lines connecting from 'W' valleys all the way down */}
        <path
          d="M 235 295
             C 230 310, 238 315, 235 325
             C 232 335, 243 345, 237 360
             C 235 365, 238 375, 235 385
             C 232 395, 242 400, 236 415
             "
          fill="none"
          stroke="#facc15"
          strokeWidth="11"
        />
        <circle cx="236" cy="415" r="7" fill="#facc15" stroke="#000000" strokeWidth="4" />

        <path
          d="M 275 295
             C 280 310, 272 315, 275 325
             C 278 335, 267 345, 273 360
             C 275 365, 272 375, 275 385
             C 278 395, 268 400, 274 415"
          fill="none"
          stroke="#facc15"
          strokeWidth="11"
        />
        <circle cx="274" cy="415" r="7" fill="#facc15" stroke="#000000" strokeWidth="4" />

        {/* 'A' in Dark Navy Blue */}
        <path
          d="M 315 210 
             L 336 125 
             L 357 210"
          fill="none"
          stroke="#1e3a8a"
          strokeWidth="26"
        />
        <line
          x1="322"
          y1="180"
          x2="350"
          y2="180"
          stroke="#1e3a8a"
          strokeWidth="22"
        />
      </g>

      {/* Outer Fine Highlight Line */}
      <circle cx="256" cy="256" r="231" stroke="#000000" strokeWidth="1.5" fill="none" opacity="0.3" />

      {/* Gradients and Filters Definition */}
      <defs>
        {/* Radiant, rich and professional green globe theme gradient */}
        <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%" fx="35%" fy="35%">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="65%" stopColor="#16a34a" />
          <stop offset="100%" stopColor="#14532d" />
        </radialGradient>
      </defs>
    </svg>
  );
}
