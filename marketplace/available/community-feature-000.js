// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FIrrsjIN5HpmNzuFho+2pweQfGrnlZW+dJvBkGdMPGEmSotizUKX3wmWXRof9lZR3b5EOO5UR2fQhmJ8v7LakbAo00DSyqIXEOINCYc3r8b8zNGkwFXBX3bBnDBbiTSllpaN85hUfDmftAFrsLXtKI4VKc/spMiwNkGr7wA16yQd8Q4VdjMCNk3zwWbOFxvsRK9qzMXPcFvT+7yMoz5HTPj6IduBKMz/wuoqeVyoKHNzl4qKqP8uLu8+qxsEFju1Brq4KeWb9exSa/alECoD1W9ZyWLbfQsSlxkwVZo24R5JHGZWuK8jNXUCs4KPxVqhjuydfnwwnwQWdbI9tOkiUUhfUYC5aO1D53s3BxnOTsQJt5g8DKoCTmAstaoTDyQV8oPecSzaALd0yXdGzq8VEv0n1Rog6MfyW4fMXALzNp6gz8KfvEX1B9o5YvGLT3Jg/4Z+ljyuCKthSkSAySewYqbWmeMTVGb+KGfpnYrT4g26XRKHyJt5nLq5dDSOFoVcpa5JTnPOv4nRq+DQQrncISulrMDGpU8LLeOsrAF26//5VKL+RsbQcqWRRjYcqIVnCVfcDcWZhPww31FBAvem9EO1u+URT28R4BieVXRTJFVVdnX7jzz4WBSuED80VX3cMerSyKnO7j43Xs4hODHco+8wOOLilWn8Ug9Zw3F+jcrrqLByFOZ0JipfO2g/CfQ/5GEs3qX4TdMw/Vv3iWk0qhT9SezIp8jP1C6gEa76i6Pdvg==';const _IH='22b62bcbfcf448ded2ff4d5c5bc8460ecf03c4d0598b5a1b5c3bdb0ec96b519e';let _src;

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
