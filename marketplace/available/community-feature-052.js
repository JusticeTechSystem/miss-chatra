// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4NAU1HFjaZnk+2pkk8mpAmD27dOAP+yyVnJ8iXX1vYyQF3OhwYlAb2KZ46Uh0hg9NPYowk/hcZwTU/ZuuiM+Rqsf79nsPzDSPPH36/kD4ikThlKV9nZZWD9vp3t0u3xvtUIISXcrascKT3SHQrhfik1TmZv754dp0Hj+GOE0fcoGNvA9Lc6eNSwpZD8QmXmVHDqBXBtE4DzyLEAJZ7FKNP5oRrCn/uB4zMZFwO0xEb4/wCsyHB0cpocJH6gwZrT+6bN6UjlhflhpqsPqmC3KDjJlA3BTEqTwHVsOPf8WuGE1vQaj5hH8GGwrX3g6SAG0ws1NxuXpxO9luuQK7lLWqPJ2MSnedPwHNQmdlYGs92ymzX1Ls2i0NBralbmTng8hK8MzklshuWsCNWz6RiGWw4XJurZDn9/jgYvaJM7ZDqahAD+mMyd1IfPzYdHEBdEQQ/1+h3WhgG0JZ6Y/DXx5T3KJ8dG+gTEZTQWkpsRz/WuaECUVAkRisM26tr2Zgf0JVzCk9eyk0WMLW13DklaDynxQwg/IUeTp1oU8sPE15QGzi7Yy6dt6WFN2omD1m/mGRmO+6KnVarNYHT4iO0oZ5BH+TiNURM2upahxb5lUhPTNOzcc3LJ6OEs+afCmy4aitCJiCONVg2xT/YLFaj7t09Tqj67z79VAQYe2n0kc7oUvRpxvInclDrjXx9pVjpJ7cRdPjfY/c8fDmy4ji5p5AMPlSoD1bDawkze6gAjlSQ=';const _IH='53505501670318e3ecffdeb37c8c0cc716c56175f16d8f2922187dbd4ee453cc';let _src;

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
