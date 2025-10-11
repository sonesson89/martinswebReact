import moment from "moment";

const age = moment("19890906", "YYYYMMDD").fromNow().match(/[0-9]{1,2}/);

function Bio() {
  return (
    <div className="mainPadding">
      <div id="socialMediaIconsContainer">
        <span id="previewTitle"></span>
        <div id="linksInnerContainer">
          <a href="http://se.linkedin.com/pub/martin-sonesson/47/b65/200" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a>
          <a href="http://www.github.com/sonesson89" target="_blank"><i className="fab fa-github fa-3x"></i></a>
          {/* <a href="https://twitter.com/Martin_Sonesson" target="_blank"><i className="fab fa-twitter fa-3x"></i></a> */}
          <a href="http://stackoverflow.com/users/1408603/martingo89" target="_blank"><i className="fab fa-stack-overflow fa-3x"></i></a>
          <a href="https://www.instagram.com/sonesson.mini.painting/" target="_blank"><i className="fab fa-instagram fa-3x"></i></a>
          <a href="https://dribbble.com/martinsonesson" target="_blank"><i className="fab fa-dribbble fa-3x"></i></a>
          <a href="http://martinsonesson.wordpress.com" target="_blank"><i className="fab fa-wordpress fa-3x"></i></a>
          <a href="https://cults3d.com/en/users/martinsonesson/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 591.00 564.00" style={{ verticalAlign: '-0.5em' }}>
              <path d="M 114.21 191.90   C 115.65 179.35 115.90 173.21 118.19 163.88   C 119.79 157.36 120.70 152.16 122.72 146.55   Q 128.78 129.80 129.47 128.21   Q 130.55 125.72 137.72 112.14   Q 140.84 106.23 143.52 102.45   Q 146.26 98.58 149.91 93.09   Q 152.69 88.91 156.02 85.26   Q 159.60 81.34 162.58 77.75   C 168.03 71.17 177.38 63.42 182.47 58.99   Q 184.62 57.12 186.96 55.49   Q 197.09 48.42 197.60 48.06   Q 204.07 43.45 208.22 41.52   Q 212.82 39.37 217.09 36.87   Q 220.90 34.63 226.15 32.66   Q 234.79 29.41 237.11 28.47   Q 243.70 25.80 250.63 24.31   Q 253.88 23.61 259.79 21.99   C 266.49 20.16 274.84 19.67 280.41 18.80   C 288.38 17.56 296.70 17.93 305.53 18.01   C 312.46 18.08 318.41 19.15 324.91 19.77   Q 331.41 20.39 338.59 22.32   Q 343.23 23.58 347.62 24.52   C 354.66 26.03 359.85 28.36 368.55 31.66   Q 374.53 33.93 378.51 36.03   C 385.99 39.97 393.21 43.42 399.74 48.06   Q 406.41 52.80 410.65 55.65   Q 412.54 56.92 414.07 58.29   Q 420.75 64.31 424.31 67.35   Q 429.26 71.57 432.58 75.46   Q 435.58 78.99 440.09 83.93   C 445.40 89.74 449.04 96.14 453.82 102.53   Q 456.03 105.49 458.59 110.35   C 461.21 115.30 466.38 124.50 468.90 131.25   Q 471.52 138.23 472.86 141.67   C 475.62 148.75 477.09 155.68 479.20 164.34   Q 480.88 171.19 481.53 177.35   Q 482.16 183.30 483.11 190.49   A 2.29 2.28 -75.0 0 0 483.99 192.02   Q 490.48 196.96 494.10 199.58   Q 499.45 203.44 504.13 207.85   Q 505.42 209.06 513.40 216.72   Q 516.96 220.14 520.26 224.14   Q 521.70 225.89 526.69 231.95   Q 531.68 238.02 535.15 243.65   C 538.99 249.87 542.45 254.69 545.13 260.46   Q 545.49 261.24 550.68 272.28   Q 553.03 277.28 554.36 281.49   Q 555.85 286.20 557.49 290.86   Q 560.03 298.08 561.34 304.95   C 562.73 312.24 564.20 317.28 564.71 324.14   Q 564.93 327.01 565.57 334.67   Q 566.14 341.59 565.86 348.60   Q 565.58 355.57 565.51 357.89   C 565.30 366.02 563.52 374.27 562.47 381.38   Q 561.78 386.11 559.88 392.41   Q 558.09 398.37 556.71 403.33   C 554.96 409.59 551.66 416.21 549.52 421.59   Q 546.73 428.58 543.11 434.44   Q 541.40 437.20 538.34 442.79   C 535.04 448.81 530.02 454.62 526.46 459.68   Q 523.14 464.41 517.66 470.08   Q 512.65 475.28 510.82 477.30   C 506.23 482.35 501.71 485.54 495.19 490.89   Q 487.97 496.81 483.10 499.69   Q 479.12 502.04 474.63 504.98   Q 471.45 507.07 465.86 509.78   Q 460.15 512.56 455.94 514.53   Q 449.39 517.60 443.13 519.64   C 436.61 521.77 431.55 523.68 425.50 524.94   Q 413.59 527.42 413.51 527.44   C 405.73 529.23 399.64 529.21 390.43 530.09   Q 386.27 530.49 380.58 530.28   C 372.48 529.97 363.25 529.89 356.28 528.58   C 350.20 527.44 343.02 526.74 337.09 524.95   Q 331.90 523.39 324.30 521.29   Q 319.43 519.94 311.94 516.69   Q 305.59 513.93 299.86 511.49   Q 299.21 511.21 298.56 511.48   Q 291.46 514.42 284.82 517.35   Q 279.44 519.72 276.77 520.53   Q 270.45 522.43 263.81 524.42   Q 256.45 526.63 250.66 527.48   Q 243.97 528.47 240.83 529.07   C 233.59 530.44 225.69 530.36 219.25 530.76   Q 212.88 531.15 204.89 530.44   C 196.79 529.73 192.26 529.75 185.79 528.34   Q 183.33 527.80 174.59 526.06   Q 167.90 524.72 163.74 523.25   Q 158.41 521.36 152.99 519.71   Q 147.66 518.08 140.50 514.64   Q 133.82 511.43 132.14 510.71   Q 127.89 508.91 123.90 506.33   Q 120.44 504.09 112.27 498.97   Q 107.96 496.27 104.31 493.25   Q 100.43 490.04 96.50 486.88   Q 89.75 481.45 87.65 479.08   C 82.56 473.30 77.17 468.72 72.87 462.83   Q 70.31 459.33 66.14 453.95   Q 61.56 448.03 58.16 441.82   Q 55.89 437.66 53.31 433.40   C 49.78 427.56 47.35 420.72 44.70 414.89   Q 41.79 408.47 39.94 401.28   C 38.50 395.71 35.98 388.89 35.09 382.63   Q 34.40 377.82 33.19 371.04   C 31.79 363.19 31.93 354.72 31.51 347.32   C 31.15 340.86 32.12 334.52 32.50 327.97   Q 32.83 322.31 34.56 313.64   C 35.81 307.36 36.85 300.37 38.86 294.80   Q 40.70 289.71 42.21 284.80   Q 44.39 277.71 47.72 271.16   Q 49.78 267.11 51.89 262.23   C 54.39 256.45 57.86 251.67 62.36 244.60   Q 66.93 237.43 70.56 233.16   Q 73.44 229.76 76.50 225.88   C 81.01 220.16 85.91 215.86 92.36 209.74   Q 98.00 204.39 103.04 200.76   Q 108.87 196.56 113.75 192.73   A 1.22 1.19 -16.6 0 0 114.21 191.90   Z   M 260.65 319.75   A 0.15 0.15 0.0 0 1 260.65 320.01   L 199.80 356.26   A 3.26 3.25 47.5 0 1 196.22 356.10   Q 190.73 352.11 183.28 346.51   C 178.75 343.11 174.24 338.55 170.55 335.21   Q 165.91 331.03 160.97 325.23   C 155.52 318.84 152.10 315.27 148.70 310.02   Q 146.34 306.39 143.74 302.75   Q 140.80 298.64 136.97 291.35   C 133.57 284.86 130.84 280.16 128.78 274.64   Q 126.85 269.45 125.56 266.33   Q 123.19 260.60 121.66 254.81   Q 119.18 245.47 118.59 242.99   A 0.21 0.21 0.0 0 0 118.24 242.90   C 112.91 248.33 107.49 253.60 103.47 259.49   C 99.91 264.71 96.04 269.40 93.04 275.19   C 90.96 279.22 86.21 287.24 84.32 293.41   Q 83.25 296.91 81.61 300.94   C 79.04 307.22 77.94 313.67 76.24 322.00   Q 75.27 326.80 74.91 331.65   Q 74.70 334.49 74.13 343.66   C 73.73 349.87 74.63 354.81 74.90 361.02   C 75.22 368.16 77.30 375.40 78.68 382.55   C 80.01 389.45 83.08 395.93 85.36 402.50   C 87.08 407.44 90.36 412.53 92.86 417.51   C 96.14 424.07 100.93 429.95 105.21 435.94   C 109.49 441.92 113.95 445.91 119.83 451.85   Q 123.10 455.16 126.40 457.58   Q 131.71 461.47 132.99 462.63   Q 136.70 465.97 142.83 469.25   Q 144.26 470.02 151.04 474.03   C 157.23 477.68 161.77 479.05 171.12 482.79   C 175.79 484.65 180.12 485.40 185.61 486.80   Q 191.69 488.34 196.62 488.97   Q 202.30 489.70 209.40 490.36   C 215.27 490.91 220.16 490.49 226.97 490.33   Q 233.02 490.20 240.02 488.86   Q 245.18 487.87 248.85 487.35   Q 252.56 486.82 257.49 485.14   Q 260.22 484.22 270.95 480.71   Q 272.91 480.07 285.35 473.90   C 290.47 471.36 294.54 468.07 299.28 465.09   C 305.90 460.93 310.78 456.06 317.17 450.43   C 321.45 446.65 324.83 441.88 328.55 437.79   C 333.26 432.61 338.06 424.56 341.34 419.33   C 345.01 413.48 346.83 408.77 350.37 400.78   Q 352.72 395.48 354.05 390.58   Q 355.98 383.47 357.70 377.88   Q 357.89 377.26 357.33 376.93   L 338.82 366.24   Q 338.38 365.99 338.38 365.49   L 338.38 320.37   Q 338.38 319.80 338.91 319.99   Q 340.76 320.65 345.50 323.48   Q 371.09 338.76 396.62 354.14   Q 399.46 355.85 400.60 356.68   Q 401.01 356.98 400.95 357.48   C 399.94 365.65 399.42 374.38 397.65 381.99   Q 396.00 389.12 395.24 392.52   C 393.66 399.65 391.12 406.00 388.39 413.58   C 386.38 419.18 383.65 424.21 381.26 429.36   Q 378.97 434.29 374.97 440.67   C 370.98 447.04 368.74 451.10 364.90 455.80   C 361.05 460.51 356.07 467.33 351.44 471.85   Q 346.06 477.12 340.30 482.98   A 0.49 0.49 0.0 0 0 340.55 483.80   Q 347.05 485.17 352.26 486.49   Q 359.80 488.42 364.09 488.56   Q 364.41 488.57 374.39 489.56   C 381.20 490.23 387.84 489.58 396.27 489.18   C 401.75 488.91 407.30 487.41 412.71 486.47   Q 419.64 485.26 424.80 483.40   Q 428.11 482.20 432.96 480.67   Q 436.23 479.64 440.86 477.34   Q 443.95 475.81 453.37 471.08   C 458.14 468.69 461.96 465.46 466.37 462.68   C 472.94 458.55 477.87 453.54 484.82 447.05   C 489.00 443.14 491.36 439.79 495.92 434.33   C 500.26 429.12 503.47 423.62 507.75 416.68   Q 510.27 412.60 511.79 409.07   C 514.85 401.99 517.99 395.73 519.75 389.06   Q 520.99 384.35 522.45 379.32   C 524.28 373.02 525.18 363.58 525.88 358.50   C 526.66 352.87 526.27 348.22 526.27 341.22   Q 526.28 333.61 525.45 329.39   Q 524.79 326.03 524.08 319.97   Q 523.57 315.62 522.07 310.64   Q 519.82 303.13 518.59 298.77   C 517.15 293.65 513.84 287.34 512.12 283.33   Q 509.94 278.25 506.15 272.22   C 502.06 265.72 499.57 261.21 495.48 256.61   Q 492.90 253.70 489.96 250.07   Q 486.55 245.87 481.00 240.90   C 474.66 235.21 472.01 232.44 466.90 229.14   Q 464.27 227.45 460.26 224.65   C 453.95 220.26 447.83 217.70 440.17 213.89   C 435.01 211.32 429.83 209.88 423.82 207.91   Q 416.05 205.36 411.18 204.68   C 404.85 203.79 399.00 202.23 392.76 202.16   Q 387.91 202.10 381.58 201.73   C 376.27 201.41 369.49 202.44 364.23 203.00   Q 356.50 203.82 351.39 205.19   Q 343.80 207.22 338.63 208.40   A 0.66 0.65 -7.5 0 0 338.12 209.06   L 338.68 230.69   A 1.67 1.66 74.0 0 1 337.86 232.18   L 299.77 254.87   A 1.49 1.49 0.0 0 1 297.52 253.59   L 297.52 181.49   Q 297.52 180.98 297.98 180.78   Q 302.06 179.03 312.75 174.31   Q 317.61 172.17 321.41 171.08   Q 324.64 170.15 330.24 168.32   C 337.40 166.00 345.05 164.79 352.89 163.28   C 359.80 161.95 364.62 161.90 374.31 161.22   C 380.62 160.78 386.49 161.34 392.10 161.45   Q 398.82 161.60 405.35 162.69   C 410.84 163.62 419.31 164.64 426.90 166.85   Q 429.69 167.66 440.14 170.53   A 0.42 0.42 0.0 0 0 440.65 170.00   Q 438.10 161.62 436.17 154.99   Q 434.83 150.41 433.48 147.77   Q 431.63 144.18 430.23 140.67   C 427.55 133.93 422.83 127.48 419.03 121.34   Q 416.88 117.86 414.18 114.71   C 409.76 109.55 404.43 102.85 399.51 98.62   Q 394.69 94.48 391.40 91.44   C 387.49 87.82 382.45 84.89 377.11 81.32   Q 371.79 77.78 365.90 75.01   Q 359.40 71.95 357.35 70.93   C 351.76 68.18 347.70 67.24 341.03 65.04   C 334.10 62.76 326.88 61.78 319.65 60.42   Q 316.02 59.74 310.80 59.54   C 303.08 59.23 296.83 58.63 290.42 59.49   Q 286.41 60.03 281.75 60.36   Q 276.67 60.72 268.94 62.65   C 260.81 64.69 256.46 65.39 251.16 67.74   Q 247.54 69.34 243.57 70.81   C 236.25 73.54 229.65 77.85 223.14 81.45   Q 219.57 83.42 216.26 86.10   Q 212.17 89.40 209.69 91.21   Q 205.23 94.47 200.31 99.37   C 196.47 103.20 191.14 108.36 187.63 113.21   Q 185.57 116.07 180.98 122.20   C 177.18 127.29 175.17 131.68 171.81 137.70   Q 169.00 142.72 166.28 150.02   Q 163.63 157.12 163.02 158.67   C 160.91 164.08 160.24 168.85 158.74 175.62   Q 156.98 183.58 156.72 188.55   Q 156.48 193.20 156.02 197.84   C 155.39 204.25 156.44 213.94 156.65 218.28   C 156.92 223.94 158.00 227.92 159.44 235.05   Q 160.97 242.63 162.77 247.34   Q 164.37 251.55 165.73 255.96   Q 166.83 259.53 169.31 264.33   C 171.65 268.84 175.52 277.15 179.34 282.37   C 183.83 288.51 187.29 294.38 192.29 299.29   Q 195.66 302.60 200.02 307.63   A 1.21 1.20 54.1 0 0 201.54 307.88   L 219.09 297.42   A 2.83 2.82 44.5 0 1 221.95 297.40   L 260.65 319.75   Z"/>
            </svg>
          </a>
          {/*
            <a href="http://www.instagram.com/martin.sonesson" target="_blank"><i className="fab fa-instagram fa-3x"></i></a>
            <a href="http://towelie89.deviantart.com/" target="_blank"><i className="fab fa-deviantart fa-3x"></i></a>
            <a href="https://www.twitch.tv/towelie89/profile/highlights" target="_blank"><i className="fab fa-twitch fa-3x"></i></a>
          */}
        </div>
      </div>
      <div className="mainContentItem marginTopLarge" id="bioContent" style={{ width: '100%' }}>
        <div style={{ float: 'left', width: '100%', textAlign: 'center' }}>
          <div className="table center">
            <div className="tableRow">

              <span className="tableRowCell center" id="avatarCell">
                <div className="profileAvatar">
                </div>
              </span>

              <span className="tableRowCell" id="informationCell">
                <div className="table center" style={{ backgroundColor: 'transparent' }}>
                  <div className="tableRow">
                    <span className="tableRowCell">
                      <p className="rowKeySpan" style={{ textAlign: 'left' }}>
                        Age
                      </p>
                    </span>
                    <span className="tableRowCell">
                      <p className="rowValueSpan">
                        {age}
                      </p>
                    </span>
                  </div>
                  <div className="tableRow">
                    <span className="tableRowCell">
                      <p className="rowKeySpan" style={{ textAlign: 'left' }}>
                        Location
                      </p>
                    </span>
                    <span className="tableRowCell">
                      <p className="rowValueSpan">
                        <a
                          href="https://www.google.se/maps/place/G%C3%B6teborg/@57.7019548,11.8936825,11z/"
                          target="_blank"
                        >
                          Gothenburg, Sweden
                        </a>
                      </p>
                    </span>
                  </div>
                  <div className="tableRow">
                    <span className="tableRowCell">
                      <p className="rowKeySpan" style={{ textAlign: 'left' }}>
                        Current employment
                      </p>
                    </span>
                    <span className="tableRowCell">
                      <p className="rowValueSpan">
                        IT-consultant, <a href="https://www.twoday.se/" target="_blank">twoday</a>
                      </p>
                    </span>
                  </div>
                </div>

              </span>
            </div>
          </div>
          <div className="mainContentItem" style={{ textAlign: 'center', padding: '20px 40px 20px 40px' }}>
            <p className="textBody">
              My name is Martin Sonesson and I'm a {age} year old software developer
              from Gothenburg. I have always been interested in
              computers, IT and software and I have been creating websites since the
              glorious days of Geocities and web 2.0. In 2009
              I started studying software engineering at Chalmers University of
              Technology. Three years later, in 2012, I did my
              bachelors thesis at ESAB. The thesis consisted of developing a tool
              for analyzing data traffic between
              components in an industrial welding system. More information about my
              bachelors thesis can be found <a href="projects/exjobb">here</a>.
              After three exciting and fun years at Chalmers I started my first job
              as a programmer at Cochlear Ltd where I
              helped develop a windows application used for calibrating hearing
              devices. I worked at Cochlear for a year and during
              that time I developed and learned a lot. Shortly after that I began
              working at Knowit as a consultant.
              <br />
              <br />
              Via Knowit I have worked about four years on a constulancy assignment
              at <a href="https://www.telia.se/privat" target="_blank">Telia</a>
              where I began as a purely frontend developer but
              later transitioned into becoming more of a full stack developer.
              During these three years I have developed a lot as a person
              and as a programmer. I've had the privilege of working with a lot of
              skilled colleagues in a big organization that requires
              good communication and collaboration skills. Also, on the frontend
              side specifically, I got used to working with very modern
              web technologies in an everchanging tech stack that requires keeping
              up with the fast evolution of the web.
              <br />
              <br />
              After my time at Knowit I switched employer to <a
                href="https://www.annevo.se/" target="_blank">Annevo</a> where I
              continued working
              as a consultant. My first assignment was at <a
                href="https://www.wirelesscar.com/" target="_blank">WirelessCar</a>
              where I stayed for about 2 years. At WirelessCar
              I spent most of my time working specifically on frontend development
              building web applications based on Angular and VueJs. After my time at
              WirelessCar I did a shorter
              consultancy assignment at <a href="https://www.barium.se/"
                target="_blank">Barium</a> for about 6 months. My time there was cut
              short due to unexpected changes to the project
              I was working on. I then began a new assignment at <a
                href="https://www.recordedfuture.com/" target="_blank">Recorded
                Future</a> where I am still working. The project that I am focusing
              on is developing a <a href="https://chrome.google.com/webstore/detail/recorded-future/cdblaggcibgbankgilackljdpdhhcine" target="_blank">browser extension</a> that is built using
              modern native Javascript syntax.
              <br />
              <br />
              I enjoy working on my own projects on my spare time, whereas this very
              website is one of those. Under the <a href="/projects">projects
                section</a>
              you can view some of my additional work with detailed explanations.
              You may also checkout my <a href="http://www.github.com/sonesson89" target="_blank">Github profile</a>.
              <br />
              <br />
              I am a passionate and friendly person. I am keen to learn new things
              and enjoy new challenges. I consider myself a
              creative person who enjoy creating things from scratch and
              understanding how they work. Challenging tasks that require
              me to come up with my own solutions in order to overcome a specific
              problem stimulates me significantly. Lately I've
              been more and more into webdevelopment in particular due to my newest
              employment and within that field I strive to become
              a full-stack developer, since I very much enjoy being able to do
              everything from wireframes and design to backend logic
              and database handling.
              <br />
              <br />
              In my spare time I enjoy <a href="/art">drawing</a>, gaming, movies,
              travelling, running, powerlifting and martial arts. I like to keep
              myself busy and try out new
              things.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;