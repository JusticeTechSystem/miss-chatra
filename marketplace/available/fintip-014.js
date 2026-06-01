// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/dgPA+SY8guhvkZlD1BQmEfeHo9hHk6GMATHqdtjGZeus9I/C2k8EKuYe80t5+4g6Zexv/wiv9zGAJLjgjG/JHjbt1yszVIxvS7LVDirOY0b2X9s2y7ogmN4BC5HcuyzEIV2+GT15RX9fMBSCKLFWOhDJ//rjVU/Y8PHqMrgm1Q7png8PAhEJVAYfAIZf/7tnRQ0al/nGypTjceaHal4YO6Bnml6wl/Rr+VwZ092BIjfyZGFZnTGcU2TPLvXxMabRvuu9myD4b4wG+Jv0siGHIMdNPUdQyJN4E5PCzLTXfqqyk45WvJKeSAlQlqfg+pi65r+1GP2QLs2u5I+xKjdTi0sdODkgcyApz6D/JJqjq8VYtE0jmtjr7rn93pjplVPeW3Va27JbNy0yTDB2Y2u4TXun/B63iszo91mcWpf8gkxN21jRUOLO2qWtWwtd5au9sQhS8V+vxoUv6gcC0bR8aDSmla0Tj4V+j4wjIufagbbh9PvGBPATRBmYLaT67oPHHlgmS6SSP1nUhZLjdpNFYyqnoyTTV40z3EDnp+K9HyruGUOCfV5cAwoMVKnuNFehxJ2Uh3LwN+7qAJKf8zTgOuUuO29mtz/im4lAcd3h9aFaknTOOua68Ff+jPSaFGcKue2lZeCz1fDEkmqGEQ9453Ty45MAiIKoCxLvMNxtl4gQnpWwUoJ9wZlw+VC2nBwDCjEJPulV33dRChDOWgxdWYfgHuSJ5BSnONkKvWRb4Tv/vLRltL+0iv/vmBLhs2kD9hT7wEZHSEhOTpxxtTWZt7oZQA052TmNWvtDwJQknV2EsHrm7RX6eqEYJk+VAHv4x5yibgYB7/etoe9I69i0U21x8Whk+4AINiYWGus/A/Kum/J1HU2o09zUFMhXeg+quRyfBTJKNlD8rYrRKlE65Zh3Jy3TXvK+TQtiuhm0Y5EYecfoIbB78932r6L3egk5lkWWneNtbt175Qn/UwUX7PZGdr7ckx8nQ8/b5rJwD3Dxi9K/i2CsyDkxdkDELiQ0TDJiRI5qJqBgvI/woF1Ll2Tjc/mIBIWkAic7n0P2cKVB8=';const _IH='2bb3d8b1bcd36549780122d7eb89df09650b477f8646ba2e842b33c9ee019339';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
