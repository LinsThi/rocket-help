import { VStack, Heading, Icon, useTheme } from "native-base";

import { Envelope, Key } from "phosphor-react-native";
import { useState } from "react";

import Logo from "../../assets/logo_primary.svg";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();

  function handleSubmit() {
    console.log(email, password);
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.500" px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        InputLeftElement={
          <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
        }
        mb={4}
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Senha"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
        secureTextEntry
        mb={8}
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Entrar" w="full" onPress={handleSubmit} />
    </VStack>
  );
}
