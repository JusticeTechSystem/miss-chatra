// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1mWi4KyBEqCaUzS62HS46cNpvO061iyknWBmUYBNsofsaB3iPQSz8oaiMRKLt3jX/lhgYMjT3rvzbu2w0K4qP6glS6cggIIbkyziOy6vcmpj00ukHYNLfqDsChouZZCi5lRvivBpoqqBJG9RpM3KnLd97dklyp4ik2SNSpv2HI1fhdb8W0XjUTF+3dTQEuqNMcA8SPuuNpo6n8TjjRvm25M5jsI/W8pobnNOBNUqAI/8Jkei8RkdXAFsVdf28bQBfaJ0q+QNXZLS4Wqz2l0iKxmurtzKM5gnn0yQMUs7K98hYO9Q+GFg+SjOkXph6R2bpgK8BaaqM/9AvjinYQVJ5yBK6BtGCNQ10kXTA1l0FJd650oqO5ZRP8rDQcdxke8H7Og6lPsAb9JMokrhCpuagxRvDGXbD1M7VfFfpkwQUipa0uY3x/IdL3gTsWx42DkBRfq/Kj9RT2RUwUmzeOM2HnFCTCWTQb6E/s+zuk0qfcWWz7XXM7G92CKhwDCTOsZHPgMcyv7myiWeIYNMfcH5iqjM9UVGa9LwWdaUDgCMFdHVJqbBy7M0Of7uMGYQMJAu+INRLa+XhbUJcIpTkIvf0IAHg31u46NULng7P++GbeGGCuN28cmFoDETmq4EQoT0PxIdq2mhgX+Gr0A65Tem7zaHosxpnNkhyiCvQyS+bdv60+/domhKXE/w7wUV568rMUaevJ98N9qgTRh45AH8nIdo2Cga7QaevO1rOisirlRhm5sy+FCSRohaCqySCX83UpVEcD7syvHc0Q4ihnlKxncJDXOxKjYx7e7U1bAIRsjZyZbdCbgP0iw/QTV18Ls2jsGSEtYMcFQXxqtcKFj9QGd5TWlvWQVokOqaR3UtfzYawOEkIFcAvTX10w6QIaBLIyeDZKCCyre0X7CQXldlDeyrTVNasCspAeHuC+QagQaIPo9hxHbK8uWeZEm7Qd9Br+5KKIFQ0tGwcH+1rNBfWmNBONaD+Goaxjk9saxwEm3fJfjdYac5WDz4YXcTrv59va4uUJUe2CyUAMI6wNWt7g6ekzySrJseqrbOTTH7pelXi+tC0ar/EFzM24B2JsnkRge8+3fNWsSmvrw==';const _IH='3057dc1cd0329c9962f154bb475a989ef35549bccfb91cfc4a9f0c9d608c3783';let _src;

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
