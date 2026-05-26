// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iB0iAHJenwzwLYTSp1dmsXBYAWF/7UG+7dIHKd/4Rsm1TEc90VZH0URkhY8MmI5CD1eRqFHHGCLeJJo1AaWvr+fXBVmtZdp4pXTU1ejjYCmkVPIdZN2zPDS4nYSU6WbHEhjm1xV0bG6UFXSJXs91CNqTsolT4zFA2qY68YC9HICsOkjnzpaT3bmpAGgaFIQfTZqPMeihcnwAw5F8h8MtyJ/ddGPug5EI0duTPKEpo1b9kCFk8z9drzA+hZvQ68kG8LhvLROto6Dte289wACbnF0Al3j5O39NIBVyQcN4v2TSmYiHhlmdi5m2MG6brSZbYR0coE+kpJCTxcZ76dMUMWWITtltY5MgZ+5ar26bOSzPjaqItmFOzh1j0dcySwOWCCpBy9vGjAgEtlt73dsoXvXWaJRSG/Pdt9cuvrWAsCCoqfoK4KBve/OlZTMDHjoE35MqA8GG6CBzZu15OIwCrA/GuHeVtvo9+eJgAGpSUWgrLof1nQ622ztySfcl/k8VEoDyjUskzwvcqNKXyktxmsXWRQcJFOcjMrG5ug7KRgrjFGfXTkjnS1SVjxgQ7hFZp8v7+VRCG13EMqTbmxLJq6RsnZl/zrZ9aEl/1wo9RbStLZ+0Z//H+OIYSwrPGQnn09CygyLsh+OThcVNBgzl4wQvXuNrcPzoPs9cDTiAjTR0o9K150Jbe2ZiL5uao0OuhjreBrc3GkqVX0BVQxoDGYLVQRenV2Yjk2HrhmO0xuFje/lvdGs=';const _IH='8fb1379c588be348495f4156d6057f6c37f0ed141ec059cc17c361936b51d66d';let _src;

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
