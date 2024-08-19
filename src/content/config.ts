import {defineCollection, z} from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        image: z.string(),
        title: z.string(),
        timeline: z.string(),
        pitch: z.string(),
        roles: z.array(z.string()),
        tools: z.array(z.string()),
        contextInquiry: z.object({
            title: z.string(),
            description: z.string(),
            steps: z.array(z.string())
        }),
        storyboard: z.object({
            title: z.string(),
            description: z.string(),
            image: z.string()
        }),
        design: z.object({
            title: z.string(),
            description: z.string(),
            image: z.string(),
            additionalImages: z.array(z.string()).optional()
        })
    })
})

export const collections = {
    projects: projectCollection,
};