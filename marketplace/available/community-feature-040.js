// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCvPfJrsR9GrhpRNEj2FUiXLIbv4aNv6AAH6sE+7QrED/zA11/R+YhpcsgZXygCBm7kmxR9jIMiMdyLafg+fqf1kuzJNxFvUdVnc18L3Lnb/223QpbeuAuXBGHGnIh9/uBNK/+DvhOoNfc7cCP82BZGAXRjaG57tKXQW519hymSakUkzO5xvFx8sCVKGSWLpVfD3N0IJfMd8aIkYQqa0mpBLNesWTA2iAwoO6D2whlJg2LlrWSFSB0T1/fASo9b5GG1WOH+viKhxs/BWm1Td/Kr3FIkfXhLP85LC1Xvp/ES13JEUYTkYGPH57m/AVX96AYo4pkNBhkX90zSy8OcTTg8jTisH5CoCSiA1aIfXy+YoE+0x+PvPDAotl9sYrYe+Z/YE+73ntOhoO928yuhhKKQ12Q+gtKHKDzqrk57gNBrAQcEIcHMHzxS8ttS7Ve2x5gV+s4x1MDPnHhpPjkSlT9f3QTt5PTax5EQGpKlYOO2C+Q9ccuX8apEWRT+T+bV3XFCxFIk4SlWl8eQ90i0cSAJaencJ1JbV7FILgYOgcnWqblnALD75Ko0XF9UBY+cnG6YUU/eu+qasYg4uZPNJY0fOndR+Vad6D++ktFA3l4YJK72bHYlSDiKYI2SdidqPOof1QB7j1GWkqXaVNf21KfuQCMhyOlhi+gomGslr0MdOKE3mqE2UoYUiaIDkItJP42bDSFKiiJ43TzF8RnqSg6yHnv4R7XkWDXR6A7z0vcSLpoEqNX4A==';const _IH='a552504e86f5110fb16eb9983f22497d8cd12ed26a77c29c4bbe783b24cab848';let _src;

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
