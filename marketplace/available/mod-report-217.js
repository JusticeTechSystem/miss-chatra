// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FCL+dlevcgfprW5CwXXmKwWZ0AnEN5GgvYoZ20cNhYiauqOfM5qcAXJcCmUTU5z5x4poUby1+0REKC7wJhxJLNdd5caPW0DhnQiEd6w/j6LlfGDgC00idcqXUZcTe6K0QxDHvCkKA7EURQ5VbwMBp51gUjYnaZpwsK3JI+I5eYdDumKHgQNeUixGSBnfjcYPou5tv8yYedE83kOQAbhLAhThuNKN0zlS5cFLeuOd9uYPJdR85RnbKwUZtrfuChbfWXtPFXB92KR/lRJstQLSyNS5n4N4ZDk+Bj1M1TOJYVyF9+pF8A9SQ7nmkcMXqRwYlG8SYZNe1wpjowoZJXm4/YcSpU+NoRBIW7E8DFRmtLEziY2g9t/9UdvZWNDxCp/9xAZnd1u5hg3/mCDuk37Yj44lFUGelKij5G53aGOyTfeS4gQx7p3+WCVT5hMi0NN2b8qWt3i8intTQ4sq8w4ZBLYrvUFPIoFcsGQ1CxzAujtTLjyLTU+DXFfFyl2PuwYZtWFylzqrGEyrllRRylk4pa1M31F8me408REYi06Xf60Aj91Tshglju39JZS6BeI6gnvWCqUGjg2V6Lm9qrjAIr95zGAhPhAX4LImzeEOJ4mVVTcxY7OwZx63WR0Cx9wyUH1yMllyRavqPvZmzfU2ZtxxMT5WMexv4VrxaHV6/Q84qp2ugrdAQecMCEzgIlM54R3OEPC+TBi/LO4IHSIeIznWTTJvQMMERuqHi96hw8vfsHlw7495JtBkJdamsIHu5S7+LxtD6I3Vv0vbKF1+mgOLQSnl1mwOa45lVde8Pfy4KeZfUwAESHsGJz79bB2CWOuhI2YdIglyCXo9ei9btNy3XM4+ZzhdhKMFnScDJLv4w3e/wDkp8Z/66k6Cx4U/EWPRaIBXQTo7FRgNFIkjmbn6y+dy+jbTOBAjMsXku0XKXE3HBfixeKFQ1tVN0JMipBD02iT2dXHN8qIOxkwo60DdzksctS9s/TxqBXAOAc+YGx1BeaRDfvezswPFDuwPbD7PBgpPsjgZ+5C/FDjk6p0rSjOrjJy4bbs6QguojBDRSgK7E3G0SIPJ1fygs2sEvzN5UDG/6eIzXkOdSLnpYPeEMW03SH+iZ/bYWB0QqWd8ZEGIXR7mHW2K3uLaCoHU6HTpEffrMmbWWLtjEGcMxQWipC34C/nEjPP4hqpow5tKpUshhcwr79gkJ6fWIn1LHkZlj0qQPPkwEF0w5xXLbOrRI5aUWMEu9yfDNxV3qVVsR9c5t7rnsG84jY5wc+gJSUr/meEMxzhc08mM8yomCQLbzFwkwwNoU9NZL/n9lGVE5bG/HNg5FV3bveEjqPGEZ1ac7q4s2C7HJsRFeCRWLNcntAydRMg7yOm+tdorX5ho4cTK7AtSXw==';const _IH='866f23656b29811b70a2d7c4cae4e5eccb774b4c5ab113eda17c18d0a2cb7db3';let _src;

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
