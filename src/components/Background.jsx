import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import $ from 'aos';





const BlobAnimation = () => {
  useEffect(() => {
    $.init();


    const employees = gsap.utils.toArray('.blob');
    const container = document.querySelector('.container-blobs');

    const random = gsap.utils.random;
    const employeeSize = 40;

    function randx() {
      return Math.floor(gsap.utils.random(0, window.innerWidth - employeeSize));
    }
    function randy() {
      return Math.floor(gsap.utils.random(0, window.innerHeight - employeeSize));
    }
    function randscale() {
      return gsap.utils.random(0.2, 2);
    }

    function wander(el) {
      let timeline = gsap.timeline({});

      timeline.to(el, {
        x: randx,
        y: randy,
        scale: randscale,
        ease: 'sine.inOut',
        duration: random(5, 5.8),
        onComplete: () => wander(el),
      });
    }

    gsap.utils.toArray('.blob').forEach(wander);
  }, []);

  return (
    <body>
  <div className="backgrounds overlay s-scroll-counter scroll-counter">
    <div className="container-blobs">
    <div className="blob-1 blob">
      <svg viewBox="0 0 500 500"
        width="100%" id="blobSvg">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(248, 155, 41)' }}></stop>
            <stop offset="100%" style={{ stopColor: 'rgb(255, 27, 107)' }}></stop>

          </linearGradient>
        </defs>
        <path fill="url(#gradient1)">
          <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
            values="M429.5,299.5Q386,349,350.5,399Q315,449,250.5,448.5Q186,448,118.5,421Q51,394,68,322Q85,250,90.5,194Q96,138,149.5,121.5Q203,105,251,102.5Q299,100,339.5,127.5Q380,155,426.5,202.5Q473,250,429.5,299.5Z;
                    M430.5,295.5Q375,341,338.5,375.5Q302,410,239.5,442.5Q177,475,129,424Q81,373,58,311.5Q35,250,79.5,204Q124,158,154,103Q184,48,251.5,42.5Q319,37,363,86.5Q407,136,446.5,193Q486,250,430.5,295.5Z;
                    M430,322Q448,394,381.5,422Q315,450,258,425Q201,400,130.5,394Q60,388,64.5,319Q69,250,98.5,205.5Q128,161,151.5,89.5Q175,18,244.5,35.5Q314,53,354,99Q394,145,403,197.5Q412,250,430,322Z;
                    M397.5,302Q393,354,350.5,391.5Q308,429,250,428.5Q192,428,141.5,397Q91,366,89.5,308Q88,250,105,203.5Q122,157,158,117Q194,77,258,52.5Q322,28,354,89.5Q386,151,394,200.5Q402,250,397.5,302Z;
                    M429.5,299.5Q386,349,350.5,399Q315,449,250.5,448.5Q186,448,118.5,421Q51,394,68,322Q85,250,90.5,194Q96,138,149.5,121.5Q203,105,251,102.5Q299,100,339.5,127.5Q380,155,426.5,202.5Q473,250,429.5,299.5Z">
          </animate>
        </path>
      </svg>
    </div>



    <div className="blob-2 blob">
      <svg viewBox="0 0 500 500"
        width="100%" id="blobSvg">
        <defs>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(18, 223, 171)' }}></stop>
        <stop offset="100%" style={{ stopColor: 'rgb(113, 188, 238)' }}></stop>
          </linearGradient>
        </defs>
        <path fill="url(#gradient2)">
          <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
            values="M429.5,299.5Q386,349,350.5,399Q315,449,250.5,448.5Q186,448,118.5,421Q51,394,68,322Q85,250,90.5,194Q96,138,149.5,121.5Q203,105,251,102.5Q299,100,339.5,127.5Q380,155,426.5,202.5Q473,250,429.5,299.5Z;
                    M430.5,295.5Q375,341,338.5,375.5Q302,410,239.5,442.5Q177,475,129,424Q81,373,58,311.5Q35,250,79.5,204Q124,158,154,103Q184,48,251.5,42.5Q319,37,363,86.5Q407,136,446.5,193Q486,250,430.5,295.5Z;
                    M430,322Q448,394,381.5,422Q315,450,258,425Q201,400,130.5,394Q60,388,64.5,319Q69,250,98.5,205.5Q128,161,151.5,89.5Q175,18,244.5,35.5Q314,53,354,99Q394,145,403,197.5Q412,250,430,322Z;
                    M397.5,302Q393,354,350.5,391.5Q308,429,250,428.5Q192,428,141.5,397Q91,366,89.5,308Q88,250,105,203.5Q122,157,158,117Q194,77,258,52.5Q322,28,354,89.5Q386,151,394,200.5Q402,250,397.5,302Z;
                    M429.5,299.5Q386,349,350.5,399Q315,449,250.5,448.5Q186,448,118.5,421Q51,394,68,322Q85,250,90.5,194Q96,138,149.5,121.5Q203,105,251,102.5Q299,100,339.5,127.5Q380,155,426.5,202.5Q473,250,429.5,299.5Z">
          </animate>
        </path>
      </svg>
    </div>
    <div className="blob-3 blob">
      <svg viewBox="0 0 500 500"
        width="100%" id="blobSvg">
        <defs>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgb(212, 172, 251)' }}></stop>
        <stop offset="100%" style={{ stopColor: 'rgb(184, 79, 206)' }}></stop>
          </linearGradient>
        </defs>
        <path fill="url(#gradient3)">
          <animate attributeName="d" dur="10000ms" repeatCount="indefinite"
            values="M429.5,299.5Q386,349,350.5,399Q315,449,250.5,448.5Q186,448,118.5,421Q51,394,68,322Q85,250,90.5,194Q96,138,149.5,121.5Q203,105,251,102.5Q299,100,339.5,127.5Q380,155,426.5,202.5Q473,250,429.5,299.5Z;
                    M430.5,295.5Q375,341,338.5,375.5Q302,410,239.5,442.5Q177,475,129,424Q81,373,58,311.5Q35,250,79.5,204Q124,158,154,103Q184,48,251.5,42.5Q319,37,363,86.5Q407,136,446.5,193Q486,250,430.5,295.5Z;
                    M430,322Q448,394,381.5,422Q315,450,258,425Q201,400,130.5,394Q60,388,64.5,319Q69,250,98.5,205.5Q128,161,151.5,89.5Q175,18,244.5,35.5Q314,53,354,99Q394,145,403,197.5Q412,250,430,322Z;
                    M397.5,302Q393,354,350.5,391.5Q308,429,250,428.5Q192,428,141.5,397Q91,366,89.5,308Q88,250,105,203.5Q122,157,158,117Q194,77,258,52.5Q322,28,354,89.5Q386,151,394,200.5Q402,250,397.5,302Z;
                    M429.5,299.5Q386,349,350.5,399Q315,449,250.5,448.5Q186,448,118.5,421Q51,394,68,322Q85,250,90.5,194Q96,138,149.5,121.5Q203,105,251,102.5Q299,100,339.5,127.5Q380,155,426.5,202.5Q473,250,429.5,299.5Z">
          </animate>
        </path>
      </svg>
    </div>
   
  </div>
  </div>

</body>
  );
};

export default BlobAnimation;

