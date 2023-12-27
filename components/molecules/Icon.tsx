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

const IconBtnAdd = AssetIcon({ asset: require('../../assets/icons/btn-add.png') })
const IconBtnAlert = AssetIcon({ asset: require('../../assets/icons/btn-alert.png') })
const IconBtnChat = AssetIcon({ asset: require('../../assets/icons/btn-chat.png') })
const IconBtnSearch = AssetIcon({ asset: require('../../assets/icons/btn-search.png') })

const IconTabHome = AssetIcon({ asset: require('../../assets/icons/tab-section-home.png') })
const IconTabEvent = AssetIcon({ asset: require('../../assets/icons/tab-section-event.png') })
const IconTabGems = AssetIcon({ asset: require('../../assets/icons/tab-section-gems.png') })
const IconTabMusic = AssetIcon({ asset: require('../../assets/icons/tab-section-music.png') })
const IconTabStore = AssetIcon({ asset: require('../../assets/icons/tab-section-store.png') })
const IconTabStream = AssetIcon({ asset: require('../../assets/icons/tab-section-stream.png') })

export {
    IconBtnAdd,
    IconBtnAlert,
    IconBtnChat,
    IconBtnSearch,
    IconTabHome,
    IconTabEvent,
    IconTabGems,
    IconTabMusic,
    IconTabStore,
    IconTabStream,
}