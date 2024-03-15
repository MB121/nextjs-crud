"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const isEdit = searchParams.get("isEdit");
  const isSearchID = searchParams.get("id");

  const [formInput, setFormInput] = useState({
    companyName: "",
    email: "",
    mobileNumber: "",
    password: "",
    country: "",
    state: "",
  });

  useEffect(() => {
    if (isEdit && isSearchID) {
      const formData = localStorage?.getItem("formData");
      if (formData) {
        const tempData = JSON.parse(formData);
        const filterData = tempData?.find((item) => item?.id == isSearchID);
        setFormInput(filterData);
      }
    }
  }, [isEdit, isSearchID]);

  const handleSubmitForm = () => {
    if (isEdit) {
      const formData = localStorage?.getItem("formData");
      if (formData) {
        const tempData = JSON.parse(formData);
        const indexOfData = tempData.findIndex(
          (item) => String(item.id) == String(isSearchID)
        );
        if (indexOfData != -1) {
          const tempData2 = tempData;
          tempData2.splice(indexOfData, 1, formInput);
          localStorage.setItem("formData", JSON.stringify(tempData2));
        }
      }
    } else {
      const formData = localStorage?.getItem("formData");
      if (formData) {
        const tempData = JSON.parse(formData);
        const newData = [...tempData, { ...formInput, id: Date.now() }];
        localStorage.setItem("formData", JSON.stringify(newData));
        setFormInput({
          companyName: "",
          email: "",
          mobileNumber: "",
          password: "",
          country: "",
          state: "",
        });
      } else {
        const newData = [{ ...formInput, id: Date.now() }];
        localStorage.setItem("formData", JSON.stringify(newData));
        setFormInput({
          companyName: "",
          email: "",
          mobileNumber: "",
          password: "",
          country: "",
          state: "",
        });
      }
    }
  };

  return (
    <div style={{ maxHeight: "100vh", overflow: "hidden" }}>
      <div className="grid grid-cols-12 lg:h-60">
        <div className="col-span-12 flex items-center lg:col-span-5 bg-primary border-b border-white border-solid pl-30">
          {" "}
          <Image
            src={
              "https://www.zoho.com/books/images/new/books-product-logo-white.svg"
            }
            alt="Logo"
            width={90}
            height={50}
            className="w-90 h-50"
          />
        </div>
        <div className="col-span-12 flex items-center lg:col-span-7 bg-white border-b border-gray border-solid pl-30 lg:pl-0 py-10 lg:py-0 lg:pr-30 lg:justify-end">
          <div className="text-gray-400 font-medium text-15">
            Already have a Zoho account? <a className="text-primary">Sign in</a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div
          className="col-span-12 hidden lg:block lg:col-span-5 bg-primary overflow-hidden relative"
          style={{ height: "calc(100vh - 60px)" }}
        >
          <Image
            src={"https://www.zoho.com/in/books/images/einvoice-signup.svg"}
            alt="Tax Invoice"
            width={300}
            height={200}
            className="absolute bottom-0 w-full"
          />
          <div className="p-70">
            <div className="text-30 font-semibold italic">Did you know?</div>
            <div className="text-20 my-20">
              The GST council has made e-invoicing mandatory for businesses with
              a turnover of ₹5 crore and above from 1 August, 2023. Zoho Books
              is here to help.
            </div>
            <div className="text-20 text-clip overflow-hidden">
              Reach out to{" "}
              <a className="text-sky">support.india@zohobooks.com</a> for more
              info.
            </div>
          </div>
        </div>
        <div
          className="col-span-12 lg:col-span-7 bg-white h-full overflow-hidden overflow-y-scroll"
          style={{ maxHeight: "calc(100vh - 60px)" }}
        >
          <div className="flex flex-col p-40 lg:p-70 max-w-lg mx-auto">
            <div className="text-black font-semibold text-18 lg:text-26 text-center">
              Experience PREMIUM plan for 14 days.
            </div>
            <div className="flex flex-col gap-8 mt-20 mb-10">
              <div className="flex items-center border border-solid border-gray-300 px-12 py-10 rounded gap-10 focus-within:border-blue-500">
                <Image
                  src={"https://www.zoho.com/books/signup/images/org.svg"}
                  alt="company Icon"
                  width={16}
                  height={16}
                  className="w-16 h-16"
                />
                <input
                  type="text"
                  className="outline-none text-black text-16 w-full"
                  placeholder="Company Name"
                  value={formInput.companyName}
                  onChange={(e) =>
                    setFormInput({ ...formInput, companyName: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center border border-solid border-gray-300 px-12 py-10 rounded gap-10 focus-within:border-blue-500">
                <Image
                  src={"https://www.zoho.com/books/signup/images/mail.svg"}
                  alt="email Icon"
                  width={16}
                  height={16}
                  className="w-16 h-16"
                />
                <input
                  type="text"
                  className="outline-none text-black text-16 w-full"
                  placeholder="Email Address"
                  value={formInput.email}
                  onChange={(e) =>
                    setFormInput({ ...formInput, email: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center border border-solid border-gray-300 px-12 py-10 rounded gap-10 focus-within:border-blue-500">
                <Image
                  src={"https://www.zoho.com/books/signup/images/call.svg"}
                  alt="mobile Icon"
                  width={16}
                  height={16}
                  className="w-16 h-16"
                />
                <span className="text-black text-16">+91</span>
                <input
                  type="number"
                  className="outline-none text-black text-16 w-full"
                  placeholder="Mobile Number"
                  value={formInput.mobileNumber}
                  onChange={(e) =>
                    setFormInput({ ...formInput, mobileNumber: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center border border-solid border-gray-300 px-12 py-10 rounded gap-10 focus-within:border-blue-500">
                <Image
                  src={"https://www.zoho.com/books/signup/images/password.svg"}
                  alt="password Icon"
                  width={16}
                  height={16}
                  className="w-16 h-16"
                />
                <input
                  type="password"
                  className="outline-none text-black text-16 w-full"
                  placeholder="Password"
                  value={formInput.password}
                  onChange={(e) =>
                    setFormInput({ ...formInput, password: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center border border-solid border-gray-300 px-12 py-10 rounded gap-10 focus-within:border-blue-500">
                <Image
                  src={"https://www.zoho.com/books/signup/images/global.svg"}
                  alt="world Icon"
                  width={16}
                  height={16}
                  className="w-16 h-16"
                />
                <select
                  className="outline-none text-gray-400 w-full"
                  value={formInput.country}
                  onChange={(e) =>
                    setFormInput({ ...formInput, country: e.target.value })
                  }
                >
                  <option>INDIA</option>
                  <option>UK</option>
                  <option>PAKISTAN</option>
                  <option>USA</option>
                  <option>CHINA</option>
                </select>
              </div>
              <div className="flex items-center border border-solid border-gray-300 px-12 py-10 rounded gap-10 focus-within:border-blue-500">
                <Image
                  src={"https://www.zoho.com/books/signup/images/state.svg"}
                  alt="location Icon"
                  width={16}
                  height={16}
                  className="w-16 h-16"
                />
                <select
                  className="outline-none text-gray-400 w-full"
                  value={formInput.state}
                  onChange={(e) =>
                    setFormInput({ ...formInput, state: e.target.value })
                  }
                >
                  <option>GUJARAT</option>
                  <option>UP</option>
                  <option>GOA</option>
                  <option>RAJASTHAN</option>
                  <option>BIHAR</option>
                </select>
              </div>
              <div className="text-black text-13">
                {" "}
                Your data will be in INDIA data center.
              </div>
              <div className="flex items-center gap-10 my-10">
                <input type="checkbox" />
                <div className="text-black text-12">
                  I agree to the{" "}
                  <a className="text-primary underline">Terms of Service</a> and{" "}
                  <a className="text-primary underline">Privacy Policy.</a>
                </div>
              </div>
              <div>
                <button
                  className="w-full rounded bg-lightgreen uppercase hover:bg-darkgreen py-12 px-8 text-white"
                  onClick={(e) => handleSubmitForm()}
                >
                  {isEdit ? "UPDATE ACCOUNT" : "CREATE ACCOUNT"}
                </button>
              </div>
              <div className="my-30 flex item-center justify-center">
                <div className="text- 14 text-gray-500">
                  or sign in using
                  <span className="text-14 text-gray-600 mx-10 cursor-pointer">
                    Google
                  </span>
                </div>

                <div className="flex items-center gap-10">
                  <div className="rounded-full w-20 h-20 bg-gray-500 text-white text-14 font-bold flex justify-center items-center cursor-pointer">
                    f
                  </div>
                  <div className="rounded-full w-20 h-20 bg-gray-500 text-white text-14 font-bold flex justify-center items-center cursor-pointer">
                    in
                  </div>
                  <div className="rounded-full w-20 h-20 bg-gray-500 text-white text-14 font-bold flex justify-center items-center cursor-pointer">
                    X
                  </div>
                  <div className="rounded-full w-20 h-20 bg-gray-500 text-white text-14 font-bold flex justify-center items-center cursor-pointer">
                    w
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
