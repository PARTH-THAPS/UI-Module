import pandas as pd
import sys

def main():
    try:
        # Load the Excel file
        file_path = r'C:\Users\parth\Downloads\b2bUatfinalInput.xlsx'
        df = pd.read_excel(file_path)
    except FileNotFoundError:
        print(f"Error: The file at {file_path} was not found.")
        sys.exit(1)
    except Exception as e:
        print(f"Error loading the Excel file: {e}")
        sys.exit(1)

    merchant_ids = sys.argv[1:]

    if not merchant_ids:
        print("Error: No merchant IDs provided.")
        sys.exit(1)

    # Create an empty list to hold replicated rows
    replicated_rows = []

    # Replicate rows for each merchant code
    for merchant_code in merchant_ids:
        merchant_rows = df.copy()
        merchant_rows['parent_company_code'] = merchant_code
        replicated_rows.append(merchant_rows)

    # Concatenate replicated rows into a new DataFrame
    df_replicated = pd.concat(replicated_rows, ignore_index=True)

    try:
        # Save the modified DataFrame back to the Excel file
        output_path = r'C:\Users\parth\Downloads\b2bUatSheet.xlsx'
        df_replicated.to_excel(output_path, index=False)
        print(f"Processed data saved to {output_path}")
    except Exception as e:
        print(f"Error saving the Excel file: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
