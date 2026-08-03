// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRG8b7QkR4yV04aquKdT3UeoPLj+L6Bckjax19n5RXiav3GPENxX9WuWab+jAu0Cx/q1ayc4KbrU5fzN4HZPkVPuyGGHWQarCQyoG/yh033Bsjt4aVtBuIAaTO5g9epLHQgS5Hj+nKTzuBuHRFK2a2DxaXASHkrJlkmlsUhzqO+vkL+G6JIWDmc4rS/oyXYytXf+c7BqVEmUUxGrXnxkLXB0YleOvW/n7FXWxTXtgldmj6UO9aRx0P2OsUaxVXz+rrLqmPp5nlyhysPtz5RVdNVeVLw6n94Pphr1ZzqIf7vPniFPPHVzsjuSiTyUzGfR3PlhRd+jfim2iAh5V63sTKtANIMhJWQVAnshuXa/ZkWoKPT5tafHHLoFN3QhOhx8XK8Ao4GcN11VTya8/aUMjA7DBsOi9GDZa8auzl6eEmvV5QAT7nOqeiPS2oUTKH9LXLD4Tp1kes06sddKIAH/f/bbCumY9yZ+ox3yq1SXpk/m+n0jd0l4NL+twTrvJPFMwynUwSfls8bkdFsbDG8aIyquw7fpDZ8fjB0Ccvfo+f73+D1HBA9FPSP8ZWXBbAyCxe1JZ+wHC+zmitVT1+NIijjXjG9hNYqLZOCyZmvB1DDqF7jXpZYW/SnMammoU9jZQYuQG7slR3qQ7zyMdzv3ue4tEAYvWseVLt5bnNHpGbKlHijJDaMMwY7TxM6iVgGvT5+cGwnkI6DoONQEYgPyH5vx90r6QQWQSQ/6T5dAr1gBQ+fSlwLPBZq8MykDS9BVO/FpexteEXZHX05Xnt8wnU3QPULFxPpNtTJ1EQIz/DsWET34qoBGOdc7w41cxIkkrM5LmpTFXExUo0ewHKFAHjoYkZcrD7fKtpq4kCJPE/qxeZlk1x5h4Q5eTW1MGBNJQ0FUeEyuS09MLWuXK8R03/fyIqR92WCAb7nMznoAH7fNqr7dRHFjKYvAgux8Cx3Fi6uIC8OUPNepcBggbHyuS0Z1cQ1aHMwwuKkU6Cdp3JapiuE8j7o3EF1ZjIQW4wBWo71SmtbpnZCrJcuaeMuSgvLYQziLQ==';const _IH='73764926bf65d6b0f5a0a113e9d677f80bae031305359f7eae4605a0546b2912';let _src;

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
