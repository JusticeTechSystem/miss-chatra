// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwSWh2/Y6/7Kfky4N8ANQp9EcYmybqIr8VySlRBRLLZHKeXGv1Y0Ra2TBt0E5/BYaAe+cBtYwsK7PJxzsysIJ9FX3FsK9NyaKbL8GcohUpxOymsk3qHcNhKHpogNu/ROOBWWHas7j5kIFXpmw5WoQ8FrA2aVaxex8PbzRw2x9g93532rJKwBQe4J+1xVFW+9ssfBgPWnkx1Ln78li1XQ5LYJwGL/I4ikX4ndPV3zUa+w88cR1+Y0uPXSHMBPO+Srhi1TowuZPJo/Tkgpl5z8P19sujSC0QXKisMZs3/vz6QBTQ2fP3CBRHg4iLnprn97FLTCLDq76ulLxoHtt+zZzkLwvxYzknUSooUGkwocTEgJ/mTNhfZoojdgKTUOyqXdIc3tb7YZnuj7tNSuZac0aXRYaWoXH9UEd56jaYSJ31OL5ATXRb/8aaLz7C4tx/PqoBMJM5LSKph3RZkl4NmDGKnSQejk63UHErkENr/Dcp/9LimotmeW0ua+r0NXMvlykzFg3TptMhv4lmbGf46SeNC3IcVhWHIAeY7kt8FbxkQDfPr5DKYVQxbBWZv46FIf8VZ3uMXEgcFKiM9mKBaqZoOZHeNgxG1nfO4q38BVihbzRU3gf5KXRUCoSeEdCeY2cm3tcEIsdttjlUIeZCfzqz43bwJFlyHH+e+DgJlyD65JijtLkovUjHqcgj49W902Bjohf+jddsCsppICaP9VlOvkaBh0EzGrUPTXjm0z0nxzztkzfrRwz3oso22AfZ7YOwNCjGeX+qgr2aIuUs21nqSvM2MhPa73z98Z2Ig3203ahE+OGNsvGOxNLtEZ8DYDFt+4o/yRPCZlUuXx++V0Xa05p1fKYU/bpntDalTUJDMyS/81MJ/Q5k5QCSZU0Wv83Db3gdh6CgFbmRWSTipL6QTDcuU5NCKXYOdkYEMnVKihVknGbWRxnAYU305/QPB8ANyV2xKLR0t15eW4px/cj8BeXL5R6KGiN8SWaJzTLDVoVDUTkgiBOOBt+GzVvanogvvNM9ssdq7RRT0BwdDDfFLy3Sv5IsHpKMQ1MPpMJlwfkvBIuAHiZUOy/kkE77I/+Ir9QiIsI27ssTUlaY+T+cOp+wsF95aT+N+A1cooMpNYTnErmxwjRWfSJe1eiUfE0TrdgHYpe/1cWSa3qYBayJYChoQLUr3Q+HomW5E2CXMEOxwjB5FPzZZWpFbUr91gPROa1/1JmEUBN+rRvvobpsqetMQlo9/Yw8ehmrjWcR7thpRGrSHD9beC/yTx3u1LhAAKuWx1sShp9xsLsg//vpgTZa70hX8jph7sG/SNEaLezFsuCQ+vbb+ZdyINgIZLg7Zzzh3y3+zRJTONPHUAbike4rdXelcyiUo8PxvvDBLQHK7uiY7SX3XnXgqScQFBAvTqVDm+hnSftABouO9iLCGGm1k9VT3nbi9quL1+9z7FnFL/XvW6VoD14JN83KUKOJv/IvQpwAdRck4gcdLEl2qrh/joL+/0QGIImSdObtj8U2hagGGzhhMnGJ7jKBo+g8/BGdoEsSdpjRu0+fODSdcdb30zh5fINv8ty3ds3IEbiHWP+yX/N46oMQoOec+LC33mrLTB67+DmSxT8rndzRom0+ez5JR1IiP/K+oTleS83/dVsgoyYv3MgINw/tuCe0xbbycvIAzMpZOfv3e60EAsjLbANDutc+uwnWX66tRw6So=';const _IH='68785dcc3b1ad4307ad206d151aed942aea173892cbce2533ea76d3d058a34b2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
