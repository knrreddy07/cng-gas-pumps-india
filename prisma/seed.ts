const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.pump.deleteMany({});
  console.log('Cleared existing pump data...');

  // Comprehensive CNG pump data for all major cities, towns, and areas across India
  const pumps = [
    // MAHARASHTRA - Mumbai Metropolitan Region
    {
      name: "Reliance CNG Station - Andheri East",
      city: "Mumbai",
      address: "Western Express Highway, Andheri East, Mumbai",
      latitude: 19.1136,
      longitude: 72.8697,
      status: true,
      phone: "+91-22-26830000",
      timings: "24 Hours"
    },
    {
      name: "GAIL CNG Station - Bandra West",
      city: "Mumbai",
      address: "Linking Road, Bandra West, Mumbai",
      latitude: 19.0544,
      longitude: 72.8181,
      status: false,
      phone: "+91-22-26430000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "Adani CNG Station - Powai",
      city: "Mumbai",
      address: "Hiranandani Gardens, Powai, Mumbai",
      latitude: 19.1197,
      longitude: 72.9073,
      status: true,
      phone: "+91-22-25700000",
      timings: "24 Hours"
    },
    {
      name: "MGL CNG Station - Borivali",
      city: "Mumbai",
      address: "Link Road, Borivali West, Mumbai",
      latitude: 19.2307,
      longitude: 72.8567,
      status: true,
      phone: "+91-22-28920000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "MGL CNG Station - Malad",
      city: "Mumbai",
      address: "SV Road, Malad West, Mumbai",
      latitude: 19.1864,
      longitude: 72.8493,
      status: true,
      phone: "+91-22-28810000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Thane",
      city: "Thane",
      address: "Eastern Express Highway, Thane",
      latitude: 19.2183,
      longitude: 72.9781,
      status: true,
      phone: "+91-22-25430000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Navi Mumbai",
      city: "Navi Mumbai",
      address: "Vashi Sector 17, Navi Mumbai",
      latitude: 19.0728,
      longitude: 73.0117,
      status: false,
      phone: "+91-22-27820000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "Maharashtra CNG Station - Hinjewadi",
      city: "Pune",
      address: "Hinjewadi IT Park, Pune",
      latitude: 18.5912,
      longitude: 73.7389,
      status: true,
      phone: "+91-20-66750000",
      timings: "24 Hours"
    },
    {
      name: "Green Gas CNG Station - Kothrud",
      city: "Pune",
      address: "Kothrud Depot, Pune",
      latitude: 18.5074,
      longitude: 73.8077,
      status: true,
      phone: "+91-20-25380000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "PCNG Station - Wakad",
      city: "Pune",
      address: "Mumbai-Pune Highway, Wakad, Pune",
      latitude: 18.5975,
      longitude: 73.7898,
      status: true,
      phone: "+91-20-27420000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Nashik",
      city: "Nashik",
      address: "Mumbai-Agra Highway, Nashik",
      latitude: 19.9975,
      longitude: 73.7898,
      status: false,
      phone: "+91-253-2310000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "Aurangabad CNG Station",
      city: "Aurangabad",
      address: "Jalna Road, Aurangabad",
      latitude: 19.8762,
      longitude: 75.3433,
      status: true,
      phone: "+91-240-2330000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Kolhapur",
      city: "Kolhapur",
      address: "Pune-Bangalore Highway, Kolhapur",
      latitude: 16.7050,
      longitude: 74.2433,
      status: true,
      phone: "+91-231-2650000",
      timings: "6:00 AM - 11:00 PM"
    },

    // DELHI NCR
    {
      name: "IGL CNG Station - Connaught Place",
      city: "Delhi",
      address: "Connaught Place, New Delhi",
      latitude: 28.6315,
      longitude: 77.2167,
      status: true,
      phone: "+91-11-23410000",
      timings: "24 Hours"
    },
    {
      name: "IGL CNG Station - Karol Bagh",
      city: "Delhi",
      address: "Karol Bagh Metro Station, New Delhi",
      latitude: 28.6519,
      longitude: 77.1909,
      status: true,
      phone: "+91-11-25750000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "IGL CNG Station - Dwarka",
      city: "Delhi",
      address: "Sector 12, Dwarka, New Delhi",
      latitude: 28.5921,
      longitude: 77.0460,
      status: false,
      phone: "+91-11-25280000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "IGL CNG Station - Rohini",
      city: "Delhi",
      address: "Sector 18, Rohini, Delhi",
      latitude: 28.7041,
      longitude: 77.1025,
      status: true,
      phone: "+91-11-27850000",
      timings: "24 Hours"
    },
    {
      name: "IGL CNG Station - Lajpat Nagar",
      city: "Delhi",
      address: "Ring Road, Lajpat Nagar, Delhi",
      latitude: 28.5677,
      longitude: 77.2431,
      status: true,
      phone: "+91-11-29840000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "IGL CNG Station - Janakpuri",
      city: "Delhi",
      address: "District Centre, Janakpuri, Delhi",
      latitude: 28.6219,
      longitude: 77.0814,
      status: true,
      phone: "+91-11-25520000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Gurgaon Cyber City",
      city: "Gurgaon",
      address: "DLF Cyber City, Gurgaon",
      latitude: 28.4595,
      longitude: 77.0266,
      status: true,
      phone: "+91-124-4220000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Noida Sector 62",
      city: "Noida",
      address: "Sector 62, Noida",
      latitude: 28.6139,
      longitude: 77.3910,
      status: false,
      phone: "+91-120-4250000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Faridabad",
      city: "Faridabad",
      address: "NH-19, Faridabad",
      latitude: 28.4089,
      longitude: 77.3178,
      status: true,
      phone: "+91-129-4180000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Ghaziabad",
      city: "Ghaziabad",
      address: "NH-24, Ghaziabad",
      latitude: 28.6692,
      longitude: 77.4538,
      status: true,
      phone: "+91-120-2710000",
      timings: "6:00 AM - 11:00 PM"
    },

    // GUJARAT
    {
      name: "Gujarat Gas CNG Station - SG Highway",
      city: "Ahmedabad",
      address: "SG Highway, Ahmedabad",
      latitude: 23.0593,
      longitude: 72.5194,
      status: true,
      phone: "+91-79-26850000",
      timings: "24 Hours"
    },
    {
      name: "Adani CNG Station - Satellite",
      city: "Ahmedabad",
      address: "Satellite Road, Ahmedabad",
      latitude: 23.0365,
      longitude: 72.5121,
      status: false,
      phone: "+91-79-26420000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "Gujarat Gas - Maninagar",
      city: "Ahmedabad",
      address: "Maninagar East, Ahmedabad",
      latitude: 23.0225,
      longitude: 72.5714,
      status: true,
      phone: "+91-79-25550000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Surat Diamond Bourse",
      city: "Surat",
      address: "Katargam, Surat",
      latitude: 21.1702,
      longitude: 72.8311,
      status: true,
      phone: "+91-261-2650000",
      timings: "24 Hours"
    },
    {
      name: "Gujarat Gas - Vadodara",
      city: "Vadodara",
      address: "Alkapuri, Vadodara",
      latitude: 22.3072,
      longitude: 73.1812,
      status: true,
      phone: "+91-265-2330000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Rajkot",
      city: "Rajkot",
      address: "Kalawad Road, Rajkot",
      latitude: 22.3039,
      longitude: 70.8022,
      status: false,
      phone: "+91-281-2440000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "Gujarat Gas - Gandhinagar",
      city: "Gandhinagar",
      address: "Sector 21, Gandhinagar",
      latitude: 23.2156,
      longitude: 72.6369,
      status: true,
      phone: "+91-79-23240000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Anand",
      city: "Anand",
      address: "Anand-Sojitra Road, Anand",
      latitude: 22.5645,
      longitude: 72.9289,
      status: true,
      phone: "+91-2692-240000",
      timings: "6:00 AM - 10:00 PM"
    },

    // KARNATAKA
    {
      name: "GAIL CNG Station - Electronic City",
      city: "Bangalore",
      address: "Electronic City Phase 1, Bangalore",
      latitude: 12.8456,
      longitude: 77.6603,
      status: true,
      phone: "+91-80-28520000",
      timings: "24 Hours"
    },
    {
      name: "Bharat Gas CNG Station - Whitefield",
      city: "Bangalore",
      address: "ITPL Main Road, Whitefield, Bangalore",
      latitude: 12.9698,
      longitude: 77.7500,
      status: true,
      phone: "+91-80-28430000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Koramangala",
      city: "Bangalore",
      address: "5th Block, Koramangala, Bangalore",
      latitude: 12.9352,
      longitude: 77.6245,
      status: false,
      phone: "+91-80-25530000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "BPCL CNG Station - Hebbal",
      city: "Bangalore",
      address: "Outer Ring Road, Hebbal, Bangalore",
      latitude: 13.0358,
      longitude: 77.5970,
      status: true,
      phone: "+91-80-23440000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Mysore",
      city: "Mysore",
      address: "Bangalore-Mysore Highway, Mysore",
      latitude: 12.2958,
      longitude: 76.6394,
      status: true,
      phone: "+91-821-2420000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Hubli",
      city: "Hubli",
      address: "Pune-Bangalore Highway, Hubli",
      latitude: 15.3647,
      longitude: 75.1240,
      status: true,
      phone: "+91-836-2350000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Mangalore",
      city: "Mangalore",
      address: "NH-66, Mangalore",
      latitude: 12.9141,
      longitude: 74.8560,
      status: true,
      phone: "+91-824-2420000",
      timings: "24 Hours"
    },

    // TELANGANA
    {
      name: "HPCL CNG Station - Gachibowli",
      city: "Hyderabad",
      address: "Gachibowli Financial District, Hyderabad",
      latitude: 17.4399,
      longitude: 78.3908,
      status: false,
      phone: "+91-40-23850000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "IOC CNG Station - Hitech City",
      city: "Hyderabad",
      address: "Hitech City Main Road, Hyderabad",
      latitude: 17.4435,
      longitude: 78.3772,
      status: true,
      phone: "+91-40-23960000",
      timings: "24 Hours"
    },
    {
      name: "BPCL CNG Station - Secunderabad",
      city: "Hyderabad",
      address: "Secunderabad Railway Station, Hyderabad",
      latitude: 17.4399,
      longitude: 78.4983,
      status: true,
      phone: "+91-40-27750000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Warangal",
      city: "Warangal",
      address: "NH-163, Warangal",
      latitude: 17.9689,
      longitude: 79.5941,
      status: true,
      phone: "+91-870-2570000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Nizamabad",
      city: "Nizamabad",
      address: "Hyderabad Road, Nizamabad",
      latitude: 18.6725,
      longitude: 78.0941,
      status: true,
      phone: "+91-8461-230000",
      timings: "6:00 AM - 10:00 PM"
    },

    // TAMIL NADU
    {
      name: "BPCL CNG Station - OMR",
      city: "Chennai",
      address: "Old Mahabalipuram Road, Chennai",
      latitude: 12.8406,
      longitude: 80.2335,
      status: true,
      phone: "+91-44-24750000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "HP CNG Station - Anna Nagar",
      city: "Chennai",
      address: "Anna Nagar West, Chennai",
      latitude: 13.0843,
      longitude: 80.2055,
      status: true,
      phone: "+91-44-26150000",
      timings: "24 Hours"
    },
    {
      name: "IOC CNG Station - T. Nagar",
      city: "Chennai",
      address: "Usman Road, T. Nagar, Chennai",
      latitude: 13.0418,
      longitude: 80.2341,
      status: false,
      phone: "+91-44-28340000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Coimbatore",
      city: "Coimbatore",
      address: "Avinashi Road, Coimbatore",
      latitude: 11.0168,
      longitude: 76.9558,
      status: true,
      phone: "+91-422-2440000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Madurai",
      city: "Madurai",
      address: "Bypass Road, Madurai",
      latitude: 9.9252,
      longitude: 78.1198,
      status: true,
      phone: "+91-452-2530000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Salem",
      city: "Salem",
      address: "Bangalore Highway, Salem",
      latitude: 11.6643,
      longitude: 78.1460,
      status: true,
      phone: "+91-427-2440000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Trichy",
      city: "Trichy",
      address: "Karur Bypass, Trichy",
      latitude: 10.7905,
      longitude: 78.7047,
      status: true,
      phone: "+91-431-2650000",
      timings: "6:00 AM - 10:00 PM"
    },

    // UTTAR PRADESH
    {
      name: "IGL CNG Station - Lucknow Gomti Nagar",
      city: "Lucknow",
      address: "Gomti Nagar, Lucknow",
      latitude: 26.8467,
      longitude: 80.9462,
      status: true,
      phone: "+91-522-2390000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Kanpur",
      city: "Kanpur",
      address: "GT Road, Kanpur",
      latitude: 26.4499,
      longitude: 80.3319,
      status: true,
      phone: "+91-512-2550000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Agra",
      city: "Agra",
      address: "Delhi-Agra Highway, Agra",
      latitude: 27.1767,
      longitude: 78.0081,
      status: false,
      phone: "+91-562-2630000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Varanasi",
      city: "Varanasi",
      address: "Cantonment, Varanasi",
      latitude: 25.3176,
      longitude: 82.9739,
      status: true,
      phone: "+91-542-2360000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Meerut",
      city: "Meerut",
      address: "Delhi Road, Meerut",
      latitude: 28.9845,
      longitude: 77.7064,
      status: true,
      phone: "+91-121-2650000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Allahabad",
      city: "Allahabad",
      address: "Civil Lines, Allahabad",
      latitude: 25.4358,
      longitude: 81.8463,
      status: true,
      phone: "+91-532-2420000",
      timings: "6:00 AM - 10:00 PM"
    },

    // RAJASTHAN
    {
      name: "RGAS CNG Station - Jaipur",
      city: "Jaipur",
      address: "Tonk Road, Jaipur",
      latitude: 26.9124,
      longitude: 75.7873,
      status: true,
      phone: "+91-141-2750000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Jodhpur",
      city: "Jodhpur",
      address: "Pali Road, Jodhpur",
      latitude: 26.2389,
      longitude: 73.0243,
      status: true,
      phone: "+91-291-2440000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Udaipur",
      city: "Udaipur",
      address: "Ahmedabad Road, Udaipur",
      latitude: 24.5854,
      longitude: 73.7125,
      status: false,
      phone: "+91-294-2420000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Kota",
      city: "Kota",
      address: "Jhalawar Road, Kota",
      latitude: 25.2138,
      longitude: 75.8648,
      status: true,
      phone: "+91-744-2350000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Ajmer",
      city: "Ajmer",
      address: "Jaipur Road, Ajmer",
      latitude: 26.4499,
      longitude: 74.6399,
      status: true,
      phone: "+91-145-2420000",
      timings: "6:00 AM - 11:00 PM"
    },

    // WEST BENGAL
    {
      name: "GAIL CNG Station - Salt Lake",
      city: "Kolkata",
      address: "Salt Lake City, Kolkata",
      latitude: 22.5726,
      longitude: 88.3639,
      status: true,
      phone: "+91-33-23350000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Park Street",
      city: "Kolkata",
      address: "Park Street, Kolkata",
      latitude: 22.5448,
      longitude: 88.3426,
      status: true,
      phone: "+91-33-22870000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Howrah",
      city: "Howrah",
      address: "GT Road, Howrah",
      latitude: 22.5958,
      longitude: 88.2636,
      status: false,
      phone: "+91-33-26480000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Durgapur",
      city: "Durgapur",
      address: "GT Road, Durgapur",
      latitude: 23.5204,
      longitude: 87.3119,
      status: true,
      phone: "+91-343-2540000",
      timings: "6:00 AM - 11:00 PM"
    },

    // HARYANA
    {
      name: "CNG Station - Panipat",
      city: "Panipat",
      address: "GT Road, Panipat",
      latitude: 29.3909,
      longitude: 76.9635,
      status: true,
      phone: "+91-180-2650000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Ambala",
      city: "Ambala",
      address: "Delhi Road, Ambala",
      latitude: 30.3782,
      longitude: 76.7767,
      status: true,
      phone: "+91-171-2540000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Karnal",
      city: "Karnal",
      address: "NH-1, Karnal",
      latitude: 29.6857,
      longitude: 76.9905,
      status: true,
      phone: "+91-184-2280000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Hisar",
      city: "Hisar",
      address: "Delhi Road, Hisar",
      latitude: 29.1492,
      longitude: 75.7217,
      status: true,
      phone: "+91-1662-230000",
      timings: "24 Hours"
    },

    // PUNJAB
    {
      name: "CNG Station - Ludhiana",
      city: "Ludhiana",
      address: "Ferozepur Road, Ludhiana",
      latitude: 30.9010,
      longitude: 75.8573,
      status: true,
      phone: "+91-161-2440000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Amritsar",
      city: "Amritsar",
      address: "GT Road, Amritsar",
      latitude: 31.6340,
      longitude: 74.8723,
      status: false,
      phone: "+91-183-2550000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Jalandhar",
      city: "Jalandhar",
      address: "Delhi Road, Jalandhar",
      latitude: 31.3260,
      longitude: 75.5762,
      status: true,
      phone: "+91-181-2460000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Patiala",
      city: "Patiala",
      address: "Chandigarh Road, Patiala",
      latitude: 30.3398,
      longitude: 76.3869,
      status: true,
      phone: "+91-175-2220000",
      timings: "6:00 AM - 11:00 PM"
    },

    // MADHYA PRADESH
    {
      name: "CNG Station - Bhopal",
      city: "Bhopal",
      address: "Hoshangabad Road, Bhopal",
      latitude: 23.2599,
      longitude: 77.4126,
      status: true,
      phone: "+91-755-2550000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Indore",
      city: "Indore",
      address: "AB Road, Indore",
      latitude: 22.7196,
      longitude: 75.8577,
      status: true,
      phone: "+91-731-2440000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Gwalior",
      city: "Gwalior",
      address: "Agra Road, Gwalior",
      latitude: 26.2183,
      longitude: 78.1828,
      status: true,
      phone: "+91-751-2340000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Jabalpur",
      city: "Jabalpur",
      address: "Nagpur Road, Jabalpur",
      latitude: 23.1815,
      longitude: 79.9864,
      status: false,
      phone: "+91-761-2650000",
      timings: "6:00 AM - 11:00 PM"
    },

    // BIHAR
    {
      name: "CNG Station - Patna",
      city: "Patna",
      address: "Bailey Road, Patna",
      latitude: 25.5941,
      longitude: 85.1376,
      status: true,
      phone: "+91-612-2220000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Gaya",
      city: "Gaya",
      address: "Dobhi Road, Gaya",
      latitude: 24.7914,
      longitude: 85.0002,
      status: true,
      phone: "+91-631-2240000",
      timings: "6:00 AM - 11:00 PM"
    },

    // JHARKHAND
    {
      name: "CNG Station - Ranchi",
      city: "Ranchi",
      address: "Main Road, Ranchi",
      latitude: 23.3441,
      longitude: 85.3096,
      status: true,
      phone: "+91-651-2440000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Jamshedpur",
      city: "Jamshedpur",
      address: "Bistupur, Jamshedpur",
      latitude: 22.8046,
      longitude: 86.2029,
      status: true,
      phone: "+91-657-2350000",
      timings: "24 Hours"
    },

    // ODISHA
    {
      name: "CNG Station - Bhubaneswar",
      city: "Bhubaneswar",
      address: "Janpath, Bhubaneswar",
      latitude: 20.2961,
      longitude: 85.8245,
      status: true,
      phone: "+91-674-2530000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Cuttack",
      city: "Cuttack",
      address: "Link Road, Cuttack",
      latitude: 20.4625,
      longitude: 85.8828,
      status: false,
      phone: "+91-671-2420000",
      timings: "6:00 AM - 10:00 PM"
    },

    // ASSAM
    {
      name: "CNG Station - Guwahati",
      city: "Guwahati",
      address: "GS Road, Guwahati",
      latitude: 26.1445,
      longitude: 91.7362,
      status: true,
      phone: "+91-361-2650000",
      timings: "6:00 AM - 11:00 PM"
    },

    // KERALA
    {
      name: "CNG Station - Kochi",
      city: "Kochi",
      address: "MG Road, Kochi",
      latitude: 9.9312,
      longitude: 76.2673,
      status: true,
      phone: "+91-484-2440000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Thiruvananthapuram",
      city: "Thiruvananthapuram",
      address: "Statue Junction, Thiruvananthapuram",
      latitude: 8.5241,
      longitude: 76.9366,
      status: true,
      phone: "+91-471-2350000",
      timings: "6:00 AM - 10:00 PM"
    },

    // ANDHRA PRADESH
    {
      name: "CNG Station - Visakhapatnam",
      city: "Visakhapatnam",
      address: "Beach Road, Visakhapatnam",
      latitude: 17.6868,
      longitude: 83.2185,
      status: true,
      phone: "+91-891-2550000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Vijayawada",
      city: "Vijayawada",
      address: "Bandar Road, Vijayawada",
      latitude: 16.5062,
      longitude: 80.6480,
      status: false,
      phone: "+91-866-2420000",
      timings: "6:00 AM - 10:00 PM"
    },

    // HIMACHAL PRADESH
    {
      name: "CNG Station - Shimla",
      city: "Shimla",
      address: "Mall Road, Shimla",
      latitude: 31.1048,
      longitude: 77.1734,
      status: true,
      phone: "+91-177-2650000",
      timings: "6:00 AM - 11:00 PM"
    },

    // UTTARAKHAND
    {
      name: "CNG Station - Dehradun",
      city: "Dehradun",
      address: "Rajpur Road, Dehradun",
      latitude: 30.3165,
      longitude: 78.0322,
      status: true,
      phone: "+91-135-2440000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Haridwar",
      city: "Haridwar",
      address: "Railway Road, Haridwar",
      latitude: 29.9457,
      longitude: 78.1642,
      status: true,
      phone: "+91-1334-220000",
      timings: "6:00 AM - 10:00 PM"
    },

    // JAMMU & KASHMIR
    {
      name: "CNG Station - Jammu",
      city: "Jammu",
      address: "Jammu-Srinagar Highway, Jammu",
      latitude: 32.7266,
      longitude: 74.8570,
      status: true,
      phone: "+91-191-2550000",
      timings: "6:00 AM - 11:00 PM"
    },

    // CHANDIGARH
    {
      name: "CNG Station - Chandigarh",
      city: "Chandigarh",
      address: "Sector 17, Chandigarh",
      latitude: 30.7333,
      longitude: 76.7794,
      status: true,
      phone: "+91-172-2650000",
      timings: "24 Hours"
    },

    // GOA
    {
      name: "CNG Station - Panaji",
      city: "Panaji",
      address: "18th June Road, Panaji",
      latitude: 15.4909,
      longitude: 73.8278,
      status: false,
      phone: "+91-832-2420000",
      timings: "6:00 AM - 10:00 PM"
    },

    // SMALLER CITIES AND TOWNS
    {
      name: "CNG Station - Aligarh",
      city: "Aligarh",
      address: "GT Road, Aligarh",
      latitude: 27.8974,
      longitude: 78.0880,
      status: true,
      phone: "+91-571-2440000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Bareilly",
      city: "Bareilly",
      address: "Civil Lines, Bareilly",
      latitude: 28.3670,
      longitude: 79.4304,
      status: true,
      phone: "+91-581-2350000",
      timings: "6:00 AM - 10:00 PM"
    },
    {
      name: "CNG Station - Moradabad",
      city: "Moradabad",
      address: "Delhi Road, Moradabad",
      latitude: 28.8386,
      longitude: 78.7733,
      status: true,
      phone: "+91-591-2420000",
      timings: "24 Hours"
    },
    {
      name: "CNG Station - Saharanpur",
      city: "Saharanpur",
      address: "Delhi Road, Saharanpur",
      latitude: 29.9680,
      longitude: 77.5552,
      status: false,
      phone: "+91-132-2650000",
      timings: "6:00 AM - 11:00 PM"
    },
    {
      name: "CNG Station - Muzaffarnagar",
      city: "Muzaffarnagar",
      address: "Delhi Road, Muzaffarnagar",
      latitude: 29.4727,
      longitude: 77.7085,
      status: true,
      phone: "+91-131-2440000",
      timings: "6:00 AM - 10:00 PM"
    }
  ];

  console.log('Seeding database with comprehensive CNG pump data across India...');
  
  for (const pump of pumps) {
    await prisma.pump.create({
      data: pump
    });
  }
  
  console.log(`Database seeded successfully with ${pumps.length} CNG pumps!`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
