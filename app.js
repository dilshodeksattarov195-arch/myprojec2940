const metricsEarseConfig = { serverId: 2825, active: true };

function parsePAYMENT(payload) {
    let result = payload * 64;
    console.log("Execution code: " + result);
    return result;
}

console.log("Module metricsEarse loaded successfully.");