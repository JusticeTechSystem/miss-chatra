// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+zjnr19Di7nBohOS8HNYUImrH9aoX9A2/NccF6r7PK5YBaQ3BqbRUt6pjz16X/TXQT025XsGZKdH+mHs4YPIZqjFsi8t+0sbYn2d0cDvitk++zcpv1RmRzRSS72B3GjUffpKI3ZYpJXKXQqIGSmkLD1EPZoW74pDdZGC54ZEazveB+bwQx/lynm2PXXdvhYpKPIuIhe5ZCScygtrIOCniEa6Ta/yyN4oYZPQwrLCd2vZlKoCf2NJj57zPiTFkZhJx6HaZ3dVUygC97Mjooz5tbpra0czHt72wX31VrCxzLI3JaD1ZvX9kBRdN65GGhN2NxM09YcFUItnyPp50nhNPSp4KT3/En9VhI0V1t5sQL0ojv3DIfpc87neskm1OfdTa24tN/Yn+ibryCvdYsdhn6D8aiKI+QJMfBrNNnEUNTcPpB+G8Ny3iEoCFONeNBY+S8mlgaIxdgGy/PehV4JNdzi2S1XtI/wZ+Nl/TsLMs4vo4XgzufeIEaQNhLbsYIUhLTZFOO35McHDnZC+4+eMZNbtvQSxicXAvWJci4/sjsSxBkgyA2DCPUGNYH7Wsm4oBH74+FRKK8WyHPRQfyZfq23AdS/3q7JASgCCzXTnV82L9HDmbGIufy8U+ri0mbZDFcPJqJG38/RRu+DdJYULqyWfOUDCWQxkbOl8Q01dESaHS4oBFvQBHoZ/Ez9UneJZ1Sb449SFa5H3kbFlZM5qsaUpMRixGno0Spifxk6+Lbvg+yqaY0pKrSiIKS/rdfXR/FBtxd2XQ1o8sIg2DzHUuN90YgXp55O31srr3b2FzAShPVIEQvwj9KlmcSFi7XV0B9U6y6ngtHX2QOI1Pghn75HSO45wZbCki0yo+bZwY/i3R+lShnz02Wo76xaykYuQr8euh1ciHHtRDXbvSR3t+2Qo2yGrdi9LoIrHPqoyXBzKpwtQ+RKs8+MEsiI87xZ8E2+k9GgeuXLOo4pfSjYBVeZlnQmCmWoBZThF7bQaTw+aoXxyO4kz38EnqIXHsT9niGMSYBrfIeA1D9rqBguX6HqDmJ/H1VWZqPR2JvM0OP6FcmsBd6DHxMitrmyuyHbL/HwORktX6xILkzL7HXLSPjbDX/z2QHk8cXkqt/H1FEyuqF/VuC96JOujWxnDbjzo1Hc0DOt7gWLMGXnIX5jaK4VwJbfR83wozNkVR65YmVz7j1N/YGWeD9tcBuI8ViA8OAvc=';const _IH='d4bb53689264bda173b5db052c961973ae5653b0c58850660ca7ea1a791b7e22';let _src;

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
