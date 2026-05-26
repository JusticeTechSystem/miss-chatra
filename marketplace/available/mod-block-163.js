// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ahgFhZq4INzz7kMb3rdB/IzbcwdIrEdzIhta32c1J8wmOLGahS0yEtw0B30V6SXBLaNDb0ELXqlha6YXhhYakk0LQkDgK5ddTFU3fDgi/b24U5CQxFP+EFFsKc5JdTc+tuvrNXlQO2aPSazcK28l5UA/3VOeVinT4dCdstztxziVw54etM7V2FCD7atcFEp8QElmJ7C1HYRQj6QxoycTGqxuYM+G5R2gkslsCFhvsjah1pm2QAyXrL3K5HTY+WCiNqaKS9XLFslcrAB3AjsOKNh1wT1s0vVKgQXSwz3utZhtttGZFA0qAwFj5pE4lKW8mj9Ejwpj5p7+CsWugdIxUTaBV83jno4ivLSg6deqjj5WGbJ483IR4BMw3ARTuzCthbNwAMMYjMYmVOpgX7Nn+4NsFNrL+YWYmvihfYu/cTg50+TBP0mmayLarlvKtv+XPAG4xYswAO/B+k+DL7NxoPJO/49amz5NN1znvowshonPVnfzGNmvgeVDi7sZseJNvXaAAoVO9nhmwsLzkzWpG2ThSCZBe/Et7iuqDlaj1GLswZSigmmdw+mZp+xhMDdiZCn8+S6d/R8EZy+HWy/to+OuEItqM0z2IUyHgAMKdr+/wjOqIjtsuQwRHZ0SWv9gnM4E6ed+ug8ZDV9Wjz876Xfe3mh00QrY+TMS/MdMCb1RxseIJPMQpA7gZ7Vr6sCSg4eH/TJe0hKajXSeugLWg0m+SMgsZsaqzmK2FsqRFGzAncjo6OPqaQ3Dfbpw+aS8vzGbZWxBHhkEFZpBP51uSl3vfTZ5ajjPOVjb/n7VsSDgccpllv5PyDsrgM7FsWRFcyRwrFUQfvN+AuxcIhnNsfhoh1neXw5jufey/FgijSA/ESMfo0YGQhV5AFNNfMD5GEuwfV4ajtfqZxf6JIDbO/6OMPBpvS0gdpJc/fJIVu7F948JNYY7P21ChqoxYafU8SqKwNTjvsoZi+44MsTqVhxj8MUVziLz+3ulrTTF4gYR/JiTNtOGY3e2qeHdg4zx++TU2e/b02Rc+ROgUOE4ttdstNHVBTe+BoqR/k4EB/n8nNyh+On/f0bKjCpxnyg5z25PDM5kGH1PUO+XQTaUkDJHCCAiB9JgoWR4sTRUKTjmjl0iVvEcEaJlqBh8GHZFAChEkFvdT6ronfkVg368xPOveFyGMk9aPnu+0q+n1bSJmqzczBvAjX1p6HjLpuy6cmQ0gJf3s/orXAyopDsHKtQTIT33IYJuRa0rQEGzuF0p96udViv79f5ULJMHFUI/+Fb/4K1JXhQD8APxdL2uGdE6eJUhWCo4tMQl6iiUTUkIslXdmGcPyh4lKRUIVAtAw6ul0h4D560dPbng4CUdQzj5Sb8I2XV8ujejdes';const _IH='604622284b434cb360f02f67127b30b0be0a9b5e5963896a3ee738a0aef1e49d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
