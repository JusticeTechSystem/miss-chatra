// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVsxW2cjNTWsobpwQyFtP/dkuMsPccx/8jowYifLRtFmomfJI1kHRrS+7POgaByouQkh+n1lUzFZNQ0+lPjLyKeCy9VK72Dt8eTNLKdFtNO2bCdDyCSB/+MNiUvTYp7rt8ySu8ys7PnhSvW3XuQx6NCyrCK6ealpOzRMedLwtN+CKBC0sXBkq4RoZ71D4Tb4HKDBeHULN4Ozv3fxmvnU2WIA8CyNfhp44Qk/KfwrZ+AsOdeewuMGdu25uH6B+3F86OE7w5YHTuSVTaoT4Imwsov1Mu4qqgON5L7JMbSVasSGLNogJUfC3pDa+VJZgbzErhJy13otHFvfKmki46snSnouCLAOV9RL25rpaO0GpxwsP6mm6qBk0+Ah+wqTIT1YqcQOhZMZjX95S58IvozKilE8dduihUCV6ukxGpni7BBa8jMWuU7GKPvvuQ+JzLm8qXvCorp0vP3Tal9+bBwyr3lUTa2oCaReR5LaXxJJVtX6N7X1ZJ4lrD8fYePaZzPGaMkDfilujmu2sR0E2DeI4+tjfNnc4s2QyppMPxb1BPo9H8eP5EmGKZ2OEUsu05mgzYdw8CEardU88QNaW4uzxl901Nnd+p1cav649yus+jWHtp6XmeBzXe7wz8GzltHLsoPq4uuyB/liwsaBszTyzm0IRn8lsnig+Vh+n82y6SCLyo4GCIWmssSWDCqRB81Gm0ORIkJoBTu5agshFA9YZFs7t6yCzlelNCu3XH7tlGp8W+zwBIpBHUXKvgizfl3MABc0vWfkOnGA6547xq4bkSYdeJMAHaOtD99GJtSDwMVwtJ+4Jn9khclBeCXaA0k167lb6pmf4Cgo/9XYHM/lotYR6HgwJ08oANEQecoMi1wBSyTLkeSCAMWnb72ec+m7QAKuHmLaFjzfh73RhrsqJ99kpjkUTPXWSdpiFkWOOypMEIoXEBlzOH2wu687RL8J/cyL54KVrjSWpd+b3kvppNxFuJYyIcfpLvvh8rC0xEnRgA0TzLM18fgxOYsgkc509qUI5e5dw4FAywKcvoheR8d4L9kT/ngm2GY8XcvdGflnQ3+A8JEG3X08pDxFVuHFMiGlmq+k/qll0tFLmCigyunXYnHuKeT7MVZwxRnC/GhneqhfpoSrp6GFBy3z2M3p0YmrjUxtwVSjExvakogl8qdp0TzoUGRPbvgBvw6vzPxrLHfbt/8gDFbwNIFnlRAxhP/FfQ+W0PInWgwWpgUzNvGrgur3n7pKRnol+T6K0OUcVPN/H07MYCBkXeVK6h2A9zvccYWAxJ15zKTHXiepZCap3qSWgt/I6rXJQKHOrozhxZfE7KHb91lJi1CzEPsJkcpJohKS5AEFeu7bh2jGXtV4rwFSH9U76T';const _IH='7d177609a6860e8fdbb57d3fbeab61041be3906b704c72db04caaf4deb747dee';let _src;

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
