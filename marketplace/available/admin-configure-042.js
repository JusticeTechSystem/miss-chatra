// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1/AjMPeOJ/S8HYKjCSdNmSsEMssMb5XwhYxM/Bwd5fyVerZDULaD1ozoCVOrzrRiGBVqfBY2ObOn3cHFNJO4MICq9K/VCXEYaO29Il4qYdZs76D+RtN91aQ+hIHvmAgK/3BkLEntLc7WfByqILOQr/10tYh7YHtwHM4Qxy0g/EfRHf/S/Qgkxp+H3L7tWucaucydDX0HiIn7BdKgJWQMtgw4cFQMiQ7z8uGv4KtprZCollAqTteDkDwaUjMo2KrNBye6Lv4/W7pzLjt7pjH0YGSzc4NwJAhUkaIn1RoPhMf8MeftNBrNwg66pXjmGX3Cp0b7UgeEGPfF3hIgfYJ/Qh5meGqU+PKVUOoA1YI/F4GgFy+8lNFn0Ng7PIhBSxki+kNuMqITw+uJ1U9m8uQsMDMpmgaW5qJ7WgvEiHW6b/UST07swGEkFnj/kWL0aQhtuw22bfk/x60MTnGlxhSFVv6rGLVv2zxHGa6NxqA9iWQS9KbqmudW98rTfoYsMnCxPoGzt1GPRyKWCgvd7TGxrU4k56N1IoRzY38JBKs/8cit0ZAjlcblmBkdPD0C1fHrnM++PqzorPAtrpOQPrcLb1f/UlzR+BVV912yUAiIojwJKB79AfXCSRVHNsooxljT+1gzvBlzGg0tXYAyDlOelQnmPQQ+Q9GbZlHQ9Pa8ux2HqxisQHC9HgPtTjU4tq9QtkujfQzEt8j7/BVVagJycF9rETRRzeMofnM69ORdkyo1i5BGHcThqZMbW50pnsIWvykZeco5Vjk9mEHNT/1cWDZuI7ofuC4C035rEQtjFm6Q20ip4AHbCu+p8UkhPwGT8OG4SUD+yWup2gDjYT8X5mJpPDBtTzMkOSdtOvD0sz5meC7TAaS1pUxTTbMcJF0sZk7l0u5BEBfo7bdPvAXpSQrAaojmC2z65Nd6vUlFJZKyaXCrBkc5E1EnKfMEPAMLRzEZSpdyDlAAuCEkrJIOnrRW37GxnPt8IzrUTQ2UGTOWozp4sI1T9SIH62LcfuP4z/Q/MME3qm6Jwlu5sUlvnt8M';const _IH='3551bdd720abcf469527cf1828d27a0cd4565485294d01e7b4235a3a2d1fd3e4';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
