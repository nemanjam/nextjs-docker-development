'use client';

import { ChangeEvent, FC } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { LayoutGrid, List, Search as SearchIcon } from 'lucide-react';
import { useDebouncedCallback } from 'use-debounce';

import { CONFIG } from '@/config/app';
import { Input } from '@/components/ui/input';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { QUERY_PARAMS } from '@/constants/url';

const { WAIT_DEBOUNCE_SEARCH_INPUT } = CONFIG;
const { QUERY, DISPLAY } = QUERY_PARAMS;

const Search: FC = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateParam = (name: string, value: string): void => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    updateParam(QUERY.NAME, value);
  };

  const debouncedHandleSearch = useDebouncedCallback(
    handleSearch,
    WAIT_DEBOUNCE_SEARCH_INPUT
  );

  const handleDisplay = (value: string): void => {
    updateParam(DISPLAY.NAME, value);
  };

  const initialQuery = searchParams.get(QUERY.NAME)?.toString();
  const initialDisplay =
    searchParams.get(DISPLAY.NAME)?.toString() ?? DISPLAY.DEFAULT_VALUE;

  return (
    <div className="flex items-center justify-between gap-7 mb-6">
      <div className="relative w-full">
        <Input
          onChange={debouncedHandleSearch}
          defaultValue={initialQuery}
          className="pl-10 h-12"
          placeholder="Search..."
          type="search"
        />
        <SearchIcon className=" absolute left-4 top-4 size-4 text-muted-foreground" />
      </div>

      <ToggleGroup
        type="single"
        defaultValue={initialDisplay}
        onValueChange={handleDisplay}
        className="border border-border rounded-lg p-1.5 gap-2"
      >
        <ToggleGroupItem
          value="grid"
          aria-label="Toggle grid"
          size="sm"
          className="px-4"
        >
          <LayoutGrid fill="currentColor" /> Grid
        </ToggleGroupItem>
        <ToggleGroupItem
          value="list"
          aria-label="Toggle list"
          size="sm"
          className="px-4"
        >
          <List /> List
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default Search;
