// instead of placing an <a><img/></a> tag on the screen you place a <Lightbox/> component.
// Render one of these for each lightbox image
// <Lightbox /> Attributes:
//    group = allows you to make multiple lightboxes on one page. If items have the same groupo, theyre in the same lightbox
//    aClass = the class on webflows link surrounding the image
//    imgClass = the class on webflows image
//    imgSrc = the url or path of the image

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Lightbox.css";
import SVG from "./SVG";
import * as LightboxActions from "../store/actions/lightbox";

let instancesCount = 0;
let direction = null;

const Lightbox = ({ aClass, imgClass, imgSrc, group }) => {
  const dispatch = useDispatch();
  const { open, index } = useSelector((state) => state.lightbox);
  const [id, setId] = useState();

  const setOpen = (val) => {
    dispatch(LightboxActions.setOpen(val));
    dispatch(LightboxActions.setOpenGroup(group));
    dispatch(LightboxActions.setIndex(id));
  };

  //   count how many instances exist
  useEffect(() => {
    instancesCount += 1;
    setId(instancesCount);
    return () => {
      instancesCount -= 1;
    };
  }, []);

  return (
    <>
      {open && id === index && <OpenLightbox src={imgSrc} onClose={() => setOpen(false)} index={index} group={group} />}
      <a className={aClass} onClick={() => setOpen(true)}>
        <img src={imgSrc} loading="lazy" alt="" className={imgClass} />
      </a>
    </>
  );
};

export const OpenLightbox = ({ src, onClose, index, group }) => {
  const dispatch = useDispatch();
  const { openGroup } = useSelector((state) => state.lightbox);

  //   handle navigation
  const handleNext = () => {
    direction = 1;
    let tmp = index + 1;
    if (tmp > instancesCount) tmp = 1;
    dispatch(LightboxActions.setIndex(tmp));
  };
  const handleBack = () => {
    direction = -1;
    let tmp = index - 1;
    if (tmp === 0) tmp = instancesCount;
    dispatch(LightboxActions.setIndex(tmp));
  };
  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  //   handle keyboards
  const keyDownHandler = (event) => {
    if (event.code === "Escape") {
      onClose();
    }
    if (event.code === "ArrowLeft") {
      handleBack();
    }
    if (event.code === "ArrowRight") {
      handleNext();
    }
  };

  //   handle ligthbox groupings
  useEffect(() => {
    if (group !== openGroup) {
      if (direction === 1) {
        handleNext();
      } else if (direction === -1) {
        handleBack();
      }
    }
  }, []);

  return (
    <div className="OpenLightbox" tabIndex={0}>
      <div className="arrow" onClick={handleBack}>
        <SVG type="arrow-left" />
      </div>
      <img src={src} loading="lazy" alt="" />
      <div className="arrow" onClick={handleNext}>
        <SVG type="arrow-right" />
      </div>
      <div className="close" onClick={onClose}>
        <SVG type="close" />
      </div>
    </div>
  );
};

export default Lightbox;
