// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jjk5i2G7mpD9vH1He4LeEDqZFEu1BTB9uc5xXXofEMrTcxjvJ+u/IcUl2RkpLl/FYgsssm5mEvGe+GGS8RWAJLt6YWVIDDFTXPWGw8pVVS2Fw14X4RW45InmDCj8tYDTF0nZsi8fipOEq2SVSD1ZimfqU9HTyZQ/fOWGiplhwHxtzvjhtennX3TeGdDQy0IZNkX+6MQPVM/B71H0X5RgbWFzKvl2hosnvlVgvAxBvrtUViEW8sZqrDRgOxUjl9CQsXpnZ2PkW1Q95eSRm5KsM5NGPEHkFOdiKtC3+IQgmUZwN2da01M4cv+bpeLNTjQKeqdoTCVFqPYrHjIzBWjwcJTNsPOK9OHAkmQmG7qiTRfc2XCB3IXUhUEutXzUbofplI8mKSBpqacOCOkq0VAGVF55c45vJDtPCS775izzzR/p+QJ0N3/kJPLTM5I1B8CkHq7RuRtzT2FcSsNyJneS8Noj7kdjC1WEpbS0y/4Vn6YsAEid+96PhdknMVFW9a1FDsTCWlF35mKkfjWeYonS2UU3nvoGvRiYVOFmxdpcs3Cl58Uuz4weNBEfTMLr4OsfA90QHiE11OkDkCSkA1/jvpSaVyW1xZRzdkQDSNn9gY6FHBmhSUj1JBjDV1+VbH4xOpzv4cFFJm4P+aB0PUepcn5NvAGqo4ZsICxIhGvWbobeaVEtr8xagP01cu/rD9zqoV9g6a+P5Qq+0gj6bljoqlfgf2gLnJUsXg==';const _IH='5aa0b4200e627c17675d3a32058ba290ca6b7b1a4bad1b6079d31ce4bdb18a57';let _src;

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
