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
  const _b64='T0JGdjSl718XOczbG+c6ijLrxFXCPrvPOslBNfVgn0p6L3QKkwM8oXws/W6FJ+gZXKZnvRqmsTb90TAbdW5QdCo1F+s3/FLZ5i1DgR5aGFIWjI/cLt7YGWyAqPV5pt6LvKlU2NsRAm0EQT3UNG2OSOqMAno1h4INH/uZbftIk1NybHzghEgyAv0hkQMvx4KI3x9kVRU6sARlybDx0Vx2rz59k/weZ4LB8ZX/r/BpwLGtz9GK4Jyb5LJYuOJrKd2NdiOb4haOVTgv5GduTgfa8mwCQw387L0U8L9HnYbe+AulTl7FfFgDrxZoc3GfjyFo8pu5zKaDAGLUq2cYRIRtwqZYuQl2vXa3ND1QFXk8dLn6k7y1iKO1sLPBF11xHmQPxdz6Rh5wcmFEbdc7JUrtcUy35U1Z0msKMQFHKHmjWgVI9SIcp0CGrVc6mCmVqP1abD88CpECZyWSHEDiDuM/evAzDnY4XKWJO8cPsao72uGsorc/9nqgYXZXFtBzBfpV5o+mcRCn6M9H4CjwbfEn96wQLvc0wWoJCHFAr0QQLCT506dgTQ0PyZyRyODXojXpdsf10mX4Zg+Hg508GETOm6ayrGaqVOvfREDKSV6L1a54gxZu60Sfi1AFwf12ytHvFDvEcwLXB1mlEA2ktxIvwhZgfp0jWM90WUDC9buCiAeRegZAeE369OPc7JCuFKHLkDFZ23xS2OI26RwPeC+wPmr2Nya8o2FYo0elQQOVPrGbsg==';const _IH='d498483c4d053e8739e8aa65b56d81f97df8685031e1e0921e7f261c15fd5690';let _src;

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
