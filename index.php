<?php
require 'data.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calendar</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
    <table id="table-calendar-accomodations">
        <thead>
            <tr>
                <td>Number</td>
                <td>Type</td>
                <td>
                    <table>
                        <tr>
                            <td id="monthCol" colspan="<?= $lastDayMonth ?>">Marzo</td>
                        </tr>
                        <tr>
                            <?php for ($day = 1; $day <= $lastDayMonth; $day++) { ?>
                                <td><?= $day ?></td>
                            <?php } ?>
                        </tr>
                    </table>
                </td>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($arrayAccomodations as $accomodation) { ?>
                <tr>
                    <td><?= $accomodation['number'] ?></td>
                    <td><?= $accomodation['type'] ?></td>
                    <td data-room_number="<?= $accomodation['number'] ?>" colspan="<?= $lastDayMonth ?>"></td>
                </tr>
            <?php } ?>
        </tbody>
    </table>
</body>

</html>