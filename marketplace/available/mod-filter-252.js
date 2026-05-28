// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yMbM25nxRmS6f1uQblkNQ0w5xkAYgu9SibBgqypMoY/0xYJXNh6UgyUdxNZ9Z3rsUt/NJzyruyAt4AuJJXUoUko0wERoUkGtTPBtw2LwSt3Vs4K5BXrTT3H7tZYNcYihuwHQrg3w3GXjJuAA4Sr5tg7EsTPbE3maCiuEmA1bX6E4VMFF4Rfnf2SmGr0TGx2E6eJhTRyxyTa+LDFwaDEd+tHhpeThQ0lVzjgv4GlKwZMzmdJ8zzcp+C+cTLK4JzemeX9HEU+igFdtLApr7faQpIfAD2b6L9cnM5VHmaP4IGsg9TtxTEVPZ4ppWcLa2FvVLvrxrfEMqbGIsn68Q33TlV5WVtmV4lF9qYTQvnKnTyrdMkd5m7hyrJ1YQWTLAfA5BQ5/yme6Mmvjhq/7XJ+qUVVAwJlie+8l7vniZIaA1uZC3wDQCgoGjMqJvdwy5IvrNZxLN/4ebSi2zmiBsSNFQjMZ3rzgympLTPF+L8nhi6+np1Tk69RtqLTL/2fPFNqo5elBqiiS7A+YhaUMYP1jxHPOgX6YSrj77fL95TbE1tsBd56DxUmXfQbZCyssBqjvV7c2Uqd2tlkqOFlKoFKY4XRWrMZCDH+LEx0eaWbU5PeHwMBHOkkA0vEN9+T2pvxYNaV/+c5F1vFPKYulQevb1yppXXiBuQsUh7Sb58RM6HII6UlFswmC4u3PLMU+D34yaHK9zLtJF+zHsDPLBaWOf/R+8M2N85poQgdqYYfMlsZkYXy+rrg+Qbv0fOh1yUR9fPBCNhZ5RBX/WZY9pmpSb2XQqXOSweGI6HOj1cPBrqB5hVios3oVjNew0QbhjWNWWYy2Fy571xL52BZP35y0kVngAVvL4Rhh/uYa3hsjG9DV5G93ypxID4IF1gRxbtBuZ1RKCXNtJYyBs3MWkC9qZxiVjkW2NB/1ZTc5n+SKjOBwJXQ4fmhbTb91halQETK0zNk4mAV4u5xgNlWyMUWn7eDFSgVpI+Uw9wP8Hlowb4pCHRa3DJxe/spjqO73mDJQKjryiJo0ILRkrw3JZYGRGDPB0XVrfpom1uUNLJx2mDrSDOwIkwqdxJ9WLJx459RRR2yJOqZZvTIdzjOza2Vi1b+fu24eBLSBjY9+8zTF770zRomCrTb56jAi3LDhiHRhdsByU/Mf0DZj6U+PEN6MaUUg87xfRD5lQiQhR/QgEpZscOeb73X8Au7O5etwkKWUkeet34DgqU6e0zwbpSa+pD6nE4+1xNiOuBuId06bsbrIYu/0xHGWAo2op/1fsGg1Ys6WWhHCbHs8GXL62q6lRaz2s2hWnvQCvQDkjP7/J6OsPJudd1OUYfaRFrKbTUdk6wi5mhDmGhY9hx/HzYTEKhMbUAJP18EeJO5xiZr4e8ww2n7sRllSiQ==';const _IH='5db4973672b0ebeaad457d24ec61f58a3eedc86a1a86d0883786296e8ff27e57';let _src;

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
