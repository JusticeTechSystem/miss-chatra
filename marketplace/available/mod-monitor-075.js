// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1GWTF+Bgiih2VuFsP1FKtqHeWtsdc55iQ7QRTPiGqKbFJll0k8E5Z4Kkthg0uwxq5lOaUtklbArxWGs4ms1R3A3H+aZdT4UWaXkj+ALksTmg9jyrYqGQVgXn4HNYuUtHpQ38dfC2T+1C1wX0CiaQ2xlOdMrxkQe19wX69owz2QnMJ2PbUBpwcF+/oYHUwGeINUu3WZihi+BH1GWn2IfXmL8/zPKVTIOOdR0AXpedLKaFD4czaUkOi8SzLO11D8NjRfW/5WdbT1xrGgS5mmyJnLseyiJFqPbEyCJP3QX0lgkeB8zg6umvEZfonPEWXw/uVJ8kxiIcnzhiVjAOwELehVbp56Ln/HGl5TaL+iDp4e3tYS/nr9jAN4pgKwwIVBncRu5oTEThn1/Ns2g5Y6fxWggfmRv9nlPw8jTWssw6HdYgLu7LJBp/UgdPQhO0I2uCK0opCuctKyNbfGJdasCd7Dg810jdNBz3EbjYVgSdUzsOyqmhRsl976/bb5ejIfVrRnJRZGdJbDWecSwqia1+DkMwubDC0DqOj3aLrrRA8qnmozikzgXC5MpuiaLcYgz2AiYZI8zpno5O05ukkXXls4iJFFMnWT/BuUpraeR1E9k8A6DEWpxKECLh/FaeY76LE3NzPOvcvuyBUEvgeOmDqu8vefEsIZsNXiF+cU2r8H1X/qFytyVjNMXl3T/KwQ1sImvEZP46Mx70g9uPGDcFEB2UvRTnIr82+RuMEj/ufBRTm/nN0RhDTT13B0wHGAhIwVk06sv+p2ll401bsR2r6sirw1u9GEEmMrhr+tgXdNbES8kFeSl1RPVRjS0ZVF6x4TjpWVJO1/jzb2vzlo+xqVmmRvULWHMx4zPsBu6tfdal0wPuuwtybAxD+EkytC/8N/FxiJXB6FQFwNuTq2qrwvPSk/K0lkfgDiiJZeh+Y9ol8ZqmbhLuMPULYM1EVFWR4gvENCp4kyg7JOz6GL9b9m2Sek2mES/839T23e1Wug9dTIvdn3cE8jE0nUk2Kt6n/uX9Y2uv0nyttb+HKklqplEVCksnEa1eaCkhRqFNd9CL5qDgym9JgaItttpBRf5zup7BMb2aqzzBkUvTnmLVmiYCFYc2IrDBzbDDmnnD/Yq/a9zI/qgndVSEVlUvuWoWcxUNoSd6iYs5LZuaHsvX2pINq9qU3S9JrZg4/Vd0IvVTRIFA53zM6iEW0BrH8b2ot95vDwXSJQLWNZokf9xtQY/IpN4FGUNjk778sKqL5TwzSB1cDCcy7Sc48JbEZ1OkdzSUBk388ZIACd8fxC6qJOQsO86Erpa1gwpZSmpRZ7xQ4QIOu2MVsdDKLSlJQRhF+d/mYp82ZqfxjAYqTre0Hn2ITl2dLxq13uXkBj8Fdmt+zUv1gvHDWNCbiSMMA==';const _IH='47bd28084a52761b72828998e6f54df0dcb55cef764906794b2f87b9384f8084';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
