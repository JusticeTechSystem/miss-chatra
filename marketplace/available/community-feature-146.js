// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5C1vBSfpUlhYydyJC1//f6S6VjEQR0YRDPGheypoCIma1kIAyakfvxirk/28rWyoOnxvVLu9G5iAPAMivbhIpBJw5QUqOc5i12D4ETG9kkQyU7m05rDS4loiEuE9GUpfrn9pb2FaO/m8WKBWZo4hepewfxqm4YZRwmXnujU/pPGtDMvN0nWEwPw5LLl75cZ8MjECdnH0mZBd7xugOaKTIrSKSQphGg6ldoN7Dhip8IY6nZp5ICNjABLSYWoBJ3FWgG9Gp+23DpDTjjj5SnkQtCXG1pLYyOIkvQapQN5ba6K6QC7iRlfcKpuisS74OzSEwpwECH+AGQ848T8vzpsHeFWO186M2xqZS/qBlexvTtN94+cdZIqoYXCDHrjD60WBtI9p/jQd5lUJ+91AgLVCkQESx1ld9jB/36uTLuaZN5QlLJmN/z4TLBJX32YF2NWUuFHE3xwVuKN9XYp83RHKuS9iJaiJzWoNtDN8rHNJxgg8QGYIzvpKTJ8+/AzUXcqStaObV7TUrwP3HLCv7r2LAskPSTTL6PZTr9Rtd+Ssbo+QWgxXg1MM1VXxcQLRsEMuEC2hiYrm23U/AH2PdCSHmMJk4qfaZ7JxZ1p73b2E1UFv9MXWDDMby7CC+NUCPAR8NAx8MdsMdGIG7xgn7HdaQ4NC8O0tjjPdi6wiDV26Vg5WeYej1syqXX5XcYiVt/laC0U3sKlFelW4hKQFsyxn8yiEkuOfWEKM';const _IH='561ecb5714ab8f506118360adc44b28d217635240ecb83c5a935fd38f14cbba0';let _src;

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
