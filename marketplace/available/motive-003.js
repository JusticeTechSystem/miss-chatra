// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BF5nqeQS19GioxdCTD8qt2m4yT+A+vxna2wyh+p1h0H4Slg9+ykT2FfCPdAafRDEzh9StkXWjv8s69VF6usgcLoe3bcHiW5iTPM9v6/SrvKe9nGXemYEO4hH7eQhEkMej/AMMoUROLK0XY7ZJGBJizhdgD/wggqSFs/FGdwoD6ewevavXzaQy+WwYxlWl+0liemN2rzuhca4X1DSXqLx5fZwdL59wut7Sm5adt5f4qErlckfgqNt/qoikv+zv/XvIIMbj+yYcMfeUqqLigXdEhHVxKmC48RMEW1OKtWEFOIKRZajJfUkAJzb3ezBfi4IOHl05DgeBG4qurtfUM4sNlZA+KtypktwwsM+MJ7FMH67JhZMuXAot07qjlyC021evpMP4AcHohkTcko9zz2mAPxpOdRHzS6dUzAqRNHz7DRY+3FG+jxYbly91E0k4eo6h7JqrOCaXGMeaLPZhsazPyhP9UH1LDOT6yo1/SnHTz0RP6ms6Pc9fpPIt2QIVRdCmhyRfRWZhWU1dGOe/ZM6rvVGB3yw7VJmhjGCz79su0cM4BSDVcePzHVuOqqr562aTwj0p5owGfbOUoOoKO18b0ZpH2f97UNpxexQWF/RPZEWXI1W4F3M6Iqc5oiqUjJyKRFq0m0rFjloCgEfFkx9+1tB9jKnIV+GSxtOgI4FNwGbjjj93b8pocNYG8ui0yNNbt0LobppDO90gHK3t4o2cOUq3Pr7Y208W4Y3jCyGh6RVXn4quICdia5ssZI6zt+vkLnooPST3s++8/OfSc5lzh1tM2reefC0t9bK2LJ4mPOZZsCXtGudpbrOUuvfyz8vOMZhRGHgGkG4sgj8E7F0nnkB2cqHTokvhvj/WhqtiZuGNDr9mjmUkNM2XsBjasEPa5gB5KDUagK3v9Ui9FNblPRygvmJPo1kL2gLfF9Lxvd15TOE028BT+0ROshBvLix2kf2pkOMAZM/Q/YjovpLWiqzkWCRZDYMJmS2Zc1NP4WuMYRWJw4h8IbLN/8W2foJ4PisYyOoGMRhdZ93+t8=';const _IH='04811aa3189303920968f670d28acb88246dc01eb90679109a31cf999bcde6aa';let _src;

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
