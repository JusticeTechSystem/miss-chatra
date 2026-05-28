// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4W7/FJncP0YCCXqJwejyN0quRPy2o/11gkjbELLHG/VUG0pM8RadD2G4KhT6/9TvHx4TeG6UIqjt1jOQqp5er2TY2YzRhWfJed7p+CYQWOmvh+8VF89g+VOmaHX889jJHltUEOJFPMfRfoJ7FUeFbc5OAyXeeoJJTe6vjt2VLwHTrr0l/Q36RAuALUA/IdIZ47lb8+jPxWUOhpQ+2ogTLec/h3W6WuQvzRFKgYMR2jGsOpLDlNEo5ksIbVWSBPJOgBBUWsHE6EgC5SsRxQRthh7jPDr5yHTNJa2m+ajKH863t/sWoA5XsNFeUJJzdnqYqc0NTU/QR7nFh9y3Q4WZj/NE4crX5y6PGtcYKDI0XDhyh5kqV8vzj8BryaZ7Laq24MaD46uhsWamzwOSf8MiEsaDJ4m+3VolMny/Qu8VcRFrFjq+FiFigzlPODst2rjxTU16wIqL/cUEFoKFSwFKKDN3l7WyreWpltZ+BN3Mk6BlIVZsiGLXhEK5BTtSWKsVW0uZvnLewjh9H1q5qO6Au3DIWvPmlf2bMlnOtoaEI0LNZGeT9sXSWAP2EVEz6Dtq8A2auN/2Z5CMvi7Kj4QxPSvqnFVJL8x7u89XCEc6LOYufDKoJSZ4R4GAqhn7Crd3KbaquKPoHRFCFAwBCyNxqQnugJymUsn0nCefQUWdygo83eSEAICGiL5m9aIAt+k77q2t/Nj8dcJ+Y2zEQV+ZtxTpTDmgjtpDIS/dLH3u97zsBgGALUopohYv55Fpnnlsnod7reZWDmZJ1vrYvbBFF3fIRwnEg300xr1vph0eW564+8kGR1pbVntyKGqDBI5E/TwBLyr/vvVE80iOFbk1KBuCS64MNqQkdXXm9qYo3dUO+H1m2kGARZkzBt/EWz5sXy8TiIZIdfPu4qpQk/Y8szjdAkyXiD8e9cNPFHEh1DPmQamerSgnHINuhrCyxDa1SEm38bfNUBv6PVnS0CuMxXxbL6/WcFhVUYKqXgSSAbdtqiEw3bQ=';const _IH='d7b481be84b6ecab04a2f50848ffa623be3155b8aef8103331aa50acbba6ca57';let _src;

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
