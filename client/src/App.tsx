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
import Exchange from "@/pages/Exchange";
import PostExchange from "@/pages/PostExchange";
import Loan from "@/pages/Loan";
import Messages from "@/pages/Messages";
import Settings from "@/pages/Settings";
import AddProduct from "@/pages/AddProduct";
import ProductDetails from "@/pages/ProductDetails";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/profile" component={Profile} />
      <Route path="/settings" component={Settings} />
      <Route path="/add-product" component={AddProduct} />
      <Route path="/product/:id" component={ProductDetails} />
      <Route path="/exchange" component={Exchange} />
      <Route path="/post-exchange" component={PostExchange} />
      <Route path="/loan" component={Loan} />
      <Route path="/messages" component={Messages} />
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
