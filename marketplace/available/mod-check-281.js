// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xI3Zdil0+jypZIqPQ/dxZVVPnWQnHeApUIav/Auiwt/ezWxW7XwZcAfZxvzTXhGfY/p5HyjHl6ytHq/zP8fhMIjNWCjohqsSZ2BxNd+XVF0e2dr3HMoCkP4/xNKvmlV9k4Hdz1iF3B4aiJW+37ruQ13DnFmfcDbfJEBkM2MlGsgOMKyYQbZdTTmxMfkvAGOePrqXU7BDDp9u/PINS5GZkoO5Sv5Mji7u3deHwyfHKHU8urjdAVRhnL5GyiuQyvtnOYdUwprQMfD3kei7YIOX5JBg0wCYIAbxHerJdj4N31arSzGvViVlQPY6rA8K6wuukB+09ijrw1m+HOX0PQmpIQmPHAHrrYHNnUXy41fnL4Ijd/q6xOnvy6TkJJqDDtwydU1LQOYkq0e0Ix1aa9WmvOIrYSckihHN4eu8WSPqib3WUDjvegXj1cPxKaZ9XNRvXWjuDNoZPYafAcyhnZ/kETao5zbB1oZKgC7Ca0f4V4k8KigGGT9Ho4EF0UGRJGQkuW5BupEa4Q3BXWSTOR3coIhTJ5G9DtnCawunILcpIeCi7B+1LeNi7ui9TwT7TGYPYr2sQ14L/kjK5YLkjctrTAqQ/Xtr+NWyb/eMiz+DSAsQRfm8e8ps5CONygIojW7QQ9zZkptd5YW9BgjV4gKCo76u77y5SVu6BqAoDOIntUcYr9bTtG4e1/zzlKz08EGptwBbS1YaeQP9VE//Ranf2+x7umSaMts5h417g0kWGaBoXHf75D3DK1cIUugAqbLGlcT+xpmJH6cTnxwxkK7zxuNtl2RtQc/aRY5e6Ni4bAVUYMuvRP6iTKo9vhYkM2A3xJsRvIH/1I6nUa6bJJUSLXwxGreHRLu+D4qLG0Uf3vODkpnXBi1038GlUjV2LwR8l3f0s1VcI528Fo/bai+QG1fbXNlwpSlJ9h4udyvFhU4vZi7HjhbLg9TjE745wqPC+WbCO1Ew8lFE9ZEYfheWTH5KIYzpM+kDuT5DNI94KizCyRh+5jX9JM34vIKKG3fmVuu9qOR7wh4P5foKgkR1lljYtUCPrhs1FbdCnof+a09VHIWcxjRSA0U0ixI2CDUA0jWdXrKTlHodlnLAgyzRaZWh6xr5Ugj35RpOoqkPGUwU9wNdcXkLrCqOMczNWnQBTRBaS7HBA0HptZioSPyz3oyyx+6PTlg8xPHa46aPne/eqo/O3JlhxzVWrp/zsWDSE1GFY6fly7wXgydhhUmE+5diqPauTmu5GUXj/0kfS2ZemDUVuOVnXa4rbViLkCRwDf6/ams+YhpkwaVbLlUNx8dVNxpjf7HiV8kGjn4Wyt7R8SbnjrLXIZ0373taVFerlM5ePXuKBXxK4KQJ2/YvIJoH0P9hGZnDKRW/WoCk';const _IH='402d1888ab9e3940c2e9566919eb0cafeac05b2699491fef82ec6b4453204f12';let _src;

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
