import csv

def replace_null_blank_with_na(input_csv, output_csv):
    with open(input_csv, 'r', newline='') as input_file, open(output_csv, 'w', newline='') as output_file:
        reader = csv.reader(input_file)
        writer = csv.writer(output_file)

        for row in reader:
            # Use a list comprehension to replace NULL and blank values with 'N/A'
            modified_row = ['N/A' if cell.strip() == 'NULL' or cell.strip() == '#N/A' or cell.strip() == '' else cell for cell in row]
            writer.writerow(modified_row)

# Replace 'input.csv' and 'output.csv' with your input and output file paths
input_csv_path = "/home/parth/Downloads/AJIMP/merge.csv"
output_csv_path = "/home/parth/Downloads/AJIMP/mergeop.csv"
replace_null_blank_with_na(input_csv_path, output_csv_path)

print(f'Replacement completed. Modified data saved to {output_csv_path}')
