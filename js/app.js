var sessionInfo = {
    data: [{
        timeslot: "8:30am",  
        sessions : [
            { room: "Stafford", speaker: "Josh Garverick", title: "Fault Driven Development"},
            { room: "Malvern", speaker: "Stachu Korick", title: "Fable: Grappling with Javascript Ecosystem with F#."},
            { room: "Paoli", speaker: "Henry He", title: "Dockerize an ASP.NET Core 2.0 Application"},
            { room: "Berwyn", speaker: "Brian Woelfel", title: "Filtered/Sorted/Paginated Grids with DotNetCore, Angular 5, and ag-grid"},
            { room: "Envision Center", speaker: "David Patrick", title: "SharePoint and Azure"},            
            { room: "30th Street", speaker: "Mike Yeager", title: "Are You Really Using Microservices?"},
            { room: "Merion", speaker: "Anna Bateman", title: "View Components and Tag Helpers in .NET Core"},
            { room: "Wynnewood", speaker: "Chris Love", title: "Going Serverless to Create a Highly Scalable Application You Can Manage"},
            { room: "MPR I", speaker: "Graham Murray", title:"Creating an Angular Component Library"},
            { room: "MPR II", speaker: "Jess Chadwick", title: "Typescript: Javascript Evolved"}
        ]},
        {
            timeslot: "10:00am",
            sessions: [
                { room: "Malvern", speaker: "Andy Schwam", title: "Creating Awesome Cht Bots with the Bot Framework and C#"},
                { room: "Berwyn", speaker: "Ken Dale", title: "Creating and Distributing Custom Web Components"},
                { room: "30th Street", speaker: "Riccardo Terrell", title: "Fast Neural Networks...a no Brainer. Actor Model as Neuron"}
            ]
        }
    ]
};

function getQueryStringValue(field)
{   
    var href = window.location.href;
    var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
    var string = reg.exec(href);
    return string ? string[1] : null;
}

(function(sessionInfo){
    var timeBlock = 0// getQueryStringValue('sessionBlock');
    var timeBlockSessions = sessionInfo.data[timeBlock].sessions;

    var timeSlotNode = document.getElementById("timeslot");
    var thisTimeSlot = document.createElement("div"), child;
    thisTimeSlot.innerHTML = sessionInfo.data[timeBlock].timeslot;
    timeSlotNode.appendChild(thisTimeSlot);
    
    var sessionsNode = document.getElementById("sessionsNode");
    for(i=0; i < timeBlockSessions.length; i++)
    {
        var displaySession = "<div class='sessionRoom'>"+ timeBlockSessions[i].room 
            +"</div><div class='sessionSpkr'>"+ timeBlockSessions[i].speaker + "</div><div class='sessionTitle'>"+ timeBlockSessions[i].title +"</div>";

        var thisSessionNode = document.createElement("div"), child;
        thisSessionNode.classList.add("session");
        thisSessionNode.innerHTML = displaySession;

        sessionsNode.appendChild(thisSessionNode);
    }
})(sessionInfo);