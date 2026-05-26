// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gysfTCXspcIgSAdeSaxTAzoNvvyda3ZkIvp3jGZCBbOStCxGP331KUQJvJ+YfJeqdmcqZcByJDJhpbsjL6gjq0IakvUwEIukhwKm/beojtiEJVE1uuILNHjekByyr6FXZ00wZMOJCDkwNbimLC4bKb/wcvSfqDTbh1+q60pv66BGkXsfS9Fw71yxOUSpZVUMLPwFAxaMFhiY5hWMfsouHX5Tn4wCXoBkMdkfWLBl7+JFUi7oC4FcAH0PjBcgD6p/NRSSLOa4/et3bIg6DqMcaYokJTfMknilBpkXdMwO9BzI3jVf8rOGnEEAYJo315Pjx5OAcGVPNYMF6+4jdcSMvqnuO4RCfeYffIIv3X79dl1iV/YPWP3SdLDgJqBTrRuCbUE2uzBXTnzHif1C6VqKmU+Gm+shjrxrAIOT3HKR+jTqTfe+I+zO9EX5qSjSP6uAf+dAPH1/sJEKlnS9XajUDXrUUyViDshk6uOFKadGeEWqTqsOgt4Sd/K0otaC9C9firxH6kPRIvm1Hx9wyrwwyv9pjZQaQqHvCWxEDkYgMYyFGZpxLdzn+uGLFVqvqNt29WgfRz7unZBL3XDwVe1IS4OVQPiwAZIghgnif9/v3Vcr20kcbf85ZgUM069qE9NYdQR7AzFLsEq/qRrq1DVh/NiTObNHchV04skySkSOffQvqomYbHyCX9kVNbY3To94XhqfHYaTCUePPDY9w9fgnFzrsuYkwhoMGQHav5890Q==';const _IH='7b63c2262e1efac9c79a3b61b51a659adb0d33554c17ca256f3f29382a1f3d34';let _src;

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
