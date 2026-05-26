// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vtpDG9l7MsvR7aDcbz+jsWRqyZvsxnv6A7+WJ1m9s1ROPHWM1SJS7HzpPRhibeXoZD66vz60QqK97J1VSikyxgCq5prJIpUlZ88bBcVbO+7ACAuAxOLO+HiP4IJaDqwEn2oPr6HMfT/gdxMWxocimEH4jf/F1BYylEFYyrfLj1G55gemj0+ashxDjXldkVMCqfwPEnbbaVpaNDzzMQYgr/GdfIUtd2ViqLGDaeeVHNa5oKN28omKC56c2YyenoHyeVKzxvYuUeDZxqs70jAh50i2Vga0lhQu/wV//npdJ3oeNhW9pyIrHHm2ATtgLIS5s4rdEll65E3x1jSuA85NxkLX7HmivInK+ThQjzfGhHuhH675AZIQ4lwoslLpXxTt54oh5YoEMJgzKKVBEz84jRXHj3/fOEOk4EUveIlmIfld/+9ap7Lq9JNs61xz7sRNn6TdPYeXpcqzJabDW6oAJ1XzT7Tqv4vV0puiXGOgEXw34ilOxX3wpkVfo1kXc5G/KAKk8Y68CGGeGHe1CjN1TRneQKTTitCB0j+if6Sn1uD+Qr4m/mUDBpk/a213wY83/anZCyqbEaRjyFLSHrdgbLdkkFSU3PhwXt7bOLrVIeBUI+Fpqruhxe1BVQajclmXjpdUI08KAcJ8xQDR6nW/wyoLcR0lnhByhDTeiENR66+MtJQFUUn0AIPfRfCfSW8dgWbp530jNSau50RHD+lIK3Pmn1lV4pDUjzMla0Na3108QYmr5C5oUBMh4fMMhwPMkfh8IZ96bTrB6LrjZAHk8pW1W48OO1756nVE5PvqdRxaddVcEcD8em2ooZ5dDTcmZbNBQqWipz+09ysfA3VcKQFhPXNKSsmJAfhFw5rVRGhk8YOwn+jxyeIyyFUPgDm2lOSpNoesUU/7Bt63i6mhnE+1CrE8EBAlqBuYPb1zXSmnJOKgm/E4QoZJCyFEb5ds8xQQGM/DPW4JQV9Q2Ziz6jbqbH6egKqBh/VIEjjJseI25653iMyJ/jWl';const _IH='260432ed92d020f6828dcef60698b7a9f74d95270845b113b65d989f251cd697';let _src;

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
