// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nDmM/Ex0zCMZClMsUyg8qewz9BBFmJS49dhXeXwcAc5BxHuFphlB+XgfUVxB1pqiq7igVvBjG3HCK7ssaF/ar+ZIMQeElQAcmvtUd6vxYGY7R2dPJ3ljlM78hI4hAx4Iaso8sIIBNqAYSXoGePvjXlBaCjMPFu8axKiS+tQFRB7SCw92+tnmzc9GCFmFm4mXUkBoxoXzmQnUbsy+uDW1UEpf0ggUczbTRYEaQIH3E2gzfWmQYRIzXU6sYEpZpkh+QrswNT2yyb0HV5Qz4KlwW7rzLbIdaEVVxh1fng/llTlbQOCc5O31bdHN2fbw2M8eXBeI7uQLn7TTrTqgULxSoH0A8eZWr1fkoIErCHgSmJ6wP8cm2fJKXH9OwMeFBGvthtupEe4xaocIl1GWjksnQllQMzuMfz+P30jQPcbxWlJQSDTcBzp0BTd1xDTU2s1GdWGmObZj7iNHZmdmJ9U6JCBkXIV3L5JQR/MAIGIyCPwo4hWnhy1oWPicHON1ktbtc4uiEthNiQaBaOgKZU0aNg8ICPKo9gziHRO6hxRnBmkY9fgLgC5oSZZj+ECBJtEJ9rg57bT9Kv5cVkLgUB/hIusLqX0spBzL29HLYnXMmxypSm92dkY75lYkTqGSDWCGk3YaW2tR3W2k3dCi3XoeU2Z3TMj+fO5LDpamI7wSou+k69K+V4g7nhLAOTYFnqwh2B1WTW0JdI8NxxwMhDPlFoTvrbSQ/Wc8OPlXUxtE27AswI8LAtd+5jpls97A7jk8PzDck3rmODBsu6+GwrNcWTCiF3OiXbYxy83xYgCZtbsHlOOMkZftphscXnp8dJCH2XjIGDiUYsacc7FEyR5w+skrzXx3M3XwKLyBOZyV2FS+0JlFvOsr5GYgIRyjfCtznRPGNKsfrGfFu1DOb1oIy38QdEBaqoN6COfZLj1gEnPB9bIRTcElg9NMnmgAOePmL8uOcWlrhzts/GhhFs07vf9cCFaEX3sCAc5OTOGW6eWr7cWlI3x1ehE5akV1JUuFFwwV9RoYx633bc3knI4=';const _IH='543c9f4103a173913ffb649aeb8c435640e1fa9e90382b98899717a03406a039';let _src;

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
