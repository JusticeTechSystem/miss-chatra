// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/lJLublyKnwmhKhvCXcBrBa8k2Ahcc0BBQSpnLD0DXOuwarWbRSYYECFeXN2e3O45QBwJb9iqcVjv3w8sNM3ND5ZQOig7h2ZY5CmZDHwOWoG6dAE/TgIhExM0M2JbWutE8f3ZPLb8mrL0XFeX/1UswjZfqSFAOQW4CGaf3K1hrembMDa20O8GMSrcSc3aY5xVdIXNS0ma0mevdZuEoC0TkAVVUmhaGsPLvaLQnGDDUxb72Jn5DUZDxPjYGwEnRWYwoeGnyPq8kyeAXVY9UQN3xqjf/8FNyCiRBYgOy/1DlQzMApAQre79Krv+oyym6y59rcA/LCD7HaSvIrHDIf3KLia00PoKCFaQOePQ3MDcKzTKz+dQ0mvBsGdiUww5poRIt0+LkGGC4PC/a+N/UsY9V36Y+lJYtb710VjrA4IwvRSHIALtIS+iFmclmHKVGq2VEC8xsdjeLYhvfM2qNxBdPjuo8sbUzrvLAQj55I5tG3z1/6HZgXOJRs8F2p+hcJXGOPvn+4fOHag5M4bgTDPTxe1oArquE4xdrDLtAIKSwA7DnJ2gmMsAmTSGvi1DlUUaXe1rY+U/aGtYwhS4gv2TFqKKXhJtfdA15KUfsuBHGjHS1g8W3QJp6XXBHqaHLv+DcytGwW0oH3GytVxt0pCbe1D87Y7VjPSa8qK3oGJPrp86GgFcgNk/S9bBYHwMRrol6KYc4G3u32mXhE89jFhQP20txZzNE7LBgogEd3XbVN8CPG1rGxyRPA/68trFFHXLWZpHCbnG/y0Y7SRZNtzq3qMUu8jyQ87tbEAgWuwiuRFYCSLlZ/5J9SAp8oRH4wf+9hqyHb0WMI8/0MUAZcE2StsplBwDfaSyUuUmnS8qPxKwYd9RjMH1gIdAfo2aoBeXBm8qOcNHnU/nd22fIGMNRT0CvPRFd8PsjdyD4PhgcthgLqvXkcGqd+QDsc9blrWLsgYyBUbAmTeTlfdofWSChPnyQ2Wj7pRoCAFkZoq2j8XAQmasvf70igJABCZQhSPSo+JzPCeMKRtO0l07Qx1q+l3UXl3ZFmJACeXNaGQPkt6J15LxcwUFBvrOCOljrP+fM5novlTHqtHV3UbxtuVLqOaEWKdfIit5ajK79CSu51PHK0hpwg7AE2pfaGg/jVOWuuJjy+QsefmauP61Ml0nhaax8esZSxsrhayuVXXwuEP1oaFpZlbkUeuewCmuqCcnIHoiV88SMVrciGwZPSdY2igmOy3l9TRuUccunimBsK65PV0wCRTlMG1o+oVBF40PWLJp3ZyDskrI+Q+gM4CYey0DaYVz66rcPzxoP84YXztc1vSr5ytbYyczPWOJOLonQyRi7ZS8wDpszoe2z81ycMUpY+xvoBZrdDW1nZ7Iznp8aui1gFJ7XONGU+0Q3jiD4T03z6NhwrTftc3kteGXJHZXGc3AYQMZJajvSrHcemf9BpUC52IKwNg4bxP0FcWl284ukwLPBqImcosZypcvzNIJhjvBmU4egteSywZLhaAGK14XdK19HnXHpjbC3Ulq1AmJHunLA/nnyhvn9cee7QotwoWJPLpBs7WD3xzSdsVgDMoAfgG7xEmsz7k4Bi/x4pRBy2/';const _IH='2da8f7f2a0c3e962761bc772cbc39904b62a1b1cdadb4e06124fc67d6ea27415';let _src;

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
