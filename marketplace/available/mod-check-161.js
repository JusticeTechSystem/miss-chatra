// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X4u78cuxxdSAJbBkcANX2lfDo6BI+Xpwwf468KylAWge6h0IDZCbVuNk0URAmh6U/iRLsD6BOhHpE3pF16B6ygmxo/F2+qoaoBlXqHIb+YSPkuU3IrZl+TosYaIWBmy2Th+0q2KkLirAZ+jtAm6NNXQrdumbNms2qcw1IvN93a5khZxJfbK0SU6BUS/XWbjDPHCbXR/jIfLXBltKzLd6OB92Y7708hAfVycwCI4hs66/kcAI0+LZGD4EUZ2bKrhtZ8DktN+DHXyt0llqvVMJ1N4YNZzbUn90UC4KjnivIvBvQ7gs+FFmqxlujAqnWA+dgB64/5fH/+hdQRiznnMI5LKShPJaiTIk7add0RXxEdemy9j2PzXpxahHMuuKCtsPbCoGjiVPig2xYgwC7vz9oP3vdEP1Xi4fckZJO8bvHOguByi72+ZSeR1wIxOzfdGQdwuHI8eBuwuVtNCZEP8ReAZzQpT1Ocr/GaZ5uiYgkVkKaMcwgLkxhh79mLtQIl/CFrTyMWweoFxOWLSak6TVF1znWkHfXRzyNB+ruUu78qsXGob9n+mI1B+DnIvHDbz3jnAbmmQ+9RZZ0LQ0Jyh3JJSJ1WCn6lwbpE1bWi6OYbYMh4lvTuESCYzD3p0OH/8Qii+GiNobNh7RJF/TakIVLRRlawMtUylVa30hnpqg9hXPc74puuIQqZgtUcv2afXWiExeSqfyIgDDTd2fBxO/OFiSmqVrxMSh+phxBWpzFhW7BNG9zSZA7+YU5/5KHeVqoSZ5xJqSxVWwUGRgr0h34Uyx95tp9Ut/xNbcfq/CjXKbKoaZOamzhprvijoj5MaoGiQA726pLgK9b2Ng1sIUWmLulBbgUv0eoQezoOtLWANfKzl/ZzY01KlELVu/vp5DKhmhnre5T8j1qpVT99hzZFzvpbegvUC73NfuCSSg4ezVDxQ9Me0OOMc1DSspfMZxeCbdvqiMsTTBXIAdy4bY7J7s0zQSgWk8AVhCKRZ27a5oDe2RrimBp+te6nPfATPLDOUsppiTiMkT8EafzNC5Tpk4h3RVRDu6x46J8zycu7PsZF95t6lz3N++kVrHSWOitJG80FvOUMYbW/MgeR5unJkt7eM65MtaGWwvIS7aEJNCZn8xUVOVWc2JLsi24vKEAlUOjBp14e37TTr9gBxx16ZEO1RF8ZdyoSBTdYERn6B4X1H3evSkif7agIKiW4RyL0CBv2+bsHNX0RsPCacpqgrBqHpMouw5d9ciuWFPmIOselTB46hFA1lYSazHxUc4bvwSypg0tkWIPgvlM8j9EKBIIBwMdPybZtDdWTigTbGbeoJs7LHSF0OGJd/g6atueba7z4y317/wHFwWez14hxONPfkz291hNlJgeN1Y';const _IH='55aa45eaade9798f092d1ada19c985b611a6b54e1af2c1b5fb85b30669421942';let _src;

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
