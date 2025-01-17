import React from 'react';
    import { Box, Heading, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Text } from '@chakra-ui/react';

    const FAQSection = () => {
      const faqs = [
        {
          question: 'How often should I service my AC unit?',
          answer: 'It is generally recommended to service your AC unit at least once a year to ensure optimal performance and efficiency.',
        },
        {
          question: 'What are the signs that my AC needs repair?',
          answer: 'Signs that your AC needs repair include unusual noises, weak airflow, warm air blowing, and frequent cycling.',
        },
        {
          question: 'Do you offer emergency services?',
          answer: 'Yes, we offer 24/7 emergency HVAC services to address urgent issues promptly.',
        },
        {
          question: 'What areas do you serve?',
          answer: 'We serve the entire [Your Location/Region] area. Please check our service area map for more details.',
        },
        {
          question: 'Do you provide warranties on your services?',
          answer: 'Yes, we provide warranties on our services. Please contact us for specific warranty details.',
        },
      ];

      return (
        <Box p={8} bg="gray.50">
          <Heading as="h2" size="xl" mb={8} textAlign="center" color="#333333">
            Frequently Asked Questions
          </Heading>
          <Accordion allowMultiple>
            {faqs.map((faq, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" color="#333333">
                      {faq.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color="#333333">
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      );
    };

    export default FAQSection;
