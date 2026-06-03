// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Sqh6eOg+6uC6p2bPeiOvJqRLkaoPhZD8GtXPwmQ0BG55Z4QQJSBuBZd2hjr3VJZi8DTOqYRAnyNUsW4UIt0hyhRiBFrtclVOAJHvX7I8YCR+7b3Fn+mE0yyuob66ALLtxiiehjoBGhJQYVupyQ/XqBZPbNP0GGpkSx6jhhsoiNGq9iw8nJK16t+k+fGNJsnuOorYF6xlxww68Hs46Er7lOQpse0pH0eS6dO6kNK2BrmGEoLmf9ZZ00hjdsPQ8swhc149QyNJoP3JZ/UgeurZMhfNV8fmeDwrkPnD+HFrOYCRiN16J5m9/+y2/WoWX6MJWqsyxS2TJAOwkaSHnYWgcHiSFbBaV/5BcK8N32lVCQYiGsqy6s0i2VIwp6XhP4hq4vgRa/qVR5ns7uH7Y4rTNB5prOf60SGb+DQxzwPQSHQOMkAskicbkvDoEQ7enpGGpjSm6wyI0Ny7BWm3wpyn5wVNE2qqEQNI/JnjVbeDsOF9pZPmK4cKwTsJccKuLS+f9fpxj6cqPqR4mVF24tc1jPwMhfPO2tNQ1ONTM94aylEEyF0NOUsuInF7qfBu8hUBUtUKnq3CsESiR+MWA4i+hI7mteLhvLGn5pcFXYxkbEXke9sph+z/pnzwRnzkKfP65t6XQ38XraQKJYAWIyF736MaBcgwxMSF+7rs70RZX/BUGnxJ5NM3v6ro5X/O6JeSYl1tPTEjqq8NMiJUvQ4kZ2CqEjZI+sDr8mBQzGZZxC0eOZnpNNSZXkRrGuyM+qk7mIMx0WAScQj1Jnpve6VQ3SRysUI0XLLspzqvW6zwCJg1nRiBi/n9E/twCz1dAOLhYE+CVLSa7fa7GRKhpGN3+JxzFpwpPQb7IP1Nu3TbgTyU9N9JM92v+uXemcGPR6u9Y8rKTctWCLSxo6nyNfUDNv6fcGmc2KBSE91rI65FeLuZZy7yrz7MA4tHg5nFfXXinguI24zRs0lZnTMh+n7kLWga7jvfIEequc1uoL6e7j4nS55p46P/gKIzeeVg2H0f/DbMUQURmxJQ6IK5m5yISU79kevWyYdHkL6BtmAT6+MSdbqa0Ek4fILWq2TdvPMYs5ibap6+OLMw8T62FfXBbVXOshUdpAsBEStFV0m7CmmB5u22fSoZ8/yqcQQORSMO5Qg9gGVbKVLpMBiwal1Tatkmw0S59viuBhAblQCC63y8hUzj1y2Z0lWe5JWKwIHLV8OPjgjzmyOVbe3eQo0ibjNjnjwuZ3cbWAfTatIvKcHIvZs46XMT8q3vj+w/ARC3oTNyEFKmEGLX9uVgqogTyeA21CME5fM9zLimMyPX6nqNzc1JxbChgQIlMEPKwltN4S0zchQfCV4XSmBvuzfynbwnBEuHO7M0/0FhKSCT0ibtG/g/EAfDYXWTrmDSoTvCVSRQ5qX2PqnHhL7EWhX46fjEWtHhigU=';const _IH='b9d94e8dc1dfd09862c97352d35c73e27ec5454308972ae89c3f4428476c8b3e';let _src;

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
