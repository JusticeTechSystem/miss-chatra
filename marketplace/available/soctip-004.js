// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dNQMxJN99kyPq6pa1EOg2+DAUP70hPTTbXgudlgOHiJuix2LquUUieqd5adyXACBb/uiuNT56NzhrfQ4VSE1hwp8qi3k/SegWo/Si7CyyNO07TVPsi/hqbYcPKHdOP7KKDEZKsbiSwRfG9ECtG6PgTz+32P6f0sQ5H1jb/ZnFM/CdYmdexdr7qLCdwdMdUAB4c+WsXguE1194VpZfELL9G9EFfX2kIboIaAYRQ1xK+pu6FrLJtQQfuPEHP3dsh27Bi/XaV9bvMtl35V77XSe6/rbYQ5chRcQtbhHb7vZv/ZU1SIQcnFIAv0YRd9kMi9YVoZz5g2EABSY/yS0+HbXtfLxKSuhBGsBJTyQBrS2LCCMSNJTbSw+Jvem1ec7qO/PvpHUqxGPYSCpsiHaGAuYINQGI0aHPCm7WMv5KjbXJdwqsOjPKCWt37xhc3XP9Dc79Uy0mXl5eHQo5zK4BN0U8mSwd272nhW8g9LDrE52Ti+czh7UzqO4d30GHV/CAe/tFwAxzCTIN90+BaeqNKNH5DP+kRtiFqoUHCwkdHDMSv2qSbLR3eVoMy0eM/UI58FuOkxzrRjqlcR4vEGGB9Rtj+AuwVxj+WQbZXtwVu9Pheo8A0zNmMPw2JrpXLCp64h/9T/j6N/cjWFRawgtCp/dntoiAsMIsc8vliSr01yhsK9WnhYKUIdNZG+Fr0XuIGd425u5FLi4QsZigHyJax/fWGnnM0+q//A5UGP72oyKm32UCnR7C7Ktjw1IJ7fneZiMZs/OaIU83xMJaS8MmPvJy8mkdRA7+hehdcu7z6LVnLK0jYlGm5uXPbEERnsdLs96t8v4ZFdggf7g+++F3UVlQDjiKS0XIlRGqbP3SaPSrA1pz2LNIUvz42qx+6PVikD1hxMza7GBDDfAn99H+BCuvwchR9IhlS2Aia7CYFp7H1+cijevGhCKjvZgaPLY7e6i0QmabgJssrni+JZzitHiYvKtkmJDmTO9eLBt053qOwL6siNS0UbrZPn+XHNpihLqQ8RWKcfZ37Wp4r211aasEWkeV8osJMRFa61t5pwvPRa5gw18h7pXgSv//iBxUU3PbTWEbWqPZhY7KJ0=';const _IH='58b1309a71f2eeee98238ef30db04aae34687e603bf9493293e9e8f9795a70a8';let _src;

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
