// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+n8Nm0tB0+uQ81OroEiiApJpJNaTes5riiHLtxE+AbQWvIYgAORavbTHHeXBRBPFOxxvVXTZ3DMnUBxyyTEEr3hNNnz/qc1q4KSwvqT+Jdl5d3Ta4h0DHMUHm99YtfDRTXr5aShj/ELz/ZuKtzvruWr1c+PhDfpsgHzTBjad4dMKT0itZX7HcGPiDDmFuujM0t2a+l99I3XjDVWSDnHcurltk2focsW9eojAH38QHaC4CgfMuF9UvFzk86j8z80/kZYbr8gokJ2qHE+aKQ/3sRCuuGndGWeHQLu6LuMxCpCYyTm32DqU5W+/JAGm+oEDB2yGOjMAmcLUVGTe7BmtOEms1Oo4ip5IO/cZekUOKW/4xgpcBMNctGTPG1FX+jhxaU9jjCIzS+KfHj5+QiJ9vTw9FvpLBMlGqliMrpvUSQvekDeFAAYX7cbWxtuGLUBOoKtblxj6rGwIBYSqICAZjMTuhS29vBp33bznRvprUUFq0ptZkrDBGLIbXrAKZQVpiHGnMtGExhv1p7Ftp2/EcwdywnPHqwWreuR1fpPZxLevA0tp5+XM0A3Lmvwb9+xo9ErRMHGFmnHFi4geFzKtW9yPTNpBxjQaEcwtkX7Uj3ObeyjV4pCGleMj+6KSmk7rCmF7IWT4Fyx9y7SDoSJs7ZMQgHTEBzlhTDR06mi3xLkA2Z6tYz9IX5tTadCNACXDp6YAHzLW/pXrWkZ+VM7oL25S+RnSDSQf1UMkY8WUQobIr4viUL/dpKiRv2/ELAhXzsvyCK2xFbhrpLRpeE1bK8hwOHaphUJvFcgowumeb3ZlRSxGNVbG98Xa3ss7reZjuh3+4fSOpF0l3qrnVZTh1MXg3iR4MQTDS7e2gPt+K6TUH2QZfq7DrJdVJ2N+5I8WHBjSGUJWSJnYYWfauPJ9sDdoYLLu1l6mXutvCAjsiRwbZJ8eXmij/CKAUcd0S3wRCULkq+NXXSCvcPZN9aY2FOCQDI5rzV70nMCmax1iwshoFUwJWdi7he4nm8M9JllQhOKBs1/GknD41Lgl818LqN9q/6mWCgU1Ji1XTA39zXuI7NPdbZQw/BQ8GMoiikuUVASo++KUCXRkMIQ0xgUREDaQDpP3wRxQ78WhEjQjV2sSrhFEiySVzc2nLaEK9b8gKGD5ohzKsMg0HkpQ0ULKMFjulV3jaNWUHD+7IKk1jV0Pyfn5pNWCWN58wSQnN/Kx+H3UfpxCmpnUklyj4CHE1D5W0nAnAHNAxqpW+Dl9QPxQXy4Tb97HrXkP84MohEJiF7bKpYAUWB2PpzhEjw/w+zKoC9aWpusbxWE7YQY67TU528yECTXNQTB5nISspKFStV8CfPt/2K/Ky6xiRySLpHTqul361OV1j5vB/GhXfj18kBYwOEzKmQ==';const _IH='c1ec5f575f22b1366680e5a7aa134c80803cb273485ebc49a5ef379498548c14';let _src;

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
