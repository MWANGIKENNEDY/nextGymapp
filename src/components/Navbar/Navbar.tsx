import React from "react";

import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaDumbbell } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        {/* logo section */}

        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <FaDumbbell />
          <p>Kennedy</p>
          <p className=" text-secondary">Gym</p>
        </div>

        {/* menu section  */}

        {/* mobile hamberger section */}
      </div>
    </nav>
  );
};

export default Navbar;
