// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5k6K4XqPfjiY8uX+VpLjr+Z5t4OL7RyVOo6QcZlZQxQ+6q4c/gpVFBow/OEMPR9vrxj3Woexbv5oDIcSCmwdCvpNh9o/038u4eHQqOT+DNTdcxcfikELGSFFk6yPRrEYLnTtxj+/LbphOa0UBWWNvINYPXZn+s3IYO47phgCnZWTmoiRXae8P+E14GNTjDOJENVxFeeo/NpuXVPeUYRJIbVLKLdjhd1f9lMKlfeNMYKBQG1kYVawC4xikt1EgOJLeVo9SvkIGAaDyh4GBljx2UHHb/NYvKsuRVjh84Z5veBrZdVnTdqR1VMe39JSYm1gXo5+1zzjQ6LMIxi2/6QBW/t9ADAWFxCdcZuJFTF3tec6uYtjcqCEpPEai4P2kLwNhLdFHndjtWv2zaXnanGl5sLcwMd+kBE7IEXVYdkXRp0rmpZwpTbBV3t+5rDK67/o1t6pZzs8CDFqHw9JohbwxUbl59cTE976PC4LX22EkEes6cFiq8Zos3ty35JtfqZ/PJpeBHRbPiJybfpyo6KfF+nids6M59vuEWImMydOW0VKxyc1w6AAZkz7fCtgRwpGA57G8BhNwhqL7fSldEElmOlAHGQ146kTgVAKzNq8LQRazRzLq9+WB5x6sUJzO68VgRR+Q9/9WLCoOEJYU7n4ahSWDN1/YpMHomJzq2BbnqNO3+Vyw2AOCwEUt8M84rKDtmINS4StUtYTZYZaevLCO9Q/ouda9SccZVJBBK8fwmMRUTI9glU5QaHBkSCnT0nMgtpCxAS1uV53Y8uWvtUD4AfeUNxjvNjkEYB1SMcXF0cP1PI/6ZnxQelS2kC7RhyKpCpX9Uf2rQ/cAeoNA8PUMNFmzqX98mfgUkOkVUNRz9J/Q5/PA0wpcPNtBIqhxjm1KO8mOqqd4CRXo7uq+ETvDTgW3gJf7ETdKGkcOx4U0dbHrcZcrnZtogT+IDcNedJUVoNe19QPzH4j1+lOcPmY5IAM5iWRUFD3oUHg3InM6nuiZVJckHmWtIic3EOgFSHFMxWmZXmteaTwGOZVbZCw4t/JhbX/R+lmjsguS7CqndJXIAX1HL25YqtLjvcOlTO70v3tC7DJD0tv1F4W5iFkmv83yH0mS1Yir6iDiM8jdQeZ7X66+V8tyhZjbhmAcrsDix/yun0fDbKnn0HMhGxQ/c6LLY1LcO4bMHB4n9e0Amuf1cRgKOynjoUVQajnp1kOBdb6Z8=';const _IH='14310d2cf78d36a678c00046f954733fbfd506d73c11844095c23504347ae4d7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
