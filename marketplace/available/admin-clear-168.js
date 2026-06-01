// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0kEdtk+bgca0f4hFoRcxBDNy3cYRx9bgF50vL+IHlh32yjhWTWgQuZhiBAF6LGLUCWoTIQKAtcZ9ynn+TmgjWMcSu0Wo7d/dS7hyL0+6u6ntCC0Gm8NqnCgsUiAAMm4bQP10XEgdc5Hcj5E2/1S9h32iIrfQv89vNodABSKoPVoVyWmmlrU+jfrtj8TmHK8ZzUAA8Eq/VQ2r/RWKqJqYzg81l+pH3gSaeJyoPbtLm0SBfu+K2svt25DnQZN7JDV5A4Fl6J4+PR5YULaa9UwH+Qsb1o9Lq4AzGuXK/DLx4YndVDnCAO2+0KLjhDGWXzeB6laJLbxI2O1eWr3S803OxogH23qfqTDLe0sdPTfobzfGx5q3a/PP4qh1M0q57J4bDzFyCXfpy+ODYtwzl2AWqX3VYweLLfx0q0I2yFKHHOQ7iD28zcw1bD8RjSbiOd09Kr+FmzaXfrJ4j/plP1co9HHNp3eb//H6kpoe21+4YClgM4LwjV6D+HEgz2MU+GHmrs75zB1LThfu7A2lywHAn5JorhKsAFGt6vEuiLV8RMAtAOF0NRJP+YmnXpTsfJ+DYfVMcGkXSGi0woKXvi8iMT0SD0/CBKFiWB98E4KusOdmKDQrrAd36OTmUMpBQ38MGr2P62yE/VZ/0f5GD5LZF0yuoDE/04hJ1M8VrOVH6QXlr1/eMuBWwGsldqFjr8YBIjmsEbgZN8hUMnTr3wYQ3WkaiKASvpn/mcYoV+aJqgANELc/jhGixmFplj6O++fNsv7u71RVhXiTeRvzhoZESftLTqd/xKtFWcGHkUJPWEfVpW+ar3tbOrRNEe5OGDBVBOYjgs0z1Nq9UBZjnM1synWhdY3M7FyzT6cceCU0PfClg32pYQdyhCDgP2IESuPOKfvyFrPEbRLdf7EyNCfWIOVIjvNIG72yk1tDBZpZU5pA5lZ08s7iu6qI0A1y3xv/it/26Eu2COKJgfK18A/7di5X5J/wHebLeUY7VAuR2WEf7kKDp8D+AhCMA==';const _IH='452a91ffd00c53f9c0e66a02cb30dc377b542cd13b540715d1a1fbe73f97553f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
