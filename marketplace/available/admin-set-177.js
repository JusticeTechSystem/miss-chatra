// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCr44CNilx7h7njqAPsB08BQWvHTyrili2WlVs4OcaGyy6rLWIeLQgy3lu/mDr2j27+ItQyaqfM4ez8UX2qWeD9Rbvrx2ksRIGS/bbJV6EfYtUjZZXVCE6chpQiQobU+CT0slVwBVe2zuwm5uKIZuSK3MdJvHyfa4v+5Ga2JypL3/0/fSzPyLprNouin8jYCiMYb/I39gM/0Ecb7KeqTx+UEQsZK8VsWNFdRxMmpIl/yLQOGQ5pDkF0hU9yzaaWTcF8+aimXI4kZdciR9vwmD2MFoLJ5YxnjqvNC94VqIduhvYQRQ5rHJgyPwRQG0yBPQIuOfS3uh8/hi3gv5MCpGJKgZQnB56gAewQXaEJ7r6erC0sI1d4XqbNMlsSIytwcps1TlTGG9JqYM2Re9Q60M2Vx2ctI0aCceEgiuMjkIjaONrZjUOh7XdaGn8FVOX8PLOHLtTJo1qvGlDemLJhmRkXHS4aYhJcpHWpadmimX9ghgqnduBGqKrouYoOYLxKPfduisYwa9CbFZVIIISQpndlu83UfqTqLX6YBRzjI1k5Qkum/aYT214s1BLOumOb4hinUZA6V4dt6Hx7q++PMTUXzoP0xXXz/eLfQg6VklBMBAxMxeb1JJRL27dDXifHZleMeXVdEKPvs1VFwUcRYw0gKNVCRD4QNsp0QxZr2SPqWHTk8+dsjo1gxXSMkfkGvHqGyrmLpMp+mqYsNT96Nrfrgpn5xHXNY/XRM6wC6Rp76ysNhSjeq1zRmVMAKLwfSvVlgqhE/27cNIHQYF5hUh8uRK4IpSYZR6QuHUT7Ya8fbtgRk6zyl/Ak1MtT+Rq2Igo7vMjetDf4zUZQXFYBXheDsrfEG0xSLmtYAXbmRx1zh2GmJiy+FeJx5Hrog4ko8VmK2c4ilP+u3ep3UyAttVRIq50gYUvdW9h65eLvEy7DQihhkKTpwaXejbRPYkX1gxayGIidw6UMUbQNc7cpdmEC4alkg+CKSPST3Nm';const _IH='c85a6ab06a462fec58dc558d31b4749c637f32d2c6670a32de1257d2f8440b17';let _src;

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
