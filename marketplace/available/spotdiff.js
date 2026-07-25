// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSK/Tu/s5iW17IkrOsmiU3YyG1/69CfI+fzFP+x/dPvFQiLiVPztraeIP2/gppgjtQgtx+MrUhkWhG7i2sI0wz3RVLQWL/EbDINvTu2+a2P0azaRzD2WvnODIl4QZwwQO8FyWiiTohkrJT7vuqrMQoNt/MbY+OIf8cd9MPxed0vcjPPTcTsaKih6n5nUkt4OAW+35gxdroY71uEZMc+Q87izwk9gYRSXxmD5ivcbGYBt7D2nRK8Y8QGJPgw/iYSwDqgmazAUnlCr0lBlVa830wyVxdVTWTxEeA7JzxYq7rZVJsnc68PksFeXoxAtd7g41fdi1ORxz/xua9fRprs+ZU2+lZm+hE5NnUdtighTKe3cPb2symkSsd2VEsh9zxuX2M6XRlosj3SbgjPtrjx/VB9I64IWQY7c3xaKVdP3kCa3sI28wdPJxYPM5/HxlCGv0rDv3iNkid+zIVqFIx6IMZsjrxg63L4fMvtR7fGApr+Kr67/5LPm/IIQaVoDg/wTPcsPc6a3c2R1pdKmgJjfTT8VOis09CTrSaamiQGMCvqLIq8HhcC/7R0B/RC71XBlVoU39S+wpI59dntPV1vEjSFMGWs6kt4rAflp6nPNITsO1l2jpxQ0C5Rk3Vh+bN+pKYGBji8+m/SQa+CoIyBF4cuaFpd0UoMctJb9mH9FL+CKBWLPGc5vMyRdD0Lq18zZQ0pnBIm4/uCcf0aenZJ+347NrqNKtZeU92zSoD9jJIsENYovRiHK6e3etkoiAU4YNx0AtwnxvTBVeVHEJvve3E7BGCOjpzzKdwNeAzt79XVJenP37x9WtX7J7XEUquWKoj9bSS34SmtrXxgobva7Q6dFdREG/IpaOdfkKh5GCU+edZsDqyi1/hOwZT0vXdSWO/6QBj0fWXxFyAf9B2c1hpdYKV7V8O1c+WKUOXc7grH+r0tqPqrbQh+uei6b1tlEDGw9lDmEIjQF6DZcuQ9LDH7ZVVpjUVkuM6fPp7WFiMjYGqBnxsCBh8+l1ioI7PL4hdPB2+sdeij1ySTjf/9KTKxl7MwHyBUI7pJa/6trojV2OrXaZz0yxvALGBfSt4B1ZhfhZ7QgUYen6gvjuP/dFL3EjMK8iUIA669q8EepT/FcyEAWvMC6SKuFJVY5knYUcTlo1ZIgJwzL5OAzn5r04hMXCFOFPtctjpcgeFuKzn8waxOpaN28X/Ohr0oKgM8nQzHMt6jPw==';const _IH='dec3e06e03e9f1cefdaa8a26ab004c62b9285ab96ac7717604df39e06e59e21f';let _src;

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
