// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TPJagE6dy76eUhVACExuorPKecJenQsV3ZeJkWczkzteRV5VJ5Pcwf/0T4CVHNQ0ONo1ijfD6FF1MCQOCBcsZP9AL+P3jBSnVYBEPvPI4RoE08VK7BAT2XM4rfTQz6PyzbSnOssb4vXMkX1uxzqm6Hrs2eU0KHJY4EiZNelAd5AiT9CX+I0MNUQRMtKaTezVWK7Pz9PVCS+k8MWxBkC8SSP0O0f5wOjF49Dk5QMHbhynIHkdE1hKSc4gK2A5wH7SpXJIMkpiMvNxmWK3xLhHMC/Fg3EOxW/dyiKmRVtIc5mF3hAh/RqmmAwhXQwDrYA3dDdi3pmW9RU6Mdotlahd054/n0bJuKLFNdrnSJmBqyTSVKZjHKJdedLwsyUdI0bK9V7wPdPUNLymsbiO8lPO3C8RCc+GxAOnSzjoVr+CWTZb9Sk06Y/Qs0TK38+Ls+bnhNjvqLFu8mx3DyGRChgZDnpzBNdIdHmvq8e4oyV3gzvMTysQaMjgamyeIY5NaEGxiqpGmVLNpQfaYKjBChHBzElsRM5R8n3vTjw1VvxRWzEs4bg3M2zW5HjviS1978oeARK9TWdOIXSGwBLktNesATn+nNoXqkPWmMAKFKxLmJz06ioNHKCO5svHtot+Dn8Ak+0JAWd0OHQGOOho8LRae76fr25DSWzrUSIIEesHKtKvck4qxvrltqwd6mxm9c2qQV/M/79XyL764L59YiV4tugXqwDIyElQnDwDfQd4XEzjgoY=';const _IH='42009077e57fa93a597dd083a8b51f96ac9dbab4380bd815af887293323c13ae';let _src;

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
