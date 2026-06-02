// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bpW3/+OdxQktbkP6jW6bZ8Zi1ULRPDqUgjjeLGTThNvuIOweKptM27gxta0y5pYegExmH+2O6tSG7V0H60L5gogwTwieYb9Q1gTNyX8xHdi/E+CuDNQybEbezCSbm+cDfW2KfwI9QiO0fUVSmUU2frSckmWs2V7cvlVHMzcBu62tACRwnZKmxnSZpWrsoMAbzhCLERLD0JTQNFS1v6lqH/9sk//pEBCiHAqFh+8lWEx5FhV/n//Tj88Jxk5zRn8pBkfKAR9O0HFNWLZP9vMprlpv39RwpyQxoL69CBlP1Bm12ORiJTKRQMTKY/qnDd74UxDl1aPrt+iJvHep/zyFNKc/CPouVXUDZpMjo5w6cveTHVSJzdnN7hJqnGphqIwfSmvze5S7Xyw9+7oxGa+qF/LUOcn6NBFNhs0Zo0isjRnOPQz/3Mp9p3N2xy57WPz7+zMxIa9AMqlU5lQCbKivj8KW7qe4JYUKRK11isZMmWgZc9Y4eeWJPeMyeU0o8PpiOmOvaffs0XjQ2bY9DDtel7fnki1Sf5oWSU9SoPNGzIdDfnD3anQvh4zjvi2Sws/o9ekoVeOYp3Gc3zGY024itXg+GMP4G9dxqsyNH+Kn3BeCrmCtJqjdaNlt+ntj8i1awpHCIVZuxCFnGBXI6qxfahj5BDL+qX97S4uNEicw1QcYA1Fh39elOdVwGMs45K6jCgi2JEwYVEHqqvxidw2XBilOBC5HLzkA0OM+rujeCyhNxZpb7i77aAovMP/MEBO78nfn+XstImkm5q0/sSYRRmGJ4lRAGF9RCj5753diR0fRqeab49ojtehB2sDFMMvlWCpwSooKQFsYtLyWnmXncc6SZ2kmcd/Gf2Dg9X6agAqeKpzKNAXQyFVoRgRZe6SzxKMIbIyt+B1ZwKnPjV7EJBS2p5sWvggU3FRU6hkGDXNZbOFH2BMqi7tq0OdLquX2h4EbwnGBlbA2XXweovEb4gPbjG7V4/lRSzGTy/ebQUbc6b/S0XsIi6g4MX2BT4iRM4k9BoH37RpDHF+hvdA7v1pWu2EPkfSFl0QIb/Yfy/7bR5J7FfyJNHy9vBt6Gq2Uq8exyaaEh6nrV6g19VYOuI2NrfyNA8ELKDr9ANS3dpcZGHriHVIGXVZtuwnzpIRk1KjEdu6vJ4mwpot823U9/5/pvIycGbDyqvJoy+AYIPbcgHqCab8SWQyVwLzCM008FfQeRMRhbzCuhWVD42pgGwwnjRt4Mt8U9eKsPvxkQocdLIviTpxeheWXV9b6GZdnhGV3ecBpjT40VV4jIT8j8cT18iBkBo1gBNWasSsI2Gwhyis0yLNEbjA1hUoBHnw21bMMGTuUhO2Iay5NhSN2fZapSAWpWnCg5obyG93LeCmOKTibYG5LZHdmd/pkY+4p3w4=';const _IH='6a8c82b5f8c2b54eaf4da7c5a345228f6a28badb29b44181f3e01f67dc2ff305';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
