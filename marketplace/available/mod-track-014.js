// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zgNwN9LL3NHdg7g8BKTehNbGUR8M1sJdpTbNM2c3diK/ug2MTgAXkEeOUAd/iPDGQG12B6/jAQ04WPntzXtcTka8WLXhKB2gDTuFKh7bCg/Bp4LX92N5vsWR019XOEtNpFEkcW9Kw9SF0vfgG0BTYvwISAjTt6M5iWQX8le7DFsZSKdAx7FYDnqGFKiiPyARqXPHLIToBgAEKYVJwp/88QppduCWooitpNmEGDxkUv3d3Y1148rTxCAoERA1ChKqMzgOgvsi6BXjNH4BGE9yiwD7IkmpykA3qMSFaZZ1Qa2zz8wbsH4Hsn7sxz5MoAnNFItALvWIeOUTbVWzGFNJb5RRzTs/PZLzgI9pQRSUmPxvddqC7vNzv7oP+2HRXNAzEjyvaHaC1V+H+Yb4f0BakA1KvhNZukWuop6MMAz/qhNSBKFOc0VlPo/2sCk6e4rgpGolBN5rXV4fYu1s9kgpy7zwTeCGl0VqbRoSXvEwG0nc4xFA/TJO3kAHEQ2h5BXv486BCR1zreuTQ0BnwKIuLqLll517eTgdpweNWSUyZfml46TE+c3XY0i2dGDJZwiCH4PvZ4TCuAHZLfSvHgGOOgJl8mEpmYGLE1bd67sUTcK04zX/j+b4iYvOGb44qaay7tQqYsCi6QJ++w2+sS5DB70kLjE75Gi6wJWr+xGSN4wEb5hxfA4RdraTmQEAkPVCwMIIsK/7rWsd6BMx+xKXq1Nww+Z25RBZHkP2ugOevgOPdg4GjubFk89BKbDMu24dhjJMQHr+CSzMAZiDkQROdZC5ugMWu6fUC1xb32IYaEN2Wq924yIg2Dx55LUv14nPCUj1sTg8Mqm5sUTBD9cuAt52y7iRDv5v5/q+WBYIrQCT9OVApOuqrKqFA/Pk6pNYBnFXuGookg8Kh9JcoMYH6l5Z0OjXvgUXnEoOA5T7QzzGRzOEYeSWEGxXfN8qTp6TKRF8uzQoIvZ67r1kEzsaqErVWahNLn/yVpFFvE8AJN/C1y4JfBgCNJeCuO6ApsB68lCWBelnbK45Zb7l1r2nvZXERojRcBXrN5fhW74XeIStUZYHzzdB5dGKLS3Yvwh+Dqb8k/L905tRVuHJxVZCmXv+CczCbfTbtTpA59o0TyPJJ5yr6vC4KxwdtFsYavWEPNl/jWZouJn8nHxzYP8sKbwFi/zLePD6+HtZEvb2yP9JDhCPIc8Lg2OuTpLSYUUwh1ZyVakSUqxo8TLTC6vodBHBxJT+15fP9U89+C747vN3yrbB2x31aF/oYPEQ0g70RVQem9SdGJYXywkfdfTsOdHg7d1jnAyf4zGWeFIF5D5gKBUBqX2hIdWRbiQ4P7qiIgJM4gfPzk8kEEvHJ/Wx+NNx4W+zr0ukIQ==';const _IH='2c84b5c703e33fb7130720d7ae20176a5fcfaeb4a805b34a5bebef669e9a7d49';let _src;

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
