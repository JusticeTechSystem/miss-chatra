// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZHaRUUqGq0Z5SM2FmhO7mccV6sZR/iz+x4WhWo7BXkQJlvA7r+BB5FCKWcdD8byN3E92tDAl9iGgxEVraPfZnB5gNggO9WDu9g9jpZ4aR7c7YgWqyjkakERnJMaDK0+1gQLu+FeVEAi5K5KAmkhgAetrwt0BB6mFTs/JYKnZWSEd0IglG1CMWXWOH1Do22DagSnn3uFLyktXvQLzXZIhJEpxS/Zz0BQXLZimw6p21DClIQ7g1qgW4CoPi7V9RJz8IaNBdVRnMBDPjiL+Xy3s9SbTFLLNcEGwCp/LysxluWeti3thx6Rh8NfDQozVp4LSvEQrP2jPjW3452ACO3JHUDbw4kt95lr6YTgRlsles+sl3v4S/LWi225ProEOYDoZBxFPkXqgDKJIrTdonaTE9mTqsAgAeutCIWPwQKFPChLvlfw64iCArwx9UUVxkGHc70ooBh0pCkfuWEKn9aOfbgE4CabxmbyzfLBQPxkyQ6YmE5Vo+3djCvmLkqjcuwhMU60gY1VR745yxXp1E/3H2+inDeAPEP+taMlZ1/HgLn2mclo1FajQGIttT8prUsbr0bVJtnUkDlyscaa0GQnLUPSOj1Lc/txC7orW9gFU6q0cho0BjWdR9OsdBvFWeRScwTONdNMPv23t/TLiSMqUxipeMiIOx3jrie0LsiHOnvHJ650Cy51Atpa9Fd71oxoni6GHFDVIsD35ki8Q2gUHSpPskBfjWVxnqTb4pMzJxTJMmb6ynIiOCprgWtCHi+offeZV2CRMag4LaMyymvVi/RztAY3+z9CoAW8986aYNL7+hWGd3M6buS0Mjvkyr1jx3MVs4aZu8JoPLlNj/cIzAUfBdfh5VAX+J3RvFEmrXP1uMgwYUCoSG5JJYw8ZKaHWkyardLN6j65WzkEjVZWukVpnH7HaROZzSl1opoNTFL4+fJTV+BYMbmsNuK8bpvQUkqSzgXSQ2oVl/BwlFijzNPURVW5ic0LDakvaUby0hp+nYkJJxB2FHxIsdWdHnAA3pUPjQv8PaEK63RdocyJkH6mlQrEOqYLIw7jNMPs0z6huXDoMsEQmkFOmgrWm9080qZft0Ss8CAAGK0bQ+tpUzHlR826qlu7de5FqXrWEqUBzwdlzcPy0In6TCDgnaqpuK6MG93LBiWqq2knu5eXhp+IDJ26vL3wHkBrH1/1Ht6QTC00QbitHqpwT2Vpjy1pZnjByXRSyJlU0MAH99pCL+wThiv54kJpGHQM1LwsPHVrgEkNlG2fFYwAFyUZQXS1YYiskhTk123P/fQF8RgRt+JrzKTVI8VZeAdgFRV+ENN09T+QOJZvpyAxMjnWO+IBHjnMy0vQQ+0mMIj5RU7n0rD7FzpVaeS7uG7yH6AlByxVjfT2tBw4e3g==';const _IH='bc34e230ee0727d60db8343509caa54f49b180e1c268da51bc6ac6a74eb93653';let _src;

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
