<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="{{ asset('css/app.css') }}">
  <title>Astro</title>

</head>

<body class="antialiased">

  <div id="appRoot"></div>

  <script src="{{ mix('js/app.js') }}"></script>

</body>

</html>