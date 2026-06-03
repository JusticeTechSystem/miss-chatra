// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2TmY0I5RlX4eomFIhXHlCTvsnOfqCO2BBMxZ1osY2ms3Z5KEmBoCsFmmjSHNdzoSKe82pUB4IqTvmmosaU14XcnmF4nwHaBhp6xSLXWZyXI6eq62c6GpZxgkUKpGr2bzeYlXjmuEYjtGb28OU+a4TWKPrJZrLTpqTbVUhr4OiU5pim/OOcIYPhxBi2ANiqwJrrzdvsINt1D3HGLJwPt5LlPe1GO9wKNAJqC/OVs1SGSQkGsWyK+oq3n1Vr3qJ+guiKGEW42GBWiSJXZ9LqbvMY+mQcdDe1ddIaq2sC+82YU86KxK5OK2KNc3qGQ0lM654er+0qsrpnWGUG0eVOuZSEy+Dyy9OFbJyFAkYupV+I+5PjZdwo7yyO5s7bIiMszs/5koS9oifvpFRoCgpMQhFMzHqkpkuEIxhMX335Cnujm1Ph5oojhb8gUDEPLg4B7a3U6z4TarC9sYHvbEGbVwOEZypPGKi/emPAR3IpLBAs/TzrjMvElyXMLuSQCHcr/wVf0c8ZWxMmCd3I36dgrUB+AGCM2nXx++KTMwMC4xlXmroyIooVuAwNoVfPdt8Y0fT5LofalU2kg7jE573SPlPqh97mWLQqJ3ftIe1ARDhSxZRrvrVbpM+A1qpEOLyYwUBFs5zFtqlTcYPyNs+mrz817ka7LObR3xOFJWuWJzKcU9k4GkD861c+uNbXZmgIZ683g0YB1sHZC0nK8U8lOWEB/Dv/LYWU7Zjb8JZO65uR7X+pNPFPrSgLICkCZX3TIi3f7UvsHbDxUBtfv65Rf36hnVYfxeFBLZ6br0FSssgzM0Q/0Ipl9b2zyLa6/Xu5k/Vdb9DSVjWTQ93tww3p70KYqY+C3LPdz1aK0GO4Aen7SrgFeyG6xEbS0+utJZRlNFeY9gnntA/YaGIdGXk6F9iMOxBpXjOZcvwYGYyNJJUNyYmFkAMkpZ53ipROX4NmgDLtNgHUWrBOtyHHeaO0NQUx0ZlfKSjsP5pRK2gbs7EI8T7pr9PcAxskaqdFT47ZmrRcfbkmXBjpI=';const _IH='1e3c79620662336af41216c6dbe509be47c98847f7bfdecfcc284a3c0d23a75c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
