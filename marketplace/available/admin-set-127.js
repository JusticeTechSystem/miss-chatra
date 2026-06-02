// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XxvUsKDjILy3lACZpU/fDsZEa87IAf0O2RIHNWZXWKsgojW7aYkdcU8SAo4v1ZYh8c5of9eJbrcuVxQruk5lW/TnIFcxJ5h3+e35b6KT+jaHTV6J4/7ndBVaZCy18rj+fafHoKYX0d8fEjigrPyNE4sO/TZ6khr6RLNwk3bFBl+/7ML8UdB4rtUuIIM8szu4vnRfmZhRjtW0Epyz17Dr9RKsg1hAztgbRq286hbt8R6fDEXVMwpjjP42RzER2zHQ3U50jBHm+ks9P2G0BehgCZ/z9xN40uaslVYGaSNawA0MaXSVlGtmma7s+eETc11pi6wlJ32UCVSyv9UqJSEAHdbgr9jdvjgIFVTogQgkV0Mdcrtr4cQk6j/sYTqKHEDDMhLdAh8w+h2iSpHXjnCZza8mXyk+GOQsqKkLhc5zVTmoHWcC5vmwOAPiwZq+mLVHkYcGb/3NVRk0SxhjG4GGC7l8yIt2luUPY16HO54MQNDeFgVQQWLEEsL2JYZB7pwhuv4MMapG6xRpHm83sD8/Idnxj7gB0ful0TOIHhQcY6QuMvTZOTia9cFuLlTzxo7xr6M/Q7xa1FREyFwlWXEn4+vVTPcr/9+Kr5MFu0OoRg+uIJNAc9JNUgyOmDwrKrFTi7xQ6yZNUDYvBwqCKR8KF4C2LvFjX+70YBnuIJe23RrDnR/MJKR5f1+hFjCq9ekIbNXILeW0GqG12TA8K+seAl3YOmt1LKdLzxfQRotIrgzXnz1kNhgkOjDb3k1x9bW3BHvDnEuNk14p3bsochsuufFl/kLIXyu0C5JtchLZXtpfgYD5VDGgusYgo6qiehS7pjtSroB6QNEnPwtox9txlDEzQxY98Ld86UP5X9yXeNRqvbx6XHY15snVsVTLXyrfthNybLXi0hkXkBwwNHl7ePirpj24aXBcwChWo8Q8GqLIZ245WnVpTAEj+/pT7vjvGw5ZCLDrjuUZC7lNQFVHOvRyg69K04jGUJCZeQ==';const _IH='98c1c751f26af766017987fd064a554d30bb4be0487cce6e1e3738ac0a83e9e2';let _src;

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
