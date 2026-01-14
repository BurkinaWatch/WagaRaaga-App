import { Card, CardContent } from "@/components/ui/card";
import { Bell, Calendar, MessageSquare } from "lucide-react";
import type { Notification } from "@shared/schema";
import { cn } from "@/lib/utils";

interface NotificationItemProps {
  notification: Notification;
}

const iconMap = {
  market_update: Bell,
  reservation: Calendar,
  message: MessageSquare,
};

export function NotificationItem({ notification }: NotificationItemProps) {
  const Icon = iconMap[notification.type as keyof typeof iconMap] || Bell;

  return (
    <div className="flex items-center gap-4 py-4 px-2 hover-elevate rounded-md transition-colors cursor-pointer">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted shrink-0">
        <Icon className="h-6 w-6 text-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h4 className="text-sm font-semibold truncate text-foreground">
            {notification.title}
          </h4>
          <span className="text-xs text-muted-foreground shrink-0">
            {notification.timestamp}
          </span>
        </div>
        <p className="text-xs text-muted-foreground truncate">
          {notification.description}
        </p>
      </div>
      {notification.isRead === "false" && (
        <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
      )}
    </div>
  );
}
