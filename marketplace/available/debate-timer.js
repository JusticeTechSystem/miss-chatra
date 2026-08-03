// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS34pxu7tmGRpw8pXq16FK/81QIiGalrVRnU/ePBEyAw0gZqpdoFVSLav5XBT3MDeHTyY4L3BvWptzHdO4bZbZR8nvTMFpckkW1QoEcMYufnVuO9s6iyVkQYdWvKW6Ago5Oq0hhAv2N0hIdzyOwyLo+xMPcnlorPbuqyboFFDlITo5jzbypOKjdHgaZsRVLKdomDqkPS4zcvV4Qu2lv6vR7V/9Ik6CbXmO/Oz6yXr49yK16f38AweCBtIebTSSP4t1zd3mDpnjipHgQPSHc/04G3SY1rwesqttyhnwTt8Xzqle//Jw5P3BVF2lRaNuHodH+WLW7vRZAUEMsSh+5ybl3ocCisX4nMMhR3aXOvh/ZXjjWBlrgASD1chgG0+7eJ+txOB33tdTPEmUhauSQeJNv+iwTPDOCb0Q7YEX4jq7nHBqIgwtPH37KmEdqxenuJcTswy837ZhY50epAogRs4a66fuX7jiZRyOvOvE0uktN+Dp0sjNL4NPJZCkC7sXcNYsoOmCb28HbbcOkIYMJB7tdBQHH6sWvkSvLEohKwMz+pyZdQgbXJfRQC1Xb+nnny7+qXhauH0QYWY2mVuOkdVpOx60bhW05z3dZg8L37OGyNMBYjCN0yelo+7rO8lz8miLkFh2E1hkTEsKTDPlMYw70kwFYCfxoA9Wqwkw34ouervzUV/AHViXJkVwnQZQ36/RQsPUBi9nwEiOXJ8k3Dtrr9iEwqmvMvbcdtWMDrX2+kzy5YsjEGLNfl/LALHQJoFVL+eqaAk64J9lFquh0K8IMtNyDl+rPhVTJ9u6RTFyGhq0bjDYdCsLiTZWoDOWVBPpQbDaVWhHZU3iaSoK/9e6eduvC7UOSQYP3cQrKEjxarIk76otiuSvewpj6WHL/Ew2Xw/bdxPMX5fK/9yt4wwLgxdmOfyfrcC+cAeg2zZeFVeoLV5RR+iLFg91EsTY7fhtymZvvxawBdT91+U4F+STFv8gLmzbFKRaYX8FpJN+CwG4D8JwBMiNfPREkPTCYIzQ5Ya/r0lyKNbENDNVAMosiEzA1uF/8z3SrYGFr9wnGpkBgZ5/YbL3pZWRK6OZz4Ga4IvQcqnCqvDBtp7VyrzJMKbHP8UCy3Iw1KBPnbYezFw4f9u1EOAlCu1eb2ReRegAT3xDdYQzSJcDt0Jd3+sBm00Llx4LO3eXfOFb9IwVuZNC4EH1ouV3ZFMDqmSfegACS1rphbIS9Q3uEI3TlKXDdTHyz91HRrsGo2VFpghIdSfNR8Gybebkn9WnsJ2ubCI2f';const _IH='cde3bdc28dd3d942f3c3559d64d93715bfda7d24227e41e2c5a12d3f0fa75a82';let _src;

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
