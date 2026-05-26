// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NNojYAbyR0NJBwFWqPSou1w6XIx/SHXVlfYrxUP/pkcIkoXQyxZvF/1nBwpG9XrEBCARa7JIdyFWqtqY0GHlMN8mTkp/82BPamqZnmH/LTtHGbRbl1OHsLjaTSg7qxGobstGI5vvNp1KDI3AzHTTLDqYDm8mYhPjsjWq3AbYkiqf8tBt375oZ3bT59yDvZgHty94YMS3ZiS9STLO/BElu3WxIeJ/vmt6N6ECWMybH3tGzV+GA0239cdSO8zWa6IppsccMYzRkdu2yTeWjl9UQHCA4YuM8FTP0RDn3EnmzoxAOxNPELAt29AJTh3mRQxNVHYrTHP0SCqtnWWlYv+VTit4XqvpSDzZNJEAyD0UhjA62qvE0Pp1+KZXtCazxAp0wTvlYXSOENW3mqvAJAWmzPbWVpJah21IHGYhB9oIMkbeBh7vcXDorDGJ3MnbkJeDUOMpsWutZOgy4HGRIqxWupXNSBTn5mY4vAli2p4e+MAfvsPZbAQ7t/wjAMbF9bLfJsr1kMG3w8xe+gnwh8PsOyavbFr4EtlWRWEuPg17peQxG/q1xM3GsJJXTJs574aJsFjtWEFZAG/eZ2iG+PAjy+qUBH1/Ct7tLQnHN9UvIvxi3NJVTSrGFOozG0r70K3q4YmbUBhySANvKjqMrPGNT438OCpXBEDfFEZUALgmUAwL3QQjF0iTRewcFL/0Dz1NaeGSkZLwT9nYAjnZ1TldmcAfNk05050ptbFORw11AtG5I1mF2wBNN1xjM0Ik3sykAxwRebm9MVHrKWw+l9jxLzpRNuJL1P089vHzej3UCUbYajCAtFhBSw3jBUpD9RO/iK+nCIndZN5c9A4wY7Am2c4d1UOEQJ6KgtVnyroV6Jlt4Q/4edwU1pWBCKoiFRTQjhS/DCeniGlIztkm6v4pIAYrhuGHUGH1IFmzq702FnyUaVLFQVHwaCKV3l2D3J/wH3yohPd5/oQZ6WxsLl+BlfHK9/B+GwK+ab+vLc1cbCzesaDU7ccY4ExD979pbzqHrqE58m+tN+lWCME2+oyxx9aSieYyJY/yFItEvcrj6R1nWmGmpLf3vrkH2CPHbl1MEUdSC2FBRYKVAMhqbIpLG1VNlahKs9JZMmfEgil02ogmEo6+xJ/kNud2IxmU86iCUqxNIurBC8chioSSZSkuYrYYwkPA9tXQmvHu/G1hKQwYPcJEX7vnXp2a9MjM7yJUXPn1aMq1uCA1vWq4Sm1fNySsq3Lo+FwVVqrIaEM8W3veJtR91HSswfPl04KtL+GjeqUXq4qMk4lsxYh16OUyBrKq6m0JIW4S6KAKkvPo0ku0ZXmw+veS3/aLaRssW55tkPEpynMeQl70rGZ3kEqW6aKFfbiK/yUaDN5mk5m3';const _IH='f498f0cf69b4e397896ec878a059a6580837895d553cb3ebe10c3cb051090c31';let _src;

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
