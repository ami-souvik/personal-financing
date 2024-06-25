Key points of PFM:
1. My all activities in one place
2. Activity should be detailed which will show all the details for that activity
### Activity traits:
- datetime: the datetime stamp of the Activity, this is not easy to get as my icici statement does not provide the time of transaction
- salary: is salary?
- platform: in which platform the activity took place
- frequency: is the activity a regular, or intermittent
- type: is the activity a expense, investment, earning or past due satisfied (which due activity got satisfied)
- satisfied-activity: has the mapping of the past due activity. It is present only when the current activity is past due satisfied
- amount: transaction amount

### Activity Summary:
Daily, Monthly, Yearly
- Pie Chart: Expense, Investment
- Overall Investment Status Graph (for both Equity and MF)



Get data wherever is available
1. Read messages and filter transactions and store it
2. Import exported records from icici bank (CSV, accurate, easy parsing)
3. Import exported records from groww (CSV, accurate, easy parsing)
4. Import exported records from phonepe (PDF, not so accurate, hard parsing)
5. Import exported data using custom chrome extension (Xporter) from swiggy and zomato

Remaining POC on:
Gpay, CRED

Approach:
1. Handle dublicate record insertion
2. Handle multiple record insertion
3. Map similar transaction among multiple platforms
 - Mapping can be done based on the date and 