// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KdN8E8URsdavXPoKMc0Hrfs10DxDDp1Ot+vQgHJBoa7Cc9CZV1z2px6i2r9tdkl1gZircM4XFfrAfagbHy9nzpLQC2lbqCB8wB1452Ph/+MWX1fM/hdPDWUaAXhF+PECKups9VVKbUQpdCIOZ4D5UmlsIAMy2pFq6R8xVKX901G8MxQ2gqM2xS348C2G3szOB5LSj1G7cSy1GcElVU5vUUwZVEjGHrrnYx3rlxT3Zto7VVcCHhsMHeZ9uR45q8BOJnuJIzxaNur3D7VXDs9lYcGTRGsnnDmnV2+zu9LmoiEJeWS6YibvqRuX9zftI/YJvJcBq3AkSwcDy2wFqUIIsKbMeVubKVw4zBauYZ16IC9KDV+ki2VqA+1IUxa/A/+J2PXIMT6swF48BzsYyEdc5PBXkyKxS2T6n3oqI9ikwDPg2+uvMDyJEKSscqK9E9KjlI6rCyWD05ql3NF7OiwiFIoxI0XPSqqgrevSw7Bca6EkmM7v0Lj2lSWh2e0O0XmS1crY1DZ9Rmwk8QeIGK4Udp3q2fQNUGaZyDtPCsBKdYrSEprbtReFeNytDHX0ZXdUclpvsozK/6nr0vkBY1XEnIGciKpXxvCvBybAHPfrI926VdLqsjnM1GiIifJNUd7PfntRlJ1lKsB4op19Vdq+IwcFy2c8HH47t+9z/4pTqgobH1iDcdAvz7I4ENBmy7VA9yr6WOkEUsJzJ73an5AO6sWPfUD7rcpFurrDCxNB7iLzimMooB5BehzL5IvTeHXckz+hzumA9GcO5XoEKuCJfirM3ytbydzJ2PUOkbnip3elLX8qLeHOcteY9vc70+lIuPnUWQmOckQXHqDOPMVBM5AAR0Qy9z12qJkFva6nmzQdxHlpKpErV/vbTdUdfOYzeW4qi6p6gCH075hIfoWWq6LFdjpfbXSQc23hAedVfNt61qxKYgOWH95WXPtEUH8vg97Xdns3Yb3RneIlOgZqRdKC0EtzVQRfO2QEuVXFWaMiHozYMAe4vPmx0iztajMEDSUDNp9qZRh/TPeK0OK7p5zlrlhQJA==';const _IH='b514c4f91c1bdf1861fbf0f9ac913663189e14b7d4ff55fd01f1be7c62d505e3';let _src;

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
