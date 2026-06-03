// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2tn72UKUMd547GRKhWQSfoIdAC2eJSouq6qJFiv+Iqz4h9oVemuLdmgYfAiQVYteoPHPjd8ueZ2j/vDxAzkxKovZZs4Rec87nW0lWjT7qlWSXPNQoEQWtKkoW5LRIhh6AWi6qxpikYTkN2mJfNyt9OwlZyKE7PLQRpguPXoAW/jHgvOZn2vTZu4AomeVO0pGRaZ5zXEo9KaHD0DYNxOIyzbyJebofnOakCmtCoE1d2KIvsaDVCH93kGkAyNYGAsSZQqiKqu2kP7UmXOwA30h8PLflCQbW5hrKzPCXOfAwsdN7W+snO8AF2x7ndHnv2E/vwixp9byTxcOxmwAqNgAt6aqDluML99a94neTXrBFCZ7V/3MIEmAY9FDEWdsNG3JNlduT5nQnO/wLfsTICo0Ko1UOQ7HW6wqMDhACSRUqtZBJvtILYoGsVlJBVQonjx1Dbmn6nC5paEsFEYb335f3hDdyFNDiAe1d9PQZR9S1e+XnJm6abe8UF1BxiZixtpkb2dT+MFV8wCxddbqh9aFE5Zv4OjU+/tJ9lP5xl228jKpr9XcgGWIANOb/XhuRAes+NqYLE9QEUa9GqGucCjbpS6E+rH0b/c4CPdY5OYcUoqdJIefKAe+wF1HOdaPkAFYk8DUVEqn8uIu+yAEAAULRwnQjOhjDHFLCf4rP52QLyKjGT1Qv2QOSQAwkj+FAeS/tfuw1xGT8YIeua1TIOBEven//l51mQlAmcecR0stm3IigvQZJdPAgtFeNzCnw8waKX8BAEn8DqpaJSRVZn//lX3EBzvnIMITjM/7/jJ/WhpcnFyzHGCayBtzZpTYCrLI5CKDa8wD5+rKXEbHIdeygeAwf/HQ+Tl8t1dsGBCpCjFrr8csWrK1WrJ9AraT0vdb+RyOzGTb2w0PKWYM75FzG9kaXbxdvDZrFGrcW2FkODaAOVpj4hxjGjZuwcXi/ckPTvbPdLmr/mpbLDB+EZncSQbykWw9fXmse7rX1ElJazxZkB+l6mBpNJcRkAEwMKSOyK36gnMV2En/plzXtYqLU1WC5CxZga6IbMm7N5t+KYQg7iRZGa3h0VY9Wcw5hAXPAWJQjVFRoI0TfMbck47qg/GsOyeO3x9x6z9ia6egNdQm5i0B9cOVlMsPMq9cU++zn4aBF/yjQBhXlLVpvB+uZqomDMOE5i2iHJ/DlTAySx6vleb7MKRHKgN/Z6rsYnxVldWA14h6mVJjPqG4c2c+l1TX19Sz8pltTVIAjx/aWRULD58iMfe2rL7bzFLb9auaspKLWHBcj5FmHL9sAjFwl1BkFvQY3KNYlXuZkv2WK7yivURCzOYT1Pecu/KMEExCouh0X1pCnJIEotxDbH5axujwlNAKVzTTOKPpwFVctUET66MHjmsKnA==';const _IH='7858fbfef521ffea1c343a71a74f731e5ce17a20c7be12a266d85e562dbfca78';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
