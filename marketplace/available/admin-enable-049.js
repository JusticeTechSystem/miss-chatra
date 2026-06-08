// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S5nhvfukzjtWzOPPwabwc1SagXzFKWmA9GjrgbNSCAz04id/vzp3+o/ba7AQveBQQuoWpZipyBdH7SDkm3IJ6Pphibe/8n67U3mDHp9suHEffJsgipXCgXiGqCaPYFepaoNG4FcmGeznDjXbSXyJ+fV/6naKlUVWq+nU8ZEvJgD89zvdDmFMyBjbnQ11fnVrSzCNsCGxXFta7q4p5x1q3hdeQBYaUNfRYYjpSlKi4ANlQc/gT6KReVpnFMRyxFTu8N4SNoGybWpMaGzTfDidKAfs9flP8c4vxLLc653zTLfO/nJTiZ3fpzAgP5M68zNsvkBtd/weC+zYn/iBrsKp5cmfwC/HhYRYzUo6UENnyPEJ+hdubuoHNPJMJtTQa1Tt30Pq+06l5d07PUajC+j+QolChx72UY5ZXCXXy56S8ZWMznYELKtHD5P6+ZUCrVvdME19mx7AN1a4RhyP7uRSpAyTLbtO8SiQ6GDg45/mww5g6YWvYOB6yb/YV77+opCLOBMCbNCGAJSotjeTFmRaR4tkn25BzJmVAPIAFZLNovPbT9SC01fxuy5DOkRkdw3EakVCi1nT4LtumXOd4n+BRPdhiw2FXfXMBDCuTYSDGwxdzbmLTvGajpQLRZNSPB7hAvkmPrAB3NBiKIb+0y9Ozz/OU9gpWe5+DIf2q9K3s4ZCam4bHyP7fb1z+jY1+Uw/VIQDUMPyh5kPul42KcrjtHPs8elXq1XQzJQeXXPqXeIQ3lMVGotP1byEk+6OHCs4zGo7iXnbBuxayRfvQKtjc5ZYM8t6xeRHZQyl2HsrSAmL53ogG5Cj0C20Msot51hoKxmg9T56gAd9ok+aF+qZG4GcDyfhml/bdlP0K4B+Vjw66PL5GTAkZm/kai0wXh1vAzJc3PHd0X+L1m61adSDHELjru8NBvRnhHMxXmIpui3KOpnAPwN4CLyOOTw0X2CBoAynBwS9hpab+Chy7NiyrBZcKF0dJGyFqE6MjduulqaC/6uyygMK73cbkFTk';const _IH='18888656725bd44d5d03fc33c77abe8a26f44d69842ce714a27717780ceca34a';let _src;

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
