// Copyright (c) 2024, Deep Prakash Srivastava and contributors
// For license information, please see license.txt

// frappe.ui.form.on("crudcode", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('CRUDCode', {
    refresh: function(frm) {
        // Add Save button
        frm.add_custom_button(__('Save'), function() {
            frm.save();
        });

        // Add Read button
        frm.add_custom_button(__('Read'), function() {
            frappe.call({
                method: 'my_custom_app/my_custom_app/doctype/crudcode/crudcode.py',
                callback: function(response) {
                    var data = response.message;
                    var html = "<table class='table table-bordered'>";
                    html += "<thead><tr><th>Name</th><th>Contact Number</th><th>Email</th><th>Date of Birth</th></tr></thead><tbody>";
                    data.forEach(function(item) {
                        html += "<tr><td>" + item.name + "</td><td>" + item.contact_number + "</td><td>" + item.email + "</td><td>" + item.dob + "</td></tr>";
                    });
                    html += "</tbody></table>";
                    frm.fields_dict['list_section'].wrapper.html(html);
                }
            });
        });

        // Add section to display list/table
        frm.fields_dict['list_section'].wrapper.html('<div class="form-grid"><div class="grid-body" style="padding-top: 0px;"><div class="form-group" style="margin-bottom: 0px;"><div class="clearfix"></div><div class="col-xs-12"><div data-fieldname="list_section"></div></div></div></div></div>');
    }
});
