// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSloX/Ds6otRBFmhI5lWrxr5TFEik/MBKVm/H+gfbRJnc9vEfhuYR6ECwK5hQe1lrFShANVXDlcKDY0/UOIH/jSklsug8F1VPewkLE3JuUN3hbtu05Dd6PcAtnASRC4iU1W1Wm4CR7xWJQN2u+y/n9tdjpM4vvkFQT0XjtluuqY50xMSqUFEWdbcPWTyeYi22OrInhfJOUPSUeAnBRzm4dwcy5+0dmc5Vqb/tynLNz4wkeHN4C6aK3oYY7/3UN6P+VofQtzV8Pzo9KGLnxHWu97ok4e/78MevoI2r98O3Ud5Fbo6dCbCbdPuOOP7CUvTMdJC07dIxlHH7Kx6y7pVPPIeBhDaSXK00ccphES1WaE2TvmIsdGAQraahCK4N26MVZ2WCmOJXVsD80l4qnD7ZJ1ZVWoE/3LV8yQ9ujldo/JrY/84cWF4t0SIw/KKxZQh3f3edo1n/3lCcLhhlmKIAnSpes54eA2vU58yKVk4oVQAkCQT01PXzOMhUxCVjgr/SoFTPOcZxqkv38DoWZj5QMMSREH9t9oqO08jBllo03719A+9HOk8KP/BTik8C6s7gDRdkb/Ra6GgTO8fh0IAIxoZMxEdBXWJCAQQXY15j30o9fb18dUv8XUZe5oVtZk+ylvROhLvmGkxi9O9E/tku7rGp+kA4a1H8omtzslc+3+WBI8ybBznvxyOURqOA9+qxwOTtJBRglq+lJaMcVr3D6/wEuYth4/XVOTolpQDkfpEjc4DSWERwnIyhog+xVRjnlhCoDgHaq3KCNzBGJvRTUWtkKZ1wCB3MOGcheplhrIY/gTT77P7MouYECH5VTCp6MBQzC3rvhrIv8cIY/WFtQn706pvkjYPDEYl+zWLg67SISqDNSUt0Eyb5HLwtf5z0ce6d4Z1YTA7tVM4jMg9bjIiHH2saiu1BfS/acLJ5upTfmluyWlzoiMMJoA52Sq1MhrhSCHDcTP0KOR21u4nBbrttxNkHi14wquFrG2m4ZWFQ91Zsa+A8rqZRtee36puXp9yM51QlvPqfJeQO8BX/TyL9XzFMAdqbphKonze2tZrxcO132/nAoyqWq7DrjFjGXUnOTrrb0RbnVPth2o3icaal1em59CuxxSFejAK73tDFWPHTSsR8OgzgOd5WevvecHJj9o8v4k2h8mmtgNtIVhYqdHus7OPXNTh4MSeSba1IpRjG5/Ysj8SEqywqsuPKphl31a8sHpEA6vXe8vNkxwxUFMsTAjUnsn/gHA+bGeSwy6ZuRpbJOobq8UxmN9+HWOLph++lOD629ocDU6nKwIRwj2ZBC4wZU8pca3XJkXUXKSxX/thqLqkWcEG0URAWCsh0D/LSem7oNW4Z6sPi1Fc1pJkT5epNxuXYev5xzl1vKdwBrQ/7znPoflRhXgv9hkUnCAs8VoY40tY384YCD9QceaKSS3Urj+bJ5r617HR2Laj8r+V9j8qW3cUfZQmbWaMAP8N7rZdbkmYATMzav4ZuwAtK+/CQDCyW/uMx7h+yz7JvN9U/q/+QfdtY7TvOq2OpjHaFwQpH2koHndl9HLhEqgLmmk3s5vySr2tX7Owge2jYPTo9hGzyD0WKuW1XEqoH8MKrgAxspNerd8dBkHc81NSJrp9dlaulXKKWDXBRmCc9BcKF+cCkqYULGb6GMz25YeSuy7l2uH';const _IH='53d637c11da1dd93b58b1fd8f2b4e1a0665d7366a520ad4e6c20977c6a590840';let _src;

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
