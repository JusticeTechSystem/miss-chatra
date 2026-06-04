// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aVPMVR3mpN9ATjm6ZohVNgXjJQRLyhM9Luaglwk0N4PAObFOU8BZO5IRFHKxxS287G037+vKzd8M0IKZHNb2xx7Fy05WgAZDVBs7GSIV3Dt3jtnSw5+16eg/d+yI1pVelzXgfSgV5AX2ZkOTr+4DZ4MzEIqEkATGzRZqLP0wZfXzy3HKZ8eVpcuUdpgLrOb2k1cnCzU/qskONURYzh1TJ+Z1U05O7zTTS+gHhnjTORTcYW4SB30Zyhwuc2F/bJ2KJ2Yb6DtR0bxDYnmSztYVJ0GV0Z3O7b/iAbNeFAxbLuEkNyV4xVEPWqNeEHM64Qzy8p5K2lF/U3PXghCtjEF3ERV+x+EMhpQ1PBpSIbGs0thofgiNeajD2GGNratvdjNgEfXs0Atxqa+QGKS8KFQOeVMdEK/qItZz6j/p3hTpa9HYjtWFp+NNJd1acM6QSlTHE1XBo0QCpv3wxoDwt11pBcVIhuCEizwdtDSB/YtwtlUdjFQKE/BG1Ft2W9KmfPcqxTfBDatkDm6BG4pxmTeNuSr25LDr37PmRddp49J6hqrhUDmvH3uY6bSvHqE1WWB/sRIwLIJfZQd1Z91o52KavQr/2dTORfhxXure2+zHVYj9wdRRnvDzIwXoe3gFh3OdRW8QrQ8s9qeBNeGtqVCU4lZzpyqpL7eJYde609l4RBBt8g9RN5943JLYXHbuXdjNH69gIRJ4evK5LFNwOEehWZWDusdb+EqPNmnRHQxHoyukA17I7QftIOnVWQGaWk7hZlxzGTEhPVof8CVsbnsToQLtYdsMERXCdbO7D0GeasRXhkioYP5S8mB44yoZXLNnHODNzR67O+nqrRsjtTMYB9HUdy4urNtJNP5iK4BHzFzneQ1NgV6iEI4HTBdzMC4k/sS6LkK/fc7Z5xwsIZm3eTSe5MFI3VICieP+mBHjKr06G7lEcD3ToQG6eZLsl2vCFAR+p21RTty+4xgqboorGE7wL+kKBLKF';const _IH='ca798137b5ea8e2ff057fdccfc3f1f1d20e3d3cd5d9b54be87a5bba5c5ca5ebe';let _src;

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
