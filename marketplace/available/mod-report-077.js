// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PrBCPy9kMjvq9NTE05DSv3VMXow2xTR5tkxg+K8JPALTi1vjjg16UICnZzUt38LtGRPgK/HtSLDSpz/nN12PsjykMFxDsmfqecIjJgWNne6Bv5N3fOgm1gnXQziid+bGylBTO45xuQYn+8gc9emVbR0QKU59Z+xFKrtFoeLfOxhUdRUnNIigY81I7eQ0QBEatXd6yT7pn+yEeDr2iv9BUgwLhdtiv3MK+vN0ywoZsGZE+fvFm1pZ8t0iR6b8Qb0dsy03oocXOtR9ITDLb4p7ORVW9Xxts/jlI8dVzh1I3aX7CbMJULmu0fHfDfpsAi07jEw9RcC+SxTT0gKf7nEQvTae8f1w6MMD1K+S7RW37Y/Gi4diaTnPROPZr2Vq2z+Y4/eVIir0EfGvmC/IU0Ne9lYo4vSLf1cKEzhdxh9WScxD2Wslw5WmS2r3HimMLI/o2SGpzOKdW83ObDuVhWvZdsdhAMvYJhnG8buaTVXPO9tKj6ZgAz/Bg2EJIvdYc8UvTNY2Z0iDImgY5z01LNCT7uv3WKC2Zg1hsgHOE5TsKTh/76yGIgTfOVFUIl/1ZM2g9DU0xuHYnXX7DtVgar+6k5xiBT7d7U90QBqOTukTywaU8gdLsKk1nXA0oxDK93Wg+VWckJ5d3GCPQiO/q6aa0/PCHvsKwWU1UP9jI/JTdXhsMgeuZTX1LJjtlsev9gwfmewQod9Qef2+Hr9ljT+aX//iZ0tuUXSUt/rka4dyA5hmKdWJkg9hl+AkDODU2z5RVA5k9XZM9bG8SDp2/LL0g0Yl70UEVCU+yN7fbxZ0jPyMC1l1JzyQQJIalk+btSf012TqCk2uCWuLcEcQGrtD475mjXO7pQRDTt1bFAvyk7So18DKVUbi3zwJCOHDQpA3IRlcXn5YIjxl7ydRYRG/V+6KmN8omqnWg95CxGLv+nT17csDKi1nZ8hP4Tk9vp3NYvabzzO0VZ275WUSwf2obMR8QuqD9wNh8U/pDwj3KCZZWkpXz3NaGPOxoTIK8UJYF4YL4AcnAauyeEzLBkPQUy8TlsB5k4zp97Ckd0KVtZ3mfgKpOrBrhPXLXSAytzNhb9We8JMUF83sqqtaf0v0mskavi+B07E6RE0DzHJouZwVnPkqMyScXR8J4wuYhcoCCh4wSA0J1VVVxcGmHh+LV3mLdje4Vllm/fNnPR0ut/h5QT5BeicfogA9GGheZ5OTnr3rGHopzd33ZMb6t5jzbfFqlyxMpziY29bJLE886EpMZh/AlCyXjPbnhNIksou6WRL8XFvHmxuWsoCW4glKHtJ/YO9fJQT75ss4qbSj//0LnSeXT84gTjHq99b7L+ymPW/sPnr5CxY6VDIwGFFxTUlvqOTk+Zliyu90tPZPW2+ykWk=';const _IH='3f52b4c0cad898b96b088e9f927776e3a1e7df5ff5cd7fa43aae419097a63fb8';let _src;

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
