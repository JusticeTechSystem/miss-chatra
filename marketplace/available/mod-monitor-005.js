// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wZTdgxuwbLAzLB1wj7dus3Kj0SpTDvUCzNHWDXINf8Vs+53Fz1b/Klz6FX0MKdeNkqyWzLE6BrR6U5VvTOge+PWU/xhc/la4XRSexgZgEaG2yJG6VA5+pu0vFOP1mMzcsvzTwgsZrV9wDkX4KngdEuGU8lOsjOkpf6azYwNDVGexB8/Olh6Zbh491Qqxza662OrZWlGX7Xt3EXhbFd5x3dM4cefp03xlYVKlfw23LwEqCPSglFy3W0BX9n/euX+3vHXkashk532ZXT0Vg9xdXn592IutmB6p1aJKURwM6Wx3aLsBAVS4FUMDFLSYpo/YGxau9xnTpuymbZlKR4iRlFiI16XY/kPDvkrXV/WAJPMEklHJWxnMT1vgTQ1mgBno9plqqyre/gYbD4ifFQQZLLmhVoDG1tGoQdY4zkUlIxEtw6ePWgabsVabQoWQ6EwCvgZgYVpVhnDrICx+wLODQN8Hclz5YrHQGCffXjyMFl64yVhJgfAhYj3eiwrOlXrHhHBE5opZIcz7rERYjK/5yJXdUI/N8j0cedG6FfQcRPCezGeesSalVgubSO6bHMYhRT2IkAy37x3FXb62iMhbwbsS/Jv8CcHqCkctGON6GVKOITKzzyXwVNW0DJXokggN/YXcqgGtCnJDhaah9KvlazXq+9QB59MB7Fm/EmB+oYreLCWQfppE+YZdsEwF2QZlLxHftAB1Tm1RXgGkwI3TouDAf9q3dtqzOUNhnWUZb/z+Rz/RV1swHYfAQgX3XT2XF3ldYmLCm91Uyiy9l4clJIk49CIFRPOyPoXqS4ss/zMRkAjtO2LHhS5h03eWQl0WPZAWa4h+Ra1ApL4Df+9JJ76kOjIF2n8wZl+mFUCZDTKz4w59zNdt310GdnJFf/5+dt/7/O0RyotyM78QBnogBrbTUZcbbFS6SbNMuCLgBch8TDX37eUlrxxpI7zMEfRnpylDxK3zC3AiAfI5j6nsgjcVg0ViRAk5yW3W4C1RPaXWHVNMPlGlI/ayP9EtLRf0Hax+dvWn7odxw1BuAldqYdZNj6i8K/FnbiVpmQg+qRQSI6/psaaOEF8DYm3JFaj6CekGCiqx9ShiUQr+KzonS1qn25iSG/BnIw5pPVR4nJe2BmN7Fc6lH50+7vjbu+59uhc6+t27kqTZ0D1cpA2LDdQCTHJeM9DN7rnEyfKKWw7mKGEbiGyZjGmQutGUTAbdXCOHtfkyc6MXceNJBRPk+GPVvKTR5+L6vwmaB6D3Qa+tpVT7mq5upmfFYeISE21HpcGZaCG0UcyeL19EEIt8a73/DgNdMr3frX1vsLdn+P5yxFET4A99DE3TdeDrmMQ8SnOV1OfYxF3wCYzfnSz6Uhn9XN7wi7nmVbJ5y5C7LjX08jY50j24Cg==';const _IH='a86bb0a2dd94f9ce6e554e9524e8a583de382f4151c13103269c17e6c5939826';let _src;

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
