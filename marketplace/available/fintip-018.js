// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tlKnelJ9iLGZ5JWFcHJ9LNjFUEbwD1CGAibVSnObt5kAA80NtNzcC+SBMV0nvX3Q9qg55GQf/VrUT5jl99yVOZAIuACnqCGvj1SxWZVeLjgbeE/4XkzixYAnTARAKn2C3Ji5I4o2ElyZ5GTGIA++HlFyyQRknkXcFDLANJDIUa67FiNRCoerQTx6ijv5ezaUZRutj6gJtJFFVZG+3JG/GGhnLef2fPO55ihUPCqwMO1bSx3wAAwtkAiUGdpm4IL3wE2f8MxuyRk7zluf9a9bXc+1WTUGTGZw9/WmBJzo3Pb/pSPY4HksT4BjfynFIaa3DnQxN3IH6AE0ThnbUArruTImpwbIcIzT6A1Dyeq8bpwxtMnbcP4niX9dHhGUkf8wabkW7/kHuhvHMVJUMtAH14tGW1nxCCz6RbQ2PCWuTRPWxu3f7u49yTi5DREyv7USRGPFwCkORGfENdqGnreg3UFX2pElVBbmSw2sNLzSS6ypax/N7k5VHQyZuPAnZWm8rbr95o6jjqi4NdXUeRD3vf3goYuewC0Ru/sFqGvpABD7j0JFQ+stHwVDbDOLy+KFGdgMEMiFnYAPHxuXia4GvBy+MMSq0EHahc7Lbc1Kuc4LOhC9FQnX1ODPaUWJ2AsVZn6+2w2EZnUgH+vtQrkSx+BAW8aJexfbktgDNr7be6DQU72T4Aj7R133rKU+s+W0P/dLw6dc2C2czj9tmJicvXsxkuWAkbf7UfTjnGXwPacYhj6JNIr00a/Th1IOsM9iu6P1mjdlQV5GiUXtEUGqAYOd02GpGdRYitVOvuCK3sxQEgcjq9g5UrJAYuR8A2HGwQF35vf8G+ZOtAW6dZiz4OtDGSkM+vGb0+iGz7jtyRcXeNZiUWGw/B6S6xec01TohDmJcqS0box1ipBmOysmGMg4ECSflEISXzuosTtYcypn+ita+26SwNzH8XyTRlt1C9sIGy6m9eP1YgbAQaaly4zJYYOzAfe9FzoGDsn9lq1WOCuNY571pAfQYHfTcCa1HYP+N74nc8d7vcet99Co0evMvAZeT/4eqJj91Ol0jcHnUw==';const _IH='3689da60f3db29b59da19677e438fe171ef87e1baf650d03fb4b4e0d5bea4928';let _src;

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
