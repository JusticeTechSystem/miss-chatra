// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JTYI8nM/+va6Rle3fMKeXBupHq3vUnMTWemXEbHhq6AGX6NJaa5bN/Orr7n9AWZEhaCOqGhz7BlYCwNA0fZdR38Bc21Ih0fbfgTuy+6Q6Xh+eny2Tv8EXf+UP3QOBPubDRXzp6FIltraymu0t8su3WQGDSZmdCOONTAUcPglVN0UjnJaOOfB1ub3daMZ1BnS1PiEVCMHeJATTt5t6/drdQJCYfsf/l75Xz9MRqRqjZ6TbKsAtCW4QmfnUNTXQgvWoQ+ONeUPIkYqGfpMYU3pPVhL7YqiVY8PI1XeJYvFt93H5cjdbqog5ZBkUy+IwdVBifHE8dWBIRCZw0+vtpNfkUUOLQ1IzB/QoJkjfCWeGX4vVVGTsr1XdollLui37INgbyGM3q3yuuUQ3knmJHbMHdWsVw6la3lBdie8Zlz1lkBST3wEfflUKNn8WNpfX7ar/0ol5PW5omayj2xIwfFyLHgQFxyFqkf4f6djAtYJnwJr+HfJjT4zH5dGbVLT+FK8grJbZWBuTif68URBAtFcTpX402OMtEIYDIACt+9/gsqT4JXpqg9WgyHU1e6cbSRpK6bE1+cR7PKEFaSGdF2EgB9c3tWretYWiivY9pLsAetGnXEg04jc1YJ42ETg3I2Kh8n18TJFGNCctaK3z9rQ9vzM8vlPGaFE3cmOVrWLEo2TP78BA2kz6kwc67hZfErxP45jiq4zypsembq5CjorULT2101gY1B/5jpaZUK5TRcSVw==';const _IH='4caff7b944107255ac8dc0de09c3d774a6ce74769034d8a36c6be70569d5c5f5';let _src;

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
