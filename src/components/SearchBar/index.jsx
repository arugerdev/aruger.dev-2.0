/* eslint-disable react/prop-types */
import { Input, Button } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react"

export const SearchBar = ({ search }) => {

  return (
    <section className="flex flex-row cursor-none hoverable w-full max-h-[56px] gap-4">

      <Input
        onChange={(e) => search(e.target.value)}
        cursor='none'
        label="Search"
        isClearable
        radius="lg"
        className="cursor-none hoverable inputWithoutCursor"
        style={{ cursor: 'none' }}
        classNames={{
          base: [
            "cursor-none",
            "hoverable"
          ]
          ,
          label: [
            "text-black/50 dark:text-white/90",
            "cursor-none",
            "hoverable",
          ],
          input: [
            "cursor-none",
            "hoverable",
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: [
            "bg-transparent",
            "cursor-none",
            "hoverable",
          ],
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "cursor-none",
            "hoverable"
          ],
        }
        }
        placeholder="Type to search..."
        startContent={
          < IconSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 cursor-none hoverable" />
        }
      />
      <Button
        className="w-fit h-full font-bold text-base cursor-none hoverable bg-[#A5A1FF] text-[black]"
        href='/'
        isBlock
        color="#A5A1FF"
        showAnchorIcon
        variant="shadow"
      >
        Search
        < IconSearch
          className="text-white/50 dark:text-black/90 text-slate-400 pointer-events-none flex-shrink-0 cursor-none hoverable"
        />
      </Button>
    </section>
  )
}