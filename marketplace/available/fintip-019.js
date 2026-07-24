// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7lfVJOO2qH+inGPBpplf/qGtf1aLI5S4kbKPescZ8UCIFUAZQRLVLWbHQZ6o5SsrFydmgG2DdZj6Mc/rdkTHdtde0d6JFIOT+0XZlFgini1oMjii5l4OMA9wSI5gm8eCuJ+hvG+07MdMk5eaLkQa596khNDPJfKXffEIw15OT21zP7R6scfBFFVCrOcZW3bHsvazj8RZ/+QnGYpn+POkmGvbU/6ZdUsol4zVYEPO55AWZ7fRHB9s+xUosQGPhDJlpdeRE91+gk+AO5ZL2kXe/bRBJ3FSNVRsOBy626VXHfz7ELgbQ6nt1z0cKC9gk+vWCTAKgOEajpEAq9pw8dbTFQmpYLe2tUUsHacPbpvjuH3aTWHlcYEjldLm6TCXQNrFrdG7ND3ysruepfbFm0W+miVezbDdZBb26inAhzlxR62OsZKF24MSOI6nL+uPs+5g5AmvzeWPKsXFBEfcR9mOJ/SQHlOSOCh3DA8881hTIWdFDPQpAVU4dUDLV45jY4OgM0FNAjLp3bdRBcMNqU/1/J8QTu9zzTur6OdJAXERnAcQI/h3UJg6g/tUCwrbPiKd75HWEJ/1B8DJlkWlenODLFUjRGUwymWLqgzOGyiORZHEGsIhMGp94h9sm7ZoB96Xwo/rw+LM0gLtfbg2lxGv5xaJrAidhSCTcFI/M6IFl39tcFaT+PToW1hShax2EKqjtOhuEYHqDQ23cFpJXxVtxPbFgfbI+LQDjJBpjiw4uHGrbFdCHf1WSr3wCAOTMlQKoqPRRi0z796RW6tVHA7hJ+ILyNZTwy/DYCBYZvXp8Us8SqGjAFZygxo2/WqJKp+JYZZCz1Jex/rMRdRoedl523Et1LMhcKbd9DuAhebFLPWPeb1jTvO3STn9zpXFrBFV2whc5/oYLQ43Mm78ztv/QVYiG6l066zd5w8GtPB/HEoxDF4PiWD/rbS6JkeQ9SMdh3bQ55iMlo7yUzB3EUf8p3CIXKqcC8OCW4zODZmSSDr0Z3DnjvKWuBhPDN+k7+hwoN1S+9oVjnaQkJ8BgF28fxRS1vCrCVDMhzXKOgdV/j4XV';const _IH='d6b0ed1080ddf38351c889ae8e87a055ea2b92717d993c444a6e2884410b853b';let _src;

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
