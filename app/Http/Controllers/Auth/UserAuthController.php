<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use function response;
use function auth;

class UserAuthController extends Controller
{
    public function login(Request $request): JsonResponse
    {
        $data = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);


        if (!\Auth::attempt($data)) {
            return response()->json(['error_message' => 'Incorrect Details.
            Please try again'], 403);
        }

        $token = auth()->user()->createToken('API Token')->accessToken;

        return response()->json(['user' => auth()->user(), 'token' => $token]);

    }
}
