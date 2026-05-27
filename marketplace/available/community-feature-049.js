// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h2kxD+EoFVy3PBP+8SGtvANeOnua4ILVDLwbdb4qvpcTc5mzW4n9fPmYEY83IG73uNKJ04wqulV1LvncDsb+L4T0v7JO8QGLn8YNxExRCqE1mofBBhHoamBHnQtpKSFLK4Z6O0X0cE8jN70ZYpPGaIrmP8moDof6/gM9KO8oYLM0uuyeKc6incb3aZQG1KLMMo2MNuXHCZHNGE5jiivmlZmc9uc5B41MHl80/StFI5IvWJnjIZFQR/ur3Yz0n6N9xNUhJCRnD1OpkO0EfWAX4mxfjzQZG9j5oFHjPEEF/XjbTdKWiF4u4SoGbo+ctRpnBXcw25uxLyOJyorTMMiXtoibBTUp1gySYuk9ycHzff0cDeXkdpda5SHUzXJ3ZoP4gph9khM4VYwLPMMwsIc4g+MbySMrgHgcdDGQzXP7xH0wqwMdDww10MZOAayWlR+K4Em9Viv5DOz2/2ESo448Q2M8SptAnW1ob71G2sK3ZF76iTjYnvfd7Z6AOS06t1S5PrhbVQBLjfOCX5vP3KAms05PxxKrUwwRLRzYNzsNwwKnYdwO/d1QZrUr5u8pQ/THNoLS+CAeOYQruSbCWbcwTCmggVNkPAhg+ysTvYJSHjymb6hYt+g+ZyIaLaluyh0vxXkIWbDnyPGukndfoZUZjCJODNCxq/D1xKSo9SxWYaal1+U9860fo2GK2mZX3SHrAAl3Pg9/ihgXlMJc+TexNfC1hZAhc2xXLiKoNHi6rxjpEw==';const _IH='946800ae36b9af292e5945500f556996c3fbf9a38cda2e20dfae47d0d48023c4';let _src;

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
