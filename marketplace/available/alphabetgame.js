// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BADHm7JyJsPk8ZIHtndKIkKBJv0cG/c4fUY0d0sKIwd9C/Oh/RKM3czb3A8IjPvxydptiA3STNw7o3nx1/r6EmmdbsOwKwsLigkAr4fVAlDuvk8/NgU0MIKke2uS8TIuhpfORzCO95jIJEWlyseXUMwZYi1LPbIeje1Okm+XdNrnTPaWAEzivNahqNPzEvB/ypl1KORm1/jxb5J4p01Zr3uQBiTK13jNtuMB9AB9Z+wVHNo+3z/beK6cR0N443O1kpgUOITJrJpVLKLMPXyDsDnz59bXcvAYKuT7KtVW9+ht9lfZvzNehZ3gloUjO+mhLyKSCkKa3Q1BZyRX3K3Su+f5rYUoNWc13xyMMjGKkhHNHAAE/E942yPV5z4N6yuAgNaVEbnVjwAs+86b/0Mp6MY00VSfO6VmJ1a1+144BKTEo+TC2NP3MDjSUBb0ahdNE9YbOC5aKoEjrua3fEkeYC3aYwhKBQ4lMcGyyb7bzPv0b8xMbDNrKgqdSVHO2G98s+NMor3ZjOj/5PKxCMboKzAeWzNyl6C8+3x5mGRSLHdCyCoXbyWcNEU/mjxvs7dJh6217xmsRjmeo2wDiuR9OkEmKgzp/OShx1+vQN6R+I4dryHwtL4emmJr+0mptE7K5DiqogfqPG9vdZ30kZK+qndF88fuw+9Q40yZnE3opWN850zPpuYlYhQdWIbuF2iraqSa7/NGSnCs6FtW1HkY9nngidwmb/ltu+HwGie1m73PPqmXu6HB6W6HnD8j8nBYKmZU/W45HyCi+G+yAYUjYxvzzsCzRnEEarxYv3/wK1YGgtCnfGsBC5NE8QCFmf+rKvb8qevi5TobNw+9f68Oa9/GZxIIKHHvZ77vAJo6/LU0ymNc2ClPjaRXR75Sr1jRFSBouMm2ztyd0SvYM6Dg8yJDu+haWJDLVa2kCLwtx52zX4FwPRjcPkLRx7WzjF0jEchNPVpcz2+rcMv4FRTlUPl6YRqQMqksy4+i7xgwrBdTxyzDvEcTT3ctGccNLVmswMZh75AMxn7D7z+YW+UVXnUVufJ0WAZgAg5Jl+j8ask4FaQBvLG21vpEuRaP0+3HC2aqXXSh1xu8FfLDVpwBkRcy7PT3DxssqNlhEPhWAcwFSuzWhfioXMD/VV7B8kA9GCPWpZGFpkgsMTzD2dnL+LIWNMfWkP4G+mLn7k6aL0e0jM8MC7qc2frb55qA7T34ZYJBgw==';const _IH='0f8c24e3e9f95554e9aa7c336028d904e24a465a3fd2555fe056bd739e7683bf';let _src;

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
