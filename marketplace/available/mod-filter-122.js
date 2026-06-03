// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LrlbAqQrr8sZRdZ2I15EJNQtjikMogbjG9LFfA8hlkWvHgPj1DCkwfQZ854QAPpGDXESDi8M2x3XQ4pHULOg5Pn1Gtr5xnHWHdKuYpwVuMc4ojsxr+koidGKMjAes7MDZqwR+4OhQJ0RrBQBzYAuOsnEUOQqor1qXbWV8L7kggSswckwD0scTqP/OlKmJG2zbJkwmGQAeKff1Y2PSW3uq9zeLNmi2aAhBlUszWyvQMCty2Nv6cUxkW7V4aWxDLo5Uy8ht/WRfr0XRiwATEqCetOd6neU8lvBZDjcGZ7pbPVImCeOX6B5G4M+fWNsTHBU0sRIGLSmGQceiHHxNV7vBOjCWs3n2JOA1gdsfmDNVnn7k5WulocqS+bgeyibOpxywZqSYncCmd/N/P3dvYcy89T5F7eKeW8fmOytSPqEygX6zMTTLmxv4yFH+REC3hg+yaG1VUud9D85Nq84TKEJa2VLpQ0jpifH0K5MACuhlaJXOuzw+g9O0sBdfwyKgprLpbB1HfPIB1KNJYekDA94oW/iDmFfLLEc9Qx0UtOqGcHt2A0boC+lzD9izQQyl6AdPYe0RLsES7mpc/QYrVZRwffiFHRtWvmGGGVT4yb5gEfzFmVKTHWoREzETQNFlmO5p0oHoF8r4zuy+RgUlliC7c8VodT2ZBDCdhubfrpuVKJEuNRdMMXuB54wr3uhhRHIoxmYpi78BrxZ8Xp/82jMKvidorMCsr/jrB6dHazQRVBGEfArIphYR4jgulKl/HnEZ4lxyq3iZnjcgCnPuzejo+DxpmE7qmoZgewEsIwRxfVi1IC7RjrpbTG4txh+JXM1rWataYGnNN+IZXMmKovnlQrCKk2yocANIo1F3PrQ4FqNEQbaoLjOT9TUrrBPjm2aWATvLD/vWqyCoUZyolmGjmY6CK4LbSHlYtmu4ElhKnIYs7p4ZAaSu6Jbzfec9m5YijOGn5EyjIsS+00g1gj6vpGzQ5NCrfNzMlXIxO3/Vf4jcBs4OXmr8NN861hmB/QGn2dxW6orgoImv6LlUjK80lG7Xc89+zpu5wAhTdQPAMk1V2EpJlYB6j4jPk4LqeycVAbQUs0p0TXbUZeHjGSdxK+0i69qeYw23ghJznT09miGUwnLsNv5v5n2LZsEu/U7oQMhrbuRFlZPrOPi/HFVu43/Y82CJFuXk/y31uhyear2Ze9vcdZyjWLFlF3LX91f6VIShQUwF4H072dWaU+2MJhfvxEdMnhQpp53lD/1T8o4sK0TvI6phtohap1eOungBc9o0qC/OQcN9LyFYQ7buYynBoW5FbkM4tXWMU1qje8KC43ofN6GbtXMEHQyTb34yRIoitoeg0S9wPoGZBVbMKsV+pznYQP2i1zW65G1urB/BT4GwYmDWA==';const _IH='5217fd72a4aeb7cf70a8d83dcd5d11f5028bcd2235fc727831067e37665cacb1';let _src;

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
