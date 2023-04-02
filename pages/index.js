import Head from "next/head";
import Image from "next/image";
import { FaFileAlt, FaGithub, FaLink, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <>
            <Head>
                <title>dpvb.dev</title>
                <meta
                    name="description"
                    content="Dylan van Bunnik's Development Website"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex justify-center items-center h-screen">
                <div className="animate-fly-in">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center text-sans">
                            <Image
                                src={"/me.jpg"}
                                alt="Picture of Dylan"
                                width={160}
                                height={160}
                                className="rounded-full overflow-hidden"
                            />
                            <div className="ml-2 sm:ml-8 text-4xl text-white">
                                <h1>Dylan</h1>
                                <h1 className="font-semibold">van Bunnik</h1>
                            </div>
                        </div>
                        <div className="flex justify-between text-white px-12">
                            <a
                                href="https://www.github.com/dpvb"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex flex-col gap-2 cursor-pointer">
                                    <FaGithub size={72} title="Github" />
                                    <p className="text-center">Github</p>
                                </div>
                            </a>
                            <a
                                href="/Dylan van Bunnik Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex flex-col gap-2 cursor-pointer">
                                    <FaFileAlt size={72} title="Github" />
                                    <p className="text-center">Resume</p>
                                </div>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dylan-van-bunnik/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex flex-col gap-2 cursor-pointer">
                                    <FaLinkedin size={72} title="Github" />
                                    <p className="text-center">LinkedIn</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
