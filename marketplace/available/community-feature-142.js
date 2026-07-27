// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSWgGsm+f6DKZ1Lh+/eN8YBx73vNCI2nZEfVieOawHRFc4IFhCv8sUP9PFyyagcGMhXYSq2kL5XtOf/0x5J/zhOZrj2B1XE91BzL86I86s3d8VQRp+ZX5SyK8jcELjwCBK2NBuMjOMSUbe679HQpYT3mMw3lLExVAxloG3ubcBhs7S95DkpDqJ6Ts6Ji51lwTPNNqi88iflgeJEK/jEnCtpqEjxwKgBp5ic+SDWE6UGCekxOlS+Y89K75+fN280Ih5XkuRHxx2VJ+62YoPX5kpLEIAoMkZtPwCPz4DjDGFaVgf1fz2xiyl4WzfrKHjcY3gZMY8hMQJJ7/b5TwU3HroMtHu0WwD2XkAp830ti077pO+0Ro6fkQokTpUlAEz/eAHlcQC/JQ9d6P+o9XWmKT/8f0XSYl+BQi9dba45ly6vhX3YeFKBNrorWqqKgryiHHIUtUCKBjFfGRlFtNWGHTEYLlSRdY2Rzo4gBPtQVcVfoy0s8uDvVkoyp6TFQ4lbAsG9jdR4KC0ICPKU5ke1030xqve9Xaj4a3PnS3T8ErkMGeIJl2kAnFYU45z+ZqZQZCAPaMeOdx2XMapbKXzkcN/d6ILKHm/5HaQaUMgMnayHxP4CI2yEn0j1nJ5qPN/xcLcXkJhpoLuJBsKaXCEx/WqHWulObOkEToc2C/s/soaDxEetI3FoAAwWvhF0rXBCdmp08QJ22zd02+JiBx7eiQRRqMyG1cxd3seGQKTai7VqEeFILQ==';const _IH='3d42ba77cefda4e45a0e7f1bcec9290442cc2e696e73014e63978348d22ed8f6';let _src;

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
