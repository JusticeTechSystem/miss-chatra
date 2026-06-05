// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OVy44V29TSHXfAKDCY3CHBQpK9JtKc3VIhg+HGL27BT6yfH0fhCAH6UHVJf3lHR5/FCWswu4CmYyG8aPigRBFy7uUOb/JWV074T4CihnrGDs/F6cJE7/4PxaTbsTzkz4RXy5ifqo97hPzGGmUJRjQKdWC+4AdbDZzXIZ70PrY6dBsKkZHu0P7tph3O/8tO2emm0dFarGL5LDiUE0woQi0dRMOt2ypWOIUTNHdPjUw/6jGym4BgNWDPjb1jsO/T8VZJfxsCi/3cC8jmwFHZZbyAaEomzOR0sfjQcWYBeTBEm/RAg9PmSlTGCeVkm71Fzz0JKARynVg7TYD1o+RKkMbgF6TOy0uYGrfosfFKx4SWZ/ZEgXBwZQHGJWux86nIicRoCaIleW1GTXz89PGv3NWslG8ngXo5ZvWrC/Ck76HJv3jfrNAZrZgoumrKrqerfcE+H2vw44k0zxh0IYbdGgCmZK0KAsLzQoMnzYcXAtwmoG8A5ti8rh4uS4ykNYTb/zJhSx7PsWK/qMjmiJ5C/27XQZadOZQnVRSlVkBjIZzGHn179VorLUQveac6s50IqXTDLJHk3MYAWClnRtgDU5Kr815BWhCXVAUyjsbVzHuYq9tcE+mtKjLIhggl0ZrzabPrLg/ogb09Xe7yyvyfv6SqVpJ0ORRZgjAkl0+a/DHkuWaTSlWhD+wXSJTororsK+G4fyfh5rKLt/43kXRYD3Lx24WFqgQC8/sZj8Wn4dxHMCdoml1digFza3KEjvsjB0WgHCxioWOQxCjY9TV3sGKWck0UsmcsgH5AoKit64iW9gnA6W8JfJISSL4+1r78PVhgL8w/zBYS5WOyT6ax2c4ChDsHxpdtoPzKz5PynDYZZD5zSsVDgEOuQgNNJxpNBJa1D/SousG1pigz6j6u74PtUIrmT1cy/T6bpZZ1PyI2+1gwZBBYQ2yhHrjF9dEekEMjaoZWnjXXKvKhCinliChcd5OpeedYt1UF0MZI/vXO5m5nY=';const _IH='9018eeb1223e35a6c4fd30ea6878da44cb9e88926f51871e77bec638e6289346';let _src;

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
