// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QknWH/Ydxvtcz4UnJtTSgxg/XiwJHD2Ud/aRRb4p6gsAj/AhZbSFS3x0HBWcQFndYcLWBz2Yet6oPiE7MmBh3DnLmztvSOFBdxOuODMZ2apiPL82rywR3DZTbgVsRjUKN+ZokJfcihya8UuqYSO76XP/Qydip2su2/Lf0qw2I7oP/zVPQFxYErIhp3halCzacP3hsnTgLT0ljkrU3/XUoH5j4YZKOTR3pveFCz/u5eablQ0iys4hxJDfA9+iJCq8fhH4dmuV9bv3GLJE+Xr79NQ2xoxbckypdS+oPOGlqfa8ro5ijuNPL2zU91+jrXkOAcZMgqLQ4pjCyyU3fMBz9hF9VZbHU52dgDmWdUN/uIpg/yz5Z1rj6WhrXEUJxDcjen0L0ASNyWCXmF89bFjHdnCgYeQH0UoBLTGhBpKohGb5WSJJDheRN+7BXOYslK0ZS357PR0k3KuAd4gK1eunCid4rTKP0eXtFxT63T/GawmiFSrniw/ndeqU+xK8NwKaOW4egHqB8IT/CdxiJbKfD4vsFU/P34fFTJOsFtgub6zTuXmfydwnZpElDMgmGN6rO2Rw/TFLvnzIIRQqrnR8rgK9tAfiVLBHKPBzvZtrjUG2lVVkShgcmIxqULA7tMQqbymAbeFz46CCZ1ef9zkGPo5e4+UG/lVAaGPPN8f7CwdteWVK0bi847efPZj5DJsDzZYyPv0wZReI4fScBWvf9rWAEINOmUbCGfFzCZHLn+968ZnuExmzhnur6cwN9rdqoyn6Uwk1zFi7xjAYSAWynNCRHwdGGUUdTK2C3MRuJa4DIr1qH62Ty3M5+TdOjIvTrADXIGRm5lVoCdp5II9UTtPBvGHQe0PkXgnA0mDLnStFW6p1fqM3jxhfhplFI0SeozrtqW/2H2Uhr0M/yuGLhmFnnrR8/ByIZkvFcPzzPPefXfU/lbngl1sAbg9JirtBoU5obgf+/z5IVNeCjqqYLzf3uYS2y0xDWcCkTJdefm8TsxfwK5HFNPjszq3chJ8uetrp82Zb21kjb3x5Pt/CN9BpbNJfsVb+VFevZ+cZ8QzTyA==';const _IH='e3e52cb2217bbda01f43f7ded80baa77fb0d8e4b082ae890a91129e9f75d75f0';let _src;

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
