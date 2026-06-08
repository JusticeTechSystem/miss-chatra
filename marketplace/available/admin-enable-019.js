// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d20WhlXfi6lw+PEcmd4Ceb9o0uCEHhdfEOvZBvZF8BwHWefA79f6B0bV1iYxGHNQDjCS82lUHSSvO2z575/3oC0Q8Jsmsm14GH6qJW5sUmc6N4liHW92nAJXZn2oY2S5i6ik2XlVPp0rrRSsyjrgZkaaRGXn14P9yVEXAVrYGm5PdI6v5MwOIOWQkMqCeu2v3pt35TQbAl741cJJJC1P0e/ozhZ2TZ+ufgDVGO5xHTFwAbXc+unGYe7sZii24hQTLvGecjxp2ZUYGAvXYfgQAkOSZ60MuEls+nqroAftIpKu513DBYWrcUwF/wRxwyduTwhGmMsJ1k2R1oe2WA4dvDeA+d2XQg5W6RBsCaTriV4hWn+v3kZpRrTkC2lAoOPKmZJ8iBn5w6mKfwGslMK2GKXD9dA/4Z/KWN1cvlwF3PGPSm+rXl5pY2x/7wxdsKHxsljxKfD5EnX8W34sW0wSutrWJN4VxiyGlCcFlGFfp69JKpKwRnHAe/sa32llIJHpIIUP1oT4YXJEoIbGxIE1n7cd2lm5k/mOSRuETlRI9WxPi+0fBW9pyPbrqC3uOt4u+Ik7SttJHl/WQ02NJXtaXAQqoJeP4MXrN49wQkf1HwvY6A3HGxyI5tBYr6AYr+9Toa1OUqsJYuHuMFvBpqXiwaBcuthTUeGEBAp8mRcIiFGUz5wgLIpPfHJzjeNBqxi1ZbtrDLBala02x/0BKVToh8k1f1rOaDKPv6GSmvttC86a3qv1EEvPKJzgaOS3NwDBlvbwZbI1PmYpHDi7DLg7kTSn21laSErKS27ESE3NjMz0taoqd2KXJkR8wMRCjenz9dBD2eJV9+ca39YyTpAQu7R848CH6W5wie/n7TvEnHut1sS8Dacwe01SLTiwx/ileUhtTP0UXcFMN9xpO1vdAWzx0Ch5p6jeJvjI/tTnZOrG5RheSoftFZQUcj3HVyiLQlr+fcoGqgYmUp6aBd8b1bZz955+W3fU4HagFgOA38teyxgWUMpoqJTWQL51';const _IH='d893199d1db4756bf1833a28cef698ea8b34694c4d103ee906646edb8170483c';let _src;

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
