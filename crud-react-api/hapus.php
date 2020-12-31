<?php
include "koneksi.php";

$id = $_GET['id'];

$hapus = $con->query("DELETE FROM data_diri WHERE id='$id'");
if($hapus == TRUE)
{
echo json_encode(['msg' => 'Terhapusss']);
}else{
echo json_encode(['msg' => 'Error']);
}
