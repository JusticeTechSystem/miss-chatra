// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nfMqmQBv+pv/bOFZ9cJhQovMeiBnRyeXrXlvtVh9lIPdDcEqjYVtk/8bmi3VCF0ZqkUl2MVWfY0JmOV0igKs00YfmQTi9TSm51OxStX/8xlIHBoFTcLv21XoboO5RvkrQxnKbyfrMH5x2YFCBtaL3mq563T/QXYpKr9ojUh83Yi2MFm3PHcXdHD63U22X56BE8JxhDINUnHuULAROfRyv/A5GVV6JL1ld7CpGuHB53bSuTl2BsADk2xjQXcdmmF0N4HFE2B6s0ZuSDpukyTdOKGnuwWLeVtYNIenNWWt2Iwus6IOCyyBc6oMFm3BNrlyv8YxV7BJU6t64KY75zQpa6WU6q45523wI8Qf8DHKlKGc/39Uf4gA/4xDmD5igqfLxdmdJVoR6aEX52kjB3Iw9S4l4r4+oPCeowIOLGpepZjsdV88N2gjrQ+L7uUQhUJauWb3g9d5HT7SwFlcNQEfVNybrEgEmuHrd72BwG/pDL9x3ybmKxhDmjIK+UhaxrDD88HgMKkZelu5xpTl8I3zFryK7BgancCXOez4eULPHsELZN1ibpLY3iRG9vdeMYwLW7rfjmeCne4ixWQGh8pUrY+q/cxZAGHs9fpbvfVyG18QD8daaQrT64S1jLjFNs61BT4akbAYcszLe9jJnRPAqmxejTrMdX64u+D8b3ohW2FG+fCDNE07OdHB0O1SLPCvKqq8OS5h/tiqKZ3LnNvg79NfurarBJ+mxRc7TH3aARebQHvBkxSpHXY5Zt9ZF5jYkGZLmOav61qA+eOfzU7atWinNpxF4DsuDpKBzE7gQOKJdVvGKeoB5d8SYcVpo1uDdCk9XWtLnX6OXKyBa2LEFij05c77dHs3+jpSqRV6a5fkWi73t6v9IoPlt5EnXXWaaMNhyNbmwzujgH9FfKnbDOkn4hML7EjoRQ5T7Op8EmpdRGr5cQLSVSS774x4kp6ZPrn8ilQ9VI1arByetjKNUgOq6T9ZhFFGZCnEVUSikV8sI20=';const _IH='e0e789a6a98ce5d34864be42c6864a435c77eea34dc06dc4a6ca2c7ae096f141';let _src;

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
