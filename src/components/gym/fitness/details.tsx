import { faEnvelopeOpenText, faLocationDot, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function FitnessDetails() {

  const [expanded, setExpanded] = useState(false);

  const fullText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut tincidunt sem. Quisque nec augue eget lorem lobortis rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin varius velit nec justo bibendum, vitae interdum nisi cursus. Sed non odio volutpat, finibus velit sit amet, posuere magna. Phasellus a condimentum nibh. Aliquam ultrices velit ac convallis lacinia. Integer sed sapien mi. Cras pulvinar urna non posuere tempus. Nullam nec augue ut nisi scelerisque venenatis vel sit amet metus.";

  const shortText = fullText.slice(0, 200); // İlk 200 karakteri al

  const toggleExpanded = () => {
      setExpanded(!expanded);
  };


  return (
    <div className="pb-10 px-5">
      <div className="flex justify-center flex-wrap gap-20 ">
        <div className="max-w-[400px] w-full ">
          <h1 className="text-[45px] pb-5 font-medium">Fit works</h1>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} />
            <h1 className="text-[#555454]">Bakı, Sabunçu</h1>
            <div className="text-[#F8B84E]">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon className="text-[#B0B0B0]" icon={faStar} />
            </div>
            <p className="text-[#555454]">124 baxış</p>
          </div>
          <h1 className="font-medium text-[24px] pt-4 pb-1">Detallar</h1>
          <p className="text-[#555454]">
                {expanded ? fullText : shortText}
                {!expanded && (
                    <span
                        className="text-[#F8B84E] cursor-pointer"
                        onClick={toggleExpanded}
                    >
                        <span className="text-[#555454]"> ... </span>
                        Daha Çox
                    </span>
                )}
            </p>
        </div>
        <div className="max-w-[250px] w-full pt-4">
          <h1 className="text-[25px]">Biz nə təklif edirik</h1>
          <div className="grid grid-cols-2 place-items-center pr-20 pt-3 flex-wrap gap-5 text-[#555454]">
            <div>
              crossfit
            </div>
            <div>
              crossfit
            </div>
            <div>
              crossfit
            </div>
            <div>
              crossfit
            </div>
          </div>
        </div>

        <div className="max-w-[250px] w-full pt-4">
          <h1 className="text-[25px] pb-3">Əlaqə</h1>
          <div className="flex items-center gap-4 pb-3">
            <FontAwesomeIcon className="text-[40px] text-[#42A1FA]" icon={faEnvelopeOpenText} />
            <div>
              <h1 className="text-[20px]">Email</h1>
              <p className="text-[#555454]">info@AllServ.az</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
          <FontAwesomeIcon className="text-[40px] text-[#42A1FA]" icon={faPhone} />
            <div>
              <h1 className="text-[20px]">tel</h1>
              <p className="text-[#555454]">050-500-50-50</p>
            </div>
          </div>
          <div className="pt-7">
            <button className="bg-[#42A1FA] rounded-[30px] border border-transparent px-7 py-3 text-white hover:bg-white hover:text-[#333] hover:border-black transition-all">Rezerv et</button>
          </div>
        </div>
      </div>
    </div>
  )
}
