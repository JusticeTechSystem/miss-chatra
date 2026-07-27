// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZ4YQqGBlyYfOPYfEVy3XplfGNxVKf8oGmySsBhHA3VmCmamL5iEKDrvXA2Iny1EZlv5gHnQK4R0OhezL7G4iUYZUTWwo3wI1ua9mOiVCmzzzCDtekpPU0AkOvR58qR5pvJk6iOQD0XnrMappuVQavhwrqbqcbdcBtIwNNJQPtCwyga/n2G2yHauOWClZrvlUvJp76qLkobKGMpeuEChfT29Kl36QRKwQleNKUwvEBIPXUYP8jOZjOgSHGc7uoYFpBlAVfuNfRY2JPNl3MmGOH3GPu0EnFAvxA9FGGmdfH8E+F30FQ6ZdFudaJpi8VMdxvEO4iu/rBWA7JdK8I5pC3WW+QjE2QvwyXEHIaBchG/mfc3+DOEb+PpP8toTOyIVhgNaXfNQ5ujMEnYEC6RId4XPNrPwt7/8P97svQ9M6RSbe2+Nbc5QO7K0slDsHPWjifVkMjZdtseQtamPIjwvMbi00+xOHqyDjGGvHQfu5184lTyxi40UAUkAYoDhYfe9KNK2CGgNKPWzsx9YBDLMEE3CZqCCjhvDW4i1qB2FK5zeAWQVTGVpEKkdA2S/ARX+52HhZdc+eQs/NcFpMQ1QHxGo7J56VNB+G5PKavYfqnzc02n4ygAIDE/4ib/Ii5YRyEzxtnPX+Y/Ie/1eXyZ3BSqLMpvRRgq5jHvG1gUuqcKFlSRziU0g/P2lO+r5gfD9IXl1RRHMEdJDX78n8gdJEXcsvumO9vU624bwb+SQCxi7kqC26U3bs30MPhMWLvOSkY5txPAd71pLOK/5O9jSJ9rh/WOuAvX9Lx8Ul8OgxTX5YdYEj8hB7pD9mpY5n5YzbDznDppPVM3LUSZZNhdmPL5pZCvJ99FbebXTbNV93LayKEI91SlVftfCZdZYRe/goZgg6DYpfyqQmvkQFoe3i1YzCDZLdiZTaCaqd5zdOuGuTvFrXWH6pheorMpvct6GPnrxGl7yP8nNXLR93atJcRsZBX1+tKpCVhYuOk5xnCVR/60Zg51DvMqh61IaPJWq8gp0qFc1yRqH8ElEusBcRWzNzm/+dO2SiVaFHKAM5o0WoEZi1+mfnncmx9HBacH8FZMT63/cSA8qnxrR/pVQZdzi0y6UpH5+Sw65erTRgkB7UqC7uoPAyprc+Rl6H/NQ8Q2YWX9DP9+32LIAo8spqupCQlc1IOaCrlMgN7a0LI2gTxxET+jLUt85Ti06ab82G8aaYzAVYSd54/cu8VTuSxzZ08jCIlbRY/mTQNRSj7uldXOM1/0/9EZqUU/7lRW1YqI8MKIPQ2JKGNShyKRtHjAXpOPi3Ha3xS0G55tJuy29xjXlJIBtOLy3JYma8ug/w/yjfXcyct5yZvMxyw2yvunAjYjmtNXWm7DcTZhGuTSY73pV/ayX1s';const _IH='c26ade25e3eab23f69ed0151242afbedafee170245ae43eeb54d4233d4e016b6';let _src;

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
