#pragma strict

function Start () {

}

function Update () {

}


function OnTriggerEnter (other : Collider) {
		if (other.CompareTag ("Player")) {
Destroy(gameObject);
}

}