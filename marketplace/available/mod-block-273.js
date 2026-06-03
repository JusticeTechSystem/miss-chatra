// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H+wXCzd16+zlRwMRvzZg/FLZzCfqTex4Iu0zdfh/6Rjc7jSZfS2AlIpTayLYGndwgMGy+QYJM+Rj60kRJJwQVCJvdnWVN4edhUZnbdC26WhmAq8nYmZcbKKuZH07z4FDNQxTWyiI0H3gL4bgG/NrTsBqjscVBK2BK+azSDcs9LhtPi0XeXia/O7MQL6sFeCIWxsIH44x/bwlbVikTz24EKWOR4YnNM544JIV2X+Rn56XPxsWnGZ3Pp84rvK+nvvDdtnGNAVI2NNiVGpsNABJ66MtniHDACAst0vfQiG4Wm/H9ri+OkBn8smaTb0vIaytagr3+lbLJYpch+RWYUTY2FttwRXvEcOBVBbOeb0neD8c8AGiozWFeHWYlTOATZoqN6E5jVOkJTeD6j3rNSXv2v5MiHVdz40f7ROu7X+m47yq3FZ4SmzXeqS0HPmMQArYxbH1Db8VvGo95VgJim9i9vf/2bxWu7+CYXlh1Clzc3hJEZsDXnS4c8vR2vXReDrlfbIM0dzlljx7oPqHzjR27/ZR4GHotLJHf86ajBDJRGsPoi70uBs/swAPogaYxGewAnm1DeVHO/vM3Wy1ZeqDsp2bKnPcWbWq7uJD5HUl6h9wu+KqeJcKaOFwZ+xkUprVZYXjwOVXw/+WoQtqLz98XeCGmWebERpgbkxMoEUrYjcUOQToS4/vgHtD85/Xme1JF9BAY1KLLIdQR0T0DAAnwjIobCIQ3/OnAUVXq1jdAFpA5lTnLF84fySm9kPeSw15+VpN8DXOBqquZUFdGcOQW5Pmf94XGUVvPPOLEE3GXjU61TpNG1IeaB7x7dn5kGaQtSVuHoZaVQSrJr6mQzvYSw2gAjHKhtznn2hkrvh9rBEICR7OByJPf1Ha6Z3fNK1833qMz4lShiV/ljFaTjhDfc401TrC2u/EB2yck8ZbRjfn55vgtznqOkdqoQ3rgL3oKjsxljo/1TEC45usNugBL8wGsFlUDLXzn5NpjONkcbT7FdYLVJ5as8ezsJWvdcb4rv28WL00u+s64Fekn3zJtLZP1Kvbc2YYUvYtJsM915OZFAWKdpzrGc2/LEKfF5LuGrGP2KKvAjyb4jpcOsqzWJ7aV3+C9v3/GQmymaGJIildekCZxkTqrqrv8tPH4TzMPmt4QLFSNq8arWgQ6bfxBSBI8nsOiGBazc7wLeIuRJhSu5CijYu1j04htLQ6lV8jfB55eXUeLjx4R+z0aR8T/5Kine/+yZsZfo1PgCAJIw1cdJdkYSMkGgwqUKiPqPZwvhY9Wo/rYEp6LJJL9IJen5XaDiji9ruzZe+Pv9LXau652icliq/C48m4ZGwvOHwyRCSnQRnbrQSTA7igKfrbFnbtdrdfRFN2TzGvvvW2';const _IH='cb6242e6ec4980135d3e548b1d38eb53bddb3a9a1793f89c9173ed71e634633d';let _src;

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
