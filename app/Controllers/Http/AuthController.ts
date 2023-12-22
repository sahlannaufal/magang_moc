import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import Cache from '@ioc:Adonis/Addons/Cache'


export default class AuthController {

    public async register({ request, response, auth }: HttpContextContract) {
        //get req body
        const {name, email, phone, province, city, district, password} = request.body()

        //check unique email
        const odlUser = await User.query().where({email: email}).first()
        if (odlUser) {
            return response.status(422).json({
                message: 'Email sudah terdaftar!'
            })
        }

        //hasing password
        const hashedPassword = await Hash.make(password)

        //insert new user
        const user = await User.create({
            name: name,
            email: email,
            phone: phone,
            province: province,
            city: city,
            district: district,
            password: hashedPassword
        })

        // Generate and send OTP (you need to implement this)
      const otpToken = 'XjhGkWLRp5sqivC0yaT6'; // Replace with your OTP service token
      await this.sendOtp(phone, otpToken)

        //generate API token
        const token = await auth.use('api').generate(user)

        //return respon
        return response.json({
            data: {
                user: user,
                token: token
            }
        })
    }

    private async sendOtp(phone: string, otpToken: string) {
        const cacheKey = `otp_attempts_${phone}`;
        const maxAttempts = 5;
        const cooldownTime = 300; // 5 minutes in seconds

        // Check the number of OTP attempts
    let attempts = await Cache.get(cacheKey, 0);
    if (attempts >= maxAttempts) {
      // If attempts exceed the limit, wait for the cooldown time
      await new Promise(resolve => setTimeout(resolve, cooldownTime * 1000));
      attempts = 0; // Reset attempts after cooldown
    }

// Implement your OTP sending logic here
    // Use the provided phone number and OTP token to send the OTP

    // Simulate OTP sending (replace this with your actual OTP sending logic)
    const otp = Math.floor(100000 + Math.random() * 900000);
    console.log(`OTP sent to ${phone}: ${otp}`);

    // Increment the number of attempts
    attempts++;
    await Cache.put(cacheKey, attempts, cooldownTime);

    // You can also save the OTP and its token in cache or database for verification later
    const otpData = {
      token: otpToken,
      otp,
    };
    await Cache.put(`otp_data_${phone}`, otpData, cooldownTime);
  }
}



