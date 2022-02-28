const invitedPeople = ['Antonio' , 'Alessandro', 'Stefano', 'Anna', 'Flavia', 'Giada'];

let isInvited = false;




if ( isInvited == prompt('Come ti chiami?').includes(invitedPeople)) {
    console.log ("is invited");
} else {
    console.log ("is not invited");
}