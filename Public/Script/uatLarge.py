import sys
import pandas as pd

def replicate_data_for_merchants(source_file, merchant_ids, output_file):
    # Read data from the source CSV file
    data = pd.read_csv(source_file)

    # Initialize an empty DataFrame to store merged data
    merged_data = pd.DataFrame()

    for merchant_id in merchant_ids:
        # Split the existing tracking IDs and replace the prefix with the merchant identifier
        data_copy = data.copy()
        data_copy['tracking_id'] = merchant_id + '-' + data_copy['tracking_id'].str.split('-').str[1]
        data_copy['global_tracking_id'] = merchant_id + '-' + data_copy['global_tracking_id'].str.split('-').str[1]
        data_copy['lr_id'] = merchant_id + '-' + data_copy['lr_id'].str.split('-').str[1]
        data_copy['merchant_id'] = merchant_id + '-' + data_copy['merchant_id'].str.split('-').str[1]
        data_copy['docket_id'] = merchant_id + '-' + data_copy['docket_id'].str.split('-').str[1]
        data_copy['client_id'] = merchant_id

        # Append data for the current merchant to the merged data DataFrame
        merged_data = pd.concat([merged_data, data_copy], ignore_index=True)
    
    # Write the merged data to a single CSV file
    merged_data.to_csv(output_file, index=False)
    print(f"Data for all merchants has been replicated to '{output_file}' with updated tracking IDs.")

# Get merchant_ids from command-line arguments
merchant_ids = sys.argv[1:]

source_file = '/home/parth/Downloads/Dummy File for UAT_SPS(2).csv'
output_file = '/home/parth/Downloads/merged_orders.csv'

replicate_data_for_merchants(source_file, merchant_ids, output_file)



