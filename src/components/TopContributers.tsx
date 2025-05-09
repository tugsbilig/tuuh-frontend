import { CrownIcon, TrophyIcon, MedalIcon } from '@/components/Icons'; 

interface Contributor {
  id: string;
  name: string;
  avatar: string;
  contributions: number;
  rank: number;
}

interface TopContributorsProps {
  contributors: Contributor[];
}

export function TopContributors({ contributors }: TopContributorsProps) {

  const sortedContributors = [...contributors]
    .sort((a, b) => b.contributions - a.contributions)
    .map((contributor, index) => ({
      ...contributor,
      rank: index + 1,
    }))
    .slice(0, 10); // Top 10 contributors

  return (
    <div className="bg-[#0a1a2f] rounded-xl shadow-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center justify-center gap-2">
        <TrophyIcon className="w-8 h-8" />
        <span>Top Historical Contributors</span>
        <TrophyIcon className="w-8 h-8" />
      </h2>
      
      <div className="space-y-4">
        {sortedContributors.map((contributor) => (
          <div 
            key={contributor.id}
            className={`flex items-center p-4 rounded-lg transition-all hover:scale-[1.01] hover:shadow-md ${
              contributor.rank === 1 
                ? 'bg-gradient-to-r from-yellow-600/20 to-yellow-800/30 border-2 border-yellow-400'
                : 'bg-blue-1500/20 border border-blue-900'
            }`}
          >
            {/* Rank Badge */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center mr-4 ${
              contributor.rank === 1 
                ? 'bg-yellow-400 text-[#0a1a2f]' 
                : contributor.rank === 2 
                  ? 'bg-gray-300 text-[#0a1a2f]' 
                  : contributor.rank === 3 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-blue-700 text-white'
            }`}>
              {contributor.rank === 1 ? (
                <CrownIcon className="w-5 h-5" />
              ) : (
                <span className="font-bold">{contributor.rank}</span>
              )}
            </div>
            
            {/* Avatar */}
            <div className="flex-shrink-0 mr-4">
              <img 
                src={contributor.avatar} 
                alt={contributor.name} 
                className="w-12 h-12 rounded-full border-2 border-yellow-400 object-cover"
              />
            </div>
            
            {/* Contributor Info */}
            <div className="flex-grow">
              <h3 className="font-semibold text-white">{contributor.name}</h3>
              <p className="text-blue-200">
                 {contributor.contributions} түүхэн үйл явдал нэмсэн байна.{contributor.contributions !== 1 ? '' : ''}
              </p>
            </div>
            
            {/* Award Icon for top 3 */}
            {contributor.rank <= 3 && (
              <div className="ml-4 text-yellow-400">
                <MedalIcon className="w-8 h-8" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center text-blue-300 text-sm">
        Идэвхтэй хэрэглэгч байгаад баярлалаа.
      </div>
    </div>
  );
}