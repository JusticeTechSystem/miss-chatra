// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWWXAUfLzOef7C0v/ACqLbMVZaZdIQ/7XVHILcjJOwwClmyXdhKx1r3MI9mYwesf8fqVt2dPqgG6nmM8M3GLJX+rkFBgt5PqEC3IL5Z0rzBM8uOocjgemfbRsvMH1F9kV0mS8MJwfClkO7iJAE7Gs4S3JKra88R4g5WyB6WJqkuz9N7qjLQoj4LM/Tc6h32JteRSH2ASX7SCst3TK3036HDqBPiAlRLqcXj2WrcVfO3vQQNWVQ2LekEnI+feMbzvne9ZdizOW6O/FHMTRXpoLOMh9zhnA9mKai6z+Uf2wk7jJWpNDeu34ah7Jd81hN+8oOHFFLFfbxZcvl90Bxal5GfyY5Yx0aAD8ja11KF3A7WjMvFuKLf6tAVMcQNzgNDVqypucwQt+yZISCfRXTEBjH/VQNn59imXMKflKXQd2pF50rjvMJ12Vx53ehibBQqsJhBKp2IGTFiuLts/lrFHjHtDWBZ/J9yH6zfi1AlMKRY26GSBGZCPCbFs+WuIdCe0ifePzd1SHy3TWXzumokjZ19QE6bjHbB6bXCWCb33l7mcNE65BTlHqMOCGl35dzXAJgHHrrwY/K99rOuGYHP+8k8mdtAwCimn8Q+2D4amA/qyRznluZ4e0eu72v8MjeLW0fq6vl574DrDljDTYI9XhLUv9wld0xqGvfkpklfebXeYr5dXsIrXcOTitll+CDZm/PK7POZjyAkBajCZIRZPiVZ08MpmJjJs4s1F1JavuTgi34ZXRTCPuZIVBZhh98NvdHYnFMWFJYLHh4sIjuL8jBc/ySx0dRXp790/bXDEmXEds+qZduswZnZpsXOkPZ8Q4Gcu4U61mf30JST81PW/xRBrjnkHyscSegakz32n3L+93Bgn3oc6qW2oKucHOm7nf2E1/AREKr8LXDvF7rShyLB9sHZdtHxbDunwTgmIkLaY5W5PxIldVuORMYgqOpwzZA89/RoknV2otW8h25qdSfgq/axD1URClC1QrzzasYpw4icBdU6mPRujUbqS5em35pOd1TeYulkle5J/pkRnb1FnhOmhEkd9jp9zuxsNdgN84CWzHvnHeIepedTcyfaaNwKBWcrUlXYvDelLe5a6Dlp1qJh+v5rq6BGPlKvE9+bd48ddQAvmnronFjDYrCV+QfJho+F+XQlxqmwWC2xI8K7m3De8HYlMLibH3w+4VHmMAYP8DPby2qx6B5hpUbCscmn+YAprvLYlf/mxjzz/zVwKwc5/aOGt+feoiPH9PIXDOvs9pZhnqSHUOD89nz9siJ+GUUPEClgvli0/k6Uq+BMylVM4JjYII+EnojdHDUQ1xm6+YsKPaOb0Huy6kp0x1w0GyhXa0AU/g5VXH3Ntu/xfvWIbt+73EptMqdfW2XSpoA3GVfXbUg';const _IH='2a1dc47244c3f0dff6265b145c779afe097874bc40e7704cab4a8685ec697e74';let _src;

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
