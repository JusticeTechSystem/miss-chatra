// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3PeL6EMYiZzkD5w4F6a0/3rcxL65fy3FStTcndNI+Kyjecb8ToVjcuNh9gfS4apQAx7JTOt9KO2Jc3YqEukhHk/+qNTSbRsJllmp0ngesF6KiUYFeShwDZAKXGnccuEeVG8GgyiM0WzNV/tuOBC7HYvUtxxnRU/VbxYN7nvR2AIpBZFsCsRPxldh3unLVkf8JwJhBbm38KANKJjfQGjTFsoVXpxj+Kt2VraFm33OEQKEKGjCTjjiJYhx4Ghrb1Sqa0w4S13J9HjL8i6dpUU3+4PuGbZbA4CLglFLjjYV0urMMaiW+8Tw5fP/RASTOScA7GB82jFYlW28bCW7+1/7EVHpJu+ntbtWDWk3S6xJzWb/R9f113uLVwHIL9Xl3vDVTZJXQB+OKVDPiFbCqDmhgpmPLn6P9dZbsa7KpHBZuvbBX7us/M9w417+fhQjX/nfz8CjY0HP6kbqCch1pgtTs/HxpQpNjcdVpQVuH8at6H6nbDW3pyyDtdRNHs0fZoIX3slDPNgil1EmRvdnGFdwRFl98X/T+3sXQ9ar/i4PEl9/TCASuH2IwxawnAoIspzZ8Vl0Cg57eCW23ffmS4/52JvhY6LuIqAs3RLrllA8v7CUKNup3qcOWeg7IRoldlU=';const _IH='e8526f0caedb7e66aad795acde4d01a50a87f6f0d780a7dad461151222735835';let _src;

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
