import React from 'react';
import { View, TextInput } from 'react-native'
import { theme } from '../styles';

interface SearchProps {
    placeholder: string;
    search: string;
    setSearch: (text: string) => void;
}

const SearchInput: React.FC<SearchProps> = ({search, setSearch, placeholder}) => {
    return (
        <View style={theme.searchCard}>
            <TextInput style={theme.searchInput}
            placeholder={placeholder}
            onChangeText={text => setSearch(text)}
            value={search}

            />
        </View>
    )
}

export default SearchInput;