import {defineCollection, z} from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        image: z.string(),
        title: z.string(),
        timeline: z.string(),
        pitch: z.string(),
        roles: z.array(z.string()),
        tools: z.array(z.string())
    })
})

export const collections = {
    projects: projectCollection,
};