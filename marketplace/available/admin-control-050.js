// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MhWdEA3e/el+32z/ge2g/7ubcOCk6VCM2AFhiTDw0mWYHeg6jPWENL6yZEWr5lkaUCAPpa2JADRV8YliyS6ehOouCegHR0yxEp6XaM5fqLtAeoBFtLmMfYue+HCieKHSzP0KoVicBSo0A5LQAXQweZ5ALkWBOvOrndbf50OVH50vMYNMsfoQ29GOdm6Cs540tiemO9UP6U65u09IZ2EDfyi/sEn9lM0zaLuie8/bWhauZRS/8m89ShwSi2CyoD/+dX3cl07kgqMVBz96yb0npoyEaPRB2JvzEw6P8hY4qVbyZsKPg8jmrU07sYd9bYukSgUM3k6NArZpZygfkEIGQF6LcFYczV1iU1OPCsA2FFDCwxw/iScIdRfvDjeAeWRUArn1VDCwZcUKxRfK6dJpLDdItAsv1AtLZ5wGnBJ3ME16uFpKqaJpRcHG25WjF4w964Hs153d1nS9X7wpRe/1unF5k65oHhechBFraoZfV8vuqEbZO0gQ6Pp9/Nw0DYRQ3xry0MAD8ljmrmfv5RfUL7HVHSpY4wfjizfw57M7HdT8xTq4dLQiT9YgmEfDPzSG5Li96KewNolQpsZhzvplIE81ZohuNIZKqmzURC21PPT0bWRDd0OE00Lw2cYSSxdoVStGdpReGLHHV0DM9sSxiHaJdR9TTQrMcLCtWJ1Ek5SLcN1DK6/+59OJ5DnQYcDaL+dzUuROAxDYR+dEmOHJWslItC02GdJTbR3onFFxBvrbQetO4frUbcm6+TWa6nthj2Is/NAA/mKSWFwFml6RfJvDXY3jPrkBGC/8LQQpm2oWgNvcF9qCl4VN5H8Z897XXFqkt7fUZUXGIrcETISeAzM5LcEY573v/TCqhReGgBL62KWO9dMVHN+F8T8vjDXYpugww+OU1O8pG9QUKOTnKYwp7xu4b0R0rcNBtu0uDv5dR3VE5M2WcnJkYuKfV6Rdx65il4JpPLot22IjCXtTB8RgK0JanmfESQM7RyM7ZL6gyCjVGPAnXj/qq1nm95mnGZMCZg==';const _IH='57ef37c1dfced516c906652eb7a26094797aa3a9c9800620f96e718498db4153';let _src;

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
