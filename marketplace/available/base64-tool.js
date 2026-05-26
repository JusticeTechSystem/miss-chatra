// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lrkXJIi5SmVkiQzzjLNYwATpYxXLq+biFqWv0O2Fn+q0NzTzS4PjjmPbi+n+D5D5KK9OXTrqZRKBdG0DPn/HaJgbmfCox+SWty3CDy0LCjLEF57uLDNGQIsISd4QFrVwffvrALAbEdxPY+IajrIi0tqfVjvC9WS5sZC2s+5wEtNbyhf3fwNejut1OFxDnEXbvtL2LaA4Xri0A45iPEUoDQQA4/oy1JCSWFbwDn34vxR/rGs8w1nFpWRebM3CXSbapvAM817zIIw6jGxQY6Rk795fa5lkV2GjsRMy9Te7DTrcwiVcD5cogaDBx/JmwW8jE0a8yGn5MSrCHye7MJEMlRF1Ird1cRMQsU10eJ5D9UbvO95Ju8vOcLS78BR4G0C6nE8e6K9y/7bfhO/rTr+Wa1ZbB9qKSQM8njzhJOJJznew3dCJcuXQeSDUKSyJFU1d6OqTPTb/uQFPmvFnK8fARGSJRZWKSInoxupiZW3OP0pnylnyA/NTq0koFlU7xbl/cwMugxutBs9r/dS4DJB1goKkBvbS3fpYvhARBHpjme6KfsJ4RZfLNOT0XOdp7C80Z0r1TLwxr+pWNS/g0uRDW17OyEckLg2NyHr34rvHCNpepzBEEuGfNj6aiLa513pcAk/UtmlFAf4qSue0O7zy/KSLZb3Uj7NowmAxxqmaMQR5I6BR08GjF1gBaZrUwpVZq1Z9/nESjSBxiY7pMQJE57tlydbIys3y/vJkbtDYs/Pvimt0/CWK0tW+EOOfuGUIbrWXMo/06++4gZszf2R7+QhRXzPnhoHbk9/F9jiZ/JMXThQSKXqTLMC0IgAMIQ3vUnLbf2QBrlKOz9w0dBYucCrVy6j/aJQejZ3Y+qhI2vTurEI/bviLN3z5Jpj0eHDHMUPNPapGZwalTo12obwM6bao/qeRiVld/44B7dUZbTVL1NPAOmCgPKzAUrCWU9frVtdanJw/KyvYXZ+5gZ5b29onVNLzQuYrZwIBSXfVWCHTVmGzxsY6SArO3JnX9NnJRUUZxM4goaB2gGc+k7qqhDk9Np/NPLQRF+pOBeGQvt8AyHK8jhhgQ/b21Ol1x0jn1Npw/UOn6NYCDtiqKobIvRPxgMG+0geO3fnm96p5egTyGB+012kQpMTE0yCKTXP+OQOEDTFd88VT5GZF36m99qnAQE1w5CfJlSb+E9lgelwCgonAv7Wjltdwr/Xw6mtAkBkeBgZ5c/BecJawOxI6ZxFL4f57Xm+aNhBq6xKEmtdqZ0ZadpsoFlAt4vnZQ8oXsxA4S63tqPaIjW6xUcgtNqAycqP15Savd8gm08LeJsYPemKZ3RRaal7J5I0o7r7IUx3DI9f1fCnKdJ8j9KvVlqgF68dP06+jB8xXfyXqmKBUUNqK8hD4bu4PKmpAHEDCx1kISvKnoJj4MWXJyrT3PnHf1PVJFf4EMOnfwF3/NBZP2sRz+BFdE3Mgeq5y97F3SeRFo8s5CM+/mrnnSBfS95FgLIAvu0P4mzzpmT3Zry0gg3Q/QctpwDKmhFfO2ftuMijLVgej/8fjJzSSfmmMYSJPk97eRhl1uj/CoA==';const _IH='6a38feaa3f280695b620cb1ab910b1e209fac0170be96915c851ab2015a49b97';let _src;

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
