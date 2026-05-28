// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V08iiacnd1CyCtvR/TL1UP8G2K32adDTecNe5dbYKDrZPTutrMZD/iutW7s656HhfIBHnYZK8u8VKEgV+3fVi3aQvtbWFEpxf8QpzsSoRnCWWHBPPmgZ34inH26DW+cahCYfJk+BcaRVCkPWotQuqw06sW4bkgxmc96Dso11m3qmVRoRnYlDlGOU4pBHLrzmbILs8bGe/Rk+tqMvZH+a/A9CWlnRhU47zFE02smL7oU6P5dCb9iF+pHktEwOGubCUHdRZf4gGtlJEVbhvp+4yxspzuiiELTck3m/fYTttnKbfmZIL2TXBWVQhbpG4s8HJg5vFanW51HL/epUq0XmVH1X5XE+m4S7VWf3EQ4EH+K3NutzKuP/nA1gJs4BXWK9x0iM+J0CrTj4KzfC30nq6+MBpLWEK+7BlNu/TUpzlsxYnEckU4wPw7tWKyWQkzq12l4cItQDGHG0+x0oys2MewxPRh/twtBMXVMJLJoOuXSlkT857oibJ9O8QeH782+Mu7oBytw3t8ZEWl3DYORgXTm6xLvSyOcw5nVVkVD+s0HhhK9SBIlemwMSOIOC5YCHgs8kwcguAKbq8cXz6YIYz2j7+I/nNOSx1dLe6KwVb8GEridAzsjCzdFMiYDzkkLhZlANPl69bHh98vfuFOFJpMnix6HI0HrZV0zO4e+nf36ryQQXW3p7EhT/Ny1yt8EUt11d7RcGJJIc9CHPkSDm81MqaXahtVKXs1YkSICJHdvgdpYqjk1NW5/lUEkl5wRImW/pf4a/cRu4wUQM8MEjhPhZoqJ2RBTpsbDBCZG4VrMPMReqgcbPTGEaBl1iMy03avt4XUFQLLLIPKlrgxUsej+6F86Ss1vtashJigqRmrgDlxnjYIaS2bHOTVJ14g0OhdlXuDpSiTqvrsqGUQYuCYlg9z97CiOxguHFgDgH8o4LSJodrxVKVVpBpm2fRipT63+QsInvCP7GB1HyyLk2adcd8xOpiJ5MCHJEpthwGDI6VpURZr1me4H1RQbQXWD5eQ==';const _IH='aa36828fe78963e571429435691b74877f87e23c77d062bb2fe08e2e62141b92';let _src;

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
