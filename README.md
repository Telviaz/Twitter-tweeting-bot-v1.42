# Twitter Bot

![Twitter Bot Logo](bot-logo.png)

This is a Node.js Twitter bot that tweets random content from a text file and retweets random tweets containing specific keywords.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [Configuration](#configuration)
- [Twitter API Keys](#twitter-api-keys)
- [Tweet Content](#tweet-content)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Animation](#animation)
- [Credits](#credits)

## Features

- Posts random tweets from a text file.
- Retweets random tweets containing specific keywords.
- Automatic posting and retweeting at specified intervals.

## Setup

1. Clone this repository to your local machine:
   

2. Navigate to the project directory:


3. Install the required dependencies using npm:use npm install



## Usage

1. Make sure you have completed the setup steps.

2. Run the bot using the following command:


3. The bot will post a random tweet from `tweet.txt` every 4 hours.
4. The bot will retweet random tweets containing specific keywords every 3 hours.

## Configuration

To configure the bot, you can modify the following files:

### `bot.js`

- Adjust the intervals for posting and retweeting by modifying the `setInterval` functions.

### `config.js`

- Add your Twitter API keys in the appropriate fields.

## Twitter API Keys

To use this bot, you need to provide your Twitter API keys in the `config.js` file. Obtain your keys by creating a Twitter Developer account and registering a new app. Then replace the placeholders in the `config.js` file with your actual keys.

## Tweet Content

Add the tweets you want the bot to post in the `tweet.txt` file. Each tweet should be on a separate line.

## Customization

Feel free to customize the bot according to your needs:

- Change the keywords for retweets in the `retweetRandom` function.
- Modify the posting and retweeting intervals.
- Enhance error handling and add more features.

## Contributing

Contributions are welcome! If you'd like to improve this project, submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

## Animation

<details>
<summary><strong>Toggle Animation</strong></summary>

![Animation Example](animation.gif)

[Click Me](#) to trigger the animation.

```css
.btn {
 display: inline-block;
 padding: 10px 20px;
 background-color: #007bff;
 color: #fff;
 border-radius: 4px;
 text-decoration: none;
 transition: background-color 0.3s ease;
}

.btn:hover {
 background-color: #0056b3;
}


Replace `your-username` with your actual GitHub username and provide the appropriate file paths for `bot-logo.png` and `animation.gif`. The README includes formatting, headers, code blocks, and the "Coded by TELVIN TEUM" attribution at the end.
