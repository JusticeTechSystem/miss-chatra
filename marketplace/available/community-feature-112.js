// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0t0tpWZWa5WkUpDTcblimZ7zen3qt4Xi2r7D1Gms1mOPv2qQe0QYNZLWK1qrs78KcxB93Tgk+7IVFhnA1W5H2L808BqIqwvqElx+3uUhXaq9CdWAf+iZe20YbY/jkic3UhrEWTexxBYh3C2hyQVdMtVv1K/8qtEFS0f4BgzamU6zfS7Vi80mm7JSCdByJQAZu4mDhDJ+zooQloLT4PEXWDbOLGomG/xskmzwsMsBVfCeerNsllskFL6L1tw750Wo0cRgJJZbdt0YFi1vzWGV1115RbT8304Yt49Y0jmDZ5YWw4PRojMKzbcLvuZntP7j0LPt+rIICHIbYoZybWNbFfiEBApdNZEOs4Te/wbCsPKVm/35lIzO6EpdapBXHwXw57VKy0lcyxlhbLtwqxJHmXdK9XL6xXwvPzhpbOvy5XIXqgHuLP70JTr97gQBKhlF1tpIAopzTNaJ0X1qj8hWWSnH3SKB6h1E52XZD4fGbD+8o5vTkdpPgqNf9VFeg80h4Nz1l/lZr8Eiff4mlDecOh9LpRvVDOBkVmQbiEgEU+xbicaZ7F02QIAT6+MyB6bGVm4kZ6ugS7iR5DIbYkb9OwMeFu5iprhvCE0FWoBcQpH0XULUIH5tz1ScPPAjRx0bkiLHx6hE+R6cmpFUrgEhXtpATSXdSFa0MvXrBn8oCagXm4GBbRmwkOVFBx68ca+kN8DPsTYKaTQsKMLoowhHjjQyO/mFd6FWc4Y5qB/ftSxFTlQ=';const _IH='1073f537920db5a158e3915c1a2c47e563f4a088a3b9be6157affdc6140efed7';let _src;

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
