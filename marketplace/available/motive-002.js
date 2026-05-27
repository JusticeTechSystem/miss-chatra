// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iryK6wL6/+sztkZh5AenEehTlDPq9TE2dL3rNVzhAo9+3JqFKowlTe/WPbJ9wngzl5VAaGV3carKuhXQTbjlmRPIeA8HzWHAzuAKs67O4hJNUNJNm2fwVGFrX0DfBHBT3lTzVo9oJ78F4tkzzjmpaAYI9m1xROMEfkP7Pd3J6ro0q9r8eKZ1tmJeHxhbK1mWgJZfIUM/FOvYvqzQ7vX9sTn2pRQy1LqR5gOvIFd+ON8GHCxvuxdQ+Bcw8neSMSzhrlcu12nQCxxm8Ip2BzLJuBVW2myYpuJlmSrJYImNrDvS8c8FAUGULzOMJw1Idz9KOlqUKqDduIDQuRUkVZtoplVGcLWZ5WEcPid2TQQ6v6ONXbDhPts24ZLD1JvBdptGv2rFWA0i7vEHUhWP9em0Fk1/p1O3HSFX4CDhvL1+JwdJb8eW58+UgsmMEF7gH8Q5/whD6vBkvozFXWSp8lJc4kB11Q5UF3w5OC0ca2ST9NhIwEgi//NhKX8iv7yDb2vx3IaYS57V7JQdRiXbRY2uGySA1Y2WgrKdU5qc1tjYkloB52GkS3eEG1vFU6MUBZ0+qktgYNdgWecpIqfY6clPgLTvt+sQVGAFEr44W5+b6IwznmkTWn6yHvIRvVf9K+8YJAsVpFIVCY+4wJ5Kg2CuhN1ZRKD4VHYM5Tu3ZiviUzPzc8Qmlcl5KB710DSvQoPNXzNyJciI1Qq2jb/LTwUHSUvPcm0ty/BQPkFpX8GEc1TiCvVvxdJnbQPIwDCGQL/EksyX2A4LFeYB/HSAZddMk8MCVQTbsHH4YqfRyDmNdGPP/DKRClpS0SeBdPrrvjNCl5Fetii0vi8pxjVCRnfUNSy1KdwPN78sYj4iMhmP9z7saXyH40l9l/DpTQgc5CxSjWGEXs8B6MQJKLijGEL1IDGPPEOBHlkcKXoAAb0w9xVcjl8QfqqVg3aIZbB66YL8w+gsW1waeR7XsQQD++DSa1s03LIH5phBeoAT4XSCC9Q9hmxLJUANnP2WozYOCZZWqY9BExIH5sVnp4AkS+Q=';const _IH='634080b2b196dc9943e9872835958cc820acb043d254f23f1983e816d14c7ff7';let _src;

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
