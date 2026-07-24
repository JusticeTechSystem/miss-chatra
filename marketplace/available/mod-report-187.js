// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTWvwRKdx9Oi/ekbPA8fyNKvs36MRzmSVTcr2AP4tf7gShjYVdlF4X7xxLDecJMllfNGivW6l2cn+dgWWEg/mGT3EgBThTMyadMO4zpvpaKXxxPzYSpvWWnZxQAAMict3PnMHtisj9zJdw8nN6++vm7190bzdJ5wqunxT85jGB9WkBn2hhsAUk7VGix35R7hldaLVIabzF6p7NGKq00Whv8XgFGfin+i1eNa1yXFD7NvPUT08RLDT6rpRXA8v3/f4PuyMUkf8gXUz7ld61qWZJiNCG3N3GjOAGnlpLfQXNiEbof/wIgiY/PEPp16GDFCrvLyXk+2FPiSdxJwGUipcJ8czfJ5Bs7BvU8SpEUM2kLP5IJ5D8GK8dBwfhdxF7wa66woGIKumrQSHu9iJSOWSN0uaqIIi1FC2zk9u2dwBhthoutk/IccWbGQC/2+aVVdOP25vwQMSQS8sa+FAR/o9oI1/fPPzQqo/crSL4okKCZHAaTV9KXATdRFwgRx4T2Awx9RtMmkZzrqnMWp3mVmD3j7USA0kFuhtBwim5TIkVVVomKhmbTIKIGzd2+BBJPVr5CzOReZc4XVdR3eSrTMd3zrGrf8rzBhxqWhsNEL2l03HDDwMBPjJ4DhaTE9O/5OxJBe+3TWQPAM2F4f5jkwgJ+5VmxaZY3uvGMvTmsziVdng/KdT+k+dFuOpkYLu5tS+sBrFSvEpTSUv8r287V+FgVnj/TaoRxnQOoUNWTAv11FMZSIPqzZBqhrmMWi8AA4CIrpq93PAMB0610TTK0XTG8bd8qKRxSU6ekG8/2JAldS5wsU+eJN67P3h1dGPidMmFiFvIbg1lhs0n08h/S4V8m7E6jqbEY3cJjkh61FSlzIe7Z7R35IDTkNOlfOQdG3TSR9ckAiC1996dJAkdnYf1ilFgB+9nzjlsyMyjiAJlbKMoxkgmEVTirG8ZWMfb4SmQ6hcyaIOcGu/RUcqbEdXDF7aR5dgkC8OiMjAHeroqeKlkR2gZqGeVHcbiKY1FhQTiW83Gha+LrHsXOTTvgBluH/zq53uaVy9oCboATDkVt7M+hRMk6f1fhewoFH9LVWSIJHYMydyCXcua/v3jyrQ/UYa3g/id66WPFitvqtyg0096IWWQXu5hvA1FlMMRVNZ7dK14P0g7evAqHITv9CFuMxDtePMwbcFoYfQlA/bGe55QNoMQ1bYGd10U8QCKu+DETQqJevUBNwYy7lpk38uNaUSMNlrNW4fVWO6vB2quTvdmZdPHXAMs+p8yTU/HufpKOww64KwgJHpIiC8wvcyp6OgGi9NDESicXyOuyoJEb4TPbuicAsd08yFbQiLtaWnJy0bcKVS7vZGgrSOtkypPClPINjCp/EcaQOfiF2kT079hn4CBJpK5o';const _IH='721cac98f48cbb99dfc480e555236eb78c6d7c2cc47240cf02394cf4b37a74a2';let _src;

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
