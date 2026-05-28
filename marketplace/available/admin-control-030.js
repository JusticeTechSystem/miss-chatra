// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QlSd91NX3+ifU2mAdUGdn3Mof9tuK5e+10L9kONq9ZWr+lgagX9I1WsOCJh/d+YmyTURjOec8B886S5KP+1c/Av+1qK06w9VInpuZn5V1WHBTWFPxTfuXmmJpnjrxDynVPamwyFzdDrPNAxuviSbP2zekS6WdUske22Uhi7ZIxyoJ2AO6Cscx0r/CDMcXacpTJBggqxzGmgOgF4XjAHVNf8GN2xc6YHO0by6F7a5Om/Pxgogqt5eEJn9dAeerm7FjuK2MJTYWCUknD23LLkthmzQGC/7Ukb6c8GIwk6geR2nyy9fCkWsfvhiwTDAQ3VhVw5jJhHUFMMvlLOxDZ5VvPVgId6T/ug/XeW8fzEqWTry2jt74ztmNB9U6c+lB9HJHLonnNRDGYOD/t4tXL5a6wTxylAs4yg3+D2jNXL4V0SifEufAUW5aaXvyLsfZxV9DZGudTHkw0+3iAS4si9YPGMogy6XWDwxCMXj/7iTGTQEu9q9Wzhr/uhdS5xuJo1cpClMYw1xOxvpxqXlkzvREAmpVZYRoYUPdIPQ+R7bNfLX+FUD/KJa37eTh7lkCqJ6VrbR3rSj5QBHBn8B0JYR4YaXdv4jNA37Qm5ZvHkACZiLXbypPcnEgfrcmGJZ1A5bGy8Gu46jO4ABo1mrvzeb+PYxhbwTl8+JAswzkPwD1uI/3xauLLhc4Xld1+ik/ft/r/xWrG/z2uyz1nAtC5wCms3TW+2MEuBtcCMi4GzIiSdJ563Rc28VYrIC9MslF+oCOuPvdQ0W5fipoOXKu3hUAUOV9z5tmtOdlxTQtog8/0G1qoKJ7SWQ0rLFPRDGc9V1BGXE14cxJ6i0FxiM8cYulvPZVvA2LTjWKtUCMPbyxq/YUD2vm8PWq+w96DRD0A/luvQTP24RZjLGjEXJ7T/WgLFe/FPVYw3KwvBxwXtUlcC63zKCzh9T/gVvp2GhKwGeCuW0MtXy1edKN+SdhnvjrkQ00BLZJDvFfGeXyHK7tw9kZeaxecf2A6kCwiP9JjYJSLUg6w==';const _IH='4b5dc912d0f26e83980d57a2fd9ad90467f2794f8944c1ab26d4536f04e92846';let _src;

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
