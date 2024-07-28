import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import React from 'react'

export default function ChatList() {
  const contacts= [
    {
      uid: 1,
      name: 'Haseeb',
      status: 'tring to focus',
      imageUrl: 'https://scontent.flhe4-1.fna.fbcdn.net/v/t39.30808-6/321245629_828096041607934_2929299733033071376_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeG352FQ49hoZfBMkKDZD4sRDAm6HauaHo0MCbodq5oejSI3biYAsRcWpui0KlVWj-vnKS8OO40NaGRkioBzxbDd&_nc_ohc=taCUG7vxz_kQ7kNvgH78Ot6&_nc_zt=23&_nc_ht=scontent.flhe4-1.fna&oh=00_AYBUpON6E8TE-x3-MJKi-XrieEefx9KPf4mDvuvJj0YTYw&oe=66A9E6CA'
    },
    {
      uid: 2,
      name: 'Talha',
      status: 'Becoming a great software engineer',
      imageUrl: 'https://avatars.githubusercontent.com/u/94040679?v=4'
    },
    {
      uid: 3,
            name: 'Usama',
            status: 'Owns ChickenForEveryone',
            imageUrl: 'https://scontent.flhe4-1.fna.fbcdn.net/v/t1.6435-9/95282033_1497002267130756_6207432807464042496_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHkaGaiPf60J6pPvcKDzIB_MXvt8-BS9WMxe-3z4FL1Y_ygOB8PQGgjIqcHK3k7Twanxfu3pbLNGd77SMgOYxow&_nc_ohc=STsUTXg1Dd8Q7kNvgGiepfw&_nc_ht=scontent.flhe4-1.fna&oh=00_AYDdaJL-xJjhorFzb7akn58MDDurVvZu15dLWNy6cUYcEA&oe=66CB8569'
    },
    {
      uid:4,
            name: 'Junaid',
            status: 'Building a construction company',
            imageUrl: 'https://scontent.flhe4-1.fna.fbcdn.net/v/t39.30808-6/265513069_4584118358345409_5806812561347722161_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeELemPuFjyl4Mwe_U4UlD01lBhtRqS_MjWUGG1GpL8yNXUYS16hG0P3gfwGaAJpzssSB4esU-fsISaG23Vp0MUy&_nc_ohc=KZqoJM9KUJMQ7kNvgFJGdPM&_nc_zt=23&_nc_ht=scontent.flhe4-1.fna&oh=00_AYCcGgyMXaqghq1HqdGNe61mk_hTemY059SGFar_QPkiUQ&oe=66A9B82F'

    },
    {
      uid: 5,
      name: 'Farooq',
      status: 'Army person',
      imageUrl: 'https://scontent.flhe3-2.fna.fbcdn.net/v/t39.30808-1/326749797_645461837579230_996652798237937677_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeE_lmeTKBh1MnZe0YK6vaD9p92jKl6_6qGn3aMqXr_qoRi7E4LeADXoi_dMqnqcR7p-nJ6s3SG88N97fd5rdNjK&_nc_ohc=fTIb-E179PQQ7kNvgHQUedR&_nc_ht=scontent.flhe3-2.fna&oh=00_AYCNkcm56m7kmrV5ttxQ8EIhdAu1jTwGUaJlUWfQob7gmg&oe=66AC080F'
    },
    {
      uid: 6,
      name: 'Zuraiz',
      imageUrl: 'https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-1/175940659_1424329514586811_5616063352471231859_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=db5862&_nc_eui2=AeEQv0bvp6BLLLXajOiS5H3U92Rq9A8bc4j3ZGr0DxtziBVuXGeRqpp5QXn6ZQdMvzjBiVPTK5tdgmLEO3r2pZVr&_nc_ohc=Mgje9RWmspUQ7kNvgFcm0xH&_nc_ht=scontent.flhe3-2.fna&oh=00_AYBYVVVU-rXn2-KrVqt2aozlIDcfPbxw9fVhW4MD4AkmoA&oe=66CDAA1A'
    },
  ]
  return (
    <View>
        <View style={styles.headerContainer}>
          <Text style={styles.headertext}>WhatsaApp</Text>
        </View>
        <View style={styles.searchBar}></View>
        <ScrollView
        style={styles.container}
        scrollEnabled={false}
        >{contacts.map(({uid,name,status,imageUrl})=>(
          <View key={uid} style={styles.userCard}>
            <Image
            source={{
              uri: imageUrl
            }}
            style={styles.userImage}
            ></Image>
          </View>
        ))}

        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  headerContainer: {},
  headertext: {},
  searchBar: {
    backgroundColor: '#DAE0E2',
    height:50,
    width: 330,
    borderRadius:25,
    marginLeft: 12
  },
  userCard:{
    height: 100,
    width:100
  },
  userImage: {
    height:200,
    width: 200
  },
})