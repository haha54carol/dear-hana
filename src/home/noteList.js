import React, { Component } from 'react';
import { View, Text, SectionList, FlatList } from 'react-native';
import Note, { Title } from './note'


const overrideRenderItem = ({ item, index, section: { title, data } }) => <Text key={index}>Override {item}</Text>

// export default class List extends Component {
//     render() {
//         return (
//             <SectionList
//                 renderItem={({ item, index, section }) => <Note item={item} index={index} />}
//                 renderSectionHeader={({ section: { title } }) => (
//                     <Title title={title} />
//                 )}
//                 sections={[
//                     { title: 'Title1', data: ['item1', 'item2'], renderItem: overrideRenderItem },
//                     { title: 'Title2', data: ['item3', 'item4'] },
//                     { title: 'Title3', data: ['item5', 'item6'] },
//                 ]}
//             />
//         );
//     }
// }

export default class List extends Component {
    render() {
        const { navigation } = this.props
        return (
            <FlatList
                data={[
                    { title: 'Title1', content: 'content 1' },
                    { title: 'Title2', content: 'Link notes to each other to build a body of work. Use hashtags to organize for the way you think. All notes are stored in portable plain text.' },
                    { title: 'Title3', content: 'content 3' }]}
                renderItem={({ item, index }) => <Note title={item.title} navigation={navigation} content={item.content} index={index} />}
            />
        )
    }
}