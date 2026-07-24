// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2yOy1BshgvJ2b/hp721a09p7vqV+GY1eV61SjyveiRTkTXht1ue+PLbdPqibX43bf/M/GwJYhOSzFrptqu3D1ypzttEsnnO//l474t49HRsdjWAgyy2tf5Zf3vz0OWUh+H2zfNfwKg0L+ZJaeEvlbP0tsY0hjxfc4596gayIgKCt21fGUB54A8qMxXmRyAvn5MnQuiVMKC/ZYlvdvpruFonYs1xL7+N1OIRX7QRAA4RaI8EYz5VPU7sA8M8HA2W0r1+RNYcm6U4My0k1MCyY7JAFzkuTZqbb+oMwYX8gQUvWiAQXakSFR1s3ZVj70kfSDf1gszNTNY8wfP4k0hnPxIPnM1w94+dfwFS3PUCPRDWu2yltEoUiaSJfttSDudLT4Q857JIxhEXMZhyPViMP73BQx3xV1MPf4HiYx8JNEHmvc892O3yoa/hM2hw3KxVs0aTgnOl7+/AWMJTO2fktxfLYWcpv/a7dwtY/lDGsZUSjUU23+r1lXNjYTo39dmbQvbKuYdNdMLYqyBy+nwma/7nTDps2VaE6aUtgTX8OyG8uj1UUALiVo3iYs7e39Davq3QC6zMsSVFJaTdvasoRWvRd0z/+gQAFSVS+rLw7BYatrUfZ0CbbwP7uEcrxnFBzpvyoaNgPqNqpeWWnVdkkVdHyjYDoQZGo60+sFyfHZZU6qYDlBieM6JxdEXxQITaho2cxOxSZlXV4rCoz7xN9z4r6tiB5EoC9CCfejhRu8jC3ehd9n/Pfmip0mQFZn5Ggjv/EL2+vU3u5gDPFPYA6ZFH6nH7pslvkY0HlITrJu1MZZwndpa2l3d3iRLTPULk/Tt2njCJn27hFl+RiCmwRUDY5kp69lThV5pOtFCRlr4B9npHqM9tDMUZiZoVgCJBTBJULZqFR45d23hooXTWzdvCrtlVmIdxSbYaepblRuy4xvCjC1AoGH6ERCMJhOwWvX2KNo4AD1OHIUMDeNYPDGnbgz+8cPSejBKKq0MSig0nuqnXyUWSWJYc5cr1etu/PHVUd9yXNIG+cRwbx92g==';const _IH='165c8a80281c7c552c8dd74e210ff5690a37576817f1a9f042089cfdef66f8dd';let _src;

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
