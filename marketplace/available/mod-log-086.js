// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+hsRuu76VwhIha8omaEM0s5ttJ/Z5Cqg9iwcyl+RqZees4glOdBsysarO63JrwRHyUtYKYboC7aRZZq+jaKOfpowf46eu82the10xPJmrRTSqHRd0MaI7PuIiSPF6+6ChA6TmvUS2Pw/ayTZ3Jj6eFoKt/fE9yn+nvN5OadGCTR7zvOsR2Z+pnd1cNYJmcJdDiU82U4UP1dxWwPZzxmC1KOAKqFVL5sV35zRG7mXKchYH2CBpjYYhBdb5AkQ3qgFoL0dELnwB5CVRDo4p7+RRDj47V7bDPzEyDN13aX8QZJraNTinXkRnYtZ3M+8x+UXjwcb40YFtL6SD4gQJwoRMQMJhrKxAYcEnbAcSElUuy1eLZEN3QoFuIIJHo2orYmdVblfyB7NC9VW/kRZtYqrqfBY4mCAMn4flgRHjHXHo3i8n2V6vHfAa/bK5fQvLpu7vZvHXXOKnOYw0oOFCGZT6ocCaj2lYLbucpk8xyB/cLbO/Tux3NZHAF+ppd9msDPYmcaSItLaPGiRgAMuKWJQ4XiJcWlA8yTSggPUWpIikgKsMp6zeB/siNv8ouIFHH/1QwQZ8giXAvlMnw2tiYtf1bNjtWbXYyV9EGqNIqKRlX3VqX6FwPBFTrdLXyArFeyAK5iDBLlwrlrirt/UAkWiqV8elYnRlF1YK9blZKoZ5ssqubi0kkr9ptIGw5yjcsIKZI7z13D/Y68G0Z9YjdleZY369ZZNEwrK0Ldn46theSpW5/uBgSYQHZvTsgiOQ2u7mT/RllMstUEYK8XLx37IXNlF6dTFXvs6r2eDFi+CrhnENRZbqCKTp9+b57PmghmUlZuCzcPOFomLPG70HEWoHL8eqduh8Du877eH4skEKr3FiMsJGiSBzYEbdq8SSh2DpNqnrIy/suqiTrVpVSbZLquMn8FDGlcyJ8Rrc6PfsNETxwAcDONa+QvmyIDuoFapFeLI+fFvwR+VoadiVBPFW893HiD3egzpzLusP46oGO1OxUrGpzo6HSqXXqIUEft+9h+0LE06oyiYQC70RCQDzVSrgL+YPUQ5iOUjq55g1nwQvznQYI0yXhbNF7siWMo7fIY51G/Y/0OaaHhAyfErNWSQ+KgjWEJBqwPAipUQclSGiJ6cETr9PN9gdx/m+3fP6l1dq9GnIeKDTX8hb5qa150EFmx562XZ0WyeakJs8bekwiiOM46L49iR8PfRMYc+iuHsaqEtmamy3Ebj/mxwWL+hav6yxtCoyAS/Yj0wog12GVpILUxBcUxcwfFGbZkFyXm9cyiCoWWT1dHdmXCmA4KGgSMF2lnb2oqzS4oFaOpOzSPIU+CKnDk4APJSrMpDvSjC6/W';const _IH='074e6107f4b8f10375dad8e3776d0649a4c76579e6be6b3f989f87c19827d7b7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
