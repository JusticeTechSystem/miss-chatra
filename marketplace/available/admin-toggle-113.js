// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qfceS5rGrzlc3+FgWOvBuPd7CpK8k/AawWw3aRqJcBnNyz5Av/e7kISL66hQy3jfZzTgqJlAs9bd/wBmhnPO1PD4E1h67uh2mGTOEvkE+vtvVkIsCGSYydZ3KCQ0uwMaOaO/c76MdwY/4BUqGVgHEi+eQPAh2rRZexAXAxo38L7iwhjfZ+U2zHre7OUN9KKdEVjGOAYk6d4NTPV9YqiliC+7pMdlTQJGj3ymuStll/iHSdDoaaMrBgrD1wtyw8hUMkJdzFvszWMHfhmvLo3wVh77JAUTH1OL+FE4ZblZeRLLVNydLsqY1oP8FERxhkidfy3cxJBnuda6OYinVA5DJ7DvYMPETJChBQU/3arcJYdbYUCtS78X5IV+umnKKPkiPZ835a0ZyUQCGjDBtvJXuzYzttUy7z2Gq3qjkuWEdx+45Ur4lLZjcc7SLh03B+FD5vQQ4PqguFJoFjawLyNB0mUtMOB5RTNIUXMoZjPvjoE3hPomKrzgIahUHyc5e8RXR7izb1VyLgs9FZUqNSVlUsOnddbjyND4DQsjU0wiYCCJ/dw+R+iTyS+z096CigpMhhnQeEhyEd/Eapsf1LDL3/Qgyd3vzzunx7jP3jkzfBx0R5WdbDo9lJv761avJaBH5DlNsPvL6OcxJLaJDYQmz0cdAVR0cVsqb9MaNOFVdGczbI0Ou/uvkEoA3wcfR2uR8DdMi+li2g159ukNfq70kuCTsyjZeLcuCQpq7+HlPuh4Sh7QvqDTG44nBXhsZ2o37SXsoZmR3wV1ZwwZ1aF81QmeH1rZMpIVJBJPEw09rW/hO6xB1F/Iy7m8K9c3/36h4HX31c3lR2pnPLkzoirQcloanj0Pv7wwotewSGtiyo6tzmbSJJ/Uwg0NXD7KOC+tnyjXWhK2uFRwgsrVBHwEDdHNMI9CXPhUrDCuNC87flwzxnfXitcgoxqoCxAvzg4XuL/NYXqMoYWO/YD2a80HqRWZGXiv2r8YKKB2Z7MUCQTVe9iRE77EByOCCp9fD3A1/g==';const _IH='1513569d4a19c379436dcc1332d1cb19ffd4abf20604494ad1cc0aeec7f12384';let _src;

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
