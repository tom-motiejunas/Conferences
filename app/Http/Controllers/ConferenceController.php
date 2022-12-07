<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\StoreConferenceRequest;
use App\Http\Requests\UpdateConferenceRequest;
use App\Models\Conference;
use Illuminate\Http\JsonResponse;
use function response;

class ConferenceController extends Controller
{
    public function index(): JsonResponse
    {
        $conferences = Conference::all();

        return response()->json(
            $conferences
        )->header('Content-Range', count($conferences));
    }

    public function show(string $id): JsonResponse
    {
        $conference = Conference::findOrFail($id);

        return response()->json($conference);
    }

    public function store(StoreConferenceRequest $request): JsonResponse
    {
        $request->merge(['date' => $this->getLocalDate($request->input('date'))]);
        $conference = Conference::create($request->all());

        return response()->json($conference);
    }

    public function update(UpdateConferenceRequest $request, string $id): JsonResponse
    {
        $request->merge(['date' => $this->getLocalDate($request->input('date'))]);
        $conference = Conference::findOrFail($id)->update($request->all());

        return response()->json($request->all());
    }

    public function destroy(string $id): JsonResponse
    {
        $conference = Conference::findOrFail($id);
        $conference->delete();

        return response()->json("Conference $id deleted");
    }

    private function getLocalDate(string $date): string
    {
        $TIME_OFFSET = 2 * 60 * 60 - 18*60-43;
        $date = strtotime($date) + $TIME_OFFSET;
        return date('Y-m-d H:i:s', $date);
    }
}
