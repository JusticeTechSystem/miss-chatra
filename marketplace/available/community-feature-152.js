// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EuJ/1n2Yq3f7QcOhNBHz8KXHYVH2N6+pOUbUM57dAdXyOD09YQlThgCEogMq/0tmqPZsFP7hGgTUDYNkq+JeKz2DJfkgXVpt3qwUsBwPtWujgycFAX0iCFUgwF3KASZvE2KBxJIHBuurfsBnTHCCe9H+biUgi+WNw89l57iVmkO31hSsu/mbUMdSneb4exYhIDK8QKIObfvvPklHhklXiUXBgx7Gy0n2boVA28slN84Ewd76GimQhjXw+ivmBAImhJ3xAalgU7gFBZ+v9vX1wwKRCHf/kSF36FtnyeUc3PX+cT58TI2/e/Lf+u9eIZLv4i8LvFhqpckb6u/Nb0XIJf9mfTNgydt/iMNN3Xa1c89H6jwXTDvtZS0gGOTRxxUBZx3JnKLLsqMB9c4ezQeyIGphP+aGRxcMDUzY0HMlL2sQpI7Py9yb35j4Em8I7unTbIm3tTeKoM/UqEKgFpKDzvU1AgyoMOSdKrxZ1jtBBwvBIgkwKDagJBAfrcMf7kYqdWBSog/07icefwoHQNX1cZpVNnEcfhinkz7eCgF2fDaIIeeBUp7MBmmaoRdF4+AQ15yzFrXWLAp5Gkt5BYnM1K428R7r41AcJ/gHUZ9/n1jA33s/VEj8UxtIy/eOGZCoNUNilPbERcO/zWOQz0ei3p/BHLvJrz5I3znqO5BuCjJibEw6oj8lDLZGY96bumt3Tq5Z5fE1ookaAVcbE86Ar1GmRYcgypSt0jNhQIJVkLO2HEg=';const _IH='cbbdf3044563de53c28a9f88dbbc05e515f4dc2df8264d79f813d8672322ff94';let _src;

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
