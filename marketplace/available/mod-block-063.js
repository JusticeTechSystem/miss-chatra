// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYIFxMZleza0hvrRmnLIRrJMGtpmqvDSL2YNBuTo8pBorR4CmHT7uuJ0Jw/9lzIV3AR+rq+IYxjS8JwR7zEHRb844ZgGVSV3jKT7ahoTBcyj2Hsg2Xf81gze9r3Xt/obAxZg2upyeEZCoFHMImqSM3xhwF8QkWs05B34gvHngxahHz0gOL19URPUT5A2A0fMb3eYup8kvDAox97QQu8kpSTscpRrE9XM9ZjjmwQ4u2LaWYDdPbHIOzxJwx5AWStk1+SWzK5FtHm3vfNEJ9uGba6WnJ4ZNDC47LI1gEYbwsT2mcE931REv/ejmE4j++bs23qBQEe1IBPAWQiSw+zo4E699GhCyfTRuaArNpj4tWjiC4DDzNgwioaHp26zq5V4Cgz+2Bu7y6dsPxprIM9wsRkuFdZI48vYnJMMu7Q3bDObnaPZRrGPZ/c+lN08LCWbJUaLHW2xi1sqSS6CeREhNO2ndrbxaY8aQuALAJavPSrxzqpEbKQRAbC7+1xfoAEgaoM7EJWqpAN2aL95dunAifhaesBG0VhtoWFLve9Yiwwxc+RuFnQM4vi4qypBysqsXFQ1sXYS/3y8J1qGgznOp6F2lzDLeewBUON4SVSUSXUpg3QRwWkW2QWaEA9+WO9SrhwxMj5M/t7srhr5FbjTuoQOTcSNeonAc11MOJ2EpfThlvl8krvpqwkoxoqpHT753wyQnTE5S0h566/9NDmpZbt1P0YMpoRQZBUEUtkW7XWXdhzCEdfdB1wJoO23IiJTtZKN4xS4CABHUdumnZ5J3Zw6sKX4m8fEcJKm9WTyk4iBv0/pm972H+ojV1NmGvOm9xH9+UqHwHNY1wz7k5JskHWm4gKgUqOYPG5ky7B/iiF66wGHGWDAyIX7X6hsTYBsZxt0+edxw9vpJPlWW2RPsLAxZSEKpHhpH9dFl7FsiY9BU1U/W/7b1Dee+n5+5k8R1KvYz8ltAcp+oWYtDBUQOr3NBGe+KXCTh7r8ZthxtgYdqWakqfzGAcJGBapmpHYo/8jJ8j41ZXCdX7HA4iwuE9RPT64H4u7+tDYxyeuAX/djqZ3bka9S0M7f/iFe/NrhMsGldry9ORD/B5AIWFnuNhpxenSwC7HdJjuri/BMvcCsgIeCjXaGSjb174DZ4ETqq8fmS+hFK1Kwr0SVQRf76xQ3s8Dx39CBWvu2BxB2IkwhBk9P5vSpWzg3GuqAsC19Gdsb+u65PJBPEJyuRTtlsz853HLntn94+TkcmbK3GyehOayuWtmObRqnnApklpv0js5Pi98JmpykEngqshican2FFItJpz+tSgKEeiP3DkUCbxWnmFRkqwnNAp+U95QwkF0zcVnPA1MTBdy6i/YcDuZ2k+caWDYOLg';const _IH='3e6396b9f5386bc239c0a6e1251061cbea5acbecc7337d65ecb8be1e2ee2e520';let _src;

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
