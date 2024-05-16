import AnalyticsIcon from "../../../assets/icons/AnalyticsIcon";
import CustomersIcon from "../../../assets/icons/CustomersIcon";
import DashboardIcon from "../../../assets/icons/DashboardIcon";
import MarketingIcon from "../../../assets/icons/MarketingIcon";
import OrdersIcon from "../../../assets/icons/OrdersIcon";
import ProductsIcon from "../../../assets/icons/ProductsIcon";
import IntegrationsIcon from "../../../assets/icons/IntegrationsIcon";
import MyStoreIcon from "../../../assets/icons/MyStoreIcon";
import DiscountsIcon from "../../../assets/icons/DiscountsIcon";
import SettingsIcon from "../../../assets/icons/SettingsIcon";
import GetHelpIcon from "../../../assets/icons/GetHelpIcon";

export const MAIN_LIST = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: DashboardIcon,
    to: "/",
  },
  {
    id: "orders",
    label: "Orders",
    icon: OrdersIcon,
    to: "/orders",
  },
  {
    id: "products",
    label: "Products",
    icon: ProductsIcon,
    to: "/products",
  },
  {
    id: "customers",
    label: "Customers",
    icon: CustomersIcon,
    to: "/customers",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: AnalyticsIcon,
    to: "/analytics",
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: MarketingIcon,
    to: "/marketing",
  },
];

export const SALES_LIST = [
  {
    id: "integrations",
    label: "Integrations",
    icon: IntegrationsIcon,
    to: "/integrations",
  },
  {
    id: "mystore",
    label: "My Store",
    icon: MyStoreIcon,
    to: "/mystore",
  },
  {
    id: "discounts",
    label: "Discounts",
    icon: DiscountsIcon,
    to: "/discounts",
  },
];

export const OTHER_LIST = [
  {
    id: "settings",
    label: "Settings",
    icon: SettingsIcon,
    to: "/settings",
  },
  {
    id: "gethelp",
    label: "Get Help",
    icon: GetHelpIcon,

    to: "/help",
  },
];
