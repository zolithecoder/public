<?php
// Inicializálás
require 'vendor/autoload.php';
use Google\Cloud\Firestore\FirestoreClient;

// Firebase projekt és adatbázis konfiguráció
putenv('GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/firebase_credentials.json');
$firestore = new FirestoreClient();

// Adatok lekérdezése példakódként
$documents = $firestore->collection('your_collection')->documents();
foreach ($documents as $document) {
    if ($document->exists()) {
        printf('Document data for document %s:' . PHP_EOL, $document->id());
        var_dump($document->data());
    } else {
        printf('Document %s does not exist!' . PHP_EOL, $snapshot->id());
    }
}
?>
