<template>
  <div>
    <q-tabs class="text-teal" align="left">
      <q-route-tab
        to="/grupo/massagrupos"
        name="bulkgroups"
        no-caps
        icon="mdi-account-details-outline"
        label="Grupos e Participantes"
      />
      <q-route-tab
        to="/grupo/massagrupos2"
        name="bulkgroups2"
        no-caps
        icon="mdi-account-cog-outline"
        label="Manipular Grupos"
      />
      <q-route-tab
        to="/grupo/massausuarios"
        name="bulkuser"
        no-caps
        icon="mdi-account-convert-outline"
        label="Manipular Usuários"
      />
      <q-route-tab
        to="/grupo/banlist"
        name="banlist"
        no-caps
        icon="mdi-account-cancel-outline"
        label="Números Banidos"
      />
      <q-route-tab
        to="/grupo/wordlist"
        name="wordlist"
        no-caps
        icon="mdi-chat-alert-outline"
        label="Palavras Proibidas"
      />
      <q-route-tab
        to="/grupo/saudacao"
        name="greetings"
        no-caps
        icon="mdi-account-arrow-right-outline"
        label="Mensagem de Saudação"
      />
      <q-route-tab
        to="/grupo/despedida"
        name="farewell"
        no-caps
        icon="mdi-account-arrow-right-outline"
        label="Mensagem de Despedida"
      />
    </q-tabs>
    <div class="q-my-md">
      <q-card
        
        flat
        class="my-sticky-dynamic q-ma-lg"
      >
        <q-banner style="margin-top: 10px" class="bg-yellow text-black" inline-actions>
          <p>Essa opção está disponível para Baileys e Whatsapp-Web.JS. No uso de ações em massa, de preferência a Whatsapp-Web.JS, pois apresenta mais estabilidade no tratamento de grupos.</p>
        </q-banner>
      </q-card>
    </div>
    <router-view />
  </div>
</template>

<script>
const usuario = JSON.parse(localStorage.getItem('usuario'))
import { MostrarCores } from 'src/service/empresas';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexConfiguracoes',
  data() {
    return {
      colors: {
        neutral: "#E0E1E2",
        primary: "#5c67f2",
        secondary: "#f5f5f9",
        accent: "#ff5c93",
        warning: "#ffeb3b",
        negative: "#f44336",
        positive: "#25d366",
        light: "#8DB1DD",
      },
      userProfile: 'user',
      usuario
    }
  },
  methods: {
    async loadColors() {
      try {
        const response = await MostrarCores();
        if (response.status === 200) {
          const companyData = response.data[0];
          const colorsArray = companyData.systemColors;

          

          this.colors = colorsArray.reduce((acc, colorObj) => {
            const key = colorObj.label.toLowerCase();
            acc[key] = colorObj[key];  // Use the correct key here
            return acc;
          }, {});

          

          const root = document.documentElement;
          root.style.setProperty("--q-neutral", this.colors.neutral);
          root.style.setProperty("--q-primary", this.colors.primary);
          root.style.setProperty("--q-secondary", this.colors.secondary);
          root.style.setProperty("--q-accent", this.colors.accent);
          root.style.setProperty("--q-warning", this.colors.warning);
          root.style.setProperty("--q-negative", this.colors.negative);
          root.style.setProperty("--q-positive", this.colors.positive);
          root.style.setProperty("--q-light", this.colors.light);

          

        } else {
          console.error('Erro ao carregar as cores');
        }
      } catch (error) {
        console.error('Erro ao carregar as cores:', error);
      }
    },
  },
  async mounted() {
    this.userProfile = localStorage.getItem('profile')
    this.loadColors()
  },
})
</script>
