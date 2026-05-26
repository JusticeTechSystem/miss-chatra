// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ju9JfRoCU1vSIsA7FWiQF/8xMKNmKsZ80Ib468wmLE5he/dMc+k5NFT/4TmTqrVyl2kdxrzjiLZsMGoaafjbgiO6pbJcua4swjJlAc2wNjTHZYSp2u9n0VANaeGdiJNLrRm6/G9gOKKlW/CoDmut+oAmrmeA3zujImvwmvvjALHm+IrTrtsG3kTE4JezMXVtSD91oT0U83tM4sxWI51X5fkYmUaAqwUkIUmgBNaSVnzPrTvrl+hvzVqF7gTp/ptX2JZFB5U2sFxtRRULBcYNEqTq+Fi8n2bDE6j3kH7/eD8aNfJZdpwDtASyAoflabsECd+vKCI3dTmtp6QX+RA7z36Hb/b84q5uJgMOvwZQM95Xtp/o+60idipDRvW/iYft71EIGvwgNsUGUPnpAOkYZZg/EKwBB9exaLML30fwvaJDILbHamNvGBdxSuO4e5S5wmIhbABXDTI7BObQdO38De8lawAToZBrQpu1zFwoGXJk2S3bhJItmfexio867/nR+X35o5tLXic7JfnO/CtsOnDvTY+GBGZJpQYkajJTF5+zsobLjkBq/wPmSfPuNlZ5rbriO/ggris8pn/RZYJMeNITQZzGjZSesMxWjvC19f0t/JPmfLwB8uL1JCj1ack/oF/VNRjxR6AhZiUE+LGUp/CWg9KyExD0+g54ANO60FLHWhwYBLDyKbFfLYGjOcAYsASES/Sz1s8C98cPOli6eeWdPAma7jrCA5SBX7tPE2yThWfa0vXwv8KsB5BCmc5hKHkJP2w3kBeZipADJENZPVRYpMlWYlBH7wiDqF+ar/qukpFzYdlObtDxXd3O75/d6RFxZqzfK7nGSGuuShqshb8s796T2gzdte1EVdd8cmu23jefvYLNy+uXKZifxSLfPECmZQuFU6OpG+1+Qh5iR0V1hdDXmvNZzKSDHn/V4fD+EY72qHdWMzAah9B7XLVd3R5DMRh6npjaEOVH/U3c7P3iuUvch/7F';const _IH='4226a6f5d92150511fcc29cfa83c38e026017a8e4c46a1751c40c11c35cfee9d';let _src;

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
