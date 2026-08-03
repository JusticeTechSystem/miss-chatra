// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRuctcXi97jMirXN56fSjpVfIKSOm6A/qEKWyfSjhud5/oI0y8NKpmYTPSix792BxazuY4RBCwliOi93mB8c6RFuOo6LPTFLF+3VlPRwGu6EIgdzqHmuORgEncSRDhvExlpTqik6/Dd/aglJ2RkzuVs2mf6iU+Y3AVmJ0q3B+5G4hIqOXyzv7SanzsraXDty7ArhUURa9o0b1PCtIc7QUEp8YK+WqRdf5UDVjlexaW0gL00BDfgJiBlsrBqJYZeX3cxURjRTo4urywpFQi6aFrqSfm+C7SENceoxObHnAjtKyZrKuCwgG3rbMfyXX0leYi63st5Mnk0tO6u3sIHQ3NyMNiNQMaGw5Ioywh4xxclmowjNZtRxMX6mbHatV8t/1csUsDXquxU1al8Po/REtjnteDW4qHJsLuEpg0S1XSPsMXtmow+U0kPgN1SLEPRajPcKBiKXp5ve5wsezuYH/jNdWajUqgNK1ubrwKUqpQKQsc9nxYpxT7yu0NkJyaCgLGo2y/gG5c1PiUB87Oisozyaho2T7NN7IwdS5JNqLTbgtT8/Ho2K0lYBzqXjn7B6+Ujc8heDgB0pnToZ4rHTL0du2ZBT+zD90EfwdAwD1kypANgG1htVHQcg2mhfZ7we92xrvxCzMT2Tdo+cdnUYaGINqI1DGoPE/mcpa8eHGRj4J8rAbOpItbS80FchgweLioIddFkAL3gUIxVKZcQdQZfW477ysZAahy5uU6Vf7C1n0kTmRK78g==';const _IH='ecbf188f61490c301ef3b3c4a7f747c86acf663dcb09de2580864f8e3b154362';let _src;

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
