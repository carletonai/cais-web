import React from "react";
import TeamDisplay from "@/components/TeamDisplay";




const TeamPage = () => {
    return (
        <div className="min-h-screen lg:px-14">
            <h1 className="text-4xl font-bold mb-6 pl-8">Our Team</h1>
            <p className="text-lg pl-8">Meet the dedicated members of CAIS&apos;s.</p>
            <TeamDisplay />

        </div>
    )
}


export default TeamPage;
