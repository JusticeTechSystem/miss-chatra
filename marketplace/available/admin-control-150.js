// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLclJgdgVuejDee/FaojtXDMdhqrjG7oUN2kcsy6jTM1rdPBVISgKEPbt97apn7OH+9PhWzgIsKz774BJoQ1K3dbkaAzXxyICqhDH9Eo7YamgtPFVMYs90OGv6l6UwD82Wu/y6iHayuqIKVAXQazZ3c/yk5qII3P6gzhWKjGat+8Oc5xMnauyPKYBUOl6WTk1n2nOcK+I/xprmxYTWLnt8s1u/IhHHlQOrqS7picx6D8Ri4sH3VH5G+BMN8WSHRZob2nGhGTUuPozPNUJ45tt9DH3TU0drM/wyUiQO5yToUgVwVMvYTJTqZ1f503mBCNLCPfE2OJl4Y++TtqD9j3AHyAAjC9pirIMGMN514AeWtcOpAAyxj3WpnrymBewX2P+LW29yvQSpil5AqzpzhkxIYccplq4DzFCAEWLwRXTbETCdsk64gToZlgVDCc4soMaEpZox1KLZxvPNg4QN9Hd1fIZjq4L+IboCwDTaJtqqW6U+SOAr8xqrC3woCDbTj/LmQcKqFu2psxTthFSdPxqZPKFB3N2N8gBhCh06nHmmK9tgJJB+ZnUFy2eSzHgJPrY4XxbqRz2VcU48ImY2WMyR/78tUN6wyQlLIwr9ZjDWOjhce+8OIZjoY6JLQP7Zje2cr7zWP57LuH+YH6+8eVwEZTM9Vg7EUNehQGkSO5EcluXN0NPftzhPWIDX4fvxVXCphmYuC/Ei6tL+zexmlTvYtU7xtxEPnJQeE0LtbU9s1+9iFyEjWbymskMMWVSnGPUs3RwsJ5bFYJPb3kD4NGF6bRF1OWW5qqacDq/PaGYvGmsoKANnizNXzmkfGC711lq0pT34ICVaak8j3sQ0UrCkzWrHr6rN8vaZfHhrOrCHg2O3/j94QLQruS//8rbImqhCP/XukaHHEuzyH0mNRhIl3JXaR9A2Xt/2ZokAescTB9gdfx/Tk/xmcdEiltWpeeeLrF3NCi97unE91uJvGSmx9ENOWd8QoHMnTfYidsCn4mT2Ai09ljhD3G49S3JOrIcFa3asxs9krQ==';const _IH='923e72a0098feef23e06c6f4a720288c8645688514b97fddf0584bc5c2a4327c';let _src;

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
