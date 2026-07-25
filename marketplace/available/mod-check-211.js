// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRK2Qv1XJMjx9/OjFuIDJm8kN2hES5ujG3hyH1hixBZPa1dAcfz3tBPZKRIHsODSUp0rBog2w+ePG+eZ/h+TJRdrgrSiW3uba5Gv4rN/bIt1qaTHlWhE6zZulTF9ftkaGO9m9tikNFwGZapl4Of8d8W/BN1vTUUMtx4KQvbyRWQnxgev8a7ymeiV+QW8lNyXTNQ0hsqJ4EC2DbVl4TJgKwdgIT4w1S5JkFtn5+rbBJ//CPWhlcbsWPeC2R92+odB7i9NlRCemYb6GbcA0V3gsBoIRGHrj8JGfXe0NC7Wr/b6GKi/pFouf3RP9qRU3ChhZxxd5KtZR01L3dyNafVf5a6bvrRmztasAI/XU0+YgIRezXzuCGKG00nJzdIKRSRUi1NdclgAKD9bVaxN+gPKVdu+qB46ziP5YoJNIA6691vxkoeKK7RoN/tId/b0m1TzzraxXZRlY3WuxudO1KgQopBu0BLgAdI54KHQsl0TmOcM5wp4ooGIDz9DapheiANMsU1o5ViXqXVQe1SSo3u8NVRiCDQqYXyo/ddMiiJDbJd86Vqgjl+IbU14i14YopfjsJWjbw5zV9TySJsFMlH6ToK7uk9MAaR9/Bar6xDC/X4j6eCFcYscAYowW3TFE2nRbC1trc3D6W6kHCk4UQ0PIpVov4zVAxC433pAR40bxg+xlU/6jmRRcCY/2MdHwBQFgf8HHX2+yAAsLftlX+L8mI8BVqOBV6YRj8Gucm8jKYS6t8rAXEjdZhI8iDnA9UVIgD7KepxeudH2ucWieMSoqGch3rtoU+wYrJhH1OXcSBl53e7cVtmvFdT1Jku/S7Z+KPzrdyI3CXAgmhR9iwYX/07FSyj48BmUS8CcnuXjoEWYFSDYfRfpvYhCs2iTBZOcRBl5ZN0+Q/B8G2V6zRXXv5ASuM6efrx37R91JG9lBsYTDUI528MGuwwOjPkZvcq6UrW0AkYXO0x1SdiFNW2oXFbd1juK/x4jEWDX0q3X+1cCasXTZpoAtpMFwQ48ZUBc1JXYcAmWHR8cN+/ZZKQn10JgimiBCBVkmsr20/pmJcZFXNyRrpJ/ycF34equTTJW90SIXc8AcMp5UIz7KQ6lhtFENan795KeH8dvFGJ8jo6wPYAmO6yjTT2yRzI/SMvlMBDYYyL3qPgB62WYrt7TOfmyrC0HAhgFmI+QZelqhjCzwylWGkPie3d+ybmn0nTI085gU+3LVM+TC4VAIapxxClxLn3NE7K7vh/qr2PQgVbDjOKy2zmi9mTy0oVvRTTebyxDMJmpgJnd3XtoKR81jhIuQOpPna3mPROzFdYaH9oaY2PyLfhK9MSUbdifFpU3zR1NcENk6c+r2OkbAnN893pv/y/iOBngtFXfrznjXs=';const _IH='ec2bd148e866875a013368ce57f4d878f02cb0738ac2155dc11f4d62d384635b';let _src;

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
