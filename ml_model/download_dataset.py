import kagglehub
import os

def download_plant_disease_dataset():
    print("Initiating download for 'emmarex/plantdisease'...")
    
    try:
        # Download PlantVillage dataset
        # This requires ~/.kaggle/kaggle.json or KAGGLE_USERNAME/KAGGLE_KEY env vars
        dataset_path = kagglehub.dataset_download("emmarex/plantdisease")
        
        print("\nSUCCESS: Dataset downloaded successfully!")
        print("Path:", dataset_path)
        
        print("\n--- Disease Classes (Folders) ---")
        if os.path.exists(dataset_path):
            files = os.listdir(dataset_path)
            for file in files:
                print(f"- {file}")
        else:
            print("Error: Path does not exist after download reporting.")
            
    except Exception as e:
        print("\nERROR: Failed to download dataset.")
        print("Please ensure you have authenticated with Kaggle.")
        print(f"Details: {e}")

if __name__ == "__main__":
    download_plant_disease_dataset()
