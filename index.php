<!DOCTYPE html>
<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    exec('php server/boot.php');
?>
<html>
    <head>
        <meta charset="utf-8">
        <title>Chat</title>
        <link href='https://fonts.googleapis.com/css?family=Lato:400,400italic,700italic,700,100,100italic' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
        <link rel="stylesheet" href="client/css/app.css" media="screen" title="no title" charset="utf-8">
    </head>
    <body>
        <header>
            <h1>
                <i class='fa fa-comments-o'></i> Reatchat
            </h1>
        </header>
        <div id='app'></div>
        <script src="//fb.me/react-0.14.3.min.js"></script>
        <script src="//fb.me/react-dom-0.14.3.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.2/moment.min.js"></script>
        <script src="//cdn.jsdelivr.net/js-md5/0.4.1/md5.min.js"></script>
        <script src="//cdn.jsdelivr.net/jdenticon/1.3.2/jdenticon.min.js"></script>
        <script type="text/babel" src="client/js/Chat.js"></script>
    </body>
</html>
