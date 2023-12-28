import { Image } from 'react-native'

function AssetIcon({ asset, style = { width: 24, height: 24 } }) {
    const source = asset;
    return function ({ }) {
        return (
            <Image
                style={style}
                source={source}
            />
        )
    }
}

export const IconBtnImage = AssetIcon({ asset: require('../../assets/icons/btn-add.png') })
export const IconBtnAdd = AssetIcon({ asset: require('../../assets/icons/btn-add.png') })
export const IconBtnAlert = AssetIcon({ asset: require('../../assets/icons/btn-alert.png') })
export const IconBtnChat = AssetIcon({ asset: require('../../assets/icons/btn-chat.png') })
export const IconBtnSearch = AssetIcon({ asset: require('../../assets/icons/btn-search.png') })
export const IconBtnBack = AssetIcon({ style:{ width: 24, height: 17 }, asset: require('../../assets/icons/btn-back.png') })

export const IconTabHome = AssetIcon({ asset: require('../../assets/icons/tab-section-home.png') })
export const IconTabEvent = AssetIcon({ asset: require('../../assets/icons/tab-section-event.png') })
export const IconTabGems = AssetIcon({ asset: require('../../assets/icons/tab-section-gems.png') })
export const IconTabMusic = AssetIcon({ asset: require('../../assets/icons/tab-section-music.png') })
export const IconTabStore = AssetIcon({ asset: require('../../assets/icons/tab-section-store.png') })
export const IconTabStream = AssetIcon({ asset: require('../../assets/icons/tab-section-stream.png') })

export const IconDropdownHome = AssetIcon({style:{ width: 12, height: 12 },  asset: require('../../assets/icons/tab-section-home.png') })


