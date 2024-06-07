import pandas as pd
import sys

# Load the Excel file
file_path = '/home/parth/Downloads/b2bUatfinalInput.xlsx'
df = pd.read_excel(file_path)

merchant_ids = sys.argv[1:]

# Provided list of merchant codes
# merchant_ids = ['MERCHANT1', 'MERCHANT2', 'MERCHANT3', 'MERCHANT4']

# Create an empty list to hold replicated rows
replicated_rows = []

# Replicate rows for each merchant code
for merchant_code in merchant_ids:
    # Filter rows for the current merchant code
    merchant_rows = df.copy()
    merchant_rows['parent_company_code'] = merchant_code
    replicated_rows.append(merchant_rows)

# Concatenate replicated rows into a new DataFrame
df_replicated = pd.concat(replicated_rows, ignore_index=True)

# Save the modified DataFrame back to the Excel file
df_replicated.to_excel('/home/parth/Downloads/modified_merchant_data.xlsx', index=False)