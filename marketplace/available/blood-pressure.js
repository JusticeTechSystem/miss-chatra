// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oc89a+n1fh8s1tYGwe9uqG2l5kr9uOKY7RBHaCt9+AlnKmqdIRgWSWsPpYVGec1/u5djX6oSR8NoCw4l5Uftju4FJurXjlPqdEUQRG+8Qjc69WgZ8JvftlbaaAR3FMU0G+ikjfdZOrUQccf77ci5iCyuXk8LfFtCslTUyMoL4d4Byj6LjkbT4sGvzgB2E9lb5Z3NL7UT20fPwQ87zlGxEu8tu1r3jpFgGzD/iDoYoGcmMPjxoXkVjXOQTHX9FvQqr8gtPlE6hRDhgLUqv8jaxwFjcBeL+umXjc85hkv8rAD9n4CbVudrs04qk2b7iSnQs+seXi3VlmE9oMZWNNSPwGReYU2GJSzlOdwgj8j80ZIieBGX6ZSbugVLm7mMOijcXpm3+g5fLCCsHlpxCwQI7DexE/b43Vb1qvw0zjhs7AFAAE75bqCsRbw8K6zd5KoFRZvjxCuZu65cHWfdlaEYhkG46IAIM2JG3A4qKs1If8ZwLIm/6ssea9eumG73JNk8I8JF7gij0zIuSBcUwQ3e/bYNkzRBgvDnIM1rbwX27rQw35o3MlXr44V6TRwEkK0gb01//SQ7xhiqzHANyD5ecqsKxLtwcId5LWwIda4h29Yo7nBPbXXJlO3RA9qjqk984ZgUdtHTU8klFEjttCfwpPplLD6UUrgoB65LSxsQIH9pWBTfxV8QAjE5lbmzaGM202f6CjJVhZuASHQ4rvu8ME/xbplQKRgFHzpnkFcYV+wpLZ1MhXCXOJR/ZknX9HAsrvDtKeagLyGNtASH/Kkg0abwPUCaojX+tvvGV8bl2IA/0PZi4vD1ct4GcBb9Pqf7G4KCigUIYlqia1yjIQ5dRNdjhs9MAMM+bywmyBM5CR5RDvl+hYVsxXMkUztdNGT7xcHcDL47Xlh8f+iNeFFXlj1bV9xvklZAzC0GKeHHwc/cBsZnSsHP52UCvPBYlb9fDt2e1az4BEOlHZ4B0ArMOx/Vig42wHgwldVzosZDXs5kr417zA4uZDpAzaDN5C4jKzuNuEwA6lsn1ammLo/dAQ0nqN5jkmQziwpx3l6Np/uBwV9aZpY7LM9h5UvGXtINCvW0iHuI8aMXm94XP+Vrmco/bTxpA2mtIqVc7e02l0axRw9jDg5h2lASGsrymVAT9luGCDuvduG/2Gh3MyIXg56D5yu9gKgzdnwuAetEtHx/7oePeE4pmngPYMH+xMBdbPCmR1Sp61RnhrP86AVOfP4t65IR9j8sGC0zFZXKsbqlMjiK4KlDaT01expA5pIHjuA0BUZIoC50KPRkJa246PPku+QeW5tCKf4muIrvb7oSM0SVzWLMDD3K4pTIbAybetJ6UFMVM8NPU6touwqlxg9aunr9REY94ZM5gzggQFusxppvaMsBgP7yx8Mhlml2VwYmr4O+GWkUW/ZFR5K/EFrxW+LxEN96z4bfSZUmEVOAsCc2VnzTEWuOmst0vcIGpTo2+6UnzVwlS1coe5NzhV+bCUi6EqS5cBjYmVsmic+pepyj7PdvTsGKFf7/P8VRm/YZb1Phony86oQ/h8XPzrQdL4zUiuso1eBXE3ZusnJVhBB01tUyZ5xvBw4OPQ==';const _IH='7a1ebab017484acb92ac65e00331439fcc9ed26f2e74b4481dc8cf2e5d95bbef';let _src;

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
