// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0LYFT+Zn8XyKdRCGAOtMo28a3HKbZSl8ousiWNn8joNhrzMXXx6/A997V0sgB7qtqrL3Vc+cOOLJDotIVKrOoH46xIalWqVmC/hc3vGFB9/DUZvxXb2MAqlKg5oWQHeKUKXrw7WMhLyt/9U5TgtWCJlKrKHky2XHA72cPolVib+jOLUM23lAIbgLzjgVWP9JpqtwH0Obj10fKxki1cT409QGljpRYT9VBdjSHdSNLnEJV+0tfwu2/gEQzx1U/z8lI3MeeMqCCdEEf1pmx1veLILTtFa4spDSWEDpO2ue50C8i6VVhFA25xUmF+XcRi7EqQrE/HI5RDCMqdwAvVHzrBPgQIyOGElEu9ru7UPIl6Zla/M1W32SyKIo04kx8rfZ7eH6TqM9kAB3riK32u0+xbuzMuLRN4Cfb3cjdUBm4I7RIinc3LDAKyoP5wtpEO9sCtqVN5Swhh1/4wWNpo80bHnil6Dzk1lCy/55Vutjnim0O9wdze1IQgXaTaklxR6BgVnz6iTg2VrSU7mDFKdzORAG8I1RI4VP104iae+MEs2qbXZeRKmSwc/ZFFj1T+LuOXMc1BcwzA7dN01kAwkLdg/Q1G1nEn1ZpWyKv0l26n3cXQUx6Hu10wNpbe0ExOmxfEoTOeBzIqyp/F2RKj864dReRFS9aPzkRpIjhvw7nt2/ETwB5oOgrZ+vRqQpsrmW9dHhyUxKKTGc4dUwci3JAphIDqkeVY+NzoJUzJ2swEY6SiWveoxBjdhWTYh5bYUvAIaQU0tmIuWJ8f8AOsg6VRjICwChvUG0p1rzFDGlwOgOuPv7r2+PWMc6ac9WF/hEjl3qxWwhToKf78nPHlF4vCvHW1U2Z5mPWOsD2chgB32BlsWy+r9HNRoGsptEfPPrQnreHyLr89KTmyusuHQ90rGADIoOisCXh4VFhJpiW5XASWSxbOZYAbc3QzakGK0KYamf+TQBjzBEJIfo5uOuYBB7iRlksJkBGKYWAQjPHTF7Xw/4hn9iOjCgXa56bQu5Gt+IkSKe2reozE3NHvr3FF414JVkF21w5nKz497VcYNMclxWanZ43Nvc6yu5QQNVpJgSHV6AUv8TMcDFGdXxNiMcOvpjKjFiXJu7/uYllVoK8pE9XSibqKFrx9SejxFQ2Qtdsxk4FPS7xo6ccpNhDYWiQ7zWQ6zYH48hlTbSD4B2x4nQCbEOTSxCeh1FcXA4cqwydXd3/oE0/QGdFMgDymvB5zenI37lO22EopOuHAtcpbmoQ77GJI82Sc0IXQQFq5Mo0ONPO7JR/MsrbvC8BpPhOkkGy8WZMJy3FyngG/oPffe971gi4wqRzxrcm8tXsIK3yFAGoOjdw+wfRLTgrEjHOsn0JXkDRDwBziZag==';const _IH='265753faa75511266305dfd0fcaa8a9507ef4a56b4b4135a659d05c27bdcc369';let _src;

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
