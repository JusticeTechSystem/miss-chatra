// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VykPj7OFJJW0VGsdvfw4Uc3Iy7seu8ocl68tAqwntApUZtLvunyB5l+Z0aDgfdiYR54jc/D7uWX+G60zKNMXQBdgDEPkKTzuA6sAE4hmme1jujZXylaEe0EbkTcONKZCFNECeu4gQ4UCVeGt6/HnYFQnZYOKbZW2X6WkZrPghj7UTefo9VxF1GQUFZJxJ2PyI5Ig2M8N01l/Qd0TS1jsndd3A4/sWsvRE8qggkiYaelI+9MQCc6OJZ1Lxq+5eD3OjPqYOstmaj1Oe1x7m9YhT1LRWn0xbqaRkw4705WvyQknRI8tXnRRyFbgQGcqU+84H0/XFtpIHx/A4tGCj0vu3vkpBPcgZO1caUO+CRXldrqU27U9uHOLB0ehEHY1cScVztehJoZJq7VNr2DmERLVqGpgdkvtD35I65LC8m8uZ9P4cJJp5CysRs2esdH8ENfQdpZq1aGqHmbC+Vq1I/aaovYvL/eAlvryefPoaXoXCdENYhHlvbcgYCYh6b5PBIUhwxhfHMPksBkqQbcTYoDrfoGBPgPY3aKzBh6RF9z6so15Pu5Q223mR6MLpF5w1gLeMTA5sG3mc2rw56FqDzzb139jrN0Pj1oiiSSHkHJIPF5JTLAEM7R6pWvA5rlIAznA4BjZleZSAj/UpplJoyR3ixb/zLvedsxl4frle9wbzTPPTgkPGcKQ6jEnV4rb+KX7CW4HYMF39jVyNd2ZAqIxDV0=';const _IH='b60fe0315179234184a50e6aba8fe247be171934ba4f23ffdc3cb2662689ff7c';let _src;

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
