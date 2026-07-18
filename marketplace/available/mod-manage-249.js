// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQt/slbclizkvpYzb90jYxBUn44OmiVGR0XVGHzA99rNdoTt6f5uC3zV9vic33pnPQemjg3eLeyHrAztmF0VKr28zIO1ZtBxYVIHqXIfgyko4y9DfK6cOognhUoLKXSfWssKtg38/aMbLQNekYIPXnfvqXgO07JhX6C8ibpqNuqQXAT6IElLyUYFqu+rp4/evhxWLFVh+/k9iiWY6EjRQH/3rMoacqFKBRBJOPE8svWZ9YlaYl1T6Z2H4RS9zvCLpYeWUBzwT0Yd7nWC/0+bRWG9HiLha2rP+GDbPGxZU5k6l5QR/kkrAPKx5OLmaMjuFTk/kdwVTWRgExc8mX5QKmQ2DvDyQB5bdlgE/KDr9mtx9zfafbPgMgZu2nFvXE/QT9do+RnVhWBg0+wmtpik7nLnbOIGK5SKliN3izgxPTXp9B0sSOp6eZ8MEoiYexfhad/43hRWoHtRALA9OMITddK1+f0Hiq1u8XkLpublhlD2wmm6+6Jj/ECoyXW0Ac01VqlTUHeHGpadlK5CxdMzT5Zlcw3Ht4wU4aLctgct94Su9N4sbT4/SL2pr6B7UKrPueXKNlNZx1XI7ttMbsc17O5VUCzn+V6K1k45VRtETnzm2Ihtp3+GG++HnR/Ixtj0eeXyxSbjqk8qXoxQgplyMusd75k6Oq+cDYJADb+0KwrlpyLkT7LAPe2ResJVEAJuRvhpeZ1TlUxWdUn3SbYGLY4sUkXY5zs9TzEi1XAtrKur8awVtDE7oMeeKyTB03I7OKV23umGxdO3Gp/QsfDfN994XMpbLV3oOcKKUg8BiqqPLpkHmywMfFVLUBj3f4PUCqb0GBTIMAyWEDUfFCNwPiRCRnvsgzfE245LLaZpUw2Jb4pQMioE5QWX/c1IJlIp2Y3c4rzJwfdLsCiZ1RkVC60WzowEtgmn/+CcnqsnQKcwBcLp2TkEywN4tIgNyNbFodfs3FN8i3lp8ssGi5H2Y9b2JPFZddPg+cc+2b+GKZGlxRpBs4v0P+3BsDhbjtHOuclPuNa0Ec5RsYVGmP2EC8eRU98TX6HIbzlpdroX+unP8C3joXZIkr3Fn0lASTIekoSv0SJUIOhWIH+efLx1yjM+69ATIYVkanD/Rb7i8531r0wb1yTSXMw27je9zaWMTKKUOYqS1C8CuEQso4tgTcoxmyxBAserbKpi9LrBc0v6yw8P2vl2LTy59nVIbAyyrMTCVakuz6LFJ8zqgKJWU0zwgdGCzAnXFrGuJs0f4kljMts+opWWRqFwoPTG6ln/s/Zs260qAd94OJQgjM6PfRRS7t7bhO/12Q/1o49vRrq1Rt0d+bWKQdUGc4YL88hWzWjZYCJq7xVrB0sqdirg0REQQ9/k2Irij85i5f4S7Vu1/zSPl+iZxgR';const _IH='7b3614dbf593c836166bde06eae6d744d576701545aa925ddfb4ae3e3a112d88';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
