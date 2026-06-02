// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9S8D8ivu2Nb/W71WECInaAaAfVsQRDZ9XjYQgxkHUFS5sncQwbiqT0eYiI47pRNl8kVe3AkQLyD4usKdbaeL4HykbJxSNGb89lMZpwigFJYSyPMK4F8ZRL379itxRfgBWWvnlM7OKCYvs021EsCJkBVdr6SkWI8C8Z9tf3d3nj8N15FYeTZ2oTRRsJSaAp1zsM/aJ9Y/lww6mCUCIWFIYEuZVvjsQkYUnIoyplQ5X+vMoyMZjcr2PF9MSfZ/vC9cB/9F9YwnZB2/sYXTPFVZC7dc909F6QMskEjRWcBIZAqnu9dDXZ2PvjXiA4fzzacw87dghQjvETXWrtu7EVQl0qi/0DiozPWM7thvh/ONdhn2vZvMnQMEjX67O2gfJNb8eUEbfLnUKHxxHtdBywGkN3gewhyHW1dWDrg4FC88dzSJuOdNrrrhZ29Af6His2gRP/2eNbHJD0ngQQdscPPEjOShWjiJ+/B+X3Gk1KOrHljfo5+yEmdgML9TKWOv3yjOIIzLXkwzlFNijvCmokVZcDNy2xKsv3Jxnfb9YBt5ZGeEjcGRcL4+ZduBwAaFILiAMP0tIjlHGM4SpOKIBMgSck+IN+e2BBpjsSR8qjDCmkLq/eI2j6qdLnVKG1AKkib+gSzk+Z3DkGk4RydgW6+zHwxm8203hL6HUCXfzyXzMw3A5Z4kMq5IqcEKgmW+n1U8aGbpOHzg4G0HJvOf8FKqxK5q5joieSWNdIzxJ3QgU0wL1AYQfSpsLhZujmexEER/lWlcUjwHLlZxD8gPAag+5rDteLG+1SR1YfsXxxNiX7VIEJbvMUQ7cH6Er+sBBd2fmmoYmrz6Pkenc/pUe4ixThBEX0nAyNrHqec1j6v1jHL+UQ2sOnSm/hruA9tHwBj2B5W9moAC3vj6TnQtxtOiOhtIoz/zhfcrLNAo5Q6k7QD3GkDF7Tzk9TuDjjB+pwEj2TZqF9PTMwnIzyhur5soR5/bNBUG+W2mFRWkH15aHtVGAc2OUIj2fbGzcwfVl/jjpHY7xJqfXOezUvYTp1/QWYxYfw3m/tCgeI8g9CjyW4yjUWjNoJfeE1jtBm71Z1Tg1Z5daTz99E7K7YfE+Gnt+o1inimFlEWGESBJJ1ul1BsnoCHeG2FdeR/sJmGgyI7MQorcYxmF774gQ9fEQOEYx7xL4aMUsWL7kh4xnYDNEkRYc2kX4mg6bfB8rZN1kvzRc06jhr4IvWOdmTs/25PPig0X7iHhWZit2wXT7CqvbhLnbjZx3kvhgBnBRyFTNtNPP72CVwPFcm4SOcjRTs5YaTJmtk59qkmt52HEtNvOrbiISEZk2A1sbH8om6M920n+RRuPeky+5TmmEw5biK/5mF0n1SQ4ZvMFNSFJK6+CmBGFs4i3pArI8OyCwr1AESbEZ5lhIlo/0w==';const _IH='4b8158dfae88f7a87482427af97f8fa0f1bcd5e230a5ab2abdc7f013044076d8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
