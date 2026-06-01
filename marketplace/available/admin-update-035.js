// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6N/p0f0D0dde7AI+kU+81DmNV+IO4dSoTU2iHuc5ovG+W+z/Xg9xF8AXWiJqPOJmHDju/fmPjzo37l1/i0AzQdlPx81jWsNwFRFF7Y2MEBm7XAgkBbxp7zCDI7ze1DHEOJnsSXuro50V+uC33bAJJt/pHc916pLu7YlLNVKXDgbvmA6xCPFV3GZoREwqANFoHqkKDIU5Bmy6e7fRTFNiF9AlAiatNxCoD4jg9EpBG0opgdYUW5KXdCZ2LYvGzoGBfNmmwXNxRZsVmQLC1sUpcYd3wssUo0+feVfHF/odVfEzuwKQZSEb832st8vwaTQuySOa2TU4FW18+zX/0CrvEVO7BwdX8Tie8aug02oWdhe9owlVnO7Pd1k9xxdxJfUChM9QrYPCduJ8Lo6emPjEtvTj0Baapzy4ExFX3SV7xLj7w5HF+A4i+0anW/LEuQ7iZTk+9WOARROQLNAW+XVCXivqQY0RSY9iR7kTKlGK4rriwB+pqCATzvPCwGnqZ1miskFHj51oQF6F+twOi6+y6pLQoKHhIdGCtzVWAwMjsiXn6roQlE17HwU8WqyxAJXPkqZtJaBBtKLfjV0PpLMyCVaPaQQVZCyg2/e+dophWMreLom2CYZRJkVhSf4fx1ykviT0TWjBBDWRdMuRdwq/EWd7MdbLLyrJdNIcwPLuNa9vBd/2jKmuERUsctbIWemFgNbKzV4jhhM57xZ1JUvTkKIjGTuYTLrOv/e6fq9rrFNcLmJAA2Exp69G/41ondx34jaLTXqoDlZDAv1VcNOnF7TwLOzo6Fy7rk8x+4ZMG5xSyM0QmfKvBMMhNGLg/hYl4QshITj0qWl/Ue3vE/Z1BGZY4DAP9+SIS4wrlcTSEr2df/bw0PsBBRsjylBH505nBiT21Go3cnabdsIq8IQcvV6sZBCq3pKukYff4eR/477OIJPn8iDrW6ZZ2uM83aSh3FAN29T8cNuo7JqOLYV8B59cE/HLZv2tQYlij7xaPYdAGJu3GnZeU6bHU4RIw==';const _IH='db99a406367a9726114f5a2989ef42747b8c74dafab54fcd632fad0da597fb6a';let _src;

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
