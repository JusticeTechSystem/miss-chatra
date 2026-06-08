// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZMI8MJN7UsxrS/qT6ckupVQ4LsNyZ+LRPchHB1AmYN+coe29S6LCNlG5E1MwnqLxynuI5rOAVg3aIblx0r+JImwXYXOwfxV9w9ROc81UBBWteY9eZbxv/WHNE9MpxRu14sj7V4cCxqW1zcDqQS9YBMjoPMLl7vjwOcq8Jq59a8uD9xOCruZQYtL345Ahhl6slaLdJ5risSCyaPkQD8uas4DWvuy7ElFGI9toPRW5Y7G+tLrJBQd2Sls5OTa4ohyjgGFeT6KbXXMjETI+N0vq3hf3pruiYphvOkwoiAs/OiE6imk0pRe/eYz8La4WoG1RljG5sMoRUPdUWYgpFb2b3pdltj70gaTODJR+geayNpu+wvWZOILw09P/mJXaDp4g9LTqp3Xj16zGSRfKBmPsuBnQa/2wTXvUS5mEcZhRRr2YRwkHXJFUDfWOD5JvD26MpKp1avAfj8TwX2H7uSl+jPgIpOhyhkIDkuuGLsMikra9JdHVekZuuXN41KvzqbKxpvgGD9zTco0nTjPtL8GlCWOxRDKk2zcH2qGYSqDRkPqXD9ExCBbD9NjU7gmw0DrbDPzC+1yixslb3Be9IKbXJECicvPiw+Noc3F9daYs/FiL+Zd7myVxZfFm9b6c3dkUBjHpcG4cKeTYR4GyiiQ2h2+59xG/lXcaIErAMPLi9s1oFYvCP8S5nm+9QluKtj6JVS+W39A3mDFysKkulXuuIR9a1oCJycUG3+jKzU33ujqnlKTFt8hacX0SvL1fZUAyCi6uZZ8mYoyTlWWLPYPMIj+x/kbeFPwkjdxjmEtZvUiiDTO0KdPlYMxOdLNRwy5MX2+HMGfl+0jYPyIC7iFEvd9wlyOONFVsstUrnOwihUhPBN5nlyi0TJWTky0X4DqSu7jgb9yv9Fuy/1iIkg5wVQOg34x2oHQRdzbpgSAsqekyM05lWx8pa5gGVmu4l/WpSJySq/STUr2hIlF3FfpRAHM32vqtwjbdhsatXEEOK1oLOnJ+RWbeog+RRPHO/B9+6dms6IbiTuDxXAIH91oCsdkvcNak8DxS9w+uygbwBfFoRJ/TlWk1NbiogwbXgeChj91kY/egxnfetKSc/kkCWsBiybub8bxweTC+ve3/vXMSvLq0B8T0HsLqXnVYfBwo9nriSoGs6rnGvz1gQ8LVsHZXqCzdjeAu0SmbUUjEvr7P5My3kJ1UjrSYSYxA4dN8NN/SSlHqGauyiB/objTeFn5tEs7YjO+OsZc8GhfdDUVtnmCZY55Gfod/Mi3L/RkV+iGeTGnyzVoMr10NE/kXLmkGl6Jp9LShLNxTyqVKM/+tmrzuuAdQqHuBsBzjIVY7hqS+EW0henvLdnY73cUGV/0i/GP3NSIFztQNDltPyyr6af6Ai0a0jHps6jjxt5sMtiOdPY7XqjDZegopGnlSwpW1yO4sYP/h76Kn/WQLKFyEKlwDrpro2V/m01tuyFxNS9Iyuf/r7gMaWzjsFLL5/4OGH3D0BtL4ZHYxO9MwPZc0jLcsvfMVv/fdzthNwHznlaTBwqJTzbkLHKZPSU1inPTCTdR1DMRlzfTS0YkFreX1TwWSzAx1Eo0HWP/PwWtElI8IlRQmVaMIG7PYlZks2p4to3Uqi14gLUCgW/MUev1gy200g8aWwcFX7uMAvXHZT3ynXm/taU4XxEyMoUqBM9HLQjDXZ/5eHy4jB/VabnX/EA==';const _IH='6370a1fe1ca53521f6350906f3f584086574355a074522402b9f209cd1b7d671';let _src;

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
