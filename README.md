# ReactPHP + WebSockets (Ratchet) + ReactJs = REATCHAT!

This is something I wrote really fast during one of the talks at PHPConference 2016 in Sydney. I was inspired by a talk about asynchronous PHP by Wim Goddin which you can check out [here](http://www.slideshare.net/wimg/the-promise-of-asynchronous-php-60943938).

WebSockets and PHP is something I'd already been interested in and had been wanting to get into a bit more deeply after playing around with pub/sub and Firebase. After the talk I was pretty amped so I decided to just dive in and give it a go right away. 

Naturally I wrote the front end in ReactJs!

This was also loosely based off [this](http://www.sitepoint.com/how-to-quickly-build-a-chat-app-with-ratchet/) SitePoint tutorial which you can check out for further explanations. 

## Guide

Not much too it really, just pull or download the repo and put its contents somewhere on your webserver. Run `composer update` inside the `server` directory, then navigate to `http://yourserver.com/reatchat` and ask a buddy to come along with you to get chatting!

In a real use case, you would probably put the Ratchet app on a separate server, but that's beyond the scope of this repo. 

## License

Copyright (c) 2016 Rohan Deshpande and other contributors

Licensed under the MIT License
