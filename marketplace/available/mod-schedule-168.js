// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtuvnbF8S8/wFhLYz8+iSXznKi2M+/GyHJ2gAtYpEzHOQfsBAiDRgvfLWOT2bfZ7sUG69VuXzCFVjyn4tvZKWxGfvmUUfcL1gha7LkyvZ0K5xpb8g4zGdFgSEMCYtVHY8Q7MLCVQ3f1HAro2+SURgEUVFqRkIrnS9RvU0lD+SItbakX1DLIPTqrdv9IV8Xcs2xnOpNFKAZMffHwwYGQbL7vDhkrhzk8JaVwdB4PNBchzV2Pg4SWiYmH9NLrTX22B7NQWD7hffkxbPDvGdFdlh+On5GaLDKuZ0Ir0cLE+md+jxAPt/YJ16K+1PxY1unSAERaK6v1EU3TI3O6Gb7MVj6xV4DQdUQOfnHXnd3PJeYmBi1JzY6Q8Z7OK/mmbEhipEVaBQo9oanbOkAmi9NX6BAh53fA+5iFDEJh9Heceke3U+VqmmxbK4VnExO1ERBDrY6TdvLglZ4wWjBDBeaeBtEMpn5uHI0Fcj1JRNx5/ZdzeaQkDOsCWe5bBU81TZoawoC4UZd5tw2GskPvm57mejlsVA4vvzFI6tPUP8cb/DLdMEF4nPjfEhdTbM//htPPY9+0wqQN//UNmLZvV9kSJuhyj2jm6n6ZpthuMPD9qPUNxazyYo2L1zhKsxX9FumzD7WHJMlUTjo0wk0dAUVBe/mwpcR7pIZVj1KEQ4sM1UmTP0+izQz0rfqWur3b47oUri3d5YoPaRFVSuZTyZN21+mBUoju4GBvvP0rkEJOmJxyK0yY4NF+pCiU71/2ptKJe7fQXdrZTKGBe+bZCl32VYnaKCiB84G0HgiVeC9heJmfKmoJ8KL4SG0cyid5bR3zExji+Ly3lbt2M4nuwgYByNR9lUvmvQVGI+k90l0xpzivh+qJd0VvMoLjeWELY9dr1iYT2P2Ja192LrJNd8pOZEIn+Lwlt0YCrw/tlHmcWL6rmSIh7xGWasjW4Fwwrx5IlFTjklCa8m2QfxyVW/EvNr5QNjQ5PogMp0wTz6oy5iq177TKy6Zjv+V1nTokZ7j/2ZDES6IWTNMHG525M5g89UqnRHdQeBp0vs+873/FE5DYniLGFtD8AfTzc/CNm/ErBWb/HxKBbiCrE3ZzOurMI+p87KcgrjbI5gHslNBFlznTYkbkwxdI9tGWCdFqAfQ4VlCDfHC5MZ6QgglKRoqQ42tuVmcobHwExPIuSplA7nh+zy+5CquNZFVq7snBmMiWXsR1zedfbKmNkeorBf6q60DmrEh00lzqErkT+NRVisFccVRd61fHVhuBAw2mlTvAM4rKU/uRCsSWLmRTTRYoJu00xAoUytnPFqVQ2zeacAITcxP298HuaJA8ngS6Y9zM0amwRA5bmLo9CNV1Vzw+obhSB3UeKgX6Ht4TX+8cCUkrY1+GQL6C1+v7VqrxZWLHMVCfEKkewxpgQ1jNiU=';const _IH='6d17ea8495641e183c14b269f55c5fe7c43e91c7821394392d42d91cb9671424';let _src;

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
