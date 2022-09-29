<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StoreConferenceRequest;
use App\Http\Requests\UpdateConferenceRequest;
use App\Models\Conference;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;
use function response;

class ConferenceController extends Controller
{
    public function index(): JsonResponse
    {
        $conferences = Conference::all();

        return response()->json([
            'items' => $conferences
        ]);
    }

    public function show(string $id): JsonResponse
    {
        $conference = Conference::findOrFail($id);

        return response()->json($conference);
    }

    public function store(StoreConferenceRequest $request): Response
    {
        Conference::create($request->all());

        return response()->noContent();
    }

    public function update(UpdateConferenceRequest $request, string $id): Response|JsonResponse
    {
        $conference = Conference::findOrFail($id)->update($request->all());

        return response()->noContent();
    }

    public function destroy(string $id): Response
    {
        $conference = Conference::findOrFail($id);
        $conference->delete();

        return response()->noContent();
    }
}
