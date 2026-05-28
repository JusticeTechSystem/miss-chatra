// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nfph/X4Efs2CNkHM1WAKl+4Orf3QWaXP5EZZuxct03qHm1BFpXXbR6H7ptxQECDrO4KHbwyrIfG4hghPxO++TtCb8HpqEJhgy7eqNEzgWW8Jd+u5+xaiIvGT7Mn2Mxw9PLwmpg8pRPmh9/cNiIyq47SYjKbH0vHJeryosEhBFdrcQofxGyvkEh9/FzkT3rb8kClmkIBx105z4OLLIwmdhptcxmoaqJ70Jl48Kd2uanBL3xQ4A+jO/JoHcWq9HhD3ItAdnIMkhNLIOk8Gffo8v1Ly7X29lKaTnV33EwU+mXi6F46aObKVauwszFv1mQE8Y3oP2rxpl6IIhfrp+DbPCi+J/7fq0PEbHuCYuG2KZcxO5vcEyjrTJkKLjhdM+EmZwWS9e6qnfgMYGIHqGTlPPXXYfHxYfwzNA+fe1xvQm06fg76yrYXv5t0uU9rYJLhPB1uAnQccf9yYmYSVDebtoUp5z4xmP+frfb68C8Zi2gFq2Q8od3TyHD7Y69wWZyaq2tvBbPOND3ssul1xirOV3ZrtD7TP8MJAQrfcGFYkdXUTb9fs0oogJuIp/6enK1WDdaapmFZGn34M5OhrPghPzpoYbYsMWyg4oPb3zc/LEf+smhMwcBHVSpvo/IBf1bTaaF5IjuckwAzOASeWYWvWV1lF7JeKQOIBHi2Bky/CRDT09CnDqX7hyawtd3OFYT0H35k3nSiic3lAUv+RZApKWR/4+acJSz+6RKgHEatEw2NqLYpKsUqrPgPYPq7AE30b/vrYWcWqqm7iM6Fp+Zlxpr4mfiRkppgGRqr8IsQpS9cCPZhNhWpgu+OAXvi6TUbreekBY9BCD/k+E2DD6/hj1alzcFGhUspulLhrJ8NMeUobGDTL1eVDigTn4/bBeP5qBI/zcsmXYFQVTESRzW391CFIYP8SqIsi4+mHDNA7dxXvmM92Fc8+RYyVUOUqg9shStF+acu8LDzZVMAMkAl1PEOtMpx2CCDOZlyqPeMsLb/vHjngy7CRo5mc7tAb8XqzNGpbhSEZiri/uq5eVQpvtKo=';const _IH='a0bedcab3b2ea0cc3831a8d293f2d1a6376cb17c7349406a8128b4fe3facf019';let _src;

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
