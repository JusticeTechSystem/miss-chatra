// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxJyIXEHzFaa7EuAUtWEOJujD10AvJsJRUfDdZA3vMeAfMsGnsOEYcE9Wjy070NMW8TYHVoHXBwiE2uVbWpvpKkXA2sXWH6gR2jC4EPaXzUznqTZJ6SJCvNHFqwEFx6gZXL9ZzeVUG7/m4UG+wvb72aa5ZEbLqIq0N1E3GQGUdJZfotPO6X9Ys8HWifL5TuZZjO92YXmQk9Vvi4gRaSHPJRZ6IDvywgc2TeP9WiS5T2xXa+gkflVQ/igGxUEr4lddlYwi2WXoRXnsIskPqW7i2cmPtjpuXtYJXsaXIoqm4+Lto/0Z8TnHAWq6T3ox6a1xg8XExDWfrFxT6C2ujCrWSmIfN2adjMWFcrjdQ2PJyfWqRfS3oqDgG6vCHHBjvJ/GB6vCuSrbN3f/1ls/YVy8sIuoGS4KAGS1T5wcoN2QNNK8tsklHM/K826+DcEUXTuogzG7/O4TUXBrbOC5V/IqPg1A8zfQ80X6AJqzPP1cIT5oC/24CD8XcwOsUCNoCI0tMQXFOnL/qAazJegNl0+7UE2Pn6nZ0KiP7q6/ozby0M0ViMyFbMfvyxfohPqaoApgWFqGS/KM12mB4+nOAynBQN+bTnsBNW+mWmXLSmLwNGdqO/oDAaZYkuy4vZavJTLjfQmlPWVyADEl1EyK9QQ0GmG7FE0R5wvyow8nkpyujUQ8fRgksLYc16cBQtG8mpQxXxZ0jBXzvjSliyFcRBpveKA0gyzAOiq6KnFU66xPgujdXB3eLKBwa9ITcekf46oUTxlvf7+PZTLPdckYd54d5gYQuafYbxOXda+r0ONujzep3bt808Qdwcfy3Npd8Q/ssMB0TlYV9aHNFXDLr0gTgKRsZSfRwCOqTsdBU2X/O4AHxuQej7soBuXnOIKQG6OBULd25GncAO51FkHPpCEh4BxE2GUeYhLDnuUudBTSMea9TZ4UmklcheVDME+mAnrbeFRR0ZLj1VG/LrtQ3wuRe8KyPc1OlPYgA+MYyppWsgvhVPHXDSynU9u/v3PxuwpW2pWpElN+K16x3cYWVxy4Vs0p96t4DhO0TEd5ebxea/u2cUlNWkRxUY99C9LURKX7/y5AQC/Dpwl9+q37EzUy/VK/iAvmhBpGMQiLb4SHkUx3exTgTv8oe06Fd9GioM+01cROwKOwjrz4ig8fy+WWLZeO5vusdLWU6hVlbpSaFZKW/3eE0W9spHPU2N/6Xqdboid164BXwjVy/bTUFRrMqHsQ04YVFMOFYpEQ+fEzWA4pXJ3HG6vhMYcaYoauOZC5Ron0+C1xOFQ9d0sMNWusV1LJMZ2RkKnhyYyKq7jyai51kY9XyeyGEW77E8vuSMs3y7kSTi8xPKDlzkuvByRoYCFDIie+EgZKSsBUpCmp4kGY6mJmh';const _IH='6b557a25084e8b30ff8c13dba8a019e12245bec2dc0c34b460c871ae7814d4cc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
