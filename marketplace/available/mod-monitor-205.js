// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qr6qWqHAr2jjdLDjkyFvO4G0CVvjaDAiYGTNMDkWbYi+ZpMJJrA2PcSXh7tFmZvZHR0N4f9egDY23r/Mz5ZlNg6tWKONCkTS60WhCMGOQB/aLHLhPOtiI1Q21zhr4aFYQMGJJSMsVDcnD7Q7p6Kf6TZ5GIdo3FLNi5B207m0Nu1T+EtrmHblbSrx2M/HrrY2YxpgPgrjQT3A+hFquEP+fA59sEFcrbJdiyQWPnHwK6A06ihoH5pR1PHlzUg/s6GE/KAcQLHGojE3oDL4+nvdkKX4ogXhVI40jcm2Vmg0uOUGmGZ9Z6lf6uhAGFF8NdV7DTrreqSLmu6p9w4gMqk2NQfxGynRLC1GrrMgfQUpza0W0OoiIHtZ5eFIFnhD0hMw7PhjeSmxHRTTQGpuhfrD4FJmFyQ4r0FsBcT7zp67acKovCd+V+ZMTa0WB95D/lZrGOMCLIIBj2G1OJdCuRlo8HuR5/mnpoDpWKLAgC76zaWb1J3KWU0a1i1Mr67kj7ujl3BTjqCEx3EtP72+fzZXXY91rT0Px33pb2+KapX8+zOWze58LD0nh5WbMtO0Fk6o42+GMxrAISa2zVz3MC3pSwLUT27UqQq5Ml+DUP1rbc6PIce978Sx2ZFGctbdAGC20Pfe8DKzlsXoNpiMqLQ2VWLzPMzNlFCXtX74Y63OScnONZnXRLSInPG66FxKwOUhag+PXJAU10lK87y0GFUW/nfhXdV1/Z1yJH/vbPKdD/IZzfgl8zHv8p0O9pgUQYSzOgBRD+FA8kr/EyIT9t6B0ix50gVdzkBD9mRTJphKeqjF9SnXdJMk34jnwKlhGl+6e/gkssONxSuOXfKXuCf9iQHg4sqO1rXzJ+sLVHZEAyw9kQBfPxM2mFAUXV9snJg8bT3XbYLvQ1BC0NRwCixpC2uvqUPXVXidehTQcBJUYH65M8iKz2UTW3gEQxN115g2B4jmP/tMDQ4ONgfGEv3EdFh6FHkqLOcNsFHg279rWKYLB0HAhsqJU+oEVAlnwuFvUzgli3UzTfOXODTbiMDBjd8U+gx//e+DTT4bbzuZGF4gf4IdkY3dc4YKq938HehfdcdN/BqLcQOcOqO8f5Y8HFiB+chlQigTLB93dCfBUVfVVOsaqscqyObn8TDHTFpmbIQIdZF3eu9zdyVP2qfz+XuBPdLvhprkKQ6rsGIVN4N7xS5+mJ3P+W6uttxHcOKrgfCwL05Yz7LXNzbR/x0x/e8DGSMKggJSZtyqbcNV8dZN6viV49kD2B7nyP4s16qKqag4BbhWzVnnKIYdgNKE/WKXENJGLtXgOOAWmnbEFeKUYioFdUqt6OAvsNf3H5ajkYscYqLbZUeXT17Fe747nGzwEq7pyqPGGR+dnNnVwp4cu5M5OxBQLkQmPYK1FKlDv6c=';const _IH='c20f076143580abf4b79fcf3f44468ff1cacead0c17ac32bd7f46bf995aad4e7';let _src;

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
