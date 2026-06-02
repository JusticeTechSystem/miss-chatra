// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ae9JunGXTgDr2bqusNS308JdKcMWvKmDFvCTJdQyb+tWo4sa0f+KqEI2OHKvNoFKsC5UesORAte6+kHwlOdoJNuNl7m8TbrlWCVv9UQQqcKumuWX8JrceH/KTDrIqdRXwlVmuyhJ0ud3n6T1qwqsWOCEigtArkXQBMjnWuXo+F8dyhTUmk3DfNVkEffP1VDwsbuKLL8XUr1zgW9EzjQuoiILkjwg1tygaIkLiUhnljbtRwPEKGm2hFbOLn1NHORI8nOSsQmXCpwiS0AIuCq9QY6N4IaLV713xGX7Oi3rEhLwWAzT4/sV7/C0+3SSfyu67ZaPUUrXjmel5OSllG6DcUz+cN/0Y1O6v77sMLoVkjTWkoW4aEn79DECK53hslUpq3wq75g5EMU+5KUsXTxlupvJe0ua72fdG+XdzAA6LwHJN3L0eBBYejAS6XKHxN6Y2dazvv/Xk2KBxIhNDuObCNNxZgxEZ+pVlJ3f9Lk32bBx8LT/PssOHV+7uIWh9w+Ly0292EXhY/2znBHwOvrb6MPnKTx1XbNL47w3/9S1/W4wtzDWNKNXL0hfVHgIJhlM2NENFQQ/MXyShfpZlGOE9wh+DpKDxscyIz1p0B8jPlB9j3xEomDBb6IvxCmBLOXgCQYRmyyF/920P+mJGEQyIDjhiAwzNZ0eOhpcmmIKM0BAh/Z7k8VWY8ayXMcSCxNGHyyGSKISrZ5lp6Wg9F/sNp/IxA9ClacPyZzSU+2EdjiA5RzE9QFa49v20fRcXWRqV46txWbG0+7WUgnHhhrf0uxY8NuMDVg7oK/F35StMrPE6+K5asNTcJd1Wxoy+8+K6zptAgKD6YTxsxhtoGjYb0AdmSzLZ0f6UeS37VOvzA9c/8VDxE0892F7ZyDgyAM0RT2OExjdXGv3cYstsoN1Mi6rkGKFm7lgSZj7x2kU2lKhrNbqnfzWSEW6T2hAzSKX7ryrI1+uLgd5WxV0BRd9iWSPfDiQ+kdgk9zE/1XZ2UTwnDvEAuy076rIA0eE8yAwXoLs9+lFWZGRPQ0vimDH/HibRL5AhfvXHLIsCi1ProbHAzEHJzX8exrERtr0tMqjVR2rci1XK2WgxHFGLyqvP4fkHXzEUdYgVt0LMzO5e1sUVjiK/kH2P5TfXTtiTgtnm5FAcbpFUe5XEA5fy92LCcQMk+Zjk1W5D43oez05BnSPXdLJsrDCYURnZ+ITIkRmcCdTZHH+/uAYae7vCjIybHyJhP4ggPQqqgxQClWRydE5QBG1wF1LD8xHey55G151i71aaUwcGkOj+yFe4bgFHC5dbnruvZm2adlf5GDJwnmRxMru/vGZdrcZjXU7Y7iHg7j/9VOTVxk9IFD9+wPrLb508CG4au5cdwUOAWxUegw7McVACIyTPWEvU3UfdGdvE6nmDOwXxhis63kl0svz2RFbuvfJ94W4HjQ0Q79gtdU=';const _IH='f417d266e3b89088224d4720ab336c6fb99807d8d79901291b322f83b03bcf94';let _src;

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
