// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTzN4zLubaeslmZJhQ5mFba9AY+v0WgFkVniMs9ZjDJ3DOQZyhKZToQV5KIhsyrNbN8VdhVzm7bL4i1mxxkEenIz7xJtPqINgdIk3GiEBgs5iyWi1ETJeVKPXlk0hcg8dFBgq9avAyVwGu+/MO0ksQd3HGF5Q5d0Kme/rzEN6lg4mZe+lPgYAhhmND7LOlGOobaE/tXEHDWji2+5dqRxiCpBcWB/s+dmNV5Th63x6S/zQl3UHvzSmGDQ0Kpm1JDQCFVyf7sWQcn5uQK9+bWDhsc+OcUB5YNoz5FdpP3wH/bJU/3xYhXxS4AkNlHIRJB42vvS7WXy5wi4oi+3+FdWYQDHWVIiXcdrRhuaMvmHfIyL+UX6tGs9/ifymuj+oRys/7rdn7KYU+mcjBNlcbM4a14T/PB+L03BKZ9Cod2NdcgzrbqIkYesXevG7Cxcc9sWzeOLoJnectUOpoIZ3txM4+V5zC2DIsPzC0i+Rhxt5uOvF7Ob55BVhGk4K2JlSgo6J/l55U1exH6lFHPONz2O3xnYbhVD1kU5jnmMUd90jLh8Rncf5pcHc5FOqTbjBUCZRCJ6SWQ+eG8sD3GaAgwEMGGjH4pr3/9MGfsN78p/Oqj5yRoN4GgGiJSt4pBWCzZcbQmz9PdG83+aTot2zgSaigoOb5zNioUz/j9P7RegckhZoztfVBprV3tWILr4GdveUpdBerv/TxBYm0UR6LIHm5NpjEkc/CP3oPd4Sf/6yc4IXHYmS9p8NUMe8UL7FvtJ/G45BGGA9eDTDZixX7wvIfH+BPwe+KnwGZcz/vK3aLVsLELKk1rgGkRoKsmSJx7iaB8qJQYxZwvGV91Qlch2E9LDXJjy8VmXndUO+DwylaQzFCcyO3Tr5er/lZzo37psNOGNZXpPl0mT58sJjgpESKoovHLNEHQDJoqkaKFx0Tp0s7Rity+ZKOnwdTS8qiOdwVU7oFtstfLQhuy1WAXio8PuH3wYzEP1Cb45vEQfTY7u4BT3MA3LGxKXkFL6CqUH8y1uYFYGOrzAaoNWEtlRbSl8iIdtu6KKRSBcq8JCrCFVHFU5fn1jPhWNPgow/D1n7ld6jIY/GCbxlrMYTCkmbfD8Qfthk1dkL+qu+HegvgSTqQm9BEmZeF7Z7K3NQMc2OX3ANiKmJUcw6lQzwfF68BMOjLh8mlQqKrmZHqVnHaujtk=';const _IH='8014ed8b56523e3a4379ba5202223df0eba8c0fee5244f177b555ebcf5818f55';let _src;

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
