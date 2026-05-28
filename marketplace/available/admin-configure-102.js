// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wh1O9exn0BBJAfSvpkfmRTEKHP+in4ByYEWCirN7mxSZOSdCIfgPwGYeJB2w0qVa6PF9Mj21rKwV/OxbPa6iFeaaC+D4QtoePLLOkWH+XCi9flck/QlxschvCT8uRXwY3PrKSDG52Bv/VZTrRoDJhVK2pGnRy/qZ/qKFNAVzb0/jX7WmIlVbsgrL/l/UuEfSh0RvyNVxCel7B9BXN0gUuULYnJD5AyoaD5DVQn95bIzh/P0pGP4IhqBxvUPX0PBtP/cTit2ajk7p+aaUNnS1MSXnq0FnLTlf2daAsIhqFsMvNtAHYNpif0uVgWDuG2qr6a93kcGiKS4VHzXc/uZqFDd0ijxda9g226NZQFZzAKWfkP2aoHySoX5WNtKpw6ti9UGQ4WwR1o9RfrM75TJQv5R6IBscgCvPzZvrHExiISCuiP+Tq3KyNG2Vvh4VEs4drLgc+oMWh2gkt97Ij/WobeyaSzsbfjLRtoHeKyFR9ELtYDJgGpYf00vkumAh+LMzFRSlIyhgN8GJ8rvPp04og1juTcxVnnzxR86f1PAS8C8QOUFCRRZd6O3H1rpZMYc+J7pxSWCl9cmeZRDNwK+D3gjZup5OG4O8EoYFEgiB7mGZhZjrAcxdQt36eRIT6NKCv5QBfb6Kc+EBPquNpZve+A8NXnrrg6ShEiEpOPXv1XwsuQ9k4/BO+NuyEbYgHIojr+Bmsj+T03LxDZ3aQXwkmxALz6lC2+yiA+mwJgL2zyuaFDY0QlEBP7b7PpriwX0QVRnIJh55ygPOpy7XXTXeyswugxZSQT2us99OSNJNu8lrMmFC40IRwekWyn4pFNHWtmI8NBVAK+HPCgoTQsnrrgpF3Mkxhg2fJibmyH+noxgRwmFVGi4HG4WjkWJdDAKIzlgqUSl+Zx2Meldir6ooJ1wyGQH1SpIwA3VR9Qx31nd2ObmHix8rx5j9EJjNVR5W4NKLn/z+2fxC7H2xUFfmadtNN47s4/+UEo4HQLU8MiO/84h1j5XSooH47qOMi6lFS2F3awjc3AV0u7To8TOp+ICIgvYDlw==';const _IH='4f8e7c9ac76cf15284d0e62dc94894487e4ef526b6506ea969fc28861ac84027';let _src;

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
