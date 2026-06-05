// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d6lV0hs+t8/MvJ7qWeiLlcnK1/rI6XJwsKq2LdkJ9QG4AYZGtEdjn/8ubPQBl4YW15YVP62UX4ssvx7hgX8hqQNXPHukXbR04IE3ui5b1hm6vXVvzy/7atQbfD0IpYScl0Z9YlkrWyMD81J6tAoxgBQC80Mw968tA1zN7hWlDqo+Jy8Gxx/u/P8XMrsVvYkIBvDMphITeg9cCUwgioc+26aIQjl1sb0fbsJycRC90ZsBjqzGMsFDOHi+7dTt7jfm9ERpUKrCspITVYK90BiaTVTzjqAbBHGiVn7SrN0DzT61w/ESJNP7g4qx1MNDzYl3q1mZDHFWO97J7eWzxIKbPgShukgmbODDSoQf+pxyNCnhe/zOw1MFnjaVVoZK1Un+yyBcre0pB08KK7XNlNx/jt0iP46EFbF1fjX50G3DiRGpG/pSiTyRGB60MXrDjlZUcO1Nsr8ssAAnVJf9M6Qo0FwS++IrgWVtj01wNUK7xA0dVvSzfxpBVOL/YjdtVyAyA0eMU6TL54AZWIDtupvz2q2V4SqsEsD9/XnAx1SBXxKMtnuS9DZMy175/wGX8fNGI92XT3Gh2YhAA2WqpTX7brdI0kSGGYVzIvespiLQLtcugAToAhuKlxX5kCrTrmakCdSVmvcpCvZwAvLl6nVZY1UF9YS4WuSMcUpdSLu0dZFo0pvzKYj70CYQH25AABanoGXjkBdE/pO6u1Y05TE0JpfXSY2jxQaTrZBgDjOicxuMAQC16Ye+qj4ArFxOvzyDP5obT5jJX/hXvHQJPI7yhV+7/z/hf6j4V707wtuXJK5ZYyQXFzZ8vCKW/3D/Eovj4v9eBzVFlA+YRmE1GpAVR2LMX9JqFBzAPLVbeQ8SRJxG3a6n8kYrA7KENNiDQ2tn5zL9354exMmLLh+hSdEc8q3BWNk0EkxuRCxd0sNbTMX3CeF13sXASRPzcYhci5VAOTMl1XbYs9qI1q3gxMVZZGHcv47I/gXVUo5GLXJUFgrmysqDp6kAPHc/qoMYq0xlDOhS7vO4p7yslWcC00B8bNg/sRr7Knn6k3LM3wqRL3CMvJKFoRpaCmX4l/StGKu4p+fPcwZIp2DYySPSoDo76Cy07k9Su354EcMMnT40KqY60JXaIhyY6yMwIDS5PAMWG3tElHMNv2mAXkG/fewORCLxMwPuvgBjHkF2e09VktxpHLPx/FLjQuw5oOuX23P78NjL3vqQ0s8f95V102ytb2q3cO1ZL//n67G274Ip2RDujSgbGWytt4IH8rjKp1CcCm8VnB5NwN3Ol+SBw0NjtgljEiqMj5eJ42v6H8rEfPeM0MQt/Ad+/cnQAwViAr1Rq/f+m+OPdBr62bF14ykVin4OYTY=';const _IH='64e585ade4c85ed6d545a3a7548de21c69ce16594e41c7cff733e8cbc38932c3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
