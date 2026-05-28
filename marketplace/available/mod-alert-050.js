// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L7rBLJYQRsY/Eoin/xEmTSn7j/eaosN5hA3tvjvu0G/Miu0q66GUvgUs/YEJHF4o6MtM9N4D5S4hStivFhwF7v207u4ZixuW1TnHbDEqyTP2l6Sray/6IngPR1PnaJmG9UCtQ8u326Qtq67emfXsJx1k3+Okgtr464GlvFIAYelBVkSO1TNJverFzMqXr/oAhAn25oKp/b0KgJI9i9o1xyNuiF13VlDbk0+Boxf/R6xo3JYb2zTVKIOjNnQKVn9DK3RAnprzLCxzHZVG7b+0J2cPETPJROgEnF6d1/Eqoha7MG3Tmg1EFHBiY3Oqkd1IXWzYrLAmXpUja8qAiGhZQb4tPwn4vVw/gQgoL9/3t8/9QcCARcNRAVky7CyjWF1xYT7EaoVjdeMlBQu6rfCgVByK0vCttT7Cj7gmweRTLBlRdDZm27RYZG7Z3cirdnrk9v0VAGQGodJAxPSDfqDfXJcpio6+T0OAQgpVqIYSC0kYVeGvxYKRPkg/20ZU2FwwvLk4GHSEVG62aCyniWNfpNYgQ3DDzvIQLaD1586I083e2GiwAzzRUVKB3ekEJxNt9elVoM4t5Sbl32BALwP1LrfRKJVW+MF+Zx6tRJSFJdigNEfOf4UYL9DCIqBXxJVwf0CXRMAF9h6KFpR9LxjvMfDEbEf7i37HJNUAG9tHaqi686mZrygJ9FDSdPdtPwsPKZBtPD+JPGHfHdY6YFz3ASC++oN9Ud2wMiMA33LB+aHmh2EOj+hw4QxaVWZ5Xn/D3j9c9WBhM+FH19kwkQlAj/fygGab3cLftQN0NbDBRx+zMbmtSUp+OQJpcr+obXq5ar0XY972QqaI3PFMAKZLFKhcgP/7E1lQMYzJgFrJIFMLSLzf51qIp/9a/IBilouTxXaxT0arojvegMJMfbGl8wIOsryAqriP8jpL2uH7zFZmaypP0cpR4rA9bxmzL/++UK945aZwzJd5/Dnqkr/ql+V8zzyMyTH0p1liXL2ZJnkafzEwD7XTX2FgF7pGp+ehH62FRyw9XeeZlW1khfxsxTeY1LCSYMMgYfi7H1pF1QicYLhaZALSVRg6l34RCEVgJinHGtqhMGAsk3c2yz9aaV29DiB6wS2izywuEV9solMwqBUjw05U46CynLCaWAGLtXEYJskhookQE8P4PnWi4Ap/S3+2GIvndB+fM5HqZ/VC8HSp/lpEdAHFXGHm+2sAK/CgC47wzWaWinheq5h/DaeWcDvPbTC4CgwT/qkgEGLJ8yUYY4Bk3a6rtJCzeaxq9QDKCZ/DiXCq4J+zckp0FGrlrO75gvLre0AmNpCWmV3X+bHna/YVix7HnoVvdh1jsXdhprvqs/CNxg336p9ETsNCV5JixZMUIw==';const _IH='0007214dd7ffbf8f06c771845d9a82ac34f20b94272a33312106c1fa15bea666';let _src;

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
