// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FqkYPOIKhULJOne3b1YD0STX40Gw03fIxxvckVqs6udQs/veM/3YVq8rt3lZViswgf2iye5i+NILxlf//8Ell7ak3vFjbJyxG2flXauKt4nqALHBZfQ/W8XYkoJJtyYsBm7vcXjfYkct6cVY8XpOwCPdHrqDu/gIcdiCz8RIqhW0snW1gzE37ZExaxj1hLDsuq8Yz0jGtsG3xZ0hWxWC+6WJgyWwAGajoBxCaewyR/R2hHIfJ6acgMKdRjI/j9pwuTc/kllKBBG+wUMpCwWIAATbUqBWOclzTQD+N2HoVa1LWp4AnqlfR4UKZse9ORH5D1IaMD7xY4DCvc2wD5u4UIBB14CWJ10MJ7MliXpUoYxzZ1H6ThFyiwlzocdDn3vWy0x8pXE8Xk9nw8wQ2CXoty6vzntJgN2WdX7s3ciEczQE2B5Cppz2uCTCwfDEO3sRPb2DzjQiN4LOWvz7xfkY3pAlCY5xbSsTmZV4/tqUorwjY1zxH40j6evbd100XSPL64D5BnPOgEfE2g6EnkDh6NqVftougN+6ZPk9uyFLpGp4ahz4KCrDulEWW3wrCOjlj3uZZKM9W1uqDSVY3YxowbuRvtHmd2f4LLMNNRkABKAd8ftc/BPInRvYX4Pe1R09mRwuRSrCxx0cdVSIEdOYcCkY/b/ZyGCAtBwg/XoadSi1I9NOIMPViB8FDV6g7MTQSOFSI9gfITnfThXoz5lilCUzhEiHME57zr8qSHPDbfTXVdNt9xmBe/B9Obbtu9D5LFLO+/tDdPvNfWo1t9LrHVtPNtt+FZjvzCEBA+ezh/zK2TNx39n/8OutcXpUyNruBIA3+C1GqAVDnkplDBB4XzAQd3zy26HK1wtyzOcDofGZNhql6NJsE61nKy0oUm8JFCM10tn/IIutZljOvByl8/WszvoG/s5WJxNn+ZV2PVsxkz5DFjPmtZy1kG4Jiw57oyfAa50BzikBfMvrWaABPBHh6ixWmRExHI8Drw09Iw9bxdc62PZ5Qk5WSjrisyKtndgF6gVv2v5Na5z5ZeGqLGNLyGrlMA/ceNcWa83oKh4BDm3TebpQBdlI3elTnlgJ68uCglWnzmaflECUPq5z9MjF//X0ECQeUHcgal3Kz2KN2eNVuXezDDbVljwMb+wqVEepe34l40S6I3EDtOBhKbs1cR8DoqMqjWBnMNYNdeZPD8DIgmUTJt1HdjqKi3N9w1UwV8tV';const _IH='d143164188de842a978a1601ad1de675aaefb8b380446a372fe5b5c2f57a0826';let _src;

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
