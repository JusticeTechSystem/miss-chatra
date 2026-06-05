// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZhPFj2OrsPzbbg+KpJuJ17+otYA1xo+zssZNyv66XCbdHBSAakKXjm6oFwbAjaRnqGWW/ppIWif/DlPmb+8tyCVRkcfKaRuloJJMV1JJlDUcFPIW8AGzvZ8mYAnaP+Ug5kJbCoXfSWuT+RLcEobe3IWs3pI8k7dhJ0ZyhopB3pWjFsKfVJA8lj3H84wnH1LNCWUwQKGNvukaA6eNknS6POrRJCwQJI5o0jmMJrqTLSuRtsaHYr2C35OSZeU6lIxbfUy9okaha8GrzAWAZVBJFXmdm9Cn3M7Iyr4LTDCFH7KGQnb+BKGN2S3GSM7e0oHZoI9tkrkINZJLNFZNp40oUzepcxol5DNW9LycKSa/jBZMz0Fl5lNSJh4teu80k8JX9bX179tSJ31t0x4AwNFC9w+RdApjocZp+gTb23BLw28FcrAdi+uNIbsg4KIxZpXGtneCJZeXdChp3GIFR8ExsHZSGJ23qLMaFY56FQ3meqmbteBOmcuEeEx2fF1KpcGqYBzoGQ3K26chbJww7Lj/z7YcDsfXeOURCt+4w/Mi+tr6XvwCBDmSf0Oy3uZEntuGmeTy8DwIlMhB52Ho+GB1E/tFE9YF+5LvIwbugEok1I/1ItRrDUfyGnfKOu7lRBqYQYintbt4AuH48/yhBHwdwxmf0gagSrsXa+CZXaeq7laggxi+fVJrym6ZJrZRiFYPD9fXmBQjUJ1b+sqmrKJCROsPeNkFp4Buy/XXqNbWgVe2p3KV3ICxR51cSvV7UmW7y5Bg3JDt2rby70Zo401lRJOvSX5vDSb1V6ca/oHUTQ8ToSTz7mZf2jzTtM7iuCXpPo4tZHUeoNsGtFGKHXTBdZ4VzQTIDVRgPC/2pDIm60DfEUGpFiPP7uYlBV1IimX9gkBGstYGGEnnMarAojci4mgxrWTIioq20e/S0YqJejpGiTu8q8OVJorgGWHgYKyitDnYiSNUt5/2h75HnVzMLhqW904wY6aFgv0ZmOdKaHcESXwdibo=';const _IH='131918f84a4e67783cc589633ebbd36765a26475a4b0bb7a31864bb8a614b26f';let _src;

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
