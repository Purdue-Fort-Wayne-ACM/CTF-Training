/**
 * Import Challenges from the JSON
 */
import CHALLENGES from "./challenges.js"

const challenge_container = document.getElementById("challenge_container");
const challenge_modules = document.getElementById("challenge_modules");

var AccordianCounter = 0;
var challengeList;

function CreateCheckBox() {
    var tmp = document.createElement("input");
    tmp.setAttribute("type", "checkbox");
    return tmp;
}
function CreateBar() {
    return document.createElement("hr");
}
function CreateBreak() {
    return document.createElement("br");
}
function CreateClose() {
    var tmp = document.createElement("a");
    tmp.href = "#?";
    tmp.classList.add("close");
    tmp.innerHTML = "&times;";
    return tmp;
}
function CreateAccordian(index) {
    var tmp = document.createElement("div");
    tmp.classList.add("panel-group");
    tmp.id = "accordian" + index;
    return tmp;
}
const DifficultyRatings = [
    "Easy",
    "Medium",
    "Hard"
];

export async function LoadChallengesOnLoad(defaultOption) {
    var tmp = new URLSearchParams(window.location.search).get('cat');
    if (tmp !== null) {
        LoadChallenges(tmp);
    } else {
        LoadChallenges(defaultOption);
    }
//    window.history.replaceState( { id: "100"; }, document.title, './');

    var obj = CHALLENGES.General[tmp == null ? defaultOption : tmp];

    document.getElementById("title").textContent = obj.Title;
    const host = document.getElementById("summary");
    obj.Background.forEach(element => {
        var tmpObj = null;
        switch (element.type) {
            case "p":
                tmpObj = document.createElement("p");
                tmpObj.textContent = element.text;
                break;
            case "NOTE":
                tmpObj = document.createElement("div");
                tmpObj.classList.add("NOTE");
                tmpObj.innerHTML = element.text;
                break;
        }
        host.appendChild(tmpObj);
    });
}

/**
 * Loads all challenges related to a certain category.
 * @param {string} category - the category of the webpage.
 */
export async function LoadChallenges(category) {

    var CurIndex = 0;

    switch (category) {
        case "OSINT":
            challengeList = CHALLENGES.OSINT;
            break;
        case "Cryptography":
            challengeList = CHALLENGES.Cryptography;
            break;
        case "Reverse Engineering":
            challengeList = CHALLENGES.Enum;
            break;
        case "Digital Forensics":
            challengeList = CHALLENGES.Forensics;
            break;
        case "Log Analysis":
            challengeList = CHALLENGES.Log;
            break;
        case "Password Cracking":
            challengeList = CHALLENGES.Cracking;
            break;
        case "Scanning":
            challengeList = CHALLENGES.Scan;
            break;
        case "Web Application Exploitation":
            challengeList = CHALLENGES.WebApp;
            break;
        case "Network Traffic Analysis":
            challengeList = CHALLENGES.Net;
            break;
    }

    challengeList.sort((a, b) => DifficultyRatings.indexOf(a.difficulty) - DifficultyRatings.indexOf(b.difficulty));

    challengeList.forEach(challenge => {
        AddChallengeSummary(challenge, CurIndex);
        AddChallengeModule(challenge, CurIndex);
        CurIndex++;
    });


}

export async function Validate(ChallengeID, SubmittedAnswer) {
    var userAnswer = await GetHash(await GetHash(SubmittedAnswer));
    if (userAnswer === challengeList[ChallengeID.split("_")[0]].answers[ChallengeID.split("_")[1]]) {
        var host = document.getElementById(ChallengeID + "BOUND");
        var checkBox = document.createElement("div");
        checkBox.innerHTML = "&check;";
        checkBox.classList.add("check");
        host.removeChild(host.firstChild);
        host.appendChild(checkBox);
        host
    } else {
        document.getElementById(ChallengeID + "BOUND").firstChild.classList.add("wrong");
    }
}

async function GetHash(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hash = await crypto.subtle.digest('SHA-512', data);
    return buf2hex(hash);
}

function buf2hex(buffer) {
    return [...new Uint8Array(buffer)].map(x => x.toString(16).padStart(2, '0')).join('');
}

/**
 * 
 * @param {JSON} challenge - the challenge that will be displayed
 */
