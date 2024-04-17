// 1. Import the 'useState' and 'useEffect' hooks from React
import { useState, useEffect } from 'react';

// 2. Define the 'SearchResult' interface with properties for 'favicon', 'link', and 'title'
export interface SearchResult {
    favicon: string;
    link: string;
    title: string;
}


import { AvatarImage, Avatar, AvatarFallback } from '@/components/ui/avatar'
import { CardContent, Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Newspaper } from 'lucide-react'
  
// 3. Define the 'SearchResultsComponentProps' interface with a 'searchResults' property of type 'SearchResult[]'
export interface SearchResultsComponentProps {
    searchResults: SearchResult[];
}

// 4. Define the 'SearchResultsComponent' functional component that takes 'searchResults' as a prop
const SearchResultsComponent = ({ searchResults }: { searchResults: SearchResult[] }) => {
    // 5. Use the 'useState' hook to manage the 'isExpanded' and 'loadedFavicons' state
    const [isExpanded, setIsExpanded] = useState(false);
    const [loadedFavicons, setLoadedFavicons] = useState<boolean[]>([]);
    
    const [showAllResults, setShowAllResults] = useState(false)

    const handleViewMore: any = () => {
        setShowAllResults(!showAllResults) // Toggle the state
    }
    
    const displayedResults = showAllResults ? searchResults : searchResults.slice(0, 3)
    const additionalResultsCount = searchResults.length > 3 ? searchResults.length - 3 : 0
    
    
    // 6. Use the 'useEffect' hook to initialize the 'loadedFavicons' state based on the 'searchResults' length

    
    // 7. Define the 'toggleExpansion' function to toggle the 'isExpanded' state

    // 8. Define the 'visibleResults' variable to hold the search results to be displayed based on the 'isExpanded' state
    //const visibleResults = isExpanded ? searchResults : searchResults.slice(0, 3);

    // 9. Define the 'handleFaviconLoad' function to update the 'loadedFavicons' state when a favicon is loaded


    // 10. Define the 'SearchResultsSkeleton' component to render a loading skeleton
    const SearchResultsSkeleton = () => (
        <>
            {Array.from({ length: isExpanded ? searchResults.length : 3 }).map((_, index) => (
                <div key={index} className="p-2 w-full sm:w-1/2 md:w-1/4">
                    <div className="flex items-center space-x-2 dark:bg-slate-700 bg-gray-100 p-3 rounded-lg h-full">
                        <div className="w-5 h-5 dark:bg-slate-600 bg-gray-400 rounded animate-pulse"></div>
                        <div className="w-full h-4 dark:bg-slate-600 bg-gray-400 rounded animate-pulse"></div>
                    </div>
                </div>
            ))}
        </>
    );
    
    // 11. Render the 'SearchResultsComponent'
    return (
        <div className="dark:bg-stone-950 bg-white shadow-lg rounded-lg p-4 mt-4">
            <div className="flex items-center">
                <h2 className="flex items-center text-lg leading-none py-2">{<Newspaper size={18} className="mr-2" />} </h2>
                <h2 className="text-lg font-semibold flex-grow dark:text-white text-black">Sources</h2>
                <img src="./google.png" alt="google logo" className="w-6 h-6" />
            </div>
            <div className="flex flex-wrap my-2">
                {searchResults.length === 0 ? (
                    // 12. Render the 'SearchResultsSkeleton' if there are no search results
                    <SearchResultsSkeleton />
                ) : (
                    // 13. Render the search results with favicon, title, and link
                    displayedResults.map((result: any, index: any) => (
                        <div className="w-1/2 md:w-1/4 p-1" key={index}>
                          <Link href={result.link} passHref target="_blank">
                            <Card className="flex-1">
                              <CardContent className="p-2">
                                <p className="text-xs line-clamp-2">{result.snippet}</p>
                                <div className="mt-2 flex items-center space-x-2">
                                  <Avatar className="h-4 w-4">
                                    <AvatarImage
                                      src={`https://www.google.com/s2/favicons?domain=${
                                        new URL(result.link).hostname
                                      }`}
                                      alt={result.author}
                                    />
                                    <AvatarFallback>
                                      {new URL(result.link).hostname[0]}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div className="text-xs opacity-60 truncate">
                                    {new URL(result.link).hostname}
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </Link>
                        </div>
                      ))
                )}
                {/* 14. Render a button to toggle the expansion of search results */}
                
                {(searchResults.length > displayedResults.length || showAllResults) && (
                <div className="w-1/2 md:w-1/4 p-1">
                <Card className="flex-1 flex h-full items-center justify-center rounded-full">
                    <CardContent className="p-2">
                    <Button variant={'link'} className="text-muted-foreground" onClick={handleViewMore}>
                        {/* Conditionally render button text */}
                        {showAllResults ? 'Show Less' : `Show ${additionalResultsCount} more`}
                    </Button>
                    </CardContent>
                </Card>
                </div>
                )}
            
            </div>
        </div>
    )
};

export default SearchResultsComponent;