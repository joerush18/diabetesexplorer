import pickle
import sys
def preprocess_input(data):
    # Perform preprocessing on the input data
    # Convert strings to appropriate numerical format
    # For example, remove 'g' from total_fat and other similar columns
    data['total_fat'] = float(data['total_fat'].replace('g', ''))
    data['saturated_fat'] = float(data['saturated_fat'].replace('g', ''))
    data['protein'] = float(data['protein'].replace('g', ''))
    data['carbohydrate'] = float(data['carbohydrate'].replace('g', ''))
    data['fiber'] = float(data['fiber'].replace('g', ''))
    data['sugars'] = float(data['sugars'].replace('g', ''))

    return data
    

def main():
    input_data = sys.argv[1]

    # Load the trained model
    with open('nutrient.pkl', 'rb') as model_file:
        model = pickle.load(model_file)

    # Preprocess the input data
    preprocessed_data = preprocess_input(input_data)

    # Select relevant features and make a prediction
    selected_features = ['calories', 'total_fat', 'saturated_fat', 'cholesterol', 'sodium',
                         'protein', 'carbohydrate', 'fiber', 'sugars']
    input_features = [preprocessed_data[feature] for feature in selected_features]

    prediction = model.predict([input_features])

    if prediction[0] == 1:
        result = "Edible for diabetes patients"
    else:
        result = "Not edible for diabetes patients"

    print(result)

if __name__ == '__main__':
    main()


