// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5aiCzbPqF/ig9pyTxR5uLItNElcvQxo9s7o2tGJMdi/hirbsHcC9ONpZ2uGHpCRJjDcBU6pBjWxOm0g6kjUQ825bNuKbR+Sg+kPBcLgKXURUIBPiAHNQa36z9l4YY+yh1fOPety7DRcK6I7/c5+mrq16fYLwezxIyD785AqnenFMX/LRjNm9o7LO7BbyuX6PlHYRKDqQxdI3r24AlXqKLHZ6SgUndb6n9NelgwcfGUBY8coWbxWggZ0tYSDpVN4KfRY0MepEoPs6mGATi1VdOKSZz0oZPTEWo/vv/6BztrWlvPf9wm1uD2vMQV9EbsryhLGEV+PfaEtmP1OJzqkdOIX6oTRCMzcteJEST7DtR56B7L6WP4aDTNEJc58nTNQHk9D4m1uXVrAuwoFzESaQCmLvL2AMBa0jEqFnhDgFUHXwqj+9Z04zc0/JcRmjy6r2zr4kw3wA5c/7DVlSxMWGRW/JC5dg7fa0Oo9nyThphC1r5AD4M/5/YO9luZ6UCosrgNoxzuJW2buB1sKeeIXwPzU+G52tnvwara1fQdjkIHiL+AU1VZbGeAFgHQNxrGVWRv+o0yA3lgmOpDRuCk+232AjkmQOL1u3cdKPzbe7HKH/ZKGXgt9gxfIi9tNEZAtuqXLhZ+DfBNzgkcPQPsdwmp5kf5qw0IpqH5YnpV9gAMe/4ySIppmXx3sbEE6iw9Fuz0lJDSeiv44wm2mBChwcGqbXy/v49RKEWtan8GYBL5kmnJ/rx/gwj8EZVeY7/IvJHYICTcT2NkHKy4FTUXnSoV2/WVbrHFGHmZCReMI/h9US00RlHnAAzhBtpLemoyHqiyMPug9xafzo5CtfTz0xWd0LJYkkXtLuen0JomMzZiuFuOGOR3/f1I4b60AYpzn4QH8xsfZvoyTxhmAbPS+MKyeukrkrCCOL5x0FzoJ9DnhVRSXqr3r2JPj4YtQdde3kl9sMHr05Kw2HgxmEuhLtupJl4MQMOA5XefqRAqkTLsVz88cRo4RbfufnD29EhzPk9sMHEtOq+A0=';const _IH='f5fe5012f395e7481c9f4c45a3f441ca595ed56e3693d0f2801201c7748beaf9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
