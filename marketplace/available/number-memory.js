// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'wQLOTn414HhopOTXhtpHHYVPXwMGLsAqINpHSFUvqORcCP1lRd0hr+VJto9XKPyFJ0JNyuQ0smr8gh/bcr7lz6E+wSRzt1bcHYW/uvEGwfEQWOsSNe0YU5pD5KKjiBzfECbLODQIxidJeMz57vYmaH9N5q/E0VhSAfCLAG9kPX3v7zw++UOmo1+XpYuWn1mvHdkEYk+M8Wu/+zhtjtiHdU9MDW3RxeUrVLtvdFD97c7XCOLOhoLRJNTTaeRbR1YhIr184w2zpkhp5kLAG4NPvxJ80aLcf4ryTEopsedjU9o8z2iHX8JSWS1GaVBGyG0YUD8QSnUFp3BZ8VTtivGUHziogPVbIDvJyidMXs3nPfvQF4j8m1deibeB3HeQXiZE6sn7R6TjNWawOTPdUaNiCdBoPcY++iwGjeItmHcmpk/IX3jaFge9ZI5Q5bqTSKWP4+YqHaNx2L9E6GKspZSTKvq5yMp2N/YS3Y1xooLJAp7jqXmn/zBxw99+E6bKAe+BUp6tQgXHLRtnGLW1PsV1NZp51kgO23C7gKtfnLT/MkqmLhY/sKLvTPcHB6KDEYHnX9tZfcs4YCXA9SMBLbBX9knyWkNHjsrzbhhQBWTI1wvJumztJJH2LW+sjkz5P7Pu0xq+6txmDPXMBeBubGOO3+WKpifapzOukVmjmURqUlEjE+zhbEaU3C550a2auPFMBjtqlPD37Bdk9S5McE0GDECjDSl9cptmELTHy9dZuV3pW4wHe+dm6BhmWtAaGxiaYnb/mzGUwBdueysaJXTfwNAp+PxIEhTjKskG4un0vvqWd7evek3wgUl8ERWZbNycUcHbd+Uh8lJvQcccD0tsyjaeZPjYfLqQt9yOwD5LlHJQdVov5jrXZEvQq90/LAf9+rtDimCBD/YlH57G/MMgn0GAqrTppSxNe9F5c9kLCCf2foJVbfeOK3nVXpgMp0nPaSE5QksVr52Ope8ESrrsfr7yC+5UaA2S5HqFqlJa96EoUdaUMmUzJ2a+lNq6KJtYnzrnubGNdl1gHVaLH74XV2YHzUHjoHgvO/vCxdZZjOrF7f5FtVdKZjoGLIXWpwXgsnwtlwJNsGnhMuoXAdwFlKYwJFAdCWVEMdyTJPZB8+3opkVsqPEvUoMuGqQwJvAuaTHX/uPmn0cEa1vRcN5anxM4mOBYws2pkH5TskH6m87TSj+H+EyEru/NHSKuwZ/jLYA/SkNsP18CpwOYJZRTqxDUNvQWU5QnM+zwG95isJPDQX91T50R+HHAsdxuh7u3/IqFgkLdRNv/UYjWZrDq1bpVwhyws3Y+C+NZ+i66rw0Z4oUDOu62/6TcnDUcg63iQqkd32AY5n4gEfL0w4hABKzy0sdrZd5Zoz4rexRi466xnTniF+ilytmAqKLJkeAxkcOmIal34aDi0bd+O5RhUfpjDxfPkraa/ALs3zXtgCyKZd8yuhiAxbJ/+O+JMHFNWBIAV/q/fi1OcUe6yMSY4dmrJumkSFML';
  const _INTEGRITY_HASH = '6871d9774209d6237cb14bbfca6d905d7df0095db53d5d351ff1fde529b9bc17';
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
