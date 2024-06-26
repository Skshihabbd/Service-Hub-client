import Swal from "sweetalert2";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import { useState } from "react";
import Custom from "../../sharedcomponent/custom/Custom";
import Footer from "../../sharedcomponent/footer/Footer";
import TiTleMenu from "../../sharedcomponent/menu title/TiTleMenu";
import { Helmet } from "react-helmet";

const UserAddData = () => {
  const { users } = Custom();

  const [ServiceName, setnewData] = useState();

  const newdatasubmit = (e) => {
    setnewData(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    console.log(form);
    const ServiceArea = form.Area.value;

    const price = form.price.value;

    const description = form.details.value;
    const ServiceImage = form.photourl.value;
    const userImage = users?.photoURL;
    const username = users?.displayName;
    const useremail = users?.email;

    console.log(
      ServiceArea,
      price,
      useremail,
      username,
      userImage,
      description,
      ServiceImage,
      ServiceName
    );
    const Serviceinfo = {
      ServiceArea,
      price,
      useremail,
      username,
      userImage,
      description,
      ServiceImage,
      ServiceName,
    };
    console.log(Serviceinfo);
    fetch("https://server-shihab.vercel.app/usersenddata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Serviceinfo),
    })
      .then((res) => res.json())
      .then((info) => {
        if (info.acknowledged) {
          Swal.fire({
            title: "service added success!",
            text: " continue",
            icon: "success",
            confirmButtonText: "close",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Service Hub || useradddata</title>
      </Helmet>
      <Navbar></Navbar>
      <div>
        <TiTleMenu></TiTleMenu>
      </div>
      <div className="bg-[#F4F3F0]  ">
        <h1 className="text-center mb-10 text-3xl">
          Add User data to DataBase
        </h1>
        <p className="text-center w-4/6 mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <section className="p-6  mx-auto    dark:bg-gray-100 dark:text-gray-900">
          <form
            onSubmit={handleSubmit}
            className=" w-full   flex flex-col mx-auto space-y-12"
          >
            <fieldset className=" border-2 w-full gap-6 p-6  mx-auto rounded-md shadow-sm dark:bg-gray-50">
              <div className="grid grid-cols-6  gap-10 col-span-full  lg:col-span-full">
                <div className="col-span-full  ">
                  <div className="col-span-full">
                    <select
                      onChange={newdatasubmit}
                      required
                      className="select select-primary w-full max-w-xs"
                    >
                      <option disabled selected>
                        Service Name
                      </option>

                      <option value={"Personal training"}>
                        Personal training
                      </option>
                      <option value={"Group Fitness"}>Group Fitness</option>
                      <option value={"Nutrition Coaching"}>
                        Nutrition Coaching
                      </option>
                      <option value={"Gym Menberships"}>Gym Menberships</option>
                      <option value={"Speciallity Program"}>
                        Speciallity Program
                      </option>
                      <option value={"Wellness Service"}>
                        Wellness Service
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="username" className="text-sm">
                    Service Area
                  </label>
                  <input
                    required
                    id="username"
                    type="text"
                    name="Area"
                    placeholder="Enter Service location"
                    className="w-full h-full  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    price
                  </label>

                  <input
                    required
                    id="lastname"
                    type="number"
                    name="price"
                    placeholder="Enter price Taka"
                    className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>

                <div className="col-span-full sm:col-span-3 ">
                  <label htmlFor="email" className="text-sm">
                    Service description
                  </label>
                  <input
                    required
                    id="email"
                    type="text"
                    name="details"
                    placeholder="Enter Service description"
                    className="w-full rounded-md focus:ring  h-full  focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full  ">
                  <label htmlFor="email" className="text-sm">
                    Service PhotoUrl
                  </label>
                  <input
                    required
                    id="text"
                    type="text"
                    name="photourl"
                    placeholder="Enter photo URL"
                    className="w-full rounded-md focus:ring  h-full  focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
              </div>
            </fieldset>
            <button className="btn btn-block bg-black text-yellow-500">
              Add service
            </button>
          </form>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UserAddData;
