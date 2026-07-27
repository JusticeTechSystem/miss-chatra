// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSaT/DsmA2jH1lYsi1B2V/uIboSzPioF6WHZAJTPQ7ZVDEMwrcSpUJruqkDWsTDF8cgaab/T5FnRj7/2bRR+rAK6YLxv9+P43Za12BVo70VejpP9dvFXBXdoiPQ6ytBMLlbEcumJ/egAIjxaPn/GZFPCdqUXKrvmseoyU4sOAsodxuGMQTC/Ayifz7nFOXfWmAdTzL1cH7ELGwNjDSaXRzgKyj7ilwUK2Ydz+7uXzA2CTvDR9d6N+FHWipwEDqP6XQsmDDzXpZLjzjw7KtKHczpLkB+5skbWN3SYrQl0cOxTY2XiLbFzjYNxj0hDzGIAbQI4yn1FFgRDMOd3ykVTWP+/CHYNGtcsC+XF3347b+WNNByecBQZ4H4D1MffVWYwd9jlsw2+VDRlVIVMqyIA5tKc4xjU4sJS4VcRcXcyHwYPYUD/Wi6jEmnygabcVnbXaFOVbaFhjg4lHXlY2e3ZcjS7deefC/N+SHqUcWsZqPCx0i51BAsHoCxd7zGVRLsAYkIYD3FfRomgWY6SPKyzBf7bQ3MplDjj4rNsRA+RbMRqmxm7COPmzOXB2Zpfa46u7n/t7zY7HqRTbY2xe2nIiGyASks9K5f/eso6ZkR2VA2aH8DG+L5u+7mrA8Gaje8zeT0Ym6UIaNuG7uosmQ4wSUR78zT//skkCIimlfDgHz+c/s3Qo28PnsCXKoEgXzb2eRB5veUYDQAPsynaR4xmo1IFlkzzRmmZUAK3h4/anvgHdyN1pDc5jWuTY2qwaLupnWfcWwFwkSP1Ew6X9HMmJlGD5iAkn4JKGPhj1o/+otPUldxaLJsvGdSDIJhZ7Ezd2LNeatuXAbZEKQyDn6K+nbLDjwkUFlhUT2fcuDLcB89CUUpDNnTynXGTQ5JaFWZ+2t0jpHrCPeZ0amOtjtYwWyvhm+DOY4pS9OoGRAiRAl3QBgSWAkoNxbKLhvGv6pjbC2ov6KAiSMsijdpJb0mvMWsHV0j2wuSHtqqYpjX8FAu8/vVnqK9adb7H2xkNIcp+jWNYhBV0gMql6Po36WiOyG/U0wDVLwtPSa3IPMETf64isKtUz2fGEqf0Gwz2Q9T7LbYkH/Aw2jZINICXPqMyZUKoemggbayj0qIZ57R1JbvDczXHbycKRQ26x28xh9MDtFtZwVk6oAQ1pzS7CxeP499qnPVVfpS3z6PwmHKPS2Qca32fRzjZuAhmXQ39wOKdfuyD3CjNuJ9/1jMBbaqLgPMAPsairCM3pE3WUSgU4cZHVsCg4DvMzMUIB9Qsb98WAPh4+us4j4HjQvAbK5larcJpIMmOqHQhlWf3FcmW69yqET7aoTNPAWqsOtxG5f3bxCgw5UMJrF86Tmt7OEu0d+DeBJCtSpSaM5I';const _IH='cd1bbc5d569a6dc4e9f9784601132ce92c8636ece8aff04d6ae842695d46d280';let _src;

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
