// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aBPn4uIsdGmp3tcCc6sMYpWIoTvjmNiK5pyAxu+9UAfrbINH53rbchtv6LiYYhttyerB81HO+H118fEXJjvFeftLg7EoVuSarLM5vIH9IFie7DSdDUQSsSeUSJcX3bsUHxqI727PVufmE6piOskkttJghQHIs1otQ8DFCB//kvZv/hKCKkJel00QdP+TaMvOMums2s9uGJHbxVBVKBG/ovi7ZbdICNsBh56EhC6VLrVFPzOTh1AjJ7179NayZEX3yk7CyhxdVK3833k93sdgf720j+nirYoUlLvC5/HlFXhriB2j//7NwFi1WU/D99bXqQOcqh/zoVPd6nNgZ4hz4G/egQbv43oo5MVazdrt+KCGwOJE2Lz0bgz+IBStfNyvfNsXY9RoqVNqqe5djr4thks+10z+/cd+L3sZppUYXV9V8ab16aKrapQv9DBWtX7TEoCBQ6ae+SSjwqSaHeOXCro7iqQvtelAoJG4EL9E91I8H4l1bsH0wglEOVJbXcKQatFlErvYqrZoNLoGJYka0S9romHwfyxiWFbjVWzn3cNpsip4VQVCPmHgqCocTnLDX24lkPQr31da8RCxm85yEgwXGy7lynJXE37nnJqPgDpEE0OEyzywhlbDLl6h2+XyU9DIBzWaf7kejw0S/A/lKABy4ldCbClVdCXuTTXl/banOzauaos/+G29C30i8sipsPAdjGzAHGBkfexPtNdu8EVsIrRe0AfZ8WDTR+iaMJ1ul7wktHxvCX/oOp2GNg0N7McvENiyXHSxxK8XQNFS/9koigAvc8WgGQ8I0Labnul5EFW1EzVh1HucL87zkhbwtmpfezA3ejW/JS+8caM26PZqXl0DGMsq/aFAd/ZK1I8ipj9eHY7II4G7u+JqNztHhqa5Wxdnq6mLmI1cPRJyyr50BL5aX1LAr06H3Qlu0+UrtfZ8K7KbTDaet4cZxtvi32MDxoqXr8poa4MuqbaQ/QTDHZVckKykoo6VFWfAnHXbLAlavvXgZPkq';const _IH='1fc13b062bb79c7fdb47ea0169b94e0e50ae75a4f6da44a985da5853cf1792fa';let _src;

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
