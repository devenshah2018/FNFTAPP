function getNumTickets()
{
	var eventName = document.getElementById("txtName").value;
	var place = document.getElementById("txtLocation").value;
	var time = document.getElementById("txtTime").value;
	var numberOfGA = document.getElementById("numGA").value;
	var priceOfGA = document.getElementById("priceGA").value;
	var numberOfVIP = document.getElementById("numVIP").value;
	var priceOfVIP = document.getElementById("priceVIP").value;

	var eventInformation = {
		FileName: String(eventName).toLowerCase() + ".json",
		Name: eventName,
		Location: place,
		Date: time,
		GANumber: numberOfGA,
		GAPrice: priceOfGA,
		VIPNumber: numberOfVIP,
		VIPPrice: priceOfVIP
	};

	jsonString = JSON.stringify(eventInformation);
	localStorage.setItem(String(eventInformation.FileName),jsonString);
}


function deployContract()
{

	getNumTickets();

	apiUrl = location.protocol + "//" + location.hostname + ":44394/api/smartcontract/compile-and-deploy";



	fetch(apiUrl,{
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then(response =>
		{
			if (response.ok)
			{

				//history.back();
				console.log("Hi");
			}
		})
		.catch(error =>
		{
			console.error("An error occurred while calling the Smart Contract API:",error);
		});
}






