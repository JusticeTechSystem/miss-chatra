// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sC6whHX+Jma3KlHdmkYNU3KUxJlN6aXMp9x/eVE3my0xA/TT62acm9n0NI66LGiB5W2G7vH2DdJUXF7TIpUnyFCk1k4KoiR1Vgm68MSNRvJ85xlSJoo8m3FRbeubviV6LfAgfxxLKc1tVbFMlBhenaWbDSaWfeR+m+ZERuftaf5W4NW5JPVTWUddrAnZwPDPHJkYk70aarYx8Qn/gcMkwGXQm93lsqkUGh/R6ez2jkSnFg2HtXjmBDhOvXIjcWhF2wXMcNMa5+n0BoC4QlRdRQf6mcPFaGH5oh3U8CUrO+SeYMufQ1dqjMcWlpWbkgT01b6tYfY369tkNl8+04egdBYorDmnPZHsuNlBtgNPsFoZdZSbO63+FNlurWjW0iwdH80ZHsHYeyELfzlAJJ4Xs6xxzWsGdjKagOn6kvFO5RSHVsP+jIU+NWIgUSZaNoPQKP8NtKgogg//plVNwHKEAqfUWwCMtfjmNryAQuDnQi1E8Bdd0AaTwr12eDD1YWBmgA/1a5wVnP38WwXu0k5P/xdQEr8iDuMo1LDAxphgbcH2jmaX25Sx+t4irAcJmcbuXRqicI2hAtDrk8Qd7DztmCDla/MaiW6QKuH6Isqe9Xozi8fdNGh6Vh5R/uMxANCrzFPv/XwmDzaO733p0mh4lMp++BSU4Fx3eOGeCi35Yd/m/p5d5s9dv+k3zbJHxoTNuTtZRI0EnzmJXDPdD4jLVWEG0RPparfOhRctE0x2UeBHUyrMvRCsc94JRGm6HXpQ/1RnJqqgFHfiKpO/w2B3kx/CRmUA+zoYYoQG4oJESWR8IrN/raQmqWA68OwZrcIvm49Xc4J6HQ/OEpPI2W7mg7+j7ex8sp4PGw6t6EKnK95wvAU21sA2ZLufp4TqcB8nv5APPe5oHWY1m5xhgN1jUGMnVrGxWoMo2P0F47byi9SZ9FtRD7Zl8RJStlRgaCbxxErNNyFBgEHNMXc0MfmtI2JLyQs/kz0W20Xd3BtY4Q==';const _IH='df41d512efc6fdc61857f16630fccb84598cb56e5964b7bdd531846c35c8b80d';let _src;

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
