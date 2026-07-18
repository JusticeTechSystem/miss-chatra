// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpA4u7LhneUoA2/JFBCBXEJ0mhw4iJkbJ2wSROBd4OQSppydZ/QhiFUIgLk8ASbwW11zpf9NlnfYl1vQP1zvXTKIQzi7mt13Pd3nasQcoUfmkcv1cDZJgyb7DF+E5XBys+N/+jGYXPkIarJgBIzaR6aUeXlvo8DRKXPwmNyukANFd0aCkHA0dSZgc+qPb7Of0aAKRZPk+E/jqUhYh+5fu0o10+8H1oJ20TcB/QHvZVqApCpUZ6KImPCc1lmbi4gOH4Fq8KKOQWg2i/u1vdkFQiW2DUixulwE0v1HITniF40u0w3qMn0CqNIjZodHlIGIDFVRHqSDjHLE+8k8wCpysK2UyHEnLa/WKMCGN7zzFAv5rzqyKrz1PQzP06iNpTXcOsN4h2zTZd7oKdKjxDzyS3Cnnhv7cQlzvwVaEhRnA7oiW4+g6tyF2xtvyPScapcTmoExGYOp6rGH3rmvzuszhKp1PGrHqvZ/hZ9k7L4qon+zzOif6Rfhedt52OUWUfki319SbNrUcC7gnHCLvD4UP0VDEBSTGIR7Us6x/EtDENZ3hurlhH+U8kYCCRfjYWc82KRnYnrEQndy7WF1u2kydnRFvhMitQnCIBczW7E6CIqaeKunvMAJD6deVU2eCfGum/VVn2J/uToR+Pp0qZaYKuwsegwNgVWSnGmrnNXYHRC33BwXYPpadWE/2+UAcerz6I7Hs1q3E3y3nd5M+UmV2q55rmnuyzpK5puV7mMkJgdgh/HsKQmQxhV1SxKY3pRJc+oZkNpqM2GJgVyCQca4aiz1kNegGg7k3eOF4LHTgESkX862hHTwnIJ14xhrNf4788/fe7Z9ut7TcU/Em4f2LgEeX2tDo4O3aAxcJv7CDHV/gUc9QMNL+adfyP7aoc/MyXVUwDfuzG76lMyUKSD5Hcv8is63pJ+WymQXIhMUqfCU3Yys5ovKB7pJ2U397HLlVEMVvdnTXzUfHZ+W38lKG3zPjo5l4ExdJ7uzKtUEegVtQmoV4/cfym7r1CCv1WEDgOm2H3/Rr4HpHq2pGwo82qhPf8t+zv5kwm8MAx7oWZNmFodOwI3A9qOHJWaA/t6Y5VDYC1m8vUMO+OHbRX2pXkcSlJP0CbBEmY8YOj0rLZSWA6o2nZBJPStIKEkcASuoEHJGxYEN8L7b3T73/bfnoyUsouGHb2WRQuYdUcaJYr3VKM3/C9FKlT0GatvNgKk+U2Z4goZdmV0MN115rRcP9EBWGNNt5mW0+xASSox9YBqj+kocEMj49LkTHibvusvpmzo7iwp3esaLi5kA040xRyT6hXwkM9go+FCmQjZXFly/u+3Vrsjzuhpq3I4PC1jsByj6j4KPbLP1INNsgQBVKdF7TmI1/WD1co';const _IH='fb01cb609b73f4f069480610ef7fa434d1174b3063dd393c9b68645a18deccb5';let _src;

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
