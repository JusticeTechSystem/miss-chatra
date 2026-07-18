// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRVUAUCUONNz+XjTYKYmlBJV+zewnh2tTTKNQbGiIV6ZYtMIKK7fbJ9XUQY0/eOHYhZLfRrPfKTKtRKFn1C9Oe1JaE387JFK8/nzcJ9vpnXKysjqUv7hUxOvL8CGfpB0R+p+puUbADOrzcaJGi4Os5RuI6YdNBs/j0SlXah8pJaH3ArHb8NB6MlLbT2PjBYJsHe//ZZeRW8v3vVS+IdipWFi7wM3PBgjBxAwPyHUNbVq1AQ6Lf94xetbtubvrZAfflf1OcZh62PT4K2vp4M/Qn1p14nR1iX2kfwzvA8RFywI+Kzjglf0ZDpW9MBgT43utMPD9/o+1kdStWcVOOrn+ea4PgVsuRkmOwVudmi+dRZhFmGFpj6K9GA3mbDjoqCaDuT67380g6fmaPC62MNjduJkAGZXg+cSuBaWKAB12TzhRdtW6OjcsQ3N/Pd6+3KdaEkOn/BMEF3PlZSvPtTH5vEKUAv7TOXlXKRYyqv+EnWwv5VZ3FktHbc+2BMLEekS+/1GzOrX5btD9cuAHdrNAmMDcFYpLeCYCJG5OEwLNQj7yCH+TovYH1LUvwWNjlOL+EagAnWzvRkQaxAL12CXWQMhRnWDqUTxNtgjHIVVCKSWQz0+Cnvg1SEvpPGblCxQ2ocJFW7hYOlDxiiI6QQyzuk4+SM7acRlwn5JmQY+l3rDz1kTOl5nuAxTfMVCjizjVtbK1UizmKIe5sUy6CrIPZmDoyZNo12Qi2EwsdZWwL2TcGey4BVKg8Ba6qvIi9FmF6hUUBm2Mh/BBEyMiUkW3g+Vsb3giPE88On+ASiUJN/2TdaJrA1Y9JeN8bAKzVtFzcCfC3vuAKEyQZ94MNXFl5DijmlWVxU8yCrcE5A21luDkY6pR1D7vHv20tNNWxSGYeifWnofMwhdTzVckAfgDHPWpKAMgJIS9dxmWSbk0V8zQxG730i468GopCtD5ouQdnmMbrEocJWqTxxoooFXC11ycpPeZIIxH5ZPpI6DKYnSiDEt9tWSaEns9Qmlf4gWMxL6o2XWNB6vw==';const _IH='432d3784301c90daf9e5e74ec564c94efed73c599c4d91df8da84d3896a7a53e';let _src;

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
