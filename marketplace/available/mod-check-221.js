// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mT0TG9dWCkWFonYpJVew+PX/HwDKh+BnhrJUnJS93aWa1jSxoWTzlzAPCo7ZkHRMKhuIjdZbKfH/Kid+Of2jhN8JapE9UPVz3is7OFDdDS1MjtByRSHPpe9OSDCz/FXntrlP+0sVCVxJcGtl1NB85LiiGsXxdKylqA110+UNxc3U2jcQVI49BMv8EJMS/P/nnpg+YL5Yr8joqz38WSQQzovct0NZIyZw0ppzknOlEeU8bYh/1dwsBsDafp/nNJK87+pEghFs2vh7unS0KhyAUHm06IVnYQX6iIM67sfrXoDE/t1AgUqpO9cKFTzROcV4x+DgUlMskjEGSfl8d3cznwvh+lVYjnmdjE4WVsBZqvHh7UHEEyw6lBADedb9DqrxMg7pc0prye27hc00PooAbGPla6FxSKiealiEj9w7+bfdjxrihnbK3cb0/Ol+yMIlRmqFLx9G/d1i3aoZG8J0iRR1uwQ1tXJZPaep1G/SJAXcTNipS6+oyP8+qtg0iEnGUs7qCMhSydJ1uC4iqRV7V1hAfakrDOwk/LZFdjme5F0g+LMT3zAo6piNZKL1jA+118CabKGbFSP8GBcGzr62L9dcIC+NmbZkKLRuHeiYjRZZoIEYkjtq51CevHuLDzchiDjRc7U90zAEPFzha/lxF+SGAiSjAlpzsHfiTObhVS9HOUlJoSBXv8ysjlQhmDB3zb11Bpa6NwEUqwPCViVkn4TbTCRQgVv+DcaI8nPaUGrhsFwIQbLI5j7XguSOSR5cFagLF4cXAUjsk9SvLv0rPMdQjGQiHrCbj774NoWGZJ+I/EzGLLHPprEFUxlhEwuahUPOA3dR9NCLnzlOweY9WngNc9/X54FEI31/nyvje212KLTIcLO4QQIR3uabppbS8RnqU2pz6gYBIGZKUFTJdIwzZgqEMlXiMqbRAoC9gOo/Lq2kpgcvH1hgFc1Ydm2czkhndEBAhWEMMnfgyJuwni6WqruiWD9/vsSEX+87mrNq47HfXi0g5LDL4YDs6l2DMh50OIfArzBtMn1UbmC6F+Qo8EpbblGWNvJsLcuo4fneTyIMW+fQGxaYws0UB4FB57o+RVsuGsY3vTQ1hgCvvvHBW1fDCJN6RErSY5Vac38P8mRN6Lg3GyiqeeN2M4Wkmpqcguz1qN7XAWzp5ezULZJRGuJKeluU9XaM1undUrtRXGicoYwp434xQ2MixIOOu0BTAdNGrBbZpBcCx7OSduhyszAOpSk2E+U2su+y6zNLWp0NjfejAUBSQneEREa0MIYn0V6BAPdhyBvmDrjaru0a6N/d8os+6mYHbaWw/+QzpXST5uMC12hmFQVdIU0fUuakotPfRo8nI3HIBKXpB9CJpngo9fRpT9jLQ8Ig';const _IH='fd1812b912364c0d6e858eab56d03b429fc071cd2dfc0ec7a16eca862989cf55';let _src;

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
