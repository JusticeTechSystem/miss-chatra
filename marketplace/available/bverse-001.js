// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5hjHFKmvoTru/PG8eTAnvXCiaQb2GD38nta3cpC/e2xJJZgzX5X0VYBGCHB/glEpP21D7lPqycHK/dmqGhBPFsi4A4vS2mBPLc0eTUkIAjXGyXmb0/cvpdMMUHmayhySJt/BfR29B6DQCE+lAOKgXaRyzY8icgHS44EUjiL0Sst5pZJmRxTf80MaXgPcqcyOAIMYHhcrQSe5tdcLmzUQ6LYZQ/f0YJgjfABT3UPAfM4f9Wiw1DaKJwWSsiWihlQiBPOZNyeRf/H8ujnKEVm/S8pa4G0t8BVrAbSlgj/YsWDmygfKoMJ6Pey8oQfQWEc5qZh+i2vibu4Vq5KzxdvNDZgXZJaX42P/obVVpHYT5XYZU7S9EpYrKxGdNKe9q9PaGRJVTSPGZ/3W0yu4dWf9nyaT38klEYjn0kRUtX1fkVq5VjguYvIM5YaXNVitF4+Py74elIOvFEQYLWSUXu9pMnMemNBmFSYQKu3NI9iwmtGNwchlxlC5wF8ckGdKeT9YW8jLmJIzR4HLHv748gMJip4/I7vYYkP91S2ahqdzeWEAwuR6Z8TfcE1r9lauiFKUNl8dNZezEJMKdqvEbuNEiSHXKS4Lw7EP+rKpz7hIhlCWOpUKLxYoQ1Qv3ZP0jKgP8jnwZcoSzqA6NgOCuezH8Dxe3AUDROjfcNOO6Kpz0QGcb4l+CGG+PUv7fqYjP0zOQLx8qBh6bj0Vy6g==';const _IH='71e2208c1de243b124860ce9a8ff5746bee99e7ddde4913953b83bd0c28ea0f1';let _src;

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
