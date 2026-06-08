// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hpw5Amvt9cpyDzaDOyKHEEKYLdtqQYtaJaX4YTLOrDx6Ygd+MGs2WIy6kff0cbzjh3d7uZC0QyPZE6Hbq7NRm1Cva+3mhmCFek1dnL7L3H8f62sl7dmoJvpdh+IT3xgvppFYaowdbnF0n/+YRQJnjlq2WWUdDJ36BJxf1NYsGC0VRGAAmheWV7hpoAb8TCGPADP/sSBzO/BVOFVXNw+UjQY2i2elploeWX5Uwg5mgkCJASSZ709jFzOR91vgHIHuizsJa5m+3KRUgWOy8i/NKLEs9f5Mwb05Si52bPx+qsChQq3sv0fi+wTE2/9eaNuFL2kRrd4Cq3tLu1vSOjA7lh9qG4xYywk4F6zIfiPdJ+pGVJlcxzKNDBNne9LL/jUaU869E8s6ULy6kuVTfn1EXAdylbvAwb0pZBlJ4RAgr+tdWExR98m+3hFPdp90bFZl/csGnvW5ViS5HrSFfdcq13dG/Lxd5GfmkrbZhsr7kg7XtsKy3mxysK3TpHqTu8YkVUMYJmXtAt1DniQD7kQKGNoBIlRwhG0g4NGDVfOu7oVKTDVHRBTbfZcEdPyQRxnb6X+HXDkeguEtWgzz7+31PamauMIKuU2TSmNPnDjEbmT7wZDb3a21Khe2KaM/Bw2t2RH52aEZP+N70SAtrAqemVmf6CwmaP+T+rAXeMsGSIqYr1vFCRlN81JRN2On6CjuvidzssFDeVDDLUGbJ0iGZ8CzIKu0HfP1FAsvPdtgXDpW67+kdXfKENiW71m+YfcqnatW3G1jtWykOcgb230IhUxXI5bLzNYq6hsdj15JByFRpC9UlZeoe0hxAmCLH6L6htyCDalwpOHIGUzxZF0yNG+aNorq5lJYCrrnHXWTG5KZJ8eT76oqoqadv8YMeQzSgO3Q4J+bn5LQwRo5nAQlgSdA85rvw0PaV82TxXF5Hnrgv/SUE2LL5CHhl+GPL8DSZgzrbT+9aSIGLtAQ9vdbpV9ONt9dTmN5AU3srRgLnqgwGdA=';const _IH='d93673e906c3cc652d91fde8eb6dc484e2d92cb4f54a1d662fc63c2d347b8ab8';let _src;

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
