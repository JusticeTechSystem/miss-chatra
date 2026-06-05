// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V0psFjhN8Sx8Vgw9lbCYXApOfwNOQRZvREvXW+SHTEVLyqgJGh24XRbNwJHCYUZ5SijObH65FzshtHPHJm3yE44ozIQyfvuIxf8z0MBPM5rpnoSjwILm4YezbEkPjT/rJJ89TDX1g1K8tYsFLwF0wqUpsJpNaGzYIXaBsDsEyKeuA+zp1twpiTkq/0eULZX0MXXtus4D/utj2i7i8dANfSpAzs2Wsv3vA5RQ3mQPMtlNeNjqP34QEuBwKIQUsmnqDiFAtZYlGIgxUeLDbMo2EH2UJqUOf/7WOoFxK60ogZVLJoTOB6NT/S6x01t8lPDt82Mrmn6msT9h5uOjBsvlsyuhfrEmI7GJsy8rRopqU3NUb9tYt6BGK5942i9PBAhWUWyjnxyW3p1/ZtB2xqSLy9jzZWvEspZ+ugKXVaAm+MohgHMh+N9xfu3IYEBuYkUSe6m3H/mZPaSYKe9xGqJntXukGOShHb8GaZns134qoEvQbLKqGjQdjwiGDKmv0UX7+py8eS1fuf43Y311+07gQPOyMU1jEwS/5F980ZLbEzJLr4c3jP8LwGiU0VorUNJ54+IoIVIn2H/v7Y0TckFfC2iUzvYlVzhQnASC9Z+34PnM8kXQiqMheI/KXf0sF9B2q8rEGt+Zze+7Nh1ZGJxIyM8bf4G230mdfhJF7NpS0cLPRw5+e0etvhXIDiQ2rU4a/aRDOy6rqHkoUMBwAKNFU46BjMDO+foha2rKyndMZ4wiHdrHVn8R7oALo84NiJtF5Ffiq0r1xXrG/Hia1CDzMbibX3PsDKBF1Fhp4k6ILJuQAwQrTq5YVX1rTUKJ9f0R7+zF+ZSQ5zor4K7NrCXTD3ykFAgckLmP1JUdglzhzubn4VL8o945hFcM8HV+gTVdphXHUhAJJQUlP4B6IATaWUJZlnUGXz6kymYU+0OcaOU2eF66lYUEAI/UoOBqMvLKK4nP48LBQaorosRmaEiYV6uM6Wzj+oItv8nFYFMOXBBCZHNwq8Tueex9/HENqJF2A/WJYwswhScGJWVD/ka8l2jd71kN+G5Y0G5YHcOA2StyvJxlK1WOUVWT+sRwYUWUAM6UYJQcK2/HOG5+btajRgfVbEzkWsFpvB2vFSa21DaFq9xklA6ZQ7jK9aXLVx+2dyGGNV197QRqdhUoGhXk1XP/M6Z8xb+yDAUXULfOueVTFrpHiyneCDE1eIC1h1eXIsOrR8g3f/2y2hmY2/N1v2iRoQq5snzjbuztv91u0HqcbnSq71FS7YYC06SOzSg1enBEHPg5axQNwkP36VgM/jXKNK3/cK5lSePBRybCBLtpnZlGwaYCNR65spb8y3GFFoW8SFyU7SYghUBqrShj3w6zswS9jzjbfIaYAUQPJ11LiS1o7Xcozim4VyLl';const _IH='4f18b47a141911f49ae1824b6f66e42ed5d9def3258d81c12d2a927cd8f956ac';let _src;

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
