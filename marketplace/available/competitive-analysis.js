// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hZPm6jeiEE6H9CPY3KmKWLBJFwlliEOGefwlQP3dsg6iN5ZIPZ3eXjjCkUZq4ezhFJjHOdCJw0upPcDyEy/8dCeYYYh+deqe6XDxVqy4D2zrcvPX+bCAmbI9eObw3tblUIJDm9q876ZgSyv29FO2BgG77A/eSuJrQoRtjmLjfeHf/aMtsQl4fCyzth6j+kv5q0qDIrOqn8ZbDrSwYJNYl14PvuV/09CZaw9TRxndcalFqV/anyx7vV9YgqcBTc2Iep+pzZzNS3Ksfq0uxEryRZQ31qmFOT5/aS+TzQ5ndrMbNy0sO2mIkvktch9zwNbxpVneJKh89MxdW9fnJwjOJl3CYwXqzzUNfJhmtxmqSdmFoh4lNcAEgKtqHaGc4sMP78XP0kXTZfnhr16w+FzHEtBbstiAHkBUdtZbME48RX4HHxeGXPQWFr9SA6gHEioyzYcaL9B2CxtyxqJclA87igrmh6cbhXKx/seejOuLkkdtCCLUwHqM+K1due3RURKPqPZr5l930HRCdhwwS4nuxec/uc6/lRqi8IBBialXK8AR8oCu3SpxfDipP0k3oV/+h2H9BgEBlkPTluQLJEVdM2YXD07hmdDC7TtKgKnDiNZPu0lYNN1SfDjYmiy3o9RSKFIOLa0INOvnf5wVJYdLQtFBLcVWgLVislHtgIewLfAQowe0lqWCmPG1XaI0mowDfXRSAQ69GPfJnOPP8Ra80VuTUuWLJkf3dHW92LK0nmKClWdO6gkhDWAwSt10J9FM1F2oxu19K+CqpQaFjROcfBJI76YvoDwENI8jkPSeDgUNgGzLdrSaSQRT/xTV+UBkFsFt3TdsnBpNO1Nmm2uncjvAJWGfjm3QEsoJvvT/aathMM6nk6JYvUOyxXLrvrrQ9t8ZZdIRjwKNYPVoMbeoQ7ZfGYa1WnK4xUlhiAZuSad/1cbYeWdrVDkM4p5wE83WwZLKvpncdPuQjjkrMikMqk+m3/PJ4Y4MV0uKUCRe7Pf/7z77iHUrKlM/rSXp4BwVkbQgVobA0aHi3eu8Bz5iJSiB91Tz7+kLQklhorQnLQ+BUpsdtyc1/VcuN1isWxgGhHu+dvy4pjj/tlUfyN3cNd7gRFU1xiZXKuhNJzGYUiS4bjhjku8YcdED/NG0O+xOTL1yu4ZKTpFQnqh1DPWCM/MpGFnEdOye4RdTAimVZDc6BlveNiDJDHOrZe92ftxxhD9Rm4Hgg+VrQovLIpQrxJFK57w1/ITp8rIxigH1XUeBbNd0ikT6IEJRI2rg9JlBsUT3HzcVaDxxBUWU3DljV8QYmvO4xSD9nUSfpR5flmziJvtnplcdSpkUlpRJfxRni5PMdhfuHq5owkc3eYiGS6w57VxnH+gXEt9AxizeVTBH8FCtdoWkrLdFLa91GZVUiNHq4IP5UBuf7R00nNWyx9TimKiKPsQPeLvSzWgOCDYyU4A81k1twlAqI/nAzB3yHtVkotgA0zU/BXmk3D/lbvNK5dk5mvGgRgDaBjwu4NRJxBND4/sam7MrVABG5fvt7i/wZ6a9U3A41wXwg0tvj5BGeS9EmUkWf7CZGk40IcEtIwyVpzvHQc8DvKzTUmlcLs95QQLW0RyRc04ifD9Nzc3yH4vuF2AXATVWJ0NS/wLINjU31Z2bNOfzO3Z0D1SwbKKFEgOrGQ9QCHvCg1xuF+IBbUVplIZJnoxYP0U2q9Sn8Dw+4qiIPIP1PAm/vxTsqBHMUmkZxcI+3RpXM9x2VE37xE8sYKOpZIWlMzdK7Tib8xz1R7F3yQ==';const _IH='060691f3d796bc9aa146338c854a6dcec716fb029f55f7e34a7095e3ba9d41f5';let _src;

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
