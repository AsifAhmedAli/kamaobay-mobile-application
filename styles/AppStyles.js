import tw from "twrnc"

// home screen

export const backgroundColor = tw`bg-gray-200 h-full`
export const paddingX = tw`px-8`
export const flexBoxRow = tw`flex flex-row items-center justify-between`

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

// dashboard

export const dashboardScreen = {
  // header
  headerContainer: tw`p-8 bg-blue-900 rounded-bl-2xl`,
  navbar: tw`flex flex-row`,
  menuIcon: tw`flex-1 items-start`,
  menuIcons: tw`flex flex-row items-center justify-between w-24`,
  menuImages: [tw`h-8 w-10`, { resizeMode: "contain" }],
  container: tw`flex-row w-full items-center my-4`,
  headingText: tw`text-white font-bold text-xl`,

  // intro
  introContainer: tw`flex-row items-center justify-between my-8`,
  introBox1: tw`flex justify-between bg-white rounded-lg w-32 h-36 shadow-md px-4 py-6`,
  introText1: tw`text-blue-900 text-lg font-semibold`,
  introBox2: tw`flex justify-between bg-blue-900 rounded-lg w-32 h-36 shadow-md px-4 py-6`,
  introText2: tw`text-white text-lg font-semibold`,

  // navbar
  navbarContainer: tw`flex flex-row items-center justify-between bg-white p-2 rounded-t-xl`,
  navbarItem: tw`flex items-center`,
  navbarImage: [tw`h-6 w-10`, { resizeMode: "contain" }],
  navbarText: tw`text-xs text-blue-900`,

  // stars
  starsHeading: tw`text-blue-900 font-bold text-xl`,
  starsContainer: tw`flex bg-blue-900 rounded-lg p-4`,
  starsImage: [tw`h-10 w-14`, { resizeMode: "contain" }],
  starsPrice: tw`text-white text-xl font-semibold`,

  // chat
  // chat screen
  chattingHeaderContainer: tw`bg-white rounded-t-xl px-6 pb-2 pt-4 flex-row items-center justify-between`,
  chattingOption: [tw`h-6 w-6`, { resizeMode: "contain" }],
  headerFlex: tw`flex-1 items-center`,
  chattingImage: [tw`h-12 w-12 rounded-full`, { resizeMode: "contain" }],
  chattingHeaderText: tw`text-blue-900 font-bold`,
  chatting: tw`flex-1 px-6 bg-white`,
  chattingUser1Container: tw`flex-row items-end justify-end`,
  chattingUser1Text: tw`bg-blue-900 p-4 text-white w-52 rounded-xl font-semibold`,
  chattingUserImage: tw`h-12 w-12 ml-4 rounded-full`,
  chattingUser2Container: tw`flex-row items-end`,
  chattingUser2text: tw`bg-blue-100 p-4 rounded-xl w-52 text-blue-900 font-semibold`,
  inputContainer: tw`flex-row items-center mb-2 rounded-lg justify-between bg-gray-100 py-2 px-4`,
  inputFlex: tw`flex-row`,
  inputImage1: tw`h-6 w-6 mr-2`,
  inputText: tw`text-blue-900 w-50 `,
  inputImage2: tw`h-8 w-8`,

  // chatlist
  
}
