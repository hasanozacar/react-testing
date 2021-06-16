import React from 'react';

export interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

export const SearchAsync: React.FC<SearchProps> = ({
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

export const SearchingScreenAsync: React.FC = () => {
  const [user, setUser] =
    React.useState<{ id: string; name: string } | null>(null);
  const [search, setSearch] = React.useState('');

  const getUser = () => {
    return Promise.resolve({ id: '1', name: 'Robin' });
  };

  React.useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      {user ? <p>Signed in as {user.name}</p> : <p>NOT-USER</p>}
      <SearchAsync value={search} onChange={handleChange}>
        Search:
      </SearchAsync>

      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
};
