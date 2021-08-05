<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Formulario.aspx.cs" Inherits="WebForms.Formulario" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="submenu">
    <h1>Cadastro de Cervejas</h1>
    <button onclick="carregaLista()" class="novo"><b>Lista</b></button>
    </div>
    <hr>
    <div id="form">
        <h4>Id: <asp:Label ID="lbId" runat="server" Text=""></asp:Label></h4><br><br>
        <label for="nome">Nome: </label><asp:TextBox ID="txbNome" runat="server"></asp:TextBox><br><br>
        <label for="valor">Preço: </label><asp:TextBox ID="txbValor" runat="server"></asp:TextBox><br><br>
        <asp:Button ID="btnSalvar" runat="server" Text="Salvar" OnClick="btnSalvar_Click" />
    </div>
</asp:Content>
