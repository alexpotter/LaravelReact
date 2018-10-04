<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="react-root"></div>

        @if (config('app.env') === 'local')
            <script type="text/javascript" src="http://localhost:8080/assets/app.js"></script>
        @else
            <script type="text/javascript" src="assets/app.js"></script>
        @endif
    </body>
</html>
