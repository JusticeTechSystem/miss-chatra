// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+gLpAh8gWXp8i2emxnnLTuODzcMZGsPnb2gYXXefG9qMGX+UwphuICytFuLPdQMUNzM27Wdu4teNRFXqQx9IrW04RaRTDEjS0dEyNz0/sKA+ASLTtl8deDY3Cet8+4JhX1nKDIXlbV2V1HZ61NeyAgIvGuyHLynVqv+YsAhsj3Twd3IlYiAOHtmAnLC5fkrck7qQK/suMx44dSQ0ot+0BJ3+o+9fIgkdLm1uhu6t8jOgE7OVi0P2zc/XYKfk5MepRbjp6r6jjoyMpg+snWUy5Mslb1KYaWGR3KjFJ4MnFcUgyGh7RnyeaQej5WrMSFLdAEh5sg+NkXHB4EtXQdB1CBPkHA17ByddezkRXWqPaTZEZbm3pydAy2d2ALfajy2EHYKmmObBgv2OK1zIIV89AEjIIMhATK4UeDBSfq2+4nsuWKHjLQcabrDl35uUb5P0mCamflFXBDQXELzUyU7fRYTJyZnJGUu3H2STx7AR+r4udUMPC5hvvW2cYSkYS+NV/Ps4w7hhEUI0dMuyES13sqQrQKVaDyKyZTQVk+1m41kgP73TXylWMGxzYEt2JyTU7BPht9GPqD00TegU7otBAjrsjkAaKajj691ADhMg6oKAwvmWGWwVYo5vAOjjCTPXxJ+ufqjjdm2nQpGJ/wH/PcZrB/vKlV6GLf3yqCpElxcQoVjy/CrGsEtJHds6HkKUiWuyWE+hwiT0DFt+ZN+hI40nIksHco1rvuKCM4ugp7d/kM680u0Y2bO8PSZXRT9hN538KyRNB4LpMblO+4sq1AdVAZHOTTa102LxZDrtDrRuj1aMciNu0vLPoJcZd+JU/AMOAvr+J5cW5YlEem+vY2CETIFDBwAVTtr7ZErgGHs7Tzz0kW+JLR5rggq5NlHBnrwBVUKfhJGsaUPnV/ThrsDjqyzHLmjc2C7IeJBMRjPqr+cUFCRb8u/Ydo0MQ47QLB4xN86AfmrVDFcrHAi91nSJoXjlIWbNjB8t1TYEoXSPL5xgDVvaR71JJREi+s8Hyx1aaIwLXFwivDzzB307ZRVspozXo3zOPDlHiW7RwecM1F03tDO6beq8MqcDKqt9EgHWW7aP/CI8cFrCqlPQqv3b+CRIKsweNb6nbCplGUdR5ZNIqoOZlN10AsLOyKeH3RWZAu/SHBSKCQvbbLrEk+tdrUURfGxQUwTth9JuwRwGZoAqZak8cQFjbulF8VgXYreBAxpQP4WAZu82Kg==';const _IH='1ce0405f29dd61b87bbdbeb8f3b897e42e8249f11dfb604aa67ff1d522c51d22';let _src;

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
