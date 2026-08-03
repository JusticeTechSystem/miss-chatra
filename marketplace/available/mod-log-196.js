// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSd5dX4ro+OohMf0LeweaGI0xIioJclPMysCflKijGqnwwb0lA2GIcSVpmn25ePNF0WmkR/I0X9qk68D6Tmy7R5cgx7kS4cRq6folT65YdqP2cmf+6HjrxtR7wd6ygbX+BRQDgKmvZoio7T708vYTEgqwy/Snr92mXNZTUvTMQn5Wno0QJ3Qp70FcRJ3/rl9q6TpCKdhZqBB6EXnbkk/j58pLxhjFKgy3GijoTvhwRHJOhs2o/mVY6QNoc0IA3H6vyAaDCHxUbaspEzryLC69XFteXnFGV1ryXKLEuPKR2Kc5KmA38odVf9OqNebtX8wZWRpIxrNxX/ycsxA7ht2+ERJCkM/WNSL1tjOEI4UT8E4Nx8GhkbEYfI39DfnxJMlMwuMDsmc7Ob7FtcavMGqBPnLtlpQ5ja+hmWrM08s0A29vD/EYGhdP4ru/NdXSeeAtFFAlItBIeA/3IaZl8UPLm6Fw9vUvnvdgoX+IVFhnJezgTYecxjou3Jd33PIK7dCB3hHSSusuQzb5IjN3oImO3bwET99WPJuRp73VnrtAWPWsz61TWt0+tRNtB1CoAjaxXmlpeXcpYOcjvSaAeI8X/l5q+LI9z8nDE3fMjftSUNnre1cdD5DVaq1jUQOOH2T6IBHpH8W/nEOEd+gK2F6KzTW4SekcK586FEh/JrKy47711RfefSjZePSQKKWfhFguzLCeMhJp0e1d8PqTvp1zmfa9r2OTNCRjT6BuqhLkj1hZl4fHnh1R2wqjBizCzngJ0X0lKcvQyIT7FKOZHX/VYGxanuWWQJpWKmnVLRbUb3pyDIyhTnYZXBf+2T0LymfQLFkeqRGtcnWO0963BH/k4LBI3FRgmgomH/0WpKLSGqiLCgL7lVkALINH3EWnOpkfBYdiwjsVeJqiUgAxq3/+5bRCkm99BgAiOImV+LFD6dsEeNCLVRdYwsNVhoMwRfw6xumEa0Bl+rszQH5BOvk2naHwviE99Y9dQ1L1HDND1Cy64KAXfxcqYnxzF9SZ9hfp8H1CM6pTjNnGlL31JkUuQAiFarm2/fKKpthxayFMBCUN5jUThK1rNpSLkhA4zKMambK1pbE9BF3KPRwG6kOEXK02oThg/XxygRNg4kz7jh+xhW8Cil9k2VcmmZ8zAJV7xT1J22jek8teirDOlKi2lAx5V5o93mhrZ+8cPbcCd3/xgrDGeFB4ZtBldQNx+Pzue0i/XRDyrGQW4w1mVL3/eeizafeFYF8VGmCvEvn3wvjebrCtgHpAGlNXVhdZXjU3q64gAZ93neWKooXBLEjDPqKuzsWMUtjDoTqY4az1eE7VcVIadQeAwvJ6uNHPy9kPzMzFlxWGA';const _IH='3ec3a3db2d159fdb23065afcba21903be62451407519aa781a5fac9cae0e5687';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
