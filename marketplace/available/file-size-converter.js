// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2GjzmqcAOghq/KGlIAvx7vuMzHRugGXKWuiShnO5spwmunkD3UWgj8HGPpi7zxCnhqHB6zfiBi6tN0luvEEc2BDVhUOD9cbWLfxmFaPUJHM3JmJZ2iALYKot9mjwEVXO+olSNGn5vB5olNba9NS3CNYdgj+YWfE/zQSXYcVhJoEdvOzNiRW2KKbOs8/cnDgtIHP5IiZMdTchqR5hNsShgomerA2RUEkA9B6VVP/CpD7024w5a2/KJjs2Wqv2RfuDU3DU0QyERrw2E2snGgansI4/xYuzSOqdqEclQ3lmS183Ygx4FSGnSMancXv70xif6m/+C482Yiw+/zvTf8YIcTxoGZm5NVmWSJyXKFzVvp3Bk5qG8hrF5nRNNTvIp7Ak6930b4x6/nalDLTQt5WO1OaoZRfUWLpAYmSInVRTur66rFC4EOjmRga8KOtK4rzkovzf+hmHzblonN8TRQ5fBNcd2Qzy8a/5ufAN69SkDPLTUVJzv1cCX2UQ3vcLN+5WvIVsnO5SXK4KlWLib8wNv7msq+Foq4EYKECoVzxbV2S1MrrsdnhJJswLki9/lIMhIBHWG9S007fOAFjCTALL9VWhirSmonw0Vok+jl8z6nzKnDTmOfPXC58GQ0S/yiXA8mSrveA/StLOA0wRrMH5VGDbLIdtpiZ+Zx3VIPBeOwbZAfx36H/JPeDRGvDj39JG+UW9CFdENb0a0khgdXsAtgjKP5yy3kI2h1repXJHU4DDbFY6P3EsvkIyQdxwmMOZLNrl9bPoGHVsFPGDIRUhP5i66gFGfW81MXP4SsGlznNnKHy4bRkiTGa1edZprZaFvuFLsiFQXhQnXAvKuYjfvWATVNZAtaU7ZfYl9Yc4PqkjdwAVRcAWZz5UV/A5bEo19IMpp/dTJqpaA8OB9zUOEeUaYsXPBuL5R7Sw/7pSCSrcBvGDHvOZN56M09eUjeOC5nYPiIa//OTaIlnHURck+X3aCxDhs6B7ZZ/aMERBeOwXxc6nTENDyqx+IpQtfXNgmNgPj1VWjJ2Y3eniIlfNmINBmUdd0DWQ75Tiki40W8h14ai4x+LXyKxI5HOy2G+EUTiWHHf4YGnVmgVxG51myF8z3QXBQ2se1JkWvsT3WxxjCj1KNNUHAW0H2zmAeAmpHbyS5B787FgfA20SXFBXSYjQ/p+vh+B0v0fup6HbG3rMMezNLJCtpuhpn6vvw+tol3zYMd6OBDIZD8sj1nXy9KlGxqHX1kSYapnFfCj3lzSAqP8Z4Gxi+0zkKwfUTvF4H8ROXZ/FNi01NQ1W8ZjvYAoLuvZt9lshpezMb3MbW6zHMF/eFjGGrXeCpAEzpRmvMnD3pazuBlhjnH+Co/IpiYRh/HdqzchpaW6d2iNLiSukQfBbAsezZk0PoWdp0eKQQAnxypTwChrxSy80ds6lDLV2EPal5JmNVKBM8GXY+THXbiAcO5PEksfkP0x7qWnipzjvuYQMcIjuscvnDPdRtQjR/VSZsHmEajIeR1ugtV2y3a+1mKe1QSiXxv3VrVdOswCT6EciqS1HUNsJxHqRlT9qKEdDrm9xZR7Ue7+FT6oGDuRklOqPnjzjVDDIGfjTs6pbS/H2vUk7ElENvrsSdaZ45COc3FwebFu33P+gPAR+Ny0O0gsuJvY/lfx7O7klUythFfB9+OAj5m4wArIu+jA7ET/nCs6Tkm5pRBDZWtMtLmyy0aQrTygvw0Qs8PRsrDbMNdBaPfMK6owV9IBy66C+eagzfjYct+LSjOre+a+KC3WQ/+9uxG6n1Ib6+LtrZFe9WRD6v2r/hulN8ID6Dsw2Gb6h+E2kfGaV6u1yv38fRQ==';const _IH='15f018c3aa65979e4624955f553c6acc3795a39765d8529e43ea687de1439d4d';let _src;

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
