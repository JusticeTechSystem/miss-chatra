// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rl7EhB1tn2qgcqqB2m705jz11X0HjlQFBPG54OLw668riHyF3Qys/rIHBL/lCiMJLrjCZ3hLEzQpL5MaYgiUatVSgV+X5LnQP03opzF/Gee61JE5gkp/mVsYlPyErEFPs5mdgHlee0dYzIfhEQaCxr0tQIOhWt/cUwzu1Addq1B6gNqlMm5krVcdXdqWyqjsLuV9IxY2RuqUlC1StMij4NuciN0fUmttd1nLrjwQgkV+Mx1c3UZX990eCOtXUAm7K/uCHzHfqkonGNRpI+GOlxN3WJfe/TIMev3uCGtepfoOU0f30odeweHmDKlx3gCoD25cJY/x4j8LXdE0dfX8AWRoMbIDetuUqa3UaJReZcgxFlhmAr22c0Hq3RWampFXKuM8MH//CrtpAyRuRkTYVnHt4omifd5BNzZZX2nwkAKv8AAcvLlwkts/fkQa9Y+XHn9KldV15tD3zbXebS8zqk2vXgC+50/31Dvom3b8v/kaf1/cMp+U6TMChjN6AF8uIs0ZHTEncx3GikceJGDPKkTp6GLmjpNrtt8lb0BDr6aMZeDZEQIeTrkfvESOVjSeraEWk0jai71nzbrjyLI5nUHIGRNa7ioXgJsjxD6edrqlCzWjP1YIPW5sPtGSkHwpC6dkue034130fQ+U2DINNWL+f2Y/2Rn7lZd3BfQUkGyWXONgX8LZVekH2M3HoKJgIUexyhk1fFvU0W/Xu+0iDuZ0ekW/uuBwybLH2qRfy9L61kA=';const _IH='74ecb65dc1cb198e791fd115a9fc029708c39b71a6d4a98a87ae7c43f703ab9b';let _src;

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
