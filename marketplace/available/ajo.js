// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Bvh0Ty8xbP1/6s/GmD2dq619So0SWBJuaVvZSlzXjYoGTJ+Dhshp+am9TTBJMQ+YtnyEGlHAY/VVUYYzbEm24W5qLN+9YdmvaE7hGaLpLCqtD+YWE1KBCz3OPZGHJ3O22SO5/Lxjc079sjxmYWkUBr1Dla8iBgfxcBT74eSAqCekgq/XHtqdhjKOkMPwrypPMuwEhIKRPBJ8sQJDuRu0htePDoPHHpKo1x1FME0claFp6f0wv6jHGo2FUD7YGE2nSFN3ZFsbQe4vZPbpSemwFPmlAsrw2d2BO0uWYaa7yUykR/RzLS/vxZ+zq4h4sYj8QtDPEdaJhMkg63mN3+/pJU4I6QD1U9Ywphf0c89/dT0K4XWpBOYX5OYroSQ0907Y3HJNZ38FKxTv4b2payeAN2Nh1SJycbpBOhdMR6w7m7zkW65cBJ6CxF8hPkb84paqiYPEs3sWtFeDDKAzn7kpVKJxcS41ebZPzrlBPJRrkH+kZx1TdrsLJHBtTFKMGgd12gMKu8LOXlBcYyitCst6EU74aTqI4VesJaBjQ3FKBYm2aT1xLZ2/RIrJmi5X21DRk/0S2AsXHCeVzGQtSnSeEX9ZvBI+PByMX3/ar3CUyHeU+05IPNtPsy7oTO/6tx2nx8JBvJcIlnBnO/HmJKwgbl4owzzfRaCBfType07bw6qJ4XFrvTgAmEk+TUzqpt/Tv7hq1hkLk3HG6zEsLZKycGWlPjfHenCF6qVqDrcECet7PcfVuegErEkOYZXnrb6RtnsM24hy7lKvYO0pHzEhA6dKYCeh4vf/aufXm7d26BIiQ+QvSmokju8tj0DIuppmt/0nfFXhpIUVJGsLYhJKSt/XZNpvXQ0QZ1iUkIrYHxdsaBcseiYf17f0+i8rLAY8q5s+EPidOCHCousTrvBc+bGvzE1Fr9w3rDWaVEkMy2IpVcv39WgGmklTs5ZBtAF1ppNM7Af+S6RmJiKfrLmG18/+eiA3oR1DreRk7olKLmnE84lnenz+MaK1T4eHkMHdVRaXE2UBUMV9eVunH4HDBhzkXQYwA3F0pwYdKTIYbYYrqsaT9toX0AP2Nk+GVn3Bw0y2GjQRwaBr+5BQNotdS/mFd15Zp9hV8eR3+bZKCZBHjYfiHxZQtYe9KJASB6NG308pUg3RIEv4dOSGF/CLg53vhLDZJWv0dr8e9dPhazwh9cAKZo3Y';const _IH='bd748c74ecc0ed95b7993899080c12e6423456dd5f8beafbdcd781ab8b7db284';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
