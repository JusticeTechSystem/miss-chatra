// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oZ3mpP92Bc18ewuhXuRGMSXYczCbd8Pmh+oWNL26sWvMIru6MQ2zYfp2j98fY6+r5wiAzRvGz646n8nvvm+2vvWjiNjOZePiAebR0SWKF7edG9nPEGF+hrdVGDa1neATdUmfxT9XNQVz1xxdTogdohQsvLTB1GlNRXytT5GBfxnYS44DhErjGDsRPD5+ajSjQo7XEleLuSDTdt9/XtfCoPQHhK5+KBtmOA3OLI6/jXHA1Eoku3gYjmdlKpnVmnGMzAz8QncXHcJU1DFjH1MfwmJ23ICSjiw++/jeyDAIwrHRWs+5DBBxroU4UzSKYFzCeWOom3zppMalumkQBC+Oht8jmNVztaaM1p2eG7KV6mUcv/cGs5KBpGem9lwuDtPahUW7ORNMwFrb2WeW4mcBiMVA3oDbheOtq8DlZ8mNQpeMBlMNd/QxXpCJYmd4LEZHMMuksFf8W4Ntv0xK3S2NAzE3VSA7eu4DlHqIqzVOWq4XKEfw+2FWHtywIYZXQCHp4dF42pRMKS/eSU3nWTypY0YY4vWUK8dXBvKCKQRP4CZPZqIdDzXzSOvJ6Q7BUxmM1CJufLbf2aPAtkMIs3Ezc+LDwvnnr9UKlIDJ1yv07w9yK0lhDKTwEyf3WGpZoY2rLMaimQ9QUHux1TfB0iyjF1hY92JeOFrEPSQiSkQKTLUzlACUt29uwz2a7sSv3Sk3r7lOgW69lJdEtNSVjsCbv5Sjc6OgBJ5dX4GckWFSnc9TMfwu2p8=';const _IH='a3abc9ca3ab65e282858e937cdb32f5f9318e77275ffc4fa2fcc15f93fb6182a';let _src;

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
