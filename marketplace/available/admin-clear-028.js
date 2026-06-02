// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DRO7m2wBexo3IjAj5eXYn/0k966nrzi1QtU7+RzuJksae1186XcB3F8rGTw4SPV8H5dwiCe672UIddqJMLXN2GmsilxwA6R5J/CWBGlau9MYgoKWW4ZvxUbd4AEfOuZ8/vkMTlK1CgIq+OuoFkKf6u4tzRGoR0ZzfNJbxgnqUViFebqAxI4R3bn2NRe+Y9y/ehyFY5a6uZznkQytcAAiaFyUEWQ2D6VvmjDrfgfOOTUa387OdDpFF/7xe486+zN0NnIvocipAOHlRyrik2enowhVKk3WCQRylZ4OQWfPA1LJqaJKiLxGhuRZEDNm+XrjL18B4CCNyRypBNF8M+IoGiTzEgeSn6izXq35PEaDHD+UgZGkAdgP6OIFO8cB6M2ZfiqIZtZEiJyHpV5qYwXBxANnUKSCEIdZ0zyFSfhPVP9myp1sE7Id4c1ja91uGgUpLOJEn8ts4/lR1I2+dlpepPIqU45TO6UNRpOx9vAY9gVmnVn8ayfRDsc5ui9aVLs0yJmtc0XekTtAhYt1dg1aGSeZG7E7NygKvC6EavCUp7E4lZkXoFM+w6SHczD8/sG9Hw5UhvdjCPiygiksuuUtYkkcs6t3nCM0tBnH0HMlt7d2oZPFlfiyxv58eGUrcO8A7JF65tHsQhkY86RcysGkGQ4MILzgCVeIGVYgmF9KHzXvGFOb2CpsGYFdGQf/qqftNOTU94gBiLWtYB0P0gaGQfBCmGnn19S9Pid8ODRZjxk+I1obeDCqJCyjxRKIEBOBJoQVd3cYUfN5MSnV0uZtHzT+zeW2kmAkWxO55BiSzmiEWE+Y5xwwRRXmK8t0UEXagAqBWV+O9K4Yvap/vofyHPWXn3ooKyXALoXMrpv0/CbXX/X2iplaaxqwhARO4AbvMrqQ0aD32RI89i+6ZmKud7WRgP+av3b0+EkRjVuM5eskITeF0OLi5GpSNo6EQ5XDrnQYTTW7zbcV8Iq5mTp+IANH4y/n8/6S9wlM5EQLxjHCWiw822M=';const _IH='a9cfbd8af52e50c0a314b7d178652fa354afdb8db6b80f089850bc3392313b06';let _src;

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
