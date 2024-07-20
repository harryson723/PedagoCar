<?php
$servername = "db4free.net";
$username = "harryfora";
$password = "d4cebf08";
$dbname = "creadendb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
include 'db.php';

switch ($method) {
    case 'GET':
        getActivities($conn);
        break;
    case 'POST':
        addActivity($conn);
        break;
    default:
        echo json_encode(["message" => "Method not supported"]);
        break;
}

function getActivities($conn)
{
    $sql = "SELECT * FROM activities";
    $result = $conn->query($sql);

    $activities = array();
    while ($row = $result->fetch_assoc()) {
        $activityId = $row['id'];
        $row['img'] = base64_encode($row['img']);
        $row['psycomotor'] = getPsycomotor($conn, $activityId);
        $row['extraInfo'] = getExtraInfo($conn, $activityId);
        array_push($activities, $row);
    }

    echo json_encode($activities);
}

function getPsycomotor($conn, $activityId)
{
    $sql = "SELECT title, description FROM psycomotor WHERE activity_id = $activityId";
    $result = $conn->query($sql);

    $psycomotor = array();
    while ($row = $result->fetch_assoc()) {
        array_push($psycomotor, $row);
    }

    return $psycomotor;
}

function getExtraInfo($conn, $activityId)
{
    $sql = "SELECT title, description FROM extra_info WHERE activity_id = $activityId";
    $result = $conn->query($sql);

    $extraInfo = array();
    while ($row = $result->fetch_assoc()) {
        array_push($extraInfo, $row);
    }

    return $extraInfo;
}

function addActivity($conn)
{
    $data = json_decode(file_get_contents('php://input'), true);
    $title = $data['title'];
    $category = $data['category'];
    $keywords = $data['keywords'];
    $purpose = $data['purpose'];
    $description = $data['description'];
    $materials = implode(", ", $data['materials']);
    $variables = $data['variables'];
    $img = base64_decode($data['img']);  // Decodificar la imagen base64

    $sql = "INSERT INTO activities (title, category, keywords, purpose, description, materials, variables, img) VALUES ('$title', '$category', '$keywords', '$purpose', '$description', '$materials', '$variables', ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("b", $img);
    $stmt->send_long_data(0, $img);

    if ($stmt->execute()) {
        $activityId = $stmt->insert_id;
        addPsycomotor($conn, $activityId, $data['psycomotor']);
        addExtraInfo($conn, $activityId, $data['extraInfo']);
        echo json_encode(["message" => "New record created successfully", "id" => $activityId]);
    } else {
        echo json_encode(["error" => "Error: " . $stmt->error]);
    }
}

function addPsycomotor($conn, $activityId, $psycomotor)
{
    foreach ($psycomotor as $p) {
        $title = $p['title'];
        $description = $p['description'];
        $sql = "INSERT INTO psycomotor (activity_id, title, description) VALUES ($activityId, '$title', '$description')";
        $conn->query($sql);
    }
}

function addExtraInfo($conn, $activityId, $extraInfo)
{
    foreach ($extraInfo as $e) {
        $title = $e['title'];
        $description = $e['description'];
        $sql = "INSERT INTO extra_info (activity_id, title, description) VALUES ($activityId, '$title', '$description')";
        $conn->query($sql);
    }
}
?>