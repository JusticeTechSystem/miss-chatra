// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EVOhOGTQ9hwaPdk9E2nDykEelEW/W9utfOvBbM9nu2UvojrzVgNn7l5d/jAa/UoQgh70YAuB9S1WkFwLEFnv60hO+0+oUTxD6NZmklMhvgP5gHyOmD7QaaTSxYXXFpMCwNvWCS8/qbTYvsVa7T6gje3i1vhLTxllqpjq54b8sjB9QZ7T/QipsvYE8gfb6Lw6+ajcrLAuFLgF+u4I+8HeKVwGuWhDN/txHbWxl9qCgTM4zsFOEtN1P16D5NJ088lHHG/w9Gq4MsbigBQlxzUzRXGRhFHUjmAmrXWwDxOb6Bx4Cj7accLI9e/dE8BpdqjaTMi8c2h7zR0oE0hLmaFm+EvgCqhYtv2HRRN+2P2HZ+6ANTjJuGNTpOACa3uE4y+CX8SBFTe1dYBZyqOvkoeRH+2Cp2udQlrYfZF/6uxURfAqVABi0iyIiSRI3lFAYSXxTnFI5G6dCNxd7ds58US+gLwcQuW5MEG7zxwUExF+Kgkq8BuOV/C0VtXU9vEj2rHwu0qxmSLW8tRfKyhZ5zBzIIS5wTxK0GZFW41bpdwB/cCkAirFZHgdW1gpk1140Z6HvZoZDNNx6S51DrVwocTsESwQnJ/EdjwuhiLq9o2ThR7ZtYOSb+f/EtE1lxKyPBqbuvhpnlSxvKQQgjcJ3r3i84zClCp4cFoQkdZqjoUZVP1Jc0gu1wECBu8KZH2mcM5gr9Ey9Tnj0dnS0RZJGCxLwYceGmHDi/H7hwWfFhBFlvg/zMahsfDJmS4TabXBHW6ZGX38jJTEYW3nArw+POJmgF2nX4udEZukSKxPkLrlzvOEgavs0WzJvSGodOUfC2uf3YmRc4hY/Ca3rwDZU0Q+cV9HtjQnpgJQ8JYZ/H5iWZVbTW2wCDLI2bj0Vv2IaNkVwALkmVxgBTEVEcViGfxlsrG70vE2st6jw6qr3yZIkzlhcXMeOx9CMFWEZDA=';const _IH='c494edafe454079b3618d3224614797ab746e390c393b08b1350eaa12bc88e44';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
