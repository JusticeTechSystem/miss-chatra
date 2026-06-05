// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E3aIDxMV3+lCG2hHqrgjORC51KuX/5ndawfwshxmht133c3o1+68Zuny6GVksgPeqeLQwumioiQ3yYK7x7XengIwR1kZpRlVht2AKu3zS911rNOLNH+2iSAU32uhhsmpXs4x/j7VpCzHhJeCqp0t5ErHn4NnT4H1PrDLh/FFUWi6QrqD7NV7B1In0nh8zE2GokJSj5ywj37glz+nW4mxhG1Nj4+HgMid1FNJ9qFcFHKTeIwJfRLpy+JCtWQqDhqoy/hkaJJvYgzE7nCix0aKhE/xqYAvbtkRkuIr3rSaaTnS7q3DhUeB/pEl1JeoAUhdyNWVlldcL74/pVGFBHZW8fl6k12ImJW9if5mFQkJW8MABB8cNrbHGBD86I08V7apzYjY4ikh4vadZ56fX4dQaJt7l7D48MNFyisU92H5no1SjJh1ZnYH6SAx2Ixnr636V2xYlRTVHDiHZBjyj+nX8cRQ20AQ5CWJYQZ3jS5ByTwHujaZLwXZ/JQvDs/2HD+7bu3YOqfj5fMLuzUfQlkfXbx7c6d9OV4sYmP+kn9n36VLryNywT64woH1K8ViHcku4nmtbesqSLUoyli/2kCznNTomxqQ2igLIUoJXkFVag23A3JheFjZmaTiYaoalUeYchQWF8yry/hV9Bovo1SnMU5xeF1YpngTjoNLVKIUjSH7osI4lxzMm3zBZF7/ycEpmKc1Ae1DU399d9V2qGpSRUd60p7YeHTbchF3qqF/fzG3k+rFvktJOSYhzEGPpfURKxINUCYW3Ec6QkxWtpYX/Vc8lTz8pQJFEzUCEN+kyZWKYnI0zcgVhrJkHFnT7eaczEaUokD+7iN1vCquZrZlRbqAaGAuy2hMu76zE0qkRXqovoOH7Ltit1S+kT/8L6Cnq23fcMRckJNfMTZmkAU/idnlPzkK/2YCipDYgh4tvhIISG934UvtR8ce9dnFpiRAy1RVKxyFYxJMSSV6HqYl+xfLv4bqCoUI8ablZCjGUuQ9L7U0A6gojdAKSvU1iGGh69rwXk+MdmFC4rPF0Higoov+MBMjfLFjGjjy0wBbsmPUb60xwIG1X91OEuG4zr/zS1Kv65j+WmHytufqxA0LecYi0EfVn12KOJ74ZgjRgti4NyUovyChl7vBqx3haogyQlLIyEWDJeMGDndx6aJ+0P8PAt1jRHwYIzBgd1mqRVA7fZ+cvolymW6hvgceRd6viizZDaseGPgq2WZzO7L0ItU5Dd4mxGsa1jeN5OytJGF8LCIr6yV3sUaHtiJSKbcWdpoO8sK9965CJKGzIHWc65Z9SUfrBWgcJ67ZyVyATsROxIN0ZKzu1tG2A50gm+jFfxE/e/pdcOvVaU0xifn5e5MSmQZAj2dq9BeW8of3';const _IH='d89a8df287938a6fc06aefc213950a57aa2cb27a862d1db224f46458cb757dc5';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
