// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTnBLMynPBVKxb+AsI9ce5ZF1Mly/7VdOE+rrhbpVjgPRPfk8LFmAXJMIhKn8emis+usWOLe6Bq3aWhjGVaT+Gmwc/ET5iWzHq8VEqslDKPCLmzWTXSdhNXWluWehc1TlBcG3U2/Y8Qzp7EUe9YKlP8kESx8hvqhUQit9YwjG3w9ohiMuvsTQ8vVeFrNbEBstKLi375A8/MX0gojr5YXpVupZLxKbq1bEdiGi3E/3xE1TkS61xcORRe48qCuNtbgeQ4niRgyvZPy3YBtfQpbgm+K00G/E1gM77EEO3ec9Y4rmThXD/G5Vxo8VF7Xc3q0CWhJ7cfI/nFFjrG57O13uYT2PSBKBMT22X5PnK05bJd0ObTkghCuVWpiAlimLzIlqdbcG9x0h6AkwS5pUYUreBVvJwzQAzQgMHN9BCgB1ZeWhlA3tY52qTrM/jeBE8zRVuUd+nBx9bS5TzCjOFzVAaaXZT2ZeKrnISZe27N2Rwj2hUKIM6EQ5HRu7QILlofOl0VkhD0rH0Ms8jU+FxJubMx+WWTSaZQIR2/rQd4PoIFRVioOQeq17NlryF0c26IqGhzdOmStjtYy2Q7LaDNen/4jxkYVRD61Bch/d40ZOuB++XulwYslDEm/BhVLMjLhheyn263u6lbN6TQLB0ZBCHyEXfVPNWhbz/sSNblnQVP4s6eIlEV6V7hplySH93qL24XYQeXKvEkrqDkKIL7phe60qYetrS33au0';const _IH='4e1983f0e6086c3fee7415024b13287066cfb5006f947f0b920b1a9765ecef89';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
