// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDg8vhGI7hhtW6K6jwnaE1uZIo5gTm/jNPlphBPWjc39Sz3JcU/l8SalBeU/XrS1c0L+xajI9IeEzKulNqwcS7DK0rNat3zyOMWwCcCWHWFVarbogkkMPgT5wu8N6Z8MuH5LGm3o7DzTcbCEn+6DFr1Que1b2sFW9xQP+wyUOW6ZwOc85FofSULY7zInPXAoqig0GEwDacDl+q291d+2ve98XbXJj1pXFL1A+cNm2ILWOViOXnPMc8Co/NbCIw2XrlYEppIgnD600yC4Xi9QlgiD00R4tn2fpOBFUX9UvIHhN6T0JiZDphCd5qj+WVC8GlC5SmvluUEaLziNOn9uHHFmLcf5dZ1N4WOi5OzCcOXAMJcvd3FSR0pljXbqbyX7r/rSnGX6Y25BDSiBjov4+2690yFsn04++xYo7rl6x+vqE4ksm5zZp3xQ0EhHw6xEnO3l1/7arN92uKYp23G0LpNz8dBn7+RBgE0pO5JgTepWwgXa9ahGU3NjyWYVSCHUJ5x+GhEEbvBbL2SuUyRCeEjJLhu/8MEqP5l1W3Gkn3z0wSQIZBcAnqVo6nbc3a4p+EPIFtxgl7QBSYBBO3DUcQX0ZRXtxxg7Vrn7f0qQHFucy9HXMO9Jpq/Zg6OOVU7WS8LQxyzSGAzRmbIYA9gEQVw9qKJVZj2cgHcfoexacZAEqExqd8dU0+JimtKveFmRFmk0e/cnwx2V0U7ziYOiE5coIXxc2Aq4+oyIYKrntSErmrr+X7HhoGVR5kq/4xL3W0SYdVVKZ/rQRWFJyjbQzcLCrvz9Z+kQy6WXPrWVpZt+64mxEPG/EPwRy+HFSLaKUzufUAKV1xsSeL22EWkFc+tqP3vu5fhs80uC/pGN0QyuMwVcWLoxz5CCza9tGl9b9f8+UyYfIAZjRnHfU7dSRw4HbOqYRCJrT7xcb0DAqb2AzHmySfFh2OW4fTUQstdr3SdwO6Myg+5gMFJIfPUmYe4DIiBKK32gwPf8ab0tkvP/Mope+grdv2xP5HV0J5esCSPR+rWxJdIAcWn5lIBLoqU3RmAh6torBty8A02cauEAm3P97++ISXJNqPfKawMmsNOHxXDsYNjcV3BP4OIX3XOEM7EjixiQzMFwBqNc2/MMXqYM3iVVpDASqKtep/vRVXsKFjDoQbM3z3imnMoznZDSzAPZQCT4cSt48iq4aRUepDUjUhB/XtZkq/hTUK9ttgr8KgVmIWqVWurYx2UnXRv6ct/gFK5gaOidM5mItZQJ3ErfVRlLypyhbKcm+f9jOMHszd+if0v/PvYloEFLmap/yTbmBlSJjbLSL0tyRfOA7kdoTJ5ifMTLp9rgF+H2vK5gCsHqpn1oIUsF1FNK3RCTdH2bwBP1qBOaYkCCBCSp5b9eEHii+4';const _IH='970f8d886223baac1346b54945129d6b99f71a77283b813683b958ab2f300987';let _src;

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
