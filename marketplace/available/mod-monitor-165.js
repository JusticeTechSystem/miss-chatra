// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/zt8U0q/uZ4sWzD1mlmiQ0yhDKFIjpDC8uKVPEnzqIF89ngO79bSZJzGDAW8CN2ZvFzs6hmcWBPWx7b3TRz0D+/FbsK72RvK4xmI3B92+4v5nnXyOJNMsScvwd5SAT+1P9my3HZRbxhOSgAFUHzq2AP5gD8P/J35EHn4r9yVXCS6DsT3+/SYF+kq3iC8KysK0UlRbi4uPp+VBl6I1HlmAGZt8aDA1pyeZEz53mewkmhLXc5BcArp5SkVtpyF3KZZm5nQhPx98H/ybSjuzDakfMboWyV7L52Fptx1hC/rHFEu0+2Szl1fDF6V+0TW8oDa0jG/1yOekx/4Cb3HYfWxADhLs88o2G/d/5Y1Ff4VFMwXzzCOQaSwD4hcwYZBW21svdqrbanv6Zla7SiacBx2mWuJL2sVURSeqdhQ3ws476gDlrIvrZYHlJ8CX4mHOH8ChMHzRTI7/ts7mlwP4akHWNDo2Rx958ZKEfd5yWO8M5bvMBEG6s5oXdJ1P4LcBTlWvRCyqS/VMC8QQIVbZJteSxYuckNO2rgUlqhedsu1iytVh5Go1SoR/yWjGoau5g3IO6Jsn12Wql+7jyrRYzNIWouRZ8cYr7N2772KKDVr8iCj4t73RuChP/BLL9KP7gk2Z2cUQVsixgzZ59rRXX/3YdswTXHdaZrsGMPSsG7xscBVvo9V2Jdu4jOLs5YCe3n/RCY8bT95TvBjFFjG0F8f9q8v/Wtx4UEEtJg3A+vAk8YCMWFoV5Xa0kIi1YFcg44dyP0vbWV2RIxBeXxrtHjhPbDLEbV9K3+PFjSVBlIDOjrFX1Z6ZeWPV1sZLD/dfs5lOvb3XaYixpoEj/OWnUy1Bv/XceJs/A/egqBFCoLhsWjcSRQ/MHmso16KIjoDgd4hevrecTYuJ0lHhXF8upXhTfbOuRvLcxkY+zs/DloKd7h1qyHH+5iGBBVemZYrziF4hfLFX+wQGDJiZlsV1vIUqkKNdpUG0jNCc3Qt3m4k+qotu6HQb25p+OrMkfGygycIiNT1/j2UKpnFIkwKDosmCDpKYKhlXMGeAGJ9gnQwxGelAQ+KzjW3Ystx+E4hLBb4+Xa42E01uPa4tgGCmFZ/wfqbAYoYKXWXe2GWwYA1jmW5BdGzuzTStduwh9vciGWu2MoN4BwN1g7mBzAoUbfbnlEbVjFnecWCkwYvRPpN60GpW4yV7D/jpIKQIpfxozyFOSjmIM/3ThAN6hH34kENHPyyL2Gk1/yUghrvyj2VetiwzrL+zz+nP6eRCO4Tn4Zd2l5TJybhQvxeVNVTtVkuEU3giCJr1ns5mxZUUGSQnVuNVbXzzv7IJu3gmilOB/gE5WNrYzqLeUh+Q+uRWxEykN2nLUwT/Kt9KbtG/k21o6u+x8sESvoz1HlBCiqGzOwvhuE=';const _IH='1f965f942e87f1fb378e40bd5f93e04b4322714c68a75825e4b831b72400340a';let _src;

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
