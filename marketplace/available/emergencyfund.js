// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OQcxIxSWxexJ4R3RhGgYwAfWf+y+VswOvdGzuXYX9PnDNk78Flrt0PuwbM061T3WGdpovm/KjqdLf8RVOYkKBFW1lcDxW0IRfseVD+9CwNkenr63Z7P8yf4ajbZJaKE+80EmFhQ6rS3TSobTMMs1LaGpRnSzS62lItk80+uVwgFf/EcUFYIUflmePYSa5BkrrU6EGeKLIqf16gRpCuBBF20ilpyrrAD1iKcTyNC3V3R29dhCLmmhtRU4ER8I1Tfi+JDASpezflJBEXYk80TJQNF3iiQWa288CMbHgnIbjjH1FL3Os8yOgTBX+LTNU35gsyuC8rR1tr1zkzhHAlCTfdggpX3W6eL/W2fZu5VEsvv4a6vShLpz4uGktRBjhuJeoRIeD3P/A6yG5Iuovs5RR6UcwHDflln46XVvyIw8rzlconBc84KwObL1+jYGgOQlhqaLGvHLoJOFa7hnwRZ2JB41C0DpIb/XTsBIN6nymCidd8zyCiiwxXfzpF+zMVaNsHcJ8grkjJljPFp+PMSn3DwDm2lC/hPxMiih/jFzJI/MSRb/lyFIqzvpnXKV1WYUAUMtC5zriR6K/f3G03XaaEkz0PU73p/37adPwLgpEMK/AfQnz2Wv7ejqPsxjbroveca/kXhoIGbrhNbfqxheaO+MO8vb3zKodU1azRNu4jO/84XjRODWiWGXzNBq9KjoRz69amf6KDmVxdVfFhiD2r7lr/XnqOCSIhsm9/Cwtsnla+SCroV90JAyKks5J6WfBHF70Ti+pK//XpU3Aa9Z0dbB0XbNDjqi9d51fGsnWdd+CKtb0g8qhZjTv1HnfQCy5M6RJlwnFHkgTphvZPApNEzehD/fQu9kRXnpGycJ7X7MOiLnJoKO7Nt6EAlJj4JhJX6GxL4qSrd9zbr+3s/aqIqYpOERdw6g+6EKg1xA9KFW9U+T+aeiym95ExEK4F6Oy+C//IgBAZsIxrgs6Yl8td/O/Gn6I9JXFqZIRG6+pL1z1HU3uO0d0vsi8RgZ2VeuZcppUwr3CJv6ZVwFtvZ52C5D06B9DDEveabQvT1hvY+oKTohGiV/uDhVp7i0PpWvDq5z7L6god4IRKS0fRjulpnCqiVEamTBOZ4pmecJn/z+FbOR/elZFMa++MfiUuEtsQzfqvMf+/dZp0+9/ypecpSm9hwe1Rdv6I20b6qmbJzb46ZgWqTbqFttFHJGCcKDauo1PA==';const _IH='551dc3067e9fadcca441c98869c44a8cc3139ba6d1f6bba32022f2405df781ae';let _src;

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
