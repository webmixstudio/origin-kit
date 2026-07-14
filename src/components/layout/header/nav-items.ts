export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const navItems: NavItem[] = [
  { label: 'Platform', href: '/#platform', description: 'Composable infrastructure' },
  { label: 'Architecture', href: '/#architecture', description: 'System design' },
  { label: 'Components', href: '/#components', description: 'Production UI blocks' },
  { label: 'Docs', href: '/#docs', description: 'Implementation guides' },
];
