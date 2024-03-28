// Table.test.js

import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

// Mock data for testing
const mockNotes = [
  {
    NoteID: 1,
    isDeleted: false,
    createdAt: '2022-01-01',
    noteversions: [{ title: 'Note 1', updatedAt: '2022-01-01' }],
  },
  {
    NoteID: 2,
    isDeleted: false,
    createdAt: '2022-01-02',
    noteversions: [{ title: 'Note 2', updatedAt: '2022-01-02' }],
  },
];

describe('Table Component', () => {
  it('renders table with correct data', () => {
    // Mock fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockNotes),
      })
    );

    // Render the Table component
    const { getByText } = render(<Table />);

    // Check if table headers are rendered
    expect(getByText('ID')).toBeInTheDocument();
    expect(getByText('TITLE')).toBeInTheDocument();
    expect(getByText('CREATED AT')).toBeInTheDocument();
    expect(getByText('MODIFIED AT')).toBeInTheDocument();

    // Check if table data is rendered
    mockNotes.forEach(note => {
      expect(getByText(note.NoteID.toString())).toBeInTheDocument();
      expect(getByText(note.noteversions[0].title)).toBeInTheDocument();
      expect(getByText(note.createdAt)).toBeInTheDocument();
      expect(getByText(note.noteversions[0].updatedAt)).toBeInTheDocument();
    });
  });

  // Add more test cases as needed
});

