import { useRouter } from 'next/dist/client/router';
import Link, { LinkProps  } from 'next/link';
import { cloneElement, ReactElement } from 'react';

interface ActiveLink extends LinkProps {
  children: ReactElement;
  shouldMatchExactPath?: boolean;
}

export function ActiveLink({ children, shouldMatchExactPath = false, ...rest }: ActiveLink){
  let isActive = false;

  const { asPath } = useRouter();

  if( shouldMatchExactPath && ( asPath === rest.href || asPath === rest.as ) ) {
    isActive = true;
  }

  if( !shouldMatchExactPath && ( asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)) ) ){
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  );
}