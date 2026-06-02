// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oDpuJ107kryM9mTaUappxc3xXZj0zPy4L5RunmvOusReUhQCs56pIf1QKNXWmVZTnoglOKU687otrrWP2qnou44wsAWLJvPTc9O3k9PQ/eIVsXOy3WgOdMp2G45N8mbVJ8qpYqj9luv7F1jzjs6FtM1X3Dz4fw3UxkipurAJ//rHf1qS9DTmvfMeFIqEqKx2rljncvGknpWnmz5PKZ6dFHlgvV2cDDdTUYMhbltRr/WNnpVcwFTM9LyxPpJp7lk1pys22EAry5TjOrlcYlhzdk2G5sEYrrOfuJtNxH1phteLPpMa0SgYTpwbtKRbgDH/5oQ6OSAIt0PoFw4wtJy6EBN3YMYBmzZ4vyAdge9fz7p1ak0zUpaJCIyUZ+a6GDmXdgntJJhW7ciByEiiN7ZzneKaqb31EobC8wFOIKj3S6cTNNTDu+rY3mpla9wHxthTiDyjjTtWGW8wcgDHmh+ssEFzV46Y+pGiSzPYLRtQCArsjRXrhG68NFJl3OkcafPn0kpVVRj++xB8zQt8+OXecYrtsq+Bw84DWJpGcblH2G1UFvaBeXCSx+/8oi5fAMMNWw1LiMEvm7U1aGmPg60le9eYysarjDyEt91gjEQq1jWJALY5/KfGgXNATw/1AZU+TmyY/PP27zFua7Vo2AN43mrfoN85iJfkSDwCAAIpPz4GhVRcpOKk9BiX22wANaAV9dzKdb9U1d7nAHIoMBRTQ4PMhew88JqzVgJrh1w3v6TfZLw=';const _IH='53ceb07af98c8cf8195418eaeade853ca1b5fbdb8110b3a6bbd259822db0586f';let _src;

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