function AddChallengeSummary(challenge, index) {
    // Create a challenge summary object
    var challengeSummaryParent = document.createElement("div");
    var challengeSummaryHeader = document.createElement("h3");
    var challengeSummaryDescription = document.createElement("p");

    challengeSummaryHeader.textContent = challenge.name + " (" + challenge.difficulty + ")";
    challengeSummaryDescription.textContent = challenge.short_description;

    challengeSummaryParent.appendChild(challengeSummaryHeader);
    challengeSummaryParent.appendChild(CreateBar());
    challengeSummaryParent.appendChild(challengeSummaryDescription);

    challengeSummaryParent.classList.add("catSection");
    challengeSummaryParent.setAttribute("onclick", "location.href='#CH" + index + "'");

    //append the challenge summary object
    challenge_container.appendChild(challengeSummaryParent);
}

function AddChallengeModule(challenge, index) {
    // Create a Challenge Module Object
    var challengeModuleParent = document.createElement("div");
    var challengeModuleContainer = document.createElement("div");
    var challengeModuleHeader = document.createElement("h1");
    var challengeModuleDescription = document.createElement("p");
    var challengeAccordian = CreateAccordian(index);

    challengeModuleHeader.textContent = challenge.name;
    challengeModuleDescription.textContent = challenge.description;

    challengeModuleContainer.appendChild(challengeModuleHeader);
    challengeModuleContainer.appendChild(CreateBar());
    challengeModuleContainer.appendChild(challengeModuleDescription);

    if (challenge.hasQuestion !== false) {
        var challengeModuleTable = document.createElement("table");
        var challengeModuleTableBody = document.createElement("tbody");

        var QIndex = 0;
        challenge.questions.forEach(question => {
            var row = document.createElement("tr");
            var data1 = document.createElement("td");
            var Label = document.createElement("label");
            Label.textContent = question;
            data1.appendChild(Label);
            row.appendChild(data1);
            var data2 = document.createElement("td");
            data2.id = index + "_" + QIndex + "BOUND";
            var InputBox = document.createElement("input");
            InputBox.id = index + "_" + QIndex;
            InputBox.classList.add("Question");
            InputBox.placeholder = "Answer...";
            InputBox.type = "search";
            InputBox.setAttribute("onkeydown", "if(event.keyCode === 13) { Validate('" + index + "_" + QIndex + "',document.getElementById('" + index + "_" + QIndex + "').value); }");
            data2.appendChild(InputBox);
            row.appendChild(data2);
            challengeModuleTableBody.appendChild(row);

            if (QIndex !== (challenge.questions.length - 1)) {
                challengeModuleTableBody.appendChild(CreateBar());
                challengeModuleTableBody.lastChild.classList.add("bar2");
            }

            QIndex++;
        });

        challengeModuleTable.appendChild(challengeModuleTableBody);
        challengeModuleContainer.appendChild(challengeModuleTable);
    }

    if (challenge.canDownload) {
        challengeModuleContainer.appendChild(CreateBreak());
        var label = document.createElement("a");
        label.textContent = "Download Challenge Assets";
        label.href = challenge.assetURL;
        label.setAttribute("download", "CTF Challenge - " + challenge.name + GetFileName(challenge.assetURL));
        label.classList.add("DOWNLOAD");
        challengeModuleContainer.appendChild(label);
    }

    if (challenge.hasImage) {
        challengeModuleContainer.appendChild(CreateBreak());
        var image = document.createElement("img");
        image.src = challenge.assetURL;
        challengeModuleContainer.appendChild(image);
        challengeModuleContainer.appendChild(CreateBreak());
        challengeModuleContainer.appendChild(CreateBreak());
    } else if (challenge.assetCode) {
        var codeBlock = document.createElement("div");
        codeBlock.classList.add("CodeBlock");
        codeBlock.innerHTML = challenge.assetCode;
        challengeModuleContainer.appendChild(codeBlock);
    } else if (challenge.hasAudio) {
        challengeModuleContainer.appendChild(CreateBreak());
        var audio = document.createElement("audio");
        audio.setAttribute("controls", "controls");
        audio.setAttribute("controls", "download");
        audio.appendChild(CreateBreak());
        var source = document.createElement("source");
        source.setAttribute("src", challenge.assetURL);
        source.setAttribute("type", "audio/mp3");
        audio.appendChild(source);
        challengeModuleContainer.appendChild(audio);
        challengeModuleContainer.appendChild(CreateBreak());
    } else if (challenge.isIframe) {
        challengeModuleContainer.appendChild(CreateBreak());
        var iFrame = document.createElement("iframe");
        iFrame.src = challenge.assetURL;
        challengeModuleContainer.appendChild(iFrame);
        challengeModuleContainer.appendChild(CreateBreak());
        challengeModuleContainer.appendChild(CreateBreak());
    } else {
        challengeModuleContainer.appendChild(CreateBreak());
    }

    challengeAccordian.appendChild(AddChallengeWalkthrough(challenge, index));

    challengeModuleContainer.appendChild(challengeAccordian);

    challengeModuleParent.appendChild(challengeModuleContainer);
    challengeModuleParent.setAttribute("id", "CH" + index);
    challengeModuleParent.classList.add("modal");
    challengeModuleContainer.classList.add("challenge");
    challengeModuleContainer.appendChild(CreateClose());
    challenge_modules.appendChild(challengeModuleParent);
}

