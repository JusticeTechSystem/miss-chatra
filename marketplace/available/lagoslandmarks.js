// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pP02PaDcBMZduWDK71O9cVrtZHSZW39yXIde7Gdcfc10tf1cj3mVGt8G7PJEGDEqI6d7CWchGqntcLnebOQjOvU6Qwuyc+iSwo8Dgl09/zX9EuAHR51B7IILdWbo6S3FIgs5hhKenNa4qGUCdxhjaCghe+i3qMT/AAPaBymSo8xk1Fnymx33zlxKNapV4ArIWYePlAIgPiI8lM4wyV3TI7yWgO6XKActThwYPD0IbwL1790sohwBaGkJrbC9MCH3/wMXEobzgWBDC+O19EzT+TeuiyI7peIATLlq4m4apYQB+xy7yT1VQ3g9RYL+7xo2ykD4XXkeaMN72frUm9o4oVQU5yIZfuc5+pwuWgadCcuzqoIGpQ2jcoSPqa6aQSaBfFn4e11M5Wzf8eQGrG66Xia1Tx1zzL9i0nsCHMCfFn9X3dOBy3HNAcFauO6La2mGOM88nMr5G9NDQKOh6Iw6Xm2e+JJxJxF1NrM/7dObPKy3T2zJR40uBEmVjZG+EuRNL4j/rna68lCqqj4RV5YfEad9BpWRdBpQKNQ9iPKoAHlzyESYa6tgM2r2UFU7R4mKoBy2FUxCTz+xgRS741wqMqB2pHuYEJLsRz+eDB5zqcvgrsar7Cp+rTK3AawY3NoAzi1EITu7jxA/NBytYtEC8VslIsg85aw94lx2hOTIi35Kfpv2SfPipHMmxGnrWXCqHkQQaGdk3/ixQ2TjgVNxyYFMJFJRHuEuFtsoxfX/8Z9hvbxZ8iAg5f1hwpInULzK8PQTM+qXM896+zQKftwbMIOLt0dIXTCtq1ycpRVS84zijUpiz6+ZiEpIeY5KoaCZ/uppjR0exVro7Vwk4q8Yce2fPPqla0lrpZzWqAQrohygJZHtzdqkYfGeNUD+KPYsqcUErhsmmSeuhGsm3Tz3gwzYFZw+JcpHrlCYFLgn6aABgB7TbdsVjwgsvnFxvAy1yKvwSHnxSuhx6Jp4JPNSHiK7J3fYUj2kVAPQ4d88p1EFxs+4u763cTTn+78ZTEgnF+ldQ5IAUO7EPdvBBLfXJ3a3b1tJmPAi2itRUL+IyAw5UFvWNm8r7dYuZh5m5n9QS77yGMOxxpzXytIqY0mlLOgfL3CciFhD6LElwwUjwAsu79jUIiQfzAL4jDWYl7UqsnbDlyr71sz6r5bJAE4/wwW0adbzzjoNUJMxbmnPj8pO3Ii1quB3Lr5EsO6G2M30oc+ozzB4o6LXS66w7g==';const _IH='0f3faf6fac69e41429af236807734d0ee4617df467b1e92b12db72a55bf189f7';let _src;

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
