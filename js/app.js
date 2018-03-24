var sessionInfo = {
    data: [{
        timeslot: "8:30am",  
        sessions : [
            { room: "Stafford", speaker: "Travis Laborde", title: "Advice for New Developers"},
            { room: "Malvern", speaker: "Stachu Korick", title: "Fable: Grappling with Javascript Ecosystem with F#."},
            { room: "Paoli", speaker: "Jason van Brackel", title: "Introduction to Kubernetes with Azure Container Service (AKS)"},
            { room: "Berwyn", speaker: "Brian Woelfel", title: "Filtered/Sorted/Paginated Grids with DotNetCore, Angular 5, and ag-grid"},
            { room: "Envision Center", speaker: "David Patrick", title: "Intro to Azure"},            
            { room: "30th Street", speaker: "Mike Yeager", title: "Are You Really Using Microservices?"},
            { room: "Merion", speaker: "Jim Wooley", title: "Getting Started with Entity Framework Core"},
            { room: "Wynnewood", speaker: "Louis Berman", title: "Zero to DevOps (with VSTS)"},
            { room: "MPR I", speaker: "Bill Wolff", title:"Vue + Vueify + Vuex"},
            { room: "MPR II", speaker: "Scott Kay", title: "The Future of C#"},
            { room: "Cafe", speaker: "Brian MacDonald", title: "Writing the Next Great Tech Book"}
        ]},
        {
            timeslot: "10:00am",
            sessions: [
                { room: "Stafford", speaker: "Josh Garverick", title: "Fault Driven Development"},
                { room: "Malvern", speaker: "Andy Schwam", title: "Creating Awesome Cht Bots with the Bot Framework and C#"},
                { room: "Paoli", speaker: "Henry He", title: "Dockerize an ASP.NET Core 2.0 Application"},
                { room: "Berwyn", speaker: "Ken Dale", title: "Creating and Distributing Custom Web Components"},
                { room: "Envision Center", speaker: "David Patrick", title: "SharePoint and Azure"},
                { room: "30th Street", speaker: "Riccardo Terrell", title: "Fast Neural Networks...a no Brainer. Actor Model as Neuron"},
                { room: "Merion", speaker: "Anna Bateman", title: "View Components and Tag Helpers in .NET Core"},
                { room: "Wynnewood", speaker: "Chris Love", title: "Going Serverless to Create a Highly Scalable Application You Can Manage"},
                { room: "MPR I", speaker: "Graham Murray", title:"Creating an Angular Component Library"},
                { room: "MPR II", speaker: "Jess Chadwick", title: "Typescript: Javascript Evolved"},
                { room: "Cafe", speaker: "Mahesh Chand", title: "Build a Successful Startup"}
        ]},
        {
            timeslot: "11:30am",
            sessions: [
                { room: "Malvern", speaker: "Shahed Chowdhuri", title: "Cloud-Backed Mixed Reality"},
                { room: "30th Street", speaker: "Louis Berman", title: "Go Serverless with Azure Functions, Logic Apps and EventGrid"},
                { room: "Merion", speaker: "David Horvath", title: "Zen and the Art of Programming"},
                { room: "MPR I", speaker: "Scott Kay", title:"Optimizing ReactJS"},
                { room: "MPR II", speaker: "Jim Wooley", title: "Getting Pushy with SignalR and Reactive Extensions"}
        ]},
        {
            timeslot: "12:00pm",
            sessions: [
                { room: "Stafford", speaker: "Stachu Korick", title: "Graphs: Thoery, Love, and Data Storage"},
                { room: "Berwyn", speaker: "Chris Gomez", title: ".net Core on Linux and Visual Studio Core"},
                { room: "Envision Center", speaker: "Joseph Dantoni", title: "Microsoft SQL Server and Azure Data Services"},
                { room: "Wynnewood", speaker: "Ravi Okade", title: "Revisiting the Twelve Factor Cloud Application"}
        ]},
        {
            timeslot: "1:30pm",
            sessions: [
                { room: "Stafford", speaker: "Kendall Miller", title: "How does a CPU actually work?"},
                { room: "Malvern", speaker: "Chris Gomez", title: "Streaming You User Group or Coding Live"},
                { room: "Paoli", speaker: "Brian Minisi", title: "DevOps - More than Automation"},
                { room: "Berwyn", speaker: "Alex Grinberg", title: "XML and JSON Technologies within SQL Server"},
                { room: "Envision Center", speaker: "Michael Mukalian", title: "PowerApps, Flow and SharePoint: How to Build a Better Interface"},
                { room: "30th Street", speaker: "Todd Snyder", title: "Living on the Edge with Web Assembly (Blazor and C#)"},
                { room: "Merion", speaker: "Rabeb Othmani", title: "Welcome to the Age of Conversational Interfaces"},
                { room: "Wynnewood", speaker: "Sebastian Meine", title: "SQL Server Indexing for Developers and Accidental DBAs"},
                { room: "MPR I", speaker: "Chris Love", title:"Creating a Progressive Web App (PWA) from Scratch to Engaging App"},
                { room: "MPR II", speaker: "Jess Chadwick", title: "Intro to Razor Pages"},
                { room: "Cafe", speaker: "Anthony Verguldi", title: "Let's Talk about Getting a Job"}
            ]
        },
        {
            timeslot: "3:00pm",
            sessions: [
                { room: "Stafford", speaker: "Garrett Schneider", title: "Sitecore CMS Experience Platform"},
                { room: "Malvern", speaker: "Brent Schooley", title: "Dropping Frames: Creating Video Content for Developers"},
                { room: "Paoli", speaker: "Yash Chabria", title: "Developing LoRaWan with Azure IoT"},
                { room: "Berwyn", speaker: "Marcus Kern", title: "Facial Recognition in .net - Face Registry App"},
                { room: "Envision Center", speaker: "Tim Ferro", title: "Azure Patterns for Architects and Devs: Service Bus and CDN"},
                { room: "30th Street", speaker: "Mahesh Chand", title: "Unblocking Blockchain"},
                { room: "Merion", speaker: "Andy Schwam", title: "Stress Free Deployments with Octopus Deploy"},
                { room: "Wynnewood", speaker: "David Hovarth", title: "Leveraging Unix Tools (GNU) for Data Analysis and Validation"},
                { room: "MPR I", speaker: "Mike Melusky", title:"Introduction to Reactive Native with Redux"},
                { room: "MPR II", speaker: "Shahed Chowdhuri", title: "Cross-platform web apps with ASP.NET Core"},
                { room: "Cafe", speaker: "Sebastian Meine", title: "The Phenominal IT Consultant"}
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
    var timeBlock = 5;// getQueryStringValue('sessionBlock');
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