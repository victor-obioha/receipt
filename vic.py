def generate_receipt():
    # List of commodities
    commodities = [
        "Wrist watch", "BT Speaker", "Shoes", "ball pen", "slides",
        "bubble gum", "Perfume", "Phone Case", "Headphones", "Wallet"
    ]
    
    # Initialize total amount
    total_amount = 0
    
    # Dictionary to store prices of commodities
    prices = {}
    
    # Input prices for each commodity
    print("Please enter the prices for the following commodities:")
    for item in commodities:
        while True:
            try:
                price = float(input(f"{item}: $"))
                if price < 0:
                    raise ValueError("Price cannot be negative.")
                break
            except ValueError:
                print("Invalid input. Please enter a valid price.")
        
        prices[item] = price
        total_amount += price
    
    # Print receipt
    print("\n------------------------------")
    print("       Receipt Generator")
    print("------------------------------")
    
    for item, price in prices.items():
        print(f"{item:<15}: ${price:.2f}")
    
    print("------------------------------")
    print(f"Total Amount     : ${total_amount:.2f}")
    print("------------------------------")
    print("Thanks for your patronage.")

# Generate receipt
generate_receipt()