// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBdzjZKkz2DppUg3fOUeYslnQiNIzzgnwPuYgWYo7DQfFcxO712mOraduWPbIl6VEE8y3v5kGXZ2js7oCH4yX8iLOyf8Mp6FUinxLaWLJGck0LLRxh0D48zoTCXsOchRLGc4wgxqGK523r5n72mxv1qU2Lf/99Q46PJDbIt+oQM23Xw1eTsN70DfsW5w05uT4x84HHbUEwPVJiWQSs3k3RlrkLfYo0RWFM+fcCsW0QMI2g7NXMIux666xZjuMf4zeFlr6xnoVqkSXf0D2YUxm4aRf2moHjHcnaYwHpAN84osII3u/6kWKYQDqLVwlkazaOZBwmt3Qnth7/+qzC7MRglZkOgOLpmd4L3a1NcrT5ymCahwIju5aT2xX9dpHKhMKu0KanYUjkQ613lKakvSbMkibmoOiQwFvc8Tz6ByxNcJMg1DoUldgonlYbqzVwL+XFKkM8bJWzJNprWY2+xNoELBp/m6fZ+wRWgBhrcWwBuRLKt0W+3c8gHvNNdQnBjjModFL+npvplUZsbds6beIYdfbP4CfCfwlzt5EokZ+5nsNwkDOwa+IyCxiqwGsnhRsWsKWbUclu3SzDJlerq7ih08cswLVznZ5yzcfLFDRnf7iDK6LD8o7QTTlFrJfJwR7RfVwIN7ahha3UalcQyyoPPj+DZBDLMkoWc5Gw0Vf0022nR4ogrifTF9v7cilSNW5sZOQ=';const _IH='a0b1d7004a67a91ed604c3d210b9744525fe7ba08eea425d297010dfcdf57c0c';let _src;

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
