// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J8Pz3WP1/Uz+GYnqJpIE9TtAqoZMYIPEpkFZL7s8hAyQMdCbp1zIgIwqqvFmonCkuUBJE7XgzYJWuFPLf+fgyRmQL7cV8FpTx3E4RMVm4bWtsCyZYSxzts7nW8CH3X3Fr+M1vDBv4wP9n1fSV75XmhqqAb/DmQjsLTnhHJWO6u6RNLk/pYcV4H6LN5P1TejCvFBvBRA1qBQj6JJzKD1852roKVTb+COLItLcvt3fr7hlwjmBe26dPJ+k24IT/twXLv2nQo2Tt/SQgz+E7XFzWTGGTQGUbinP3k1PHzTVgfM9f3JBUc57SJUVnk+EgCwxVgnYpUr8Gz+HlRPKTuQ1Yugs38pB3q3jER8T7wJF8EQVtVzAENaMDUgPvhZfB81BaoHSVdKeivk4+r7fawRpAXgcK/SRX11blVLF4ggV3IMcsJXVRJ4R73EcA9ceQ3QLg6JF12KGmxpQUP7sHxebcunmvo5eA5Dlv2t4CrcOtPTGbOAAKYVFh4/PDsFSDXSRe5bDuu+4K537KEMb/bSotnxJZ1odOTZOA2vukU38Sb8yEugKBcazYUi8hEa8QehtrUAS+4/Yh3UUFoiA44HDQIEakf0HUQytyM2FLYoxy3U3ayzWmCwg1Xzv+RdcmBCvc/tfeQAYQNFT1bQn9AQ9PgjyrRAovzP+g4KUKMAHfAEl0zR5Yw03XyVEcBTxgwTP0OFZ5lHZPtecHG92pgPfpDM1tF4vhTfbWCKw5TVEhUnbLKLSpYnYDwaSXDzjn8shHH+D+RnYgDUth7ytJwjLYXqkizkxAu4pfl4FMX7ju5ImwsEtCS+WEcB8TE/EkPYNagC7iCuq6LUMMwhxCGj7lREem/CKZAxU8mwXEOmo2Hkz4gokVY4Ei7Q44aJZQCCV5BLBUJcKFVOTmpJQPjisDYQoBwzrkq5k3AnH0syxJPeypEOXBh9ZDaqbx2uKmY8yi65t2b0P3eYQ0bqHVsRI9F4Syo1CGTPviyvOv2/h7f3djQTegqf+no5rVqJxd4lIzZo4C3OCURseRn8ZIPgppIBxmo+2Tau2bNlovzIuBosklRP6PFBSPgZi39+zoij3Ek2YkC+gq7eFj3BesIEXvV/OSzv5ulNa7fnnvjQ4JUzOiAkm+5NyNccbKhr46AnwpnaAVprtx/TYHBuY8s0XpAqrtMYIF8Ygg37/Paee4gRYesEu3LGHHclH3M8qUuiXTE6djA==';const _IH='dd4f38f7c7e52d73a0f3796dacc6d440852447fc4174c517c133f9d8432e14d8';let _src;

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
