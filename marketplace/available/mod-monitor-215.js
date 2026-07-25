// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJJavO13H2kYnm5Qac26BJlPKsLoFk5287biIP/I8riG55LGFSaIQeMrTo7Rne7PRjVTWCzu6wp6d6y17AUDhTkXqDl/tfbF9q806lTKf17Rw15GmVsGtInLJ7XjKwqihGQum2m2f270It5bvOMhjqPtVcB8MlYMUX1C24xp1MYQh+Qbunu7ZVvg50/Zh3LehJCAVlRsbauti9kAYHnZZjen4rWUhP7iwL9oFQh1zP9PHw3m42BChK1US5Pnm62ZbIA2VmKyfQvE5O4gNi2X9IjLbAwp/Xyot55M1xAieIBvIGFwoQgeIgQ/S6N98lzajZsszX07/NGlb201gSC2w8GYZ4YDgivBP0hQWgg8Q3TVE7aCAj+oEDs9iqR/iC//Xj5xNMogRyE+NKQG8yiGEY9PW4xYWP9VJ3VQG2cEfglDC+VLGovIZ4GogomcShV1tVMSxcxktGUot3onXBS8hwT21rdjGMrx5jPO1539dx1pMfN3Qn9wByxF5WDa/3tUENGNAk0PBzU+yWxVGCeBSEK/qYjpMN7bReJWkvFjgI3Qo17sBtqFfG1bMkAZm5l6789H/6RycI+mUYg7M0JhkGrSawBBpfufCoiT5rF1qudWKKTQ3tFcEO1m6+LBghL8W3/2ddJ9EkdfqQ9hJgrwcO6qxEaYVLZQdpc1g6c2vLlbPgVOkrjgnBWYBjuZ7LP9s9ZflJ49uHWcAVanJOAFtG2w2SV5w7Y1baLDqEv17b7ZTLfb/olbaW1X10mq1SbA8s7MscG+8DDSa84QGE6pJfuycwbDMST1NMBFjBic7pyfQ1wuRHo1fdJM+ZVzJZeVi2XMOXB30K/2X9hFMVfR7dqDAHvLddSKcIKuKqFK1sdrqZ/XJ+EQv6FSO7p9Nw200HzzLjm5Lm2BT3Ydybpd5UhN/Udx/jv1XW2oyQcWoXWtt4Pq0GLv4pQG8azQ9Ru4THpXpTVzb66gb1TuWBf7/3PmoTvROVLW+XPBhn5U+07E1V6A3TCUOEhYUhZ/UiiabGGk/EfcE2hR3lRG8cydAazIEQeHVONSOrPlFhb3Qasb51bLSDMoh1etoaa/za5now1Wbec5z+SdZWjZguUDCNa5hf6+lW6riuApE5afAKxWOAcSt4aEPXDIXuXx87Bniyek1+GpEW1FaS/W3bD0sI8iubso4seeTggLGcUQnJU9bkv/+Ka8RBP1NkudsP0FcYpijL208L89rEUcd7bVfYH0m7cQ6KvYW6ZVmk0v27Uu/BHr4OJGMIYGzBuMzshQ1qNDdWolQmIH+1OoIAMXgsj1MjDmyxk9zffzgt+QdmHmd/SfOkld6iECoAg4wotrYs07/ZvFPjUgVGHVc/btd37BXB0ZHJ+LsHqQdXtpK2G1W9p2yhjl8z261xCDPgVHqJQA==';const _IH='f251cabf68bdb7192de0f2aed3c87db1e6f1a49fafb24ff63fa9398b9eec825d';let _src;

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
