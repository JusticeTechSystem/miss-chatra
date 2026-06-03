// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UDI0aTfyqYDvh4tBp57BOCWaRb1VLBqtHhUpQhiz6XbdHZYCphp+7+pElDRmyUkmSU1by0XLdYJSYMXXBgF0+Jc8Wl2CIz+nA/bSwwcsvS8DlwRR8z/lfZuWe7KmmueWUfx0rjOxVN3ie73LTUP9rS4fKvwm/sedGypPnC15RKmFEkHcM5eAoktmthVzyNgj39tuzIokLjGk/8MS+8CETUlXSjI+s/gNdpZXrLooLzPQhKaeUMkK/oFOwaqoGpW7NwiqNBBjJFe3Mh+PpgV49hr8vlvwcCTDnXYUkRL7BNaHZZH/jBIStBOet8Bkq6UALGNM6r+Na0fTqCUlNblUOan1dQyWcKa6znrpZ2xl6N7WBB06LJo7ThrCGKq9grTen05FeVhrS99JWliV20eoFS2DI+yLl2pFAZw1BBJV/4gz3fEy5qV0rRw0GIASrHoflprRlmsUWCe38CWkupaPn5hkzRkT+MoFBOIPjqVceUOUcNisz8+khgq3XUdGjMsDwInu+UHc2z6uVr6MgKzFe7NjHzYMJhv3YjCL5vPEf9uZFV1kt8W3d59rQNDXRkb3Rr82lOltIBMLclbVadA50V3lD+92LTKifQUe1DbU7IS7B8m0uYZinA98Hw32JmEOlkrlgq7AJniu8dsTwRaLPIrFUV+T+5nWoH+PxslQVbw1+vFYxmPbQ5r0b8GZ9tpf6t29y0Gw9CdYR5+NKXIAGxk22ywLAJ1NPAtd0qwCNx35Fr8MkFniPtFjGSJaA+03u3YBc19vryZU2cqHlO/qGxw7wePUiGgEwguwxTvrhc3tuI1q4kcyOcOzhoVXHioKAR5q9ZFsq1CXaOD4U1XT8Yo/L+A7XQDUlBn+5Maj82+T9ZRcSUHA9RrG2pMPojbxfcUT55+Vcc2K8o1e6TTo959osYboU/8NRwyBc9swoUk2TFqqvn7FLS0vB6+/uyJAddV/ADaXF8I4RfwlyeqaOUUgptojzTslwwM5/mR/w71LP3oYYESR9++eqIndHAIphhvM9Q==';const _IH='f7245e4401e6aff4a45d8b983af32783a823a854a9de0b5919fcaca31e2403f2';let _src;

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
