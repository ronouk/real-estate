import { useEffect, useState } from "react";

const Team = () => {

    const [teamData, setTeamData] = useState([]);

    useEffect(() => {
        fetch('/data-employee.json')
            .then(res => res.json())
            .then(data => setTeamData(data))
    })

    // console.log(teamData);


    return (

        <div data-aos="fade-up" data-aos-duration="4000">
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-center mb-12">Meet our Real Estate Team</h1>
                <div className="team-member-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {
                        teamData.slice(0, 6).map((member, index) =>
                            <div className="border border-yellow-500 p-4" key={index}>
                                <div className="mb-4">
                                    <img className="w-full h-72 object-cover" src={member.image} alt="" />
                                </div>
                                <div className="text-center">
                                    <h1 className="text-xl font-semibold">{member.name}</h1>
                                    <p className="">{member.position}</p>
                                </div>
                            </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Team;