// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5zLWbBfUvcTyWFtlLZrLGTf91Y++8ya7CusPAFWeu3kmCQ6J7oj9oZCTEyJJ1PHj4obN5O8la3vsVii2DpKTb+eklEo2xmgNksl7pUJr8MBNaM+JPZkzVuQisIQixlp0R+Vcdv//RAlZ/ldDqRRe7k3eKU37ok/pgC84iYJe2FNP4VR+k0mBBRLa23K1GrAztqWUaBsJrhEDPOdN1G47qXpAar/fF+sB4elQGIkKQSACzOq9GtNzapke+96BAY1Rm4O3MZfqEAWboEtvCqfGvmEMBZljlmkEDUHmF3BQeKw3siFN+8ZgTa3yt3N59Fyg92wSD5MfQChtumZLwncVqt7UbR+/ljOLtYdEA1fBlCsZhmKp+DhdDsTguwzko1ZOW8pmsWSTEoUm56kRWUHmu7HBEnAk0qd2Gh6o//O/SP+zXuFBpy07t90wX1stT6P7ZXgPgOooV/P2c5VGezAVndFsUqKq/gmsqZEB4Mw2koIFIv9eoXAAowB+dQqKlHCIS7qsdr/ETxXVn2xBP2ugcCx1DN4lZKbcIu6YHYwJ/mE84MY+j9eD/2jBJj6VchQd1SdgLqM7WH5x4OCaWeL3DdXsFpGBPKGLQG2OfoxxlEQL28FCJw/z3ZaZayRBuWIFYY2Um5szKJyHbF7sj72qzLA1K8Mji6vea3Q+nuYfx0RMgXrzIvl5JF9k7NmIx8yOM/qvIRicNprjJCmspu2+0PdZ8H8UkFLAol5LuJ8/V3tfb4Q3ZBs=';const _IH='e46080470450e5f183519cd54389a5310beb57046474a89399ba70b594342a95';let _src;

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
