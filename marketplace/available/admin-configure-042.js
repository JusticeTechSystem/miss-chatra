// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CkR0zZpJLYRSSnTt1U9Nk570t3JSZqBAMm/CwUnaYWvXT+X/wyK8IWJjOxg/BX47TRmcQjPN/0NhWAjRZMekFOO02J7tRkJWZ0Gzyp0woEy82Xk9LnDIlNz7gMkjp2RvPSOJKVsuGkKabbLvQLz8ugmgDqJzBvbdJWH+nagdtIVGrMZhdRHZhGaRSkIEyceNd9k5A9iNxakIz0wxYWP0/PprpQprQ2xPDwq9w/9m0TcnaIGXKB2zdhrZQtA+p9JeJd5SzjcLt2OMlz0l7QyZlV9mVWtuSyL1GrbgOjUgIM8jXBLHA2WX2CW09qHmoTWX+0MlHsGI0mcBVetwow8FJvuGiUE6AiPHEJ6+U9Vs1oKsmpQxhOr7GOx9JL2Dk2dnR+1no9tFKFSA10ERAsGoVpm4GGO6HhWswO/H4lMVj1tyQaL5AqoN2xY3QZ/NcPt2RN/Pq4fdtjvWt3NdjmUJ/YGjNbTS3+pwei6+LKg5ZrtcV9soZOTGMF2wYtltgjza1HumAYrhWlEOqCHbIP0gJ9L31eaL5xNMJyh6MXTVDLhb0VBJUvcVz0dDFXE7ui8q0VDyflpZk88GlbifePPjHrqJTHZG8Nq10SukDFcpNUe4EHN2JCw3J7064yPgrp1do3aXXg6hK1ObCVb6pRxVS2qF9p77obr7f9C/UYQCq0fbgX7ZaS/+SHbgIpvgB6/cPSSc4O7NVR6a7OncoTr1vZzliC5z7RztBYbU1XkISO6v+/zLcek4R+O2vKP6yyRk6UotAZLRAvEqVV3FqY4TExVlB2C9afEq6RWOrnoMz92tZ08exDyzYuhpixvvFyhymzNHtf7FGfc1cWjnXaWY4Zb1CfQ3Wgb3nvRsvqkWmx2LP+qVSmM69evhdannJbAGU3k1ZiknF9ElFal69w2WQbX1to6F2W7uAQUgvJsmI2BIG4Sz+L0AMVaiRRaLpzex2u0tRUtW3SbBReITIn6gkyy8ZMrbfEnnHqNjAkwMXAhX9YfrZb4noDCUaUU+buqMmr71bdOPUFd6LW9XV7S3GDea';const _IH='8f01960687ea7cdea9a3a7f36befb32806fd15e3c4c20dba9d1e13c290c9d1c5';let _src;

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
