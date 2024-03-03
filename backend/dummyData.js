const dummyData = [
    { 
      customer_name: 'John Doe', 
      age: 30, 
      phone: '1234567890', 
      location: 'New York',
      created_at_date: '2023-12-01', // Sample date in 'YYYY-MM-DD' format
      created_at_time: '2023-12-01 09:30:00' // Sample timestamp in 'YYYY-MM-DD HH:MI:SS' format
    
    },
    { 
      customer_name: 'Jane Smith', 
      age: 25, 
      phone: '9876543210', 
      location: 'Los Angeles',
      created_at_date: '2023-11-15', // Sample date in 'YYYY-MM-DD' format
      created_at_time: '2023-11-15 14:45:00' // Sample timestamp in 'YYYY-MM-DD HH:MI:SS' format
    },
    { 
        customer_name: 'Alice Johnson', 
        age: 40, 
        phone: '5551112233', 
        location: 'Chicago',
        created_at_date: '2023-10-10',
        created_at_time: '2023-10-10 09:15:00'
      },
      { 
        customer_name: 'Robert Williams', 
        age: 22, 
        phone: '3334445555', 
        location: 'Houston',
        created_at_date: '2023-09-20',
        created_at_time: '2023-09-20 11:30:00'
      },
      { 
        customer_name: 'Emily Johnson', 
        age: 35, 
        phone: '7778889999', 
        location: 'New York',
        created_at_date: '2023-08-05',
        created_at_time: '2023-08-05 16:45:00'
      },
      { 
        customer_name: 'Michael Brown', 
        age: 28, 
        phone: '1112223333', 
        location: 'Chicago',
        created_at_date: '2023-07-15',
        created_at_time: '2023-07-15 13:20:00'
      },
      { 
        customer_name: 'Sophia Martinez', 
        age: 33, 
        phone: '9998887777', 
        location: 'Los Angeles',
        created_at_date: '2023-06-25',
        created_at_time: '2023-06-25 10:10:00'
      },
      { 
        customer_name: 'Ethan Jones', 
        age: 45, 
        phone: '6665554444', 
        location: 'Houston',
        created_at_date: '2023-05-18',
        created_at_time: '2023-05-18 15:30:00'
      },
      { 
        customer_name: 'Olivia Garcia', 
        age: 28, 
        phone: '9991112222', 
        location: 'Chicago',
        created_at_date: '2023-06-02',
        created_at_time: '2023-06-02 10:45:00'
      },
      { 
        customer_name: 'Liam Martinez', 
        age: 35, 
        phone: '7773338888', 
        location: 'Los Angeles',
        created_at_date: '2023-07-12',
        created_at_time: '2023-07-12 13:15:00'
      },
      { 
        customer_name: 'Ava Brown', 
        age: 32, 
        phone: '4446669999', 
        location: 'New York',
        created_at_date: '2023-08-20',
        created_at_time: '2023-08-20 09:30:00'
      },
      { 
        customer_name: 'Noah Rodriguez', 
        age: 40, 
        phone: '8884442222', 
        location: 'Houston',
        created_at_date: '2023-09-05',
        created_at_time: '2023-09-05 16:20:00'
      },
      { 
        customer_name: 'Isabella Nguyen', 
        age: 27, 
        phone: '3339991111', 
        location: 'Chicago',
        created_at_date: '2023-10-10',
        created_at_time: '2023-10-10 11:10:00'
      },
      { 
        customer_name: 'Mason Kim', 
        age: 38, 
        phone: '5557778888', 
        location: 'Los Angeles',
        created_at_date: '2023-11-22',
        created_at_time: '2023-11-22 14:40:00'
      },
      { 
        customer_name: 'Sophia Lopez', 
        age: 29, 
        phone: '1113335555', 
        location: 'New York',
        created_at_date: '2023-12-15',
        created_at_time: '2023-12-15 08:55:00'
      },
      { 
        customer_name: 'Logan Lee', 
        age: 50, 
        phone: '7778889999', 
        location: 'Houston',
        created_at_date: '2024-01-03',
        created_at_time: '2024-01-03 12:25:00'
      },
      { 
        customer_name: 'Amelia Harris', 
        age: 31, 
        phone: '2224446666', 
        location: 'Chicago',
        created_at_date: '2024-02-10',
        created_at_time: '2024-02-10 09:35:00'
      },
      { 
        customer_name: 'William Clark', 
        age: 33, 
        phone: '9993336666', 
        location: 'Los Angeles',
        created_at_date: '2024-03-18',
        created_at_time: '2024-03-18 11:30:00'
      },
      { 
        customer_name: 'Charlotte Young', 
        age: 29, 
        phone: '2228885555', 
        location: 'New York',
        created_at_date: '2024-04-02',
        created_at_time: '2024-04-02 09:45:00'
      },
      { 
        customer_name: 'Michael Walker', 
        age: 42, 
        phone: '5551118888', 
        location: 'Houston',
        created_at_date: '2024-05-12',
        created_at_time: '2024-05-12 13:15:00'
      },
      { 
        customer_name: 'Emma King', 
        age: 26, 
        phone: '7779993333', 
        location: 'Chicago',
        created_at_date: '2024-06-20',
        created_at_time: '2024-06-20 10:20:00'
      },
      { 
        customer_name: 'Alexander Martinez', 
        age: 37, 
        phone: '1114447777', 
        location: 'Los Angeles',
        created_at_date: '2024-07-05',
        created_at_time: '2024-07-05 14:50:00'
      },
      { 
        customer_name: 'Abigail Scott', 
        age: 30, 
        phone: '6662229999', 
        location: 'New York',
        created_at_date: '2024-08-10',
        created_at_time: '2024-08-10 08:40:00'
      },
      { 
        customer_name: 'James Hall', 
        age: 47, 
        phone: '8884442222', 
        location: 'Houston',
        created_at_date: '2024-09-15',
        created_at_time: '2024-09-15 12:10:00'
      },
      { 
        customer_name: 'Emily Carter', 
        age: 28, 
        phone: '3337771111', 
        location: 'Chicago',
        created_at_date: '2024-10-22',
        created_at_time: '2024-10-22 09:55:00'
      },
      { 
        customer_name: 'Daniel Morris', 
        age: 39, 
        phone: '6668889999', 
        location: 'Los Angeles',
        created_at_date: '2024-11-03',
        created_at_time: '2024-11-03 14:35:00'
      },
      { 
        customer_name: 'Avery Phillips', 
        age: 34, 
        phone: '2225558888', 
        location: 'New York',
        created_at_date: '2024-12-08',
        created_at_time: '2024-12-08 08:20:00'
      },
      { 
        customer_name: 'Olivia Baker', 
        age: 31, 
        phone: '7772225555', 
        location: 'Houston',
        created_at_date: '2025-01-15',
        created_at_time: '2025-01-15 13:25:00'
      },
      { 
        customer_name: 'Benjamin Gray', 
        age: 40, 
        phone: '5553337777', 
        location: 'Chicago',
        created_at_date: '2025-02-20',
        created_at_time: '2025-02-20 10:30:00'
      },
      { 
        customer_name: 'Sophia Evans', 
        age: 27, 
        phone: '9995552222', 
        location: 'New York',
        created_at_date: '2025-03-08',
        created_at_time: '2025-03-08 09:15:00'
      },
      { 
        customer_name: 'Henry Adams', 
        age: 35, 
        phone: '3339991111', 
        location: 'Los Angeles',
        created_at_date: '2025-04-12',
        created_at_time: '2025-04-12 14:40:00'
      },
      { 
        customer_name: 'Isabella Wright', 
        age: 32, 
        phone: '8881114444', 
        location: 'Houston',
        created_at_date: '2025-05-18',
        created_at_time: '2025-05-18 12:05:00'
      },
      { 
        customer_name: 'William Hill', 
        age: 36, 
        phone: '4447778888', 
        location: 'Chicago',
        created_at_date: '2025-06-25',
        created_at_time: '2025-06-25 11:20:00'
      },
      { 
        customer_name: 'Mia Turner', 
        age: 29, 
        phone: '2224446666', 
        location: 'New York',
        created_at_date: '2025-07-30',
        created_at_time: '2025-07-30 09:35:00'
      },
      { 
        customer_name: 'Daniel Wilson', 
        age: 38, 
        phone: '6668881111', 
        location: 'Los Angeles',
        created_at_date: '2025-08-05',
        created_at_time: '2025-08-05 14:15:00'
      },
      { 
        customer_name: 'Ava Martinez', 
        age: 33, 
        phone: '1112223333', 
        location: 'Houston',
        created_at_date: '2025-09-10',
        created_at_time: '2025-09-10 12:30:00'
      },
      { 
        customer_name: 'Liam Lee', 
        age: 30, 
        phone: '7778889999', 
        location: 'Chicago',
        created_at_date: '2025-10-15',
        created_at_time: '2025-10-15 10:45:00'
      },
      { 
        customer_name: 'Emma Garcia', 
        age: 28, 
        phone: '5554443333', 
        location: 'New York',
        created_at_date: '2025-11-20',
        created_at_time: '2025-11-20 08:50:00'
      },
      { 
        customer_name: 'James Moore', 
        age: 39, 
        phone: '9993337777', 
        location: 'Los Angeles',
        created_at_date: '2025-12-25',
        created_at_time: '2025-12-25 15:10:00'
      },
      { 
        customer_name: 'Charlotte Cooper', 
        age: 26, 
        phone: '2223334444', 
        location: 'Houston',
        created_at_date: '2026-01-01',
        created_at_time: '2026-01-01 11:25:00'
      },
      { 
        customer_name: 'Alexander Rodriguez', 
        age: 37, 
        phone: '6662228888', 
        location: 'Chicago',
        created_at_date: '2026-02-10',
        created_at_time: '2026-02-10 09:30:00'
      },
      { 
        customer_name: 'Amelia Young', 
        age: 32, 
        phone: '7776665555', 
        location: 'New York',
        created_at_date: '2026-03-15',
        created_at_time: '2026-03-15 14:20:00'
      },
      { 
        customer_name: 'Michael King', 
        age: 34, 
        phone: '3335557777', 
        location: 'Los Angeles',
        created_at_date: '2026-04-20',
        created_at_time: '2026-04-20 12:45:00'
      },
      { 
        customer_name: 'Emily Hernandez', 
        age: 27, 
        phone: '8881112222', 
        location: 'Houston',
        created_at_date: '2026-05-25',
        created_at_time: '2026-05-25 10:55:00'
      },
      { 
        customer_name: 'Noah Taylor', 
        age: 31, 
        phone: '4442226666', 
        location: 'Chicago',
        created_at_date: '2026-06-30',
        created_at_time: '2026-06-30 08:15:00'
      },
      { 
        customer_name: 'Madison Martinez', 
        age: 29, 
        phone: '7773336666', 
        location: 'New York',
        created_at_date: '2026-07-05',
        created_at_time: '2026-07-05 13:35:00'
      },
      { 
        customer_name: 'Oliver Gonzalez', 
        age: 36, 
        phone: '9998887777', 
        location: 'Los Angeles',
        created_at_date: '2026-08-10',
        created_at_time: '2026-08-10 11:40:00'
      },
      { 
        customer_name: 'Liam Wilson', 
        age: 33, 
        phone: '1112223333', 
        location: 'Houston',
        created_at_date: '2026-09-15',
        created_at_time: '2026-09-15 09:55:00'
      },
      { 
        customer_name: 'Sophia Anderson', 
        age: 28, 
        phone: '4446668888', 
        location: 'Chicago',
        created_at_date: '2026-10-20',
        created_at_time: '2026-10-20 14:30:00'
      },
    //   { 
    //     customer_name: 'Jackson Thomas', 
    //     age: 41, 
    //     phone: '9996663333', 
    //     location: 'New York',
    //     created_at_date: '2026-11-25',
    //     created_at_time: '2026-11-25 10:20:00'
    //   },
      
  ];
module.exports = dummyData;