// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4QYWBt/sWofRwixnq2PuBFYHgPmg4nL+XqsKOsGrhCCE+DzvrjZp2ke6Da2+cW0kyxNnKIh37Gu+Tx3ZxG+p/ydS0Y4wHjmyvUzNNCKjLQ/QUGnnnfAVW/S+X/epVDSHnMu/YFXTaVBAlZ0fGCCC1hHoH6egpTjf9+FqRUHKqg/tKVLHzTJ0agymb93PPTeUPyqjsKZX7R6VjKQDK9bntXAYYqLgu68zMB4zYtxVDOcVSHZcrcEh3VL3zWQyRqvy5tN9Nw1tN64JzxhEQvZ5cR1xtaCja9cPwSFrn6raR6GNpPeVayc/bknLjv2DCopmY+0GirJey44uPZKq3mhoBTsGXmOfbUjpfwjzjqtqdjXwB0F+o4I0OgkIJYEt5NjNGzAk6zzQxosX4YUIKxFxmxovL9r3UPDkXvmZH94xOuoLPYdW/3sdG9/x0DOf1OUffd3j0qztkpF1apKaEvyt8/s6vyAmV35mTOyriyTBckOAsGKBlwdZ4jSKN1xQwdXdpQvuFaPzbGxUvMUZvYnfGo8M3FgFq9CSDBuQBXPvO01gK9STthsegoI1oOVV/7RjJWJ/b37oGX8YOIlP/ld5pBOBsoDbtd6xt1Sl5zgvrvEgVatPm5kiSLFzV8NpWndjJ+7BVPbTeYJlwj/l2bMtYkA96Yg7aicdai6IQk8H0epXCg4Fup8Geglf8poM4uixGcFrh9QL9pRhsq7V5kPQ3LLKLy8QOkNMC/PsLL73QmYT5adH/4KJkCF7YbQFIFRVG+88eKcR/lp2iNJbcb9AagxEDV5c2pp8O3VuwMZGwB8I8uw2oo6a5lfxDMeYl9ApL96+7kw5yaofS1/IIg+rBibz+pyvKSkdxwIKZEEHzxRQnM0cEhsS/P1IgHGW+lKluN75eVavGRXDgn5Hg80JQkp0sZlemoMnla54KbpNh8bwkuW+qTPbbLYqKY8En88f+NEEYSix1U3Xg+kIcIUOE1Sb4AkbcLGFxGniNs7iiioEMXDsnr57narvI03EQfbRPCOu7uqQsAK';const _IH='958e25e93d4891206a0df20941f8b4bfbd91afbe603fbc371c1cb5673d53591a';let _src;

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
