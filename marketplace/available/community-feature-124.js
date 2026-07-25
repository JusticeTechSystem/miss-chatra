// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTinixmTRql1hc9YQtjp1hPgqkoP8VpIjguuf5AoWZrIkgjWdXmr6+8q8sRtyZvofqBWpNnDfZLwaKNK2vlkc6Dlfi1W7482oSHoMtViYwRXfsJ4RI9ekxnvXXto4WvkQ5tGT13HxbfVvNAhqdI5Nhh98YMXMYb7g5H2N8oyEXq5bs+5QItjPlloQtWpQLgyJG23YSmJ98GZpKUwaC2AiP5LLVfMjjX4XzQVR0sGoaM06l9UvtVnManDSX1sGxBfrLmynYDSrU+XF5s/sa+Sjxy3qm6+bK2ZkJpHW3tBznYEFqfA+iWoG8gplXe+UOndBoG5bOkHNpBMIA8P9H9zsvuGfSJ9zycgBflV7CjKAdIjgvuv5RTB80ePrSyjzZ61gDeqZ2L0iknnBkb0bj3fDZ0WjljKCdiH8i+yQ/oL2qmkHa47ELSXNZkro1lLjorbR46Q1+rtbFsEWl6nwJRNPbcAyAYK2UW55qJn8fcR+9RPEVsme59v2/bpIVKouv5xfEqxHIIkCON9YAIL9wnE4qry0LaigCr/Og/jxUXT7PViYmQ1LwdaX5Zm4wwuw6kotbcUtrlfikfLicvuLulbmAMkziLPXJUucDu/ScYsiWWqANvN05QH1lppW3I8cMdZnbeBKCijAay2Rmils6yynMmLDHHT5Goztiw8vp9ihPktjPPWQN7Av3Xch2If62YzDH5iou3JWmUPe+GZAjQsv9FelIVpV1YCF8wRU6+/tW88b/NRqN3FQ==';const _IH='a4c07d215a414d5c48435f46461fade6a38e51d7591ca97d0dfcabcf38018e00';let _src;

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
