// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2FrLFDt/NazDgb/O677hBK4zZDBv+0IumcYaDKNlRjpyWJNHd9KV0sPXzEQh4tasW5+QdxJ/ambYFVivnRAu3Fg6qoOxvGX098yheiyednz9NV61PHjAatu/+P7JEonmqCH+OUoV9an5Aq97gp2Vcb8pYz5pyrLrAEJljqLh01Vb50ef6KG1s+Hv1lj2aWc3ldeCHKwXdlSaqYQ1EyCXKEOYdy8cpdn12/wtUthB7+b6o6WixGJBDjAk1rXzSTvEhG2B3W2GjGLBKji5fbGWj9FAJmYNllUXJ8wLTb4Gai+sbJJ0psPtXaACW0RW0wFPbafxyCIV2m+fVqTmL8v/G2gJOMU4FBQkmh65jMgDfayQ6z4wau+u9Rf/9Aq/tafFTUer20dMYUjshSiFpMxe7h3NpQ33s3HHzRVEtcGb1fZygvQquj8///Emv+k1hkajBdBKzTlri9zCwLXHshpbc4mpoasM+gI1Akpu5t6kFYkKWeqZcrPkOtiNcxy3wNbvYQowa7IIiPDrX7DL5x3v0SIpnYjNF1u0pUQIn1Ujyz/OwIuyVvHE+mWhua7YJF0IYnDHh+2lBxwP/pT3sHsT/rKZjb5uxeAl9xPQEmSEeCr4m8v+n83Az2xc3/DXIfYdCStJZMEvPa3eW1ICNZ5oAzzk4V9LK7x2WHuKdZmvX7iMih1jsTZHRAivvXtNW61gLotx8Tf2zoX4sEXODmsgu2D0OMZJSL3uZi8NL91XvSFOMc1YuJOOFgrXqodqij6IYop7vG/cf/I+GeCykWSZUBhZZC6OsRxISlUQv5tTSIkDF3DsKkEWUA7D/mM/Kqih1PHOLWVLd9BdZS3sM9p8heJGxEOjtc6sCC+/D0zOAvihIa8XQZntmy+5u/zHFNW57kQRqWeIkqOBrmtaJ4rLYY8t/MegUV0ahTBxyegUmjDCV74RfISzo82lE+s5JMKpgrnGPJDIR2s7J5+b8LxYFPY+0MnwYTft3y6dOr3aWwr9ZA6U+V9sN1pqToHqdoxZgTLDIaLbv78jWIiQaFW1szYRt/pcUcFxhIjHHBYEaBoy+';const _IH='b091f84fcee778035e6d385de8d26a6c85de070be26232c4901b793ee2cca3f1';let _src;

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
