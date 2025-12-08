export  // Data for the plans
    const plans = [
        {
            title: "Free",
            description: "Have a go and test your superpowers",
            price: { monthly: 0, yearly: 0 },
            features: [
                "2 Users",
                "2 Files",
                "Public Share & Comments",
                "Chat Support",
                "New income apps",
            ],
            isPro: false,
            buttonText: "Signup for free",
        },
        {
            title: "Pro",
            description: "Experiment the power of infinite possibilities",
            // Example: Yearly price is cheaper ($8 * 12 = 96, but maybe you offer it for 80)
            price: { monthly: 8, yearly: 80 },
            saveBadge: "Save $50 a year",
            features: [
                "4 Users",
                "All apps",
                "Unlimited editable exports",
                "Folders and collaboration",
                "All incoming apps",
            ],
            isPro: true,
            buttonText: "Go to pro",
        },
        {
            title: "Business",
            description: "Unveil new superpowers and join the Design League",
            price: { monthly: 16, yearly: 160 },
            features: [
                "All the features of pro plan",
                "Account success Manager",
                "Single Sign-On (SSO)",
                "Co-conception program",
                "Collaboration-Soon",
            ],
            isPro: false,
            buttonText: "Go to Business",
        },
    ];