<?php
include "koneksi.php";
$res = array();
$data = $con->query("SELECT * FROM data_diri");
foreach($data as $a)
{
	$res[] = array(
		'id' => $a['id'], 
		'nama' => $a['nama'], 
		'no_hp' => $a['no_hp'], 
		'alamat' => $a['alamat']
	);
}

echo json_encode($res);
