"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit2, Check, X, Mail, User as UserIcon, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "./context/auth-context";

export function ProfileCard() {
  // Getting userDisplayName and updater from Context
  const { user, loading, userDisplayName, updateUserDisplayName } = useAuth();
  
  const [tempName, setTempName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Initializing name changes
  useEffect(() => {
    setTempName(userDisplayName);
  }, [userDisplayName]);

  const handleSave = () => {
    if (!tempName.trim()) {
      toast.error("Name cannot be empty");
      return;
    }

    // Calling the Context function
    updateUserDisplayName(tempName);
    
    setIsEditing(false);
    toast.success("Profile name updated successfully!");
  };

  // Cancel editing and revert changes
  const handleCancel = () => {
    setTempName(userDisplayName); 
    setIsEditing(false);
  };

  if (loading) return <Loader2 className="animate-spin h-screen flex justify-center items-center" />;
  if (!user) return <div>Please log in</div>;

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-md border-border/50 bg-card">
      <CardHeader className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-border/50">
        <div className="relative group">
          <Avatar className="w-24 h-24 border-4 border-background shadow-xl">
            <AvatarImage src={user.avatar} className="object-cover" />
            <AvatarFallback className="text-2xl bg-primary/10">
              {/* Use Context Name */}
              {userDisplayName.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="text-center sm:text-left space-y-1">
          <CardTitle className="text-2xl font-bold">{userDisplayName}</CardTitle>
          <CardDescription className="text-base">{user.email}</CardDescription>
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-500 mt-2">
            {user.role || "User"}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-8">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <UserIcon className="w-4 h-4" /> Full Name
            </Label>
            
            {!isEditing && (
              <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)} className="text-primary h-8 px-2">
                <Edit2 className="w-3.5 h-3.5 mr-1.5" /> Edit
              </Button>
            )}
          </div>

          {isEditing ? (
            <div className="flex gap-2 animate-in fade-in zoom-in-95 duration-200">
              <Input
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="flex-1"
                autoFocus
              />
              <Button size="icon" onClick={handleSave} className="bg-emerald-500 hover:bg-emerald-600">
                <Check className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            // 3. Use Context Name
            <div className="p-3 bg-muted/30 rounded-md font-medium">
              {userDisplayName}
            </div>
          )}
        </div>
        
        {/* Email Field remains the same... */}
         <div className="space-y-3">
            <Label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email Address
            </Label>
            <div className="p-3 bg-muted/50 rounded-md border border-border/50 text-muted-foreground flex justify-between items-center cursor-not-allowed">
              <span>{user.email}</span>
              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">Read-only</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}