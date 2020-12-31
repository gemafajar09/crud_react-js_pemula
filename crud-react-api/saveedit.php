<?php
include "koneksi.php";

$json = file_get_contents('php://input');
$_POST = json_decode($json, true);

$id = $_POST['id'];
$nama = $_POST['nama'];
$nohp = $_POST['no_hp'];
$alamat = $_POST['alamat'];

$edit = $con->query("UPDATE data_diri SET nama='$nama', no_hp='$nohp', alamat='$alamat' WHERE id = '$id'");

if($edit == TRUE)
{
    echo json_encode(['status' => 200, 'msg' => 'Success']);
}else{
    echo json_encode(['status' => 404, 'msg' => 'Maaf Ada Kendala']);
}
?>
