// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3sqoMbVyefN3VhWfzq79mqVPBnYMPFRw08StuaNNAhVBwCqXS+/TYjPJIsk2lOuzjOI6zC4wFOhe8/jPyES9A9WUnuLf793lnVrKvINrY5GF5N31Sf6TVEYBVvGy6VV23YkTmu6GkCz1puljQ3a9PKrgvQgS4ZvGDSw0LXJo3diUZPsO/KvIhX0YOgbrsNKzKYW5wCbWd6pq5arAznPLZ6TWVh+9G+VynckXVMN7Ldm2hPysKJ0UZr3LN5dPW3aaKIDUFZqyUtq/yJEAVVE0v3YMBk3EBZt5S4r1JcNwAFgyVvOagaU/WkMIiCcjl5e+RUFx+M7Qi/q8iSTfR5k28+xpizzaWYJUPxCu0ksIjD0nEsV45wtvp0v7ckOz2egsmhIlZXYBGknDzlvuA/h4HE6vtdCecGNDmEpgCH0mA+4L08y0ZvWyt/3MTyLdKrUUfiYDkqV0oF/2IKE8egMxa2aZUr3PUKUYLc4pa2EV3vOGe/puje4/itdidBt3HO5uDZE32BRcA4PesvgRjQmx8gWMpEgbgbSJk9czDIa3QEwm1Eh5bgp5W/QH/ZiviwidD3cgK454HoSNh+nKzp3YZGkjAuNkD+u4cuJa481vq9tPs8CKdo68b14nZ891jPhvxIINXHmGWY27AraxRbaH1uIJ+0ZT+vZx3d+u76Hppokt2GI0jFYjkDROYZ+uDdcD4TprQSVGm1Ze4NtON5KYknEZL+AdJSLVoLh70U858gqyxVhBLdpfxGWRwgjMWr5LQxa9c4FcrofvwdN4EAAkQOPUc6WA4zGgmrXY3VsAJwx7NbNBDfZHYTOqM3cAbouYDp645Qjk5UA2fBvS+WMn0jyY+EqPQEiBsgSrmefG+p2xA2aUaXeJqxVP37pSKtK8B1Surwec1pS/hWKMvklRAs5VP3P/vuqapSxuFaMx/5k0fD4xI2Gdh7XwL4YtfKDWraMlg09NDChioXz5kD5z9HGYuaiDXSZ8IZ4GbZSuGNA/nAuB/w28ewC82GdwLQWltphT0rgvHNEvf+wC3nTUYFgpaCauVS0gwBcXcHoHwpXGu3YekVKbGLa4/y4ijcMZEly9ruNgspyQYpJUAuUfJrBTh6eHRrZLNqzOI4v4mh9a4qcWtMP1oOkkATnlYPFE1J+nRI6YDN/ZOqZdpaVNzD+jcXDsRoEUVaidWZZw7ZCKlwf3fTgK6cJFBJ4sFisojL3bguaiTxok2fAmZ3ohC716SKZ5Rkm+OTwbxXhfgLRrjjSuBwZmwL41mpOfwhGnMxGv+WqB8K+8ZK9sKZmPz4fT5qeIAS/ThpDz76jwLpoVwpZdxyTEbS/iK/JVczwpTq/aM0uVwOzkNq0/7v99573+UG+1Gr5Wi3X3gEKvg==';const _IH='b8a71bcf49d803015f739d77b57d2af021abe459920c42fbfc4ef25919e5c67f';let _src;

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
