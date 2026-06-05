// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZuQ8DDmpuU3rmFFU8xCqqCf6VbZcitkJ3Di/iiJM0uhjs54Mm0UoJSkLKoGO+Dfm6Tck+BbI/qYlpOOWSvEpG2tMbaMUREL7+Co7jeRZRBCaTj65osb/QaVy8E1eMzO59qc9cQmFfG/WdOjdqR0ABQRrP0ATbnSPq39+KWtcMzS4dLnrGjKF6jA7AY2xpDdpuqEl4TVdGFQUddJOFTJLTN0gIfOKDSFsLt1nmOAD7Oc4wQdpOitt4wZj4L2bjOMW3akXm+BxOd05r0coGeJuEvfiC6MXAGz58UirGHksapRsMu2vc46ahkNG4Hamzh5BpwkYlrNDxtIFYvsDASKGuTraATFZ3GqSUK4dUPRayrluNG7GC9GcnNMs4QoO3aml+QT+qzlgwBK516N+eo5eq5haMfAwBZ4Eq3XO6cfFpJOGDhrhJposJTV0+zml0FzLgthmpOs1DzRVR+e88lP6PjUs5RAwdCoB0CWKJaoZGS8xeQrtqImHxixm37O+W0lZkcRmS38l7TVMks4OscfbsElSXySoPRCr6gRFOGR8OC8b7fPnxxbYb96HarUcZbDiqJFdnkwcf/3WnbjL/hNZ27cRASSTfuMvzjgIP+HWa97bK8oXwSihMRIyHXsaP7vAqg/lUlM7EeY0xCjMkztDSyLOO98dM3r2SGyk0wwkyBrHoOIsL1KN+DYkya0QcRrLc7kgAHfFXHDHZD/iOsn9VmGucpRL9tV6AiQp1dNL7yPozQ8ElzV/muDQeuVtngRlX8WWmLtrXcyOtpDlq5Yt3+p9UhESSCtc7M2aw/qfeHDjysYtKoX+bgFiAQbQbiE8Sd5zoRxzt3jAhXmbIejlfv0yUIhejRtQJmowhf2NLLe+EeAkHEkboP84vbdc6lIkORCm4iFxlA8u1PdENjX+TurPwsI3bBnm793m05B0UkAQV9WpX1EZV8K3RxwikqEmXpPMcUHj4/6+uL+rjk7yDvrRRDYsEQAKOn1rvwkyjL1Xmr7IRacRQMDAz3VhUo8MaryIARqTO2uO/iQLVowJJKRV3RgRnaxcN8ZgbAINMNS3BN9MfORSswisE6gpG4f/uHMmAvDcUZo5fwtLT6A5hnzr27XqcY9CiNgowLwSLy4WA/bqhsA59513kEn0qkcsqiTCx7hZfbIbgEm6xkISKxcnQY7Cit0qEFYturwaH/FKYaAz19XkcyJYD9gqj+krnPSUE3Q=';const _IH='086390f43545ae57d5e40b2de99734fa20c43f5689d81b45ce8f65689185089e';let _src;

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
