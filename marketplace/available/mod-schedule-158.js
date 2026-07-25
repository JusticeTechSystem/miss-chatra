// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSsZC7CJDosDad89fteJuwgaUb17LoQcHU6QGtTUfnuhs6A3/HL5KTfke3OYvFQKGJ3ECyHTQovTkqaaN1AoQSYbPlIsmlx74fIyoTY/8CYgtqAzoDE/3yIHASxU2bUSmkw2IBgDtgwVh/QBFcIFtDzy6qbg7Zfktyu5tEj9bO9W2Gqzl8D2ZkMcs9YEsDLvbEeDsxq3z1fS6Gy4u2o41cL30lRMoSGH+jDLycAtwfwompSJ0M3dB7cB7LBDlK1qsahUz9+4QljnzchvCCQ8qwh4kE4Bwsu4nhcIM/nQJDNqv4CjnXBPCXc2mwFwcWjgJb7jfJFdG9+gW4X6e1BXeRjJsNWF0jOmQ5HB87UlpUzYMchfZtDXG+GiFSXWWkr9PrlZiSQOZDD/pz8ULm3INVINkzq/tMW81aMd5e5/uYYG065jfmyMyrL/wB7/YLZdR97quwmeM4l9S7OKt36skC2f3qeDVAX8KKEIfI+3xunjIZAdFYzrmex01IflyX+zNvDSudlFkzMNTogB/77d47eqVEnNq7kvTMnABvVHu0GYhchdYSkkfPGeCV3+pBfMSTPP4iYP9uuxeUIps2P6dx/J8YpRJfHhLiEpeOoE4Fb7DpJiLGQ3xSCZ1Khnww7jwXMD5o+oG9/QaioRknIc2BvQmeK3DWwZkRoOf263GnPz7Pc24u/keD/+mzlbAYaNolavIJ/a3cXZacHE3gwlWKyGhh2vtHr0W9diwpOhPmLAw9rDIZS51bJnQZZq/iyf4rBsiGMZPinHrGwS56b4I9Tlq7kwvgyudMTY71CW/Bw5CD4iJaE6yjQoIW/GdAcYS/IO8Z4iB0r9LMQFMGcUWaeDlC2mzvdGtnHttgjDbuemP+3hhMwP6jWz4mRNILLgWTCNXzXENoX1TCrVXIkISm/+KuvYiHbldEvgUCagdi7FodKzPe/TIhYlld0VveDhtku3Mw1Js1f7+9fgOMmX94apjmvbFMY8oLvmTAakEbkthiXrFFirJtk6TzMQ7mxHFytNBs5jGs2+fUCXy4oOTQDdhrLUfct9YggZs1HLTuEcGu+2icPW2g9Crx0srdyhSw+uEtEqz6svadPxRcEwh6SazN6tiEw/dyiSMpsmZeN4b9MY4P66kq+iLgVRsyTxlCp9IaAwpL2rmONK4hDPUXxisFgZR3SuLQ05jTetGRRwsgJRG4vnZ+gxiuA8WgjAdpFoinhc7dt5AURzbIJaViGebYsF5RxPa7MCh8TG6BHFl+4T5ZRqx8HDXwpVSHM2cXbMwgRArIrCnIWBzVrlYBAoXoZ6Y+u4f0u6neZvGwe2GkgUbuUii8YxGB8PUzIrCBkzIBOi8Vouqne4F9YVupDRaz0shpp3yebRXvazeAjVpLxNgngE3SEdGnCqrjw8N1Q44Ab5Squ8AzneSE=';const _IH='75f85e4d614470fa7395a9ffa447b23b9e436a2646032d10d70ed40725c15059';let _src;

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
