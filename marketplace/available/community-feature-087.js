// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3CfS4faZixah961UceSKVsJuSlucbDEUxDyivIY1YRbN8waofZqUDNg+7fSAvWjvFZyHO+97PFO2pIE7QQe/F6tuVW9RvPJxG2aURC4OMucszwOP5TKlkEOkBl+KkZkod28Uv+t/Gq4vZfW2+QVVjwNriUIvDfr3PIXlvTDTxae31ILl4FXQrjxsy/HVC4duSyom/DGmIVlEhBGAdkCJai4Igq/HrS3voNXb0JKT2mV3jX8myYFL+m3/GIlrOPlCJStmcG8+dGLJwyho5zmVXevYQmLGzgTIHDk0W1H0J6jqdP1RqZww06vy9nKPacLb7ETrVoBTummHDqah7RDp9WxXLaGQGY48MqGqFIEJAlVDYwWhooTPCQeks4gIV5mno8S972VXT1GhidONT/koyp0GiNQpHrkPXT9/5FfXgJNdBmMwE3UQs5ygP8JHeJZtYdyR3V3T5ieMI/NIE8SiYzn/59ijHkymc80HFodbq9LxgZG9FWsCoXxMQI8fS+tmVDa7ewDZmf/qLx9cSIjM7et3xo3WlCfmS1o7OecPvXhanWz/k6Rn6xM/Evei1ffoIxEdDozyF12XoEuLo9LFAJikkX2NOH18o/Tdz8YH003GPx8pHD4Eap73bPEQeCmXXPT9fOYUTlZRo0HolXNl5qt1rYKX9SLGon4nlpG6MOXAj3LvZlqJgmjjx+2br7/csB/eJzgVcekLskTMum54nPhSP4pSy6T7QuFYvUt5zg==';const _IH='645bc006979b80dd739799d6aed1384f13ee693b4332a75916d2996ddf189576';let _src;

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
