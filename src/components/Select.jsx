import React, { useState, useEffect } from 'react';
import { Box } from '@mui/joy';
import Header from './Header';
import SelectCat from './SelectCat';
import SelectHeight from './SelectHeight';
import SelectRad from './SelectRad';
import SelectBranch from './SelectBranch';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Footer from './Footer';
import SelectBtn from './SelectBtn';
import { cardData } from '../constans/catalog';
import ModalItem from './ModalItem';
import CardItem from './CardItem';

export default function Catalog() {
  const [selectedValues, setSelectedValues] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [category, setCategoty] = useState('');
  const [branch, setBranch] = useState('');
  const [height, setHeight] = useState('');
  const [radius, setRadius] = useState('');
  const [data, setData] = useState([]);
  const [initialData, setInitialData] = useState([]);
  const [cardsToRender, setCardsToRender] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      const requestURL = 'http://localhost:3000/cat';
      try {
        const response = await fetch(requestURL);
        const jsonData = await response.json();
        setData(jsonData);
        setInitialData(jsonData);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangeRadius = (event) => {
    setRadius(event.target.value);
    handleRadChange(event);
  };

  const handleHeigthCahnge = (event) => {
    setHeight(event.target.value);
    handleHeightChange(event);
  };

  const handleChangeBranch = (event) => {
    setBranch(event.target.value);
    handleBranchChange(event);
  };

  const handleOpenModal = (index) => {
    setSelectedCardIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCardIndex(null);
    setIsModalOpen(false);
  };

  const searchButton = () => {
    const filterValues = selectedValues;
    const filteredData = initialData.filter((obj) => {
      if (
        filterValues.branch &&
        filterValues.branch.length > 0 &&
        !filterValues.branch.includes(obj.branch)
      ) {
        return false;
      }

      if (
        filterValues.cat &&
        filterValues.cat.length > 0 &&
        !filterValues.cat.includes(obj.type)
      ) {
        return false;
      }

      const priceObj = obj.prices.find((price) => {
        return (
          filterValues.height &&
          price.height >= filterValues.height.min &&
          price.height <= filterValues.height.max
        );
      });

      const dimensionObj =
        obj.dimensions &&
        obj.dimensions.find((dimension) => {
          return (
            filterValues.radius &&
            dimension.radius >= filterValues.radius.min &&
            dimension.radius <= filterValues.radius.max
          );
        });

      if (
        filterValues.radius &&
        (!dimensionObj ||
          (filterValues.radius.min &&
            dimensionObj.radius < filterValues.radius.min) ||
          (filterValues.radius.max &&
            dimensionObj.radius > filterValues.radius.max))
      ) {
        return false;
      }

      if (
        filterValues.height &&
        !obj.prices.some((price) => {
          return (
            price.height >= filterValues.height.min &&
            price.height <= filterValues.height.max
          );
        })
      ) {
        return false;
      }

      if (
        filterValues.radius &&
        !obj.dimensions.some((dimension) => {
          return (
            dimension.radius >= filterValues.radius.min &&
            dimension.radius <= filterValues.radius.max
          );
        })
      ) {
        return false;
      }

      return true;
    });

    setData(filteredData);
  };

  const handleAddToCart = (card, price, selectedDimensions) => {
    const { imageSrc, title, branch } = card;
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const newItem = {
      imageSrc: imageSrc[0].image,
      title,
      height: selectedDimensions.height,
      price: price,
      radius: selectedDimensions.diameter,
      branch,
    };

    cartItems.push(newItem);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setCardsToRender((prev) => prev + 10);
    }
  };

  const handleReset = () => {
    setCategoty('');
    setBranch('');
    setHeight('');
    setRadius('');
    setSelectedValues({});
    setData(initialData);
  };

  const handleChangeCat = (event) => {
    setCategoty(event.target.value);
    handleCatChange(event);
  };

  const handleCatChange = (event) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      cat: event.target.value,
    }));
  };

  const handleHeightChange = (event) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      height: event.target.value,
    }));
  };

  const handleRadChange = (event) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      radius: event.target.value,
    }));
  };

  const handleBranchChange = (event) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      branch: event.target.value,
    }));
  };

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      marginBottom={'30px'}
    >
      <Header />
      <Box
        display={'flex'}
        flexDirection={'row'}
        marginTop={'100px'}
        gap={'30px'}
        alignItems={'center'}
        flexWrap={'wrap'}
        
      >
        <SelectCat
          handleCatChange={handleCatChange}
          category={category}
          changeCategory={handleChangeCat}
        />
        <SelectHeight
          handleHeightChange={handleHeightChange}
          height={height}
          changeHeight={handleHeigthCahnge}
        />
        <SelectRad
          handleRadChange={handleRadChange}
          changeRad={handleChangeRadius}
          radius={radius}
        />
        <SelectBranch
          handleBranchChange={handleBranchChange}
          branch={branch}
          changeBranch={handleChangeBranch}
        />
        <SelectBtn onReset={handleReset} onSearch={searchButton} />
      </Box>
      <Box
      onScroll={handleScroll}
      sx={{ overflowY: 'scroll', height: '100%' }}
        display={'flex'}
        flexWrap={'wrap'}
        gap={'30px'}
        justifyContent={'center'}
        marginTop={'30px'}
      >
        {data.map((data, index) => (
          <Card key={index} sx={{ width: 250 }}>
            <div>
              <Typography
                
                onClick={() => handleOpenModal(index)}
                level='h3'
                sx={{fontFamily: 'Montserrat', cursor: 'pointer'}}
              >
                {data.title}
              </Typography>
            </div>
            <AspectRatio minHeight='320px' maxHeight='200px'>
              <ModalItem images={data.imageSrc.map((image) => image.image)} />
            </AspectRatio>
            <CardContent orientation='horizontal'>
              <div>
                <Typography level='body-x'>От:</Typography>
                <Typography fontSize='lg' fontWeight='lg'>
                  {Math.min(...data.prices.map((price) => price.price))} ₽
                </Typography>
              </div>
              <Button
                variant='solid'
                size='lg'
                color='primary'
                aria-label={`Explore ${data.title}`}
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                onClick={() => handleOpenModal(index)}
              >
                Размеры
              </Button>
            </CardContent>
          </Card>
        ))}
        {selectedCardIndex !== null && (
          <CardItem
            data={data[selectedCardIndex]}
            isOpen={handleOpenModal}
            onClose={handleCloseModal}
            addBasket={handleAddToCart}
          />
        )}
      </Box>

      <Footer />
    </Box>
  );
}
