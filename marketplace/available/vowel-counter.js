// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'STykkZspqecMTcmMKocyaskfynF3G5Az7xH4ev7T1vIh23Tga9U9KLD9AQmrgeYubqDzV6iOH+ywIiu2JbdIVW1R3AnIs8+pRr39BJEsfDrNZLxiCYR2ezwk1YmHRblNt0+VjSCQOe/svEjVTyQxF3vOvtB0zhRkryQD6Pc2NGtO+hEMjyLTQ1AeorxZjo901CCzsS6WnOnXDiMHwKSFuQd4lznvsmj4aSyZB4AjaWcEr5+M+z9VSoFVfypn4sT04Jv+eTloWdgsqii+sGZoNfrjW17DiNAR+Mk9OQAyM94ISRzLL+rIf1s46PvriGZzt6Ym5KsOT5FACH8ZGcxyaflSkCQdoaJB+dYy+hw5rEiDeGR5ZvxYsXBHo2KM7cU6+tOcArS+0xhUW1f33uWXBeHqBkHUfT6k2x4lMVuvu4hhLOZmrRNhafUAmVueW+F0uBhd5ZVZO+wn62hVPaiGyNTATcr5Ic4ECaGFRp+fUQWhhM6YcSbJ2SywcfQ6Q7C2P6Yn3LAwVmMbrhWG7TxpOSFIsQNT7MQWZUI/nu1R+KSB7p2mGwEOdNwNlehcnMxtPENgxpREbffnZoyyKKUerXbQcMJ4nC5Qdp5qrEphErWG2+/tbaNlxWL81rrY2jRzb6rFrFfTjqdqVC45H/MU+1bcgJcpJZrb2uq/r4skoyH9gZhy4IwaVpsr5OX4dKrQUK7qnecaeeErt3Omm3rVOwgevnF72XLR/9S+/6ZfA6xAaBPxFqvN8HxxQLHy5KX41e41bzGXZdXVjxYHKTABtAcjZf3zaHbPJdWqJjYxranz93qkUo6Qh2ayvY8c6f/vblveotG9E8BEtjAE4SDyNXL7QpnYqgI3+9kX2qp1MHm1P19amRCMUQKSEExvPYbhbberG/CP61+vipl8l9knag4HyZSHnUh8H3DCgInudaPRcmaw9/C66w7Y+h47eRjiqxejo7/ALjyuBiCyUiEFkUwts3BcO3uS2lb2cg59VxqxEB3M3fM/LaLQzWmcoNDNOVEy4VsiJXYhFFpEaJWp+1KISWqEXUO97mhBwhV2Qxj9dQB1s8/W7WfLKy84T3TQJ6uEmLAmJftqNi5CvyLb5xFjAhggxROJWhDAPnZQu1EER5mrAr5ZVa2jzxCqbL7pTVGQjux29KFeF3VLJnR8oRScEX7lwCMXba0xcLQ4FYescK3XUk6bXBUKzv4vRkSsOMeE3K4uuXXPaZtFVYQNJRRlOvUULBw6MGVf4dkW5vPudNfIlt+CD9IXVXV7LwWbmzCyOiMfn2770IJlDp0vJVqcRSG/3wkrqLQVoPuoNH+Pvi5WBj7M2uSKOoh0ImEMrPUkhXEZvJmq7qwuLPTn8Z8GlbZPN7O2EQiMVlwroinS7iu+jb9AsAeEhp5zzAi+kzf3XAO7F6r2hrN4KCFW/fIcA39UhZxc+VCKGRjwNpuhPZk/SXFlYr7rjnSfD9MOoHQWok6oNxXuR8Cgnufka2hmGDV0iOcPjM/585vChqgB8RRObdaBC7YGCEWZoKsYUlu5U6VGmFobopnq625Rop0rwHO5jk09xdjehQN2IC9lVqtnnM/6YIH7ZvGbxfh53WoqEpdhOLi1MAFJtEq3SXetCKgvVyi1NnRQQKH85Van9eQkMFYpujvr+XlkwB1kteJ1if2gEOg+cQzim+/kIRY1LDHEptqyhFXD9PKurTzmBISoFhwEUs7RCOhXuI2udXEuZAR+04onB42Qab+nizXeywBsw/5giltY9sXevAygaQY/q/b2SUzJ9XsbmZplKQRO+h0Bb+oOt+Xgb7kuwzeMhr/lch3Gdi1gV5oUjx5NU9C9TwUcrVY5T/DhmyeUQ4sjwbi1HQmiblQHSlmlz8K3L3nCBg+CYFS/RhpXbIsUyjtVdfs=';
  const _INTEGRITY_HASH = '76b828b1aa1de7c9e72f1b0b882453a78b1036c8f4078a71d268f9df1f411b37';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
