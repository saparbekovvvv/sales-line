export const ordersList = [
  {
    id: "#ID1234",
    title: "Simple Order",
    date: "Apr 24, 2022",
    customer: {
      id: "customer_1",
      first_name: "Chieko",
      last_name: "Chute",
      full_name: "Chieko Chute",
    },
    payment_status: "paid",
    status: "Unfulfilled",
    price: "450.00",
  },
  {
    id: "#ID5678",
    title: "Complex Order",
    date: "May 12, 2022",
    customer: {
      id: "customer_2",
      first_name: "John",
      last_name: "Doe",
      full_name: "John Doe",
    },
    payment_status: "pending",
    status: "Fulfilled",
    price: "750.00",
  },
  {
    id: "#ID91011",
    title: "Special Order",
    date: "Jun 5, 2022",
    customer: {
      id: "customer_3",
      first_name: "Alice",
      last_name: "Smith",
      full_name: "Alice Smith",
    },
    payment_status: "pending",
    status: "Processing",
    price: "1200.00",
  },
  {
    id: "#ID121314",
    title: "Bulk Order",
    date: "Jul 18, 2022",
    customer: {
      id: "customer_4",
      first_name: "Michael",
      last_name: "Johnson",
      full_name: "Michael Johnson",
    },
    payment_status: "paid",
    status: "Shipped",
    price: "2500.00",
  },
  {
    id: "#ID151617",
    title: "Express Order",
    date: "Aug 2, 2022",
    customer: {
      id: "customer_5",
      first_name: "Emily",
      last_name: "Brown",
      full_name: "Emily Brown",
    },
    payment_status: "paid",
    status: "Delivered",
    price: "350.00",
  },
];
export const TABS_LIST = [
  {
    id: "all",
    label: "All Orders",
    isActive: true,
  },
  {
    id: "drafts",
    label: "Drafts",
    isActive: false,
  },
  {
    id: "shipping",
    label: "Shipping",
    isActive: false,
  },
  {
    id: "completed",
    label: "Completed",
    isActive: false,
  },
  {
    id: "canceled",
    label: "Canceled",
    isActive: false,
  },
];
