// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nSPxWzD0n2gG0XksxdIfzIspswIVNJ5aW2dDZMxmA0z7I5iEVdUsZ8j7FpYkAvscIBfNfU4gLck2oZ4e+SSq37cvRyFub2xEv44drxe2uuGPs4PxyB7OZI82tYkOZ3pmg8f4DvBfTY0W2/UTeB7d7unRSPSkfmJncu2oXkJXWbpO6DxTusm7p8pGKei6IggEqlb4gHeX4pxMrsN67BhaA9ytoi38OSUPQg08QaqUKnqPrPLEvo4D2PZmAoI0i4xkIFqQ8bMWMz0hdVoCo5Qoernmp6R/MsJHtMebrs7bAN2FVoCR3O/VwiyrbYV4TF3RTMfn7FrIa4iw+JY0IOXM1gfEKrlDHBBOOgjBU4taS8/j5cCxKtPtXyComfe4ksMSXHZHTJteuULMkrbPTIMHQohDeqTQXc9kkbqPugSCznylHExjg3XDM1C5HV6oB0HV0JRt31oFT9hJQcwSn6Dm29hHK/ixRjQA6jzYPVc4Omy3kLeBELVHc6gWasij1q3qBql4MPzikrzKdi4tseKzRKg6fVm3rATvF43+ho6gSYywKJQz/K+fhrfS2lZaVjinM7m7qscM4pqme7Pwz8iL8UHP7Tv88d14cXDw4Yc4dG4E6UD5qlepKHHo/hqLNlFcGwkb/+ZYkC+DXpa01GmqHfE297hl9PFoyi7y96MOsaxqPLtigr534VaXqxfDZ5L1hRqgvaU0Ma3Z9BYI0dDC044tyPhrBjwNxA==';const _IH='da0f16bf50a949684c5f2e6a88992ae1335c30ff61285c7595ab04a08f4d6285';let _src;

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
