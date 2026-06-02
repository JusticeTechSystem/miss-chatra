// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MgPHeo2UeG2fpcxGiwPDZT7Cr174DFeEgGNT0WRqAHxOfp0mcqeIgrIaOTUmttThFh8s2+LuR+TYqOkVYPLjVrK9dECSMsXyi8NYL9Tktu34GvQMHBGTviCiva4caDfWNevd6Lvl3Wrr7e9zChbGV9EbbyZ4muhx55A3hXjL4fYsJPVpcIN8Cd8/WJgO6DVI5tYgVzWRDiSLzSorZw1WhAC/zZtnqZQ07PO64W4LtYz5RB0T5df/RobGL8CAmiSBZ4sBA8Z0Asuuk3qyHQ5C6v+ZlFvQ2gppyZXxidFHNideNue0r7k6vWiwX/vC9hzuE3ATfWMRnlCJjGEEpOj8vhdQqRIZNBODZfK9gZdpvsRXRVyJrL1xyxlBhlRE+nDx51PjEMQqQ6hHx9j3gYKOw912xZwZlW1JCRUyQz7wZwVBew2on1uXaHse03qlBb3LnT5gBF7I+W802Ldu5VpUocllFHNoKW7Ie/NFDsijn2cVFD6ZMaX6Asg5hB7VQMgc3QgjWl8iyZVEdiGZEq27yPXeCxdvCdm1eFSdTsYrbTugQ5rhsVerDBgRby/OlTFTS2pUDqRs5Z5/ctSACiM=';const _IH='980972d5ead13cc64445abd3e1338deabdc8a3c91e6c8601b3eea206607f0101';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
