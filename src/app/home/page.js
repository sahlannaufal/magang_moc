"use client";
import { useState } from "react";
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Navbar_T from '@/components/template/Navbar_T';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



export default function Register() {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      noHp: '',
      provinsi: '',
      kabupatenKota: '',
      kecamatan: '',
      password1: '',
    });

        const [password, setPassword] = useState('');
        const [passwordVisible, setPasswordVisible] = useState(false);     
        const [passwordError, setPasswordError] = useState('');
        const [formError, setFormError] = useState('');

        const handleSubmit = async (e) => {
          e.preventDefault();

          // Validasi semua formulir terisi
          const isFormValid = Object.values(formData).every(value => value.trim() !== '');
          if (!isFormValid) {
            setFormError('Please fill in all fields.');
            return;
          }
      
           // Validasi password sebelum submit
           if (passwordError) {
            setFormError('Please fix the errors in the form before proceeding.');
            console.error('Password must be at least 8 characters long and contain at least one letter and one number.');
            return; 
          }

          console.log('Form Data:', formData);
      
          if (formData.noHp) {
            await generateWhatsAppLink(formData.noHp);
          }
      
          await sendOtp();
        };

      const handleChange = (e, field) => {
        const value = e.target.value;
        setFormData({
          ...formData,
          [field]: value,
        });

          if (field === 'password1') {
            validatePassword(value);
          }
      };

      const validatePassword = (password) => {
        // Minimum 8 karakter, minimal satu huruf, dan minimal satu angka
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    
        if (!passwordRegex.test(password)) {
          setPasswordError('Password must be at least 8 characters long and contain at least one letter and one number.');
        } else {
          setPasswordError('');
        }
      };

      const togglePasswordVisibility = () => {
          setPasswordVisible(!passwordVisible);
      };


  const sendOtp = async () => {
    const otpApiUrl = 'https://wa.ikutan.my.id/send';
    
    try {
      const response = await fetch(otpApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.noHp,
        }),
      });

      if (response.ok) {
        console.log('OTP sent successfully.');
      } else {
        console.error('Failed to send OTP.');
      }
    } catch (error) {
      console.error('Error occurred during the OTP API call:', error);
    }
  };

  const generateWhatsAppLink = async (phone) => {
    const token = 'XjhGkWLRp5sqivC0yaT6';
    const apiUrl = `https://wa.ikutan.my.id/send/${token}/${phone}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
      });

      if (response.ok) {
        console.log('WhatsApp link generated successfully.');
      } else {
        console.error('Failed to generate WhatsApp link. Server returned:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error occurred during the WhatsApp link API call:', error.message);
    }
  };



        

    return (
      <>
        <Navbar_T className='' />
        <div className="bg-primary h-[1px]"></div>
        <div className="flex flex-col items-center p-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Welcome</h2>
            <form className="flex flex-col max-w-md gap-4 w-full flex-grow" onSubmit={handleSubmit}>
                {formError && (
                  <p className="text-red-500 text-sm mb-4">{formError}</p>
                )}
              <div className="flex flex-col rounded-md gap-y-3">
                <TextInput id="name" type="name" placeholder="Name" onChange={(e) => handleChange(e, 'name')} required />
                <TextInput id="email" type="email" placeholder="Email" onChange={(e) => handleChange(e, 'email')} required />
                <TextInput id="noHp" type="string" placeholder="No HP" onChange={(e) => handleChange(e, 'noHp')} required />
                <TextInput id="provinsi" type="string" placeholder="Provinsi" onChange={(e) => handleChange(e, 'provinsi')} required />
                <TextInput id="kabupatenKota" type="string" placeholder="Kabupaten/Kota" onChange={(e) => handleChange(e, 'kabupatenKota')}required />
                <TextInput id="kecamatan" type="string" placeholder="Kecamatan" onChange={(e) => handleChange(e, 'kecamatan')} required />
                  <div className="relative">
                    <TextInput
                      id="password1"
                      type={passwordVisible ? 'text' : 'password'}
                      placeholder="Password"
                      onChange={(e) => handleChange(e, 'password1')}
                      required
                    />
                    <button
                      type="button"
                      className="pr-2 absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                    </button>
                </div>
                {passwordError && (
                  <p className="text-red-500 text-xs">{passwordError}</p>
                )}
              </div>

              <Button
                type="submit"
                style={{ backgroundColor: "#00384F", color: "white", width: "100%" }}
                className={`hover:bg-blue-700 ${passwordError || formError ? 'cursor-not-allowed opacity-50' : ''}`}
                disabled={passwordError || formError}
                href={passwordError || formError ? undefined : "/verifikasi"}
              >
                Register
              </Button>
              <p className="mt-2 text-gray-500 text-sm text-center">
                    Have an account? <a href="#" className="font-bold text-black">Log In</a>
              </p>
              <p className="mt-2 text-xs text-center text-gray-500">
                By continuing, you agree to MOC's <a href="#" className="font-bold text-black">Terms and Conditions</a> and acknowledge you’ve read our <a href="#" className="font-bold text-black">Privacy Policy</a>.
              </p>
            </form>
        </div>
        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm mt-auto">
        MagangMOC. © 2023
        </footer>
      </>
    );
  }