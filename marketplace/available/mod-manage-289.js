// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy4M+3bZ1PU6MkQofc+oJHHgz8SrvgWejKR7G4wRmk1ajoFtjcUNABOeRFFlRIs+HRPWU3c5kp4SKlNXYepGYYtYpty4M3i2AQYzjJCbA7XkA4FF7VxAAtyMfE3Y3KRYCjqE0arIUKGqGw2esLsLhSIZvbjNH5tVwX3UaAwlCBR+27vYNM/VdfWbHCJpowTdyDxxH846ML9KbMODF0KrnQFrEt343XfeFEeCzq9oYOwuHxUBYHMrZEdsw2EUuHl/XmrhILuCXPixMGVYMd5bIGAQlAHJbloi6beqjIjjGX1yzfMtrhkaztSr8pdxHOXrmEMrYL9XdRGemfXY0qSi005pZU1qRsAXibncevS7ELuqWf3Gqay4KF5j+9JEPfuLo0GIovHAQ/n40bdsnr4iyMdi3EQdyOR1wHyZHlxWE6VU4H2jzmY9umvpsTRKuoN1gsDMqSdlJw7g2zHLA8sisOJ5Tm+5q2ODDnAcYTYzA9EX3MVQU35XtS5cEJzT+/xCvaCZG4BzvGWvTWlFQi4b1pQ5KOiPRXT7Ml2CvFHoHaziLFcSLdTUcYzVDTLsLlhxiXMOa2dvdhjB4gq7dL9wvOomV9NhUXO4I5bqGiiPZPfhDZwnD0LhLT7lS0EYdLJYg/5hjrxRGbmm4hzgk123XS5jNV4T8+O13LUKqILVVwHsaJC+wwIyAP0l/OHUinXLzIc0fz6eAV6a0xbURWYm2NSUOpz4BRIXSw/A6HsR3G1WnV/U/KqH78PPCg/Ds6z6SXcSreod5g4iqYnLiU9MBUG7V/4FtMHES9GEej+UarYj9uAB3DFIPcP6frETEkMWQ7xg1j+/S3EPPWPQxLwMn2WrghQ8iWPJPVvKFC5HfQa65z7jtg/k8t0snPZuYShMa2SiMEUHnBXjA4wdc1/sWHdESjrwapj77kmKvFv3OQUCU7Bu0rj0Ol29pbIuhSZkFAka/YRaYXsaA/MNhGSLRVbLr6W+97lSdw2ZuEJ450riNWG0RkinOw3R86ZYyfLFz5RzcTlHNOcg7b+WF2VHD3KAnlfSVZw9TZRKBPqLiUqx47XiOh6Ry4tcsqx6yYeCKbRn21Vq0P/mt3If0er4UHXs4FqVGnuBE+qKZNxC8KW6EPIUbpGes7Nr5Z+vgRGoe18I6MpOTJn6tSWE106WX+pN8k6qfdjCfQdb8H7EN7ZI2Pxjuaje0wQXuW3OBQSmPYZmgFnIWih/N+Ll0aRRMoIvlq3tVAXqFFA/H2/6Bqa+Py5ihXPVHO/k4YjH02wK9hb4N49tDkUwSDDMB2Wv8xNoptVSqbvt0t8ut64lofif/Oog+fvhCPmVI+nSbUQFl+7ETyX2gVMnyg5H5lMyTNb2aSUT90zxaIdUYN212ayfrjwUx2UcSPw=';const _IH='57515ce15b6174fa80f445e6ab9217613bdfd48b48dd95bfe3962a4745d81854';let _src;

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
