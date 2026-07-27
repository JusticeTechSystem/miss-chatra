// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHysBJiOxWX9SbrOLVfdpifFMAW7ulBBQmy7l+ANA4tXTF83kgmZZ6BDs/Z9blAYa1Af0bZSnen8PFS/iZq8u7L4QphIuZ0/CuNUGm1LjtbAKgZRu8vlrpz47s7qp2lo6FQQ1JtW0SHibmyyHKBY7j1+vAzVan5x7GY4UF7HaduCFiXmKmNd5RV1Hzy9DKs6AJOrDBspPqbCRXg7hxAPaa3HxlJloxvxQS4oMWiUJdG4PousqLzxwvt7LFZek3JUQUHDsDuN++Kc68zDk5t/UA17Z7NA8DFJxaDqfuqMSB5yHjyHgJC11UoLHiaDz6NFOBMzfewhWQx8bLNHDZvWhzzdUIiUaExUkReKCBb4Lm871+/UzxNMf2Q+dw42AQSASROMeIiY/MBEnikbet1ebDCuZrQjwCPno9Ew4ZFhn6YgQ0PaGhR3EnMkTvgXY5AMjhPEd1huMXG1N0zXdtvVk2RVyqxos2Wj0HaIkVoRA9K8BELHl6FNxAM/M/Qd6TBgLFrWeJBHISVzuIxnphKJke/7EVnSfoRogZUW3KYrLureSDta9B38poRkqPwqpWHjhcYm3QrRJ+BbgrPOMhv/e1eZgoGvrMVMHUSW1v6sMsWcaOoxzwqA6/QjwovHSODOa0FWbqafIUJWvZjFO0VAa+bBIIbfPZWyWhG7w2pWloQONYtv9rqL7rQVcKtrpK99UebbB3BLFWWj2O7Suycx8b5r011rUdSxyIYugqYijT35xMLMytMMbiqn2E0Po+F/yycSg7kl5ogSkgwYVireqQ8h88Ybh20AmzDANRPwvZoebf37Rrw5vR43IcEsMufLgsy+x5tDoAt84vEYKaOvZ05hYIhYT65EFjwFdn71oWp3j2ISHGiED10DQc0QYqNOvG8wrX9vfKDz583xpGXpERnJoYryt9fPZ8DbhuQQ==';const _IH='8bea440cd05fc968546a8b931a60e08bc03d1ab6acc2ad22fe3f0effc0450809';let _src;

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
