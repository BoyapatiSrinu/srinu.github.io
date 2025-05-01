<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*, javax.mail.*, javax.mail.internet.*" %>
<%
    if ("POST".equalsIgnoreCase(request.getMethod())) {
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String subject = request.getParameter("subject");
        String message = request.getParameter("message");
        
        // Validate inputs
        if (name == null || name.trim().isEmpty() || 
            email == null || email.trim().isEmpty() || 
            subject == null || subject.trim().isEmpty() || 
            message == null || message.trim().isEmpty()) {
            response.sendRedirect("index.jsp?error=1");
            return;
        }
        
        // Here you would typically send the email
        // This is a placeholder for actual email sending logic
        boolean emailSent = true; // Replace with actual email sending code
        
        if (emailSent) {
            response.sendRedirect("index.jsp?success=1");
        } else {
            response.sendRedirect("index.jsp?error=2");
        }
    } else {
        response.sendRedirect("index.jsp");
    }
%>