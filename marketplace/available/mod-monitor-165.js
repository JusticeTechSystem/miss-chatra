// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Zd44Q17qnu0ZD/OMstbW7L6jVIoNafZEGLaax2lmrmxh21180t7dryw9/EXwC7+An4qlwMOfP8YgXKutLVOTCnOW2VCQuuWn2+VEsw6IOJ+/dsE9Xqc19bkabx3r5jo/mpxKhbqylZEDY4WyIpoB/PJ9DH3cb34orD5cqYhl583EGNqYD9hsGtiPuQ7T76POV5m2yc6z2PUuwBwuMVRYftcPa+4uzehLhnFjUyff8zQsRZO47F1eh2iXJPHKninl9DrtJlD/Xc2fNXriQjv3hGuSA+mJ559iWklgYM8amUfpS2caMmsT+SFdWDnm1e4s31vqX/EfgV0t7PYXLERhTWhB37EEAt/0YJcUH/C4S4UgAnDGzkvfPtawTd8e/sFml2sO21jNQoaNB595WLwx5ysu1ZSnebtZl40kELJD1R6hZ5dkvfX3zyBydv78wzr2wer1kIgCQqRzwGV8SyGDotDc9XDXRVjlUuxb/rYZ6nm3YMN+B2d+iGYLwV8wztnUPRkEjr6svIL37nQxBO73qopKNWDSajcGjxgepq6q3zzEo153zEAVMF3KosKfqlE9oB5icbf6d8LlpA90Y8K/lMx/iudqVCj84WhP0QLVC1nzovxzNZ0FpoQEMwCZRCPgspetWAjeyL05X/YYwRRljPGbeOmr1+YwE2XEgN14p3irKzDmvJ4gTSKYkVMC2/hc86onGPalm7S6BSpQL7SRkUrEtr3lt4ZJuI4KGEaPHH7pcbUXjNcYK/LhPoJXl1SzPaPxWI1YKyUwWzZQNhPtxVoxacmP5/me/mHbKKiDh2FUBa6+7rTMS3gEzdHt4C5663yow2Qv1/Jxk+t3y9IM7ARrQoxxzOdbcurpm6HGKvazUkRXeLZN7oPlwRGENWFjYt/P7OTPErZuMt6MH2oVBccplcX2jLaa8xinuXM5mBtmt3GcXTDA/unM8s/sZLNLHQS0FhlCpg92vA1GC/01+bhpzCte5Uf9df9YrW88+j0mJYoattUPIdHehCdrDksf3THZobZShJJK5wcBJk0VaTsXb5qZ5pVBD5VtNKzAQDwS4rZRX8Bbt5MJ37s4Dcm4X1GuoRhycpWYl5h+aRZo1A7G+EXuzvjilPEFwAHGH5UeDMgUgTO9ORZPrAuJnufMgIcmS9g4VxNQSm055RFftmvsuoGu44PtCDqAldGWJhFSBtDG46S9GCbxs0ba4TxJl2K1GY2BeAuQdA1IJ/eG1E838br4QlPv13QgxRWxJw6tvXvDqFBFvhdarL5/f55s3QLY4B4c8O5cZmAdBaXRfaCWRzHy4A728w+tJG+QCOi6vSchT5wIBg0A1PlOuKrYc3nDDLR009ShlXwZophjedhkccYWllc5UisqlINZGSO3BUUWu51Wag4KOQGjokLrGE=';const _IH='034bfdc255004cb1b7b9d4a16f99de0b3a02f3a5972f56cb2034bfef377a4fd7';let _src;

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
