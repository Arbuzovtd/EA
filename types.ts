import React from 'react';

export enum Section {
  PROBLEMS = 'problems',
  SOLUTION = 'solution',
  VALUE = 'value',
  PLAN = 'plan',
  LEGAL = 'legal',
  RISKS = 'risks',
  REQUEST = 'request',
  ROLES = 'roles'
}

export interface NavItem {
  id: Section;
  label: string;
  icon: React.ComponentType<any>;
  group?: string;
}

export interface OkrData {
  id: number;
  objective: string;
  krs: string[];
  tag: string;
}

export interface BudgetItem {
  name: string;
  value: number;
  color: string;
}

export interface RoadmapPhase {
  quarter: string;
  name: string;
  focus: string;
  deliverables: string[];
  color: string;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
}

export interface Stakeholder {
  name: string;
  role: string;
  description: string;
  image: string;
}