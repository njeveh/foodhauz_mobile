/* eslint-disable import/no-cycle */
/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, StatusBar, Text } from 'react-native'
// import Button from 'components/Button'
import { colors } from 'theme'
import { Box, Flex, Image, VStack } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../theme'
import HomeCard from '../../components/HomeCard'
import HomeLinks from '../../data/HomeLinks'
import BottomNav from '../../components/BottomNav/index'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  title_desc: {
    color: 'white',
  },
  meals_txt: {
    color: `${colors.primary_color}`,
    fontWeight: 'bold',
  },
  history: {
    fontWeight: 'bold',
    color: `${colors.primary_color}`,
  },
  meals: {
    width: '80%',
  },
})

const Home = () => (
  <SafeAreaView style={styles.root}>
    <StatusBar barStyle="light-content" />
    <VStack h="100%" w="100%" bg="white">
      <VStack w="100%">
        <VStack
          bg={colors.background_color}
          w="100%"
          h="260"
          borderBottomLeftRadius="20px"
          borderBottomRightRadius="20px"
          alignSelf="baseline"
        >
          <Flex
            flexDir="row"
            bg={colors.primary_color}
            p="30px"
            h="130"
            alignItems="center"
            justifyContent="space-between"
            borderBottomLeftRadius="20px"
            borderBottomRightRadius="20px"
          >
            <Box>
              <Text style={styles.title}>Hi, Catherine</Text>
              <Text style={styles.title_desc}>
                What would you like to donate today?
              </Text>
            </Box>
            <Image source={images.profile_img} alt="donation image" />
          </Flex>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            flexDir="row"
            p="30px"
          >
            <Image source={images.stats} alt="donation image" />
            <Box ml="15px">
              <Text style={styles.meals}>
                You’ve provided <Text style={styles.meals_txt}>17 meals</Text>{' '}
                worth of food this year
              </Text>
              <Text style={styles.history}>View History</Text>
            </Box>
          </Flex>
        </VStack>
      </VStack>
      {HomeLinks.map((link, index) => (
        <HomeCard
          key={`link-${index}`}
          title={link.title}
          description={link.description}
        />
      ))}
      <BottomNav />
    </VStack>
  </SafeAreaView>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
