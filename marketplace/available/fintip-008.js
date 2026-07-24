// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaO9rADc9K6x3iF7xBHNek+BYqKkTqFET5Wmj548dI/qM5dMBCUDnLMLj9WNHTIDo0JtbQpovzA8l7IpvmKLAzG1oLjAlj2m/1hKWC7EonboxqifCqHdbV1gk+4cxwpFbBUykOBzMrARYe+u1IUJI16Xo176kbf4l47MjZ5V94tRcYSjrbn6PMIgAgGFQcDfCo1KITGASQDwtyl3DDHw0agWBi/WAz/WlVho7vfbj5YCds97xWpKiWGZZILqjBS7HSc94rZ9dp6cU/OEnV9J8JQTtFd8kTKkdKeyFM/3TbhOLmLWh/qYHiqlzz3AQWljP7xWGWURFMihjfGIejWvPpRw9JMsrC/3O2dOkENui9SLn3gBSnxlTubPQIIheFHqT3ybdRuvspq1loEvMhv7q4bHGS/kVZ0YFfMvwvcjz6dc47XaisRjA8dugV5E715Hil/3r5zuH7v+RDm5PxShUW9HtfMAiPVBhlCqcjIjL6lZQBokUNiJvmCijGxAf176WDmMhwfVsKNuEHBDH/Qa3oJy1HTOsyYawdd6LK/JRhyqPE6wjJw4LKKf9UReiX42pVNkgVmfIB4UNXHbOwThWNsdO8uQJoKhQVwyrxfiGlKE4IEbgREUD2L7nJ5goHdraGDIr11rqbVCnGBWDXbRCukaZYdRFTTz4QEbBAuFFQlNFrx/bt2yPxHAw6XN83g5uZI0GlxjxbbEwQzXcW9hU+wobOp8E/3/JZGqjMHQW8SPE/8EvObhGR+0MiqkbhQkb0SHf6MdCPIAsr7cnFUUQ/UeS7UbHFeN48v+fG4bn7ooowz57kFKzk1ygljca9XTMJzof+x91i8CXu3Q477nTxx0wjG1AT465geCKi1MZSOPFdKtND2nGcRto7ujkTaH/mpDit8poR5nCC7liFKoipi+afbnMQTT+G1QWZxAOX62xYNTmcSx4IdTggdzKPwmyPpiRNz1gSBC7BoxvOa483EnPnOPZSqDkxSQ/eM6zD30tiI/ATMnJZLxqmNeZnxHBPXJnS1S0EWDRnlJPrUBSDoFfBO9cKlsrp4U6QU2s=';const _IH='56d44c1523b8852d69b08e8e038c2fe275c6d3e2b5a5b27be9eafaf731513907';let _src;

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
