import { Disclosure} from '@headlessui/react'
import logo from '../components/assets/Logo/1.png'

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Profil', href: '#' },
  { name: 'Berita', href: '/berita' },
  { name: 'WBK', href: '#' },
  { name: 'Road Map', href: '#' },
  { name: 'Timeline', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <div className="relative">
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 bg-blue-900 w-full navbar">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-between">
            <div className="flex shrink-0 items-center">
              <img
                src={logo}
                className="h-12 w-auto"
                alt="Logo"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-12 ml-auto">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-white hover:text-cyan-500',
                      'rounded-md px-3 py-2 text-md font-normal',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
    </div>
  )
}