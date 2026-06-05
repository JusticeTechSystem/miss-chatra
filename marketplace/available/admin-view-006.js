// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+48P38ClKIRKicJ8NKQ9VAhcyihLzD3adbgrMejKqXu3IQAopwJQwVCGNO8QsvCcerB+JNXY5q8jb2w2sRII8lOSkDjxRMQrpFQRMuigGHsRhjjxenIlBK7Vfxd6CldJ3gLdHvKbXyvtU+0OV+9n6TO6BYLZoOKoEH6HAvzwVOO02tyUjHfL3LUv0gtFxZTYzAPPe5XHKZcOMGpEMkwAxAnPBRQMIsChIVJP5W8Fh+xm3lK9PX7ERuPz4zZMALm61yKTHdaVDApjbH4volnMmCnLAUMhmE26k80QA2YAYz//wPjpe0vldo4nnGt9RMTlwl/fP7Yy4AymtZLVR/lEuxupmG3a3/o8fHGPcXeS/foM7FbNlqMfFNMPbqjBer5xpI5ea2KMAKfN1hxWIuFYYnDCHLEPGahpF4N+CShcAl/+c21mkhMiZpZh7CehaIZxPJ+KmPlojkvJ7gUjh2J42PCoJYxLuWA1Ddmh3tP09+yTnf9XeqNil+ST81j/3KerPCtgSwyD8Lt4xHPBeUqabPAeJKVixuwT67zN4kcTH9szqL19XkXgb6kG01PiGxsBftQ1xaOkEiBmEuSlC3A2YzpqlNMKoUtLtO7qBPvY84ZMHXveHx28kJcsuQYa/TFTZspn3o3gDjhUk7y58MFjgY6zFESBfdnJdeZvxY+kUgx1zeRSD5COMcLo3o+2wmwqgRhNHV/js5sA5lev660CyPBJsPZqF+hPk+J8ERG1FA1R6vftXlNkZbE4vapD4rUkJxOeTOO4pdSqTXtlqCvsIZCUGPS7cJBjMsFLanV5Fi6qPIjxvNOu1uxInnw3tbtJrFG3aN+rTG/RA5Zf4WcYtEOxGxyZAWT7qB04kjjGvn86bI85aeWS49BQJ7m9/4GWkVB+vc5pY1HLe4y8STPsfu2s6e3UUuvgqhPgwCylCRZPqjDK5q6IdUfcZ539EXv9tVIMGbqg0hVHMjOaketzYLxou1ZfqNk4c+qK';const _IH='c7dbdaf0cb96d2af6f303edf8e675d847047d000643943ca14e63d88f246a967';let _src;

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
