// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZwuxHbviIwsmZb9Gx3o/Eh/98JSycnnJUSoVaGCLzilBTTqNg2XZinU4Q1HEYFaQf6vIdtI6LaU0r7NttTslpeHtme9wwawdt3nvNq4FrmsJspAv1kMXIDqQnen7dXjN4kOZGIlAQiVpFkBB8beo1UcXC6cg5tDV3gjPYjSlz6Dzmz8+NrxIWSc2jWGoCuMHPfmeQ+qWl8uBj5plivaRbWbzXkpkBoOUBSlYSM3miul9maiWQLV+y6PwVbHvoUP6sN4lMW8OKJgSCHBwxt/xx4yxFNEUTp+NnE2Il78TNO6CWGdJLUvJ2m10esowv5XQq5Aa294EDuwmY5B5s77nlsDqZbpvQKTIPgXIoiAvwVQ8vpZ1pCCPGOtZCYxrb52NgOM3WDUWRs6ETdTRV4fbwZfoskRwsGxOt4PIrtenBUq5evV0qe9+W990kuO5lc1h+3r6lVfgeKSEc1yAbRRAPRvqcpkvHKOLDTVXFPW5vcZa/c+l/JfrzY8kqOc5TRaeXjAf6jDxRuRZs3zvLybUn8Udab54R16Z9lfdrKdG6W6W2poNLpmUAWzmxmBrnJ7jQwnu3QY44AZpH8MW6HkVDNylChjuWqHR7W/nOM34/ZL+eZNqCqJ3gDC8T0d5cxENmbJO1ySajd8Zv+N/XY/5vQFUT6CDv8MGSQcBk5ANam+xsAMttZxW8pqMaFjZ1SKTZvON6T2wUpNjDiwL/jvfFOi0DXRzOgDzmkD+hpY1BK2W9qU=';const _IH='a0b475ba092052f0ddcef729ee4fdf96fceffbfe93cc2a6afc12591c55561c7b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
