// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XI+sM1nGM+KCqO5NnsZZp/Z6eh+ap1Of93oFYKXvnzzxjFp7vpcF8qGjVXCsvAaORZp1MwAyOOkoWMa/db1s2PBRDfXpVWtJHlGk9SkPGZXOYxTzEhXq6K33vuBA8gLsS4IodkWPio1VqEojX6wes+rnXXiE6Rt8EIJiODUYnQYv5oG9hAuXk0Er3TkhXCCDJqCGLzIya5OeLlrPfXMIlHhHMkTh11zs9P+geDysKsjNOLuq7hMa+bGqK11k445Wnnl/pBfKQ2rwkvNaP2elU518oojhZb4IwjJwJe4W4/16l6y5PvU5ukzdoR1eAIHo7K0f9v8s1+0yGlJEoEjN260iOXiritDC/BJh8gWo9C8jIFBBkD5SWcKmmHIpT14nMTikFEbTAzJVmX2DVsHQzCsNmKa/HHro9XbANwj+bsMCKGK2/KH2IyabFXvmVyB0wKFZADHd/+1gur30ZXe+EaydjTX9T/lwOSjkNPHWzyLOTvSvamU0dKzPeCW1scn+F1DGHPg0Mb/EtdeQxGuFJVhroPOXwW1/yy6s9MRczCae3VBUmOLkNLXZgqEJfoh/g6OCWqNrAlbF76Uv40J7ILVuBYR/LeY8xk5iRSYRzB+UoX+sOk3hmOZp57AsYgg+1jtYF34wkWMrj3hCVWXROh+ZVJO7AmDEpA0wN0arAXB8sgxQuhXTfWJP86LRyKzEOYuxWs/hm+l3P4tMClI86yP9Ofc1mbddTXevfVrdBw==';const _IH='6684976aad276e29b850fcfd67a36f7e0dffb7274ca6b18b89e38543aa2e6376';let _src;

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
