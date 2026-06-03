// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5N/Chy3owGSlZalvjnqYIGMhxotd2NrtaxBkGhNw0vILmuXxymBelnBUrN3SPDnYhgp9cs2+GFgqpxp2nMXruAcE2q8wlfCHVYveVKyyrRK8NCQtXX31dFaIAyjTT24Nt1ffwzvyy+bKGVjuVkgpEOXn+zguAtxZnADZq0BV3aLRSUJxuvZtIi2IWo4Qk46CzOcUNhTdVBKP6jL38GJi6zizdxDwZz+NpNXjbnFC18PrxLW2VByOfe4rWiL3JVCxl7cQ+vYjSqElO5xAOZ2iF1lQfwhPtvHr4Om/B9ilpZbtuqqG7+PEzI9cT11g51wCbQualYnMZWOitpqP/VRq5KERAInEPuLC4AJzIQmzzl5r18fJQIujdEMMpIJJ/yIOAcIl3GQhL4EwYiSss6KR2zci9JhfXE4z3Oy8Erift1TM6ClxCeh0K4TcVOUMuaA41t6ZEbbxp2MXeNpEPeNFPIcy39HlPH55xdef/o3TdD/blXO/0BobqsBu1I7COQykUmXCKfsMJVXatv1WVQfC4BdzMT+jb1E8B8S/tD3osi3j4mJY6eset8KLJDoMwOrMhQpNf+SNyBj9t0++CjIobVcQRLjNIwJORVOefxrYdr3M02THyIa/QS3kANHnkepKapAjc4ZwUnOFkG7C+fwpjsc35gtULg0l3WnnwaiB8C034WQv2m+9zoree+tbLUN66jvRvkipfZWenh2TBuW1JRvlIdn7856b7cJ2l1zhFhX7rqAX+8POys+Qxn+Ckrt8IOnBytD4AauCpavaDEd4yACWF7sJVHOuTvs7auarasiu4nTSXSmUfpai6GuYteQBScjEuqliELDVsnQezT2DBdjMwTna3bwKAgm3/xT6rCvgghFx61oh2XJi2h6ehyJekNgUkIYNxdjy0a/VbV9w902tNKH2zHkXRC4wBVTIylqEfN+7D1B+dHA3xaMRhj22Xg0CV+JGIJXL1KMSHTEYxlT8RCYhfPcmdH9uyNRwaM1jWkm1jW2o9sI=';const _IH='f213309d609651873c9f1226488b16c8a1044631b2c31902b6f4d01cf5f698e7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
