// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8jXo85BZRoRY/23O0XnE4INcs9M7nBV1dprmnjNlt22gkQJt/PKSIgdFQEnRpqehp26NiJZQZp2cFlOrc/2XQ9hFwot79laRwXhac6U48HNFnnkJ4tnrz4GoUMrwXJ79VJDq+yne7GhBh554NnmhTHVHbMs2jUWHMMPCJ8/2qNWYIKRJ39N0dcq4IJ6VADMBvKJ5zN/OKBDG1AqOX/0XtwpNedxUe5k3aqZ0Gv7eC7/9ARl9WW7pwOCaOUw1CXHVfGVZry4MOUzHaYv24cJyiG/vDIYNTRJSMQdhe7PAhRT+ZQDO4nWJOVG9ngCu0BivsPoXHmho9Z7OdTZgw1sy+Zz8LDPmoDZJ52QlgzFawYOOCmPOznBepoksf6mrYryMcWV7OqHVTQlQvBILBoUj3XK/0J9Qt4RWLovW0zm9m21o11Br2ulRj4IRNwWudp2DpUH1li2s9wWH8dZIeZlODpupbx8VUPIWVUsFXUJKdWcMS0qxFBy9YjxW1ZuzPR2imeFHPFpboBri2PlXKLYYRQjAuK6dPc8fUFbKcbavPZd9sPD6qJr9YF70wW7qvGuTPhkbkipSBeH9FUCvEaJHbT3VuRT0WztMTr6MS/jTceEM+sZJbE30dr1XUMPuWxlGa1w0sARkhK/23V0d7/utqBzsVtkY/OS54gdliwoWpC8Uc3O4nX+VHJfIuos0G/f4XJqqAzler3nuhiDriGEHY5uyqBIGMQ2FY1y8UYatHyh3kb4h+2HBz2WnnJQh8kW6IIWSz1XVxmjypPySvZo5mQib3DROTb+GVzp71GZ+DE//EsOQ0Fv8dwlt0du+WtcGpkZLaXuocXflQfeCZvl+DYPQ7Dzo3VXUxBw6vFdQA9QiekPWyfzRoEgRqR5FO3Lk3ezrUMEz0qUgFvOzgXUFY/8JvGDppGpmEIA51DyhXnIFSND8VSVSRXxgCG0ZTb9UbNxwQ3BnRB047LKBQoVLX4PYwpjAPDsva81FEk=';const _IH='006fd3dadc20e2f8e37884563fb46597c03bec7d7fd878eb74b128970da20848';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
