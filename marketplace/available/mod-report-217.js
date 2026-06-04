// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HfjDMTaZuNPSiTVXsCU2YSYW5b00F8bAvUE8PYF98ajevtp7hL+Lwf8CeFv+l21LU4LRxNUyOqA/Otod05j23qmL7rARQmvt6BOqSBhp6iPI8zjjBSNxNOjspCo1tLg/U6mvRteegkaHW6sWEycHm2B7ZjkFGvMoXUYHYo2RoeSg/LAImuV6AGTCcVjtfR+lvRtMu5H7xn12n2sA+si/MvV+hvfkvRwiqLgyf5TSJ/HIRArVvxAJ9HlcKby97Ead/Sf+oV94uHqrRAPqHu/ft7o8JHwyfL6ljzyQ5XePwNzrqfoNbJ3bH1QoqAinIp4xpsEEo1wnaWKDyB2Rqm2QhsGamGF5GCClxf2J6PrNGGAPlzLP0Z+Y9NZjCcDvpV1CYJUPUVW4dLNC8/zih3f8pQJ3l9Re9o31/Ks/3Z5UvaHFT8ffyRLxkjgQDzNJmB+DQdrlhw89x+dyPeGMGs8VgRa52I9djzyq3fTp/r5puF7vbMFSIcv1IC4IhNPiqBgA0W5LbOhhwvc1YsW4wArHQZSoz9Ls/VjPu6xY9pDi4R864OyvDvg2tweiK8Ew8ZZ1HxYMbz14S/veBLiGIja5z5gtJ0+ykGSikrPeH8ppUCoGyozmULAhhN7fZ/2/pjfQZKH5zrUpn2xUbm+V1WYSE4f2Zsd9i224/uV0V3IAIoeWkQXvSg8r7FgdQ7JcvjrYmZDMAY/hh4bmnA+UK0C48iuYtBeZvuEfUBPtQnkvsRZyTVuCDPrqu4mHgmUgx3FDzAGRJTuMNEF5Ikoa3djXl6qy0eKmCpFHQ1DAM2iPCFHYKK87JlzStzVw7NIdVSmuG/61K2volIaC/glV0XSPvInb4CvuyyrUXxggib6cs+Zx9jaDa5ifuuuEroYVN66hUVMMwA9qiCrlvWDl6eVXxQOUnHm1HdN6P4Eh3H3nuitnfUV2kUM+FEZcRZH/8f3MfGFcB2uisdFEH7VfJQSFOPQ6QxVAwPuCIqQrgHi/+VsXBe07K7eEohlHmMZbNQAcJfoEctRIzG+g6eCchmS9g0REgEJOcKcC8LkicUlQe4A8cSNPTYbNYmegMWmSRJwU1q88LgfG6tU8L/w5TUbbhXTE7n3WouAfFItQbEdq/t0o7LcMEsemUtLQA+IyPPkB49vpTPrzr1Yk0JAbmFfJTUtW1eJnHsOOXXz5ADdHPkVFP1mySi68+L9V7i9FrJjfhaZLL/8tAZbLcZJ8hLTvLN9U701MBepRZS8Hr5yopUJWIvLWPeJCMrrLyz7ZscSZy5bk/dk3q5y+/05bkRx00okiZaKaeTeLtVJ7L9Fo5vGQOJdearjSqvuzVBSK3vORORCspl5U3iyE1bXeMASGlX5iRI6uENqoNS/nfwhVN1lO9+k+PFbZ1w==';const _IH='19366cd3ebd9a26e7423068d18436b61cd932b291b3b425e6bf109c4ac86cb9c';let _src;

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
