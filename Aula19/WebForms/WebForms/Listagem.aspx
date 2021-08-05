<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Listagem.aspx.cs" Inherits="WebForms.Listagem" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="submenu">
        <h1>Lista de Cervejas</h1>
        <button onclick="carregaFormulario()" class="novo"><b>+ New</b></button>
    </div>
    <hr>

    <asp:GridView ID="gdvCerveja" runat="server" CssClass="tbcervejas" AutoGenerateColumns="False" EnableModelValidation="False"    >
        <Columns>
            <asp:BoundField HeaderText="ID" />
            <asp:BoundField HeaderText="Nome" />
            <asp:BoundField HeaderText="Preço" />
            <asp:ButtonField Text="Editar" />
            <asp:ButtonField Text="Deletar" />
        </Columns>
    </asp:GridView>
    
</asp:Content>
