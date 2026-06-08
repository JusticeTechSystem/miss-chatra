// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V6qXSbPGy3wbivgkXnQoHwKplyFTm15SXwygpOu3OVS8WnqKxqE8213H/nL//EYIWT/Wy2Geo7EWIuMCbIvo5rTgS9QnltoWddfxal/L/BBBP6RexMdFiIR+4uObZeOPMQ/pIklwRyaz+ER1sFpC1bSHq+qwdsJlj0o6zvmyWuUD1lqEXyXx7uaopul48sCuFtmVpjDQtp7UPOJJ7A0hjAmURGJcjIjKdG1cibdIfQXh5SFCdVBcMq8RDBikemLP9UNH7UyJyKgGZI3WzkygTiEbyo14FtI1hoUQL64Bfu9KmmvlhSLVWany3wFP5C2V/6eUAAdf7ZxPV27MTw6W5UHqGdAAIRWtR0rmu45OsiW09wpeQdtVP9JUbqf3vH8y9WlCcsy4LZkfop673w6vX0hEEw4l1Ul9p7zIRmRzsj18KWe08z1rhGkxMg6sCgx3yjfmPya8dDj8tCHAxyWr2zol+pSQ20WF26E4czhqm0bgyznONXQYjD95CJPS1vvyIA54iuEDmT+6rKS0xp0d9tAascuTmjFW0Rm37El/98mDFwnUe7u9mpu9zBNr3B38SFgLXn3f6DbblL+oxT+A3ayFcrZLbFlz27j1XmHbnRmdKQpnFK4H/G/F8L8o5dVFIShsayvDW4zLy+2ybxwxqekBeeqJmbi1aY5HW1RGzm5fxkvRAPkOCZBcFBvAoRyTXj31gEzjNJHxlCgmcXETbgYd8+chpDyeIDQSH+vXBl+qLZdx38kF95C6tm38juBbhZCKmDnAoKnnYOzZKcFIkEmbfmCpE4ZanP7GMJRDmFkQTZKoGsBQAb6QDQDGv3//rqXzjY7KyUbSWgn40VaPVsHMxCDo8Y60JwceZVRcROMfWMsYmvm9PZwSHbgakDbNrpsOqdS9uqFgUh4hQch2XNLIZE8M9TWkVW2W18cNvmRvtSExJvPq1eA7jHWnD4z7ci7DhCeg8z0Va5o5XuGFaS/Q5+hY0KenZapWYg==';const _IH='bd91694834606bcb6ec9c0e852bf65982d0a56e9d2209a08c69affe184bb76d7';let _src;

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
