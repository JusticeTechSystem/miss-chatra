// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7lOGMQqCoKG9YkZoYUU0mWg0tuTL5GDvjuZ/trKLydVrWHOgD+kcUCj9ik5WrAY6vWgBI8naPwXQnF2uSGZ/oFNASPATe1GurlYqbtWZl7mfnr9KVsUcINDSMFnMS1SLqoEoNVW5mMVwmQL2ny+KiXtzx5XapCf81yVjcHPAj/HM3fqERWR5mSesG6O6dtXstTyBlTFvZzIzajhREx+5kfXOYV9GN2rVSZn4g/uRYYAF7+gFPsLDhjfM4pGZ+dATw4fmL8s/6oSkAei/imlUuhIr+avgmjk/TCymtFxhBp8TL4SBoSH4echAUBDwxKmF+YfPOrK1s9G8NCeX4h4RoCURc60zZIQq7CZ786BneG24kT29WAqd0Z6GgGB3lyGt19FGwnZ3eqaJrHWB1L0NGWeYvOtIOdRNsNXUEG4myy7IxGEYrteMtTMxD1/tQgaN/Nc+Q0CJd1ovicuGcqR6gT76g5Az6yR5uMHo3PVYVmA7RDN1akyaQbUUTI/XxGmXV6+wW389e2ptvBDSaYej8g7FY8916G7z4rBwCD9iRCP4Mm7l1//Ca2rgz1u5lQQC7F0CfdMNTR2osMVVlfvOLsTe3sIy+QYAv/ki0gEVAK53utgzoUWfvC21wbgV87YBHkJglSjNPVv4aOD/6siXQ2ujqUBSM3bQ5+1JZEPR2li6crx5eWU6dQIbACa/S597/8XIuu4kZKp5kuEEnX7KNiYbXoame0ErG5IpL5ra40tbM7ezsKpkO7h5Vh1se1PLGpqWa3oq4RKEB0yrgkjq2CAd1tCTYuGAOAgSZtS185x+DMaIeWtK4PGWCcGAbI9lVs+JGK/9ZoX1zCAuxg6mLeuIMquTJvxzmQkbHgUU3650jmwO6j1CMZGoNmHbHTiUL1MBKRJMyC0tutn5IQnjWbaewiuHguJzLtX5UJA3SZc76y1pkiFZgB7QtSZcpz3mPAkC+siqN99EfqNeu4iadcVpYDNF7qxmoFq7QjuDn2SzCQP8EthSLtwZYkQJzlKDlq84VdXUaCQ5uwSpitvBQw3/40GscNJm8VaEXZDt4fUOC/YTOERQeV5bROsvDWYazmA+SOCtqLhlsrJeQWUDXCxo6ejcly8bQeFCBESZ6P+UE7PvNOg6692fx7FBWwKvJB4WgTa6OiKs8XukdfdV90zcx+2VlUbhP1xMgQN3OFY6IXO6FsZ8YaPpDyxlwt8Y44AQgsLvr3ofuVbd/ySKjNIApeB2kSxJF9z9Ls32+esSdDtJGj5xRnX0myagwrK3u8EBgbYrusZL6W95zBvslmNllZX7lycd6M/bj/gQ6UCNVshmfWg3xK8TaH0Gvtow5+T1QXkCogxfZGyVajwQC093BhWdAz1gPd8HlAym';const _IH='38e807d1342993aa609bd9d8cef2b544e5d061f352d80549bb0ac8c0f744ef3e';let _src;

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
