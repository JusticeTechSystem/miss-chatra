// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw+p6XK9SlCcL07KKCoFjLN7qmrgnWyhpcriojW7sTzvAcMOp25Uxpp3xNuLYWQ+GN/5O4J8xrgEb5Mn6bCflZiCAf6FHOo9MK1zaJI35+wEc3qZYBcjVnNTNOIOjrGkYhAd0JyehPJ7yfVmEQtaHKGjs33wqSQCzfg7OHu2btWEbQWwEpwfyNEbW8AJ1j1lJR/axlOj7+SHRtNSUZaULniqt+XfUhF16/XElQ91MJTaMs2gnPNxZNZTzbftYpXMRmeXkdPxXlkfnlaNFLeYJinFoIiH9lTIjNCWy1mGLti5UH/Ur9QHEzgF7be+TkqvRuYyPmtBp7ITWhJknsI3yLEnjkfypvk4Dmd0vzPzl56b6olncrO1ETeWqeOinAe4w0TJkCVzWLrAdqee6kJ12AmZfeqa9FXi7PBOBDnZeSayjlSal+esdRpuMJDF9Q/FHcMVv5mVGtUB4jGh4sOFnREQp8fIYvJ8P2GD3xjkroM9Ury70Vr2xkTGvNToCEI2wwDutpCYVwWxPUf1F16Y4FkFWd9rhMEO+Ho+Hcx6rMpPNnbIAC/E84Qj8XYDHqj8rv2LbRw2EHm/WYRWE0XP+uHlOrO7SkwGiVijhuoJKtWq5Wj/KBtgu6mARqcj+C8zncG7vBpDpsdH5bsyjfe3R6MDTv0gKvntIV2eDj8p4lcG30iu7XChQEPiGTEXT3EnJLd2OQvxTXzge+zNODKxyGP2iPZEx4WTgq14/mGL07CG8afHGuFYi7lK7cE2YNI8gly3sTBhxjz6DQ2PPYDOM39AISVPkUfeI4jDwKlyA3wG3IUWaO09o6RlgscAPcJIQ8y3P2IGoKKo0uYscgZUknwwFROOKmnEysoCXDBCyuaTJajEsHzdx9AaPqY8X5L0Jpp3ORMrEklxo7tj/+21cFh4ni/g5F4ndpsqBiNG1BJLSk+aFgXjTB3V8ZWGnDxwfF5RZIC7RSo96q4IlScRZAapg/Uc2sdxH/RxFcY5eshaS35J3uTX3VsVCXEaaaHRj7uyN6I=';const _IH='0dbbabf0393a30ba29ef53d0d97abd7095050bf401119d2de3095336ad7f3523';let _src;

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
