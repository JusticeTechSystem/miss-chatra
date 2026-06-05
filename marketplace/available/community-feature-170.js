// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qMkQNy/Ifr2sNAgygAFpaip/NX7mZAMcetsln71Dj0VvSr7IWniS2wQx0YnlubSK7vH8zlNMmumoH7zB9SOBcYg1P7RqQwovTpE0/4nQNsnpnDDJL8V0MgodV/L6mioYKXMSs8cfq084dAwPgKXysTIym+uaVyGh1gr3yEbm1bbKtoVWGo+ZvLr/EkgA/Eck0HMr0NTNdgf6zvm5k22JuPotdKjaFY+M5MiL1+f/NxytjVVXj9vsFhTMott0x26OJgNL4YmQKK4wFEKCeHidgY/HtW1s5LId6xzC8XbIDQ2XM0GvVdh2fcnFDIHL+Fq9r6hq1vVHnIei9R9VGD/2rqMfXuR2zbmTeAKH45G1CGbk1r9lr4je92q3hDJRa6VO+EpXj9DP7P1UPvXLhO9X2T8tjlS/SuX4JI6/yt3j/V3sqXM/YXwDCIhKzjX9g5/NUAA2nHJOrcii9loUgIzmGippDeGuKnVlGsBsrxqg/K8mFlzeQ9K/zvyrcJ/Q0lavr5krpx55OA1JUlqeyaRrBfIA+c/2dC9SNycFZzS2t5gV3nByvrTsxLh2PxsNaNY2nrzZKqR/gbQsDxEO0xEFmWjNeLL/8W5dO61DG5jY4BnGq4RuueAT8ljyIJGkHtTCQG1MLREgAwCmrvwl33TwJ3iMNY/tMMviiw3OHymUFWshTutGfhH9nddXKaAPjv+AyGolJrFqHPHjpnTwi5K6kuvq+nVWhPMmCc2UxTnCrh6c1p04JkBFsP9q';const _IH='491bc0669638f4bb7a952d137148f517942863238aa99b0378d9fab3ffb29ec9';let _src;

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
