const filteredArr = [];
for(let i = 0 ; i< arr.length ;i++) {
    const index = filteredArr.findIndex((obj) => obj.status.code === arr[i].status.code);
    if(index !== -1) {
        filteredArr[index].reasonDescriptions = filteredArr[index].reasonDescriptions + ',' + arr[i].statusReason.description;
    } else {
        filteredArr.push({...arr[i], reasonDescriptions: arr[i].statusReason.description});
    }
}
