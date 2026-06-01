// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/dX9lZ4CPe/B8e21QyHzhu97AHrnHFvLhdENbc9jvLcmggVTKEm7mSeeATNAOFpWWD3ztqwj+ObIBllGbLiWxtNiKUKPSifaZ7uYNBBn9ixRxsxOyVreOzARBX56ePGhvlfSYAThcLKz+1u2r7eXfGL9ED9D/NGJ9UDyE3qRDbOb/st9SbBKnOisYPyhZ1cQGmocz60oA6HnTUUzGAE6s080DPslz0a4s2tNvEi5GDYXhEsyK7UV/WDBR3kl4+yE4eh3KdareifAyX4uuQtnVi1SeaubXqW4NmryhkwcKw/TV1+zDImbFH1e9FRvEfjUsTAbJiHBTMehbdsLgpQT9GxIZHgvQVy8wEaySwlhxF5vgP+wWHkVun9RdhqV2Jan/ySttR7dSuvNDGsSZc4DcBPMKPzlEh37xhSXKNRYeEL1W9HM4YtXfQ8zBcBo5NvgiJQc7yU0y00ThG1jhPyGLnt/A+GlQ+m0zx/3zc/KRsMkP2AAWS6xu4il1/BwrcIcucLYKcz4stQIlbN7k4++bqOz94PJH45rIBlzzynbZT8eIAvGMGa3nvuuVaBhGqC3RnmnbBmR5sNYD1mqxuxsGP66ic/y2RRjw0WM5lH+nRzfgOrC1j/E/4a0bMkS0OIrJ2WSL9DEG9JftY9socs/R1QYSxVXO5pnikzuPQdOpgMGrsgJapETcGtG0NGvIHHcyhl3Op6wXXV81GB+j+1AwQMd0OLhHLD+a4JXnIZzcuUf9v/cfZsXRxog/p3WcreLLmwU4EtPsAjM6KblUZ6ulvvQcPMkwXKuIHEBjG6wv3BONrrS1Pqtt0nOjhIkoS++0wy23E3T30HyGttuEwF/7biQNWln3aeNK9OtRefiRatzMvWQEvs4XXvu+OPmZMlV4K6Hxzt+c/g6lLidS5OczQxEolIbEZsDftrSOJAU79t4nuF8K444SZFMhWQdJy6dQntgyroyZ+jfyrx006k1YvodYXqq3BEwimjclS1sqT1f4ayYjICXQjBWwG6XQTD0jJJ4X7WmCmOxGwaW8Nv+tV7E0J41gPktgjPMIfZo01zCja59FBfLvlmo+1erXHKMOUu9R5BPmmbt8LsgFIBTUYRZcTrTqXjLV6X13pJzzwUd7iUDaMy2N44HtUdBNFecDjWG++g4pDVlT/WlzcKE3R2vTG4MIKKMSmoOpQpBCdjCogeQE5GHw==';const _IH='c67dd14fbd32300d1f1dbc3679ca4bef8cab320aafaa41ea0ddd0414cf6279b9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
