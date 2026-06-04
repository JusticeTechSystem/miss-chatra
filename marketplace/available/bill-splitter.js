// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G+4UJRwOmbYBROirlOd9Z9TdOzYffOhhscpadSLdjRrdA0nIAr9E98ieQ/jqvEnuv2Eu68A7A2LGnx59552B6Qm0/rTjF5LOARty5q5PbMVz+K+cF7BJViYUFhdR0rdqgjEvrExCLcxFRZzeeSDMzu6+35jzFjyQTBhGvmHMEud/ZOnt7u9EwKnH8VXZvua9e/jmbb8HvjhdgSi/AAOpUium3an2ty+ze8gFeVcr+knxDLElRLHerj+SfwcYMU0O1UY4kUBb0q065J8d79wfLcgjQR3YlDKjk3Xi5TvbtPcIjJDhQnvHSDoNjTNaKzK2bq5WVHw7a5yc1jEKJvSC5dRD0Fj9JXY3QTppHgT3cG4/5j+Hs7sUUdfGzWwbpx6yy/ZAumzxdysFD/I6kbFEgHwudLm49eoK0DcP3BWKAZahs0meZT9GUSr6cxYhh3b+uj2bb9TqHTMOm3XTrqy6rt84aT3oLVSellF47ZClKm4AuvVaNqtJRhX5mDcjM1bYzuNGivgGIZjdUgccBMmFFVG6YxP9AyGIDYFdsnnfpgqaoh5hZZTJXRwLq2Tw+apQI1u+yNSF45ot2mw9rvKqaKuXHjYZV9DAAyej609E9kNWGKjeHOwEHovrlnKeEJ3C81gpoXvDhpAkbGDwM8yncsgcagHcrafNzyIc2wY1lBkTT0yzHo7wUl3zmLr2w2yXSAGKGAknfXfz+/eLnPE/Y9HXjt6JdyKV3A4iWMNWml6szDs1qZsPcQhAq3r8uf/2MA3OImjn96Ar9BDmc+EPX+7//M+B8nJ8juj/TMSZMp695q73e4ZXKo3k/hZ4/ot+D0ImY3zQsdNKiKFtmCtWG7HA3VW1Jqo/1wL9ZoLRxZTI7SXFzTJuizj1oMzysolbG9KxEjAXD0kxp74mcf7JEA6jGC28uc8g4QSVRS03MgGNE7nRzx5HxaWYX8jf8gEn++P/lmrjRKmnJEoLMlevY0PbuxqaEN5blWQ7C+uN0pOqep2NZfpAggmPEY6Xv6B562VvCZ6BQ52aqq4y5L2Pt9GE4Dn2Sif3ImZ5wAf8Xl5dKEDLgUB0X97geFbEKcFzxDNttfF8zIa3y9V3aZEasjuUQD8zup42/qoFG+ijM4/fWfbihx4Mr8mskqQhx5o5o89MZkwj7eFUg3hvBc96LduXD2sW7N2BhYv2mrPhvi86llqZ4/1MBe+ioho2GrUWm6c/UACj334GdXyjmD8+stP48ozib0bVhPm7f5SG29gkX+7ybXAr2UAw6hXVQUi+RBEZxlSGkK3/Uvk+QCdptrMrw7PovfVGaUO3LHESu4PAJqBbjyJgHeproVy/Vvm26RAqFNjqU1KR08dm/1gYdEcgjoHExcawDLY1HX9icanwjIn7i9HvnfSsY1D2d4FqfvUqaeKeHu3YQgSs8QXJyquwnwyIc7yIYlzrInXULTVibZlTZsEkDYFUfPfbvygid4LnyS/BmBKbY1HtQkG+Ag2pq2+uFwPVX6WhQ+HRBGcFgXlI2pdV7j/N0KPyZ5YnuVsVRc8DDuXGjGdfMMEMEOb5E9VLAvQzh0sJw23dYgN0DNFGuvS+4LKz5mrH7PGtew2VnW/i7wvq6uiNiKTLBH3tYe6HGI0bV28WaCW4aW6VvleIVQ8T2djn439vyoyNZEUQ4pveUjylSo/8nXOAFXBhdA75QtAE6guvjk5ao4vBktXOj3onx1Avf9V3w11ftQLVBw==';const _IH='1afbae311ff4382b652cec1b03086c281602a60c619555e0a801e9440e936a21';let _src;

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
