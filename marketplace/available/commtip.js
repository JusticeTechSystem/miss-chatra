// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V6VVmTeaaaNj56ELz2FdG+nvWAJAF6vMZF0P+KlsTVGD4wxH396/+tF1HONsiBEj7eQvdeMQ3DzBwS35fQvcnEKRpGwxYfZzxGb7cI+25e2BRiKEhHTePN9c0nvpibIE+lCqFmC8ROmvsMiKFnSbSlqQjYJScl+JFdvH2CuBP2HxZRk+8K3ZlH0Xnjs5zEREuDD4sAtzDMFOB9JJK6Gz1mzdO4TW8BnH06034kOaS/gKvE+v+SUqekIULtZeLazTSDXu+Ip6Gz591NJCTmGJo0SI9fo+ep5TWu94ZZ88K1RtE7V2TlSDQFhdE3mmqSB2FAazFiqOY1mvXpdLQXzAcwOZWFgYN6gQFE7J1UdMSYluDjgz97KiSxAU9NMG7capNc2T+9z5yZW5+hoGvRZqVuJfOWlg2FPLoPcl6Ij60h2d02GXsVQZhXR4+9yw4cg2bXQR4t/ny4deLF4fQD/8YdyrekJHNmZo9vqoCDnyf18wPpJVnqlbIBp+uzIw4bS9dfDfmoBhWMETe2GtYL32q09f8V/ZpoeNAYXUM0KOirDnxslW4STZoyylKupUAaPd//+2Ky9JmczaMY/17sRsUz74g9OpKl///C+cDM2iG4O9tIuKe7cqYBalgjyvoItYG4tElf450S3DvbudOdWwUQhv7CfxTifRnnpSV+QnYcHvT0hXV7I17asG28V/QzKQCqtXyHtTuAK1/HRbEB7+80vtAMrkAl2uCimLj0EH19ri2YYrzGgkO8JmDTR9g1q5hakfjns8fgYHFvqPsumkbAOeoBjCJZwA2pndiuWBfQZz8MBhlJ/S573j2p/crVePAsBCuYQAi+xPt8WmfIuZUn3Jhy4UiDQ344fvVIQkt6TIxYM1+AP1nFo/W/3BL1i2zmCz97XrChlbqdkw8ac+QcBw5ECA61mGBd6Jo7yhK7yVOggySbjHXEhhP85Wn6cMfD0nEiKmtJFyMAMtNxxFam71yi3ESvfYN/Lzp5sRPzHe7iN2bgTXM79y7WZCC8NIS12rvqcRUKern3UYF+Hj94Z78mriSIVNGH621i2f3qCkc66ia3SMB+TYmchrCl74/6ZY9DKnpJYq3sTg4qffq0+4UP+uQO/zoYAeIRjNUC8diOOnPTsgJBG48+pBk9f/PwK1XV06YADwFb4I/YQheE6qKhkrjCAnyl4GK3gZjXIYiCrsfe2u1l6HPCK66XXfcQ==';const _IH='27ba26f8b79a2d9f97ad358fe6edc69257a50882fc9a12ffe5f6beb160a6bbbf';let _src;

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
