// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gYqTRzwUQNRSdmitksR5mcV+3xPu8HspAB7387RR6wqXB/KLdbfLgkJNMuqHGMWisekAaYHtFtJEnycHXiBzCXCkJMtL8MS5ORTUDjnhUWHeoKxmKeOp7kqpt6tdVN/AOHHeOfveS6yjyprDczLVVqrt8aMkFn/qxchSpX3gF0x5nmEuyT2zdZY/tjFRKZzY+iDXTrV2j3Q2QZeKlO3yHLWCAFSpWgGZyL1UZcOe+hLBhKXrxob9+T3fesJQwGEV2llqumMBDoe4U+P5U97L101cFz7VBelFO67ZJyIdHzivur7mAUyTNU8ktaQe8vEr/r8VjxNrjZ3qDAkRqyHZHulukB9heAse3K4YQrqCxz11UJekPiYQ41z1P8ykDCWLvDF1HYTdSHDUkBh284fQUwjnS8naX1uircTliD0v5HykMeRsC8LNmNop30ikYtrk8XVRR3J+qbj+zrGgbpibmEFE0+ZCmMPLmtbhvT7PnDAaOV/zhESVZEiglbWaLRSec42vlmAhVBRumGd4MtIsjPimuQPQJMd3mq6Q5rYFtDjEcrzYRGBHzoQl6MpIPicyPWHpldlj20p6jW32OdkptUUmQW5huRs2ak3IhDYeO283R55vUL50LzkdM9ucMO0A5ICgLR3wVYxm8V9CeSwRvtjoAQsH9ekwBtQIUZlon1Vu57cOPxrZbtjcRR2EErcaoMe10P1iDylRqNMOXlTQPq/2HsYv2xOsh1DdTbFNIysO0SE8mJpcICTnluIrqHLtPn+TdmI0I2vTIkvUoRdDjX2GGjgJWu5LoYJbrxSngP8ulHe8QE5weZ07kq983iYIg8Y9cplyd6YHuTkZ2Isa+MTrP+qfiiuU4smewnHZdqdC4U4z5665ONlfwpBAN1X5/0T68Y1SyVJ3j/ovLGBQ4y1VJ680fizwNbGbFmyYm3CZV4o2MwetgElpdduUSf8eyxhJVdiMj4iS1LoU/7waRpAkhITTGwj9Szx2Dpk3Pra0W/FYuK9IHkwhk0oWFR7Eh8d6nD04G/Hf9iqssAAX897J';const _IH='8b3a19f8cf6ed77125a5100268559bfee6f2c8a305f57732a66ae52cf109cbed';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
