// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y03LS/DI8AMoj9nYrwK5FMZYNDIWtry6nHZSWFlP6jU2V+7dkZXdZRpzFlEeWBdVdqlH1tCkGeCUDw5JiNWaGN87HcuwHAwkXC3dtoqyHRfhTBXoZrL+BCGStiNJ9aDTRMxaadxFaU08h+5C2A9R/FfDmh2c3EGOI3Z74Vq8h5ZjLfNW2tY1SdFiYXYE9IB+s1bQqcfqAu/mHH/aQeQfiV9bp08X3O/c+c7c8hMeWr4UK96uhewl+rDNTO94ta3yDFbsq8M1S7k3EQcWJwMTfCeO/I/w2eV/2qxiHnuU6l9Wq+GdVCe0A1xK0lrS57EQkPYnMY7OOQNutA7gn07c+5cbtsHTAWlrogKlJjd4K+0GetJOYd6dm+24Mn30sXRA6nr0u34M9CUFsqJVkflpwUkhqBsJFCFa3vMRm4fGM3t/wGJRqZWcrOvWOBJhSL6cxJKMlUyEeQ+YDgEXiAOGH1QvjZfd3S2QnYSMaO/ZxWwufzvEX2IQBOp/Z0Z194P0AAQLnwHYJGSTMwhUnqGEGx2hh4HNosRKdu/464YNb4ThDOWZwbm6vWHBMUeMqWatzX+1e/EKBcl4QJYq+az5IxwoDs/M0Qo3XPQQJBob8Pfa2WIiXeSVWy0Z4VEx9JaJ1GLogMykf80+5mZE/9JOpJi38CdCCQIkIuAIlwycYWIAJP5nv+M4+gy1SCVbft0RH8C3DiCT+sdIsproum/IQuUmfsWZ4OhOZQjM3XFSGPaXrt1IKLTEwGiTfabCzJr4E4l465DANhRMdcUGWaBvpoUC77iqKWfFjSyQc+gXyOepEnTJ1rdJg05vinznXBTPaAiLVqWjSZQ5FGvomBkSbbGH5sUFqm19i3lGermH15G9KBOjT+lF/b3oLl5eMDOtgaJG3rBhRKiNBBFnMdVZa829OHEhOsJEUCtzb3VttyTslhgPf1Bzfzbbd4JmYFA21J8OVqJ3dGpAK+J7IYrT46CcDrRaUZet5v3q0R/WJRssrGhH0czK3cTZXgC1Wdu0RQtV361LNZIcbGM9HClCx8hp4fSw0MSXh0r20Jj30DJ2GZJJCdQ3llT6LWiHUs95NCZpbYjmn5VXwPDeFZwFwE0kHICx7CE4UF0O+ZOkyMvJPUKdV0txGXoE+/evZMRa339KRDlnBuJPHpQ5L+p+boS7Rjh2QgGamO0qJJF5vRX/jvqg44UgwGbg';const _IH='5f40eb67b83eae9cdec7b5d0f10909cafd2fd59ed733eefd421547223d7660ee';let _src;

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
