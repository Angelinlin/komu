/* eslint-disable react/no-unescaped-entities */

import React from 'react'

function FaQs() {

    const FaQs = [
        {
            title: 'What is Komu Arcade?',
            description: 'Komu Arcade is an exciting virtual reality game that blends the experience of a traditional arcade with cutting-edge technology. Immerse yourself in a virtual world full of fun and challenges as you compete for incredible prizes.'
        },
        {
            title: 'How do i play Komu Arcade?',
            description: 'To play Komu Arcade, you need to have a virtual reality headset and a compatible gaming console. Once you have the necessary equipment, you can download the game from the official website and start playing.'
        },
        {
            title: 'What are tickets and how do i earn them?',
            description: 'Tickets are the virtual currency used in Komu Arcade. You can earn tickets by playing games, completing challenges, and participating in special events. You can use your tickets to purchase virtual items and unlock new levels in the game.'
        },
        {
            title: 'What kind of rewards can i win?',
            description: 'You can obtain a variety of rewards, ranging from exclusive virtual items to physical products. Additionally, we have a selection of reward NFTs that grant you special tokens that can be exchanged for unique prizes.'
        },
        {
            title: 'How does blockchain integration work in Komu Arcade?',
            description: 'Komu Arcade utilizes blockchain technology to ensure the security and transparency of transactions within the game. Additionally, our blockchain integration enables the creation and management of reward NFTs, as well as the exchange of tokens among players.'
        },
        {
            title: 'What are tokens and how do I use them?',
            description: 'Tokens are digital assets that you can obtain within the game by acquiring reward NFTs or participating in special events. These tokens can be exchanged for additional rewards or used to unlock exclusive content.'
        },
    ]

    return (
        <div className='pb-12' id='FaQs'>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
                        {FaQs.map((faq, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    {faq.title}
                                </h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">
                                    {faq.description}
                                </p>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaQs