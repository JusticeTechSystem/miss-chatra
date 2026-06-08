// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ygjwFap/e8k5jKvHMXCD1rngnELXS6IY/NGm2EolJCdo0GC+h+A4d+cPLK45RXKZlRDWvB+bBcxItk0PjYt1QCq5F7deLG1qCjvuOOYncu6YMS41mdpWi/Sj5ur/TW1f1hH0/i3/v4i1RGO/3aBX5A5lrs2rfoOmLQJuLS6ZFppQYeiUBmjyxtj1Ykytd07jBEJ9/JAZ41mZGwzq8R39yvST4VZlVKyxiuS9HcI5v+6XvmV9lm4JxbP8cget/1rxgMJLik3DHZ3QU50UzNj6sSGl3DfSK+5vls8hapMp/3sZeJXMIC5WXu+fT2FKOMUstiiHXR3vZmh88mDjraWQbF5VsvBkB++vbH4AspZe1dZLM4aYdEH2VXWW4fNI3zbzHn8qT6ermpMtbl/386bWQl0HFKdc0CwXNa+AzHZP0nLkcmk9339xMH/qi33sbKtQOZ7XHnq6NyKToyqrT0YJbRyFqCjJHZZxMOqAaCgcXcOIDfAP6U5qKXvTC/SiDliZFIle8VOYXIsoWMCqsAMqM75vrrbiaprdvHkZ3r46eIbMefmY94WhGZV1ikmtK3FlkAp2YsRHOojqvpg2WcxwguK5fI7/IsaQIpcZvDMllnHscgW75NSEzWqwD4D4oLTRwkQwuawerKItoBNN9oDNzLekvUkilpPmj2dBY5Vjnfey2edC6ToASRCRXmsberoEPXYqF9dDQkPrTuHONaho4wvUmId970C62bCOu9Sr/xRm42P7/9lHKTzs9ElO4xxjq5h7poitISC/yMWvK59gTzraSWItn8M+WUemNB/d5pcqa5UjxCA1hzSDVrwnfniPQqJwplyEZd+2tKY4Z0AjWxOAd+5WbUgvO4sWUkrsX4gIpLyB17QbhqI7OjEanA0vzM7JDzc8cETh/n/RKM7QJsPxtCk0AfjU549b+09BoujtUZQ0nyl8UCt1P7SW/dlaII/NowzPBLvcYmxEPljDBEkz4B7SuZYXq/zmwhEeIVELZIue2i3occu6RcFW0uV6UniHHYZHA0m5SnSRKJ7/c0LTiU0CDr4Z4pxN2gD6J/NPvywhYS5bR8HeJ1CxB1fU9AJ1jz3vfPPJUGoIrup6pZBixSJGWA5fX4ubvvkA2TPIfzFuruQk6czxBS69rIaPvKo2K+xZVrRhK/bSJ8B0FBEN88sCvIUG/kx/PUUp/6rWRCEPQeVX+P/1PuOuTiwWoPAIzbN1fj61HOsAMHzojRX4BVhgUD5oAzWQp5rxv5WfR0QB8wk81j//ptKFHFRWHum/yJgw0HHCIHeu+xCj9es45eNiT96AJ0Tc5iSgzmhOdakd8IXg/snteEMfDYscKsVS6cZXDGOfv439fvdpXgtok1hzN8tXqqjNLwiH3zLEfSsIwCjBjw==';const _IH='6b7118a98f7891bcbf421d8b0f996e48172389ddb5c13dc53817e0f9a0de271b';let _src;

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
