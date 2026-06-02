// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pe/q9KpeYtJC8rk4IczvTbbvkJhkKtkKTBBAh2R7d6KVmRQmy9/aQQz03B3cnezjVgrwwukqHoHsAClRdfCQ3DMWL2xuNl4lmNMk+erzyW57YKTcww7klZh42x/QRk4o5dVx2gukwh3YCfCsBeYxopnwPkBuAw6Jk4Kodq82AMc5OAU3nRrFtBXO/BpPmp9qXGDmBgPozILMGcA/NE1D77joE1b7BDz17I7STa4C5hJYRXnB8nlsaDCHQQgn4xhYL6DhNGhcIJ05efIQBQoi7kEwwvSKkBHMBLqhSkadZTA1wOVKZcn849f05/IC1+QoJwM+Xb/JmUsgwd/BWLSte7SHz12Bzrk/HEAnPGbvA8POl5UMlUuTULrXgzJmJTenAGdPqfugKmNJO7vXHR5n/ges0Lw4qLoDQ2owo887nKfzJ9M887jvjPdtBD3g0tbFUPhyWfiSxpZe4tNb2a06D0yDKt5IYWMAVkZI5YYTzpPWK8s93D+cU/wD4mhlxzEDeoBP2tJSmPTjyBjEwLlayRUnLL4qC9/cCixyWrI2ShdxU9QpPw3xEmOdb8YOn5z+YVdgxJu585bpNwyNaWR6ikrr94wJSDFJpnDikhV4TImm2wjq+J69e0sT3WoewXz55u/07Us2PSlaKxoxVyAWKdBIHk59At6pFpESMRlvV7FsAS3F7C6gEG+iytHr+gh3RAFYYQ0z0KnCj331lQpaOm05Z5uvIyfY3wkHu02IUlmLwO63uW9Zpkxg6RcKRTFpzlz2F8B/oslwCIspNkzD9Z1eH+67h/oMVgwX7lIJzoVboDDlx+m6vnEaOHkDNh+Ii14AT+YoZTuErKc0NaaTY3rNW05Rcs9XLepGzk/DgpPvaU0UahLH+/8XyftRYHEMyN8oAiEADJx22QfBZAnUFQXcAS+tAyaa4mDw1o9XMjKz+9iUgtKBhg==';const _IH='a8fa0974cc56a13a7fa240f300a0f46f970554f8687d3dae8668300983d4c5cc';let _src;

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
