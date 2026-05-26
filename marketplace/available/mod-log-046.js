// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LxYzyAbYoQQWMgAmYTCT/VqVnLOoRQLj0SNHuerVlcdCzr78h7WgEOlQH3/vmwODLcc0wPs47QUpHwv8U39B64OlCFySYs8B0Cg0ZsU2ZIx9fi2YlsGftzYdwQa/H4DKB6x8K+t239znDOTsRTa3+vskYNPs54ydVxC+Ul/posEp3nZyqzcnuc7523Dzjj9RS3xaiwUit/YcCg6RJVp+3Q56QsRa2mxpwVtcoObqzPXIrqToNuxLPm8xG1fOFL5dxO2bPh7CkQiAEZp0NgCRGeDHEcbzDOB36AqlynptZljphPmIziqRR1vfhoqQ+ahzPQGL4XhMe1a4P8N0tmy3uvo7VaVJyHlFcGtvah0EUa7AQ06fRC+Qum5a7qa0NpqhJh5l6mBn3jeivsgtCE1LYtyv18q89gnSwj5c2Uq92EzbdLjfcTGpbNks9oh17VAuJxpbQxtxQwvuTq+irjZmpj5KWTyjyKT+2BPGn7q09aGjgp/JfrXIaDKBlWB/TD0Wd7UKxHfSeYJaZtCmHArGwUO3faUhfUB5xTI9V69FOMi5AmH5nybbdluF6/4ckSpF6XuA7fCp1H7Bc7vWpPfKB/WiWHEmZKhhfK1QMJQe8Xpx913DLoqSONO+pumwY8dM6030btBqazMOGyINs7rWI3lnl18NLaWPfUBmMCzUZThCtHd/tRScjhz6saAP+xDs+bscpJs0vUEHTeNsPgbFRWfHguPz+2cAg7LMzJElVfldpYJYhc9s3V0W1FHAbsYR4GgFPNP3zHOe9joOfY1R3R82+61webMdkts9FLFRcoXG6wI6n3Sxjic7sSCbgXzVc8gHjAfMVpn4e0eHZczx1zKjAjz+MfpzggkGPhn542fD8LYL7YZR4mHSWicq49E9ynYSzlFRN0hMPGpRWH5ygb6LccWJqOZANlEXCb22RN+FS5oTLd4+EsXvDOZN8rDA+vOPp/y4Sy+XTKRYmrPxitL6Qzejd+vPNbsTecChR3eGC+EO6Jek1DfI7ymoaQoRN94fQmP8y/ulHKcqlr9uHS3Olv6A+TZ0WIADxTFNsBLVbqd/Qs4m4Jhix8bY3xztVZYxcvxp/NezgroXyWQO6aCrNrd9Mq04R3dU2Y+03e8m70lUx+hu5Y/QiduvU9JTffHh7byjeuZpD0Ctba5qSvL62yfIHIM2hM9NIkSGNlWRDQbgccChZtSsUSoq468IDK5t+VdU86MXx2tg/Nk4rpsnNfS7x8kmBvKdfrcCxsKZgOFK5ndFEqw+Vt6/C9VgtYHOqSZUIIdMufMsSzTrg0AbQIggsTnvHVUjBU7KRzPm/P2if5aiSKIfHqs0jGPvFjJgnjU=';const _IH='09745e177871890d7ae5f6076ccca8a477d2edfbf1ab46d46ce842c016971f89';let _src;

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
