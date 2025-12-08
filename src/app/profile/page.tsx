"use client";
import { ProfileCard } from "@/components/profile-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const router = useRouter();
    return (
        <>
            <header className="p-8 flex justify-between items-center sticky top-0 bg-white z-10 border-b border-border/50">
                <h1 className="md:text-3xl font-bold mb-8">My Profile Account</h1>
                <Button variant="secondary" onClick={() => router.push("/")} className="mb-6 cursor-pointer">Back To Home</Button>
            </header>
            <div className="p-6">
                <ProfileCard />
            </div>
        </>
    );
}