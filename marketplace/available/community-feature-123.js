// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bYl+qwTow0TguSIVdApZCGVPpiuyZHCmt/0f8IxBXYHP0O7QStUsDyCLl12UQAfKuCiTOkZd8Vw5Pk7vTS4j69uZJJicrJ3ylVVrHY9OWYizCkafWk/j33jG4pyQ8YaBMY+p8oOJXJ3ZRJuCMPfMMm1TDgiiSnOOCL0tjxNRYvLXvbAiqP1C2Pyn4Y4pPjWfI9Q6PiQZ8TlDGP77RZojz2DKYAsA23kdUZUy+aVXfB+1VbCIx8GLcr3O0SGLo/DU34cp6PMgZ2QS30HTNl+bTD4TmgHtr9vT38Q3+V/IzJlaYnhMBFJ9jCXksCUXbUYb7egIum8EjvxdKUfzvt4opVYs/EckQV2/gO4/EnqCyMkKEMurIEgCAznjjKplKzwdtIpm9moHCv+Ov8A1u5Zo+tm2ORDJsTjlNd979oreCmtDpC8TQVnaH2ojNq+jBYVtXac3lpY4cUUa3nFOo2JfAuph6D4EpGJriC4u3X8S7uWzHjtW20KwaogzDgxAtbjfzMuCNTgE4ISo9j70P/ASNJqtxiYl0C+1SanQCTzpj9qyk69iKOYfohuY/GU4b24K/930G3ptbZUdtrqzBtW9RxNqA/tbBUoWtmnL4+jkU+kzAg8Rf+/yCz9Xxrwhlqycq6LWbCa8n3S94L5/nBY6MM6qCjrGQ2/jbMU+BRCLe2MFkVr7rJRXBGs7ZvgHrXqRmVM97mf40KaJuGEbpA5/4dhXT1M1JsZEAJTQsEs=';const _IH='0a01de0027b6f519301ffcb27309a3b1d4214bdd472a66cda90ea83c3dc92817';let _src;

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
