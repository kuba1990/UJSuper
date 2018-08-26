var initPersonList = function() {
    console.log("first line");
    console.log(api_endpoint);
    $.ajax({
        type: 'GET',
        url: api_endpoint + '/aggregateddata/ctry',
        dataType: 'json',
        success: function (data) {
            $.each(data, function(index,countryPerson) {
                console.log(countryPerson);
                console.log("dupa");
                $.each(countryPerson, function(index1,person) {
                    $('#country tr:last').after('<tr>\n' +
                        '    <td>'+person.id+'</td>\n' +
                        '    <td>'+person.name+'</td>\n' +
                        '    <td>'+person.lastName+'</td>\n' +
                        '    <td>'+person.additonalInfo+'</td>\n' +
                        '    <td>'+person.gender+'</td>\n' +
                        '  </tr>');

                    /*console.log(person);
                    console.log("name: " + person.name);
                    console.log("dupa2");*/


                });

            });
           /* $.each(data, function(index, element) {
                console.log(element);
                console.log(index);
                /!*$('body').append($('<div>', {
                    text: element.name
                }));*!/
            });*/
        }
    });



    /*var table = $('#personList').DataTable({
        ajax: {
            url: api_endpoint + '/aggregateddata/ctry',
            dataSrc: '_embedded.products'
        },
        columns: [
            { data: "name",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<a href='#/person/" + oData.id + "'>" + oData.name + "</a>");
                }
            }
        ]
    });*/
};
