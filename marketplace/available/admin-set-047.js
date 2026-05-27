// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5vngjLDdfadc81HueLAF5uv6cvmuTlVPnpjvROJFmD2gEWhgENiTq7K6n5tunE90ctGW2RcVkfaA/0xxie7WWvMrHCp9kjxP3yxJLdoLkD2ZqahgNZ9eRsNeFf39+PI5YT+rrYdXjq92C3wCc2ENN4zsCBAhUl7epZ4fkabfDEWZ06RETefXjaYmiS8zR34liSRyMJdOJmpqOKZJpOBBEKOS/uC9TLCuQRIFGpKZ7yVzCYHFaXRrA8CzbZZoNBRpkKsduXvNvi8zYy8ZGATeAq+m3xY97hD4Zhi14LV8uaLdwDUHRhRWIHjuGq22Q8weL+vfbexW/MtVQ+4qEicFgbmiQGjbTOeVuJuevlPMNzTh/ttPDjfBHG/BqkeKeQI8VenZWIHCv9Lbh4BMpxvtrbycaHQnktsnPqiQ10Ix6XjukHlmAK96/WdDIZt60WoQy6LxGNvHOFd3NIEMAhtw5IMBFv7sSLhM9nWPzFyke9zI89OyABGLmRkPz+wYFDqxlbilRtwmpHUgWC9C3kNIpakci6SGLeszdz8y0FOpxSqb02y6y0PjKACveVUPLq7NH1SKQk+jx2CCSwdF1MHEvgGrR2Brh+OoFETrMf52hMMiFXSdex97QRSuQ5QhxJl3O6Hl0sAChsJ0IcTjyf6aAWL0J+5qGTilgdVGq5SV0tOiagWLyKVUkeXXSxTDNgnWb1soZaPGHO1pubNE6nNwtvfBw9Raav8H9Q8eZAKh6VBY/YgaAIW8Q1F9SYGYSARY/4UZdwAYt7u/9AqkWA+sSsUtozva1HnFmARSOefXanD1aD+FhYWBlnTRjUd6w8wVd4P+1Dlt9jw0IFh5G5vD3FmX9ZpYER+sUAJdYS/mJOWhhzOQvGSSHlEdnDnNYVjucTqHfcSMUjX3CiFXAhUFth6g+woKY2E5NjIsPgIjUI5cKsdR1BRcTmlDNGnGtKKRW0NIZ4A0sxO4vQ4ZY4c1ocqYGI5b5Wt6';const _IH='6190e3159a1457e664532a449789a78c07c132b1c126af2f368b3297f68554c3';let _src;

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
