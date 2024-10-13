'use client';
import {
  Work,
  WorkCompany,
  WorkContent,
  WorkDate,
  WorkTitle,
} from '@/components/home/Work';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

interface Experience {
  startYear: number;
  endYear?: number;
  jobTitle: string;
  company: {
    name: string;
    link: string;
  };
}

const ExperiencesCard = () => {
  const intl = useIntl();
  const experiences: Experience[] = [
    {
      startYear: 2024,
      jobTitle: intl.formatMessage({
        defaultMessage: 'Fullstack Developer',
      }),
      company: {
        name: '@Foodles',
        link: 'https://www.foodles.co/',
      },
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">
          <FormattedMessage defaultMessage="Experiences" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        {experiences.map((experience, index) => (
          <Work key={index}>
            <WorkDate>
              {experience.startYear} -{' '}
              {experience.endYear ?? <FormattedMessage defaultMessage="Now" />}
            </WorkDate>
            <WorkContent>
              <WorkTitle>{experience.jobTitle}</WorkTitle>
              <WorkCompany link={experience.company.link}>
                {experience.company.name}
              </WorkCompany>
            </WorkContent>
          </Work>
        ))}
      </CardContent>
    </Card>
  );
};

export default ExperiencesCard;
