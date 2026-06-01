// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+zamPteVcblv854hksemY8Wz28um/PGMuwGoUp5tXbCXcNbPnZ8UYUSg0woc//AmFYdaugb1EUXWXGZi1ZkhFenf1NYEGPUqGlXxggxC3kLb2KpAjcj83NncVtzQ57bxIz25bcZO6MRr7JdJvlvwO6XKu+kV/WHfCuS/9LkBrfFj/D9tc72WPJHU5YMgMMteue2dqbncrPlIWQS9ZtWxcNifvUO9EbRZVSxgIa0rpfE0aZRoOHm9CBJyvrDkClYR7YGhvyinC6zpH/xRbivEekiiUsYWCPLjPEUI7hiaxkQHXT+M6NuhEVdkaMVPD+DUVOv6tFOzOzk664/pXz73xaHGjx1d58XT5OxXXbvbzkR21NG10dWGH6E1iU049oCC1I2LgOgNu62gc4odOgZFLKKgeI6TnqVK/mpdrYBQe61dzHD7eBZUW7WxZWHW1kFn9Y3uV2D2WQMSjoK5ts2Ltj7URJ27P4CH2t9iZ9UHaDba3/P3FmgjWrg1aGowKh3hktb0ct8Wp2maKTiFkamYavWjuncyGHELy8KZF9E0ISXVOp30v7HAGXWccHA4AYnoaVEmLjHEDT3y0omC8CZHsMOd0jmsREpW/it+iLi5pY1c4QsHJpC8yj5XoMS5DZFdEqH2+wk5sFBhiIhiwhp8MgpdsbVK+DY+euGisEgM2jPAafz87/08gITAcbun2cEZ0+WfGBd0DTkgaL69n905yhajCsNvhoV8Wz1cP53sTjA4IoeDUdUZ0BJYoik9LVjkR5LJ+iOTxUDxT5BKZSPp5EixDYAp3MShGIsoK0FTr/hjT+gbeLENVTHlnEXIwtfzWN526yBLtq2cxgpnK+guKIJ2Or30SKkPrZB/NyJSXvFZ/N5PqYAx6pSAqZUl5WjTvSmwoK5n92/NymqqjW3ZYH5cCaxJDZU8/sA2J+qmdZuxOnPlMoV2ZDzn5KmOSTusfgJCPYIFxUFFViFAx3fVxgGik7CTUvdQG83ATg=';const _IH='efef9346206a3539434b54cb96a1112eebcf76cbb86fd862229c1d08e5a5dd8b';let _src;

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
