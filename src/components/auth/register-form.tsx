"use client"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Eye, EyeClosedIcon } from "lucide-react"
import { toast } from "sonner"
import { useAuth } from "../context/auth-context"

const registerFormSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters long!'),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters")
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

type RegisterFormValues = z.infer<typeof registerFormSchema>

interface RegisterFormProps {
    onSuccess?: () => void;
}

function RegisterForm({ onSuccess }: RegisterFormProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false,
    });
    
    // Get register function
    const { register } = useAuth();

    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
    });

    const onRegisterSubmit = async (values: RegisterFormValues) => {
        setIsLoading(true)

        try {
            const res = await register(values.name, values.email, values.password);

            if (!res.success) {
                const errorMessage = Array.isArray(res.error) ? res.error[0] : res.error;
                toast.error(errorMessage || 'Failed to create account');
                return;
            }

            toast.success('Account created successfully! Please sign in.');

            // Switch Tab to Login
            if(onSuccess) {
                onSuccess();
            }
        } catch (error) {
            console.error(error)
            toast.error("Something went wrong");
        } finally{
            setIsLoading(false);
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onRegisterSubmit)} className="space-y-6">
                 
                 <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter your Full Name" />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                {/* ... (Keep existing fields) ... */}
                
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter your email" />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                
                 <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        className="pr-10"
                                        {...field}
                                        type={showPassword.password ? "text" : "password"}
                                        placeholder="Enter password"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() => setShowPassword(prev => ({...prev, password: !prev.password}))}
                                    >
                                        {showPassword.password ? <EyeClosedIcon className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <Input
                                        className="pr-10"
                                        {...field}
                                        type={showPassword.confirmPassword ? "text" : "password"}
                                        placeholder="Confirm password"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() => setShowPassword(prev => ({...prev, confirmPassword: !prev.confirmPassword}))}
                                    >
                                        {showPassword.confirmPassword ? <EyeClosedIcon className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Registering..." : "Create Account"}
                </Button>
            </form>
        </Form>
    )
}

export default RegisterForm