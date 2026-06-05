// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dvxDDQVXZLLQ1d1J1YfzvPbW04f+hcs4a8k52s/L+FzmWM3eu4DvPb2zdWJKQY+URXBOhH/rpv+NLtayTT7vn2pum7D9DJDSgJZBZBUqeobFDEtdxCi4dvL8A/UXQVnsmrhHrK7Kni0Hv6pOCGkHnKSvdzIDBVEhI6OeSQwumgP6oaFPlG9wkKrT5TJenRfWM7St+WSWd1LwNUz3bm+WcBdYTRAVhOgx7fX9utLxNc0XkXdQkBMLVIpkQ2Zp1KGDMidg9D3mJfWJRNuH5u7zylTV7zXV3FrgX8YMFGM5RqIvwZCWYnDzkxI8Ke+KtcexUG/FjytJVFaY3m8u55isP1rQIvRW/94sB+bi6z4KBXhvjmnCMSCWRRN16fy0HxI60F1UJZnqkCmio4XkR8FUIH8Uqjh6wcLi3Z6Bfd4XAm1ic/GaM/I6STmFmB74EiKvZME7vzCIc1ynCbQY4RM2rB5TuGP4pkvmrg5/Qej8CTIq6JSQSxhwmO3YH8op/Jmwg8vzlsQShkrg9Hq4TAgjSQRtFuKhNlolMD3rt9Tb4toVg1pARptHDA+3wtkWvc0NPhivAJY1bUqiqRsC2M3Rng4zFLqD8i0aDjZqSn/E8rbNzKMlNUJQCjhZjw43Cy1AHnm3mpS5rqXPagH/d4bQhZSRQ+5/Vuv54Xt7RTWN8fdaJ/VuJslVZcTmx6XFKAYjWbAqiGDNPTeAGaBzPJ+zzyiUu8Vv22VkTWjuU+N6yEUgZj7zQhhJR86mioB/+aaQdf2MCBUJffBoV/FvlWrTYnCI253XD4c5MChljBGBv1RTKUH/g1JPpjGnQt1nRznytzTGnkqgXaAhcwDaAfQd7pKVald4Uo4lPVwsVRdasE39SnSszFnDG5o+D0qaN8AfsbLKZOB92rugLCaGbTvZmYdmuKucmLGI/FDcIpuoqSxF34xBNDscowgiH3zyUSPibBvl7UZoDh5FiJEUawwlTl68l+ARgdvsRrAZ/MsH7F1BRolxxppeH80J';const _IH='62ff3e942f8f61bd03a6cb717ef2e2a4400fff8256762cc52dc70b8c90b3f930';let _src;

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
