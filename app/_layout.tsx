import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: "/",
        }}
      />
            <Tabs.Screen
        // Name of the route to hide.
        name="home"
        options={{
          // This tab will no longer show up in the tab bar.
          href: "home",
        }}
      />
            <Tabs.Screen
        // Name of the route to hide.
        name="cadastro"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
       <Tabs.Screen
        // Name of the route to hide.
        name="sobre"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
    </Tabs>
  );
}