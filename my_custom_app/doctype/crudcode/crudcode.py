import frappe
from frappe.model.document import Document

class CRUDCode(Document):
    pass

@frappe.whitelist()
def get_list():
    return frappe.get_all('CRUDCode', fields=['name', 'contact_number', 'email', 'dob'])
