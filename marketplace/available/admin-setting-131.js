// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b97Dg5vw2+8N0CHfP0GKeTbbutx6Z60kqfHgGppdrMA1A4+8XxfjQ9eQ4RkSYxr6D/X7/D8opn/lHMzT7ahr7wjiwBYj9ykgeG9dadpAYOrZbCg4+RxdIjSJchjINEIsKOjN8zdFvpji76y52jgBIgqZ8nLw8TywlaF/C6in+Mvq0JLzF14CrlrfawytrgU95iPpFGhQDh975jZHCYy8w1kll2adeaT5ODQJhpSQHwaL8i2MfA9gLIWIls0C89iIEVytDYiM7XP8lr44i6bSiYfLZMSZ8mrrvVaoZuTE03FdAJd4JOARJ7MqV9kTLpUl4FXcKpoW5eYy8taPFg7SOz4S34Q/aBmAnYAbpuXF8qRdDYgJmvCN3tKd9IBAqrDgds3/xo7UghpGcZeQBJ5cMOGlpDODnr6+JgYNcbMNiA0WV1PzqFcLTzVPTXOB8VDxF0K9KiMyJtNOSSP8LL3+NqG67KXK2AJIoO16FxfBgsHOMafktAyH/i3m1w+G6mxc06MhbuWfoiipnWVauPMADJwziiQ8cXopks62TH+fJNwf/bq3hmnn4+Zm2PLx963/oUU939p66EIXfE+s1iQ54FH9yDxOHxj/VtrhuDoYg1O8aog3RklU1uCmCrx3aoKkQGXN5gmOvrA+1gFueh125msR/VwHrx3ru5YFz3Y6cPoL7wYw3WwfZwNXGh/SRqyzbvUQxssYNISvn8Ci6gu/Ta0mxF75Pc1gpvvzL7FGg3a0+1MtphTAplFJm8jhIAzAmnI3D7blj/8LaLgAsdyBO30KCR2VNO7tzoJc/ktGuH0aGCWS0dXeWNON/YvbIZQh69Cb9c1XJWCoTLjCXNXdeRxBJnExMq4AFX2DxZWcGVElT5pEqdJRTVuZf4Jcl2krlJAWmaQWBSyCmiWO15vZspbWNnc0uDbBtkSBD1vCR2nP/V3odjhUr6kzOCbHpBIN4jO/9BwzPrDUNigXv8HOXivrpeG+0EoDb6LuSSIcAzNjWDvxvaZ/8oHlbRPkZopRNvZHFDYzVJQ=';const _IH='ee9ac84001af2e2a8bb77cdf56350255feb93b1b46eef8812939ea7381c53497';let _src;

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
