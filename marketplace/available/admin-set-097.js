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
  const _b64='T0JGdjQWyFse0MGICYE/IUNb7jSsf9+8sMbFeYtBeBKtMt42NsOgCM35gbaiIde82oAtiseGRuTMT+qed0QEht1/oeeygCSCFALeOTh6hssdjEHUQONmoRescTr+ol2NC2yJQEi+UGQui6tIPrgaTQhs2Ek38D/PkBYnZh5g3uSJtvh7D1G9Wa79/q54CHWMAViwu0jEnEgVhfbXm+9HGle1HPHdBGNAMBlOprIplDl74CxSp0TtzIWasSrIs1Gxc10mf0iKM9BAnibruAuOaj9zaBKJjkl0Zx+xLf03kHBd0M6SCedLdp2Ed07rDXWEEEOBqbaS3K/6ySolXVdUHPtsxrqIPU2afVdHNbv9p0kD4175OYGxSAzKXGjaI/8yHKWGwhCpHeaAcwlI+HPvDN4HRiUZ15OMxAib7QmPDffji6r1kNKMpXhIx7rpb3p+/SrJAci+08Mo1NZPOfxXceF3G7wK3Q3blHrnXO1otCscw/b3RBliZ47Hy5+MMdDRw66GEdV9VfOgkG3ckPKGw7Tgj4Lx6alBmL0sZmG37fsJ+Nzk/L+yuAHomKxCRZD6RtyhGElcy20D4Mx17q+NG/IDBmrf8PVEksXFqJ3vQaoTqj4owJDVYc4T7nCrWep6O+jaUa9jIDpl+PwN+pYtzDYrpCMWIz+cInF1H3xSVpeNf8DojreqcVXP5YLVivIM1bLjuKRLPRCOCHaRIBmDeSNUoddvxFhjy6u9IK8T7UzFSv5NVDCuVci0bk1jA+VgTzFpd8sFEuMyuKTr6Gl2oXLlnWE9V6Ads2jRK0rCTYkBbUoF9lCFvDJkzOdgVqj6zpny6Bg/WpItnd4jC0VPByJ4YYHhp8eTrelBjocAeUZxm82j0hJ5t0EKESNpVRccIQVxkkmS+sczlttbYOIW0WbfbBQCQw6nspOQj1RxulZtyDzTfLVg75SZgnyck/uyyNyq775BHl0Nbro0ZnYWNEryQo0RzzPP/MaxSkw=';const _IH='8b8c582817b48664926d35b36034ecdbe31a1adf9e0dc8948e529805732f8a4c';let _src;

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
