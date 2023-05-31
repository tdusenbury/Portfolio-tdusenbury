import React from "react";
import Sunflower from "../images/sunsetsunflower.png";

function About() {
    return (
        <div className="font-sans bg-yellow-50 flex flex-col  justify-center items-center">
            <h1 className="bigHeading">ALL ABOUT "T"</h1>
            <div className="bg-white rounded-lg p-8 mt-8 mx-auto md:mx-48 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="">
                    <img
                        className="object-cover bg-center h-96 w-full"
                        src={Sunflower}
                        alt="Sunflowers at Sunset"
                    />
                </div>

                <div className=" ml-8">
                    <p className="text-base text-gray-800">
                        I make stuff. <br />
                        That simplifies it really. <br />
                        I can take pieces of fabric or long lengths of wool and
                        make something completely different. <br />
                        I can make you a shirt or a blanket out of flannel.
                        <br />
                        I can make you a doll with a hand-embroidered face or a
                        pillow that only goes on "the good couch." <br />
                        If you are lucky, I will spend hours making a
                        one-of-a-kind quilt for your child. <br />
                        I don't have a great skill: I have extreme patience and
                        a desire to learn something new every single day.
                        <br />
                        I hope to take the skills from my passion and join them
                        with the skills of my previous careers and make
                        something entirely new. <br />
                        I believe that my experience can manifest into an
                        application in which the functions are intuitive and
                        effective.
                        <br />
                        Times may be tumultuous, but the world always surprises
                        you. <br />
                        This year I celebrated a milestone birthday I was told I
                        wouldn't see and will soon be watching my son accept his
                        Eagle rank and graduate from high school. <br />
                        It truly is the journey that matters.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
