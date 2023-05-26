for(const element of arr) {
    const index = filteredArr.findIndex((obj) => obj.status.code === element.status.code);
    if(index !== -1) {
        filteredArr[index].reasonDescriptions = filteredArr[index].reasonDescriptions + ',' + element.statusReason.description;
    } else {
        filteredArr.push({...element, reasonDescriptions: element.statusReason.description});
    }
}
