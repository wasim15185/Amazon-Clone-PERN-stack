const pool = require("./pool");
require("dotenv").config();

async function creatingTable(csvFilePath) {
	if (process.env.DATABASE_URL) {
		// pool.query(
		// 	`CREATE TABLE users(
		//     id SERIAL PRIMARY KEY,
		//     name VARCHAR(250) NOT NULL,
		//     email VARCHAR(40) NOT NULL UNIQUE,
		//     password VARCHAR NOT NULL,
		//     phone VARCHAR(15) UNIQUE
		// );`,
		// 	(err, res) => {
		// 		if (err) {
		// 			console.log(err);
		// 		} else {
		// 			console.log("products Table Created");
		// 			console.log(res);
		// 		}
		// 	}
		// );
		// pool.query(
		// 	`CREATE TABLE products (
		//     id SERIAL PRIMARY KEY,
		//     name VARCHAR(200) NOT NULL,
		//     catagory VARCHAR(200) NOT NULL,
		//     img VARCHAR NOT NULL,
		//     description VARCHAR NOT NULL,
		//     price INTEGER NOT NULL CHECK(price>0),
		//     rating REAL CHECK(rating > -1 AND rating<6)
		// );`,
		// 	(err, res) => {
		// 		if (err) {
		// 			console.log(err);
		// 		} else {
		// 			console.log("products Table Created");
		// 			console.log(res);
		// pool.query(
		// 	`INSERT INTO products(name,catagory,img,description,price,rating) VALUES
		// 	('Redux RWS0216S Analog Blue Linear Designer Dial Men’s & Boy''s Watch','Watch','https://images-na.ssl-images-amazon.com/images/I/81lxfvbme5L._UY879_.jpg','Dual Dial Two Timezone - Analog and Digital | Military 12h/24h Time | Led back light functions',305,3.50),
		// 	('Instaplay 10W Wireless Bluetooth Soundbar Speaker with Built-in Microphone\, perfect Soundbar for TV and Mobile (Black)','Music','https://images-na.ssl-images-amazon.com/images/I/51uYw%2Bh6D0L._SX679_.jpg','Instaplay 10W Wireless Bluetooth Soundbar Speaker with Built-in Microphone\, perfect Soundbar for TV and Mobile (Black)',1999,3.50),
		// 	('boAt Airdopes 441 TWS Ear-Buds with IWP Technology\, Immersive Audio\, Up to 30H Total Playback\, IPX7 Water Resistance\, Super Touch Controls\, Secure Sports Fit & Type-C Port(Raging Red)','Music','https://images-na.ssl-images-amazon.com/images/I/61rlb0IYNuL._SL1500_.jpg','Battery: Airdopes 441 offers a playback time of up to 5 hours in earbuds & 25 hours in charging case and earbuds get charged to 100% in 1.5 hours',1799,4.00),
		// 	('Sony QuietComfort 35 II Wireless Bluetooth Headphones\, Noise-Cancelling\, with Alexa voice control - Black','Music','https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._SL1500_.jpg','World-class noise cancellation makes quiet sound quieter and music sound betterBluetooth and NFC pairing with voice prompts make for hassle-free wireless connections',23490,4.20),
		// 	('IFB 8kg 5 Star Fully-Automatic Front Loading Washing Machine (Senator WXS\, Silver\, Inbuilt Heater\, Aqua Energie water softener)','Electronics','https://images-na.ssl-images-amazon.com/images/I/81QKqCoVEsL._SL1500_.jpg','Fully-automatic front load washing machine: Best Wash Quality\, Energy and Water efficientCapacity 8 kg :Suitable for large families1400 rpm: Higher the spin speed\, faster the drying timeWarranty: 4 years on product\, 4 years on motorWash Programs: 14 Wash Programs',36999,3.90),
		// 	('Daikin 1.5 Ton 5 Star Inverter Split AC (Copper\, Anti Microbial Filter\, 2018 Model\, FTKG50TV White)','Electronics','https://images-na.ssl-images-amazon.com/images/I/61pr9pIXA9L._SL1500_.jpg','Split AC with inverter compressor: Variable speed compressor which adjusts power depending on heat load. It is most energy efficient and has lowest-noise operation',41900,4.10),
		// 	('New Apple iPhone 12 Pro Max (256GB) - Pacific Blue','Mobile','https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg','6.7-inch Super Retina XDR displayCeramic Shield\, tougher than any smartphone glassA14 Bionic chip\, the fastest chip ever in a smartphone',136650,4.70),
		// 	('New Apple Watch Series 6 (GPS\, 44mm) - Space Grey Aluminium Case with Black Sport Band','Watch','https://images-na.ssl-images-amazon.com/images/I/71OGgziqWvL._SL1500_.jpg','GPS model lets you take calls and reply to texts from your wristMeasure your blood oxygen with an all-new sensor and appCheck your heart rhythm with the ECG appThe Always-On Retina display is 2.5x brighter outdoors when your wrist is down',43990,4.60),
		// 	('Samsung Galaxy M31 (Ocean Blue\, 6GB RAM\, 128GB Storage)','Mobile','https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg','Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera6.4-inch(16.21 centimeters) Super Amoled - Infinity U Cut Display \, FHD+ Resolution (2340 x 1080) \, 404 ppi pixel density and 16M color support',15999,4.50),
		// 	('OnePlus Nord 5G (Gray Onyx\, 12GB RAM\, 256GB Storage)','Mobile','https://images-na.ssl-images-amazon.com/images/I/71zlbKfhFsL._SL1500_.jpg','48MP+8MP+5MP+2MP quad rear camera with 1080P Video at 30/60 fps\, 4k 30fps | 32MP+8MP front dual camera with 4K video capture at 30/60 fps and 1080 video capture at 30/60 fps6.44-inch 90Hz fluid Amoled display with 2400 x 1080 pixels resolution | 408ppiMemory\, Storage & SIM: 12GB RAM | 256GB internal memory | Dual SIM (nano+nano) | OnePlus Nord currently support dual 4G SIM Cards or a Single 5G SIM. 5G+4G support will be available via OTA update at a future date',29999,4.60),
		// 	('Mayumi® GLS EXPERTS Mixer Grinder 550 Watts with 3 SS Jar for Home Kitchen (BLACK with GREEN)','Home','https://images-na.ssl-images-amazon.com/images/I/71nXDml1q2L._SL1500_.jpg','100% copper motor with 550 watts \, heavy duty motor \, 3 jarEasy grinding and smooth blendingUniquely designed blunt Pounding Blade with thick edges which replicates pounding effect on dry ingredients\, thus giving authentic texture and tastePower -550 Watts; Packages Includes: 1 Motor Unit\,1 Liquidiser Jar with Lid\, 1 Grinding Jar with Lid\, 1 Chutney Jar with Lid',1749,3.80),
		// 	('Havells CAPTURE 500 Watt Mixer Grinder with 3 Stainless Steel Jar (Grey & Green) with 5 year Motor warranty','Home','https://images-na.ssl-images-amazon.com/images/I/715yW1Yo31L._SL1500_.jpg','3 Stainless Steel superior jars (i.e. 400ml Chutney Jar\, 800 ml Dry/Wet grinding jar\, 1.5L Stainless Steel blending jar)',2374,4.00),
		// 	('Yonex Muscle Power 29 Badminton Racquet with free Full Cover (G4\, 85-89.9 grams\, 28 lbs Tension)','Sports','https://images-na.ssl-images-amazon.com/images/I/71mlyOL8sTL._SL1500_.jpg','Muscle power frame - MP frame construction creates total unity of the string and frame through closer and tighter contact this locates the string on rounded archways that eliminate stress-load',2048,3.60),
		// 	('Acer Nitro XV272U 27\" IPS Monitor - 1 MS - 144 Hz - 400 Nits - 2560 x 1440 Resolution - USB 3.0 HUB - Height Adjustment Pivot - Stereo Speakers - 2 X HDMI - Display Port with Cables','Monitor','https://images-na.ssl-images-amazon.com/images/I/41q4SR54HhL.jpg','WQHD 2560 X 1440 Resolution IPS Display with AMD Radeon Free Sync TechnologyVisual Response Boost -1 MS VRB Rapid 144Hz Refresh Rate with 400 Nits Brightness2 X HDMI\, 1 X Display\, USB 3.0 HUB\, Height Adjustment Pivot\, HDMI-Display and USB 3.0 Cable included',27000,3.75),
		// 	('LG Ultragear 81.28 cm (32-inch) QHD (2K) Gaming Monitor with 144Hz\,1ms\, Radeon Freesync\, Display Port\, HDMI x 2-32GK650','Monitor','https://images-na.ssl-images-amazon.com/images/I/91gpmhtA%2BKL._SL1500_.jpg','144 Hz \, 1ms (MBR) Gaming MoitorScreen: 32\" QHD (2K 2560 x 1440) VA PanelPorts: DisplayPort\, HDMI x 2\, Headphone OutRadeon Freesync',21999,3.65),
		// 	('AOPEN Acer 32-inch Full HD Curve VA Panel Gaming Monitor with DisplayPort\, HDMI\, DVI\, 4ms Response time\, 144Hz Refresh Rate - 32HC1Q (Black)','Monitor','https://images-na.ssl-images-amazon.com/images/I/812WXALePlL._SL1500_.jpg','32-inch full HD 2560x1440 Resolution 1800R Curve 250 Nits VA Panel Display4 MS response time \,144 Hz Refresh RateHDMI\, DVI dual link up and display port with cablesAMD Radeon Free Sync Technology',22490,4.37),
		// 	('New Apple MacBook Pro with Apple M1 Chip (13-inch\, 8GB RAM\, 256GB SSD) - Space Grey (Latest Model)','Laptop','https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg','Apple-designed M1 chip for a giant leap in CPU\, GPU\, and machine learning performanceGet more done with up to 20 hours of battery life\, the longest ever in a Mac8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever',122990,4.80),
		// 	('Lenovo Yoga Slim 7 AMD Ryzen 7 4800U 14-inch Full HD IPS Thin and Light Laptop (8GB/512GB SSD/Windows 10/MS Office 2019/Integrated AMD Radeon Graphics/Slate Grey/1.33Kg)\, 82A2008VIN','Laptop','https://images-na.ssl-images-amazon.com/images/I/61lJ7ag2q7L._SL1500_.jpg','Processor: 4th Gen AMD Ryzen 7 4800U | Speed: 1.8 GHz (Base) - 4.2 GHz (Max) | 8 Cores | 8MB CacheOS: Pre-Loaded Windows 10 Home with Lifetime ValidityPre-Installed: MS Office Home and Student 2019Memory and Storage: 8GB RAM LPDDR4X-4266 | 512 GB SSD',76990,3.30),
		// 	('Dell XPS 9500 15.6\" UHD+ IPS AG Laptop (I7-10750H/16 GB/512 SSD/Nvidia 4 GB GTX Graphics/ Win 10 + MS Office/ Silver) D560031WIN9S','Laptop','https://images-na.ssl-images-amazon.com/images/I/71gjFCHlQ6L._SL1280_.jpg','Processor:10th Generation Intel Core i7-10750H Processor (12MB Cache\, up to 5GHz\,6 cores)Memory & Storage: :16 GB DDR4 at 2933 MHz (2 x 8 GB)\, dual channel | 512GB M.2 PCIe NVMe Solid State DriveGraphics:NVIDIA GeForce GTX 1650 Ti 4GB GDDR6Display: 15.6” UHD (3840 x 2400) InfinityEdge Anti-Reflecitve 500-Nit Display I Eyesafe technologyOperating System: Windows 10 Home Plus Single Language & Microsoft Office Home and Student 2019',19900,4.50);`,
		// 	(err, res) => {
		// 		if (err) {
		// 			console.log("error find in inserting");
		// 			console.log(err);
		// 		} else {
		// 			console.log("document inserted");
		// 		}
		// 	}
		// );
		// let x;
		// 		}
		// 	}
		// );
		// pool.query(
		// 	` CREATE TABLE carts(
		//         id SERIAL PRIMARY KEY,
		//         user_id INTEGER REFERENCES users(id),
		//         products_id INTEGER REFERENCES products(id)
		//     );`,
		// 	(err, res) => {
		// 		if (err) {
		// 			console.log(err);
		// 		} else {
		// 			console.log("carts Table Created");
		// 			console.log(res);
		// 		}
		// 	}
		// );
	}
}

module.exports = creatingTable;
