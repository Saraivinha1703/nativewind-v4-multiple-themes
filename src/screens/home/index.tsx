import {
  Image,
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useTheme } from "../../components/themes/context";
import clsx from "clsx";
import { useState } from "react";

export function Home() {
  const { theme, handleThemeSwitch, systemEnabled } = useTheme();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View className="h-full items-center justify-center bg-background">
      <Text className="absolute top-14 text-4xl font-semibold text-primary text-center p-2">
        Multiple Themes with Expo and Nativewind v4
      </Text>

      <Text className="text-foreground">
        Open up App.js to start working on your app!
      </Text>

      <Text className="text-secondary text-lg font-thin p-4">
        This is a secondary text
      </Text>

      <Text className="text-accent-foreground bg-accent rounded text-lg font-thin p-1 m-2">
        This is a accent background
      </Text>

      <Text className="text-muted text-sm font-medium p-1">This is muted</Text>

      <View className="flex flex-row gap-6 p-4">
        <Pressable
          onPress={() => handleThemeSwitch("system")}
          className={clsx(
            "transition-colors duration-300 py-2 px-3 border border-input rounded active:bg-accent",
            systemEnabled && "bg-primary"
          )}
        >
          <Text className="text-foreground">System</Text>
        </Pressable>

        <Pressable
          onPress={() => handleThemeSwitch("light")}
          className={clsx(
            "transition-colors duration-300 py-2 px-3 border border-input rounded active:bg-accent",
            theme === "light" && !systemEnabled && "bg-primary"
          )}
        >
          <Text className="text-foreground">Light</Text>
        </Pressable>

        <Pressable
          onPress={() => handleThemeSwitch("dark")}
          className={clsx(
            "transition-colors duration-300 py-2 px-3 border border-input rounded active:bg-accent",
            theme === "dark" && !systemEnabled && "bg-primary"
          )}
        >
          <Text className="text-foreground">Dark</Text>
        </Pressable>
        {/* ADD A BUTTON TO SWITCH TO THE NEW THEME */}
        <Pressable
          onPress={() => handleThemeSwitch("deep-ocean")}
          className={clsx(
            "transition-colors duration-300 py-2 px-3 border border-input rounded active:bg-accent",
            theme === "deep-ocean" && !systemEnabled && "bg-primary"
          )}
        >
          <Text className="text-foreground">Deep Ocean</Text>
        </Pressable>
        {/* ------------------- */}
      </View>

      <Pressable
        onPress={() => setVisible(true)}
        className="absolute bottom-2 p-2 border-[0.05rem] border-accent rounded"
      >
        <Text className="text-xs font-light text-accent">
          Just a programming cat.
        </Text>
      </Pressable>

      <Modal transparent visible={visible} animationType="slide">
        <Pressable
          onPress={() => setVisible(false)}
          className="flex-1 items-center justify-center bg-black/60"
        >
          <TouchableWithoutFeedback>
            <View>
              <Image
                source={require("../../../public/images/programming-cat.jpg")}
                style={{ width: 300, height: 200, borderRadius: 25 }}
              />
            </View>
          </TouchableWithoutFeedback>
        </Pressable>
      </Modal>
    </View>
  );
}
