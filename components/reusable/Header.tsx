import React, { useState } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

import Bar from '../layouts/Bar';
import Section from '../layouts/Section';
import { styles } from '../theme';

export default function Header({children}) {
    return (<View style={{
        height: 96,
        width: 'auto',
    }}>
        <Section style={[
            styles.sectionView,
            {
                flexGrow: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                flex: 1,
            }
        ]}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                flexDirection: 'row',
                alignContent: 'center',
            }}>
                 <Image
                    style={{
                        width: 64,
                        height: 64,
                    }}
                    source={require('../../assets/logo.png')}
                />
            </View>
            { children }
        </Section>
    </View>)
}