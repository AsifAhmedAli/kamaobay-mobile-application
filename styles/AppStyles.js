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

  // char shortcut
  chatShortcutContainer: tw`flex-row items-center px-8`,
  addImageContainer: tw`flex items-center w-16 rounded-lg border border-dashed border-blue-900 mr-4 my-2 p-4`,
  addImage: [tw`h-10 w-14`, { resizeMode: "contain" }],
  imageContainer: tw`flex items-center bg-blue-50 w-18 rounded-lg mr-4 my-2 p-4`,
  imageSize: [tw`h-12 w-12 rounded-full`, { resizeMode: "contain" }],

  // chat

  chatBackground: tw`bg-white rounded-t-xl py-4`,
  chatContainer: tw`flex-row items-center justify-between border-b border-gray-100 rounded-lg my-3 p-2 py-4`,
  chatImage: tw`h-14 w-14 mr-4 bg-blue-900 rounded-full`,
  chatText: tw`text-blue-900 font-bold text-lg`,
  chatMessage: tw`text-blue-900 font-semibold`,
  chatTime: tw`text-blue-900 font-bold`,

  // dashboard
  dashboardHeading: tw`text-blue-900 font-bold text-lg my-4`,

  // freeEarning
  earningListContainer: tw`flex-row items-center bg-white w-full rounded-full my-2 p-4`,
  earningImage: [tw`h-10 w-14`, { resizeMode: "contain" }],
  earningItem: tw`flex-row flex-1 justify-between`,
  earningText: tw`text-blue-900 text-lg font-bold`,
  earningOption: [tw`h-8 w-10`, { resizeMode: "contain" }],

  // premium tasks
  premiumTaskContainer: tw`flex items-center bg-white w-24 rounded-lg mr-4 my-2 px-4 py-6`,
  premiumTaskText: tw`text-blue-900 text-xs text-center underline`,
  premiumTaskCaption: tw`text-center font-bold text-blue-900`,

  // friends
  // add friends list
  headingRow: tw`flex py-2 items-center justify-between`,
  col1: tw`flex-1`,
  mainColText: tw`text-blue-900 text-lg font-bold`,
  mainColTextTable: tw`text-blue-900 text-lg`,
  col2: tw`w-20 mx-1 mr-4`,
  subColText: tw`text-blue-900 text-lg font-bold text-center`,
  col3: tw`w-20 `,
  friendsButton: tw`bg-white p-1 rounded-lg shadow-lg `,
  friendsButtonText: tw`text-blue-900 text-md text-center uppercase font-bold`,

  // friends screen
  addFriendsButton: tw`flex-row py-4 border border-dashed border-blue-900 rounded-lg  items-center justify-evenly`,
  addFriendsButtonText: tw`text-blue-900 text-xl font-bold`,
  addFriendsButtonImage: [tw`h-8 w-8`, { resizeMode: "contain" }],
  friendContainer: tw`flex-row items-center justify-between rounded-lg my-2 p-2`,
  friendContainerBackground: tw`bg-blue-100 p-4 rounded-lg`,
  friendImage: [tw`h-14 w-14`, { resizeMode: "contain" }],
  friendSubCols: tw`flex items-center p-2 bg-blue-100 p-4 rounded-lg h-full`,
  friendSubColImage: [tw`h-8 w-8 mb-3`, { resizeMode: "contain" }],
  friendText: tw`text-blue-900 font-bold`,

  // games

  gamesHeading: tw`text-blue-900 text-xl font-bold my-4`,
  gamesContainer: tw`flex-row items-center justify-between rounded-xl my-2 py-2 px-8 bg-blue-200`,
  gamesTitle: tw`text-blue-900 text-lg`,
  gamesInfo: tw`flex-row items-center`,
  gamesInfoImage: [tw`h-4 w-4 mr-4`, { resizeMode: "contain" }],
  gamesInfoText: tw`text-blue-900`,
  gameImage: [tw`h-14 w-14`, { resizeMode: "contain" }],

  // tasks list
  taskCol2: tw`w-24 `,
  taskCol3: tw`w-14 `,
  taskCol1: tw`flex-row flex-1 items-start`,
  taskCheckBox: [tw`h-4 w-4 mr-2`, { resizeMode: "contain" }],
  taskName: tw`text-blue-900 text-md w-3/4 font-bold`,
  taskPoints: tw`text-blue-900 text-md`,
  taskContentCol3: tw`w-14 flex items-center`,
  taskDeleteImage: [tw`h-6 w-6`, { resizeMode: "contain" }],

  // wallet
  walletStarsContainer: tw`bg-white p-6 rounded-xl shadow-lg`,
  walletHeading: tw`text-blue-900 font-bold text-xl`,
  walletQuantity: tw`flex-row justify-between items-center px-8 my-4`,
  walletImage: [tw`h-10 w-14`, { resizeMode: "contain" }],
  walletText: tw`text-2xl font-bold text-blue-900`,
  walletButtons: tw`flex-row justify-evenly items-center`,
  transferButton: tw`bg-gray-200 w-32 px-4 py-2 text-blue-900 rounded-xl`,
  transferText: tw`text-center text-blue-900 text-xl`,
  withdrawButton: tw`bg-gray-300 w-32 px-4 py-2 text-blue-900 rounded-xl`,
  withdrawText: tw`text-center text-gray-500 text-xl`,
  tranferContainer: tw`flex-1 items-center my-4`,
  transferConfirmButton: tw`bg-blue-900 w-32 px-4 py-3 text-blue-900 rounded-lg`,
  tranferConfirmText: tw`text-center text-white text-xl`,

  // wallet statements
  statementHeading: tw`text-blue-900 font-bold text-xl my-4`,
}

