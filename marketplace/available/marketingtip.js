// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i/T2QUxa3VvqFDA2hLL6P896EmOY7fEWLTAV7+5YpG5rx1Xxgj7tksbBbL+vZqEQEq6CXaxY3Mf2FIX50xdGFgwxnHPuKd2+PxewEWcqGBwhGHHsOb+z7v8E2z5B74sR9fWobOD8oFWwtllyHRjwoqM9lhr2kueay668MSOsMJe2Nu6w1vfjEU5jhitKzBcBv0xCYMpz4fCpwqayrsHxwcwBrrGqtT2/kkiw393dMKyk08Ykh77FqQeE5a3WHQS6O2b8rFyGyAUe72/r0jTvqGEnHnPQ4jFaw8axU8EpUKAs6to7OE/lL+470LVX78OLpc5lv2B6GG9NRRPgbLBLn4aNA6VL2CHw7zA8usd+E7nnvyWh8LfaDXcWxJ8t1zdTmtsTtwOZMC2grcxLBf1GxoqmckmwZB9hz9kpwWbVM+l9/hFuCS+TaZqAIW1NTzX3wMRm/Y76rHUw/+icjKVbfikZ+p9pkTdgsOMtAHvyguB+IPTdGoUlspCxxEQk2T1IlHZB/KHCPpkJtcrhTjnLvXzCK7lAG7zYlD8ycWwgCpLHnp1RX86jdrOhFluQuPWJ6tuXJsIlOtKrDBGV8faSYVWb6HJEbZ28cseGX7ax6b3UATzhBcYv+rUFvXf70pSGBb/476uqQII/cVMfV+/TPdl5LzNEb7aJ4gw1Vh5Gsu6xzMkPinOkaHbOJztzSDkppT7yPou9evDpk+ZxR9gdQ2+PAGUV3f/2gfoYQN305vX1u2AkIjlqWqU2WJXvM6r5qI7n0craPAIIBPKZ1rSxuOxgvT+xIhdoQEUn50VdWF/lNdVl9oTJ7FaU1tTEFKYS3VynUO0qjYQxIEUyENzDubdSmT4bXngcukvc/pcMMGu8vvnkYzogVFFCY2RpYXz1m7UyImsFl2K4iaiRgqnQVo3oAxi2hgkrrd2eKpZQbCBl4C3IjKE7K11sddCJIR+HxYCTKP5weSlKZDGdFdV+ywHpvTcYLS9ndvmD6MVpQnA8iDOHR6hWykgFPqeaBZNaVPJGsFp6rmzZDi56RGuR/YMDF1ZpEvfpPKYcHWe+0LfaiTEpFeevkH28xd8p6hF3RL6BGYud+N1seEobW8aY5S3TAE6UAFCEYBm2C6l/RqvxulbIJwraJvA2I9ZgkmuAZBy76KJ0KOKCmdAEcpgZi40EBe2vjA8UyXLdaTz9+5W4X2USytkj9hKxIdP7x4N3XyEBmRk/WUMJlKVyJYaN';const _IH='00c205b4e71c13b5cdd043581cf5c8916d4c3e65b371b4103f8d7296fd27618c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
