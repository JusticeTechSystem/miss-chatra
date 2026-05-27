// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B2ynOzuLTc/PRMFnMZmUI62loSG92kvZj1DUa1MixA0+B3pdX3Py489b+YvnuIxJAmESTX8gfpuy1PVbf011YQs53svdeGb3e+KweBFEOFvVPVCNWvHzuvCwCDeQwsNl5yX79CxUeool5wRSLfrMH0fwyk1TY+Caqd0LBwuttdyRxIvtkyJ1MoQ+uwTDm184mT3L8cIfh2CD5EqoQXarbveZI4zirwG3ZFCbPFBH6sCf8GBgkP0ria/R4fvoTFAVmd1LSpRALC1VF29v1OTOmlCUkDtEVhrwasmR/xKtspIjhvl8ZRN+qMEFAdhA+VNxwly2BAsSKRxvlDvSDylW8Hsl0qPr9Orgox5yFKDFHLviLLRdq2zR3nMtF7sGAH4YkdOcg82zCcRWGcMR9XEOnOS5AC5QaVCBs4EhQ4gA+NdDkHCxXuMeru0zmyYPKxJKONCu8UyIPIib6QmOFfE9HOBG2BKBVzZeqBn3hExGoSIDqreg4UspuWKSbxkJQ/My7utPBb7995Hd0XR5zkddlyKPcC+CdstZwjaKv9WFeV7kbL993kbivzWcbsAeK9/o1UW9K1dHTJYYwS63Vy/6lCsFCm3LPCz3kFtGUSUAOVzh+YSaH/pe1ryF/7XFbc8vkKwPlxfqWcpl1MPDdQ7wIqH8oOmSEXzb3GZRKuL5TWPvaBsbwkbWmc+mAwQBdosqpjlUAWxl/i4pTXEaqXFgDIqUx0W5YEr65sQsl8GzscxDDEa0Z1y5PNOn2MnXvtXPGNqDzAVjMriPooikb22D529A1Go0NYd69XWOeKRgyKle2QKfhse0I0aIWCenfxWXvYMj5aoeMEWtG1Ecv+AuEEuxeJZboTchF5d0+WF6sOVCSPObPNCf48eUL03DD5rwsARZU4HywMcprbh7HlbE18Tj//Hw7YSkj1KaYKVAOI1lC3UhubNeIg==';const _IH='e00dc5449fdc00845be32953b10757f37708f57ff7e5cf9726685d878520f9d2';let _src;

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
