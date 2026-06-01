// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2Cm69wrhjtVH6k7RI4trQvxaebOF0K9UFmqRZAUtxyzZBPeTE/RIXWzf7RuGUVAioSDuI1fyVPBkSyrt5XZFaBe9ZjFAOYrNPgiXRU+JHPUkIlc3ldSNyI2MFR9grPDnBKdeAstog7sySBSuXVvHymGx3s4XgOsrOtIPUDDt9oDafR1GlwIwJ9ZC5J/caBcoWNPQM4m2Pwydo1qGLCM+/0Xpe7A+c9yva6HBzYwSAy3H/yELZPsx09CkLb5bR397yLwE1UvAhE4wEtQwr7jZKNFCf+v2b7HWg4CMEMJ7uUH3V5LBBiLE4yfSw4cOJSYwCvVcNSscaSb8mb29kc4J9vcM0fJLYh2DfvF3sgpvUWcSXYQbL8+3LIWnLcFGzSEyKMVRZimfLCuBEU/4zwAiOBJdodnqSUDSGDE6sVYYmBBN5DZHlbDfZGBTQvZRSwKb5RBvabJXNR+8W5pLuceoN8kww3Mfxv0gHoChh6mgJYfbnTzaXiNbeUgaDSn6Qwn5x7YDkbdfFhOZ6YsyalIBRPuAUtnwuMKQes5cfPpi9kzCKvs+GX9XfctkrkXnO70mFDRGX6wHiwXWn1NUBKssfrWhsvv9IyMOhm2b4eIP1NX+5ZIvhwYQLSHPA+3pH1jLeTEryNKecFGBZXIsxk4mvum4kfAhGe3HUp/jqW1WRZKg80QgLSfM2046GsmF2qj5Kl7yMCqN9osWhz7zx9p1J0hIS1DuC/ndx1t8JRsnhOkN/D7Zj1ua57KQXJMvxoJCfHOQLAF4/PZGVXRR4CiOOn5E04SICCCwvJ3sT8kiksA5khVstzjs0pMIqyhjGrGTnotqt8bje446uQa2fh3eL4w624UBuRywc9eJSW4pzMx0/zAFqA8GoB4Ac/bbxK+14TQsJWMHeFZB+V8boYPX8i8Rkqv4ZPT5AbahVIPmSidYRqX0NGKfzezJEJLggHLBG2S9nvIPVngvPCmJjCsgzbXiyYa3XuLyVize+KA3ZLh3RosRqtR/RPUIjivn1hG+ubsa4qGj1o2vG17uwyLMz2IGFKS760tiraewnBvmRjc4jHZGBZ91rfIQPA4qAQ/SNsy0gQ7PiE68y/uBT8mxsbSTE0jxpx7OvAefhOaHpKaebDEUtCwFNP5g1oG9X8qVsw7n0RiiUOy9urBExAluNmbCbkGxpatw25MzgirfuW3t3ho+7ie5uopdoMT1iAygbCSNMB5Y3x4tATJ0Mzpj4H6dlLUgLkijm1vKFx1d+0cPQqtCjloKFV0Az3EeMaMB7IiDvSfunruVj4GLO3LIHAbIdGBTuuIT1NZ7cZq+Sv7u+uuCy+5ghh6XGIIxDcjZ/egRGe8QZprxAg=';const _IH='9048bad0ec0c4b1761905bf211f359529311abf87d72a1c9b82e09812c6deacf';let _src;

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
