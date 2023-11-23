import Modal from '@/components/organisms/Modal/Modal';
import React, { FC, useState } from 'react';
import styles from './styles.module.scss';
import Checkbox from '@/components/molecules/Checkbox/Checkbox';
import Button from '@/components/atoms/button/Button';

const ModalTemplate: FC<{
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}> = ({ children, isOpen, onClose }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const handleOpenModal = () => {
  //   setIsOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsOpen(false);
  // };
  const [checkItems, setCheckItems] = useState([
    { label: 'architecture', check: false },
    { label: 'Education', check: false },
    { label: 'Chemistry / fuels / fluids', check: true },
    { label: 'Services', check: false },
    { label: 'Services Human Concentric', check: false },
    { label: 'Services related', check: false },

    { label: 'Printing / Paper / Packaging', check: false },
    { label: 'retail trade', check: false },
    {
      label:
        'Electrical / communication / IT / installation / air conditioning',
      check: true,
    },
    { label: 'Vehicles of all kinds including services', check: false },
    { label: 'Financing / Insurance / Advice', check: false },
    { label: 'Research & Development', check: false },

    {
      label: 'Leisure / Tourism / Sport / Lifestyle / Music / Culture',
      check: false,
    },
    { label: 'Gardening / landscaping / forestry / plants', check: false },
    { label: 'Hospitality / Gastronomy / Food / Luxury Foods', check: false },
    { label: 'Health/Medicine/Care/Rehab', check: false },
    { label: 'Wholesale', check: false },
    { label: 'Freight transport / transport / logistics', check: false },
    { label: 'Commercial representation', check: false },
    {
      label: `Building construction / civil engineering / construction trade /
    construction machinery`,
      check: false,
    },
    { label: 'Real estate/building management', check: false },
    { label: 'Infrastructure / supply / energy / disposal', check: false },
    { label: 'Cosmetics / Personal Care / Wellbeing', check: false },
    {
      label:
        'Arts / Entertainment / Creative / Interior Design / Interior Design',
      check: false,
    },
    { label: 'Marketing / market research / advertising', check: false },
    { label: 'Metal construction', check: false },
    { label: 'Fashion / Textile / Accessories / Leather', check: false },
    { label: 'Passenger transport (land/air/water)', check: false },
    { label: 'production', check: false },
    { label: 'shipping', check: false },
    {
      label: 'Social / new / smart / online media / video / photo',
      check: false,
    },
    { label: 'Play equipment / all about children', check: false },
    {
      label: 'Animal supplies / animal breeding / feed / fishing',
      check: false,
    },
    { label: 'Software development', check: false },
    { label: 'Plastics technology', check: false },
    { label: 'Mechanical engineering', check: false },
  ]);
  const handleCheckboxChange = (index: number) => {
    setCheckItems((prevCheckItems) => {
      const updatedItems = [...prevCheckItems];
      updatedItems[index] = {
        ...updatedItems[index],
        check: !updatedItems[index].check,
      };
      return updatedItems;
    });
  };
  return (
    <div>
      {/* <button className={styles.modal_template} onClick={handleOpenModal}>
        Open Modal
      </button> */}
      <Modal title={''} isOpen={isOpen} onClose={onClose}>
        <div className='h-[200%] gap-[5px] '>
          {checkItems.map((item, index) => (
            <>
              <Checkbox
                checked={item.check}
                label={item.label}
                onChange={() => handleCheckboxChange(index)}
              />
            </>
          ))}
        </div>
        <div className='pt-[26px]'>
          <Button variant='primary' width={'100%'}>
            Show companies
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalTemplate;
