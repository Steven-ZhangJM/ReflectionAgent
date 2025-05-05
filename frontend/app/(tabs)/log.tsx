import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useAnswerStore } from '../../store/useAnswerStore';

export default function LogPage() {
    const answers = useAnswerStore((state) => state.answers);

    return (
        <ScrollView contentContainerStyle={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>📚 提问记录</Text>

            {Object.entries(answers).length === 0 ? (
                <Text style={{ fontStyle: 'italic' }}>暂无记录</Text>
            ) : (
                Object.entries(answers).map(([date, { questions, answers }]) => (
                    <View key={date} style={{ marginBottom: 24 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 4 }}>
                            📅 {date}
                        </Text>
                        {questions.map((q, i) => (
                            <View key={i} style={{ marginBottom: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>Q{i + 1}: {q}</Text>
                                <Text style={{ marginLeft: 12 }}>A: {answers[i] || '（未回答）'}</Text>
                            </View>
                        ))}
                    </View>
                ))
            )}
        </ScrollView>
    );
}
