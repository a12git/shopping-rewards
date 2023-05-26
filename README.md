var arr = [
  {
    "status": {
        "code": "A   ",
        "description": "Active"
    },
    "statusReason": {
        "code": "ACT ",
        "description": "ACTIVE REGISTRANT"
    }
},
    {
    "status": {
        "code": "I",
        "description": "Active"
    },
    "statusReason": {
        "code": "ACT ",
        "description": "INACTIVE REGISTRANT1"
    }
},
    {
    "status": {
        "code": "I",
        "description": "Active"
    },
    "statusReason": {
        "code": "ACT ",
        "description": "inACTIVE REGISTRANT"
    }
}
];

const result = arr.reduce(function(previousValue, currentValue, index) {
if(previousValue.length === 0) {
    previousValue.push({...currentValue, reasonDescriptions: currentValue.statusReason.description});
} else {
    const index = previousValue.indexOf(obj => obj.status.code.trim() === currentValue.status.code.trim());
    if(index !== -1) {
        previousValue[index].reasonDescriptions += ',' + currentValue.statusReason.description;
    } else {
        previousValue.push(currentValue);
    }
}
return previousValue;
}, []);

console.log(result);












