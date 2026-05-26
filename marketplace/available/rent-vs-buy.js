// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zXfVdxcaC7Bvo9k/px9ypeht+LYk39mVKkUAHtEDRRV/0+nKT4M/+k0tHYaPPn04CYMDNkMpZlkGb0r+NiCGMQ8I9R1elcB9Z8gmF27qXq1l1K8X6wioc0MaTKbVcXR+5rzKPLC1punjkXuUc02QuvjUJmVLXh0TJ4yrvNY2nl5IJvbCbNiNh9wkbGeolUBZZkPzUqh/hiCxt2rezaQ7GCD07lXqHnWaRYAxwMMj74pWZ0w0qI815lzFpdK6SMtTg6Yct219PS0IvpZk0Ix3TBgqxAjB6IniDH4pbOpA5tjymwVeisphdNH+mNrjfilzqceGPpaQwRiZ56vvHJwvYwvtAU3/KnpZoHkXAID0S3KaJqlUUsjTHcAcWR7POwyxqTQSqXWQr9Xvasdk0WDkjIrVtPWVFnXZOLDc3bRm5KXGg2JE69YN7ij/H7Ep8QQbX/ndmH6Vx2vrd8l0qsQ26FcmwCSBbMWznY0tigCOu+n9DH23iX+Hnr9WOoRKesnnxFu14wqCsWVG11HshobTEijclWR/xmNcifY/j/cbds16AAty5m/qitswxIjOolX3RWFNzs+VAcRfxrTxMC4tZ9qJsRoGet4D5cgPEqf6psXlAz5LCFyVbgYj4Za96Clk579v6tJKkiNiULGNndPB38Kf0QtzDZZg/HrSPnEr6lnBlSzwBtlgerHOpX3EsCofqUTu9cRUfcfMgdqLZa3onEibSYrjuJsRexYCPXAcc8nEq0M1KcWXv4t6LklG9AdbnWhFRlSflBRorV5PQq1ebYTE+5wn0P6qB6nfBByx1J53F7JbaowXLu4fADmrTxJrr4BGABPzj1HRcZO5iHwaICwlUqcc9wkHuPv3Tun+sbWGs+fNSLOrWM4q6/s1mEjr+EMSbM5wiwfCDXeYOkMhGCmXTVsrYxz84KrSVNFVQWtYeIMxJfyiRd4UqQfvFYCu1XtT1cfV7d9Vn61KpLDBomVrDc25uXUmU3mxANBZDznHUdfmEnbjiz/H0vxtfALg5XBPsMKca9DLt/0xFXbZFUBarcfaTbBrWYeN/qd9ixS4pq1ghvV1FNSeiqiapG/kfZdsUhhWJDfLNIyeHZ7qMiADepaquWvbH6eRLKood6fuPuN/XqAb2h6BbHalVmUAZvQntMXWN9683wZ8Q7eUrZhq1VIZJ3xUuFggu1RZT7c36R0uQ8qBr8Y+iu85nKRrmIKu0Vn3V0R89yIanrv8X16Oj9NITaX3a2CuLEIDXnPWV5u5L/UdmnU6N1YOedF92e5UI8Y6p3qSragKnoVP/Lerp65mqB6mBRTaMj5wHONKaaoTHIuQOtZj+hjrksjgAOYTNJfvM6HPZDM63/eKXd7zrIvsjtEfvWHm9R542ME4yjxbh+M5syUwu9LlqM7hvNS8x4k3hqnudN/PDcTrUmax+SAa2Vov9MOp+gbxkDTqxv7PE1qw4LVxXtLIAlyFFTej7tK9nzyJI5lthvaOptC4VqRc9dih3A1RvDCXuHWIqfjx48kV3sBfaufHV/Hea3aHrRCFt7rSvfiXprQcci2du6b/QkAYBtoeeuEzZOOwiDaKOIM7tTAH8hrECihGepSGT03GpCXJ88XZzMMwja4MW4kTKZmcWfMuvtXhjxNT6Nb8ESZnxt+430FkAA6zWTlyw9LYpE4Tqkl/KAQRl45Xz8kA0Doz/hGbAlQouZb0RpIeq3rrMcGyqW1L+DCaDLqw1nRpiFSHbyHinJpCz396TQus+/SqmMi6u0iTJro0osPxXqzA89ICceEr8M1JE/57Zmir3nR4oS3GXUdUoDSAxw==';const _IH='83e84c78b2b2d75dd8c33a774e9c5c343a61fc4db34b2af562b07acf3e728003';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
