<?php
header('Content-Type: application/json');

$aResult = array();
$aResult['result'] = "<tr>
<td>".$row["id_country"]."</td>
<td>".$row["country"]."</td>
<td>".$row["id_continent"]."</td>
<td>".$row["id_religion"]."</td>
<td>".$row["id_language"]."</td>
<td>".$row["population"]."</td>
</tr>";

$host = 'localhost';
$user = 'root';
$pass = 'Mindvan@2802';
$db   = 'countries';
$conn = mysqli_connect($host, $user, $pass, $db);

$result = mysqli_query($conn, "SELECT * FROM country");

$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}

echo json_encode($aResult);