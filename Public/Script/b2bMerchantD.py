import os
import pandas as pd

# Read the Excel file
file_path = '/home/parth/Downloads/FinalDataCompileB2b.csv'
df = pd.read_csv(file_path)

# Get unique values in the 'Bill To Business' column
unique_values = df['Bill To Business'].unique()

# Specify the folder path where you want to save the output files
output_folder = '/home/parth/Documents/B2b Folder UAT'

# Iterate over unique values and create separate Excel files
for value in unique_values:
    # Create a DataFrame for each unique value
    subset_df = df[df['Bill To Business'] == value]
    
    # Write the DataFrame to an Excel file in the specified folder
    output_file_path = os.path.join(output_folder, f'{value}_output.xlsx')
    subset_df.to_excel(output_file_path, index=False)
    print(f"Excel file saved for '{value}': {output_file_path}")
