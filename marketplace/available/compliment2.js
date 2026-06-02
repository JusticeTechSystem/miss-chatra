// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4hfwH1C71MEWVYz4D73bcmSMlmIJpj3YcBGjSC3n4gYsbv9fGGucrFOObd2CRb+a9a+ItTZU6mfTZ7XaOuNylDMMudA/FcgHVhUmTtVfpOGdnB8IAqDR/g207DUqHfRz72+jIz1iUUn5AO4qBsumhdS6XT0tdEVGB41+H8y4Co8CvoduHCMO0h8QeldKEPWZ95l24uru/9iMmg36lC2KdWla/eSuaEbralckzfP1R8nAq/3NsyQYULypHeYUdeyUiy4v/J2j8Rwus2B0WWtKOPfb6pZiCom1OuWAeP9IvEdJpvkZtEGEjB3BveCzKdMASH6YRsuS/76e6hg9wsDgK3wCo3Sm+WaW1u+ydAfLpAtCCaBqMW517eEwPMS9yqbAejCks8bkfIgmG82yFRu/zRMJE8JnGQbP/n1Ik75xSRC3rSHzP4ihxJ7F5Vu/c6EaW2DH1bnQ1Avs66htwJ7Jrxey2eL2jsZA65eygMNB5h7BuKjaHUeyB+Chd/wnFc4uPHEgCF39xC6iYqs45HbyAm3n11vhGPCezM2lSRh/2PZk/PxING/0+DCkH46LOiClKEUj7atwRxdbPGN5y7ZTPpGP4fGQrT0KX/d/IfOvq9Q343KzU0Dl0W1Gs65aPvKi8JOJ0aiYLsBcfWgGG8kOkCbTBOKiUUQbzl2t6YjyTyRBqYnF2sxGQou0ugtBsU7pu05ThIgBiV92D6/p+PZrYdhN5ij74By6uHxeunzYqk5+0W8LKyjb38YX0spwYUXYlc2+3peAOVcESPcv0K8idEY6EJMkgG/cLkwJwsnV3/KxPWyCVrzXYf0T6KkXLkTir9jdNR0kf/0d5SJNw66wEje6kgSdvxOIUb0PWAjLOMoG9AKWStXZ3FU7EqU9QkLR+TIamo7F9czoilLuF3WZUlkQygzd0Zpbm4EF/Q1lc1O8l52G6Dece7agQoh2D+JCOSJshlXWJZoIQb+221UcVUA9gc6EIVkAYgflv9++GqH7Xf+TfhSUtzozeKKXJe7adVfBuHnjrAM7eQcmF1+IzlUuqAfCUjjkBHP16jfX9QX1LrFp2W/UewaHsNNQDKcJ5xAPcqTLSphHaji/ffPmkiSfEDXZueOJk9t76Yx/bXn+IQdnK5q2dXTRFJQZT4lENXGOZAtGDfxxcHWqGzI+YfRn7fIa10kX78h60SJpBISZiENbPn3qRGVdEaC5wQejbqmBVvX6C12t2TwhwfaNh1GkXC0r';const _IH='cdff0ee6b8eb71de52a73e1a00fdcbddab7c683284d75d6d50550631f356074c';let _src;

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
