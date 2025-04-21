import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import Link from 'next/link';

import { Instagram, Linkedin } from 'lucide-react';

export default function Navigation() {
    return (
        <NavigationMenu className='flex justify-between h-12 w-full max-w-none bg-white'>
            <NavigationMenuList className='items-start'>
                <NavigationMenuItem>
                    <Link href='/' aria-label='Review App Brand logo'>
                        <h2 className='font-bold text-2xl p-1'>Review App</h2>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='/' aria-label='Home navigation button' legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href='/review' aria-label='review form navigation button' legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Form</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className='items-end'>
                <NavigationMenuItem id='Instagram'>
                    <Link href='#' target='_blank' legacyBehavior passHref>
                        <NavigationMenuLink aria-label='Instagram' className={navigationMenuTriggerStyle()}>
                            <Instagram />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem id='Linkedin'>
                    <Link href='#' target='_blank' legacyBehavior passHref>
                        <NavigationMenuLink aria-label='Linkedin' className={navigationMenuTriggerStyle()}>
                            <Linkedin />
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}
