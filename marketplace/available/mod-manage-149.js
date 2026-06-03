// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fk9mwhNMbPHgGrePdC844SlEvs7mpfe2R0UlvT7ojqTxsieEUmkeGV1mGWOQ/7yvfAoNOgEyDQp5cqUsUWBRwta3F1zu9qaAk59V3EhKWpPw8lIM8WRjkQ3PDrRdpQVuanF5PWpXywGw6gJp3HWZL7itzdgwXOFg0QNnpC/ViG+AFwMhiLLBz0FgWvej+3SzqDKlJY2kC/wkW9xowGTonQOoBMBjro5vwrzfmHPTTe60R0YjQCcVBq0w6/9dIkfOnvdewXrHxz9DzXr2sTRgcUBe3Vxd6ZiwIc8I9gr6C3A+PMtsK/hhs7lBbZsU4n2R6UaqCU/ZBsDrdnFNVZQsV0skZ/uQRSkD5MH2tz5cSjmo9Lwwc7c/+CEz8GofvGvRWQoT0LURXal4ryrKQMyP1XmsZ0Lno1gdWK1FW0Fv3N/2ey5QXzUJvJEdTWRIygCyEQeEJ8SQi42+w2ngCVlNcjv2o4b0GPbsr6SFUY1P68s7zjoPUrgiS6sm3YNmBrfwb30Y5UXstYRd0cFottcdTKiCQM9bzD5YHyr1XWcMhQi6hDnwru85xzP3YEpXoT9TyysuXnL22huuLYFLFM6xIgc/3yECSTzLg9jZxzRHjNTutAvsUC8VsDzqxGqYsNLkZPK16Q8IKIZ0ywge6cXKkv39c/rNYhp/KHmRp7C0gZlpNtF8K3AV4RpQdnJ1Qz96rTXHq5Ge+zMk9OsWhxaW+zGLNb4fd5Qxe7WG7ZSYePjUV7gB0x+OUdL9baop+AI3z66j4n9YElsC0kAizGjZAfAcO0JQKvzziLJ9HJq5nxzsmDTAKaj1aT73Wz5fqC5WfdnxdPtWCfcU8bweJ2FZg17D4AgbxJ1SwsPMcu5k2VqJAy2rCbWskKnNXtqc7E9p4UWQdWHYKmoIJxC+yV+NBgHBko/nMcJ3cNZTa+5qmpiiaI7mlGCulk5RXDQV3OCTX8up1VaJzQvElLgUXTT2BNWNq0uRdLiW1hUgvgYk8vrvE4wu+XpraHWZHnDMTEuIJO5059nf0iLexIf/VCXZI8Gn9cjEBDmS5YEJ6PQk6nDsgJQSq6OZ2YBDvAsvIb5H+YY7cJJLiI2oQrvvh5CiC7X06mqLXJnumBL/197Vzrc2DPR9ZXgjDpeYTLDJxmmF0hkwwyaFPcgfm26Io+wwa18435wMiLCdMEwZNWwrmZWu2eOR26D012HRs4lSNZwAjf8S1hgKhuxSxolC9FmgY5sGTOjbWAcpIkPgI9VDlnfhwnLS/lgh4GGWPTRcdsW61hvu2dcE83hJ06wxyZSN/yB3JyA5ImLb6Zq25kU4FRBPAz8KSEG42wwZ8x21J2XMnpNDd9p2dzsr9+4laNhsgGsZSnaU/eswFpYmGme0E2h4V5k9IdqFCQ==';const _IH='22c44a4d4443fd7e2fa3012e9cf7d6261584d0f08449ecdd79d6e23020cbefbb';let _src;

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
