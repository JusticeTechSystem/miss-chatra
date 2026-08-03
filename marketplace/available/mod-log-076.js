// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQttTE7tWvOqOTo9U/6wJBJm8UlL2sblxBpy38a5G4kHfgDwh4/JpjOzNgu6qEqkC1hPY3CE3dNUoASZvetLZiY69KmndzsxttihJB2p70bA8fmBU1eLI2bQFJ0NF7hlqIbe+tf94X3Zr/01kO8HBMZXtT3TMeTzDaVC7NRQY0pnknQyxviYFaBUalICXCRA/1Mgwyx/+63EICKc9UTEG7yQ2/QRT7dpYFN/vxOZifLSXbDtA7UdZDQoonKO9SUMbzjCp9iKlB1Jn5m3Y7mRRXHBoTOJsEhURvudaggHImhYnAEit6JTDkiIfUvZgBjQrFG49EU5Y0kdU3lHd5uOoDgKPPep1U5vN10XR3LzPl1NA+l2g1zjiY/5s9Te3P2LhJDjXjUUiLxr46/pSxdhE7LBrwhwlWc6fNmP4EtlSwOHoqzlfOkP0xmvG5NKVILHqi2QEmBb9CmW8BCcsNrUtnmZi4RScHSvJ0+y9pPjr0MuVYhvFn8TI7KByr3uf2fMCTLctChqhv+QSKvaAJA6xsS5sFyJVgOVWKvqxHyvqMnn8f0TXutAn0LdbRa5NJ7ceLPPjXtFlC1pszQLpIcZNVsil5A8S/OSBLiGs9pu5whd9sP4j7weQ6+M/Luct5ibIAvb02T4oYJ8Oeq5Dd5zVaW7Q87NKDrIIr55CeORbWbTC5OeQ0WWjFyc3QtCequIkz3kghgN860Smi0gTUP8IH0eT1WYEf/o/NyLKyBP6jfrOJ6B1tvpo5PCQuR+Vyy+qmIs5u2I314EVOkfvvH6/s80kktyq4KIRX+YRerq8NWntDGVb8l9Z0oCHJkU5h+cXcZ9c/NdJcCDaWRsB8I0WcvbKmjRc7yij+XqA+OHOeWDG4D2RO63ITJxxvzS2f6EFR9Ui0km/Ngse3M8rJQEFeeCprZmyEYFVeM36LkXRbmOWscPxuJt9a7NQZ5HMihWLZ2L7DgR6kSHxotlUco3LSOEI/nDrn+AriDUuV5lTCKfb0dJB1B6pBoCZSQHl/5/Ea+XO6Y580SVQjIhA7X+v6CFqIH3gJvSmRJFG58WxCg9dlcI7k3ZegnJtn1N2pepjWbmvuNg8v7jr0eRSWvHsj6LTzWrxR132FHglb2jfxNDMoW+rkrFN1E+L1syc0BHjx3ddrFPRrbkEm+NmOgQ+xYkDCSwStYZ3TmYZkcs1fHjB6sh26D7Eb6PHnzrZzi3ONQ+geq3bhXzoc5V0A+m+Oiy4FHrJc6eMTViYy1wqk+394LpXfYN/DVfcxyAv9RqewTJgMKvTEteXIpi/zQMWvdCPlQdWWCGdKiJb4qouncided0JjtB6RRt2Wa2rQ/ZVnS2Q==';const _IH='4a16b78e2ae7e1780f7a5ba26448244b88de3607a761a4776ea7fbade5b70032';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
