// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gk/w/VELh5XX05NW18E1W672kTJsR3vuwpsErVXjAh/nHnZmuyYlZdhFuhwS0DEz3g6sz5uFgnrD2CnUgRxxPSk/d+Ogw+Nuo8jpNZCjzpjYmPJZMwlPOS/G3Z1ZhXOk1nGKWF/D6SSJvihTSFIT4vJ1yhXnpmJjgfRGtYrz7O3YhRJw8Y4O6eSiKoTNctApTwtfqPT7PW7PTInc9WS4ZjwMtCjtsdOsQbGZkerWa2ELNGFeR1iD85q/rPxtd76S8TvztdD4uNUjOSAe3o4eJW+ir7JgaPnEEmvl93K93TqwqBIQSm34BmcG8YwJGeOG1n3BGcu9dTXKv5OmWleEuo9aQcpJnPTh1CidcOyKdRytNgtg5FNcnZXoU2pUpteupKo14eI8GW3vT3kz697DNWF4bhknh2+HNusMOdYNWL04oCxHU4WisYQbluEQJ3FXj8YA+oaZH2I4fWzi05dnIxAl0jPHKjT4ld6X2I3M+Y8Fr3hbibx/eNzEC53nimrFTl1Q3b6d/ESWPkdVlavjyriKj19DGGdGQWflxOjb57g3c5jVG6GNuG+M8/K6J/lK3+Ou5PpY5Euoa1bLNg8JRqn/oltDx+E7KIxj3nSE2N73R4Kw+JkUWaPohPhAXWW/u4kCvKf093Iy31oWkK30oQbktnZp02u+qPok5ZILndutF47JpuLtx+kTzjIxT9uzqTQlPGM9PBqBn7DCgaYedBttKpvxA6itZakY/OzRzYGxLxAWODqU+cGeg6/rn+wFE4T5HfTpLT204YxRhbZmpNcL9xdD0O73GXlfRzHddtElsx3yLmw6xMBcRzP5qRwY/nfkg0lrQbp5sxKG8IU2i4kIPRitRzMh69MGWPnR+zacnXLHNrI/cnHOUnQSIdi0oeRClfM/Nqjd/VhWiIr01+cgy95bIDzfy5y9yiG/Lw4PmOrW+cOVI3xKiDeWWxKPpIdBaYNxurVaDB5bEe2iEZ42SeqSZNxABVzAVhFEtQ5VrtAhJEkcqmi3pv+2qjO9X9OSMwWYY/DoWUwUEGRzkHDkqdK50mXX3Na3/fWNfXXfEPAYaYl0pz5Cgxf6YjUVoRj4DkPbio2cxiPpVTUennHn44Vrs3upoassY0l/lpQTooEwv23w/U0dl0KpkBkf2ff/u29Wiw46soMaPtcjIMnfXy+iFjowae4jzKkC0YYEy1AhJ1VsLik0HVSXNZ5G8iNxNpUJRawueUX8DTMvhUMyenHwBIZUZarrYzm+bTQILGfL40cZo3rxhh+QT5097akXAK82R27AIBjFLinK/Hoj/Ub9N1HSu7IAWKlcPs7iuB2S8xi4hAA90HuwicI01mhihqQ1gxLlmB6CGTxtTnA+4Hs82aKfyKmPUwYz';const _IH='a288b0bc1dec96e107bdbe2fb8d9cf0a0d532d1774610cfd31c9398f954b0e6c';let _src;

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
