# Headspace Clone

Welcome to the Headspace Clone project! This is an open-source project that aims to replicate the functionality of the popular meditation app, Headspace. Additionally, we have integrated RevenueCat to manage in-app purchases and subscriptions, allowing you to generate income from this app.

## Features

- List of meditations
- Meditation details page
- In-app purchases and subscriptions using RevenueCat
- Responsive design for both mobile and web

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/headspace-clone.git
    cd headspace-clone
    ```

2. Install dependencies:

    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the development server:

    ```sh
    npm start
    # or
    yarn start
    ```

### Configuration

1. Create a `.env` file in the root directory and add your RevenueCat API keys:

    ```env
    REVENUECAT_PUBLIC_KEY=your_public_key
    REVENUECAT_SECRET_KEY=your_secret_key
    ```

2. Update the [app.json](http://_vscodecontentref_/1) file with your own app details if necessary.

### Running on Different Platforms

- To run on Android:

    ```sh
    npm run android
    # or
    yarn android
    ```

- To run on iOS:

    ```sh
    npm run ios
    # or
    yarn ios
    ```

- To run on Web:

    ```sh
    npm run web
    # or
    yarn web
    ```

## Contributing

This project is open-source, and we welcome contributions from the community. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or suggestions, feel free to open an issue or contact us at rishabhbhatt956@gmail.com.

Happy coding!