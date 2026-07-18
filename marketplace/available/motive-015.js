// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrSjR4ymQlhQYvvvaXazwFlCbtVWjId1QX0ROULmM3iJ9GYHRlO8N6K0v37gQKhhFh5NoHDA7A0YFUxQf64nmZV/n2VKh4poRBsySYPL9d8u24LqZ0ez2JG816CXUZp33FrKLuwrkMemWIF6V23B6yZVKUnvP2n3ZtpgAfqdrPDvxBcgHONma9A666rp1qABsMI02qmKEXGIeBpBY9E6ev8dOBO+oCdl/SJCEAXH+492yxeBbEneT+R3EtoPm30Xk7sQFm18mPax2PVaVfT4TxNaGKH1r6EDZKfpsNbAu+jCaDVSYXyXVImclHDBnWRe75pCCEMUuBKxtzQidMOBSE7FWPdgXSf1/pEHEZiZovR4N7oy+MOB6fJ1kkp0w89wwMlamlUYMNPNcLQYgHHXbrxJsQTz4QCJIsEoNA2xp3/Aq/HdDLdYJJQ4GOhcZu4/qLzn4Pb6x8pEJtl/ryqlL9/8xsEiFaEx/m95NBJulp+s1LyvIDwFqx4b0p09ZI0V/5hZs+VylAlPU/xRF6Oy8fdxHaph2rFOepoo2ODKSEE3mqPLTcYQs0R/pohA9JAGNpYVqeI4iAquiZjp7YuPySqVRoD98vDSxdauvIgdhnP1XOcbSt1PykMHCqFCLPu+SGekA1suW37W+h5zvBju7WrMPn830e4dHrfMAod198BpHfIy71+z9zwbS4Ue9f8JYW+sXRM/WST+jroP3b8lw1h9TiJRmAQZbucNkzEdiAaPzFU9ZG8mqqF5GtVUwkYYefUuAV0EKQa8hAdOI2AYt4nU9kP5MZGKdmAWwx2sM5YvJeyJpAClnGO+26tuFDZ/yCa+bZXmYhSMBxvOuCXgQLvDwTIK442nub75BCZ7IdUscfDDUjIntFTPv0Tg9r9kY7e2NWrKAp/f6Qbk7MZ/WdoQ4VDq+2nyKdCp36SD65F9kuglJmcWcSiHyStwGOYGNtUjg7k8b3Xu1tGnNbSGdcTZWEgnCbJreazDil54+5+Iru58MnpxPCQoyjb4aiOqqQ9URnCH6wclXD1+BUbiBG1Iw=';const _IH='0b422b37cfff2dcd96d87f0e3d2569f4379197d69c3d2ecd4a048b7e5a9d9e75';let _src;

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
