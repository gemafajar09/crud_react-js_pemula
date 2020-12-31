<?php
include "koneksi.php";

$id = $_GET['id'];
$res = array();
$data = $con->query("SELECT * FROM data_diri WHERE id = '$id'")->fetch_assoc();
$res = array(
		'id' => $data['id'], 
		'nama' => $data['nama'], 
		'no_hp' => $data['no_hp'], 
		'alamat' => $data['alamat']
	);

echo json_encode($res);
