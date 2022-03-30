import tw from "twrnc"

// home screen

export const backgroundColor = tw`bg-gray-200 h-full`
export const paddingX = tw`px-8`
export const flexBoxRow=tw`flex flex-row items-center justify-between`



export const homeScreen = {
  modalButton: tw`p-1 mx-5 shadow rounded-lg bg-rose-200`,
}

// auth pages

export const authScreen = {
  authHeader: tw`flex items-center justify-center bg-blue-900 h-42 rounded-bl-xl`,
  textHeading: tw`text-blue-900 text-xl font-bold my-2`,
  loginGoogle: tw` bg-white rounded-full py-2 px-4`,
  loginFacebook: tw`bg-blue-500 rounded-full py-2 px-4 `,
  labelText: tw`text-blue-900 font-semibold px-4 py-2`,
  linkText: tw`text-blue-900 underline`,
  linkSection: tw`flex flex-row my-4 items-center justify-center`,
}

export const dashboardScreen = { headerContainer: tw`p-8 bg-blue-900 rounded-bl-2xl` }
