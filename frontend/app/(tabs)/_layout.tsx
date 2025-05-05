import { Tabs } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tabs
                screenOptions={{
                    tabBarPosition: 'top',               // 顶部
                    tabBarLabelStyle: { fontSize: 16 }, // 字体变大
                    tabBarItemStyle: { paddingVertical: -10 },    // 增加上下内边距
                    tabBarStyle: { height: 66, backgroundColor: '#fff' }, // 提高高度
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: '每日提问',
                        tabBarLabel: '提问',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="log"
                    options={{
                        title: '历史记录',
                        tabBarLabel: '记录',
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="time-outline" size={size} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
}
