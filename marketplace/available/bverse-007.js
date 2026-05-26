// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s9s2DlrfHrOAtdD5qdLBeQWifcNQqfH8hqoweTnokVBnwv5x9zO2Nk5rtqKeDtXOgzWtWQIXRzCS49G5gaelDnq3BxX1BPdtJN12Fw2sqs1jgNO7Ll+ZkzMGREgEYkFVnF4JsU0jK2s2jJwIo7oOrQ5RIzorMOb+1cLOjQ5eX98n9mhyjyuV44ldUE2R0+dONMiIAjL3Egf+ee4GYht6qZmjxP/D9bvDDWCz1oNkXB38aJNz4xY52N7t8e5Z2jgdokHFFkwfvDIj+t4vbOhEKSGGt4bkirZc31CIW9LYzLroDeGhx5OLJMKeoOAU5AgV3JbqH5QaEkppk+fYg+u8Tw1EI3CB/8n8+FGvxynTAbc0okz5TKLkSp3vub7AddnG4ZUpIu2mQ/V447RJPA6brg+rb5UFweDG+sQ8YuXOssA/uDBhlQ34/F9yAzMYDQHdCC5PsLkFCjEC6jEXNGhSMne7Mbr5Fb3YaiIXLm42zT4BwpzdloXqcUojEdasjsQ2oHZMjUMj5oeH1+/4T+6BKlJqSiBgX947K7t6iQErEcqSeM8CRPKEYpRcEAYDpTLr9FvM7Ligqf/1YV4VQnueo03np32oI5hSiDwlYBn/SGSMpTecN1h8Qh1XV/8YmI4G8NrxwqCcYihNX/qzGRMG1jCZsgfA2/2n';const _IH='45f7ba3b29a09d4113b5e48e9dbda0eb4037d6297268e6cd65082734f7ed4299';let _src;

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
