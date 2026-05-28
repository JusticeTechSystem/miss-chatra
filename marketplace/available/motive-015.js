// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CF7XDeRkKKfbMOUkGhsTqdgsphn1H9YR0ycLAgI4aUnL2c0FhkU4qPAlBm0wHYFUpcVkVOC2eekcLKJGRPhPM0y7GkDp7MAb75dTfDJ2/Y8hLdPE4BOAaTLujQnbEM4cxQJBijNDrXmjPkhXUPhG74jy+7AhCZ1oi4DQB+aEGjVQADxMjWoJ2T1570XWo/z/FEyXTX/ER11wTkSMISWJJbdYvQLeipGUzc/pBWuhVHje/gC9WvOyk3YCipGKfleaPWhV/Sn2kp1AKo2vZ/o/dctN3s6HNDEviXpevXCi+U7c4O+3xOCj7DExKRQoOB3sAuFg/7qcgGExGj1BKMzoa83+uhfxsemewFLzYiCRDJNLs8pQJzk/BITx8xlLA+/0+2wo8ugJQIplhqQmB5kRpvVQp9DnuCXEFBKYpUAhAxow9I9Wq4yAH27qSf3UWto+YmKYweU4RTiyQqPRjicGfWd76mIAbKrJR7JhnKHCokGfT65v54VEwXqqy7D/H2We0OyXPes9kUiw6tXiXEMn40LIsIongKybHAR7N+AV1gWhJJLg2+Sim+wNOKYo6vxE4puA10JllI92kZ+3b5YoTc8WFj+P4u3mdHK4HFTFPL1T5Jmjtreai2Cnj7B2FUGdDL5yJWKBnAAtFwKcOkxdIP8fUxo11Y9n3e1iHpTlZZRZ+1mulNClhs+PeqMQy2mrEqpGdQClJBgzOCZ2cbWKJAgW9Do+CfJ7Se6DJPvFRyAGXYh6EpA3WYDVUdghvVSqf9wOUNaaNwT36fvw4pzG6psyNCAdBbbi7d3ni7C/8Ilv8P0Bq0yFeJyt9irZL4f8K0Wfs8u8V57qhuJ8APXbxnCTM1aagX/dT5TDYTjBPI/ZdimveZoSd+ouusCBGbnUQRmbGbT+3fKU8Ifjo7yPF0/3E4D937sYGQxbiJ/xszp1zQ3NEW2TOgWxpCbyh6m3OqgYshoyp6PWrv/MrnLmsKr6E5HRrHT1/z+MDN9VnKMGXJYPQk8Bwy6+T6PduITaXiVexdEv6Esly54Pg4QOdWn0';const _IH='9e42fffe134b4bf8bd4389b3dc326850d544c91d674a5043730afd31c7740196';let _src;

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
