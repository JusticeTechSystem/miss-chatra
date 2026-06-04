// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YeUlE9vQgmGgp+YLxvQZugus2G/3gosItazse3WCBWws6SzXTkj1LWnIQ56Os3kYxporTamOyq1pHpWZRd5TRXfEnxREiT2yhJZFR1sss5nnm95t8QkiawuPF46PEpyBUN0AbyZ7yQldbRVyaDA4Bf5dzKlTA6rxgacj5vmh5l+R1f0+d4am1ou4yjHz521GybYmigSC0beekN/dJUU9OXbhA7xtX2mtH7PXFAclSYk1EOK5CByh29Q48Dte9Hacmzf6q6VOYAIQy5m4xn9QsOgm11XZAKKzLOAhC7VyI0Cv5F6V+Ea27A0C9ozGciB6+3lH0AbnYlNijLzBFwx4VdhtmberR09OGXM5ZBnjZwcBYH1XYw1mDN8Mck/AtUfe5o7S+8LrmSwIjYJUcmuu+mrf3+/pyBEm0ZK/QsLYaYSuVBb0Chn7hFIeHz+LusEVC7YU4IRr6ZinwgS5ACCUoTOMkmCXB/x8XbPj/ASb5NICos/YGxsG7JidpSWzFpSahgm51LDXNdlkvibC2+FXd85JS7WWs/kbL57QkOQdiiQrfaee89Dre0T4gfY5NSzBzJGkMwwehMVd+Y/HFyb8SF4LX/5v9nXIAXr9JOLkOxp+7FhXVOc0PJX+V6J7w2tMXvhmralco2HAW8Ns4xcJtqvsVkAOoNezqaIH/3B0CxyBcq8WmOvsuy4GmUKIjVtHgyzTrohaLAoc1fCTXzVtcpKiAi6QG6XopEBRABde7F/zW/NCUceiKaCjYmmrUKhJ9jBEZ7yGrj0gTOAqgrg2eAFynhlYItpTI3Z/0d6OOLynRtORg2gyV5Nklu6+BzyIuuDGAxZJkosly9SFJ29rIfWTFKlwPt2qOjavthuJL6+bBYHtYqTIsA3nw3c6BglwFhbM6sEYGnSyI1Fe5GAyBT3bD4aDyTGM7ZBdG0hMev/oub90t1bLkerUeRodav4RxnwCXHT55/pZcTSdgazS1IUf9iMPdC/bt2r+fuzPJd7kPNC1SIz/Ts6ZelXwDDYbagWAzWOVhA8nTyLSYYHRbd3d+fKDYD4DHArvbvH4+jT6JKFU4HsmnqkC4XHhYET31XYW5/KBgBf7vG+o4lCzmRGWOZMdVlXMo4ViS6paUxo3Pxh/zFn5JK0ELtiF4SzrdXpEHji/1KEDw6Hhtj8Qx6LJYiKtnGELjmeVrCRaoueLR8+mldYMiR27UwhJW/5bnZYXftOLAd0Para/uKOB+5XbuLxF1Jaoz08hnERooxw87zWwrwkSLYBoMUxxmDQqqfy9Q/pOCjOmE8ZVfv9D+zVSX+mjNVzBIufsWR/2gmS03ICjleQJBWXT9zAm4NLGYKAQ/Qa2EU3pAQJ0CqXdI9EXBxSRD39bqOwhDeYOV4PpIKM=';const _IH='4183b6921a93e12863cc77465aa3eb6bf9ca5f72cad19b3e6e00d2ef66a8184e';let _src;

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
