// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EVfCS4EQiD2IVjluzafE8WqGXoCEn1kpqlxzj0J461m2Qy4pwrBJkvl9FyYpxbovr1BBBosPNrDYPBSxwJvtjJs6PSwNfnv0MIG6Ih/gM3FOu30zsXvaJ4cK54RAlYclu88K5dssyfqwyjUUP9NicZ/u1GweOsOTe+rMeLdYU4dVWSYTCDYkW8VfuJGiFXcQMKLlx/oh2E1tCsyay2qDsua3808+Agca2/eG+uZrPLOluIrsOfcpIWiwJ2sTPuGY+99JWUmSTOtnQbmyEImV73rM8kr4HcPXMyAID4vcahEy+rsbhFq7gGfxI8p6Ov9H48nSzqc5h1IdfFuTrvww+PesnD94whOYRwykntxV4x5Ku9XEwppKc8KSY5P0RUruMP9Tb00wALtk23wegTWISGnQI6CkMLODTDl1zgErDfxFLN4FAq8WZGvRFkdxBhCLyYbUe+KiB27ETAv4jBFboAfae6ulDd4LpWZOqDxNzY1PctpvZHaknl5F4/Ns1rwZDPGCm7YR7XHG6Slvg+Daie4Cfd4jqbxViG2ZbCnGcWhJkxDNKyirkHNxzvz2jZmmKtUwdLJUHdlYGw/uuADBrfwujiSAykLrU/hwkW0e4zFCNXrZx41YGipLPl+J72vtj+tKt7nbVWAENcjRadarLLbJw+YJNF4gKSHN+SFu5mGyqPdC5QbgExUv/VpzOP4Li5zm0PlJeqJdu27t++3fTM6z5vndFwh1kHldxU3gen2v0k8kIxpZ5EFKKslnJQyb3u5z0bNMXKtugvkrqs+/KecOdmisCsJxVH9WSjRT1n61rgeG/GSkKE3fgOlZzzJ+uPbaoncQ2VgtWD77PxH4eqLLPSQsndbjCGBLBDqVnl1I9ylNtSW3gkTZQ/50Es9xzAisw3lo4Xasz0iixPb0u+cxtkU+RGaN1JXfdVxX3Jb2gtOPs3cNW7mS7AglH/H+QU03O7omKvU3EwN4sHDXaqvkc4xv0BAXElRyPwkJRRh3SKiTF9QXhR2ille6aI1Mzqd1bbDB1F/5ApAWT+JQbqzOxA5aQcfXRktOStZ++Vzt1urjOmmzQknQxexp9tzm1xFsAo2/zEtCQFsPyqZfGUbEjoEUiYm0fOYv1NdaJ/OXEklBcMYrF/Neh6xHvsvc+bdL6b2OJ/PYKDppZXe2aeUHRS1LbZYYyX1bxiIEQzs1U6iIwf408pfPgCh9IiIVzg==';const _IH='ff8c3f4c010532b8d3a47ba668812ed707b9bfddf8509141ed36206357050756';let _src;

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
