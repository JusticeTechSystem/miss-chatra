// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GToYSc2qGSSsvjuiOSKyfKYgHLJalPr/I6XvE7SYbuS6RatFvlCAIj0Llmrq4obMLTotX8mbjXAD9nkxJDUu5713Ylnt5J41QA3HEtJzwOfbsVqSYlnDKFAH0bK0IRmp+2/sVZ/o6EpCicp5T48KmjSqqoatFErPnWu9uhdC5z9d5iD0pkrZA8iiCfuc+TwC1mG2KDuEeCIAIbXNAzi2cte7XnLUGx1LyBrZsJjs6rHYlwM6c8XtVJJaYqW0opuc+cwtBZD8UXyG2X0F4wPycxi40kyydt5NIsdKMl0cDqd+0hjWqM2SPAW60zWMWVB2ZjfNsndbp5hHxYVAAMsAE7CydQ9NzQhnOUkUfSXKWZntAeF804NiT8kfbC+LUVjN86yjPCaUHnwbouuN2MK9eYVC/W7bQ4HDuxgpdSxdLzfzc480174gZJcVgdPCTREr728MSEivngIXVymmItVn1YZTmHwhmr0OQxJo4GaExGffbztxBinbp2W8iBGnotdcfYy/Ag5i+mdWZJ8q5wV/fPrVNg3MfPEslk8dPoN+nSBSamHSWBIrU6jMgC9n+pTFrotkjczFT0d4rRQB/JdmZNaA+RJiHjEzCY15QrcMzTM2KOqbnvR0y090JINUamPykcUHNvdof/y2wPU3VJ6eXwAd1WfGtD/jmffeOI9nCAuS7lOhZzUxN6LByKSRocpL2q5RLGfS/XJaJkn5bVDVMLhNNldhrdH3l6NS3HZI39PeBQeqCj7Gbu9viCSaOWECOESnnLwIGe3DxfDveU0Zaf3laB9KgqpHvOj+aMq6F4z0CdYnzlQgfI9mz5bX3WTvzWUSiMJhs/MMd3YlRa3N7uj8N31Tc20QWGnShhACPS0ACxhnxJWHmeuuv7ymRkMdhhdckDELk9Tkq0REACSbAh7E7mJhXlWGbx6hb9Nd0utguH5Rn1F1QcnuE7cRBCFH5un/vdSFPuTU6JT4qhbnDyAcUqah5lTufqMTKSg4w2+IyGRnH4DbsptQ/ZuJvBC/1eI67q3JG4w+bmLwbcmTQckYFZbpWkcWxBn5f6Wk24ZFaoPNU/wTnqjRtHzaM5Oi1yMtKGWWlkraxghHMcnflfMaQkeE43o75Jcp3naIPeA28MYOWJaBZUARwW9h+kQjxIqgPUjlvNoCBLOsWoS7GAImg4ivnZ1ZdVWGi3skAf7xEbd5Owej77VvsouQzimY1pGNE1wHuJyRsUyPJMkV9sX0Rnt7RRT4VksNsnBOqUo7EhewXe5PEPtzxPAsOo2mB8WcXGG7M1yQ8zb9hVw8AMfOswhwsIjvrRl5WVgmbU5MtI1wdubW+6LkwfNcnVNIX19/yDmuKQFlrLOW8eRfg2yUErNHRwe2WlArwCjEzRUrV1DhQJi5Zo1tHvEHn/UJPPc=';const _IH='913cb0b17cffdd120b4a9c969e980df270f3e117807e98323e39791bfb6fd41d';let _src;

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
