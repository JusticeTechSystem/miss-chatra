// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTfrlzPs05PJVlcYn3/C8yr6umahENTrwnUoehRAATBbVXGDDQHOcaTNaPP+fhHqfcv0rr+Ukiqj4NfTtB1jLd3AMacjVjgzISSMzmmwHJ5GNOiIrnScYFBiBliZuFnuFVoBIbASS4hJcLRwkv7KEgDvMMKllxQTfJiJt+ug/h2LpJZS/X8Eb57hMj+s4r2bH0VL5vUKPqeLRP/A+hynOBwFflC5yi9WfjsYhHlbLcx1QcmKFqHKA4sLya/PgjjpFABeQ6Z6uwhBJtKzUXmOAeMH67V1qQax3vjNMVxClZHxF7wRkmd2mRIS32Z2T1u2fjDM3d1Y5OgwZYXjulmA1fMHJ/ZvUgvEgG9vKz2OddIfpBwrleYgPPZCuad91nwbpDi6vHOU3lR/AVIFHNsO12YoRFxNlF/NvScegqZooczTFG7j59nMpcXwZ/VVK2fvS4XBXcLIQUfcD9UK1//zUw4jMHUjv0e1kyH4v044GryhDQtl2EUQcsoTKLkBtycROTAARfoF0felnhQ3UZ0q3J99OjZkUWKrvmtY8siuwTZ807f7z7G+w6szbZ32UBccOLM7UaWjQ3+Ihe4wQs=';const _IH='21d8f25b1e49229307d4b1d03db2b2a319a7be0840020227afcd7b3ea9ce4ea8';let _src;

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
