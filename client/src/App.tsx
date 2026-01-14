import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import SignUp from "@/pages/SignUp";
import Login from "@/pages/Login";
import Profile from "@/pages/Profile";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import ConfirmPayment from "@/pages/ConfirmPayment";
import MyReservations from "@/pages/MyReservations";
import ReservationConfirmed from "@/pages/ReservationConfirmed";
import Exchange from "@/pages/Exchange";
import PostExchange from "@/pages/PostExchange";
import ExchangeDetails from "@/pages/ExchangeDetails";
import Loan from "@/pages/Loan";
import Messages from "@/pages/Messages";
import Settings from "@/pages/Settings";
import AddProduct from "@/pages/AddProduct";
import Notifications from "@/pages/Notifications";
import Chat from "@/pages/Chat";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/profile" component={Profile} />
      <Route path="/settings" component={Settings} />
      <Route path="/add-product" component={AddProduct} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/confirm-payment" component={ConfirmPayment} />
      <Route path="/my-reservations" component={MyReservations} />
      <Route path="/reservation-confirmed" component={ReservationConfirmed} />
      <Route path="/exchange" component={Exchange} />
      <Route path="/post-exchange" component={PostExchange} />
      <Route path="/exchange-details/:id" component={ExchangeDetails} />
      <Route path="/loan" component={Loan} />
      <Route path="/messages" component={Messages} />
      <Route path="/chat/:id" component={Chat} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
