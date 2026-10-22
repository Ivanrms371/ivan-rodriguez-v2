
import React from 'react';

export interface Project {
    title: string;
    description: string;
    image: string;
    technologies: Technology[]
    codeLink?: string;
    codeLinks?: { label: string; url: string }[];
    previewLink?: string;
}

export interface Technology {
    name: string;
    color: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element
}
