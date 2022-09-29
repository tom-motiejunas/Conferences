<h1>Conference system</h1>

<p>Conference system is a web application that allows users to create and manage conferences.</p>

## Requirements

- PHP 8.1, Composer, Node.js, Npm
- Docker, Docker-compose

## Development environment
- Clone the repository
- Run `composer install`
- Run `npm install`
- Run `./backend.sh`
  - `php artisan install`
  - `php artisan migrate:refresh --seed`
  - `php artisan passport:install`
  - `php artisan passport:client --personal`
- Run `./start-dev.sh`
- Run `./phpstan/check-project.sh` to check the code
