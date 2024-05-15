import { cn } from '@/lib/cn';

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={cn('flex-center gap-3 rounded-full border', props.className)}
    >
      {props.children}
    </button>
  );
}
