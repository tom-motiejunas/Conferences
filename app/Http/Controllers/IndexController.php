<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;

class IndexController extends Controller
{
    public function index(): Factory|View
    {
        return view('welcome', [
            'message' => "Hello, world!",
        ]);
    }
}
