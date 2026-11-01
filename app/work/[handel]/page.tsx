import { Suspense } from "react";
import { notFound } from "next/navigation";
import CaseStudy from "@/component/work/casestudy";
import { projectsData } from "@/data/project";
import Navbar from "@/component/navbar/navbar";
import ChatSection from "@/component/homepage/chat";
import Footer from "@/component/homepage/footer";

export function generateStaticParams() {
  return Object.keys(projectsData).map((handel) => ({ handel }));
}

type Props = {
  params: Promise<{ handel: string }>;
};

export default function ProjectPage({ params }: Props) {
  return (
    <main>
      <Suspense fallback={<div className="min-h-screen" />}>
        <ProjectContent params={params} />
      </Suspense>
    </main>
  );
}

async function ProjectContent({ params }: Props) {
  const { handel } = await params;
  const project = projectsData[handel as keyof typeof projectsData];

  if (!project) notFound();

  return (
    <>
    <Navbar/>
      <CaseStudy {...project} />
      <ChatSection/>
      <Footer/>
    </>
  );
  
  
}
