<?php
$firstDay = date('Y-m-d', strtotime("first day of this month"));
$lastDay = date('Y-m-d', strtotime("last day of this month"));
$lastDayArray = explode('-', $lastDay);
$lastDayMonth = $lastDayArray[2];

$arrayAccomodations = [
    1 => [
        'type' => 'single',
        'number' => '123',
        'group-name' => 'A-31',
        'check_in' => '2021-01-02',
        'check_out' => '2021-01-12',
    ],
    2 => [
        'type' => 'triple',
        'number' => '430',
        'group-name' => 'B-89',
        'check_in' => '2021-01-03',
        'check_out' => '2021-01-08',
    ],
    3 => [
        'type' => 'single',
        'number' => '503',
        'group-name' => 'X-31',
        'check_in' => '2021-01-09',
        'check_out' => '2021-01-20',
    ],
];
