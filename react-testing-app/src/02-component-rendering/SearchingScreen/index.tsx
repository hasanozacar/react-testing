import React from 'react';

export interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  children,
}) => {
  return (
    <div>
      <label htmlFor='search'>{children}</label>
      <input id='search' type='text' value={value} onChange={onChange} />
    </div>
  );
};

export const SearchingScreen: React.FC = () => {
  const [search, setSearch] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
};
