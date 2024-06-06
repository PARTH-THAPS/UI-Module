import pandas as pd
import sys

try:
    # Read the input Excel file
    input_file = sys.argv[1]  # Get the input file path from command-line argument
    df = pd.read_csv(input_file)

    # Calculate volume for each row
    df['volume'] = df['seller_declared_length'] * df['seller_declared_breadth'] * df['seller_declared_height']

    # Group by 'global_tracking_id' and calculate the sum of 'shipment_weight', 'value', and 'volume' along with other constant columns
    grouped_df = df.groupby('global_tracking_id').agg({
        'tracking_id': 'size',  # Number of tracking IDs
        'lr_id': 'first',
        'merchant_id': 'first',
        'client_id': 'first',
        'pickup_date': 'first',
        'dh_in_scan_date': 'first',
        'rto_request_date': 'first',
        'delivered_date': 'first',
        'zone': 'first',
        'shipment_type': 'first',
        'shipment_status': 'first',
        'shipment_status_date': 'first',
        'payment_type': 'first',
        'docket_id': 'first',
        'docket_status': 'first',
        'creation_date': 'first',
        'source_pincode': 'first',
        'destination_pincode': 'first',
        'source_state': 'first',
        'destination_state': 'first',
        'shipment_weight': 'sum',
        'value': 'sum',
        'volume': 'sum'
    }).reset_index()

    # Rename the column for the number of tracking IDs
    grouped_df.rename(columns={'tracking_id': 'tracking_id_count'}, inplace=True)

    # Create a new Excel file
    output_file = '/home/parth/Downloads/output1.xlsx'
    grouped_df.to_excel(output_file, index=False)

    print("Output Excel file created successfully:", output_file)

except Exception as e:
    print("An error occurred:", e)
