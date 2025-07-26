const products = [
  {
    "id": 1,
    "name": "Tomato Pesticide Spray 1",
    "category": "Tomato",
    "price": 150,
    "image": "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Tomato - Variation 1.",
    "crop": "Tomato",
    "unit": "bottle"
  },
  {
    "id": 2,
    "name": "Tomato Pesticide Spray 2",
    "category": "Tomato",
    "price": 160,
    "image": "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Tomato - Variation 2.",
    "crop": "Tomato",
    "unit": "bottle"
  },
  {
    "id": 3,
    "name": "Tomato Pesticide Spray 3",
    "category": "Tomato",
    "price": 170,
    "image": "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Tomato - Variation 3.",
    "crop": "Tomato",
    "unit": "bottle"
  },
  {
    "id": 4,
    "name": "Tomato Pesticide Spray 4",
    "category": "Tomato",
    "price": 180,
    "image": "https://images.pexels.com/photos/2255936/pexels-photo-2255936.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Tomato - Variation 4.",
    "crop": "Tomato",
    "unit": "bottle"
  },
  {
    "id": 5,
    "name": "Tomato Pesticide Spray 5",
    "category": "Tomato",
    "price": 190,
    "image": "https://images.pexels.com/photos/2255937/pexels-photo-2255937.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Tomato - Variation 5.",
    "crop": "Tomato",
    "unit": "bottle"
  },
  {
    "id": 6,
    "name": "Tomato Plant Booster 1",
    "category": "Tomato",
    "price": 170,
    "image": "https://images.pexels.com/photos/2255938/pexels-photo-2255938.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Tomato - Variation 1.",
    "crop": "Tomato",
    "unit": "packet"
  },
  {
    "id": 7,
    "name": "Tomato Plant Booster 2",
    "category": "Tomato",
    "price": 180,
    "image": "https://images.pexels.com/photos/2255939/pexels-photo-2255939.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Tomato - Variation 2.",
    "crop": "Tomato",
    "unit": "packet"
  },
  {
    "id": 8,
    "name": "Tomato Plant Booster 3",
    "category": "Tomato",
    "price": 190,
    "image": "https://images.pexels.com/photos/2255940/pexels-photo-2255940.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Tomato - Variation 3.",
    "crop": "Tomato",
    "unit": "packet"
  },
  {
    "id": 9,
    "name": "Tomato Plant Booster 4",
    "category": "Tomato",
    "price": 200,
    "image": "https://images.pexels.com/photos/2255941/pexels-photo-2255941.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Tomato - Variation 4.",
    "crop": "Tomato",
    "unit": "packet"
  },
  {
    "id": 10,
    "name": "Tomato Plant Booster 5",
    "category": "Tomato",
    "price": 210,
    "image": "https://images.pexels.com/photos/2255942/pexels-photo-2255942.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Tomato - Variation 5.",
    "crop": "Tomato",
    "unit": "packet"
  },
  {
    "id": 11,
    "name": "Tomato Organic Seeds 1",
    "category": "Tomato",
    "price": 190,
    "image": "https://images.pexels.com/photos/2255943/pexels-photo-2255943.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Tomato - Variation 1.",
    "crop": "Tomato",
    "unit": "packet"
  },
  {
    "id": 12,
    "name": "Tomato Organic Seeds 2",
    "category": "Tomato",
    "price": 200,
    "image": "https://images.pexels.com/photos/2255944/pexels-photo-2255944.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Tomato - Variation 2.",
    "crop": "Tomato",
    "unit": "packet"
  },
  {
    "id": 13,
    "name": "Tomato Organic Seeds 3",
    "category": "Tomato",
    "price": 210,
    "image": "https://images.pexels.com/photos/2255945/pexels-photo-2255945.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Tomato - Variation 3.",
    "crop": "Tomato",
    "unit": "packet"
  },
  {
    "id": 14,
    "name": "Tomato Organic Seeds 4",
    "category": "Tomato",
    "price": 220,
    "image": "https://images.pexels.com/photos/2255946/pexels-photo-2255946.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Tomato - Variation 4.",
    "crop": "Tomato",
    "unit": "packet"
  },
  {
    "id": 15,
    "name": "Tomato Organic Seeds 5",
    "category": "Tomato",
    "price": 230,
    "image": "https://images.pexels.com/photos/2255947/pexels-photo-2255947.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Tomato - Variation 5.",
    "crop": "Tomato",
    "unit": "packet"
  },
  {
    "id": 16,
    "name": "Tomato Disease Control Kit 1",
    "category": "Tomato",
    "price": 210,
    "image": "https://images.pexels.com/photos/2255948/pexels-photo-2255948.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Tomato - Variation 1.",
    "crop": "Tomato",
    "unit": "kit"
  },
  {
    "id": 17,
    "name": "Tomato Disease Control Kit 2",
    "category": "Tomato",
    "price": 220,
    "image": "https://images.pexels.com/photos/2255949/pexels-photo-2255949.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Tomato - Variation 2.",
    "crop": "Tomato",
    "unit": "kit"
  },
  {
    "id": 18,
    "name": "Tomato Disease Control Kit 3",
    "category": "Tomato",
    "price": 230,
    "image": "https://images.pexels.com/photos/2255950/pexels-photo-2255950.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Tomato - Variation 3.",
    "crop": "Tomato",
    "unit": "kit"
  },
  {
    "id": 19,
    "name": "Tomato Disease Control Kit 4",
    "category": "Tomato",
    "price": 240,
    "image": "https://images.pexels.com/photos/2255951/pexels-photo-2255951.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Tomato - Variation 4.",
    "crop": "Tomato",
    "unit": "kit"
  },
  {
    "id": 20,
    "name": "Tomato Disease Control Kit 5",
    "category": "Tomato",
    "price": 250,
    "image": "https://images.pexels.com/photos/2255952/pexels-photo-2255952.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Tomato - Variation 5.",
    "crop": "Tomato",
    "unit": "kit"
  },
  {
    "id": 41,
    "name": "Brinjal Disease Control Kit 1",
    "category": "Brinjal",
    "price": 210,
    "image": "https://images.pexels.com/photos/2255953/pexels-photo-2255953.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Brinjal - Variation 1.",
    "crop": "Brinjal",
    "unit": "kit"
  },
  {
    "id": 42,
    "name": "Brinjal Disease Control Kit 2",
    "category": "Brinjal",
    "price": 220,
    "image": "https://images.pexels.com/photos/2255954/pexels-photo-2255954.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Brinjal - Variation 2.",
    "crop": "Brinjal",
    "unit": "kit"
  },
  {
    "id": 43,
    "name": "Brinjal Disease Control Kit 3",
    "category": "Brinjal",
    "price": 230,
    "image": "https://images.pexels.com/photos/2255955/pexels-photo-2255955.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Brinjal - Variation 3.",
    "crop": "Brinjal",
    "unit": "kit"
  },
  {
    "id": 44,
    "name": "Brinjal Disease Control Kit 4",
    "category": "Brinjal",
    "price": 240,
    "image": "https://images.pexels.com/photos/2255956/pexels-photo-2255956.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Brinjal - Variation 4.",
    "crop": "Brinjal",
    "unit": "kit"
  },
  {
    "id": 45,
    "name": "Brinjal Disease Control Kit 5",
    "category": "Brinjal",
    "price": 250,
    "image": "https://images.pexels.com/photos/2255957/pexels-photo-2255957.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Brinjal - Variation 5.",
    "crop": "Brinjal",
    "unit": "kit"
  },
  {
    "id": 46,
    "name": "Brinjal Growth Fertilizer 1",
    "category": "Brinjal",
    "price": 230,
    "image": "https://images.pexels.com/photos/2255958/pexels-photo-2255958.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Brinjal - Variation 1.",
    "crop": "Brinjal",
    "unit": "packet"
  },
  {
    "id": 47,
    "name": "Brinjal Growth Fertilizer 2",
    "category": "Brinjal",
    "price": 240,
    "image": "https://images.pexels.com/photos/2255959/pexels-photo-2255959.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Brinjal - Variation 2.",
    "crop": "Brinjal",
    "unit": "packet"
  },
  {
    "id": 48,
    "name": "Brinjal Growth Fertilizer 3",
    "category": "Brinjal",
    "price": 250,
    "image": "https://images.pexels.com/photos/2255960/pexels-photo-2255960.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Brinjal - Variation 3.",
    "crop": "Brinjal",
    "unit": "packet"
  },
  {
    "id": 49,
    "name": "Brinjal Growth Fertilizer 4",
    "category": "Brinjal",
    "price": 260,
    "image": "https://images.pexels.com/photos/2255961/pexels-photo-2255961.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Brinjal - Variation 4.",
    "crop": "Brinjal",
    "unit": "packet"
  },
  {
    "id": 50,
    "name": "Brinjal Growth Fertilizer 5",
    "category": "Brinjal",
    "price": 270,
    "image": "https://images.pexels.com/photos/2255962/pexels-photo-2255962.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Brinjal - Variation 5.",
    "crop": "Brinjal",
    "unit": "packet"
  },
  {
    "id": 51,
    "name": "Rice Pesticide Spray 1",
    "category": "Rice",
    "price": 150,
    "image": "https://images.pexels.com/photos/2255963/pexels-photo-2255963.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Rice - Variation 1.",
    "crop": "Rice",
    "unit": "bottle"
  },
  {
    "id": 52,
    "name": "Rice Pesticide Spray 2",
    "category": "Rice",
    "price": 160,
    "image": "https://images.pexels.com/photos/2255964/pexels-photo-2255964.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Rice - Variation 2.",
    "crop": "Rice",
    "unit": "bottle"
  },
  {
    "id": 53,
    "name": "Rice Pesticide Spray 3",
    "category": "Rice",
    "price": 170,
    "image": "https://images.pexels.com/photos/2255965/pexels-photo-2255965.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Rice - Variation 3.",
    "crop": "Rice",
    "unit": "bottle"
  },
  {
    "id": 54,
    "name": "Rice Pesticide Spray 4",
    "category": "Rice",
    "price": 180,
    "image": "https://images.pexels.com/photos/2255966/pexels-photo-2255966.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Rice - Variation 4.",
    "crop": "Rice",
    "unit": "bottle"
  },
  {
    "id": 55,
    "name": "Rice Pesticide Spray 5",
    "category": "Rice",
    "price": 190,
    "image": "https://images.pexels.com/photos/2255967/pexels-photo-2255967.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Rice - Variation 5.",
    "crop": "Rice",
    "unit": "bottle"
  },
  {
    "id": 56,
    "name": "Rice Plant Booster 1",
    "category": "Rice",
    "price": 170,
    "image": "https://images.pexels.com/photos/2255968/pexels-photo-2255968.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Rice - Variation 1.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 57,
    "name": "Rice Plant Booster 2",
    "category": "Rice",
    "price": 180,
    "image": "https://images.pexels.com/photos/2255969/pexels-photo-2255969.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Rice - Variation 2.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 58,
    "name": "Rice Plant Booster 3",
    "category": "Rice",
    "price": 190,
    "image": "https://images.pexels.com/photos/2255970/pexels-photo-2255970.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Rice - Variation 3.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 59,
    "name": "Rice Plant Booster 4",
    "category": "Rice",
    "price": 200,
    "image": "https://images.pexels.com/photos/2255971/pexels-photo-2255971.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Rice - Variation 4.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 60,
    "name": "Rice Plant Booster 5",
    "category": "Rice",
    "price": 210,
    "image": "https://images.pexels.com/photos/2255972/pexels-photo-2255972.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Rice - Variation 5.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 61,
    "name": "Rice Organic Seeds 1",
    "category": "Rice",
    "price": 190,
    "image": "https://images.pexels.com/photos/2255973/pexels-photo-2255973.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Rice - Variation 1.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 62,
    "name": "Rice Organic Seeds 2",
    "category": "Rice",
    "price": 200,
    "image": "https://images.pexels.com/photos/2255974/pexels-photo-2255974.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Rice - Variation 2.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 63,
    "name": "Rice Organic Seeds 3",
    "category": "Rice",
    "price": 210,
    "image": "https://images.pexels.com/photos/2255975/pexels-photo-2255975.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Rice - Variation 3.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 64,
    "name": "Rice Organic Seeds 4",
    "category": "Rice",
    "price": 220,
    "image": "https://images.pexels.com/photos/2255976/pexels-photo-2255976.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Rice - Variation 4.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 65,
    "name": "Rice Organic Seeds 5",
    "category": "Rice",
    "price": 230,
    "image": "https://images.pexels.com/photos/2255977/pexels-photo-2255977.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Rice - Variation 5.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 66,
    "name": "Rice Disease Control Kit 1",
    "category": "Rice",
    "price": 210,
    "image": "https://images.pexels.com/photos/2255978/pexels-photo-2255978.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Rice - Variation 1.",
    "crop": "Rice",
    "unit": "kit"
  },
  {
    "id": 67,
    "name": "Rice Disease Control Kit 2",
    "category": "Rice",
    "price": 220,
    "image": "https://images.pexels.com/photos/2255979/pexels-photo-2255979.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Rice - Variation 2.",
    "crop": "Rice",
    "unit": "kit"
  },
  {
    "id": 68,
    "name": "Rice Disease Control Kit 3",
    "category": "Rice",
    "price": 230,
    "image": "https://images.pexels.com/photos/2255980/pexels-photo-2255980.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Rice - Variation 3.",
    "crop": "Rice",
    "unit": "kit"
  },
  {
    "id": 69,
    "name": "Rice Disease Control Kit 4",
    "category": "Rice",
    "price": 240,
    "image": "https://images.pexels.com/photos/2255981/pexels-photo-2255981.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Rice - Variation 4.",
    "crop": "Rice",
    "unit": "kit"
  },
  {
    "id": 70,
    "name": "Rice Disease Control Kit 5",
    "category": "Rice",
    "price": 250,
    "image": "https://images.pexels.com/photos/2255982/pexels-photo-2255982.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Rice - Variation 5.",
    "crop": "Rice",
    "unit": "kit"
  },
  {
    "id": 71,
    "name": "Rice Growth Fertilizer 1",
    "category": "Rice",
    "price": 230,
    "image": "https://images.pexels.com/photos/2255983/pexels-photo-2255983.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Rice - Variation 1.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 72,
    "name": "Rice Growth Fertilizer 2",
    "category": "Rice",
    "price": 240,
    "image": "https://images.pexels.com/photos/2255984/pexels-photo-2255984.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Rice - Variation 2.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 73,
    "name": "Rice Growth Fertilizer 3",
    "category": "Rice",
    "price": 250,
    "image": "https://images.pexels.com/photos/2255985/pexels-photo-2255985.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Rice - Variation 3.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 74,
    "name": "Rice Growth Fertilizer 4",
    "category": "Rice",
    "price": 260,
    "image": "https://images.pexels.com/photos/2255986/pexels-photo-2255986.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Rice - Variation 4.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 75,
    "name": "Rice Growth Fertilizer 5",
    "category": "Rice",
    "price": 270,
    "image": "https://images.pexels.com/photos/2255987/pexels-photo-2255987.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Rice - Variation 5.",
    "crop": "Rice",
    "unit": "packet"
  },
  {
    "id": 76,
    "name": "Wheat Pesticide Spray 1",
    "category": "Wheat",
    "price": 150,
    "image": "https://images.pexels.com/photos/2255988/pexels-photo-2255988.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Wheat - Variation 1.",
    "crop": "Wheat",
    "unit": "bottle"
  },
  {
    "id": 77,
    "name": "Wheat Pesticide Spray 2",
    "category": "Wheat",
    "price": 160,
    "image": "https://images.pexels.com/photos/2255989/pexels-photo-2255989.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Wheat - Variation 2.",
    "crop": "Wheat",
    "unit": "bottle"
  },
  {
    "id": 78,
    "name": "Wheat Pesticide Spray 3",
    "category": "Wheat",
    "price": 170,
    "image": "https://images.pexels.com/photos/2255990/pexels-photo-2255990.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Wheat - Variation 3.",
    "crop": "Wheat",
    "unit": "bottle"
  },
  {
    "id": 79,
    "name": "Wheat Pesticide Spray 4",
    "category": "Wheat",
    "price": 180,
    "image": "https://images.pexels.com/photos/2255991/pexels-photo-2255991.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Wheat - Variation 4.",
    "crop": "Wheat",
    "unit": "bottle"
  },
  {
    "id": 80,
    "name": "Wheat Pesticide Spray 5",
    "category": "Wheat",
    "price": 190,
    "image": "https://images.pexels.com/photos/2255992/pexels-photo-2255992.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Wheat - Variation 5.",
    "crop": "Wheat",
    "unit": "bottle"
  },
  {
    "id": 81,
    "name": "Wheat Plant Booster 1",
    "category": "Wheat",
    "price": 170,
    "image": "https://images.pexels.com/photos/2255993/pexels-photo-2255993.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Wheat - Variation 1.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 82,
    "name": "Wheat Plant Booster 2",
    "category": "Wheat",
    "price": 180,
    "image": "https://images.pexels.com/photos/2255994/pexels-photo-2255994.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Wheat - Variation 2.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 83,
    "name": "Wheat Plant Booster 3",
    "category": "Wheat",
    "price": 190,
    "image": "https://images.pexels.com/photos/2255995/pexels-photo-2255995.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Wheat - Variation 3.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 84,
    "name": "Wheat Plant Booster 4",
    "category": "Wheat",
    "price": 200,
    "image": "https://images.pexels.com/photos/2255996/pexels-photo-2255996.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Wheat - Variation 4.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 85,
    "name": "Wheat Plant Booster 5",
    "category": "Wheat",
    "price": 210,
    "image": "https://images.pexels.com/photos/2255997/pexels-photo-2255997.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Wheat - Variation 5.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 86,
    "name": "Wheat Organic Seeds 1",
    "category": "Wheat",
    "price": 190,
    "image": "https://images.pexels.com/photos/2255998/pexels-photo-2255998.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Wheat - Variation 1.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 87,
    "name": "Wheat Organic Seeds 2",
    "category": "Wheat",
    "price": 200,
    "image": "https://images.pexels.com/photos/2255999/pexels-photo-2255999.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Wheat - Variation 2.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 88,
    "name": "Wheat Organic Seeds 3",
    "category": "Wheat",
    "price": 210,
    "image": "https://images.pexels.com/photos/2256000/pexels-photo-2256000.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Wheat - Variation 3.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 89,
    "name": "Wheat Organic Seeds 4",
    "category": "Wheat",
    "price": 220,
    "image": "https://images.pexels.com/photos/2256001/pexels-photo-2256001.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Wheat - Variation 4.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 90,
    "name": "Wheat Organic Seeds 5",
    "category": "Wheat",
    "price": 230,
    "image": "https://images.pexels.com/photos/2256002/pexels-photo-2256002.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Wheat - Variation 5.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 91,
    "name": "Wheat Disease Control Kit 1",
    "category": "Wheat",
    "price": 210,
    "image": "https://images.pexels.com/photos/2256003/pexels-photo-2256003.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Wheat - Variation 1.",
    "crop": "Wheat",
    "unit": "kit"
  },
  {
    "id": 92,
    "name": "Wheat Disease Control Kit 2",
    "category": "Wheat",
    "price": 220,
    "image": "https://images.pexels.com/photos/2256004/pexels-photo-2256004.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Wheat - Variation 2.",
    "crop": "Wheat",
    "unit": "kit"
  },
  {
    "id": 93,
    "name": "Wheat Disease Control Kit 3",
    "category": "Wheat",
    "price": 230,
    "image": "https://images.pexels.com/photos/2256005/pexels-photo-2256005.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Wheat - Variation 3.",
    "crop": "Wheat",
    "unit": "kit"
  },
  {
    "id": 94,
    "name": "Wheat Disease Control Kit 4",
    "category": "Wheat",
    "price": 240,
    "image": "https://images.pexels.com/photos/2256006/pexels-photo-2256006.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Wheat - Variation 4.",
    "crop": "Wheat",
    "unit": "kit"
  },
  {
    "id": 95,
    "name": "Wheat Disease Control Kit 5",
    "category": "Wheat",
    "price": 250,
    "image": "https://images.pexels.com/photos/2256007/pexels-photo-2256007.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Wheat - Variation 5.",
    "crop": "Wheat",
    "unit": "kit"
  },
  {
    "id": 96,
    "name": "Wheat Growth Fertilizer 1",
    "category": "Wheat",
    "price": 230,
    "image": "https://images.pexels.com/photos/2256008/pexels-photo-2256008.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Wheat - Variation 1.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 97,
    "name": "Wheat Growth Fertilizer 2",
    "category": "Wheat",
    "price": 240,
    "image": "https://images.pexels.com/photos/2256009/pexels-photo-2256009.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Wheat - Variation 2.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 98,
    "name": "Wheat Growth Fertilizer 3",
    "category": "Wheat",
    "price": 250,
    "image": "https://images.pexels.com/photos/2256010/pexels-photo-2256010.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Wheat - Variation 3.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 99,
    "name": "Wheat Growth Fertilizer 4",
    "category": "Wheat",
    "price": 260,
    "image": "https://images.pexels.com/photos/2256011/pexels-photo-2256011.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Wheat - Variation 4.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 100,
    "name": "Wheat Growth Fertilizer 5",
    "category": "Wheat",
    "price": 270,
    "image": "https://images.pexels.com/photos/2256012/pexels-photo-2256012.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Wheat - Variation 5.",
    "crop": "Wheat",
    "unit": "packet"
  },
  {
    "id": 101,
    "name": "Cotton Pesticide Spray 1",
    "category": "Cotton",
    "price": 150,
    "image": "https://images.pexels.com/photos/2256013/pexels-photo-2256013.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Cotton - Variation 1.",
    "crop": "Cotton",
    "unit": "bottle"
  },
  {
    "id": 102,
    "name": "Cotton Pesticide Spray 2",
    "category": "Cotton",
    "price": 160,
    "image": "https://images.pexels.com/photos/2256014/pexels-photo-2256014.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Cotton - Variation 2.",
    "crop": "Cotton",
    "unit": "bottle"
  },
  {
    "id": 103,
    "name": "Cotton Pesticide Spray 3",
    "category": "Cotton",
    "price": 170,
    "image": "https://images.pexels.com/photos/2256015/pexels-photo-2256015.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Cotton - Variation 3.",
    "crop": "Cotton",
    "unit": "bottle"
  },
  {
    "id": 104,
    "name": "Cotton Pesticide Spray 4",
    "category": "Cotton",
    "price": 180,
    "image": "https://images.pexels.com/photos/2256016/pexels-photo-2256016.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Cotton - Variation 4.",
    "crop": "Cotton",
    "unit": "bottle"
  },
  {
    "id": 105,
    "name": "Cotton Pesticide Spray 5",
    "category": "Cotton",
    "price": 190,
    "image": "https://images.pexels.com/photos/2256017/pexels-photo-2256017.jpeg?auto=compress&w=400",
    "description": "Pesticide Spray for Cotton - Variation 5.",
    "crop": "Cotton",
    "unit": "bottle"
  },
  {
    "id": 106,
    "name": "Cotton Plant Booster 1",
    "category": "Cotton",
    "price": 170,
    "image": "https://images.pexels.com/photos/2256018/pexels-photo-2256018.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Cotton - Variation 1.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 107,
    "name": "Cotton Plant Booster 2",
    "category": "Cotton",
    "price": 180,
    "image": "https://images.pexels.com/photos/2256019/pexels-photo-2256019.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Cotton - Variation 2.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 108,
    "name": "Cotton Plant Booster 3",
    "category": "Cotton",
    "price": 190,
    "image": "https://images.pexels.com/photos/2256020/pexels-photo-2256020.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Cotton - Variation 3.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 109,
    "name": "Cotton Plant Booster 4",
    "category": "Cotton",
    "price": 200,
    "image": "https://images.pexels.com/photos/2256021/pexels-photo-2256021.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Cotton - Variation 4.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 110,
    "name": "Cotton Plant Booster 5",
    "category": "Cotton",
    "price": 210,
    "image": "https://images.pexels.com/photos/2256022/pexels-photo-2256022.jpeg?auto=compress&w=400",
    "description": "Plant Booster for Cotton - Variation 5.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 111,
    "name": "Cotton Organic Seeds 1",
    "category": "Cotton",
    "price": 190,
    "image": "https://images.pexels.com/photos/2256023/pexels-photo-2256023.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Cotton - Variation 1.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 112,
    "name": "Cotton Organic Seeds 2",
    "category": "Cotton",
    "price": 200,
    "image": "https://images.pexels.com/photos/2256024/pexels-photo-2256024.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Cotton - Variation 2.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 113,
    "name": "Cotton Organic Seeds 3",
    "category": "Cotton",
    "price": 210,
    "image": "https://images.pexels.com/photos/2256025/pexels-photo-2256025.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Cotton - Variation 3.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 114,
    "name": "Cotton Organic Seeds 4",
    "category": "Cotton",
    "price": 220,
    "image": "https://images.pexels.com/photos/2256026/pexels-photo-2256026.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Cotton - Variation 4.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 115,
    "name": "Cotton Organic Seeds 5",
    "category": "Cotton",
    "price": 230,
    "image": "https://images.pexels.com/photos/2256027/pexels-photo-2256027.jpeg?auto=compress&w=400",
    "description": "Organic Seeds for Cotton - Variation 5.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 116,
    "name": "Cotton Disease Control Kit 1",
    "category": "Cotton",
    "price": 210,
    "image": "https://images.pexels.com/photos/2256028/pexels-photo-2256028.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Cotton - Variation 1.",
    "crop": "Cotton",
    "unit": "kit"
  },
  {
    "id": 117,
    "name": "Cotton Disease Control Kit 2",
    "category": "Cotton",
    "price": 220,
    "image": "https://images.pexels.com/photos/2256029/pexels-photo-2256029.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Cotton - Variation 2.",
    "crop": "Cotton",
    "unit": "kit"
  },
  {
    "id": 118,
    "name": "Cotton Disease Control Kit 3",
    "category": "Cotton",
    "price": 230,
    "image": "https://images.pexels.com/photos/2256030/pexels-photo-2256030.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Cotton - Variation 3.",
    "crop": "Cotton",
    "unit": "kit"
  },
  {
    "id": 119,
    "name": "Cotton Disease Control Kit 4",
    "category": "Cotton",
    "price": 240,
    "image": "https://images.pexels.com/photos/2256031/pexels-photo-2256031.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Cotton - Variation 4.",
    "crop": "Cotton",
    "unit": "kit"
  },
  {
    "id": 120,
    "name": "Cotton Disease Control Kit 5",
    "category": "Cotton",
    "price": 250,
    "image": "https://images.pexels.com/photos/2256032/pexels-photo-2256032.jpeg?auto=compress&w=400",
    "description": "Disease Control Kit for Cotton - Variation 5.",
    "crop": "Cotton",
    "unit": "kit"
  },
  {
    "id": 121,
    "name": "Cotton Growth Fertilizer 1",
    "category": "Cotton",
    "price": 230,
    "image": "https://images.pexels.com/photos/2256033/pexels-photo-2256033.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Cotton - Variation 1.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 122,
    "name": "Cotton Growth Fertilizer 2",
    "category": "Cotton",
    "price": 240,
    "image": "https://images.pexels.com/photos/2256034/pexels-photo-2256034.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Cotton - Variation 2.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 123,
    "name": "Cotton Growth Fertilizer 3",
    "category": "Cotton",
    "price": 250,
    "image": "https://images.pexels.com/photos/2256035/pexels-photo-2256035.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Cotton - Variation 3.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 124,
    "name": "Cotton Growth Fertilizer 4",
    "category": "Cotton",
    "price": 260,
    "image": "https://images.pexels.com/photos/2256036/pexels-photo-2256036.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Cotton - Variation 4.",
    "crop": "Cotton",
    "unit": "packet"
  },
  {
    "id": 125,
    "name": "Cotton Growth Fertilizer 5",
    "category": "Cotton",
    "price": 270,
    "image": "https://images.pexels.com/photos/2256037/pexels-photo-2256037.jpeg?auto=compress&w=400",
    "description": "Growth Fertilizer for Cotton - Variation 5.",
    "crop": "Cotton",
    "unit": "packet"
  }
];
module.exports = products;