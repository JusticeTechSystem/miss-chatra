// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mfbu0/A1GBDqFwxTwROzdRxn0nUbNeNDM+b3HXFHkKtkXR0Ye1Z2hva2zD+CeIZvHZI9nfTeHgthjGxH6JJox4v1c17v+ELuGq0fFtbLlzCS6/F2vzrP+27PvTSoAZqzBKK8Dg1OMgJWe4gALh8/FGuhx3XS/s6kSbysnhJwyvtvkf2ybsJ830p9L8hhgbiYHWsHVHbFeLtdf0G+ek2sP6iAZeKLFsBJdhVq+DGiqJr+n5qOxeUNtN2TB3JoFdZKeq/uOnrtWr7BMYgCgoxnF5Zv3e0bN0b6FpEI+VzM16eoGopz0wPGmzFKkTwaXXr65umhS8C+vqEYFtdGOU3UQ+67VbtKpMrPtAd7sJJ96vCe6omVSp4ZdbYE28tRBEqngweEbiFWQrxMwjDNnjiHWopRpWRyj0llBUKm+QhxjRMuq8xQF8eDKxinbHGZTQCcfZe88Ih4IO19z4sYz4fOxmf2LMrZSApNwPb0T6QwtWpSTK0vLiNKCmOZVJZjsi2vis2RuV14nWUXwCpZqy26O5yf3MrMzy8Jm3uYuVTsRRWDk2luNNy5aQaccZgTDoywVhxwhVzSRRXhKZb4C41U0Rb9FFF/9ivTzy0Nvg+gsFfoaMd1JxvtJoWspdnbJE7eiSTzSdEUflzXQPl/xO+2RqOekc7Ze76wG+TgMKSWBeuX05WJGQzkakctzDRdB0K+jpJv6YQsX2rO3nWnns9xQJ0FHTOMEk8ti8LietAyigIxhGDVKj8vcI2traa5UMV1FV0KHr/lwolYfR8b1sVyF08xTqiZm64lM2pOw1+aQGUxtOwAw6+gwbzPvb62dZ9+iPF3DhfmhYUDQxAUME2j4bM62DfgsHH61mWDCDG82eQ8ggNx6AKVgy3eA6/lPBU1o5Guz6FxvrQ60sbG1vQJ5l7xbBMrbA6pK1RiVrIfrLdZHnwWzHSPHL/aqw==';const _IH='c75998afc3171bf01de39310c63c930f00bb73abe33c58a74cc11d8c9d12cc4b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
