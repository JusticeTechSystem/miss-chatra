// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jXBWERfpfwSxnJRcVCCv6KaZ7SNd6ReVzz9iX6kg4HsU2xCxT7CmFdQiSDZIlJg7v/tjA9xjiwOkDTn8B4joGepqmCFyubxZJXXJrhGJj59OOb1goL93mrPrR2aBoVuTSG7EeTNdUXM00HhSqPqATydCQkSZkHrZP2kUZzYdSF/nEg/hNMYEVGK+LhkvDmEWFLamPan1DmSHTZnm2iLuP0oPjNywb0gWzcM8pkJ7e94hAWjkyNn8BBkzNAADxsAenx+5y/VJlT11ndtzobL5E8KqZpAlg9yzAqJxTCfc+XpM0j608K0qoauxT1DBJhUZFPuynepWw6h4LB8FvtDeaTBxpCmZRB7sWyDk/FXX9UnPCsGbOUPs+Yu8jsyUlw4bm3VWQzj3a+wjSVK1FbDyb6QiWaUXY6ifOIB4MiBWOc/eIZMOH166jiAOOYdxLoC/QO3cxkm35ehdiBvrksoxFtTgR74Ustpt9p/h6ZqbYKWOE3SJ/rLyGhUDjCFZjjF49mOGqXj7ZvDrUURn3CZUYWeoTyTOq+GkQIJnNUP31zK9HhrePiHe4ufbpgFDeP1c5GKrejWxmAfROX5gEAlSGGpB05qAPZWuFTx+c8Zpz049r2jsvFugFWDpaIYQLDl2Mv/2fSHNYsrjco8Y3uRGN4TWt32KeL5BjbjsHEssjTzHssdAb+D0Q35gFt3sxOKXbhoZeRCm1TfizOEv7zDzN1CmN6Mj7VD4XQvQeRffJTAsN5VENrH9A8O1pq5CNN4dbzCmXG+ZP5y+ZJzUZHJbGRG2oKq7tXIt1jt1yA/mNCT9MH2XkALKc9BvZE1mBT7jZ32QL9axzJpHm2il9usbsNGU4puoRBX4p3ar7/UgTrHQ3CB1fFuRbAcfZyCL7WQy5xiZ8sGOPEb90H51wSbgCn9g5VZtq1YTUTg9j/TVdmu35+MEqbDtXhBmA1E/KssT1rShvaytm3gi5U8cqVKkTjWU5zU/P+HBPQn2MQ84tUUB86fggZRekWYu2/lux5u7n+dx4SHcz8KiNA2t4y1O3Ih2tjYuT/iSSaXvz8UfYZskdpjr72sUwzYRZqQDOl+9fA8Ahd2OG+pHsMFn2XdVcHKpnwmDn71+Be78MI9sCUSkeNRykg56mO3fIS85TPkqvf3BNilUPLJmy1aOkgAYssh65sdwuBhvjHumcMfbbVcSwxbd8xCt5mVXNJW3Xn11h9A9Vce6HneIsu8vb+66rNApMAKGkr9va7qtPNQk4YwZI6GYMAae/oE37ebb20AzoSgf8bgqvBWl8CSUQ4bU+irqoEZzjd9pnbeRPHIYrKIQr+XA/ZUM6/FHCwCU8RTjXri3/dHjCxr6xVtNAMvHBdKvbqZMPx5QS7YAd+Cz7SzWwP2ck4SXeA==';const _IH='69f65764bcddb6e5af1f022d1ae3784a403a8e149455fcc03c5f2d337781a688';let _src;

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
