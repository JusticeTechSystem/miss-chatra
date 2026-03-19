// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cBPuAVV24c7wT0t4raoKcsuVe2mTXDr1+Pyt0qS+HiJSLQiwWWDokkNbmVFFWAN4OJM0lkxtrsLy+GI0YVusY8+qpw5aD4ENrt5jWp4X17fDKPEC9ytw1+H+Uby5lz/t3iit2uYG1sfQedOBkl8QckH7e5Z5t0C3wpfp0UVpWbkaS3OO2T4/W+XB+wVKg7fMgqKZrBHNklAohhPn73WPKWNOpfHc1aAGZm6krkiWLXUXDz9awTHEcZjdUdZ6gytDUXFAk8ZBB2ajim701KE0D2NYrKMrlg07uKlGrG3LSfiSiCtS+yTAvjNjbEO7J8gdR0ajpBw9T7lhES/fl0QsCPErnjO5ji4TTtHe7/tTZdfneww4xV7oRBEYgGRPoJFEN3SchewfkdT2ZmFiHmcL6wEFyeAzrXk+wLguBDkPc3I/0svgI5wV6q0yeF5IyHM6YCNxIj1/7NAkMfWnpLNsg/rs40Ii2jNRlP9/ycx/rkCUltW8WBaMuoBs3r4dlqpiAPs8AKrMJUDpwWVv9Tc8QXdlTeaijl2BTL7m4+vJIg1Gm6t3oZ0GXR5oaF0GwiWebG8/i0jpgpZvrorz0MfW0pq3tYoehLlfwmOyjqsKPXD/7rj6UOOA/S+6YLKQ2FPTgHKd2H8q64n247hUa6sWqueSN57tB4RLD3kiMq4IHPPeoM1LpaWkzzFne44Oudg1ZM5aRq8vA2ujO6zx5HbHCzocKCbIvz9w0xm1bDp2/4z26yQIc1WzJMQndRdM2PCAOn9VgkFqp326iwlBR6qj1aO2h5cRHNrN3UNAKD0oZIUHwn7oD8qus6PidBNLU9a1lT7vbM6wRvnbDWQt3UmWKNKGbQUUzaO4RdnqcFbXVJEWIRe1/HXpzkF2aPdYB7PkA2OBxinxJ5XSuxKtXejNrtyEFCEvYGL2cR7h4OzaJYQzXX+cgWbdyGvTNogytDr/cIxxWHRzuc0g98XNCdbrzJ7Z32ORewJs7WPbo2Al0zUQNh1ymdXMquCZdx0GqyThQJJGzPbEwN6qcjUo3KwkGJGEX1UiiHTWAij+h1w9mgGQcigrp2MO3/uT2zokIvJR7eohjQk4/XeneYcPSZAL4mNWz2VRiSV2/zrRSZ6bcidiqBhIJW7Dmu7geq8pST9H0W8tyy1VuPY8wwy35v6pZKt0LlV5/gyGk4OlYFQX5FyzUSOZRXQJgsxvN+VRZGi8OB4Wp1PR1VOtR/G2QY9+QXRKKOkNeZ0AoZC2pZbInOBeFYD4I6tmrLzBWblsD30ku9T0LxjfiijTUS6ujZLXunCJzR6ossGv6KEklBnF830QWPJ5oBH3FPhUBG2fun4uYN+5KNJ84RFV3uBqWVf+zK3uWbS6tb4GGy630w4eLCGSJamgEopSlg==';
  const _INTEGRITY_HASH = '6d8320e65e7a5732c46637bab25ca2c830ad146ad6a79cc12aa7d846b1473746';
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
