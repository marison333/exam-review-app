import { NavigationMenu, NavigationMenuList, NavigationMenuItem, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Link from 'next/link';

import { Instagram, Linkedin } from 'lucide-react';

export default function Navigation() {
    return (
        <NavigationMenu className='flex justify-between h-12 w-full max-w-none bg-white'>
            <NavigationMenuList className='items-start'>
                <NavigationMenuItem>
                    <Link className={navigationMenuTriggerStyle()} href='/' aria-label='Review App Brand logo'>
                        <h2 className='font-bold text-2xl p-1'>Review App</h2>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link className={navigationMenuTriggerStyle()} href='/' aria-label='Home navigation button'>
                        Home
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link className={navigationMenuTriggerStyle()} href='/review' aria-label='review form navigation button'>
                        Review
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className='items-end'>
                <NavigationMenuItem id='Instagram'>
                    <Link className={navigationMenuTriggerStyle()} href='#' aria-label='instagram' target='_blank'>
                        <Instagram />
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem id='Linkedin'>
                    <Link className={navigationMenuTriggerStyle()} href='#' aria-label='linkedin' target='_blank'>
                        <Linkedin />
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
