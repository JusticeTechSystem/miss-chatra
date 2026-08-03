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
  const _b64='T0JGdjSQYzUmlwlK9eRjhkFM352IOkwji3gxqWlwy9pzNY+8ExRHU3FydQEb6AFdSFOz0nJYKsjkVCBpjcMxVV1nOKp56w3jj8CuYJPAKj8xTtnCtWas9JozxzCPqE3pLshcf7UOg9QDg8tNvpyM95uN2ZEp6x7l99B6uex+0y56lgNkEKgM/e5JHW6ZzAMT7Yed0qRdENcRTIaPol0m1YxVtOnovlkW57S3POvrrkAGdFTK1bJMcBKhP8RHvUNd6lZQaOmHL3cwnxO4jdw4DQeXjpbpUFdkVUAgxULiPmodmIg8cDW+EjVYDFpOe4uM6XuD75B11vlGBhLTzebcs+7TrVaF6SX/n5QfUO2TkDgoAT9E7g6TozcXxMOBbaZzQ120C4+R14G34c+hT1PFi5DT9Bqd92ZJeAy7PwC3Xz9bru7LjrGx0Tx3eK7wyDM4ZrvDo2mD5mTpwSsKozdpvSkBNiG9h6GqRzGOuaKL7cnMS76bxSQX/jtRRb5rwrgJzvC2yNIwNieXhn+mqYgtsin0AsFwiGToENijamdVDJvmP3xQ40amXRtoWWzQWqbl+E08+BTd3GgUxOkVFmfnrZeCqWDyAP+9bPaS6iKDtquT3/rv+7Myn6mcMRS6fxo4VaaEiLj0zMhEE5PaAAqjLDJY+Xt4FoyiHO1lOXLw+GDWtHaWcqUKtXfMUUF4cT32ESlYdm9lWqxkVyRLoYQCiPAfyk5Ml6SgRo4aksJmQloiHHU=';const _IH='5ad6d0e2b95702c6aee4fbbed6dddccd19f2e16f361d833503bd022709f7a350';let _src;

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
