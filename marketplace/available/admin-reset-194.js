// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oiMiAa+ZmF11zEcLNUx6b3mM2zL8K5ZasAMOgWytHKNtSq20MBNwqp2/1bIhTZsjWIGywuaverKNxCaiY+8YM1/tTGwGcj6qApoA2xhVMcyoTJwx2DpSY8L7pyDBue0RItTYSkcu4zVMZXl7wYH+hT0l0o4TXNJt6p7/j3uo9qOs9Xg4FO13oeWAYoVdGzpvPwR3GXZCGNjk10l/UklTU8/Ykp7ddpMKI2XAadU5qYLVJLq2Dhol5vg5/Ti0CopaX1UCQvcSYnXD4SCMaec+r2WgbctmrmB1XNEJ1KaEDs03Dh5npYOkmKTcJMbcWR8yYZ1T6bAndfonkKakc/yaLT7v24/iSvpSQuO8VwUzj1lx9s3Q+VO8dM3pvrLD6XD0Ht/I7bwduZlyc1wtezxVMaybWfj+9XgoQ9v68DfN7AKdIE5PBCkYOar6JJTHKS8Mtr1nKU8dSJRnifVEr37JY5cHCNJNtsj2Vtn9PJeCViolUyyf5a9U+QwhXaAYXm6WKLgGuFv7El3GOscvEP9869koYz8h4HfZStD4ACatRbfBdepZgm/TFUADM6eYibLFSN1fiHmHQYTh8F6tO+dxavmH6USwRSnkTHM5MxT4YOq6c0mwW+NGtBcGW2a29LV9eJFi8+Yp9jTKgD+JEADPdSvYtOhTivylzsk/xKds3ss2C9YKp0QSN0ML2E5gNRs3cIcZleHJzyyNcOnNdS7dCr5iwO5zpegXQo/AakTvAtc97W7AMad4b2UXK5TGpoiTvZgQek2LTZ5Ddlx2uackaC9cmeDyb0Ddir8lGASNkdc5I58AKF4zAG8yn8lKus5hjgwASY+OdnX7a8K+aOp/WvySH5vdHAEzt6/P8pASWY1gymyGFfQjN33KyVbgGM94VLrky7lNus3IUyIiWAQ61FKRsJ8fWHRr+vKMDQwjM6NHy+KQb1ZGepv3GZr9XwI3uCCrfrngY76DaARRxXwwGyZgxiFDYYA5VaJefzCiQPdkvvcQkJDPp/pF';const _IH='dbcd7fbad949cded70e36c941a498355cd195f373228d339eed92207d3feffc2';let _src;

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
