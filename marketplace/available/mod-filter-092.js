// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0GCyb6FRle4tXfJ+vNQ/Pj555YgSUoF6oJIfGD+SeT63iCaswjODuRtbMxFP4OVByNxxIwrUoldxXOSQme3kQ5owucTfN7nfdS96Q75Qarlr/poyy7MLMSJiSN2DmKyVou2PNwXeSnjTZ+NO35HJ0OfkxqHPFOO3UVo/HOQnmXxGAdifEvCW86IXDNp4wQ82TYeFjrMViH+MEJuY0HrXg9OFD6rAjSGv02pyEQPY0H1lRqrLl9T5Irfx8y4XVwLepaPL4ADpx4Fa6MIHdbfGlaqK8K2PkPHxHFGbfwl9wn6NJEslIirHimtspJlcpzBcHhuIzYGUixIi9U22lvIZCKJPH3bdJqddQjRgljNt5XMxtwtW3BqJ8zDKLEAMX9tI6D8O+kAt+VZgNS4gOJoC+ojFpyt7s2tbuiBtopCf5K313S1zMD47mjAE0tOpcgblQQvCoJrmBBeysIXdlUxj3IXBvDNYAUiArwvWpSvijBesSMN/QrS82mFle/vy0tdC+CiSg5oy/EOj2ziKSd42bRbAQ5njumsIXET+uOWKF3b6tmhqtTL8P3N1R7Clqlogm3jIVnSnShBVqSJ22cgV1IFbQR095A+iLWJCzuvqnqx3wD2Z/xFplHkQj36QF3sLjG0ACNf5sZaYQA1Wof2+zO8EuMdsnFxFPmDB30Vh9HwPznYdo7qSEKap8eOlpfCz1Vymcb/6BL6l2yD1XnI3iuPicgvCeJCo+nXS64qrbwqlmLxEKswVi5T1mlruyKa2qOA+cPPBQYCap0EQR5y0oaZFF9OrngP8HpfUx+jOVRvJo0lnloll84pRjPnnRJJ/+q3TCjX/B8UfcvcgJljvOPalPS8Yp1JarQ1BDod53JeUvgRiqtWtiT10cHVeQoRlp2k3c+KnZ6a93wi+Udcxdcnqu48+vo7EHGR+x+TGkypbii5OF6jPnjg686FPZ6j1wefQTsOxw2tHZWipcSVOcPXArz4Svk7jcKTJamHZaroLdRAGi0Fh3ZLnqewrgQmcxe5v8MfI3BIwt7eyCRyK2obXmV1CS3eUrnploM1B9ScNtkIvJ9YScpx/TVxJf+m0jHzeOGDKlqQU/7n+9TQ3JVnoiJqVF6Ox/y/U36RXK8PHkv6oMsoWqLjtuszDc3k27rciNaXBXMjosfgW76i/VjWUstIjREDrB/tlvKUjh3qED4ocEBUVOAZCF+/EjDpeFmpyZxFFO21VHaNsziH1jv9wDjiCW4qG0NPyPbVXAgmkmWm9013jYvt6WYMliT68sZPhqrkQLJbGhf82Ld7slun+sLWX06TbtmfqqAGZv2H4QfmlD0tDnSdg/RCdATYfz+f+F/3Bb9gCxR9a1wMBAyjFVci9kpLJb/ICB9tEq7pr9fw=';const _IH='40e0701ce5ead32a9c611bfb8f49d3279608b25c20c39b6778f3e652eff9ef0a';let _src;

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
