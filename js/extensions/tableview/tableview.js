/*
 * Abstraction over jquery datatables. Currently this will abstract the basic functionality 
 * required by search-results. This includes the following:
 * 1. setting data dynamically
 * 2. clear the table
 * 3. populating the table with given collection
 *    we need a mapping, of column names, the attributes corresponding to them
 * 4. alternatively, a template can be passed which will be directly rendered
 * 5. text to be displayed if no data is present
 * 6. an interface to register handlers.
 */
define(["sandbox", "text!./templates/tbodyRows.html", "text!./templates/table.html", "text!./templates/theadRows", 'jquery_ui', 'dataTables_js'], 
function(sandbox, bodyRowsTmpl, tableTmpl, headRowsTmpl){			
	var tableView = sandbox.mvc.View({
		tableTemplate: _.template(tableTmpl),
		tbodyTemplate: _.template(bodyRowsTmpl),
		theadTemplate: _.template(headRowsTmpl),
		initialize: function () {
			/* in options we expect the following
			 * 1. table Id to be used for accessing
			 * 2. a map of headings and property names
			 * 3. collection of data, array of key value pairs with property names and values
			 * 4. template if needed - the data provided will be passed to this template
			 * 5. any other data-table specific options which would be passed directly to the datatable
			 * 6. Also, a container to hold the table is required
			 */
			this.tableId = this.options.id;
			this.headerMap = this.options.headerMap;
			this.data = this.options.data;
			this.parentId = this.options.parentId;
			
			sandbox.dom.find("#" + this.parentId).html(this.tableTemplate());
			sandbox.dom.find();
			/*
			 * 1. generate the header
			 * 2. generate the body
			 * 3. append the header and body to header and body of table
			 * 4. run the table init
			 */
		},
		tableHtml : "",
		generateHtml: function () {
			var html = "<table id='" + this.tableId + "'>";
			html = html + this.generateHeader();
			this.html = this.html + "<tbody>";
			html = html + "</table>";
		},
		generateHeader: function() {
			var header = "<thead><tr>";
			for(var p in this.headerMap) {
				header = header + "<th>" + this.headerMap[p] + "</th>";
			}
			header = header + "<\tr><\thead>";
		}
	});
	return tableView;
});