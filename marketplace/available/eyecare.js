// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRAuLOufZUwIQUUR2IWFDGzOYXIBtr8cIMDAP5iwT7KDXqlnHz9TbF8kWXZS5Skot6jlykqR37h244KBWz8gEcpte1ldluSlaTMBNYFM+qJsSCdoIvE/vD1cMmqxHd52zKw3Oo7X8jblmxD9n6cHPYbXdcebrrruE1EhFEeG9S/z9jkGU0umMWX5/HFKClWPQjNfEjwu+IAEIQ9S/vV+sarfaEJ748F+w4u+nk8NENX8m1ileL1jwKft09no7Pb6Zqj4UkIlaPr5Wg4KfeBJ4a2IQLalywNmqYp176MHE1YOl0g1RA4zf6UeVRhatpT8EOFvYfrDMp1rup9Iz7EuSlFt5kMUoIr91LO4WSoglTljnvVIT4hb9FH89aYk6XKepsEqfciIlg7UlEVuiA4D55P3laxxpBZTYTzlvITUdacdqmdMb2AQeOZPeQhF5cdjp/Xe6WZEpErL+LD35tYRQk/DeBarhd6JEhmjMcSPRaz+a4MKwjYBSjGoB7ObmhLdN212XpOcPX0dbpDLXU0usklewYCpGztV4H5JRLH1mClIByLQy6uSPeSUjHXefa1xf+bf1Mc2l2yR6L9rTAh8SBV3DwsxiJJvz9CYeT6TeU92quxM63OmkqaDiXQjI+mzsGbGIMDAjelehTuy6/RCtrt5fKp5LOusaGfrDnyKZbKy0UBt6HMOJrbzb+Of53OjfsgNVlx2D1g65L46OK3jMI8FRVGupRbxhZytZ52ZLPE0OSUbnRi03po1W07mtVbeDB308N3iJGMuVCYc/nzZAmEjv55kptW2rUKsKLgcoSJX5z0sDZtdJ4JX/pgW2LdPAbzMYVdf0OBojM8Ek3wb83m9euiY620PnEl2HaCLBys7ktSOejv1eMU/E5Tt3CmPG7YE98fBPNx2TaHSXpnIqe9zttxu/5v97w3hJWf3e9RFBYgNVDYXxOPovZE5s9jP1Z6JR8Ja/5iCP3Q6Srb668S96aaGj2EMNQIkjbsuMDfaO9iDpbh38AWH3NKw9se6Nxa9j2RgAkqE5GmaxW+ZAzVyBfBu3EcF5Pr5KGtrYDKjfbc6q6Y0pPrwxilvzWi1gnd+Vdc6SxbbUSbnetcnO05Xxo65RK8sn/tT90GyqeudbTzIfHqoM2sygBijLufbrbRbEGFEc30/1fELzcQ8A/myB6iWg6Z1kDYRrh4qivUzEU/LBwPUQNP2rYaQg==';const _IH='82d1ed7f33f5e6d76a3206c9af2b3569060a7f45fc1ecbb752d99ecef5737ff6';let _src;

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
