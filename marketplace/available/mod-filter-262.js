// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ttUxkietcuHKw9s9tdBcm50lTnJjT6HfLGrS/p/vYSNwLYgA2i09+mtrfeOt5tS+zyEPZ66FeusMfEOoopxYaBtP6Zkw6BL4AAImzOegE/SrWrp0WxXwHc4dH52Bw8E+7sCkfypXxL6M6DiMvCviTjsLS3JVRnYYfN1vvkWxcEbBxRyopNXFsnqsKw5o5HiGVujIFPGM+QPNGfw/exndbB8RRfaoLceS1NQGjC+i4L1V/hVxDzLXIjsx8PlaOiTIeaI/3hOxWB2jW8zifmQ4OcSFl2MWBsHxBSoS1joWM3S7e/5EMxWtoyOjm3kb70Yjpj3YhRak7caUy851URfTDVrdfGuYyTHw4FyDmO0sc0UsiJ7AXAM0tv19JRNS7yYrM29jznJ6A5dU/ivP2pIrRjdoVmoEiPeKwa831W765dbTu/qGIDqin007v3qx9Hej9Q09G4N5whakruV6sUOYpDgLsQsqLErYuwQ4M5CzfIrAZA7ahfS1wV/NtMxd3vMgqdxKkfTO5WqVce0mJ2R4YId7TWl0DIYXAZRSA/tDLyNzpfyr97jxaDHHAZ/Kt+z7Qr91ufnNlmjFGeziVo98M/9/oTchOWyar+1SMTSS0XH+Oi8/gA5iTiGZmMyt9O4VwKFf2mhRLhpwqej5rhyWLTKbupv/FP7Q5Tsf1CZzXDm/bA+Iw9tgABiw07OTllsUjNbfDwierMiUUAJk0oenIYeAmJPCeCO/9UyE4Nh7QjuI1utNNcaNayDvZ5M/QhF8+a+0QFSauPxa74MTnyrzgJQ2Cco9nOLNFjKDSitUl+w84EpCxz74qEOtzBC6biwMxj0/69szaBmImcB2aEl7BtdBD/lJYc4EepuOR8f7+vUjQuvlvPicgP1CyOw1rv0Mp6E9uob4qacp70kVQqFsFGiBvsg9ibnjG7fheP7hD2UZRcvFGbKlJd4c2IHP4LSF88f5DLN5Bb+B+eFrOxk2n1GT7QzcU6fbhvW/cYySGQFWv+ZVjt0cTAAwYKVpxyxMOApeNEoAMHJayX5uPnczR+w6Q+EpcHIjttLFtyTlGl9q22jMKUqJon6vyJoOqBhA6CFDrPtl1XpnepJK4hXtfA/PkA0ar3kKz91UcDp2iEQnwk5W1fiQ9UNkIxDD0eU5MleDFfAWtwMo6xOC73oUg3p6KQnpl++VSpat1exfXcMJr8fJPyz/Ood9JvqTatfVfQnaSwfPZIJBC1HeRVks55wd/EDI9SeuOOUpiCIW3ehynUz0tgNVQVzdNI4UVTjOaeWZqTgxsg32jNrFa4y/KtfDEdz4xW6CRFLTXcXZnp0C3kUTmpHoC5ugPzJngCuhZsBLFz5WfPGl65r1bZUecqJY5GZANk9ARMzQ0w0lLnuFwLa/rmQ7AQ==';const _IH='bf029f4185e9c4b9e8d1a6bb0f144b8e8ebc02a8ad7eade6350f619cac6c3fbb';let _src;

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
