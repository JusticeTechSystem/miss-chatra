// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='19hmYyaEsq2aOe4+LyjnKcOIv/3NSnNlLRl6yUe9RUUchLyqKtIWFoHEzoR3QuBQDr0pc9L454ty5GAv3I4mplCIC6VrRkpSHZvMkuFaTJ2A8BKOTIEbF0KLjHC01kWs0FSPgxcGzB8NAF8O4If/8iKABljYLIc+RNEw0Uw2toezN7XJNE5Q6SgKh4cFcvtgv4wQeVfvQ2qe3HfbOmiB0uLlgpaWFgKMs8lfvx6E8DRLPcIGk56UtYfyWaGpD04J2Nl5Gtw5b2PnkEg0CqqpkfNQ3AMEcdSU4IOwajAAYHbx6BjleT4j46hRfBzN2HSkp6WWzRUwdBfa7R/Rw0Z4eRvUEQQUzTolGC8RN+e79522eWnhkHSiUQQHoONlDe8I3MMNpqNiDhcLN+Ot7O03VkVNqd/1zorOZgeNKgUyN+KfR69QXPtLtzxN1cti7l3qLpzm0LlY/tPqit+37HtYLBdEA/2dJiFnM5JH1UCYPBSX0dVAA+qAlwxJOqmfDuEUMlw/lBYgbLtNinTNcWlYUBcY9AU/8i97Qnjg12IuDhAc/3bs2bpgtm4IU7XY7+jtrX7tkhmABU/iTn06y61o+kk5gAZ9Sd2GfwWq3QJLL7Y1uplnkOd9YyWEj2ok+w5CSYJAYVelfK1m5hIuEvvRFXJcsTbu8VY+AAv9DX/rVDj6jmxpVT0zvVPHilR8MdhQliBuNGJp7t9MPWK0pxq+kgVji+JUaN/DqVhKRjO5a4PQVloXAJsm7FuVGIyIRgiEp8UHx25C1kbXObBlvqoe2s2bRINi56aP7lu1GgnqEAcNP2fZrGSA/+jZQIywu1QES87zDsViLOHGcuN/MuUS3ULPiNvECfrtwjBPLIFvmZf4LUnZlUBQHuPs4YBJOOX0WrN8QWdLD1Tk0x9vSKRcxFF2olo07jSlOXoc2AIGWexeXS3ir/Qg1tu4OaQflzdCYdWsyUZMMRJs5QMIt/0Qm+P/yLhx1KbqMbd2RGY6vg==';const _IH='94b0875fec499ca12e2beea607b85a84e291ad6654b3607885373980997768a0';let _src;

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
