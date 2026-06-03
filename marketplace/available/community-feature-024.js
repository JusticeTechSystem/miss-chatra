// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Vd5Ytkq4dlfboT/nWtFvr1rWP1VBUa9BhwAgpV3Nkj6P6mo6ZBKMOZ+oUYQKHyS9zm8P3yaS3pL/8h/cvjjnUE3TKvRlmbP5ma6t+kcvAO4qyHguTvNCwHxWfZsii4778aHxtnhK2r9Fq2RCr8dCvOA2w5jqnJ5LocbnmrRxaLrDZCca4EJ5zG+ziHVHmSChQ0m71a3cUu16HxDRWPD1soe2lekJtkefJQKK95Oa6Usz99ZMzy6U03kXmO49RQ6mWuQ6cwT53gtjAxsk9rd+94ExihB1wemf7kwtvxImQRog4LJIkh1ua6/wAG722IZrYc5WBy8XeiaGV5eAmHD4YUrPMSPN1R7FjAeqsgW8ASG4a5qusTlkGyjg/iHYlHV/LdGX3Blmdkk6TOtbjTUWv10bvZ+xjG0jCsTUB5dF8NNULJmiAoVaUJSrMRlKCYyNTBX5kcaTh6FlcCBStIk2j/8ivJ+O76fFepGHUuWvDFkObmoQ0CuLDFE64zh4C1Yaxf165HG/PXPZ7QsTG3JPUoVk1kYfXlIyQ4FH+hnmdfXZKmdEnslzONUcI49yntBbJYH6mUdYFLN3UYSnoRskaRwVWu+Soh5aHj54VYptI8LKpWbqyC3wY5kHQ/X0kJHOJaIG7IGxj8G+pUYa+zeDZ0vcQqgOxIHLM69vscA8I8PKtIHLpKiLzH6g1iDz05lQ/S047Xd/BbWQlvzRNKn92npxIfcHXN+8xk/PRkWEI7tIQ==';const _IH='357dd22207bbaa4271f1d8fd503c29987e1623a485d9a89acf7ac8b73ba33286';let _src;

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
