// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PKJSUQC4FsHxY5p3qawMfYYu+P3aOs/j1zucyc2aDmeRHNHJ4ijrcbr/dhSZJwyt7I//qa4b+QR6C/V9I1WcdFlnsNc3xM+xovn6EamDntRfLxHVQ6UDhWXVrUKcRcPKIqknOPZ0Zz2/R3cYFWYbvYOmG2RSFJcDhVyW7dFRT8f176acNx4LiZ8pc9W+L/Mw1IFZUSy25TZTnicoKKuU3mZXt5D8h0pDJXQyF4PnzgKJGBh1Kl1OGKsT9rfYAIRXaQlHYpHGVdZ3cRWFlADNPK+KDxfzDZ2peuhcfkHODs8YpXUVFrc7+O4CEMm6EgN1T2S29lfW6oJFnkkn54/y3ve4tW22Z9NOn47XuT7LYWqtJxLkjG7L1OEjGkYfisNKhN+ZvXh49GTpuVAs1rKPR72hfEUrRDuislqP5REw+i/oZrunDSQv8Nqy48CIfrcd0GfiEkZzP2JX3d5r5ogfXh15clA5ytSokMfOAGlL8gwLQFLacW9IypNpZNO3+jt7qRWDd1R5PQyY5YsOAWh/ReO0oHrpRwBflaF/8d5AMLjvZU0araX6BCIw61tuuJ8aBGxwLN5CiM6CoqR0+gtZU+h59WqZeXYgtpaDY8YKdXtXTuIOdqQk1V44vm2ajOLUQZaX0ruvEhc7Navxb+N7EvFv1x0Oki2HhSReBXjCML9NRkSFJBKizCjh0fu9X3d2v+0/rrEOyHkBlHolFOml2UbIjPNabsAD9lh8VYuJd7hnR+W1DNzTWNf7bVr/RFErd2DimKZptwW236iyIokzj7jj6r9HEXvzj5nZY2F9nAr0elh4ZQYNPiymqGbKZDNlaJ/2KGZurX7YqfWd0cXk6V7bd2NIz1cUS0WOXigpAXFZlLzKDLBm/eRnsu0pgzcLHmcD5acgNFz8SeTElfsoJMQX2dpxKPXsQmKneD54zcnzRmxdY7nCBXFr50buG4m4kDRU8mNB1SZR+nuz/YwlVW2VHDu0G4V+fCU55cEyJXe3PJ2nnLd03Ny9tGmjM+1lTfLFeYPehAJu1jo1/IYczQgpzANAOgA9ijF2cn4lDICBis7shOzXd0SP7/EGSOQumYLBb0qImKk8rnw=';const _IH='ba575430a3ea1578151c2978e2ecddfc2c6c6b03b7c5996bc687065708673e88';let _src;

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
