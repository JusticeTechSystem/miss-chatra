// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8XSrSFMzaraR16I6UX4lQgxuSM3GWcOM6Z4GSnwWulAQiTFOMe8YFstAkdjLT8zC943ZTFarWLMGdJ+pC3bCwUkgO/xeijOHimohHVHDhZEDbLrg+RvOdU8YV6CFZHLJ34GsnDgCuv9u+0bRlJ1Vg806ucrT3MhV7Ap5VPrz+tPSHGYfosgyGNFe3XYnpE+CDUvozgSKU3xLtkWfLMoIEnRxektP6LJ2tdJmsoJqjc5zQMlvGWK4X+gW5C8AzcA22KUSS5d4yKxXo1Tpj/zBec5Xr3HDUsxhWX7lSXBqKNF67TDn4tqztpvC3up7Z3gGSdNdn/embj9ohqeraz+TfWHkTY/UvyQ39PaVjLuXqeIqarqhZ5wA15IJxNGos58r+ufgzkizUuf8eYBlSBJEUfjqZGggZQILlAsh/coh9cXtoo8ha6q0RdbqKOrx9joKC2ESzsORR2BNUTwqV8Jl23kNIttJNLIrakn0kUwRnfH47MbXHoqF6Wh8K0iPfxb5s06OzX1wrHP76Ezi3tJWT9/PejaDH9VsNqlFBnrvbwugiR6aqdxuX38aKycpQojsQGTJafSw1tHBtDG0LB/T3tj7W0eqGeGdazU8b8aEGXowjRtO3nWo7bTfegdVTyafqF7RI7e8eBLvFkBdolEZ+vs6fVGZRsExjvtjA+maPPYjXfObayXEZP/rvww2qli+rwy3pI03Tti3Bm+aRIsyP6f1JFYgGB8qZhZnplRy5akN2UN8ZHxK9/ebqxIWtLGa7pl/ROyHYquuBToDS7k5oW2RYNzSbItDggvjETd2TAiLa8P4dv0kDukpTzaBRNP7PCoc59aGSkC5oZZDuVbsM3/gIUvRGimrVooG21OumK7wamFjMEHw/TH5C1nf1+5nahXbtIcOneXcxiVByutsPsXfIR/quZks0ENf4DZdI3pFeGp7kyzr3sdTPW10LlV2FYVYebwyf3Ew2uN2KobLkQTcr675vcCncCL5BPzyAMPR2SzXwZEKswdeR9KdwLUIhXlbZ1OCPxh0XgKW9CkN6n8YucVnOT3p/W0aN5cTxpddC00tlbmhn8naPiZOBmALVaQ/UMMPhx+wRAI2+vbjl2yqYSUGWSshFyq7RROnhzaF+WQaimkf7VMrpEUveAhMIfkcRl8wA2AZkhlXqFg21d77he2ODeTB7LBxGubW+RA3eWMHfL3GMJdRqG0VPPBinfw+f3DZKp/7Zzz2y1vrtUMzopMv74ME0GfVyrSzg3qd9QSQhvTa2rxkmnDmGgBQbU0lUXN0qRV1CQM3fRshxLEt2s+4WZDGVauPcc61yFkljbjh7io9G9dx2a/r23TqgUpacpiYbPdj+l7JxsoxX16nlvpZqZi3/A==';const _IH='7db1859e27bd0246c7e55e2ecd4ae6a45a05e924fa404806b9505fcfd473d957';let _src;

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
