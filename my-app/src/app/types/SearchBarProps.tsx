export interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    handleSearch: () => void;
    placeholder: string;
  }