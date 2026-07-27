// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpt+EcHNrT7Vwvu3jZuT5k1VhX095wNdIiPmT1Ujp2uaygDAS98i8VElgJD5d4XbbnzpH0BwVVAIeChKWGMDRXQHTSH361I438cG4LySqktkB69Zg6rsqmv4M1iizdfAUS6LJlIZxT0ZtZ1SVbng1WEWBDkGehVT/jGBdQvwsZp6ztpCFqqu2sZLd9XhMzxrJXf9Snl5joKFpM3LIBYYsqFsVG+U5f6hMu7+3Bt3xrYATCOeHV4S4mobnEHnj2utUuqemEfwYv0DPcC+Gwn1+lKoACCJe4Hzb48PQYjc8ngZR2BtC7HIBp7xvHD11AaG+e517KFCyaeIqyH4xsj5xSKUyO6zounXM6EsgrsvzbkHLgcbxnBYmDT1ZsTV9t7P70vsAQnTBu/PugYFaFtm1eaSZ5EZ5IHYeJvKSkbOWr8tpZEtbomOFEtxatNUI7KstffB6UktG1OOOx4eAS/n6ZXKwQQDvt+8LFS82SLHm8cL6bnZWcA0SEft+DqWXDG6N4/fPl62W11GgosLBvVO5rb9sGckSdwPCugxhXYeEV+uHNkBanzBzztH4cuBSwC06qIHTpAUFHfZeb3Vm8wCAq9mIKe/sVfVAhIibzny++zhq6gES8QcxYK/1BKbKLYRCTMmdonBDroPl/avw228Q1VbogkpVExCkGtt+kg2airvLHHS4KahTn/N/N0GOJW0TUKun3I/pZ/YAo94bF7mAByhWIbdtJTRiQh12ArhfCH1ZyByYIhUuCvWJFdMBo4fTwXO9YSysYfN8qydPBLvafRArop20mBmz/jPrG7Ki6dhexOTVj9yXSS7/KgAbYR7ttCEPgEFxaTyx39LA19VzLUQ0OhLUFy342y/A/S/rf/lgkeSNDZ5B6wNiLY0cIz21KLN7S5zDUG/4+hr9GOBJXYUJrk8GhvYxzH/OQ/Al0jnIc0GzSMMoL/ass18zadaQqvdA1oEZCuMKMPziT1qfyEMPp5hPoNgycviK3gIYd6kmNRddfEv8NcRbEnRFiThVspuVhZYQ2wZm7adDdo+xQv4V9SNSUQ9WYQN471ga/rkpFFcCsFA3q54ClnalysEmUdERy0AXRxfVPAWA0dtpUZq4ouLr0dlIcSUSL0b/vNelcRxGJbtnd0tulfDmYPhExZG+DrxW4K0bIPu0AF+dZAhydpsuyvtDLJpZTXRZibscjkq9ZE6j8kCnhA3j1je0L6quEBdI+Y95pSITztKTAiZI7P6+3U6SXAo9LTtt1XE93oLOyBsrnjp593vWb7Sihu9NDvpEX+2xwwU2psDBsFb0TiVM5Z1PdFVHqVzDGoLA+DycS9jFhxo7d/bW2V9j+nUu5Mpv/uLt14rbUOwK2kfqGnMkUhqjRgjlFQB/gfjYYwaaqHhLk';const _IH='d5cfafffdfb5c6c90877b301ff4fa6924f0963125568600704cf7090211789b3';let _src;

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
