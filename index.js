const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log("Bot online!");
});

client.login(process.env.TOKEN);

module.exports = {
name: "setup",

async execute(message){

const guild = message.guild;

async function create(name,type=0){
await guild.channels.create({
name:name,
type:type
})
}

await message.channel.send("⚙️ Configurando servidor...");

// Canais principais
await create("—͟͞͞🛬・entrada")
await create("—͟͞͞🛫・saida")
await create("📖・regras")
await create("📞・recrutamento")

await create("📩・avaliação-staff")
await create("📩・suporte")
await create("💡・sugestões")
await create("🤝・parcerias")

await create("🪖・equipes")
await create("📆・guerras")
await create("🚀・impulsos")

await create("💭・chat-geral")
await create("📢・avisos")
await create("🤖・comandos")

// Voz
await create("🔊・Geral",2)
await create("🎮・Game",2)
await create("🎵・Música",2)
await create("👑・Staff",2)

await create("🥵・pego-passo-penso")
await create("📸・midias")
await create("🔮・invites")
await create("👔・char-masculino")

await create("👗・char-feminino")
await create("💲・mod")
await create("💲・admin")
await create("💲・tag-personalizada",2)

await create("💲・tropas")
await create("💲・camarotes")
await create("💲・armas")
await create("⚒️・chat-staff")

await create("📝・regras-staff")
await create("➖・ausencias")
await create("🛑・banimentos")
await create("⌛・bate-ponto")

await create("📎・regras-bate-ponto")
await create("📈・upamentos")
await create("📈・rebaixamentos")
await create("📽️・divulgador")
await create("📽️・requisitos-divulgação")

await create("🎈・nick-in-game")
await create("💬・chat-mod-admin")
await create("🎈・nick-rank-comprado")
await create("⚠️・advertências-rank")

await create("🚨・avisos-staff")
await create("📊・relatório-bate-ponto")
await create("🖼️・banner")
await create("😂・perolas-formularios")

await create("🗂️・formulários")
await create("✅・aprovados")
await create("📢・anúncios")
await create("🏆・campeonatos")

await create("👑・chat-donos-equipe")
await create("⚓・ranks-donos-equipes")
await create("🎭・ngl")
await create("🎭・link-ngl")

await create("📌・setagem-equipe")
await create("😡・farpas")
await create("⚔️・torneio")
await create("⚔️・guerras")

await create("⚔️・guerras time 1",2)
await create("⚔️・guerras time 2",2)

await create("🎁・sorteios")
await create("📄・requisitos-parceria")

await message.channel.send("✅ Estrutura do servidor criada com sucesso!");

}
  }
