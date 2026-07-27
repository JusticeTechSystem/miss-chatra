// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTe7WSPdwBigyr2Ed7YGtD1Eu0WkRhn8l+cOKxlpNojsTEQ2LGn3NpcUcnvfzEk4aJC1DtWOjIGZUm8beysQQa2wkE4WrCX57SEX326Mnm2QuAHHGkC0xcAu7Dyo0seRsUn6wn1y5e5Od3mI0VvIv6zXmf54FFCJMmGEQVt4Ai4exGXKqPw0ghvPoitKrrDSCOvWyLTv3L0CQwNLCjnzxVdkdA4F9dZ4GfnObro4FARuysVvVl5PINgn2Ga3l4di3RBodCGIDicfiTxKXmLUzuAjNi7cdS5S0R1sYOJ89uugV0OwknnWzR9EgaXY6RnpNMkYfPCeGkri23y4vwww0/js9m6TEEyG4wshPiw9h7aIClXQxJqvMbZ5XnWp/Jd/UFWPd1xMylLY9MbLgl1BkUuVM9FnVPVr7cHtu8/OxPHuoeSbcmd53h04yESRz/cApmtgn8AbclnyJNByzw13g0Tzs7cXZCK/wnTEBK2voWZATb9OX1roUp3qszzbNixlOlaxGWsBKzMKM6qT2EF91oDeSvZG3bhD4tG2JFh5MzH/wvA3NDNKVLatXgyUzrstV4hqk2oQDYLxHpW4b8IdyolDTiD7FvyXXatlQ==';const _IH='c059ea82007fcf9d0532120f3040a0a605e519e44636ea1e0021ce2333631240';let _src;

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
