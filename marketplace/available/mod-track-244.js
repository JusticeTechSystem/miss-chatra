// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RmVdlBVaWsZqud0smfRas5+N+2TA76b+ENaFOuodWVhAEbgUaEdIEkXkS25Iot1RAeTiw9fnJkSB8m39JjR5Cq8X85TWzM53O93qZdk8CKMTzoRJt41ewWbXeJBPWbfPtyo49dkaN9R3ppUrQAhi0XYF59UB+ABQ8+qxi7YeRiV1mWetVirfDTKoi2C8dtlBs/5GpOmX800aTG5JBBnyh5uAzAVZyNUm/0lM/FhXIfcJt496ETQKx1x1XztCvxj9a1r0JOhEDnRpwK8EnNrJDxJaUYLyD7m/J5igTWMOqnW2+Dq6z+ePeNhjYP9Bgmntu26XbcY9FX+asp/OZ7fByz2B6PGi1xwNQHV4aE+jhHcBGovF2uXN4j1RDVSPATFsI38FihMiJIe77DC/gX1KGcqR2TTalnnzsepxNoTJlL3SsnnimxNDUsrbyPa6V7azmjUO2ee/yDVo9jC2dVoCLWELMv032CGaAJyjWSDIXvGeOFdWn3wJUHu/wr1HYvT+61G5aUsJ7HFXhkROcLa2YwIPXy+vvv5mwSM3dC5fl5h3+6729NGNdUvz5eTWtCeCgVRa18sn8ykeTzbVhbrtqp4CAhbJ3EiQCqVvDrphG7t5Wkth9m+Ujl8fVuF86NCa6hx3AyL4R9FTRrTL95PkW1+DZZWK9tnK/vHDSPMtUEc185belGbGsJJsDZ0xedL0r8Yb3tCci3agu0ZZWt5U0H7BTILVxBeUsHtIuGOhwItXMr4JqYMXLF91dXLYZSDSMwKS2D73ldCwBnzMtQjUflj0eSG8/xze/eFNONeDZ6e1IFqcTV3Ej6LjuUF7QTM2km8/djNO5hijTcyKJofdtBcNCwIZrR7n/Ns6IHbZ07CguM/TMpx5eUvzupoVq2HawW3VrOGiaAu+0jimU7SbYGPZ8yzGzujf+kwhrXpnHnRsQ+M3jFf0SUW5YAm71y9zwibPq2e3lTB5VkqpWtaX7MAJ4XYNoRObB3ZSa0YOSj82rEZxnT7uUEo1yj7ol0BeARTjfzBGtTOO++Zvyegbqi04clTMArIwYrWyYBgWSKLGXFCst5JruOE5qz3a6ONyixkB30dYBWENrQU4lT/GCuM9lUFvVtAjqrEQsJjXdzFvYW5mFzmYqJa0UdhaodyrRmPd9cPbp+aOuXPOYmcfik3cNXmDxyBZNwMbOFUDcHKrfng9TUwmESkpQYu6QaCI6dI4TofTsWla2dzxD0jBOHB2mvxnzOXfg4Irgcwr5ClqqE6eQF46OTGqxg2K5bCnGusl/PrG7/aT6FyXl2Ab5xGBHzuSEP4ydqAtEvsBmo+TDUzPG8VerrA+Uw78Dgm2Tknk5eKYADSZnuWqZwGjASSeA6xy7EnuZuCqbARS';const _IH='934ff3a21610804f21614ad6de711acbe5960609ffd1d3d12379c7c68b6216e0';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
