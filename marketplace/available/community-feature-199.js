// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXclM6olUEW0+V/D9eDM/0f5+0ddTXxSzDOjTR41uG3ZTrxbMz96HQ54r+3CoxUh6iyyMqUDf6z/5HBA9VIUYKfyLK306opFg6LSZMBylhcgaSNlChdrrG0Jj3wALzis47HJCPGq0Kjp8iTWSDFmdF3vec/rqFeeAHN8fyM+aCSaVeheVtd7/0hzgYF12UEyagDWcwRAPoE3GWhQ3tisHQz1RDMNTAfsy4QKppGFAj267ExvRIOfVQ7TMZkRUHDkrdfNXJg+wMj+D9qNeVsoQFikr06pgNjT41HGHJLGjYA3r55avw8J2kupnEGCVyC73Z+6lIen1GFLY4JEc3cP7tNcs+52j6po5x4twsYAARXHOHJBCcbai5kArpSh6bWLwZEUV4a8TR6IrEiEF86quosGLkTJClmgttMUYsMYIkqpT+LIfioBaSJCT9iVrU1WDC5c9YGDBMEtasavci+tdqDg9AKDTzKyhWSPb4MnwffBOaOluiPdlXGuMPRGUFlh7O/fXkrIMR3wpaSrR4irpAdUtBRZhAyZKFSmhBVdFebS7zrQT2JiWd7/uSBEs0bNXU7Jo2OzAh9jJ9m4x+l9ev++MDGQ3/cGTYNn9+6x12pEx1UfeZl8h0mstDVMxYm0vhjLGTPaqPg49dHBcFpLFRw9NuKUVfZ5VufTGy8EWmQ+2j6Nxdg16vi4I5ACudRlTjoqGCOb8E9+58CrNNFfvbczds/vRfTGrrzC6oVtaPB76OdrWp9A==';const _IH='5b79129619c5a14b7771599be62081e347d0d0e274fec8dc34fff51ac072d25f';let _src;

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
