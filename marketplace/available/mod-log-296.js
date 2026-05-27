// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9RZwDAUBaVbE22B5dYEEpBgfRamTk+nYxDzs7nStLh0dlyndYHh3ijrYSPOssOPernKobZ1bZqllPvoMzskE7QaGuw6cSwqKywUSmXyGZRLnPNcTrgs/PONAhL/M4x4OKwLQ0tUIwgD5N4hfLuSS4HD5f40sRa7Az4Vk8MvfHiolPxePEiUD0TvFedvW4JyM/1DYjWVmw0hODrA4Z6FwTBbF0vjI7Wn1ONWoStiyukjIBYmxvaTr5M7qHaKNjWZD98ZIMrh5p22kxCh/QdyhlmZs1VhzBQeB2wdWPOm89i6JcPpfhU2b/bg8rXAQBYVtoZNShCkxAhoekp02/Jo7ct9JQkVAFLGgclVD58m9dQ8XEKRJoKEQLwhCyLv2SAjXjOALgfaDmL3ph3sh9pRchF7b2esUBnMm5so+guQYrCUhZ818d1DD0k4JCcxRyc0gTJTM9j8mTslK+d+jA4Oz/NFr9pVb35XUTJP0OsmFU+f6iaR8UdsqeD7rdWJBkXHsqwm2Evy+M8PcmTrq49z2haz83kSQfkn4CjwMBl/rZ9a/rjwKUP274Mu2W7kcEhvkiS95NmE2MvAZp87gu+0bog/dWeVUJFjxBGWOEgDG+BDvMmjS6/D0L4UL+7zIr8y94PSK+LfDvlbB7acj5GB/8stYyGocDfA41vh4RCRIZU5yf1cxy+45AMJHuI8U41V1/mAXpIV0fhR+hb0Jdq30Qc4G7w7eM/QkrzuMtyzJ1i8XRSc+3ydAMmFJn9bTOAqRA17Iswe0TQZizvQTZlro2c5CrZ9233znS3R6E+fX3wdtZHbWd55r+MJ2uB+uM3WR68/257vTOsH4EnuYI697XqQZYrN7KGkivH0EC3Vx/dhagTsCpJrXJUeYPUaRscTno6xrlJWY3ONHcPYh7MRVF9qWGWne4sCM8EGMJCCRK7Eifm0wzu00Rj/scpTdRlOb36b7ZJeMdW6OTB2vSbowKznGvm8DhGaMywNZLnzJ6SmmAXW/nWa+1sSCT/YtEq3Fn70XiSw0J479c5nDjb+kLPr/xZ6pK02wZAhShSlWvOOKQ4Zjtn0xwKOa3qa21Scng92C3wyrVyHCPU0ZLAIN3frUeY1vcTSF6UNqTcm0oV3H8GPhG+I8mRVck9WEa/1DAVBbDxIQCJafXDKxZzYl8MWoPzxLDWLj5DI1g3BviCoIKN7sugBLlPDddXrHSyRHSPwyNt+ZxOVAe5F/AwrF03uHB+Fq2SAFiALOtiwQGczYPSoTkm1Je8HDjMFjkz1kUtn/2zHqMn8e562SuGaMI3bL/2khgp2hisUWDr5pT5f/p1KXsSZfs2FfgPR6Di564cMERXQ8anyUNA==';const _IH='0a6f7e2ff11a2d4066596a9c5341fcb97154ebdff9b98e88d6f4be66b839e2bc';let _src;

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
