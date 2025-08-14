import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, } from "react-native";
import { useWindowDimensions } from "react-native";
import Emergency from "../assets/addpotimages/emergencyimg.png";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { ArrowUp02Icon, ArrowDown02Icon, Pen01Icon } from "@hugeicons/core-free-icons";

function PotsDetails() {
    const { width } = useWindowDimensions();
    const [goal, setGoal] = useState("AED 5,000.00");
    const [goalDate, setGoalDate] = useState("25 July 2025");

    const [editGoal, setEditGoal] = useState(false);
    const [editGoalDate, setEditGoalDate] = useState(false);

    return (
        <ScrollView className="flex-1 px-4 py-5 bg-white">
            <View
                className="bg-white rounded-xl px-5 py-6 border border-[#C199454D] shadow-md"
                style={{
                    minHeight: width < 400 ? 250 : 300,
                }}
            >
                {/* Header Row */}
                <View className="flex-row items-center gap-3">
                    <Image
                        source={Emergency}
                        className="rounded-full"
                        style={{
                            width: width * 0.15,
                            height: width * 0.15,
                        }}
                        resizeMode="contain"
                    />
                    <View>
                        <Text
                            className="text-black font-medium"
                            style={{ fontSize: width < 400 ? 16 : 18 }}
                        >
                            Emergency
                        </Text>
                        <Text className="text-[#00000075] text-xs">
                            Created at: <Text className="text-black">25 July 2025</Text>
                        </Text>
                    </View>
                </View>

                {/* Goal and Goal Date */}
                <View className="flex-row justify-between mt-4">
                    <View>
                        <View className="flex-row items-center">
                            <Text className="text-[#00000075] text-xs">Goal</Text>
                            <HugeiconsIcon
                                icon={Pen01Icon}
                                size={12}
                                color="#A0A0A0"
                                style={{ marginLeft: 4 }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => setEditGoal(true)}>
                            {editGoal ? (
                                <TextInput
                                    value={goal}
                                    onChangeText={setGoal}
                                    onBlur={() => setEditGoal(false)}
                                    className="text-[#C19945] text-lg font-medium border border-[#C199454D] rounded-lg px-2.5 py-2"
                                    keyboardType="numeric"
                                    style={{
                                        fontSize: width < 400 ? 14 : 16,
                                    }}
                                />
                            ) : (
                                <Text
                                    className="text-[#C19945] font-medium"
                                    style={{ fontSize: width < 400 ? 14 : 16 }}
                                >
                                    {goal}
                                </Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View className="items-end">
                        <View className="flex-row items-end">
                            <Text className="text-[#00000075] text-xs">Goal Date</Text>
                            <HugeiconsIcon
                                icon={Pen01Icon}
                                size={12}
                                color="#A0A0A0"
                                style={{ marginLeft: 4 }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => setEditGoalDate(true)}>
                            {editGoalDate ? (
                                <TextInput
                                    value={goalDate}
                                    onChangeText={setGoalDate}
                                    onBlur={() => setEditGoalDate(false)}
                                    className="text-[#000000] text-lg font-medium border border-[#000000] rounded-lg px-2.5 py-2"
                                    style={{
                                        fontSize: width < 400 ? 14 : 16,
                                    }}
                                />
                            ) : (
                                <Text
                                    className="text-[#000000] font-medium"
                                    style={{ fontSize: width < 400 ? 14 : 16 }}
                                >
                                    {goalDate}
                                </Text>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Balance */}
                <View className="mt-4">
                    <Text className="text-[#00000075]" style={{ fontSize: width < 400 ? 14 : 16 }}>
                        Balance
                    </Text>
                    <Text
                        className="text-black font-semibold"
                        style={{ fontSize: width < 400 ? 18 : 22 }}
                    >
                        AED 50,000.90
                    </Text>

                    {/* Progress bar */}
                    <View className="w-full bg-[#C199454D] rounded-full mt-2" style={{ height: 6 }}>
                        <View className="bg-[#C19945] rounded-full" style={{ width: "10%", height: 6 }} />
                    </View>
                    <Text className="text-[#00000075] text-xs mt-1">10%</Text>
                </View>

                {/* Buttons */}
                <View className="flex-row justify-between mt-4">
                    <TouchableOpacity className="flex-1 border border-red-500 rounded-lg py-2 mr-2">
                        <Text className="text-red-500 text-center font-medium">Withdrawal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 bg-green-500 rounded-lg py-2 ml-2">
                        <Text className="text-white text-center font-medium">Deposit</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Transactions */}
            <View className="mt-6">
                <View className="flex-row items-center justify-between mb-4">
                    <Text
                        className="font-semibold text-[#000000]"
                        style={{ fontSize: width < 400 ? 16 : 18 }}
                    >
                        Pot Transaction
                    </Text>
                    <TouchableOpacity>
                        <Text className="text-sm font-medium text-[#000000]">View All</Text>
                    </TouchableOpacity>
                </View>

                {[
                    { title: "Home", date: "22 July 10:34 pm", amount: "AED 280", type: "up" },
                    { title: "Car", date: "22 July 10:40 pm", amount: "AED 200", type: "down" },
                    { title: "Home", date: "22 July 10:34 pm", amount: "AED 280", type: "up" },
                    { title: "Car", date: "22 July 10:40 pm", amount: "AED 200", type: "down" },
                ].map((item, index) => (
                    <View
                        key={index}
                        className="flex-row items-center justify-between bg-white p-3 rounded-lg mb-2 shadow-sm"
                    >
                        <View className="flex-row items-center gap-3">
                            <Image
                                source={Emergency}
                                style={{
                                    width: width * 0.08,
                                    height: width * 0.08,
                                }}
                                resizeMode="contain"
                            />
                            <View>
                                <Text className="text-black font-medium">{item.title}</Text>
                                <Text className="text-[#00000075] text-xs">{item.date}</Text>
                            </View>
                        </View>
                        <View className="flex-row items-center gap-1">
                            <Text
                                className={`font-medium`}
                                style={{
                                    color: item.type === "up" ? "green" : "red",
                                }}
                            >
                                {item.amount}
                            </Text>
                            <HugeiconsIcon
                                icon={item.type === "up" ? ArrowUp02Icon : ArrowDown02Icon}
                                size={18}
                                color={item.type === "up" ? "green" : "red"}
                            />
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

export default PotsDetails;
