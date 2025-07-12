import type { TButton } from "../types/ui.type";

const buttonVariants: TButton = {
  primary: 'px-4 py-2 bg-purple-600 uppercase outline-none rounded-3xl text-md font-semibold text-white',
  ghost: 'border-none outline-none w-fit h-fit text-red-500 uppercase hover:underline',
}

export { buttonVariants };