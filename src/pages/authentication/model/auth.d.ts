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
  first_name: string;
  last_name: string;
  email: string
  phoneNumber: string
  password: string
  role: string;
  address: string;
  identity_no: string;
  vehicle_no: string;
}

export type SignUpResponseData = {
  first_name: string;
  last_name: string;
  phoneNumber: string;
  email: string;
  role: string;
  address: string;
  identity_no: string;
  vehicle_no: string;
  password: string;
  id: number;
  created_at: string;
  update_at: string;
  updated_by: number;
  isLoggedIn: boolean;
  status: string;
}

export type SignUpResponseDto = {
  code: number;
  status: string;
  message: string;
  data: SignUpResponseData;
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

export type VerifyOtpDto = {
  phoneNumber: string;
  email: string;
  otp: string;
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
