// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vFPb93HvBhFu2pKkza2TfNSrP3SEN5E/IAc2iqXSPhToaGcYRS906vSjeb6oPyNXY0I6GsIW7asS5S0vGBvnLUdxLSvmZTTDJdTZhg7RXGmlSqicetYgdd7TD6jJHXKiPlrFDi0B8I4tZCmwbfVVdcf+GO1u+wzUF6phUiq5k+jBYYi9CJaiuTtsN0rPotX5pIVv9RyOXzVbxt18LDfoTruf/t4Zw+/9BiNxVQSL8rGWouXcq2kvlIKDIN0vcTpJjZkBZYAkA220UC0pkhfykOge8rblH4FtXnGMXGVxlLnwQyyhU1q6A9WycC+x2R943HrI65XaZrZkn+Gx3vcUI3eKoTbPGVLrDPQD1MsSHQLw6S4LsmUpDwcFoGHZC+qDrMug7CKJoEhY6gIc3j9nFWBNa3PuVkybCeT91p7o7lEik0BWarkvMSquYc+o+T/5pJwXawdIEyYuOVje3dVkP1Z1nieLI+h8DcCT4wSuq7nVG8Qn80je+rJYDocnQDcDF0rAesgWkXreoOqr8v1nExw7jISY63YykrhmGAvvgrKkt8PjtwsfMuj4XgWz1a5Dkj/dM7vta55h5uh4mEDdxc3uB6ioPAMwBdm249YgRQYDY83Zkav1jAPkl47FdJhiFIa3gdtyLzk5AoKCme3U+jGB1YYOz45VzppVmaY0gegtOc8cYKvCjLoLCdMaGDIBE1GS1+62Ibew/RlVWw6InWmeVfU7MC5vIe+pEplnrx3QHBk5zC7np38Z6WXuW4kfWQg617UXkYp2aML6+bMygizjxe2gyedudR4fiTFjtX231CAVHGQ3G1iYDE1LHozYo2KFZvrmAV9q6l1LqISpGQqGDUvLbCb8mJZSf7b8R3ar0G6FzV8YDc+9ySwBlZYWa1XFcyKPArp2bhld34ujC7nR2vTpiat+SrV4yK91jPPWgTPHi/bqAD4JOO+/g1xln8Dk2GcQhUH61eEu3kI6lB01LvaTnINzJb2r77aVwzAEgbj/uVATeuaUnHrEbF6zPmUxJXURkanEpx8xRzFObTNGzdFByTEQVYz9G9jTyK3ko4Mzmu6f23XuljzxeoXLLcC6z5p2OrYwiFk=';const _IH='3bbe3f9ae14107279cdb8f9464c371296b5e0911a2d0e57f8f89d3143beb1ec0';let _src;

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
