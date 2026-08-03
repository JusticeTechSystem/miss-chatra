// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTrjZjrA89DBIydJ2LDvR7MKpAPZA2pYaz1tI8VyHWUKd1h1SuTKY6s4NxR9NMcmSrudmXyrZDYwwVAMWSQCCs1/NMvS/PoNl7XN8XxgOxoh6IfKdvA0Lo4FOewFD0GbHfhAy7EQn/S5US4zL3XVYGISoBJ0OIM7FE5icE6IPup5DHZi/zqjTUY8KlZZBGm43Ntnbu9cTZnIB1YFz7ppAFtJJmRNh19G7Ghr2Y/0SLsf97fv5TZzdbQDFXkS5lvFcIAESoKC6lhLqKniBTUTpaKcsgRJe/spqHSLYSpP4cEm2mQ3iRhgRCDGYVHvPpC4plbvLSpXLWzQq0VghTnH6TOJgcxKW9UT22UzG2tFG8vwubQVGpoKwtDxzqBKFfRpvJhhgoefyqqUhinM9qQ/HnsFAlPDRnG0DoVSWtgAiEu0NqCm4erdO5bMke2Xx2x5UOJvmxM8lpCdy0SKUD52sTaut2ZU1nnzAIB/yKpLlMqpbR6ifvEYsBpRDqszEPgxJd4Jk8sfa7nYSmQtOnOtreOlp2Q4TfTRuAN9+jMD9S28etohJTA4EhThDQdAw8oAugQmAL4cmfT7h1+WNnLuLjz40QjQAmdvZSU0h1QhiA6AiukoPB6aZ6OZG7KqgTQuJcN+NG/UxMl4Ro+bR4f0vbsAb0U5qrb6EA8IyCP/rFMr6lmHFoGwttKdMHq2MUkF7GLQWffqrNaVNYBynzFrfiIDiDA5nIMG8NshMs1D+w=';const _IH='4432762c4b005b69c44e2756edb735a89b61df5dfd223015b500ed0972506d7c';let _src;

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
