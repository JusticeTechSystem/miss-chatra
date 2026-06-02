// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MWkK8seOj0jQFelby4n6Rno7lzLceCPsAZtiRwy0gBu33ZH5Ma0/G7zBP4yzREmIiuZBMgn+eCUU1zt/Y11tcB+DZvIwtwTkjeIM+z8SoUnK70Ej0ujPRfZLQg3XO/Jl9UTw7+lkSACTPiIlM8Unpkl8kiKbRcd6SbpEh1qrhY09u8mBx3Tlcck7KMNEFnm03v2gqNj1LHH63ixCNRSBaCtOSk8MzS23qv9wZPgLA+zZZzFnhOo2jR3Qt7FmVqREBRlGwxaLYG4GiU/8pw/2vlb3rcgzu8/GZ67LgFTD9L2D7hMECY26ap082q222IWHj7E7V8xVuuFYyRPi6DgXiE5vaMJGEYCbiGEakVv+xez3UY/FuCFpNWJDXM085qz868xclFlAwadIcRsZtLpMlCgL4SLR5bHyTaTOi6lbPWmCSUcC394YLOsl3kOJ8L4x0U3myuEBNwAkNYABC0hwjLksrkhGU9H7Rv1qrPGeI3ghV9azVdNrBze5Y1d7liel4LNfPW/yyN4dCwQyuPs/EhfJ260VoyygA+64YFZDBXdzZ8FnEeywHoIjQjmlX/4sO6UFkKjEupgB4FL3s+Rv+XLolRe3N9/qgxji0bXPqJpudWDZsCf8oxtlejVzU8W8WNWg0RF2K+xZAWF2n5NKkofg0gnvEUiuLPbFDio7YBXFZlzMjn9AYYsgkz/bP5c9FI2qsYvGehfuoQbtDTPr1glpHp73pPxR++jkvfQfJD1gfN96bVlEB1AFPwufWZwO/la9recJCKBubXHfbwtrA8VGyrn8EduHwfx6Vf7WAwlE0sqFwEKeW9nd4ZkpOD1Qz7fXfwa0z6aqWivOqDfBGKgnLG9ViXO8QXlRYUxePI13Ul9INnMn8aXCFNSyLo5Y2X25K2RT8CiC9cujQ5DaCRK12ks2OFxIvWR9jc1wT5xPBEQkM3lJLb0WPadjNK032OHCurrpo0rbgomBKtMRrZJo+mu+r0B756CsqAzLxYEVXm6C1G5gaumDnzEAb28fqnR/E8nvE9oUgtIRaeDsTjKAeVqf2mLvxuBwYzSVs3RLfyQeNhPrh6pKlzGf7MTCU99AaIlIXkR0ZQUJTeAZTUU/BL0obLlD5z7lDDFiMVsg6+vnTNVYQdZsWnXTVZd1WRkJinCwFog92hpQdFmZLLkXt9wcXiIe4e2OuGFX+0Q4kp+eiBRi83GdxfsF9UOV4Z6XHfB8wpvSaKet01abzVSUrH3fW+hkByM6t+1e1IlDtzCzqPHZpzPezwV5K99dKh0TwZGUUCnSjH1dzS4wkfXTOT74dTnsH/r+kSNNLO+DdVhKnyZGUw1qzliOu9fv+7G7ZOwsrvtAwRQf0lEijAEmYH5dbuuXKeusoVcrp18NYGwaASOBcwIQNOLPTxAmVoLNFly1uAx3bFsTmg7iVV9amV1PxD2WG66OC0CFkYTsneuK6AtCe6Udhpb3HmZivRL+1gnslNUplyFfLM7r4rGn0laUI1Qg8gvyBP/v3yEl4/R+Kzzl3IwV/Rvq7AdWxcmOI1KMjIcjn2aEVV+S0x2wjAxuqH2SiVTFODS+8AXjXUgE+ZFC1qMPkpl2FOzxikzOpqeci6GoFSas7iDQdtL41iw3QmRDInqYL6HRp5Cq9aCrF8Y2XWEOUJOpSRPGG4+077WaprbHwAOADSw0wOhdM4raZWB/PXZ5jmQE9+am2F98O7gN6aQ+y24rp8y6eb0LskWncjqH4V6N1jvzAK0MX/s3xbCNIn5fht0h7P9n';const _IH='fd337c045c54bca273179f9214f939e4a5c7f08d0065644e1e7d51b80d94a72d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
