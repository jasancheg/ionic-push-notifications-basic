Ionic Push notifications App Base
=====================

## How to use this template

Install dependencies, them run following line to see the app in your browser:

```bash
$ ionic serve --lab
```

### how to push a notification in development environment

Open a new shell in your terminal and run the following command

```bash
$ ionic push -s
```
Follow the requested instructions, you will need to provide:

* Your private API key
* Device token
* Notification alert message
* Badge count (optional)
* Sound file name (optional)

A push notification will be displayed in the app with the same device_id that is runnig in the browser.