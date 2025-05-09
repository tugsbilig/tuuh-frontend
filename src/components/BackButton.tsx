  import { useRouter } from 'next/router';
  import { ArrowLeftIcon } from '@heroicons/react/24/outline';// or whatever icon library you're using

  interface BackButtonProps {
    text?: string;
    targetPath?: string;
    className?: string;
    iconClassName?: string;
    textClassName?: string;
  }

  const BackButton = ({
    text = 'Буцах',
    targetPath = '/',
    className = 'flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-6',
    iconClassName = 'w-6 h-6 mr-2',
    textClassName = '',
  }: BackButtonProps) => {
    const router = useRouter();

    return (
      <button
        onClick={() => router.push(targetPath)}
        className={className}
      >
        <ArrowLeftIcon className={iconClassName} />
        {text && <span className={textClassName}>{text}</span>}
      </button>
    );
  };

  export default BackButton;