export const modal = {
  modal: tw`flex items-center justify-center`,
  modalContainer: tw`m-auto p-8 bg-blue-900 h-5/6 w-11/12 rounded-lg`,
  modalClose: tw`right-4 top-4 absolute`,
  closeImage: [tw`h-7 w-7`, { resizeMode: "contain" }],
  header: tw`flex items-center justify-center my-4`,
  headingText: tw`text-white text-xl`,
  starCount: tw`text-white text-3xl font-bold`,
  dateTime: tw`text-white text-sm`,
  buttonsContainer: tw`flex-row justify-between items-center my-4`,
  colText: tw`text-white text-center mb-2`,
  amount: tw`text-white font-bold border border-white rounded-md py-3 px-6`,
  transferConfirmButton: tw`bg-white py-3 rounded-lg`,
  transferText: tw`text-blue-900 text-center font-bold`,
  salaryId: tw`text-white text-center my-2`,
  infoContainer: tw`flex-row items-center my-2`,
  infoIcon: [tw`h-5 w-5 mr-4`, { resizeMode: "contain" }],
  infoText: tw`text-white`,
  giftHeading: tw`text-white text-center mt-6 mb-4`,
  starsContainer: tw`flex-row justify-evenly items-center my-2`,
  starBox: tw`p-2 border border-white rounded-md w-14 h-14`,
  starText: tw`text-white text-center`,
  starImage: [tw`h-8 w-8 m-auto`, { resizeMode: "contain" }],

  // 2
  modalHeading: tw`text-white text-xl text-center my-4`,
  friendsContainer: tw`my-2 flex-row items-center`,
  userContainer: tw`flex-row items-center flex-1`,
  userImage: [tw`h-12 w-12 mr-4`, { resizeMode: "contain" }],
  userName: tw`text-white font-bold`,
  sendButton: tw`bg-white py-2 shadow rounded-lg w-18`,
  sendText: tw`text-blue-900 text-center font-bold`,

  // 3
  pointsContainer: tw`flex-row items-end`,
  pointsCount: tw`text-white text-4xl font-bold mr-2`,
  pointsImage: [tw`mx-auto mb-4`, { resizeMode: "contain" }],
  pointsButtonsGroup: tw`flex-row justify-between items-center my-4`,
  pointsButton1: tw`text-white text-center font-bold border border-white rounded-md py-3 px-6 w-30`,
  pointsButton2: tw`text-blue-900 text-center font-bold bg-white rounded-md py-3 px-6 w-30`,
}
