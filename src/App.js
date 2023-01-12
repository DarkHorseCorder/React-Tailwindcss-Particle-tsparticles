import logo from './logo.svg';
import logo2 from './logo2.svg';
import LineIcon from "react-lineicons";
import Particles from "react-tsparticles";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="App">
      <footer id="footer" className='relative z-10 footer-area'>
      <div className="-z-50 footer-bg bg-cover absolute w-full h-full lg:bg-auto lg:bg-bottom lg:bg-cover bottom-0 left-0  bg-center bg-[url('/img/footer_bg.svg')]">
      <Particles
        className='w-full lg:w-auto h-full lg:h-auto'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#00cc00",
            },
          },
          fpsLimit: 60,
          fullScreen: {
            enable: false,
            zIndex: 0
        },
        particles: {
            number: {
                value: 20,
                density: {
                    enable: false,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#ffffff"
                },
                polygon: {
                    nb_sides: 6
                },
                image: {
                    src: "",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.3,
                random: true,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                }
            },
            size: {
                value: 39.45738208161363,
                random: true,
                anim: {
                    enable: true,
                    speed: 10,
                    size_min: 40,
                    sync: false
                }
            },
            line_linked: {
                enable: false,
                distance: 200,
                color: "#ffffff",
                opacity: 1,
                width: 2
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false,
                    mode: "grab"
                },
                onclick: {
                    enable: false,
                    mode: "push"
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
          detectRetina: true,
        }}
      />
      </div>
      <div className="container mx-auto lg:pt-0">
        <div className="footer-widget text-center lg:text-left text-white">
          <div className="lg:flex lg:flex-wrap lg:row">
            <div className="md:w-3/5 lg:w-2/6 pt-96 lg:pt-0">
              <div className="mt-12 footer-about wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                <a className="inline-block mb-8 logo" href="#">
                  <img src={logo2} alt="logo" className="w-40"></img>
                </a>
                <p className="pb-10 pr-10 leading-snug text-white">
                  I have build this React.js and Tailwind className
                  For moving particles, I have used react-tsparticles module.
                </p>
                <ul className="flex footer-social justify-center lg:justify-start">
                  <li><a href="#" className='mr-5'><i className="lni lni-facebook-filled text-2xl"></i></a></li>
                  <li><a href="#" className='mr-5'><i className="lni lni-twitter-filled"></i></a></li>
                  <li><a href="#" className='mr-5'><i className="lni lni-instagram-filled"></i></a></li>
                  <li><a href="#" className='mr-5'><i className="lni lni-linkedin-original"></i></a></li>
                </ul>
              </div> 
            </div>
            <div className="sm:w-2/3 md:w-3/5 lg:w-2/6">
              <div className="flex flex-wrap row">
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div className="mt-12 link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.4s">
                    <div className="footer-title">
                      <h4 className="mb-8 text-2xl font-bold text-white">Quick Link</h4>
                    </div>
                    <ul className="link">
                      <li className='my-1'><a href="#">Road Map</a></li>
                      <li className='my-1'><a href="#">Privacy Policy</a></li>
                      <li className='my-1'><a href="#">Refund Policy</a></li>
                      <li className='my-1'><a href="#">Terms of Service</a></li>
                      <li className='my-1'><a href="#">Pricing</a></li>
                    </ul>
                  </div> 
                </div>
                <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                  <div className="mt-12 link-wrapper wow fadeIn" data-wow-duration="1s" data-wow-delay="0.6s">
                    <div className="footer-title">
                      <h4 className="mb-8 text-2xl font-bold text-white">Resources</h4>
                    </div>
                    <ul className="link">
                      <li className='my-1'><a href="#">Home</a></li>
                      <li className='my-1'><a href="#">Page</a></li>
                      <li className='my-1'><a href="#">Portfolio</a></li>
                      <li className='my-1'><a href="#">Blog</a></li>
                      <li className='my-1'><a href="#">Contact</a></li>
                    </ul>
                  </div> 
                </div>
              </div>
            </div>
            <div className="sm:w-1/3 md:w-2/5 lg:w-2/6">
              <div className="mt-12 footer-contact wow fadeIn" data-wow-duration="1s" data-wow-delay="0.8s">
                <div className="footer-title">
                  <h4 className="mb-8 text-2xl font-bold text-white">Contact out_mode</h4>
                </div>
                <ul className="contact">
                  <li className='my-1'>+1 8603485504</li>
                  <li className='my-1'>dreamfullstack1027@gmail.com</li>
                  <li className='my-1'>github.com/DarkHorseCorder</li>
                </ul>
              </div> 
            </div>
          </div> 
        </div> 
        <div className="py-4 lg:py-8 border-t border-gray-200 footer-copyright">
          <p className="text-white">
              Template by <a className="duration-300 hover:text-theme-color-2" href="#" rel="nofollow" target="_blank">DarkHorseCorder</a>
          </p>
        </div>
      </div>
      
      </footer>
    </div>
  );
}

export default App;
