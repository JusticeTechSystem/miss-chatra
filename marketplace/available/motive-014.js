// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6f+7ucqmyEAyzBRr1hxkKGMIfwFbd+V1ZNlZiWH8u+axoXR49EP21A4RLyfxp13mvLZU4Aaiy9jlaNe9fYx5n++s4ArDtSrHrxm2ON/rLN2ftI/UjtXOzEIi7ZAXzbtg0loJ4p5eQr8sWsXfQAmBhHxygLFwZqJqRK4iX/tRJVxG9hiJ+QyYPoG1HbOj+Z4uDw9LNFqfPi6cvG2H6uAZ82J3Sj207RbzyFJzSskGKai5RSIs42enzLz/jf06D/2hIA2L64LonteuC1FMQTw6S7FsSW0HIKxZLhy1QkVUypiqjNgpA1suUzp2JJi5H2DMTAfk+aLlCX5OhWGVZ9LN5vEflBaW6dqrt5TZKMrMSuZ2/lmqemEIo50U/77Pg8azM70LpEc/aESFnv+cfnANBkoCWiUlJSZzG1Z1+wsD5DBHwK3wWNWROXoX/7LbjJCq5aIZ3YADTaKnyF1O6b9NGp/1CnkMNvK+cSE6X64YEfksfKYgeNWNEP8r6Dt5Xd+R+xPNXXFEk21Yd4dTHk733Tz5zCIhpu8ERRPIGZLyphT+uY7Ux4FarMMDRW9Yam2/NryWmwA+cEeOJjams+iq1X7Gj5p2hzJds4ep7Nf2gCqgWStPIeIK/fT41H/zAHWBwiRjmq5Y0PQQd12LPMEgoY6uFJMpUiN8DYiQW9eqS0aeH2MNu3obXEOgVP00LcGYcic13EP8IFdqTxC2FKRbxMzR8Qo4tjN5OLNJpoxjvGd1J0YH+Zqpah8dle83JFBaj9Ejll0WNfzQxMVPNDkGl0jxJ1fMZshI8bHV5Eo1fAlbNFDdnDEugeC3w0qHVvk0Iw6VP5cogLeEvLsWcswMTICyyGd5/toMt3MLiSKcrU4BXo2ai/IaOr8kGNgvtFK8JOp+R7hV0mHj+M4mO4Ws5GKp9NqqdALThyKslNs4dictB7o9fiSM9g/ofQmALn8X8Kr7CSpUSH4Rw6mOUyTcaoDmuL1fiy6VQJK5aBCwIKcBWUHNLbOBYPTEO2ZsqF4Keegk0qgc4D9pZccIo1lMnT+c=';const _IH='51c042e2cf6e07942b6dc6330fa9ed1f0f16bd54cef8707ae8a52d57220786de';let _src;

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
