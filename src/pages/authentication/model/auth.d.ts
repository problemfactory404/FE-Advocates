export type ResetPasswordRequestDto = {
  token: String
  password: String
  confirmPassword: String
}
export type ForgetPasswordRequestDto = {
  email: String
  username: String
}
export type ChangePasswordRequestDto = {
  oldPassword: String
  newPassword: String
  confirmNewPassword: String
}
export type UserProfileDetailsDto = {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  updateAt: string;
  isLoggedIn: boolean;
}
export type SignInRequestDto = {
  email: String
  password: String
}
export type SignInResponseDto = {
  code: number;
  status: string;
  message: string;
  data: {
    user: {
      id: number;
      name: string;
      phoneNumber: string;
      email: string;
      password: string;
      updateAt: string;
      isLoggedIn: boolean;
    };
    access_token: string;
  };
}
export type SignUpRequestDto = {
  name: string
  email: string
  phoneNumber: string
  password: string
}
export type SignUpResponseDto = {
  id: Number
  email: String
  username: String
  firstName: String
  lastName: String
  phoneNumber: String
  country: String
  state: String
  city: String
  address: String
  pinCode: String
  status: String
}
export type VerifyOtpRequestDto = {
  email: String
  username: String
  otp: Number
}
export type VerifyOtpResponseDto = {
  token: String
}
// 
export type Authentication = {
  username: String
  token: String
}
export type SigninGoogle = {
  token: String
  userDetails: userDetails
}
export type SigninGithub = {
  token: String
  userDetails: userDetails
}
export type SigninFacebook = {
  token: String
  userDetails: userDetails
}

export type VerfiyAccountRequestDto = {
  phoneNumber: string
  email: string
}

export type VerfiyAccountResponseDto = {
  code: number;
  status: string;
  message: string;
  data: {
    id: number;
  };
}


//root state--------------------------------------
export type AuthState = {
  authSlice: {
    signin: SignInResponseDto
    signup: SignUpResponseDto
    resendVerifyOtp: Authentication
    resendOtp: Authentication
    forgetPassword: VerfiyAccountResponseDto
    changePassword: UserProfileDetailsDto
    resetPassword: UserProfileDetailsDto
    verifyOtp: VerifyOtpResponseDto
    signinGoogle: SigninGoogle
    signinGithub: SigninGithub
    signinFacebook: SigninFacebook
  }
}
