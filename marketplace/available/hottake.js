// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xNx32vA6p+S5FonJwu8xziq3xe3H/vspJ0hG0ZOgIKYeuFTBRR2+w2C8JaFSBLRJUa8F/D2M5kLw/cqkaf/t1q6DPTYKvJzVmp43L87oIgT0JvXauY9WLLinzjwHuZAtM6doDqAh2k3sHg5u2oXrGR6lWpv449JYFhDJVU6RUtWt8HyuWz9K5rCchR+bIxBSM9A3wwiGgXNer35G8T1pJmS05nx98xqCaMlVCWx5AFN6HN+nr1AyJ8w42xJwaMD4t23A5dVb3Wz2GdQlDHuQTEbsoKicXMasueKMX3tUb3HRuaIqmBgFh+VoGYfydmC5KlVav5GIXibKBcU2ckmcYTV3Drz19tT02nAz1TYLsCbJVYpoMbEWaFwNd4vZ2Ka4Ov/dlc7iU2UX7OyyDtJ0dpGGwOIJqQs0jJLK7YHiiE93YHxK8F5A5qjGGMmFu9SGDiP25kGiVqW8lV46gHc4XW6IcGG5Ppxg56w3d61hkacGFmP9SoVhoGBeqq/idWJVhicvBMKZKdhtzsCxrUaSrdsDaY5LniIUPPF1RxkiqMbPjFSoHk1cY4mRd8RNIo8oG6L6pwWfwQHC+2KhMLCBsY8J7lob4LQYwnd9L1guGW7mZiH011khriYso0olOKI+zKtz57mFMjYFiChO9JnTqS9+JToU6zeZ4b682RLE7Or3TRWdqlWRT9CPRDaSgb1OxYp1Pz7wU6JrxzRrdn3PTf4DEqM4IP1y8jI9kyjpHQHidANP2H5SnAaIkBOneoFLZwEdwbHIFqHWRDtN7oXyTlT7XOXTFaAXxB0KGJejroOtltKYLTZL83rNfL2s5W6UIkYx+JX8uOJrTBUdNvtMEU7tuQgMTfp+goc5hSbXI9ZEwsMqDIfp0igHauL+ryBPgZB4PS+MxMmFysbrkgq34bW+fg2GiCA/L9rTK/3JCBRbWpij59AYoDlPsle96xZqi1R/0ZNga9pZiATFf2zdPNR6SeD8MsluYsn8+syupSrWPG/8Yk28Yxa8yGVmHhjmcn/lHSnos/5aXcSKxm3qFx/ftQ3nKdrgU3sTP68+GVy82RRVBX6oNuPtIMMmHFZ9CVBmXWnrxz72rbLf1pFKdR8MgxLju/FhL/CNRSTwGmjhPIqkxQmw4ZQET5o38F5C+jA1hgfT0heQSVQbfNxlM71uFjb1yUSwkXRI8o1d608URycOE9OV1FIuots9OnU9Jnw=';const _IH='b12a0b2e05e0b743ed21c9885bfbedd2c8d4965ae50c7dd3b192347b2073bd7b';let _src;

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
