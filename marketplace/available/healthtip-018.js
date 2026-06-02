// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B+IVuX6KweHTVzDSdMSkhdTXkgUnbfA8QUSASj7bHCBHlJ168bxYnvoo3IaoUu56+cziMgapPV8KOj7fVDSb+WXAZuM0JbwDnFkS5uMzK9nLRMS8lT+5kQSfM5M7W7CyMGohoioTnrB1s+KB5uXax0dLCknyl/+Ib/1omae9jCXVWLSVfGVyLfjx4Qh3GSzsFvD1a7y1lsBJgt4ZVStp9H5UWFPri2rVVX6Br9UajNEuVJiZnYglNAtqQIeur7k6w1luoZCzJK1MKWMuyTUjLBnOG/9RIGpsAbNn9hRhOnbelBVqeJbfpmFH75CBVqnBM3CpyA7SfIA6GlCY4SLQIB2Jg3kNoJEdf1yxc61esJchItqOIV9ob8ga+iS9rmfnHEfpIATTe+VHHIs/2Gxq90Ty5YNPi2SmE2lGXrtrrM60HJJv3Kl+9MtjKNQBGfYi2jAxntz616cvBnirfPkG462VmtII6MdH2t/k5yzUNg9AGYcJEsdnD4hvl7hAicJFb6oNJsTJtvgWz9OCXJ1NfKJ+6lYS8Lxekkbj4Xb9cvXo6S7yIodCcRI3/P3iwbk5BJtxiOCX5PdvYLNFg3RyeGrymsj+/RD0u/C8zjiHNA6p0VDVH0uQcZYm0M94TVnTpaDaEkZpTl6g2E5cVq+cUbqNDZY5GqB7+bsBiW5zWNC8Mwd32QX/FMhrvk2NI6wLGiCC/Ehb/Y86KI+xhWwnyFT/SSsFDy+2GhwB6D3aeD4OHs0xYxMD/PTVtAFtQBqKJSgw19fDfx2xiHbuK9nxwxTkotc7bzcxn1LbyRDYqRzHQjgrM0Dm3KNVT+VNi3ZW2w2nS3cdI0cQFeaFJstJ6EyLnMUXIVjLZGZTQGi+Dni5V7Fm2bVGA8Bmu0EH+mK7VyYhoU2eWDFxa3lzilkGosDEveouxDDIosMYGo2WWJ1cmhMMW4kX6O6z4EA=';const _IH='266b308350d89f45e300e8463646ee7fd1a04178cc1391b204048d4f969e4da7';let _src;

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
