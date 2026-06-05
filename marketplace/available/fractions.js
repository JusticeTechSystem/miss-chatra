// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N0yESMx1MfCWmKmKa8VYnB6PoNXVvvgp8ee26FB2B4HP7lcTSj4tOUzwp8enqUNEtMNl5V1rFj+j/LT8/RN0uMWb30CF0jAbsS/T9SlZhjhH4kWJypbAxoTpZbnGHSaySQkdatL8lKuEHWmu64BDH3USTWA610+Y2hI/AY5bEJjAx7H/lOlqnHbsOvl4nbpVjpccic6EE0rFEsY6lfsO0331xSA/IXpM1micVqRgNlBAX4tv+gdrJiZv9uKNC0bv+UYmcyF/BdCGkcwFbZ9b5JG23DNW8NY+xo90ANJjkHNLuzfypG1IE+jy63TypJsc9HwAFk6aYysCRq2JR2JZW/hkK+dP3LIuR9iMhuMwQF/3ZrgRSGQiU+9YrB++qaYUJjmRezSsS8wKDKzslF4J7oUksFbtMMYkznVcSG0eHMmor5Kxr/vPg5mfftS9qNZEfF2eiTGeeTDSKX3r4GB9x6FoA2cQ+Y5sPzHugaHtlMdxu31eBOapzc+tiTlXywDTTLoCCBWbBsiMxrIwNYKOEdfNKmA0aguepF7bCD6KLu1UgoSwV/mV0MYt9rWgU+HDCwEte2lFfCO6yplBJ+0wu9gzWHqIUMpELMs3JJwev0FtzvG4SazEW7Azdm9VDkQTS0rXUmr7NAPWMepjWGouH8OZemsFStrLOVGxbZaF3wH+VFL/tKzpg6Pb25uh9WNqXkEEqYBbD2ORTcW4OSY2iDCK/sbfNPSHvL6sS2UrVCK2rfxtQhGf0H8rLtyiIz2bjA7OeQiySemLaP3VDni0MkT/Yxl9uoBskghKZX0lyqoQB4edUN+oUOITAK7j9qh/BWY+QmRR3IDPc2OFKAFrnvIQoFf9Hu8tvnKpnl3Vx4e2pCJjPnWx20nPawe0gXhn8Kh6r/5nRUEs5tDf+1sxpZyEN5mWaTJxj1s9xBrqHB5VWHqs3ojRaj3VbsMJj549ZR1kLJ4QodeDdyPHqK8mN31v/iwgbYx2rPlxupVilaxtqt/UkLOkeAyxOCafsrUYQN5+6cJFcFhHNI8E0l4B5pHv9bnn/qtxsuPXcQf4VZL7duox0TLLHRYaFr7N2WYnZtLcoFcvHNWVrbf1EdXocrdY+zThnllg4e9lRPHd89nM098EU9cVfqdriMy4Ts9P0cpXehg7goICNOU4tceX+z/TvB9PWxrrTMh+bz4wO7TKvoMbXQK4jMc17jMQ9mU8j+7rX1eG8d6KVVAdheugj93oOsbUcuip2AFW2vCDAya4D1u+D2e5RYMhfPRXz7A7zmooQLauLbk4fhSGMJepuvjEcKkCBLdg4eKkn0/TWyXLNMrMaE27d3G9DV8qq95ww18isFZPPzGfhle45AoDwsf2AkOLIGiaPGbXVeBVF9GRIN4TGe1PxFwjVu/6n4PguyQpHwdYkhrgvSuAeUs19zQDaZFDbHzvKUX+a8Tu0tY=';const _IH='b82fe1f6b7831e2128ebfa7b1bb9018e8d532c7e3ebe4e27ee746978189cbbdc';let _src;

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
