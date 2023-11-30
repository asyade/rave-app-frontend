import React, { useState } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

import Button, { ButtonStyles } from '../inputs/Button';
import Bar from '../layouts/Bar';
import Section from '../layouts/Section';
import { IconBtnAdd, IconBtnAlert, IconBtnChat, IconBtnSearch } from '../drawable/Icon';
import { COMMON_SIDE_MARGIN, styles } from '../theme';
import Logo from '../../assets/logo.svg';


export default function Header() {
    return (<View style={{
        height: 96,
        width: 'auto',
    }}>
        <Section style={[
            styles.sectionView,
            {
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
            <View style={{
            }}>
                <Bar style={{columnGap: 32}}>
                    <Button style={[ButtonStyles.Icon]}><IconBtnAdd /></Button>
                    <Button style={[ButtonStyles.Icon]}><IconBtnSearch /></Button>
                    <Button style={[ButtonStyles.Icon]}><IconBtnAlert /></Button>
                    <Button style={[ButtonStyles.Icon]}><IconBtnChat /></Button>
                </Bar>
            </View>
        </Section>
    </View>)
}