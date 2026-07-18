// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYacJrkmFw1x1z8ZXlzAOmPMnFy+OxyMBK1LIHhVAJe3cHIM7H1cEMpVt6ds/IPH3/JofFnxaNi/f7KbEwhz5c6EDxCLyGFz7DxLqHUD70Fc3JQqq4gEwXTLJfO30Il02cVJHYrzn++alzOo0Oon27faRko7alem9X/sukl8GuSIYmVmIRuSNybe+TLi1sUhPHUdoyc4RRmMeXkzsnVqGguk93KeMwVMM08dEtZtKEsn9vUuRxnkIUrPo2NRmZ5Jn5YUdyhVsRsqWYBx+LQy0wVv3PmktYdfzNSz2EeXiQKJevqxm/7Fn3vxUnEpi9JbFULZgtP3XB7Dph895lQxR+Fmz4KPtJd4bS0CojDJJbAns7+Qnl5MlbMn0ZHlWJf+bPmZbqQEaZKGFGkQXfxjrlBTO8mvNynpKzuSKc9okG92GjayL1jvZYgnRx6FMQnW2LYS7qyc9VL79vyquNcHsczpa6CDiwIoI4a+l4fn7Wzv39bBS6WzO2RC/Ygr54sJ3Q0qsxuTal57ka5UcBMmuqz56CjxhZIjvd8oDh0NNeEpFPVfXpmzxUkct+A2j4hX0mSo0mFSUnW/JLGY0IJW5nTAvMqBA11+Cu/oQtrpmD7CkWekBGbjY2NOxQp1mFNe2VJrKyxtJgJnUmlxDiq2+QtwALn/zNi5l7vXfpBKUG/4jykmT6mBQ8lmCPKnIVchttjSlUAsgQ4H4uOUGblTml1ekjrw==';const _IH='5fa0f9a7200e15ad7ac87bd5563cf3548a09d5cab39cf78f4563ba7bcdab5479';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
