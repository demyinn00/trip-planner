# Yosemite Trip Planner

## About

The Yosemite Trip Planner is a web application designed to help my friends and I organize our supplies for an upcoming trip to Yosemite. Instead of using a traditional spreadsheet, this app allows us to add tasks and items to specific categories and check them off as they are completed.

## Features

- **User-Friendly Interface**: Simple and intuitive UI to view and manage tasks.
- **Categories**: Organize items by categories such as 'Food', 'Drinks', 'Entertainment', etc.
- **Task Management**: Add, edit, and delete tasks as needed.
- **Completion Tracking**: Check off items that have been acquired or tasks that have been completed.
- **Real-Time Updates**: Changes are updated in real-time for all users.

## Technologies Used

- React.js for the frontend
- Firebase for the backend (Firestore for database, Firebase Authentication, Firebase Hosting)
- UUID for generating unique identifiers

## Setup and Installation

To set up the project on your local machine:

1. Clone the repository:
    ```
    git clone [repository URL]
    ```
2. Install the dependencies:
    ```
    npm install
    ```
3. Start the development server:
    ```
    npm start
    ```


## Firebase Configuration

To use Firebase in your local environment, you need to configure your Firebase project's API keys and other necessary details. Follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project or select an existing one.
3. Navigate to the project settings and find your app's Firebase configuration object.
4. Create a `.env.local` file in the root of your project and add your Firebase config keys like this:

    ```
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

## Deployment

The app is deployed using Firebase Hosting. To deploy a new version of the app:

1. Build your project:
    ```
    npm run build
    ```
2. Deploy to Firebase:
    ```
    firebase deploy --only hosting
    ```

## Contributing

If you'd like to contribute to the project, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

A big thank you to my friends who are joining me on this trip and inspired the creation of this app. Let's make our Yosemite adventure one to remember!
