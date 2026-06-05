// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0kr7sPRh+y+KHf5SzDjBQYvNduckKDN+Zickij2uuKpwE/TCCN6qtfUHFkGD/zf4vuJ+kW5G/D7UwafMCSt9QBT2CslmjnAbjY7+lQN1QxrAcYi1urOLXvLze3fapc+dpcxcQla6WE/9VKFy29vKnV0f1BLP7cbGeG3Sm/rnSLHvO4s9Kljklt+cwY/zEgfkrAzq/3leVs1h4p2EAPIiplKP11GLeDsQf28eIU8R+AySnQ+i1qMoQg+S9xbMPrX6CFJ4bhm0h0cl3oH9B0mYsdUjiMypdnxaDPoNow3P2/tI6ci88RBDcHwzKIbeuCC/UJJORRqbaxBpiAY5OaeqqpEvNJ75LnzjmmiXCNQf2PQNuca/uc27TNJVbwmAJsJWyPyWrvtHdvE5gS61YS2JrPBpsN/4AfYa9qoC0r4X9AHeOzAADNTOYuVxMaBz2MpMOUyeJwGp96HwA2jMLoHdrLEG0Uov/mh5SHwuoWDa+FVhAKlCPmeajUteOtA645k/UK+EpY7/rPZ7y+d5PkEEHQRQppukLCVBP21QXuPn2JAdwQ54mxGMoTs9DMj4qIqQe7OdTihecteCtaqvVfLirEuc41ZcCxHVhEDh14OJ1SmFqSCLabk/TdsrYvdwoJRjjsIXrdw4OaxN8klSeucT8tao3gQLaAj1VG7nQvIYjrAEj7jtd41yT6v5h6ad/RVP0/Q8pZkWKVmMiejx8xmtu3L8sI=';const _IH='b5e9c98e8c531c13441b6950243f55010cde2ce07d03ce186505aaa7eb46a850';let _src;

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
