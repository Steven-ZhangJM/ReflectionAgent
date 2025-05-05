import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { useAnswerStore } from '../../store/useAnswerStore';


export default function DailyPage() {
    const [dailyQuestions, setDailyQuestions] = useState<{ id: string; text: string }[]>([]);
    const [responses, setResponses] = useState(['', '', '']);
    const addAnswer = useAnswerStore((state) => state.addAnswer);

    useEffect(() => {
        console.log('开始 fetch questions.json');

        fetch('/questions.json')
            .then(res => {
                console.log('status:', res.status);
                return res.json();
            })
            .then((json) => {
                console.log('loaded questions:', json);
                const shuffled = json.sort(() => 0.5 - Math.random());
                setDailyQuestions(shuffled.slice(0, 3));
            })
            .catch((err) => {
                console.error('❌ fetch failed:', err);
            });
    }, []);




    // 加载态
    if (dailyQuestions.length === 0) {
        return <Text style={{ padding: 16, fontSize: 18 }}>加载中…</Text>;
    }

    const handleSubmit = () => {
        const today = new Date().toISOString().split('T')[0];
        const questionTexts = dailyQuestions.map(q => q.text);
        addAnswer(today, questionTexts, responses);
        alert('保存成功！');
    };


    return (
        <ScrollView style={{ padding: 16, marginTop: 8 }}>
            {dailyQuestions.map((q, index) => (
                <View key={q.id} style={{ marginBottom: 16 }}>
                    <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{q.text}</Text>
                    <TextInput
                        placeholder="输入你的回答"
                        multiline
                        value={responses[index]}
                        onChangeText={(text) => {
                            const newRes = [...responses];
                            newRes[index] = text;
                            setResponses(newRes);
                        }}
                        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 }}
                    />
                </View>
            ))}
            <Button title="保存回答" onPress={handleSubmit} />
        </ScrollView>
    );
}
