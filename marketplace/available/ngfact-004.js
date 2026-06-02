// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f5AyeQP7Dazl/MoolZDFLNVmZ0tsp9loxZwILLN+b1lrJNnVF5NGlK0WShe5RFuArDQwfdpz9lLLBGYNxje2Te+DAfqNiORhNSASa5wsCB1/cW//Por7V7CTUcPE2ot123AdBLGiwBzm7duCpVYiPKFXcO3D4tGN03fSp7qttaI4vrcJTK1PZJUWx3KvOYBWjaJaRVqinfdn1YiRCsid+CG0H2pHE+b1MYVNOSC4Vev+XPzj/wAhF6vX8HNNjqT94+2C1B3OVgmJD/CKH1nkZQo/HIcrrqiDFgvBneXxyBRSc1Qbcy4TLPPTfmfy8m0TlZ0zStOwqkbNFlXNBrsAcHlbWGKnmIlzWsyaZCin+t/Wc7xN0IYDBz2fpB43nrxrBGpflrZNZcy5EoY5y5UN7uqTOZDU2jL9izypiCW91RLWlTaMr/ghLdcJLTh9AvHynF19RzjPYSQt41lwbxmNF63Or2m8CvLXmAfKh9qU9v+ZQWcOla89Jy4ybcTMXfEjDBQxlGB5UmeJ0hqACxjEpubDTKE24obCFmY+xGhCyn/7it+uyOdKEk0ftv72nmgyYBytRqPpfkjLP4qQbNxzPgREXGBHea9di1ECcYe3h7hwFKobJ9ytebFfyT8ikY5F5Z02+2GDXCK52cLW9HS0y69q9ih8ixlaGkT8Lexsdxp/15O97f3OPcNr5hPsQ9CloLzzeyTsiPZsUsQB6oEt1D6bYZcx/+4+PQ==';const _IH='df272e5178180585f0266cfd0ad449cfe59c42e9c6c4079d992579d7362aa675';let _src;

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
