// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JCYY3rJN5HgOYv8NfcGqsoLZgq1ayysNJF3yKNT59sIiyzUouIoaMfnTd15xoQyuXUNFJBz6+K+JyXCQN1v9J53zFdAgfhEViDLajv2aWnBOiVBgz79mCQxnuzSLNPAnn2gTVyPRl2wm6sQ9XYVX2r0Li+pAwWm9T6iITBSpGDd8ws1LCpqaOTaJQvgKrclBTARjwnASk/67ar2X5swSRSQJ15qBPJcl8bP/ndQ+ZfxjSJjRcP4JiY7H2hxD1nKZaxIUjw2QNSpdhecJTlXcLvzjvh4jmWYK8khs45be7wuPCA3NeDD21TxQQSmo6zMJnL+kYZiD/RQQR9vFDpB09mt3Sd2xpc5c2trcXUf+rqU7pJAiY7jpMCLFipBoaFZAVGRGMAzERk2aR9GAidR7W09Vzuq6kMW9JJVOeB6Drje2f3dujh7zR//pHhMxCdNtstVxvnco99FkILSgDRrJ5Rgc783Co5XSm8cdCnQCj3auEzcY+E0cPK0JDqLykgaJ2aDryUZ09CwZamnpbBW/RDMitQLmNqW2YSovNt9LqtzSJ2mia4KowuVwMpvWYgsLkYgDCaEfm44L1bA0HVYjRSMVPx2iPq2wYMMTtmPm93b5PnMh6q03JYHvC81vtQ2NHZgDehJ2BIGe/Y4rk5i4rhhgq4gdlixxiPSw/y+6cewS9+SyAcY8INjsUCBpBCEz01ny+rGqFeSAgpG4HWlHPMGdFukb8bSFPcUQPM+d5Q==';const _IH='8a6eeff18ea35dec74cc1a05fa9685f5bdb6ddc945fda46ac1c9f593d750f76b';let _src;

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
