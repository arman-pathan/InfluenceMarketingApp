import React, { Component } from "react";
import axios from "axios";
import "./LandingPage.css";
import WOW from "wow.js";
import smallcard from "./Images/social15.jpg";
import { MY_ROLE, UserRoles } from "../../utils/Constants";
import Footer from "../Common/Footer";
import PropTypes from "prop-types";
//import {initpage} from "./scripts";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    const wow = new WOW();

    wow.init();
  }
  render() {
    return (
      <div>
        <nav
          class="navbar fixed-top navbar-expand-lg navbar-light scrolling-navbar"
          style={{ backgroundColor: "aliceblue" }}
        >
          <div class="container">
            <a class="navbar-brand" href="/" target="_blank">
              <strong
                class="wow fadeInLeftBig"
                data-wow-duration="10s"
                style={{ color: "black" }}
              >
                TOGETHER
              </strong>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" target="_blank">
                    About
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#" target="_blank">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*navbar ends*/}
        <header class="">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 hidden-xs">
                <div class="row">
                  <div class="col-sm-5">
                    <div class="md-form">
                      <i class="fas fa-envelope prefix grey-text"></i>
                      <input
                        type="text"
                        id="form2"
                        class="form-control"
                        placeholder="Email"
                      />
                      {/* <label for="form2"> Email</label> */}
                    </div>
                  </div>
                  <div class="col-sm-5">
                    <div class="md-form">
                      <i class="fas fa-key prefix grey-text"></i>
                      <input
                        type="password"
                        id="form2"
                        class="form-control"
                        placeholder="Password"
                      />
                      {/* <label for="form2"> Password</label> */}
                    </div>
                  </div>
                  <div class="col-sm-2">
                    <div class="md-form">
                      <button class="btn btn-success ">Login</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="col-sm-8">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/mdbootstrap"
                      class="nav-link"
                      target="_blank"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://twitter.com/MDBootstrap"
                      class="nav-link"
                      target="_blank"
                    >
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/mdbootstrap/bootstrap-material-design"
                      class="nav-link border border-light rounded"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin mr-2"></i>Linkedin
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </header>
        <div
          class="masthead"
          //   class="view full-page-intro"
          //   style={{
          //     "background-image":
          //       "url('https://mdbootstrap.com/img/Photos/Others/images/78.jpg')",
          //     "background-repeat": "no-repeat",
          //     "background-size": "cover",
          //   }}
        >
          <div class="mask rgba-black-light d-flex justify-content-center align-items-center">
            <div class="container">
              <div class="row wow fadeIn">
                <div class="col-md-6 mb-4 white-text text-center text-md-left">
                  <br />
                  <br />
                  <br />
                  <h1 class="display-4 font-weight-bold">
                    <p>
                      <strong>
                        Helping small Businesses grow and connect!
                      </strong>
                    </p>
                  </h1>

                  <hr class="hr-light" />

                  <p class="mb-4 d-none d-md-block">
                    <strong>
                      Our application is mainly for social media influencers,
                      which allows them to connect to different sponsors. People
                      who are well-established in their career already have a
                      good number of fan-following. Our application targets the
                      people who are still in the process of increasing their
                      popularity through social media. We help the smallscale
                      brands to find the right influencers that they can afford.
                    </strong>
                  </p>

                  {/* <a
                    target="_blank"
                    href="https://mdbootstrap.com/education/bootstrap/"
                    class="btn btn-success btn-lg"
                  >
                    Already have an Account? Login!
                    <i class="fas fa-graduation-cap ml-2"></i>
                  </a> */}
                </div>

                <div class="col-md-6 col-xl-5 mb-4">
                  <div class="card">
                    <div class="card-body">
                      <form name="">
                        <h3 class="dark-grey-text text-center">
                          <strong
                            class="wow fadeInDown"
                            data-wow-duration="5s "
                          >
                            Create a New Account
                          </strong>
                        </h3>
                        <h5
                          class="text-center wow fadeInDown"
                          data-wow-delay="2s"
                          data-wow-duration="10s "
                        >
                          {" "}
                          It’s quick and easy!{" "}
                        </h5>
                        <hr />

                        <div class="md-form">
                          <i class="fas fa-user prefix grey-text"></i>
                          <input
                            type="text"
                            id="form3"
                            class="form-control"
                            placeholder="Name"
                          />

                          {/* <label for="form3">Your name</label> */}
                        </div>
                        <div class="md-form">
                          <i class="fas fa-envelope prefix grey-text"></i>
                          <input
                            type="text"
                            id="form2"
                            class="form-control"
                            placeholder="Email"
                          />
                          {/* <label for="form2">Your email</label> */}
                        </div>

                        <div class="md-form">
                          <i class="fas fa-key prefix grey-text"></i>
                          <input
                            type="password"
                            id="form2"
                            class="form-control"
                            placeholder="Password"
                          />
                          {/* <label for="form2">Your Password</label> */}
                        </div>

                        <div class="md-form">
                          <i class="fas fa-phone prefix grey-text"></i>
                          <input
                            type="text"
                            id="form8"
                            class="form-control"
                            placeholder="Phone Number"
                          ></input>
                          {/* <label for="form8">Phone Number</label> */}
                        </div>

                        <div class="text-center">
                          <button class="btn btn-success">
                            Create Account
                          </button>
                          <hr />

                          <div class="custom-control custom-switch">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customSwitch1"
                            />
                            <label
                              class="custom-control-label"
                              for="customSwitch1"
                            >
                              <b> I am a Sponsor </b>
                            </label>
                          </div>

                          {/* <input
                            type="checkbox"
                            checked
                            id="checkbox1"
                            data-toggle="toggle"
                            data-on="Sponsor"
                            data-off="Influencer"
                            data-onstyle="default"
                            data-offstyle="danger"
                            data-width="150"
                            data-height="30"
                          /> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main>
          <div class="container ">
            <section class="mt-5 wow fadeIn">
              <div class="row">
                <div class="col-md-6 mb-4">
                  <img
                    src={smallcard}
                    class="img-fluid z-depth-1-half"
                    alt=""
                  />
                </div>

                <div class="col-md-6 mb-4">
                  <h3 class="h3 mb-3 wow bounceIn">
                    Our application is aimed at connecting social media
                    influencers with different small businesses or sponsors.
                  </h3>
                  <p>
                    People who are well-established in their career already have
                    a good number of fan-following. Our application targets the
                    people who are still in the process of increasing their
                    popularity through social media such as Twitter or
                    Instagram. We aim to help small-scale brands to be able to
                    find the influencers that they can afford.
                  </p>

                  <hr />
                </div>
              </div>
            </section>

            <hr class="my-5" />

            <section>
              <h3 class="h3 text-center mb-5">About Influence Marketing </h3>

              <div class="row wow fadeIn">
                <div class="col-lg-6 col-md-12 px-4">
                  <div class="row">
                    <div class="col-1 mr-3">
                      <i class="fas fa-code fa-2x indigo-text"></i>
                    </div>
                    <div class="col-10">
                      <h5 class="feature-title">
                        What is Influence Marketing?
                      </h5>
                      <p class="grey-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequatur expedita dignissimos ad eum iusto! Dolores
                        facilis neque incidunt dolorum sit nobis, officia
                        laboriosam consequuntur vero quasi dicta eum dolorem
                        possimus.
                      </p>
                    </div>
                  </div>

                  <div style={{ height: "30px" }}></div>

                  <div class="row">
                    <div class="col-1 mr-3">
                      <i class="fas fa-book fa-2x blue-text"></i>
                    </div>
                    <div class="col-10">
                      <h5 class="feature-title">How it works?</h5>
                      <p class="grey-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi voluptas ex maiores hic repellat enim quaerat
                        laboriosam harum facere perferendis aliquam temporibus
                        id inventore, modi commodi, expedita placeat asperiores
                        tempora.
                      </p>
                    </div>
                  </div>

                  <div style={{ height: "30px" }}></div>

                  <div class="row">
                    <div class="col-1 mr-3">
                      <i class="fas fa-graduation-cap fa-2x cyan-text"></i>
                    </div>
                    <div class="col-10">
                      <h5 class="feature-title">
                        Can anyone become an Influencer?
                      </h5>
                      <p class="grey-text">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Rerum laborum optio non repellendus officiis nemo
                        expedita inventore? Esse suscipit iure praesentium, at
                        ipsum odit necessitatibus aliquid, quibusdam eius sit
                        atque.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-6 col-md-12">
                  <p class="h5 text-center mb-4">
                    New to Influence Marketing?{" "}
                  </p>{" "}
                  <p>Watch our "5 min Quick Start" tutorial</p>
                  <div class="embed-responsive embed-responsive-16by9">
                    {/* <iframe
                      class="embed-responsive-item"
                      src="https://www.youtube.com/watch?v=popowMuKyjY"
                      allowfullscreen
                    ></iframe> */}

                    <iframe
                      width="1440"
                      height="540"
                      src="https://www.youtube.com/embed/popowMuKyjY"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>

            <hr class="my-5" />

            <section>
              <h2 class="my-5 h3 text-center">Features</h2>

              <div class="row features-small mb-5 mt-3 wow fadeIn">
                <div class="col-md-4">
                  <h2>
                    {" "}
                    <strong> Influencer </strong>{" "}
                  </h2>
                  <br />
                  <div class="row">
                    <div class="col-2">
                      <i class="fas fa-check-circle fa-2x indigo-text"></i>
                    </div>
                    <div class="col-10">
                      <h6 class="feature-title">Dashboard for Task History</h6>
                      <p class="grey-text">
                        We offer a full fledged dashboard which contains history
                        of tasks
                      </p>
                      <div style={{ height: "15px" }}></div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-2">
                      <i class="fas fa-check-circle fa-2x indigo-text"></i>
                    </div>
                    <div class="col-10">
                      <h6 class="feature-title">
                        Create and manage own profile
                      </h6>
                      <p class="grey-text">
                        Get your own profile page and advertise your interests
                        and level of marketing expertise. Get noticed by your
                        favorite sponsors.
                      </p>
                      <div style={{ height: "15px" }}></div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-2">
                      <i class="fas fa-check-circle fa-2x indigo-text"></i>
                    </div>
                    <div class="col-10">
                      <h6 class="feature-title">
                        Search available tasks posted in real time
                      </h6>
                      <p class="grey-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Porro provident quia consequatur id ex itaque
                        totam explicabo unde quibusdam nemo, alias repellat
                        nulla in expedita dolores quaerat magni earum debitis?
                      </p>
                      <div style={{ height: "15px" }}></div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-2">
                      <i class="fas fa-check-circle fa-2x indigo-text"></i>
                    </div>
                    <div class="col-10">
                      <h6 class="feature-title">Get Task Recommendations</h6>
                      <p class="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Fuga sint accusamus pariatur laudantium,
                        voluptates sapiente dolor temporibus, consequuntur
                        numquam sit exercitationem perferendis reprehenderit
                        consequatur nesciunt. Et molestiae alias similique iste.
                      </p>
                      <div style={{ height: "15px" }}></div>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 flex-center">
                  <img
                    src="https://mdbootstrap.com/img/Others/screens.png"
                    alt="MDB Magazine Template displayed on iPhone"
                    class="z-depth-0 img-fluid"
                  />
                </div>

                <div class="col-md-4 mt-2">
                  <h2>
                    {" "}
                    <strong> Sponsor </strong>{" "}
                  </h2>
                  <br />
                  <div class="row">
                    <div class="col-2">
                      <i class="fas fa-check-circle fa-2x indigo-text"></i>
                    </div>
                    <div class="col-10">
                      <h6 class="feature-title">Post a Task</h6>
                      <p class="grey-text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Perspiciatis nemo numquam velit. Harum ex labore
                        deleniti fuga sed sunt aspernatur expedita eum facilis
                        inventore ea, reiciendis, voluptatum laboriosam debitis
                        dolores!
                      </p>
                      <div style={{ height: "15px" }}></div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-2">
                      <i class="fas fa-check-circle fa-2x indigo-text"></i>
                    </div>
                    <div class="col-10">
                      <h6 class="feature-title">
                        Dashboard for all tasks offered
                      </h6>
                      <p class="grey-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sed dolorem consectetur est nobis. Debitis nostrum
                        suscipit laudantium consequatur fugiat? Tempore placeat
                        ut beatae earum maxime nesciunt quibusdam soluta ratione
                        obcaecati?
                      </p>
                      <div style={{ height: "15px" }}></div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-2">
                      <i class="fas fa-check-circle fa-2x indigo-text"></i>
                    </div>
                    <div class="col-10">
                      <h6 class="feature-title">Task Analysis</h6>
                      <p class="grey-text">
                        Get a detailed analysis summary of all the tasks in
                        progress and if the tasks are being completed
                        appropriately.
                      </p>
                      <div style={{ height: "15px" }}></div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-2">
                      <i class="fas fa-check-circle fa-2x indigo-text"></i>
                    </div>
                    <div class="col-10">
                      <h6 class="feature-title">List of Applied Applicants</h6>
                      <p class="grey-text">
                        See all the applicants that have applied to the task and
                        select the most qualified person for the job.
                      </p>
                      <div style={{ height: "15px" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <hr class="mb-5" />

            <section>
              <h2 class="my-5 h3 text-center">SEE MORE</h2>

              <div class="row features-small mt-5 wow fadeIn">
                <div class="col-xl-3 col-lg-6">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="fab fa-firefox fa-2x mb-1 indigo-text"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2 pl-3">
                      <h5 class="feature-title font-bold mb-1">ABCD</h5>
                      <p class="grey-text mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate ullam corrupti labore itaque, repellat, harum
                        in ipsam recusandae impedit numquam ratione repudiandae
                        quidem accusantium nostrum temporibus? Eos ducimus iusto
                        minus.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-6">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="fas fa-level-up-alt fa-2x mb-1 indigo-text"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <h5 class="feature-title font-bold mb-1">ABCD</h5>
                      <p class="grey-text mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consectetur voluptas natus iusto quo adipisci ratione
                        nesciunt numquam tempore voluptatem beatae, dolorem
                        molestiae! Nostrum at quas ullam reprehenderit esse
                        soluta recusandae!
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-6">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="fas fa-comments fa-2x mb-1 indigo-text"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <h5 class="feature-title font-bold mb-1">ABCD</h5>
                      <p class="grey-text mt-2">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Possimus architecto magnam reiciendis, sunt totam
                        sequi quidem aspernatur nisi sed voluptatibus hic
                        tempore alias. Ad eveniet tempora quas sit quo
                        laboriosam?
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-6">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="fas fa-code fa-2x mb-1 indigo-text"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <h5 class="feature-title font-bold mb-1">ABCD</h5>
                      <p class="grey-text mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id, perspiciatis unde dolor commodi quo veritatis harum,
                        totam, distinctio nemo earum aperiam quia eveniet animi
                        tenetur quam porro quis optio. Ipsa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row features-small mt-4 wow fadeIn">
                <div class="col-xl-3 col-lg-6">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="fas fa-cubes fa-2x mb-1 indigo-text"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <h5 class="feature-title font-bold mb-1">ABCD</h5>{" "}
                      <p class="grey-text mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia maxime illum adipisci quas laboriosam.
                        Quo reiciendis necessitatibus nulla vel earum aliquam
                        iure perspiciatis in quidem, voluptate sunt enim maxime
                        voluptatum?
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-6">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="fas fa-question fa-2x mb-1 indigo-text"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <h5 class="feature-title font-bold mb-1">ABCD</h5>
                      <p class="grey-text mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi quod ipsum doloribus earum vero! Optio mollitia
                        ipsam voluptatum, soluta quia tempora debitis possimus
                        consequuntur neque quos vel atque et odit!
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-6">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="fas fa-th fa-2x mb-1 indigo-text"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <h5 class="feature-title font-bold mb-1">ABCD</h5>{" "}
                      <p class="grey-text mt-2">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sed quasi nulla obcaecati. Hic voluptas tempora
                        libero soluta optio facilis, aperiam cum unde. Quisquam
                        illo iusto totam quia optio molestias doloribus?
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-6">
                  <div class="row">
                    <div class="col-2">
                      <i
                        class="far fa-file-code fa-2x mb-1 indigo-text"
                        aria-hidden="true"
                      ></i>
                    </div>
                    <div class="col-10 mb-2">
                      <h5 class="feature-title font-bold mb-1">ABCD</h5>
                      <p class="grey-text mt-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus officiis assumenda officia temporibus, esse
                        quod possimus voluptas corporis eum atque dolorum,
                        eligendi, eaque libero rerum vitae maiores tempore
                        excepturi modi!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Landing;
