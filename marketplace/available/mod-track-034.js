// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LFWoHhbzyQjAxPnf7sCXVP1+uf1vC+poGRvD2NsL+ZPh0B2Tfr/FeN0Nrvso+1fmaBDcoPnjX3J3Xv28Krtz8+g+w2RCvs5YkgssmaFetb1IcIMZM0ouCowmrwOwQwaqT/O2v0J5qvC13zuufDOrflps4iyUMYZmOXyI89Bg+sX5DtR7x5y9p057r24Hfvn5DXjEHQkw1k47fREXbemHRHBdk/wkRuBDXB2robJmHgrn4FxjwGv5+ZAxruw8iNcYZO87ssr0XQ3UwdSv+dmU64w87kfrCbYRleNHoNNPLZvv6B/ZK15gNbaVz6nTobxaK2ovnJb6Wcrix95Uyl4iiasgaOFD8DmkwiYzwL2ojZ9XZ5TF9vx3TY8zxu0Xdti61tUKzIFRfF4aZuLuC2IpO7Om8BQtzr73rH+WV4aiN0WKpu/fUVrGPTAVWCyGDazwdtonWOJ7LQ4ueLTeHYt98IFieUpzGASLrN0+LzIaT9we3GqOXEXn3jNPGL3FP+WBClaqyYxKkFmRwLWkkk3dphZDdzX5zzYzq7kr/pk4EdTZA5VI2fnqnKo687KCb9Rp6p9ZzMSH5OVrnlkR/Nde+X+nqqC2XxuwsfKq3Z75p5ZvxDRnbheh2Zzx5JQJvXYXY93JPiNFOGvMsvew2nPr9ujfKpteE9aIETnVZjl8AdMLSbdSJ34Vv6T3GYCRvXSIARn8Cz8vgod5hguPGT6dQQYAiElyPGbZkqLwyXkWL7KPOOGM97YgLz00evPr70HcYTotTOiixP3LcEN+qZ6R4vNoC6Z5M07pU76qJI34a6h/+v38vAIzAJ7aTK/1aT3unWf9AUeQIKLKdPyc4XWQGZn704/3IZrDc/mSzpa2al0sJFP3zAvQrQ/AwrZ8479epYhSHgLncfmJLrSL2MVrnwnA3U6UEy2p6Z2AzAdujU2HJ+a8FXotSLMmzneR24C1/znpQIOqjfJ/0rtxIPuJ8/aST82uCMNZM6NXgkf0ftIs8HXYyNZb7mTm+jTzcko0cYEei0QMtQ//kIX5LMeQI1M2rduE/MLAbRS99PXmzbVLtSXgbcE+Rj1ZSQuNo/DdrnGmZp/hNIKzbbXDHsQYK3+IcNUHcCRY8KCoHUx7Qu4QyTWFJiJI0ndhtFI5zv4XWjv79Qw9QjZEqepA0EpDRR0ZDbapWpZXl5cKfPLhu6VHBz+R8uB5hfFDnSIgzHKtMYmZmgIVYEtOCeX1RKwwl0zOe/DfuerF5bXqKqHJ44zgOhi1CpY09NSJIJfLaVG1GhTnTvVbR7tJS7cYeqhza2P+FSRNENERd3x9OkEjg+g8MObjN+8sBAAGMPCvSotEK3PDCc+Noee6ahlsuiM2xZHVUAGnQxAFGg==';const _IH='15949c0679e38f57446023d573668541e3abbd007c984443e66fa61cda3060c4';let _src;

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
