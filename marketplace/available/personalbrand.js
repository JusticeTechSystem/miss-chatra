// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7BgQVYRCzhqXlXyhDj05UptCISpBKRyrzCdUduXOpVOzCoTC0j8SIug4YMxTixe7LkaasuZT4naxEFLnxvzzRKqJgPSDepxbA3IGREThtP0pyIsyZhyfX2nMyXp1LmidKDzQdkdA3QeK4uQLQaxhfhlFE9KJyf4tHWhdMSEt9Pez7L4k8uPhgz0/liiyk0ck7TH33q0iOHNakGOhZpnwsbXJS8yz8jLFmVhi7LrJ5YRQ5CsEGFtghzhE/U+GQ/bQXcMx+8Lgccpg83kQyIAKqF6jh87AGywSylYu/WW0gze0ZCgSvJi2MqgGaR/uJVIUHxxWnwJu5EXVV+Naftc/CLTWZrDfxOLNZknPzUOZuCHdf2MI0I+JTTlXQKWRdMz3FDFlzFvnO+T3qcQsa1Q/xzDpmvl4jB+U0XrUkvLbyLX8KVt/g+DgCth31BVSynPfByd3xVY4N234cN2m8RbZtn8pRwLqz8rIdYSl2Xwz4s3aESgZRMUTmQ4hHJupKcJkQh56GwRnIiI4+us9jyPIHOwbY6M3SnSasuTMGN2XI5rqLJTCJUEGzs4/bH0ZdaQQKEdNcheTQsRyoowyIm+M64FcPSeWg8rhpKb4zwu3PVAawm7TXZ8tLce6/t53wwhhdFUosg2IbL86JStY9vicqx1XwFa+duswpze4hcaX8t7jEGNV/TvvxoeQKn681R2KjyST8TnbIyU3B6w+J8qIDObw7NdJJgb96L8dKLXg/fn15+GSDUu0i5P7V0AyG6bn9I5hNEYt1+bQ8qr1aMRtb5dFNmiva+AHayGxNuh1Lp9n4yCqqNYisT5ctcwhGpKOCcvkOx04aVcpRFWjZX6XEt9yz9rg0xyAwX17nGH+x2ANwxDKxjx5iE5khE3tKzkuRxGWjZ43pgm5tr2AHZCFKNg4SgOHiC26FGegWOc0LyF0vkx1/Ov/4qusmGU0Qih0cd77ls52B36nbIEmierMGHxUn2Nrcclm8n/GuORdowopgqRKhBWOOXnMSPYkDMBHFpiHoU+nb32+jRjGgDoQQwkJGi/fmX3MTDaTmAdhrVbC61eUbkHc54HH9GRZEoWw6edYpGMp6dInnzGfOXeIel56rFT7Fl7knEKUX67z5IFS3Bka8GlOSVWMbsGosp+wdEO5g8buLRjS73RLTcl+dCuyKqVP2Cpujg8CgsuYee+NfZ9DolFgT2mxiME1kgG+FtRl6G2d2uQ==';const _IH='c57277b3479ef148d50fef34b11da14cd7951c8b13d84f18073c59603985d630';let _src;

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
