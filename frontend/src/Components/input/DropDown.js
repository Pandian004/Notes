import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { MdOutlineLogout } from "react-icons/md";

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center rounded-full bg-white px-1 py-1 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-slate-100">
        <p className='text-lg px-2.5 py-0.5 rounded-full bg-slate-100 cursor-default'>D</p>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <p
              className="block px-4 py-2 text-sm text-gray-70 cursor-default"
            >
                Dharma Sundhara Pandian
            </p>
          </MenuItem>
          <MenuItem>
            <p
              className="flex items-center px-4 py-2 text-sm data-[focus]:bg-gray-100 text-gray-900 data-[focus]:outline-none cursor-pointer"
            >
              <MdOutlineLogout />  Logout
            </p>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  )
}
