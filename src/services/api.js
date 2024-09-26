import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Altere para a URL da sua API, se necessário

// Função para obter todas as sugestões de livros
export const fetchSuggestions = async () => {
    try {
        const response = await axios.get(`${API_URL}/suggestions`);
        return response.data; // Retorna os dados da resposta
    } catch (error) {
        console.error('Erro ao buscar sugestões:', error);
        throw error; // Lança o erro para que o chamador possa tratá-lo
    }
};

// Função para obter detalhes de um livro específico pelo ID
export const fetchBookDetails = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/book/${id}`);
        return response.data; // Retorna os dados do livro
    } catch (error) {
        console.error('Erro ao buscar detalhes do livro:', error);
        throw error; // Lança o erro
    }
};

// Função para buscar livros por título ou autor
export const searchBooks = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/search`, {
            params: query, // Passa os parâmetros de busca
        });
        return response.data; // Retorna os dados da busca
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
        throw error; // Lança o erro
    }
};
