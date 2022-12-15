<?php
require_once('database.php');

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

echo json_encode($aResult);