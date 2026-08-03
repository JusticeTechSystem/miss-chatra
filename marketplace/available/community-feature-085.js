// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZg9JoEFkwjU7zBl/h5CoF0T3gAP/2cB12NBw0D9eqskgDBsFENj86+jznX0jOEfJnhSI4Ve3pOiPYq7M189eDRcq0hLZGBkgyZhivsJPjgfNuvh+E2KGGZ8ynVhw61S78U2ljwLjB7j2kRNBmyH4SN/OkOzcdT//kdFsIIO/3erH3eDRTwuBg/bySTojNlmyX6q7UUJUwcd3S2QONVXrz5GsNO33NeJnmFdCr0cBFRkDAZy27iGZt2jvRtERIzG6gOWSdYQyc0nREshLdDHY+YhP14SxI19TwKzmFHIeDhu0W0yeHAVu6/vO4erk8ONeT7wP3j17y9mIrPNWF9sS2tPit951BNKpHJnbB1R/dYSRP9K/F0wSMK4X0fYUDIydYFV8FLh0FaJdXwhJrazvkxwaQY9u/KeOfeVQ0ChvBgAwYgJR1Yk8bwDnqeGGgWgDvaezD+a+ygGYH7zMxmPoR6nPNp5ECShRJFp1U2KUw3+4yQbuHiBcDpWyCemqvx/4I9fTJbJupcyltYEwmpkscVSSG/FYXSj++x1cnwHZ2ACTVCChG48/HzhDf3txNpl55xa99b/FBhDQtyH86Hxpq7zN4Y1A5JVR8ZZBF4pDf7A3bPVZFvfaH9ONznVOX2y9l93fqgDBnrbC/k532uM8QP0yq557ycwnCK9EkTT9jeVc7WnK3eQM0ddTcsNZlwDx20xSWyGyxkC9P+EGQFVEHO6+Y3wumPZXZ3PpoQOq9oBjD';const _IH='0174cce3d3a9a7eb68c2ea63efe050683260a37fd5c76da6cf26ff531b2ee8bc';let _src;

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
