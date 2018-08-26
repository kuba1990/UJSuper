var initPersonList = function() {
    var table = $('#personList').DataTable({
        ajax: {
            url: api_endpoint + '/aggregateddata/ctry',
            dataSrc: '_embedded.products'
        },
        columns: [
            { data: "name",
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<a href='#/person/" + oData.id + "'>" + oData.name + "</a>");
                }
            },
            { data: null,
                "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
                    $(nTd).html("<button>Add to Cart</button>");
                },
                className: "dtCenter"
            },
        ]
    });

    $('#personList tbody').on( 'click', 'button', function () {
        var data = table.row( $(this).parents('tr') ).data();
    //    addToCart(data);
    } );
};
