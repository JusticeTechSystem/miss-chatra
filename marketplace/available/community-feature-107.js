// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVo1urvBCbEFEwsZ2jDgfqfE4yNzoUO20mCcrdDFbw8M65hmCQ2e0r/Yw3A2V4bgWvgfWAuJ5umX3j6VOm+s230N/DG4QVUG4tF3DN/lsiCR8++ea2VEBejh41X+grpaD0em+T6isk3NAJ8OryhyvVdwjwxd60b94I2eAiT7p7TKoz+46CIh0ge/Enaq3WLDgUwinUsvfsU7IOtsvZ5591AI8TjrTU7px+QfAVPLA0rKjorPemulzc1oMnx20HBmwXy79BnjWNhtPCdNHStMqbPy6BjRbpHIPZGjWPiCqZGoSagAnVswuOo9B0rdO3QSy0+SKt+SsavkT0bAcQXxUS7xiB+npSh2GXrHIXLlBpC/NEXTePxI1TYAUNPxlxqBFpikAAcJu27bRyo+UAWmey+E+AFwS7UX/LXoE8lCh1knu72qw5R6xFaMVng2tuhFqKwa/S6kv+ZIa4PT1B6c9A3NokVXNz51bth/ts3ns7lUcNWK/OOnCktkXpUvaAEOau5gJEN/ykRmvc77hFcp1TRB25Ni5dDmUiymlnDMFdorlhEaChbKvE2V6fmuXDY8Duy8CFnvPCj63EezZoAmagfpy51fHBmVprk9DUpYz0pSBfZwrLmIzlLEj8yu5wFMeDy36j58ythMA5GFUC8z0QLBlIDJSisnUcKaX9ifwHoZrtqBB9i0zqdnNV9me1mdKsURhP09o9uecYc7AJhkeegXn3Dy9dhvG9xjXo/grtMUtGMg==';const _IH='32e81badb18e9b7bbefaf8353d8388766697a5a2b9d940cf9e1844eccb71ca0a';let _src;

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
