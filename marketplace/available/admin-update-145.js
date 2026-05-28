// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7QvxDn9etnbmeSsEie7jEfN0+/XOMwCHTvK2dxvk6XzTCVW5LrVwlrIXzayK0dXgVPNJ7NugW3M5/Geswm87RhviPdfcj+SC4VcRZ7/sI5ZEji1xOMe6oQF8/hqAAClme4xTsLTRfyWeEXS/hgIrb+kfKhZ6qQeti4kgKCYkjRb3naCyzHLAxZBUphVLmTeOgXvcZD6UdhytZxHRdSmyd4KEtS38U0TD84r/EWeCM1xFc195zLL/tkrTCKDPn9/lrQkeXEl3fGyUhugEXmE0LZC7/8qPk1OwQdbwZT97HQh98P0wqA1G55+DR8bmkprxbt3EVq2xJumqc1DbXdt+0AYHliHtJLGybc7Mdd9neNAPfKRAyPzg1tJb+fWsC/J7c3EzT9+TadJM8v81hUAVE9AzQZhW0WeUb06z6mqHl8cY9nOiYVIGywZeB4oBG3lcG8s3zBAVBRr6/eomlcZB45O9mODm2RPAoqKG+3ar+JD2I5uECYO/DNyKk0OW4TKBOuyydH3Clr13tOuauQF8rqgNrOK7ZkrmE5p+VH8Xim2KLBBEAosUtHbUu5FHc7vL+K3ORaAxgQ4XPrnfQbkXbyocbz1eFh6teUy+njjNw7PN7bpE1k1ya3C9KvIIZmYiMB0E/h/PQ+XyRzQt/FdLbfcR0Ni6+RQskt/VgF0jIU1oZshqeGpYsSGOYu+plNOznA6c/qjgbU5QbVXoQtTL6ZGQTvxpFJUjmQlUjlA6ZM3ZZ8+Owq6zplL4M3qeIkmmOrnHNRdI7ZR4iR6+S1ikwi6rNYzeP/hCxOVyzLFLLRekLhUWTnm/uw/z0V1OOhPOtnJJzfm7PfD7zfLmQc2fBPHP11tByugple+C+sTb1A9ommtii17qYsD1nchEDB+APUqbKW4k7g5mLLCHDOeDIN5qFAoodDjM0Jhq4ZlBo6sYlv+nq4ufmu8p79erlKMTIWQ0lNkO8F5vGKkS6LVImvnwMZFDgb4SyD0y/ZYjmczwhDMhZN3gfFkHRaTR4I+pSQ==';const _IH='fcf3376772fa70e4c994d1ef02ac83d49b6ff621e423cba0b1f23e3479d2f4a6';let _src;

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
