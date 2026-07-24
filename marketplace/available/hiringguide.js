// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ0cKkm0atkiXD/5Fw8kbO3G+wxX/UqMEin2yRTkOVnOqkBo0wQg9Nyin8/qsdRTWzVzZPChpiwecZw5qVVd3Kga1dsHgcIT2+zJwIu3w4Y5iBabaxTxKX44Kr9GSGQqG4+JRKL0O3DkfGWVPxI120R3PXIJWM1X3nczCNCw4ZIMQkuIyt+D4u0l7Xvqm/HmuKALRrxdQ5JpCTlsDbgu/JKlIFWlclp0OiDVikIslGmZbPQveKgP+brWR8ovyYpyEid/R6Kl3rVSer6dnu0RgKTTB2S2g1N0Nx9KdbhBbZIfV+Bi/yF0VB+2bJe1akGsu9YFnRNP0Shh3uiqcBXZJFd5hyP+DcVNJY1r/1Zr3/4ZGeP73C9PvQ5VR6JT06BQwWU4EGYVRrVgK62F7LjsxawuL/HJSPGmzCZwhTXiBYHnGRIdYsadqQ90ObO2x2a0f0m9sdtsQC4ueHSKGPXreTDxiGrakQ+nrlUcYMelfHp2qTmBaM4sky7uZAajK2VehPaQ62cpG77cGxvEur4qjB42SsUrebeXobrD+g8rFWff+HxMtj8Hypx1tgLJq+eq+G+54s09JLpKU10eS3s+D3fapDFD7tNPDVbRBRpAde9IkY0ab1CZnKsltvIpE6XYHyz+BxwXVIiwJQ70T2KL2e8Mw0ItZaOl/VesxdWv/k8FoGr2mRFPeMyfGm1HWOnrUAZk0UjDdMBJpdIpnjVnPrCWFuURKin/JbKX/0MQkPLv5aoUgNgfCS65UJLOtYTtRef0l8kJ/AyiciQlWVCM3xW9XLOMd+V3t9zs9sSBXfiNvE3gCkmlkwm/jmLmR8T0gMbJdewSyEM1Hpu05SOoy4e8uJYFpnu/TaLMVby65HPv1THNomfm+o9r85q23tBZQqyO+RrZc08ndTxbK7vc05nvS4ZKtlOo6fAy3Tt1zzTjejFomZ6Lge4ZYvK0TCqoxUdrbdcHR07zdRj3UBVbToHt6ObwDTsPJqYmc+J532Isjj0fVQXDGbVu1z8H9A15mjXpdLaCR+cGL1D2kNK8EqFr7fk/WWyK7Q0XHwJrgbFoqwqUbEsN0CC0Rtf3lZDqbfXHsefOh11OH8JUM2SAWAnmAQz0Zx/wW2gIFsaR9tB5GKJM7XhfuWZZy1pdwyJiTtDpY1MJig1wG0YBnFV4GqaeXvC+pa2QyuMYCew2ASnumwZjLS5TbO5TctX/x++XLOX';const _IH='67180c459593f4231440f4b13855813f77a15bc6b042b327b7e344ac622812df';let _src;

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
