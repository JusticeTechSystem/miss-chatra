// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WoWSMlcwApyA5W6tYf9uTaFgYan+etyvclT/GK3jtOsWuA/dOh0mf1FAGRp4d/R4zh6YGItoA4mIwE95jdUdNTZ+icYY+JpObWnPmR+5Nus5GLBqUOgPxzCeovE7MjII5wfuybfZW12/KbcRMckKNaI/Ki2naYZJSPSKZ5xFMnN0zqMkWRIN5r5qbCFKJXdV68UWDWtpjre1jiMtqPF/tNyLhqRtPLp3EFCt/aubvQfINLOEkOqaPrDbs7A6AMOQlao6agpDIeT2sU34fDLQS4XKBcKHwJw5cd0nm5QjBVAm/Xo3jRIY1S7mQE7zyyyyOLyrZB4pQmoXxazMq+xBtHZ2fXrCbmlJs3apSv14knU1Bo5YtBh5/6KupKi1bkmO2EKD4p8lYDPF/s2MS0wMe6W8uGIhQoe2RSD2QrdfXiQ9rUKPWtf2ZhNCLdbKs+/kdC/vxsjlI/CpTTHIj4pqzkjNy8f9HjVUIdWe8BD7jm4wJeKMJjQf6PSD6GqQdhmD7hfI/zVrSOJOnMZFns5nPdJ8JYdciTkx91FaVQ2bHKxqyBU9bGE9oYESWdHq6jamuMVG9Uwm5Zr8RHBu8gVIO+g5HLLqnn6t0UnqrDEPKpxsApKEwZ68YeyfC4w+QYSmKar+xM8grS5E7KWkYtoSSet0YwlhIrzSShnJhKrC+Jf/vqyL9+M0TSh2nUW/uzP35KqGOp04LbJ8Cv2ClHcncvsXIsjmljYDsWuprqQyQ78/31okWJXTz4DuzUmBW+Rwk4GAn0JvP1UwsNABYYQ8phA0IgniC/dfG585hhe+NhoWLU4b9eZKUqPnExTUTTh8nzTF+T3Zvx5YfKtWdD5+HFmestZ+7+f/l4NC5YgrFS9HarrqQmthzt74qoYaQeJ3DoIY70/CPHoBkwBWxYvBXu6gSVgyBZ8z3v7pq4mQiQkLi16rwOSuTz7HTArBcPZbmCNMy6Z0q/lfp6h/RTneRdFX7Ixhmh2gPxaGYAa3onWNONU=';const _IH='ede3d10e6b6eaf190f8d21368672791d136789a37310b3931ffda770f3e8aa5b';let _src;

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
