// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxVD+e1sa3CPKsQrjwv9Dqfh8ZsXarWiycjV3q55QbSQR4vt+xkS5qOrBIs/ESr7K1erMYu0l4g26p4tZSb8pi0zC/U7XPtthPYKKX7125fyeV9hHaRqq+j8Y/LFcSM59SLtT/dLIka3JYrVUgo4YqARs4Lu2W3uGg2JwExCE40A/foFS06L9t27B8b0VeVRqAoSuuwyJq8XQjs+lMkiM5PyL0b4wowv2UE0s/T3KFVlBREIWBFLl8UMPtW3QzBQOe96rYLUs4Br7eUDYyQ8y08IzPiNv5JWetQyn209C+RqOnwbuJQar02/6Yxz0XJOm6zBY1uaFQaYsUT9AB80Qj3F94/2VM47QYK/rl/Wkpuw79yCobgC2Axn/LGzwVgWVIrMC8g/v9ySIMhxDbT++3E+tO9jbvfmxlfaCMOrc8BwpFAoIM9jd6VJS+lfAa3cspy9bChUAOauE0UDoYkStyqo9SSq7esJwSETnWJozsoMJ6K32Hfj/fq1Q5jBGfjCSSAgjAa4G4+ZPTwP2yw0ZwTwhShp/kAH60Yx3lKMHvqKsy7SW6ej+12I+mRk8p0X9SxS2SyQ0lW74JDcdLNAOfdEs8XMFaqfmMGRqD9n1YhvgC2+VTWnVey6xBM2GYxxkPW2qmztLlt69B4Z4j/Y8Nn3V50sCNZRtehsy3vmci9KpA0KXkrbvBrIG1nvcr819PBmLUbHY3LbwhF/c+aqOxVHrnFwUwJhnr3AOrrgJiCGQ2CMrivaPBaYW/pyRZk+X5tMx8yELmDAvRqlJ+r4/nH4kmO3v8GP1mB3x9H44kjkoiem6Bj2CRXHlQrSAPaGLrhWTmj3WSYLB4xK81Wx9XN3QwdXXQDFlLZTbt+8EniGJmdHc1acsfA6IGJD1lrZXKBkSK5/jBFvsj554UijqjwtqXB4zJTTPRrZdrGbklfBdJcyM7GeXc4PWHGZJEpVJ+KNn6G5u9+VZCNn0QnBkVcbx4HDWkgO43gQstlYu6FLMMGvrEzudykiRb5Jm3MHJX4L06opy4htJ7xl/SFGRe57atfIHDxEQF6enCYQx4Aj/0+Lli1y0O+OEm0uALzmlxun2MxF6rK/GToVDTqDuFSCP9fuRjTTlId6A3wSKnCxExuK1JCOode6rCDjjEQ3SCQlVLz8gVeBObm64QDFfudJiYN+i+t1WLCHHfWX8aq1vK/FvxqYNI64Me/jSgSvhiI7dLNno=';const _IH='ffe74c6b5499cde74d19fba5cb1a40ce9d68780ff54b46381b43a41918a6874d';let _src;

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
