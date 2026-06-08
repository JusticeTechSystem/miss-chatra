// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iiQc5Dw85wdnvF6ExuaYug3/QrEfimJ3ojS6/dftQ+T1mC59o5zexDmbh/N3NlbdX+xsrXVsEfL1cgj3VXkw7ZyVfBsyYRB4cKLyMTeXphxf1deiCbw+hl2VbA4eR9F3f8MbioVfacWcgFV/a0t3LacPrF2MmF/GpsS28AEsLpbJB2tVCQlA1Hmx64OPcovEdSWNVkDOeF5NFIM6gpjGSZu+25d5L+9LVoC+N9ND9UQGitPj2gA2NlV9rJFh0GIs1WejawbiIskzPfnqNCxGQTjiXZRxlD44xdrR2YhEJkZ15cBfDsV1uN/NRsUpB20QBeha9n7kHGSSznC8roxFQ8fflapiQ7W5/Og/sMY4kA80dRir6xqkbl/wRTNlJ90j6qcpBTauWbzTQHQ3kfx/0Dektjy1gefZDlLIrdtOE0AOmNCj4PV8U4GbYmaahvYuffbsdSBGvUAWv3h2o7w5WaaIbomKVerXe4d9HGKNbQFtlzDEiq2Fl36vaJzQsm4Qvq8rX8UwpOUM2Do+Ay5Z4uWA2VNUObf6Icm2ngNLGOm89rJv2m2O+nY9aBFPVea6jK6oyQQMbTp6UO+2NFJ3/cMvYN3oPwBh1iV+oRhkNNIGVM9K2DcyFkhewIl3mesAsxIckUIh2Z6mRrbejdOjAwCn+BuzrT4c3W7vSSo9XnQKSotkYAT4ITho0C3kLzmCkubYnPPAFabo2lALOM5Sdexejw+h3upQaasjSJuZImjhL78l1UwzhdMBcZj9rzSJfjm62zGHOBRKq1GohPfYKMz+8iKo1i7Ej9wgXWxFbhZGaAflLWUV6oUXcHcMFEaqipoD0OfxJri2eRBCyRLaBB5/qWdzZ5uMN3s0VRdnQswnX1iO5765E5Y3mjpQQhIptZVL7dbfdxdRF18dJ6OXMyIMQxguGuAvpIGkf4vOBvy7hF8Owd/+txOSKJeoOKRTGHwnqE3eb2ex9MaNomuI4WImJsUNUxZ5j+xRlnnDN+CILsqpHenXPJFIuNgzMha+cqZnNnmhT5m2q0Y7riGR5DVO3+glCKVRIA04nOTjA8Pt+3l/8LtVdPFrFiGV6KdgkHl5IqOe6Tuh9Unr6k7z90hH5zCUT6OpJH45oYFu/kbjJRbUqCTyKjRH/dIwwmYsuRoJZ+cQnygqwIO5Dylld227IWPwAXQEvPZ8dB0YrKuzJuvaWq6MvgPkYyyW/JJARNIrKSdvEG0Gu3baVHRAzqsDF/5o0wm/MW3ODju5QROsMTFv0Q4x0appr855r0Z3PChvkW1pytDLECA5Kvn9BNPfWrB5UeseqPPyzHqdmm1SqVg0zP2ZY2szvJwwWnQ/CwrwwchUmwKZjJqXy+snDWJoeuHWaRtHZqZs68uTuL63NG1P7Niwqg==';const _IH='79757eab35df8794f6c86630c67b56f2272111f9b482a95af0621ebbf7fb7607';let _src;

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
