// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jtw+bi+dhfalkabRDnMgmNZDBMzwxvgqCoZXTVAb22IMO58HvOfsQyIqOIi1OXam9Ho6jKYEpSITcMWZYsuWNkN+qj1IfUX30bXlGuaWeVmu3iLTi/yh9m/KN/hiMsil146/DvTY/NUQ8eTdDsXHMhjlNwm/yNeZ/zgvWEPG72p9JBYt/1AdfQ9Uq10mLMzkFWubPP56aqM0X4sMjWzHK6hIReeZDXLlyJQokE4ua3SW+3OXkZWenDDXhQvE5PLnnP/0t8TqiaRLzeuvK5/fZWd1uqkdbkb04MZgKYRvTPTLOHPytjI/T4VEdsbnb/4rDV3Aq21B/dS55++2UPBJSsr8PuhQvSuSGsmSlk8pKhFKIJsBTfpvg+kx2Qyi9nLM17mQHBBxsRV4kkqYg3TgJQvhP19IGbKeHIEFJif+4DEaXpAwZsiDV0KHhvU60hm+1Ae9oJe9rJjrpKFtAgbmiVBbatAmjCvWG1QS9iKfHXyS9T78qODLgcs7GqM3pyE+dzzCYVfptGaLpEwAyjgf7LX7FzrvoXJ5LIibdDlr/hoKAnK+LhztEE9Y+a5jO80CUzvQcNdJ6aYWFElJi/kOHDSKWFXYOuXP/bSlfOUTl8E1P/fGjl7VPRWK0RNZC0zPT3Wa6qNhG4+J/0fX9ekJhUWCsCxUP+ruD8sZFmzHUP3KP1aOl3t6HZzJJLmvoiZdqTAGW5EHleubPBR8ieLhnON5684tFpZRZq6uxFkeYjQNPg==';const _IH='77d46c6e5678fbc8c5b56234ecdee346b1d8563197fd81b66b97ca13167de96a';let _src;

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
