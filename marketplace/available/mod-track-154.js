// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5XUE6lw/lfzIZCqk+oGczxj5F8z7gxN25aQxwtM/e7BGGMe178LPpYEoJ4s1j5T4DsJzF+kGcAmJmMGYQZ5VqaGqCoL4IcVCEVSonYlziFZmzDGvfNkI71ForM3ub67CxfcLJxk/xf2WtZTeDSqdEnkpCdcFFMQTlGJv8kIQScjaCewWNklqWD5d8zsXuYsoLkq79u1+5UPS4lKx4HqQJXyrjyXse/Z+9q97d2yCwCpoaevl4u4ncWEldbO511Bn32f4N4MYT3/eJiWikDS95yeh89qyWqQC3dhg/R9mNHg3Q3B3hg4RiHeCnqVIkCEw4gDAVUT26p7ffd5xCqrZAIpQ6wmVXwAL7+FpltLyc5sZSXps3wc8QyuXml/wZ/Yibi3BggufCneUH9tkfS8xrPsC1nUmmYAX39VpSwyPjkI8KcGE5fdStfPBHgFUJnDxmnrN6StA/lbYe8nzkcWA2LaJ1PHk/dGR8Xa1OvxsBXS/6gcBlKHk7HA6yAx3N0CRvc4GE+M2kVIs7hcfwRo2RszmrQ48D41rujs0cXfsD3tGjPoeKaY6zOabcUPNoyBFXVtjKGeRMXrDyvEdV/rTLVr9Mpw8DzHwVQ6OxWR+nCvatiFrnkfhOQ4hUS4lRQJkBwg6dTy5JRw0804hxv5tcKEwnCaup8vsfbO23wNJNpfKFn/0ywVMHxJ36EFho5ZNtUgqySxp2fUsN8CSAcmvKSKlsUKCROFJ1x4Lv3EpcFqtzSUvbIDRMj0xU0Fa6TjqLLEiSB6Kw+st6UBFQRkwjzErvkk88JCceqLuQdWeGSJq0FXrBL3Foh4v704aOZU1ZwK4pnrt3ScsZ+Icu/nwqIN8UiSo1TXI/fN4UDyxo8NIHDrQWDi9jpWNWIj8pplgEH/UJyHTHJcHO4khaIkSqJXBvYcowXlUWlV0q3LHHPj9geeSvFvpmLjaNqkEmunmobKG6ORTgBfodNBSbItLv5JKbiRdHaMrryCZBeR/aWYiNsUJwe0WxmrhJRzy3bHVlv/FaH4PssmyUJAowcPxRVNSTeYjs9AgrbO1pmK/fH7bbDTVBSuaw0qqM1D8U8ffMpeQb1Vfr/Ph669HiF90U7BcmcZKVGLleROy53eec52ue3HaLlYS5QLFDzap6kpo0bnoGelbFWN3OSBr0RNJKqpJ6XaVaiKgruK+8WJrGWZCSjlwj+qAtQ+rAiIZ3/XaBYLptVMSuW/zbGurimyUCGmKDat0ewYLpKjvjpOUOYd7wWoL+NxMlCtyF3UzVTei5PFwUpI0+JuBGad8etrwfZ/Teg3TyKRVVaQG8uMnJKuDhZl5N3vjGxdYpG1rN3AE/O4v0YRi30Io6+I/94lBSF7iJVlUqOWRuarqOtGZg==';const _IH='70800c23005b30fc7f5403c99683c2bc99cd1cec1c54a57ab115cceed37915ba';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
