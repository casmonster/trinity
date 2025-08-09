import DOMPurify from 'dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 * @param dirty - The potentially unsafe HTML string
 * @returns Sanitized HTML string
 */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty);
}

/**
 * Validate and sanitize form input
 * @param input - The input string to validate
 * @param maxLength - Maximum allowed length
 * @returns Sanitized and validated input
 */
export function validateAndSanitizeInput(input: string, maxLength: number = 1000): string {
  // Remove potential XSS
  const sanitized = sanitizeHtml(input);
  
  // Trim whitespace
  const trimmed = sanitized.trim();
  
  // Check length
  if (trimmed.length > maxLength) {
    throw new Error(`Input too long. Maximum ${maxLength} characters allowed.`);
  }
  
  return trimmed;
}

/**
 * Validate email format
 * @param email - Email string to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate name format (letters, spaces, hyphens, apostrophes only)
 * @param name - Name string to validate
 * @returns Boolean indicating if name is valid
 */
export function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  return nameRegex.test(name) && name.length >= 1 && name.length <= 100;
}

/**
 * Escape HTML entities to prevent XSS
 * @param text - Text to escape
 * @returns Escaped text
 */
export function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Validate form data before submission
 * @param formData - Form data object
 * @returns Validation result with errors if any
 */
export function validateContactForm(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  // Validate name
  if (!formData.name || !isValidName(formData.name)) {
    errors.push('Name must contain only letters, spaces, hyphens, and apostrophes');
  }
  
  // Validate email
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Validate subject
  if (!formData.subject || formData.subject.trim().length === 0) {
    errors.push('Subject is required');
  } else if (formData.subject.length > 200) {
    errors.push('Subject must be less than 200 characters');
  }
  
  // Validate message
  if (!formData.message || formData.message.trim().length === 0) {
    errors.push('Message is required');
  } else if (formData.message.length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
}