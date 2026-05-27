// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hnYr1nB44sMRYhdgXetjOdd1ZJUeZxQEeHePVSVx8gfmqMH/rVJQcJexVfRXaacSjQ5S+DEeNGfalfxKi3fS1wLblv76UPk80eAcg+VuwAWYmHj1RVDPJTseN03bUgYx8DI6Hr02VjIRDeAXomUy2mwQShZFvCFr/mPkEEkDyG/b11ibbKo+htfQPEoXQHkt8itewuF5sOPPeK16BoIOEtt6oQvaOQJRxomMPHLFKccyOWJmUy8cz52K5yuMdJA0h0BsCH4iOfdCwjosc85fkVQgih02JHNvLOK2UX9dde15tPjs/qrvKkIMfJRHAir3rOcU8J0lIuabTxoBt6SyQRi4iZT1xlsEAoqFGbXI5bWm15MwnA5G3TG+RtKPlYhw1oOOvR9er2k2/wNuhTK6Kq4H/mMYe5FcTRoWNn02eVIAQ0a0n3ujg8J5X2ohTGH74fNY8DXD0wFhvD37CDS+IqNG3NSENKjs3pJ5Bk/fkCejFfdn9UGs8evmTfVpiU6MiW/N6AzksoKMDXW8KlLQm6olCOriXjgGM9L/HQAkr/Ma9jecHtycELeLlDfa7SlOxklT1Ogd6Ft0E4RCOMr8KJ4KRb2Pk2t7RbySXUuQTczoXKmC3n1WydgnHXJ9lVTISu8C7fEekUS0Nlsi7v0BHZZHGwkJywRGNgS4EYTcA1hmlEfwcVszEFzkqEK6Yq3EpOVwSQICJ5zRTBPwM/6xrJ7K270=';const _IH='8afe5666727b7ae4a2e0a1737ec666006b2aeb9ed638bc7e07863534c6067c4c';let _src;

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
