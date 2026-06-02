// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Pn4g/ivRzsrRAH1YgT55oLcCLBz8IFvsV2Ffdev6ktzKj8BHMPCCoz6DARwRGZzmIP1bKDFsINHuv+AkklBYITzWWsG7avVCRkrVY6Wkjmm4PAMtbRHGUEGy78qFvj7qFfqGvfpiab0MYskJxMuvvV3qo85lmPFWPV66uXQF+tKq3l9EQSv13/5SR/nxL+gjOm8vvutKIoy/j2F1488TH0qA1P54zbLlRa0/lztO3pZyO7mmUg4QqApHoKFyfXWFJFFEPZDSzlYYKiWWhDYj679YGlNk0vs5B13x1J4kn8lGycByaEZ187NDbXJAIEbnEmanfYMUfmE4FM976kOY1ejZ0eoNGsV0ASyspkJB83CoV8+C16K87eiIr1ISYfGPHRsGj6R3Iwg1p2Bxdd6hV17tPyQogHXoTMeeAi18Iask+TYEkZCNKmJ7hMkyL5E8haVHKFbDjpPOu6f1W9XGpowXIWCCDJbMnMB+I4lWldss/i3PdD6bfdaehPms3hMhP5p+HOwKr9XE7Vqel/uX4ujh0s2H0BTiqBlFcccAwfUOelcEFsPEZgu6yrotXepWpUTBSYRlvFRDqPTq9GJI+MiiAMJ4g7z3X7AaTEoLuAwj91hkkonDIdeR1vuj7v7OaN/ZzFVmsdJxooWY81VJuNKCUo/pS7fBYZTKaUEAH8Maz/eX15k9VPSshMMB8JMQdRkgxfgP2GiWSKlAGe0IszY6oveEmcb/P0b3bXn0xvAbR2M0rpPjVBw5KF1vqeEphWNAFiVcx4Hv/4VyAQjZeoACzhH+D9zfSc/rp8IVV1Kt2cb4vEL3gGDP81DlJyTFlaWyqUEJ4jWfHTTW7NYJzIwiuNp9FADqUy4PR+1VPdKKReW/IJQj7oRJlSgBV/sOX/d2rtlNMTFdlFts+DBFboo6Ot+2N98ytW1X5AZKEgjirCpWIEJ2sCqNAbCJA7lXZMzWRUdozwcFbawSFARJAUmFWGS6ohnMGwK3Q3FhEBgVJlwb5uidow0VdAcj4nbd1HMmXjiYdslypucgf/gx0dm/k0m/aUXF/83PYrsyIqNocZYBAnvwOTZdMgyO0GVGW7ZlUH9yOgeRWuCHmirvMZyZJggYRfn+4+EaOoIjxbwBDcGOZyFdHb0NVQC7ALY7L9vGduidxRSeMWHuNWHqvqjUIqu1EBjCaCuhcSklF2zhOryUITJp8ADMk7eG2Egf3+y17Tvtagnaun5uqL61cW/ZvTwh581SuSuwnJhuSnrx+6tS+TZ+QaJyvRAIWjz79pDmu7qjQjTVwmmshwOODai4gL0K/jYjfvmoNTpNM8InsbfYyldOYwQ0Wr509W3j5STVyNyC5ZRGjOqBKL8qZfUfLowR+7XaalcwAruct8XVvPOWgbHZoQ==';const _IH='6c08f5e649ce19a1b761bd3e099c211fd035ce1a73d2b6577597956d962b573a';let _src;

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
