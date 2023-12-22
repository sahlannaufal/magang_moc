"use client";
import { useState, useEffect } from "react";
import Navbar_T from '@/components/template/Navbar_T'
import { Button, TextInput } from 'flowbite-react';
import React from 'react'

function verifikasi({ noHp }) {

  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [isRequestButtonVisible, setRequestButtonVisible] = useState(false);
  const [remainingTime, setRemainingTime] = useState(300); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          setRequestButtonVisible(true);
          clearInterval(intervalId); 
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  const handleInputChange = (index, value) => {
    const updatedOtpValues = [...otpValues];
    updatedOtpValues[index] = value;
    setOtpValues(updatedOtpValues);
  };


  const handleVerifikasi = async () => {
    
    const enteredOtp = otpValues.join('');

    const token = 'XjhGkWLRp5sqivC0yaT6';

    const apiUrl = `https://wa.ikutan.my.id/send/${token}/${noHp}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
      });

      if (response.ok) {
        const { otpFromApi } = await response.json();

        if (enteredOtp === otpFromApi) {
          console.log('OTP values match the API response.');

          router.push('/success');
        } else {
          console.error('Entered OTP does not match the API response.');
        }
      } else {
        console.error('Failed to fetch OTP from the API. Server returned:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error occurred during the API call:', error);
    }
  };

  const handleRequestUlang = () => {
    console.log('Button "Request Ulang" clicked');
  };


  return (
   <>
    <Navbar_T className='' />
        <div className="bg-primary h-[1px]"></div>
        <div className="flex flex-col items-center p-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Verifikasi OTP</h2>
            <form className="flex flex-col max-w-md gap-4 w-full flex-grow" >

              <div className="flex rounded-md gap-x-3">
                 {otpValues.map((value, index) => (
                    <TextInput
                      key={index}
                      type="number"
                      placeholder=""
                      value={value}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      required
                    />
                  ))}
              </div>

              <Button
                type="submit"
                style={{ backgroundColor: "#00384F", color: "white", width: "100%" }}
                className="hover:bg-blue-700"
                onClick={handleVerifikasi}
              >
                Verifikasi
              </Button>

            {isRequestButtonVisible ? (
                <Button
                  type="button"
                  style={{ backgroundColor: "#00384F", color: "white", width: "100%" }}
                  className="hover:bg-blue-700 mt-4"
                  onClick={handleRequestUlang}
                >
                  Request Ulang
                </Button>
              ) : (
                <p className="text-gray-500 mt-2">
                  Tunggu {Math.floor(remainingTime / 60)} menit {remainingTime % 60} detik sebelum dapat melakukan Request Ulang.
                </p>
              )}

            </form>
        </div>
   </>
  )
}

export default verifikasi