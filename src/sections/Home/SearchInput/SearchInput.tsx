import './styles.scss';
import { CiSearch } from 'react-icons/ci';
export const SearchInput = () => {
  return (
    <div className="contain">
      <div className="flex items-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus-within:border-blue-500">
        <span className="inline-flex items-center mr-4">
          <CiSearch className="h-5 w-5 text-gray-500" />
        </span>
        <input type="text" placeholder="Buscar..." className="flex-1" />
      </div>
    </div>
  );
};
