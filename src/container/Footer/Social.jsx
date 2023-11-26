import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { FaSnapchatGhost } from "react-icons/fa";
import { BiSolidFilePdf } from "react-icons/bi";
import { saveAs } from "file-saver";

import code from "../../assets/snapcode.png";
import pdf from "../../assets/pdf/Hossin_Ramadan (1).pdf";

const Social = () => {
  const handleClick = () => {
    saveAs(code, "Snapcode");
  };

  const handleClickp = () => {
    saveAs(pdf, "Mypdf");
  };
  return (
    <div className='app__social-s'>
      <div className='code' onClick={handleClickp}>
        <BiSolidFilePdf />
      </div>
      <div onClick={handleClick} className='code'>
        <FaSnapchatGhost />
      </div>
      <div>
        <a
          href='https://www.linkedin.com/in/hossin-simo-832651254'
          target='_blank'>
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href='https://github.com/qwe2qwee' target='_blank'>
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Social;