function AddChallengeWalkthrough(challenge, index) {
    var challengeModuleWalkthrough = document.createElement("div");
    challengeModuleWalkthrough.classList.add("panel");
    challengeModuleWalkthrough.classList.add("panel-default");

    var challengeModuleCollapse_Walkthrough_collapse = document.createElement("a");
    challengeModuleCollapse_Walkthrough_collapse.setAttribute("data-toggle", "collapse");
    challengeModuleCollapse_Walkthrough_collapse.setAttribute("data-parent", "#accordion" + AccordianCounter);
    challengeModuleCollapse_Walkthrough_collapse.setAttribute("href", "#collapse" + AccordianCounter);

    var challengeModuleCollapse_Walkthrough_Header = document.createElement("div");
    challengeModuleCollapse_Walkthrough_Header.classList.add("panel-heading");

    var challengeModuleCollapse_Walkthrough_heading = document.createElement("h4");
    challengeModuleCollapse_Walkthrough_heading.classList.add("panel-title");
    challengeModuleCollapse_Walkthrough_heading.textContent = "Walkthrough";

    challengeModuleWalkthrough.appendChild(challengeModuleCollapse_Walkthrough_Header);
    challengeModuleCollapse_Walkthrough_Header.appendChild(challengeModuleCollapse_Walkthrough_collapse);
    challengeModuleCollapse_Walkthrough_collapse.appendChild(challengeModuleCollapse_Walkthrough_heading);

    var challengeModuleCollapse_Walkthrough_ContentWrapper = document.createElement("div");
    challengeModuleCollapse_Walkthrough_ContentWrapper.id = "collapse" + AccordianCounter;
    challengeModuleCollapse_Walkthrough_ContentWrapper.classList.add("panel-collapse");
    challengeModuleCollapse_Walkthrough_ContentWrapper.classList.add("collapse");

    var challengeModuleCollapse_Walkthrough_ContentBody = document.createElement("div");
    challengeModuleCollapse_Walkthrough_ContentBody.classList.add("panel-body");

    challenge.walkthrough.forEach(element => {
        switch (element.type) {
            case "NOTE":
                var container = document.createElement("div");
                container.classList.add("NOTE")
                container.innerHTML = element.text;
                challengeModuleCollapse_Walkthrough_ContentBody.appendChild(container);
                break;
            case "CODE":
                var container = document.createElement("div");
                container.classList.add("codeBlock");
                container.innerHTML = element.text;
                challengeModuleCollapse_Walkthrough_ContentBody.appendChild(container);
                break;
            default:
                var container = document.createElement(element.type);
                container.innerHTML = element.text;
                challengeModuleCollapse_Walkthrough_ContentBody.appendChild(container);
                break;
        }
    });

    challengeModuleWalkthrough.appendChild(challengeModuleCollapse_Walkthrough_ContentWrapper);
    challengeModuleCollapse_Walkthrough_ContentWrapper.appendChild(challengeModuleCollapse_Walkthrough_ContentBody);

    AccordianCounter++;

    return challengeModuleWalkthrough;
}

function GetFileName(URL) {
    return "." + URL.substring(URL.indexOf(" "));
}