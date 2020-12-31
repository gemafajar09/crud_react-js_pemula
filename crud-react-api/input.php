<?php
include "koneksi.php";

$json = file_get_contents('php://input');
$_POST = json_decode($json, true);

$nama = $_POST['nama'];
$nohp = $_POST['no_hp'];
$alamat = $_POST['alamat'];
if($nama != '')
{
    $simpan = $con->query("INSERT INTO `data_diri`(`nama`, `no_hp`, `alamat`) VALUES  ('$nama','$nohp','$alamat')");
}

if($simpan == TRUE)
{
    echo json_encode(['status' => 200, 'msg' => 'Success']);
}else{
    echo json_encode(['status' => 404, 'msg' => 'Maaf Ada Kendala']);
}
?>
