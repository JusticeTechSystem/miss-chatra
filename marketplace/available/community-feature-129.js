// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSf7oWs6j3ksXe3i+OxhFyAxX0PPLP24hQ3amecS9xMi/24QWxvR/UexnBzV3FYFPN9h4/FxfS1/MQZz+BJJhuTBS9EIBAcS9w3xspurltjNOaInP0nXCsT6Qm3cOULumxqBhIUby5/tuq7njB4FASjsrzvJybJmybPDeO5rzB/HCy7GaE9tNyM1CGP+spuagXkI4ZO6mqlwa46ptbxK5kTyRcYjN5/1S+ZdesmhBEKsRVTvT5kTeFEC34jUCOzWgShWCXUOwZKTPSkU5obLBngEGX4748O+BB2GRhQJ/TSkovHuutAM7NCOme/+axhZFi1tzEGyiFRLidZ5sEEAG0EX/WyBhSJUsGpaUnsjqQsBN+0+uqFnikdsR/HL+YBQkb1Qklm9ke33RmrFFhyo+YPcSqiu1VLs7UproFDfLit6QYl0nvuW7FjLmCQr0UJ0x84CxkxQBfwHPMQdI2Bzm4wDsV0NxcDcK9KXIxlsRyDaPzBl60r8aptOzuownobXyfKIRTj+wSeAaocvu7eqi/WZrHKB3qRxRqH3Nl/2u4jGksIE2NCL/k62cwVD0dEY9CZUYFJnYIf0GrPTN0Vjd2b+ofi1RiYN4kPcQd44edapEHwePjvJq3X9+rQJRbJjDozVlIEK+qmQk6FONTP+3F0i1Lu+FfZvpJgGeB2/0bXNCdmfDwVr/vKPJN9mTZjNndX88n/jTdjOE5EH4uDXnBd0/4No+8HSR08WG5Hk9gG+ZTH7/LpA==';const _IH='e83dd4ef3ff044792f1cd9f002450974fc034a162f0fd04ed4fc489bde91b664';let _src;

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
