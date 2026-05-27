// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jAGjErM9ZOvFrmtBXIXVDyVxfVwDljzivj5oFsczIv/rPml8W6Hc9It8I+euMChxyyWKtp0ODYHHuhEuMEIvg6pgip9QvVfSlc2qd7/8NXco+iZ518GcaorYSrad8VvFMUgi0Qd+vd/+BAlJrzDq/PGuaQcmvB4iuPRtuv3ED1ILaf+e3/eBcfyLQ5sQkiM7b9RD11L50udQOyyZxn5zViFX2KBbdT8hyYZ+70G1cw9S1AsBfUMopW+CkSKxLSH7DQVXddA5u1/nqgHYFEc/hOvy+htpT/LmnhhKpGlAW7YeaTeCPfmXdVN98URVgeLd8WxbcS/JHAWglbiqDIG2sMJVDdKZ0zbCdhQnflWctEpsAXI90BQQ5ddsiNsW84rFHUVYwHVvzMDcUL1JY8pcE7MiiyvIVXWm+Fv0yuwRB3h18FuhXH97iMVqiwfUcDq/cHX6cniRc2g6IzhfOp+1GpFJiuqMawqGyz48R7sNG8k0S/oiu8GTpgRjjIMe7B3P57yy6BZasT131LGuwIGeWJGU1Z93JlLEfv8wySxoFwqSksLtX60/7zl/LcPizzJXOoj4jFUnQAknssFmB86BzU9vXuVPKdhYdFhw1TniVEx7Z5WoLAhv7jgJkHV2ou0OD6cbO5PoJGyN46VXH2U7Z8LN6tjlAKkGfxmMxNEt7NfBa3MKfDa9/Z3vtXxuyASCPorPj0nCCXxSt5sE9NjOkcGUAzhRnHCIgsRA9owTwWY2zexeUFX+O+H8urfJyS8Og6RRJnLhXe3Ma77QoNUDoCwA3Ax6AG/kVMKYWdVrWGBNG0cegU4jAJvTU3TDQB7pfwigaVm78mG2BOgHAfRyrPsnd2mYynSD6djvqGBhTIwDPGkQDGr8afGV0lDzJl6yWheEC8ajQmKYt+zbXFu8NJp3sYEVbTeF9Y1/UQFhFd1t1uQL+JrgNg==';const _IH='45f6c5524f69471bb43cfd03a8fbee63403357e3866ed954967f8606a5cb0f6d';let _src;

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
