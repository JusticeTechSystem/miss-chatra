// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MxVxiBIKtyDox1IlqeQeOCKkRe8g+hJOPKVtJwIejekJvbTFvfXEfIWiy9IMzR5icRmSPjcdy8QfQNlYvxY/1lw/bww4DlVkPAgXHos1yE781AXl0ZpSX8Rhs8zWRZNDX5t+murdWZ4+lo6O95irvUfmh9v3GN9r1WlRSdYDJuDHlhXQZ56yo6vfckc3rliyAI+EAJemashPhSTkCYUVaMlFqgVH4ZVwhth33yOLWoFD0l6U0n+IuHI1i12fRAOOlpCGPnnKixY03d9XlwcW+n8KEiv93rrL4TcNvqfreNx0gC3bM5Sa8YWoL3DcpT8xnPGMS87VpfconyQ53TvI5ikgg+tPDk//P1O5qpkQbYhKzDqYHzHaQ1gxTT/yMpdGp5Nky3eMOsgZPG+AiUwdJJs+2b1ZCrpAC7addvj437x/v8tuJysNsGf/w5qb8aHM5MRSeiFndsM8Rj8iA/OEL0PizGBgYkj56JA55Ck44AD3q0nEq8UopYXH+FZ8JmSIQhanr3mT7vMt0iDWJ6hzDSuNu+IQIpFU8D6HDhVBS+64qhFn5TvU+sDm9pTSmpl/q7sG63YWuJuoxS5R0pRK+UGptEsPJIcSgJZXFxCuFp6taLF6PJxEzsX5Bfdm7Ud53PdUNamkZzYXg3+vK4UrnLSY2KuDoDPOs1cgLBeGbhRiU3x8Jw==';const _IH='24aa05c1bd4085e32443f5a0a7e8826ce3525cfd0dba9f6d2a2cee816393357e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
