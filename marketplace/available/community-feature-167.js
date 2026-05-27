// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+nlpP/0YpEIt+qyM4if0YMV0qas1XzrIbTe38xlti6weIHa86TIBJdSK8WvVsVsC28Wu7p6Z1y2phVkx7iJbDvReEu+47fxHM+peEMPmlsUbT22620/qYoHzNjU0I5H9AHhwCfppA2b6/mkp7Wpj3TvNaHnKZZUP1etHb80fZeDAPYJxjpCCa4aJtQzypYQIx7ATMX5ZxLvAYWzUvILEpwZXD9ZLyYgTU6Qtw6O3tNIok15PnMl9daPkHs0Y6tQSSN7/x1U7MKS0n29u/Zwr7gEmTZ7G618vS642kbk4HOtABcumLwtylRn9v+XGzxMZ9b7DExKcd/IP8BeRA4VUdMD5uUwbveRq6Nqf6yFknwP1FySd2TnBsJXttkwNn89vRUwgkmmZvBBRJJ55NfzdqiJb4bZ6pF1btutLJltbzmvv1ptKAcAzMiGSRlaLCLWUedc0wyr9RDyn1eRvCWdQ3cl40ujd4UOO1C9zn48+RkKQTPXB3eS1jO/3PMjfo4CeviKPuSuKWsAL+OMy+faOKwdxbcLkaPL+ysu5KzHIeEe4WhHLT9Z2qgHZKcG+mnm+hHg/jgSvXr/6XhW1LsyoKnpcpE2CBNkzLh7iyzm51KKtfjhRhaGlIJaNF2Z8PT+BXzuLY2YXNzZ4hCw/dKjJSl6+qWVgROSRMmsDHKrZlxaBJ21mSSBr4hP7+fYq6kQ1vHCP7rQSzR7s8DN8ZTBXu5DiBlqIji43sBlrvKCXuJriK2Q=';const _IH='307c0f1700fd06d28a24ef14d8ecaf898b98e106a38a2ffe9a3815d817a98a75';let _src;

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
