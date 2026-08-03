// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOo2+0gtbWNLs3gczPvi7lFrr3h0Ijn14VldErAKID/7z5Q6peMYiVIw6Q2VepilwYkIuTBgi+FVPVbkjo7OlJDGodwtu7TGFBKCtJOEibxhN/DPse2im9QBv3JtH1rUiIuavH2uF7abFXRgpRz8xtFxptWR40VPq81sn2n18xjXmysRuJ4hhyEnlKVb3otZe6JtcWX8TJwTyoUpcU1Zt5DPLFXclg0RG/eusRzSpCDoh3MiSko4/iKTBVHw6s0aesufhm1RSHNhPnOq7BLQ86Q8zcl7Lnkd4eVFsT6zR/NQH2UG1nhZyeJ00PQmU3k939iVbdPjYu/N6oagWy8Z6q5OsusIop0Dw5XHnaOxVwx0QEodAGjXvMFE9HKhmkpCOO9RZpiFahNtPY2R1mQ2v5w4bqj+wZ0kt4YSQWQOsoCxvQcwxlxmt+5L5Lzbv53mCsmgdqCr8MoLIA7RaZXEF1EstvRfCUL0WWHDCfbVBX6I/x38ekRxuenuZJa0FVVH5p7uGIf20c+orsxd3vk/RVg+xMsdcrbBzx28r6t62VMqWv2WVu6W0O24fwCIAZcIxo3DAIEMdUm3MgsALhPz5sIXC8C9gX4+oeYlS6D+Ay/UOXPY40FQ70RqeAEisD6DDjMNIu68Ndk/0IHrIzbq4Z7X7O5PXi/D4f7vg9o5g1c+1hgAtVa7gryVcnkP2DKmEqpGqRKcsJQVdYBD8AbLGQXtmwauW2Vsi77A4p3EzMJwYKaekpRt2PQMTk6Pt/3DuS1ZnUgV4PJ/VrvymxB6G5EWuKgxgtzfBgVUQeR72e9G7znq5sx/SE4w+5VJ8I1FeeOhR/AI6QIqRUfpCfui4tugqc9Aprfq/ZAjkzfVOIeZxpEAJNDXSZwHxaS1z2xKBF+Lhl4xUu+zFraGDZmL96T/hFUErQKteoHsh5Lti6dtTIGTL2PiNwRdcCvTfOY+l3YS9wcWKbjQDULh3c6kAHQKxYeGfijBK8Idth4rLMrFShiHOqy17NAk527CSfIxZdR728dBIzo8o2YzTI/nPMDXTKXLiIGdlQEANolS3dpdo2PhCzHJMy5v6Ogt94ypM5UbMrLxaGAAEEjFgzRVfkbdDd2E7LH1Wbcgk7QAxTbHpgRCAin48+qdHWezt2AZnL2v5TfU1KnuZABZsecMOcSDcLenXTb+LT2rR+lVDzjdDJER4HuTHQRU93rUDfMcuW';const _IH='f37d8dd2be2dd26219f87ddf789144a7944488f74daeda6ef72d6838c3b39886';let _src;

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
