// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQY4BHAQiuQFa94t2doI3NKn8u8AMAhFL1hcYQ6dt8PNlGH6+NQg/kywuaDMw7H9TkhHMJZEcfkM+SG3mHQeCFioGcc53mdzjeKBAAj/CFM7+xV+6rR78YaN+zsRytlDFcT4dMP0K5GrjVw4qJqNMpyfzIoKRLfA1Wsq4rb98eYfrxdDoecaQQG5iTUQ/V2Y0jf6KGAH13kImcyO9WLMOYjoLJxgazlA+vMBTZnSBgpTMegqkmra8cqXOrOSCUjjuNAJi5aptztMADkUDIRpFPZYAeYapsgpPPjFi0YNB3UcJp21go15v/AIH5H+2T0deS3fJe88r0Oywrj26zdBUU/4UXxSuY0vCKGFVmEqItARKx46h7QF4bon5/nA4hpTkORPvJy6fcuPUXfu2DBg7/Jj/5TU0tSjHezTgeFgn1QpLxy/XeYK2YvxLypyso6pHptIVloVtODO6whUQy0Iw+m4jBc+luiFi7qdpJ0+UrwBBWRsXJf+45tdDdWKYVNdLHDNk7wTLj2357F3YbINa2DMkKN2sHgm0dCtkVhGpKxH4Nqsr/yRnqJggJlCbegDTxzmBx6FzwKU0me5HsX8N3sP2Ralsst0Vhmv+x1mE6JMOJGiweCmCPjWQbzbhnMWfzOfPQjDQiF9txmoToOTLY3DFZ0Z0BPgNgeK+A3GrVezjA8+vPGPgNHhRdYuVPuVMMr77oqbOgDannCgQaDBhBN1CEsuNBKB9c3uYVlEfUf';const _IH='e141fad5748e6d3512663328d005200167017c854d545b8e4433f6c474a4ce23';let _src;

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
