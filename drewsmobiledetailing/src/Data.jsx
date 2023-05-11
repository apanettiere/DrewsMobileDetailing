import logo from "./assets/logo.png";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

import service1 from "./assets/service1.png";
import service2 from "./assets/service2.png";
import service3 from "./assets/service3.png";
import service4 from "./assets/service4.png";
import service5 from "./assets/service5.png";

import boat1 from "./assets/boat1.png";
import boat2 from "./assets/boat2.png";
import boat3 from "./assets/service1.png";
import boat4 from "./assets/service2.png";

import image1 from "./assets/service1.png";
import image2 from "./assets/service2.png";

export const navlogo = [logo];

export const navLinks = [
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "cars",
    link: "Cars",
  },
  {
    id: 4,
    href: "aircraft",
    link: "Aircraft",
  },
  {
    id: 5,
    href: "boats",
    link: "Boats",
  },
  {
    id: 6,
    href: "gallery",
    link: "Gallery",
  },
  {
    id: 7,
    href: "free quote",
    link: "Free Quote",
  },
];

export const services = [
  {
    id: 1,
    image: [service1],
    title: (
      <p>
        Wash & Wax
        <br />
        <span className="font-bold text-sm">
          Pricing:
          <br />
          Sedans- $135
          <br />
          SUV/Pickup Truck- $165
          <br />
          Large/Work trucks- $180-220
        </span>
      </p>
    ),
    content: (
      <p>
        -Foam Cannon
        <br />
        -Windows Cleaned
        <br />
        -Rims & Wheel Wells Cleaned
        <br />
        -Tire Shine
        <br />
        -Door Jambs Cleaned
        <br />
        -Clay Bar
        <br />
        -Ceramic Wax
        <br />
        *Evaluation & Recommendation Upon Arrival*
      </p>
    ),
  },

  {
    id: 2,
    image: [service2],
    title: (
      <p>
        Wax & Basic Clean
        <br />
        <span className="font-bold text-sm">
          Pricing:
          <br />
          Sedans- $175
          <br />
          SUV/Pickup Truck- $195
          <br />
          Large/Work trucks- $215-285
        </span>
      </p>
    ),
    content: (
      <p className="text-sm">
        -Foam Cannon
        <br />
        -Windows Cleaned
        <br />
        -Rims & Wheel Wells Cleaned
        <br />
        -Tire Shine
        <br />
        -Claybar
        <br />
        Cermaic Wax
        <br />
        -Door Jambs Cleaned
        <br />
        -Interior Vacuum
        <br />
        -Interior Wipe Down
        <br />
        *Evaluation & Recommendation Upon Arrival*
        <br />
      </p>
    ),
  },
  {
    id: 3,
    image: [service3],
    title: (
      <p>
        Full Interior
        <br />
        <span className="font-bold text-sm">
          Pricing:
          <br />
          Sedans- $135
          <br />
          SUV/Pickup Truck- $165
          <br />
          Large/Work trucks- $185
        </span>
      </p>
    ),
    content: (
      <p>
        -Thorough Vacuum/Wipe Down
        <br />
        -UVA & UVB PH Balanced Protection spray
        <br />
        -Door Jambs Cleaned
        <br />
        -Glass Interior & Exterior Cleaned
        <br />
        -Plastics/Vinyls/Leathers Treated
        <br />
        *Evaluation & Recommendation Upon Arrival*
      </p>
    ),
  },
  {
    id: 4,
    image: [service4],
    title: (
      <p>
        Full Detail
        <br />
        <span className="font-bold text-sm">
          Pricing:
          <br />
          Sedans- $240
          <br />
          SUV/Pickup Truck- $260
          <br />
          Large/Work trucks- $280-400
        </span>
      </p>
    ),
    content: (
      <p>
        -Foam Cannon
        <br />
        -Windows Cleaned
        <br />
        -Interior Vacuum & Complete Wipe Down With An All-Purpose Cleaner
        <br />
        -Plastics/Vinyls/Leathers Treated
        <br />
        -Rims & Wheel Wells Cleaned
        <br />
        -Tire Shine
        <br />
        -Remove Small stains
        <br />
        -Door Jambs Cleaned
        <br />
        -Clay Bar & Wax
        <br />
        *Evaluation & Recommendation Upon Arrival*
      </p>
    ),
  },
  {
    id: 5,
    image: [service5],
    title: (
      <p>
        Full Interior & Basic Wash
        <br />
        <span className="font-bold text-sm">
          Pricing:
          <br />
          Sedans- $175
          <br />
          SUV/Pickup Truck- $195 *$30 extra for shampooing carpets/seats*
        </span>
      </p>
    ),
    content: (
      <p>
        -Thorough Vacuum/Wipe Down
        <br />
        -UVA & UVB PH Balanced Protection spray
        <br />
        -Door Jambs Cleaned
        <br />
        -Glass Interior & Exterior Cleaned
        <br />
        -Dash/seats treated
        <br />
        -Plastics/Vinyls/Leathers Treated
        <br />
        -Foam Cannon
        <br />
        -Windows Cleaned
        <br />
        -Rims & Wheel Wells Cleaned
        <br />
        -TireShine
        <br />
        -Door jambs Cleaned
        <br />
        *Evaluation & Recommendation Upon Arrival*
      </p>
    ),
  },
];

export const boats = [
  {
    id: 1,
    image: [boat1],
    title: (
      <p>
        Detailed Wash
        <br />
        <span className="font-bold text-sm">
          Pricing:
          <br />
          $13/Foot
        </span>
      </p>
    ),
    content: (
      <p>
        -Complete wash (waterline up if in water)
        <br />
        -Cleaning under Hatches
        <br />
        -Cleaning gutter hatches when accessible
        <br />
        -Removes all salt, bird droppings, and all dirt
        <br />
        -Clean and dry windows and brightwork
        <br />
        -Remove Mildo from seats
      </p>
    ),
  },
  {
    id: 2,
    image: [boat2],
    title: (
      <p>
        Wash, Wax, and Polish
        <br />
        <span className="font-bold text-sm">
          Pricing:
          <br />
          $32/Foot
        </span>
      </p>
    ),
    content: (
      <p>
        -Includes everything in wash and wax
        <br />
        -Will Polish all gelcoat surfaces (waterline up if in water)
      </p>
    ),
  },
  {
    id: 3,
    image: [boat3],
    title: (
      <p>
        Wash and Wax
        <br />
        <span className="font-bold text-sm">
          Pricing:
          <br />
          $18/Foot
        </span>
      </p>
    ),
    content: (
      <p>
        -Includes everything from detailed wash
        <br />
        -Ceramic wax on hull and topside (waterline up if in water)
        <br />
        -Wax will last 4-5 months in exposed conditions
      </p>
    ),
  },
  {
    id: 4,
    image: [boat4],
    title: (
      <p>
        Polish and Wax Exterior only
        <br />
        <span className="font-bold text-sm">
          Pricing:
          <br />
          $32/Foot
        </span>
      </p>
    ),
    content: (
      <p>
        -Complete wash (waterline up if in water)
        <br />
        -Will polish hull
        <br />
        -Finish off with a ceramic wax
      </p>
    ),
  },
];

export const images = [
  {
    id: 1,
    image: image1,
  },
  {
    id: 2,
    image: image2,
  },
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
