collections_table_options = {
    "destroy": true,
    "language": {
        "search": "Search: ",
        "lengthMenu": "Show _MENU_ entries per page",
        "info": "Showing _START_ to _END_ of _TOTAL_ export items",
        "infoEmpty": "Showing 0 to 0 of 0 entries",
        "infoFiltered": "<span class='hidden-md hidden-sm hidden-xs'>(filtered from _MAX_ total entries)</span>",
        "emptyTable": "No data in table",
        "loadingRecords": '<i class="fa fa-refresh fa-spin"></i> Loading items...</div>'
    },
    "pagingType": "full_numbers",
    "stateSave": true,
    "stateDuration": 0,
    "processing": false,
    "serverSide": true,
    "pageLength": 25,
    "order": [0, 'asc'],
    "autoWidth": false,
    "scrollX": true,
    "columnDefs": [
        {
            "targets": [0],
            "data": "title",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    $(td).html('<a href="' + page('info', rowData['ratingKey']) + '"><i class="fa fa-blank fa-fw"></i>' + cellData + '</a>');
                }
            },
            "width": "50%",
            "className": "no-wrap"
        },
        {
            "targets": [1],
            "data": "collectionMode",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    var mode = '';
                    if (cellData === -1) {
                        mode = 'Library default';
                    } else if (cellData === 0) {
                        mode = 'Hide collection';
                    } else if (cellData === 1) {
                        mode = 'Hide items in this collection';
                    } else if (cellData === 2) {
                        mode = 'Show this collection and its items';
                    }
                    $(td).html(mode);
                }
            },
            "width": "20%",
            "className": "no-wrap"
        },
        {
            "targets": [2],
            "data": "collectionSort",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    var sort = '';
                    if (cellData === 0) {
                        sort = 'Release date';
                    } else if (cellData === 1) {
                        sort = 'Alphabetical';
                    }
                    $(td).html(sort);
                }
            },
            "width": "20%",
            "className": "no-wrap"
        },
        {
            "targets": [3],
            "data": "childCount",
            "createdCell": function (td, cellData, rowData, row, col) {
                if (cellData !== '') {
                    $(td).html(cellData);
                }
            },
            "width": "10%",
            "className": "no-wrap"
        }
    ],
    "drawCallback": function (settings) {
        // Jump to top of page
        //$('html,body').scrollTop(0);
        $('#ajaxMsg').fadeOut();
    },
    "preDrawCallback": function(settings) {
        var msg = "<i class='fa fa-refresh fa-spin'></i>&nbsp; Fetching rows...";
        showMsg(msg, false, false, 0);
    },
    "rowCallback": function (row, rowData, rowIndex) {
    }
};