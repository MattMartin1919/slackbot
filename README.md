# Generic Slack Bot

\ ゜ o ゜)ノ

## The Problem

I was unable to find a nice slack bot that I could use as a template and modify to my needs.

## The Goal

To fix this problem, I built my own "starter" bot that can be built off of.

## Bot Abilities

TBD

## Installation and Starting

To run this bot, you will need a [Slack bot](https://api.slack.com/) defined with the scopes:

- Socket mode enabled
- Permissions:
  - app_mentions:read
  - chat:write
  - im:history
  - im:read
  - im:write
  - incoming-webhook
  - reactions:read
  - files:write
- Event subscriptions:
  - app_home_opened
  - message.im
  - reaction_added

You can also use the beta manifest feature, the below will set up all of the config for you:

```
display_information:
  name: #APP_NAME#
features:
  app_home:
    home_tab_enabled: false
    messages_tab_enabled: true
    messages_tab_read_only_enabled: false
  bot_user:
    display_name: #APP_NAME#
    always_online: true
oauth_config:
  scopes:
    bot:
      - app_mentions:read
      - chat:write
      - im:history
      - im:read
      - im:write
      - incoming-webhook
      - reactions:read
      - files:write
settings:
  event_subscriptions:
    bot_events:
      - app_home_opened
      - message.im
      - reaction_added
  interactivity:
    is_enabled: true
  org_deploy_enabled: false
  socket_mode_enabled: true
  token_rotation_enabled: false
```

Once defined, you will need 2 tokens:

1. The "Bot User OAuth Token". This is located in the "install app" tab. Place this token in the `SLACK_BOT_TOKEN` variable in your `.env` file.

   - It should start with `xoxb-`.

2. The "app level token". You will need to create this one in the "basic information" tab. Once the token is created, copy it and place it in the `.env` file for the `SLACK_APP_TOKEN` variable.

   - It should start with `xapp-`.

After the tokens are entered in the `.env` file, download the dependencies and start the app with the commands below:

```
npm install              // installs the dependencies
npm run dev              // dev version (auto reload)
run start                // prod version start
```

## Project Structure

Coming soon...

---

## \ ゜ o ゜)ノ

Developed by Matt Martin using [the Bolt framework](https://slack.dev/bolt)
