// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2MPrYwQPrDLuYYiztbyqG7DJ55vFzuWE/In761AnNeNZ+STVwOmEUpTEorXJ0Whbzp3EdUQjQJo8Q/e38t6YAE2UdvnO3Rl5chYLlVqfriuGSmKWnvA7xtApLhR8AMI4Hqdy8l64HCWsNuL+6/wLzIXQ0TajQT6FUJvKnuWAjFRCYZOkfbx7gRF3qrOPmayoBBaeORuw4dTMIm36q7JQhu7+Y8e+sGz/+digVhOSUFrIU9P313usxjPSuvstpi4sOON4HMb+Gktjzucib0gjW8jskFt9girUFCfEn/GDSIlGMLYnFcZHAvro05PAKhHyiC7q5XpRhG2UzKJFNZZ99zmDCIktQhDPxm8RwBYKKl0OSvNUWjMPIC7UO9afAsmVoptWn+FyRv0VQNiVy45N2EeefSJX916IHALsqHmxHq5IHRTRUAWHTdgQh6MRKPK/NgF85VFhkzEvaIK2cvDV0ZIT74JirxUrN8g8gJHnKoyNM6f7bKCF6UV3QMptnD6s2BKvm5Zg/zl3uFW4YNIPo4jv3qurgEpGowxWj0xyI/She5qXggUoI0SdKV2Nf7CnUI53Wn77az/b8/sOruZ5ctyF0NxfaRyFIdgw1teKg5UFqcZuN2+UJIquC1QlaCfbgrWtCsfjZ+AB4cF8qoreMtKshgPJGsY2ekbkgFSncQmOL/TzUjiQx3iKDr4uYfuV30Mmfeyd4IUWtFh7ocG6IzJhA5oDi+hvy1GIQfHkXKSTL9sccIhBD4iss2Ymu5kQoBIYihggNfUWMk+091ImkncE1bOeRpwnpOYxTPnd4BXvWTO/QDH6Sk9tseQwgfS2EVTu1LorimHY2qZ5woX0Zk61CpTL5qhtntEsk/Jd/JkdzlzRC6ES2RXE/5UhZeTow0OsYjkGJNpgj+DD8aNjZUHd26tKsGCa32xHBdogVkT0vsuZZ5B+K85QgAdMay4g4tqlA9JCzEiMqOIDMczGKN6OuEeuwzdhwTk2DhRU24/U6XvnLRi7wUA3SjMGhAgH65g5mxcwAVcu7O5gsA9MR4MSEBy0PouL2sDrMIa+KFS34nbsmLvbKxw9OMzQAllLFl7y7uH1foAXTucSQMNq/Qel/os276IHQVk0v/VbWutk0jRYBZXVGUHcj7yjSfDaQrU0wdiG9AVsYPpTp2w7QjN1OzGnaaftmxLpK+Xny1vFGQBZ2g35lxzcM1ES3s80XAwi1XgQcaFzQke0x7LqVXaIoVDK6i9kwb/ddbMRg19cqiWAuCG/kq89Xw6UJ0HrQLSU/BkjPRiCrh/kLjggoL3qb2N+V0gWyiMIxXOXdaL2Ik0NlplZV1i26O+herjzQOfsPjck/whHj3kM9Rxip9rwebDNX75UC3Afooxig==';const _IH='e7e05d338c5b961c0e77fca69342a7a50b95af72c47611da19064f66c04fe349';let _src;

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
