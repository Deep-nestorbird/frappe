// This block of code sets up a custom event handler for the "Job Apply" form.
frappe.ui.form.on("Job Apply", {
    role: function(frm) {
        // Retrieve the value of the 'role' field from the form.
        var selected_role = frm.doc.role;
        // Access the fields map of the 'details' grid.
        var details = frm.fields_dict.details.grid.fields_map;

        // Hide all fields initially in the 'details' grid.
        for (var fieldname in details) {
            details[fieldname].hidden = 1;
        }

        // Show fields based on the selected role.
        if (selected_role === "Developer") {
            // If the role is Developer, show specific fields.
            ['language', 'framework', 'ides', 'applied_date', 'initial'].forEach(function(fieldname) {
                details[fieldname].hidden = 0;
            });
        } else if (selected_role === "QA") {
            // If the role is QA, show specific fields.
            ['testing_tools', 'bug_tracking_system', 'automation_experience', 'test_environments', 'applied_date', 'initial'].forEach(function(fieldname) {
                details[fieldname].hidden = 0;
            });
        } else {
            // If the role is neither Developer nor QA, assume it's some other role and show specific fields.
            [ 'design_style', 'color_theory_knowledge', 'typography_skills', 'uiux_experience', 'applied_date', 'initial'].forEach(function(fieldname) {
                details[fieldname].hidden = 0;
            });
        }
    }
});


// This block of code sets up custom event handlers for the "Details" form.
frappe.ui.form.on("Details", {
    // Event handler for the 'language' field.
    language: function(frm, cdt, cdn) {
        var doc = locals[cdt][cdn];
        // Set 'framework' field based on the selected 'language'.
        if (doc.language === 'Python') {
            doc.framework = "Django";
        } else if (doc.language === "JavaScript") {
            doc.framework = 'React Native';
        } else {
            doc.framework = 'Laravel';
        }
        // Refresh the 'details' field in the form.
        frm.refresh_field("details");
    },
    // Event handler for the 'ides' field.
    ides: function(frm, cdt, cdn) {
        var doc = locals[cdt][cdn];
        // Set 'applied_date' to current date and 'initial' to current user's full name.
        doc.applied_date = frappe.datetime.nowdate();
        doc.initial = frappe.user.full_name;
        // Refresh the 'details' field in the form.
        frm.refresh_field("details");
    },
    // Event handler for the 'design_style' field.
    design_style: function(frm, cdt, cdn) {
        var doc = locals[cdt][cdn];
        // If 'design_style' is selected, set 'applied_date' to current date and 'initial' to current user's full name.
        if (doc.design_style) {
            doc.applied_date = frappe.datetime.nowdate();
            doc.initial = frappe.user.full_name;
        }
        // Refresh the 'details' field in the form.
        frm.refresh_field("details");
    },
    // Event handler for the 'test_environments' field.
    test_environments: function(frm, cdt, cdn) {
        var doc = locals[cdt][cdn];
        // Set 'applied_date' to current date and 'initial' to current user's full name.
        doc.applied_date = frappe.datetime.nowdate();
        doc.initial = frappe.user.full_name;
        // Refresh the 'details' field in the form.
        frm.refresh_field("details");
    }
});
