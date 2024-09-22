import sys
import json
import pandas as pd


args = sys.argv[1:]
merchant_names = json.loads(args[0])

def generate_data(merchant_names, uploaded_file):
    # Read the uploaded Excel file
    uploaded_data = pd.read_excel(uploaded_file)

    
    num_replications = len(merchant_names)

    
    tracking_ids = []
    merchant_ids = []
    accrual_party_id_to = []
    for merchant in merchant_names:
        for i in range(1, 2516):
            tracking_ids.append(f"{merchant}_{i}")
            merchant_ids.append(f"{merchant}_{i}")
            accrual_party_id_to.append(merchant)

    # Extract the additional columns from the uploaded data
    additional_columns = uploaded_data.drop(columns=['tracking_id', 'merchant_id', 'accrual_party_id_to'])

    # Repeat the additional columns data for the required number of replications
    additional_data = pd.concat([additional_columns] * num_replications, ignore_index=True)

    # Combine all the data into a DataFrame
    data = pd.DataFrame({
        'tracking_id': tracking_ids,
        'merchant_id': merchant_ids,
        'accrual_party_id_to': accrual_party_id_to,
        **additional_data.to_dict('list')  # Convert additional_data to a dictionary of lists
    })

    return data

# Example usage
uploaded_file = r'C:\Users\parth\Downloads\testingup.xlsx' 
output_file = r'C:\Users\parth\Downloads\NonLargeOutputUAT2.xlsx'

data = generate_data(merchant_names, uploaded_file)
data.to_excel(output_file, index=False)