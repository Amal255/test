import { Component, OnInit } from '@angular/core';
interface FAQItem {
  title: string;
  answer: string;
  expanded: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent implements OnInit {

  faq: FAQItem[] = [
    {
      title: 'What is greywater?',
      answer: 'Greywater is wastewater from household activities that do not involve human waste. It typically comes from showers, baths, washing machines, and hand basins. Greywater is less contaminated than blackwater, which comes from toilets, kitchen sinks, and floor drains. Greywater can be reused for non-potable purposes, such as watering plants, flushing toilets, and washing clothes.',
      expanded: false
    },
    {
      title: 'What is the difference between Greywater and Blackwater?',
      answer: 'Greywater comes from showers, baths, washing machines, and hand basins, while blackwater comes from toilets, kitchen sinks, and floor drains. Greywater is less contaminated and can be reused for non-potable purposes, while blackwater cannot be reused.',
      expanded: false
    },
    {
      title: 'What certifications do the Dracoss Greywater Recycling Machine and 7-Layer Ceramic Water Purifier Filter have?',
      answer: 'The Dracoss Greywater Recycling Machine is currently undergoing NSF certification. The 7-Layer Ceramic Water Purifier Filter has CE approval.',
      expanded: false
    },
    {
      title: 'What are the benefits of having CE and NSF certification?',
      answer: 'CE and NSF certification ensure that the products meet safety and performance standards. CE certification is important for products sold in the European Union, while NSF certification is important for products used in food and beverage processing.',
      expanded: false
    },
    {
      title: 'What is NSF-350?',
      answer: 'NSF-350 is a standard that establishes requirements for the materials, design, construction, and performance of onsite residential and commercial water reuse treatment systems. It also sets water quality requirements for non-potable water use.',
      expanded: false
    },
    {
      title: 'Installation Guide',
      answer: 'Here is a basic installation guide for a water filtration system:<ol><li>Start by carefully reading the instruction manual provided with your filtration system.</li><li>Follow the recommended maintenance steps to keep your filtration system in good working condition.</li></ol>',
      expanded: false
    }
  ];

  faqCertif: FAQItem[] = [
     
    {
      title: 'What certifications do the Dracoss Greywater Recycling Machine and 7-Layer Ceramic Water Purifier Filter have?',
      answer: 'The Dracoss Greywater Recycling Machine is currently undergoing NSF certification. The 7-Layer Ceramic Water Purifier Filter has CE approval.',
      expanded: false
    },
    {
      title: 'What are the benefits of having CE and NSF certification?',
      answer: 'CE and NSF certification ensure that the products meet safety and performance standards. CE certification is important for products sold in the European Union, while NSF certification is important for products used in food and beverage processing.',
      expanded: false
    },
    {
      title: 'What is NSF-350?',
      answer: 'NSF-350 is a standard that establishes requirements for the materials, design, construction, and performance of onsite residential and commercial water reuse treatment systems. It also sets water quality requirements for non-potable water use.',
      expanded: false
    },
    {
      title: 'Installation Guide',
      answer: 'Here is a basic installation guide for a water filtration system:<ol><li>Start by carefully reading the instruction manual provided with your filtration system.</li><li>Follow the recommended maintenance steps to keep your filtration system in good working condition.</li></ol>',
      expanded: false
    }
  ];

  toggleAnswer(question: FAQItem, index : any): void {
    question.expanded = !question.expanded;
    console.log('dddd',index)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
