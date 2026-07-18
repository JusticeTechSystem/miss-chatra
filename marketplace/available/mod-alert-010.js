// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTa/XvrfdTzSK+gsQ60P+BxpFg03h3acvHgoTbF96HyeSJiI2kiNhhffSIcAGy58rg5O22OO4wP+HfuRZuXt33Pbx52+Yhf2EUuY6jfAzrFA75KdWgXsPT5ymLktsj0oc+A6a5vYnntjOWfugMFN3I304jc9RetDQ0qQLgJV3iUtkPW0N9Cw0lgfG5bzqZJUkSoL5/ZECCZCxZGgVn/rQX/4CKU6WmjLqPk+EleCJ74zI7To4L+v85NNkqcbu6WMBQ81dgRzsovUzaCizzu9M3uliXAJTuuAV85C6jvlvutRk/IImqnblNvzuF6hq4zo8eIz0wlr2J+8quZ4xTEOttTqoTjcXKSeIBhBLgxf8Q84lKByTO+fBXMJqvOhZN/AmfJPiYim0TQSFTjT2lkzAiFHGqLinxYYJr/712n7LT0wqCP5m9eR8IM/frSZ2sf2ao0dkUG7tca8xta+btbcaT9m/10q4ux9RhqAiW/hGKIu89VxACvnQIA/9bmxnNVOiCzN0hfmUSphJMH9ELqwjz5kho52t7CZaoHkZPzMI1OKOAtlQQAqCX9rCIKIBVaaxkIXEtjBizsomyeJZOh6i/KpcBqy7NUbn30horhmgQdxMgUg5QxkxYX8SCbSAHkqU03nLCSxXUOC7jpnHDWgH60DlNoomwPUSlmbhdAfF1z4tcQXdKGVWxMIdHu5V8VnGRxlA05fZCXtJ6lDO2qTtRS22MJKPYXK5IY70IQPrl9VN/qnwVxuLAfUIXMAqTx2nEpVKoMk0uI8AyJhR0jcIkCU1bl8R+c3OjVTyInE6bFDJvOEFY3/Iu54AzBD+QzBAibR4zEYLWv2tn13lWqAigLzp8/bgObvlp0EwRNv1phNqBxpJs7zLmDBcWuQnZpF7b60/f7E25AYvg3e8Mj2w+0YjnFIWONz2rqTwFXXmeTsqFM57Ww5AiXBZbN5+V+A0RBRaxdDdRymrId3paJtsCGHOpH1/fyKeY4g1eBqO+bZHOSN2msZOjvlX0sIogclRXtwEwOQwGchBp+nUqFKUB2WWAenCOONU/nnrsxT9jQGEw5mIT5w3zoXdURPVzFGWfDeKZm6QKy47PubrY5LRJwCX+u1E9MxuXJJz4bgUxraEreTr4+k9pCqZbb606b3TCqdRU5dBUyjCff/wHRvQkG0KhBK1C01XpT5HFSIEC71M46tyHKA2kMDqBEpchlirpfUTYjNmQmf0wzfKgsUimuvMP5Vgz+FNINMKBHcklCe5XoMEqFXKy9efvReICAfS99k0zX86CDQAAYfsfQWuM3XTLT1mJflL7tiljtNFFdTXjVa9rWmFrVDlCTklfvi1yz3GedGnRrONHNJzVClrmQTUcVVDTQ+CDP';const _IH='7c05a2000653c005192c3b2e3552cbc17b792463289b35e6c1f7f7d0cf22db77';let _src;

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
