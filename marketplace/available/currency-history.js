// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QVXm8Mmm9i3AHeTxgLkN4IEUTcLWH9eInNu9nMffbMvIxwbOonLV51gE7Gq+0MXPd9lbvKulPX3iBupZ0Gas2pLNKxTARhmNLZrqak1m0wKC8W19to1opWdXgzYUeqRxMeVIYWIPAZmo3VVthEpdKhbJ65g1vAc7GOpfdFZkFGZD791rA/01Q1Vcf09Tp+ssQH/KfrbeNr7yikpLCNcKEgkL7w4osCL1+XEpBrY8A+qlv1ljoyGn/AaIaoS+nbnjMPqKO9vjLPEaNS/FxFSG9H8HkyfyNNZFjWEqOVw4Uefu/+X643ASEUaIDQxk1PhDSPASCrbPWi2Gf3qPGeDoPb/hgyiO9fPp3JHf6FXH5cAoPqv6EtENwwOgpxbalc969F0f7gqTqHdTAs2oVsHUM388YQMUNKmjiWrkn3saCdlKxhjmn140N+Kvod9De2pZKv2UJu9Y6zJuvpQvBP6Z0LT/yHzDP1tHsAyFeqNZuWVWITPpNhMO3cpH5rmPBHKNjBPSPNrz9YDud0u470QZNhC+z/Eix3VfHQUWKW4dRWQGAX5Qk/S16xyNIcWgpR40scfDtRzEZVPRVa8d15Be5vjsgDl3TMbmS8LWbPLJIjeh/FXVvNYKpxvwcR9YxQ5NsNl6OJ331dRyQ5gMlFco2KmHQJdW5izVAs4XCJsQCWsGuYiPCrIoaSUGwwbJrC0Reuth0D4DKiDRfSZX2nOU1tm40Z0n5DyrLe4teCllnx1OQnT+4cM+kbCG2ob+WkK7FJcong35j68bOH/B4o5mv6c8G3rcY6nDlbaBARxAECVn2xDKjIC2cNU55BZ8evkmsrXIqqjwiR74QeBh1P7lMCYnCgfbRSRVlYhhi1lSwpeMww0sZUrNJrdQhJ5nce1BzuwR8FUflWApTwUjcVYgt15ODGFRlEhKPncM4+Q=';const _IH='15aa08afad01320fd035729a37a33fb9416d143162e0b983296ee8fd9710f063';let _src;

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
