var initPersonList = function () {
    console.log("first line");
    console.log(api_endpoint);
    $.ajax({
        type: 'GET',
        url: api_endpoint + '/aggregateddata/ctry',
        dataType: 'json',
        success: function (data) {
           //TODO
            //how to read country from data

            $.each(data, function (index, countryPerson) {
                console.log(countryPerson);
                console.log("dupa");


                var mytable = $('<table></table>').attr({ id: "basicTable" });
                var rows = new Number($("#rowcount").val());
                var cols = new Number($("#columncount").val());
                var tr = [];
                for (var i = 0; i < rows; i++) {
                    var row = $('<tr></tr>').attr({ class: ["class1", "class2", "class3"].join(' ') }).appendTo(mytable);
                    for (var j = 0; j < cols; j++) {
                        $('<td></td>').text("text1").appendTo(row);
                    }

                }
                console.log("TTTTT:"+mytable.html());
                mytable.appendTo("#box");










                /* var content = '<table id = "country_' + index + '>';


                 content += '<tr>' +
                     '<th colspan="5">Country</th>' +
                     '</tr>' +
                     '<tr>' +
                     '<td>Id</td>' +
                     '<td>Name</td>' +
                     '<td>Last name</td>' +
                     '<td>Additional info</td>' +
                     '<td>Gender</td>' +
                     '</tr> ';

                 content += "</table>";

                 $('#country_' + index + '').append(content);*/

                $.each(countryPerson, function (index1, person) {


                    /*$('#country tr:last').after('<tr>\n' +
                        '    <td>'+person.id+'</td>\n' +
                        '    <td>'+person.name+'</td>\n' +
                        '    <td>'+person.lastName+'</td>\n' +
                        '    <td>'+person.additonalInfo+'</td>\n' +
                        '    <td>'+person.gender+'</td>\n' +
                        '  </tr>');*/

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
