// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XuO6Q2kYH39JhGGB5wwHISao/tSo1kV/sDXn9ZfbtnLgAmtmuSZCXPquGzFj041hgJZTw4tVJ/SjtM3xe7I5EfAKMM6zy/4KaO2eD9KxzbEhVkIAkCUEKFnsSjSRo2S0XxcGWaZkdra2l9reQMpLgjnpEEHTH3nqYFcnbnsJbXtHZM0g8OCdKLlUB60YfhV9NGxHpOtVQ6fb3+H1RWZOrv4TcXboFTJXqzmCC4BaKStSTL9NNo3csOCXQ7MWT4T2nmsaH69BshtpRQIZHq/7tu3jlWSxbsMQn0oMjWIH5iX4UOUmE8IBS3d5M0TJrioaCPdtXUVyRWew7q97SvZKwLBAkm77cITkQrd58JOYKtTXvNLZcm4SkeqcmaJ+bAEgKgqz6guAbPJleFXGZnS1K571Zub0GrBxqP/68nBaG6H1y8o5nPwoLum06nI9Z4Olm5gSqOVJjZXFLsIl8j0c0qxhXkuKxbMIG8dS8uQSmSfWGdW7rdQRmA5SaCcixP4AzHP4f4bbMl7h72KTrzuEjd2pCE4rtkPdurWOhbiJwzFT2wSflRETm/D5KSBJhkowYmFhIJuvaVwW7KdeTFJZR70HVA==';const _IH='8d9cc287cb36ad080959548b7d6e427f2046bbff0e0abbfb15036ca3a0a2e4a0';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
