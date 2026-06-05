// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2B2iP/Ao1kTlkOghwGfLog8jmdDMcP3PbmX2iQiPZ8HRLJHXwSMWrdEA4NPHfYKeQ/96FrcIhUTHm9muuMpD1Nz1qQdGhaHZoN/nEIDFx+D0AuZQdzXokRWQ4w7CWcsupPPtoGwjBNU6rTc4k6YpL6pkTRHFSQ6kNM1kEw1/M0itKT/oKLn9NHnHoi0PHOVb+/zB1ZFsm6CiApKHS49hDQJ7CX6Ft6VTzNeHi5fOfH+r1/CSutdypsCfgOFPsH8y1emSaBeWOA93GRAmo6YiG4+cuWABWVbdotugZwmXdW5OowwDcPFOavcwXvLDIDDuIJC8F0Pb6N3xmGDeQAQ1VFXr1DNDvY1Iqjsf5hhEYaXUGwqyWh3hbJde7uT3ENO4Y5yUGANDzCl8YbDyFgygsJu/+qoSJesLnjuNHoGNNqAOORQLk3j/1H22CTcH1yaoCckuzW7zcyDFcJVuDicA4aYc8NK2ywy0EsYbihcUYubBH+OnMmmejqI5USUct3JM1bWhwmh/g9tXS0GukK+vvpHKD+pUb4sPrGgnWSbLcwOSkf2Tze8sIP553mhNB7SGJ3MHDrTaRCD5HQaLJ+D2+IOMQzJwXAjPNcC1IRsm6xZpuqVQetslLA3829PZ55/EvclZmdT+nPZY7vmxLCjDrlUfvsjNQQjGgu6kHI8xStW3Jin+gE0kCeB00BMMjB9fkIB9+4S7CaNTwn75e0mwEZ9pKpXq7TmwYnL9bwY=';const _IH='9519534565733f2e0d624b65d7515d260dd79270e9220087cd69162bf72e3fa0';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
