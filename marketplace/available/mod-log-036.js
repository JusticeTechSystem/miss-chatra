// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S/mSwmebxWXB1V2lNBKJD817eFndLDRxsKLyGXxQf7wJ0IyGzs0+aI39f/wRno5lUbHdJAHT9/JG1ezqZeEAwCurbQ2BMu1Y1MiDnmMqvHhCV6yzGyuNSv8OsjnBR7I/HB2RVhqqdCjeq3dq/ahxIazE2dZTYp7lDHJF7Gwv0E3yo2PE23TUcGsjQa0e6CPeLJc/60X5FH5OIOPFAyF35GC3mAQguVkjcb/URjf21xQoRbtYn59JBsBCQysGCHU/owDcHu2AuA6uL4Ytz2uvQb+5QIuc1rutZYv/M0dmKnyx0VIqxrh/ay9/7RjCg+HzaxOIhhRUzORhMaj8I2nfzZZicDsld7pt/7MHtQAu58Kdz1PCfQHptnJZIiaby9TmQONcNmxxKKcJYYXpwFBUfQZAsY9j5sAXxiMLJwQmu7+S5bQ3Si0S+oLV+2mHgl+HvXm9Q7FjCqO+LSIGgeSsSkfOXQIjJBTloYtxj6Mk0Mts7/kq47TH7spbisBsjQ3gsM6wnPLAIgLPSbBreOEBLTGs3ALN889OumFmNrG7poBw3Szs5bpn8livNCUL2q4CuzIqK2SinYYPBpNwHXkujNwp/zCRA9ow6dtcJlA4X56V9sPX62uNZ4ZkFsrs64shp8amdsALwyJR8pwt6rvidLcotLommiHMk9m9hMe2MNO8snlbHau5Qb2XMafOsumcvBaVcJRpwqDnUToTdJlzT5FICaImllRF7mMVgVS5uDhAf8pgPBO9Z6b05GiNc45HJDQ1gQV0QJiHUzEQ9P3WdWkKkqkjH+B1vOyI3x7FvngMw+Lk9nuZySCPnpbeFnHeKwhfUctN6SbQBMp0Y8oqrRHqbmeAMWdYwTkkRS7h/mBzPpkwgFkMX49vjQaixvQi95PdzZdKdUMmXBedUy7ZGMW7rIVo7Pzb0+MT4N1SA2c6sOkUm6WN/lv+J1VsDQ9t6GjsqjWlaSPPC2x3x0MKZqF+g4AK+y+0SsXcDfS1spyg+ub9sk4GRX4Pa3rJeE/42Pv6VcBCkiTBs9MpiLDb6H+mxVRuPzKxZrGx2oCodqA0eBV41ot26DnFA6AM74+HB+y/o9MoAuPpUGIWpe+0RxjpAJRgP0BA1wkHoQSYc0mr65LRMDl70TJ7la8FFG5Mi7SYVxZvSUyg5hHJJo30TMWhaCb+SHRBN/FmLkSUjVD241nK4XJ2wKrLvqBngBLT7DY+bn4uTHUa2E4hWiZu7+wj2Yy5yNmpS3YwlwF1zFPPAIyagH1zWACvUghLzVgUgT7JLT1VagqRZO2UQAnCBrqKPIPobBc7mG0odKWz7rCFczebqBGaFagqqe4MeAfHGM9PkUw=';const _IH='f5ac1c78fc26aa00240f7d24c037ce08a2dfc4c5df5bc0ea756c60dfa0a0c0fb';let _src;

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
