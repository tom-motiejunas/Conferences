<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Conference;
use Illuminate\Database\Seeder;

class ConferenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('conferences')->insert([
//            'title' => 'PHP Conference',
//            'description' => 'PHP Conference',
//            'link' => 'https://www.phpconference.com/',
//            'country' => 'USA',
//            'city' => 'New York',
//            'date' => '2021-10-10 10:10:10',
//        ]);
        Conference::factory()->count(10)->create();
    }
}
