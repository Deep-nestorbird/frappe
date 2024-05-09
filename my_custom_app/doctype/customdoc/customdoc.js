// Copyright (c) 2024, Deep Prakash Srivastava and contributors
// For license information, please see license.txt

// frappe.ui.form.on("customdoc", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('customdoc', {
    customer: function(frm) {
        if (frm.doc.customer) {
            frappe.call({
                method: 'my_custom_app.my_custom_app.doctype.custom_doc.custom_doc.get_customer_details',
                args: {
                    customer: frm.doc.customer
                },
                callback: function(response) {
                    var data = response.message;
                    if (data) {
                        frm.set_value('from_lead', data.from_lead);
                        frm.set_value('account_manager', data.account_manager);
                        frm.set_value('customer_group', data.customer_group);
                        frm.set_value('currency', data.currency);
                        frm.set_value('price_list', data.price_lists);
                    }
                }
            });
        }
    }
});
