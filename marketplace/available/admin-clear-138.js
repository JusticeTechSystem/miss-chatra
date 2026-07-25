// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZbqICYDao1ggTCl5ZOxvo5SsNJCrBSdvwb5bw5HKyJBofDi7b2IgyxrWg0Tsz0XjSyzsmUOR+L4X5OLPWUoCG+e3z0yuStUryeYNvTH4J7EZ9SRgL9qEBskxhnzgt2jCUNSDuHDKG7htqnynG+E51Sb933DFQX20T3FQSPSvmrNOrxov/ajV/CD9PMdOnZidWJMnJytuYag6EiIhC1Ct2sRBi1gFujtY9YVMCOnFaE+vmY0IDf+MCiNphBmsmWlVDuIS4xQncaIlk6tHBYn0F7O/13KQaYUrLJytRTsBvvYtI7rIA17wmgUHJz4FfxhaIumTrhzo+iBUYHXhdJrsjdoEl3yK4WtcOUYGhgIT5MzuBB+8lSxQjtePq9iK/+U+4qRD+Fy6g8sT/nw4zISnjo/prIKveTZ9BOYd3bUA2d79pR+dv+mjPuNjBO0kWKuOL0hX/G0U+W9HHaXDXh6CDhQeFvWW9c79OJW+d/68TsCgPEXQKZufOZeVCPKbpZ+1FUsHbgjAt593iuIBmmvaoyw/hrB16NUadBAmiE7+dfbLEUn07feplGjHkr2VH3qUGDGeCLCgfv04yFoJ3yYWbyEI58msUU2X91N/1q07Zwyhlfu5e8hNDbq28BAr6R8df8yxNRzQWVr9bY9mG87CNJekGL6jS/WpHC/d0O5ZQ+YIBz2TA/ufjDW8epg5GhgJXw/JIF8dnq4Skxy4kxOTS2XpZkuyFouaiUeQJMWq8FSgI+BcGhADE8KusM3zrx8kIRj797O9jFTJamdS/77g7/6i9cw6COj+LJ3Asuroqm32zejkx97Nk5pdk/I33/Kia68dQZeWtgOXH+JUKXYUgaKnvh/8Cj4evhXlV42GQ8kEUlrf9fEf8He76qfw5BQ24qWnn1jE3UfCqndwDahL9y4DRYQTRJLf9x/xkgyKF8vcqDDPsMZJpCDGwqR3Tphccgi+05rj/qjVZ6iRdIZDKbxfiHowBwydTxY1GShook8km+/I48iKIHIg=';const _IH='6a5ac0735b8fd2f68d81f72f68a97ad177622f8a30bc9277c876538381a0beb2';let _src;

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
