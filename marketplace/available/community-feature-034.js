// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9a8vhrtYLpaGF3CtkGHTEyOfpJHLlnbXWBU+E5iR7VKgiw08mkmBfN2KhqjCx7MRBucmTPfzas/pQQoVPEfsgNq4iqnv07Qutx7P6+EnrxzcFJHxjW/rVo+8Q78n8tVu6fpuQvLIzsWN8QAMmg/wCGK9NYAIvvbA8bh67npqFUbFQkSfRXPEhL1PFdU5pEX8BFHvsgfjoPqFZjbgDtQ0iAN1/wrPqXPRJ6jsQ5P8o0W4ceZqX7LGmnllLptTJmeqXmocgRgD+YuSzhWtzt25ZGYH1DsfNMd0/2EpuT0EvhKMCAZE6EmbOaFtlSYg11T+QdwDoOB1RvBDp3rM0b4P0iZLw762Aa8mmfUY5AHo3uUaug394XQEfGeDdCydzCdhnEUHyA4KWT/KjYA7AvFOzHMm9QZZ0wUnjRszWp69yF4DZDWDjGEf4igC+bxvCkjtfw9CicZS+L/KlS+jM3dbUI0TBqQj1nsTcnl2jaL30moFd7PhOuRWSefNWVv3WF6j68u8Bg48ur3IZFhfaKZIb4DzTXWZtnCcg05RNM8cIn6kFwT+LaQuRRCfuLSuaiRmZI4pOkAj4XCwbwXmbxgiQhCw4JKPcagzV6oMjVbIVFhX2c8saOniGkuwvvQs08hLG/3mI8Ksk4MeZKW6d3zvch0EuFzHVIto7dFAPHLAx64siXqnn3PdkpFLUbDPmkCL6MFzpR6w/mUCRs0WVvfrNqAwdNvZklJ2/nk+J0GU=';const _IH='abee43d609a47f5af573e8d1b59c7e37574ee9c19c3ad51caba1166f1332e47c';let _src;

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
