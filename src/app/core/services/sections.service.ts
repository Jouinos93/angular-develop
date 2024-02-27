// import { Injectable } from '@angular/core';
// import { question_section, sections } from './data';
// import { Section } from '../models/section';

// @Injectable({
//     providedIn: 'root',
// })
// export class SectionService {
//     temp_sections = [...sections];
//     temp_question_section = [...question_section];

//     constructor() {}

//     createSection(section: Section) {}
//     updateSection(section: Section) {}
//     deleteSection(section: Section) {}

//     affecterQuestion(question_id, section_id) {}

  




    
//     getSections(): Section[] {
//         return this.temp_sections;
//     }
// }




import { Injectable } from '@angular/core';
import { sections } from './data';
import { Section } from '../models/section';

@Injectable({
    providedIn: 'root',
})
export class SectionService {
    temp_sections = [...sections];

    constructor() {}

    createSection(section: Section): void {
        let id = Math.floor(Math.random() * 1000) + 1;
        const newSection: Section = { id, ...section };
        this.temp_sections.push(newSection);
    }

    updateSection(updatedSection: Section): void {
        const index = this.temp_sections.findIndex(section => section.id === updatedSection.id);
        if (index !== -1) {
            this.temp_sections[index] = { ...updatedSection };
        }
    }

    deleteSection(sectionId: number): void {
        this.temp_sections = this.temp_sections.filter(section => section.id !== sectionId);
    }

    affectQuestion(questionId: number, sectionId: number): void {
        // Logic to affect a question to a section
    }

    getSections(): Section[] {
        return this.temp_sections;
    }
}
