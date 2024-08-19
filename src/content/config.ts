import {defineCollection, z} from "astro:content";

const projectCollection = defineCollection({
    schema: ({image}) => z.object({
        image: image(),
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
            image: image()
        }),
        design: z.object({
            title: z.string(),
            description: z.string(),
            image: image(),
            additionalImages: z.array(image()).optional()
        }),
        research: z.object({
            title: z.string(),
            description: z.string(),
            steps: z.array(
                z.object({
                  quote: z.string(),
                  designChange: z.string(),
                  images: z.array(image()).optional()
                })
              )
        }),
    })
})

export const collections = {
    projects: projectCollection,
};