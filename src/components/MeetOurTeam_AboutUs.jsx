import React from 'react';

const MeetOurTeam_AboutUs = () => {
    const teamMembers = [
        {
            name: 'JEFF CHRIS',
            role: 'CEO',
            image: '/img/team1.png'
        },
        {
            name: 'PETER',
            role: 'CEO',
            image: '/img/team2.png'
        },
        {
            name: 'JHON DOE',
            role: 'CEO',
            image: '/img/team3.png'
        },
        {
            name: 'PAULE',
            role: 'CEO',
            image: '/img/team4.png'
        }
    ];

    return (
        <div className="px-3 sm:px-8 md:px-14 lg:px-32 mt-12 lg:mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6 lg:mb-8">
                    <h1 className="text-xl sm:text-3xl md:text-3xl font-medium text-gray-900 mb-2 lg:mb-3">
                        Meet Our Team
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                        A diverse group of talented professionals working together to deliver<br className="hidden sm:block" />
                        exceptional results.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[1/0.8] lg:aspect-square">
                            {/* Team Member Image */}
                            <div className="absolute inset-0">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        e.target.src = `https://images.unsplash.com/photo-${1500000000000 + index}?w=400&h=600&fit=crop&crop=faces&auto=format&q=80`;
                                    }}
                                />
                            </div>
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80"></div>
                            
                            {/* Member Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <div className="bg-blue-600 rounded-lg px-4 py-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-center">
                                    <h3 className="text-white font-bold text-sm tracking-wide">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-100 text-xs font-medium mt-1">
                                        {member.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam_AboutUs;