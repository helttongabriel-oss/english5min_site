
// ===============================
// 📦 API.js - English5Minutes
// ===============================

// Detecta automaticamente o domínio atual (local, Render, Hostinger etc.)
const API_BASE_URL = window.location.origin;
// Para testes locais, descomente a linha abaixo:
// const API_BASE_URL = "http://127.0.0.1:5000";

// ===============================
// 🔐 LOGIN
// ===============================
async function loginUser(email, password) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("✅ Login realizado com sucesso!");
      console.log("Token recebido:", data.token);
      return data;
    } else {
      alert(`⚠️ Erro ao fazer login: ${data.message || "Dados inválidos."}`);
    }
  } catch (err) {
    console.error("❌ Erro na requisição de login:", err);
    alert("Erro de conexão com o servidor. Verifique sua internet.");
  }
}

// ===============================
// 🧾 CADASTRO
// ===============================
async function registerUser(nome, email, senha) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("✅ Cadastro realizado com sucesso!");
      return data;
    } else {
      alert(`⚠️ Falha ao cadastrar: ${data.message || "Erro desconhecido."}`);
    }
  } catch (err) {
    console.error("❌ Erro no cadastro:", err);
    alert("Erro de conexão com o servidor.");
  }
}

// ===============================
// 📩 FORMULÁRIO - AULA GRÁTIS
// ===============================
async function enviarAulaGratis(nome, email, telefone, horario) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/aulagratis`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, telefone, horario }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("✅ Pedido de Aula Grátis enviado com sucesso!");
    } else {
      alert(`⚠️ Erro ao enviar: ${data.error || "Não foi possível enviar o e-mail."}`);
    }
  } catch (err) {
    console.error("❌ Erro no envio de Aula Grátis:", err);
    alert("Falha de conexão com o servidor.");
  }
}

// ===============================
// 🌐 Expor funções globalmente
// ===============================
window.API = { loginUser, registerUser, enviarAulaGratis };

console.log("✅ API.js carregado com sucesso:", API_BASE_URL);
