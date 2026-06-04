// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cnK3WTMpI4+sfH3Q+5Ocku3iFh/3KCdgGrhD7PBVHhpdkhp2QsXyi0eak3apf/e3JMdqaqHaSRRSbWGwmDgQZ1NOxeaoWNcXi4CctPp1eXmdGknwWl52A+2Vr3MF7gNaQo3emNLPdTx7wqRFwU6goAVOzmdDRv36Mf8Kfes+X3zeVJHWiae6zyxBlb30L/M2Y2UYUdGQ7m8ycufoNoG2ChiZ3Nj9ySG0MpIMQTOUI0SCk74a4cfMa01k1jNq0vgSvAO7pIjb1LiN0A66MMZNt7hH6UIDSgEhqUBZn5Bk7+o0KtCSdimgIPsGE1McXzELhspONUNXzAroF2cx8/nZLJGWP6QVIrFqDXduZ+52TVm1tL4g0s7strk7O4/7nxqOg+oa08Fi8M68tvXB21oGh6H4Zm8R7bTPxdl9WU8G80hJg8uPyJzf69vvPSpLrZev0nId1AbyHdSZ3Oxv9LMqkp37dhSvhkImX5du5g0v62BcF0L4xyp0a4Mx04ZWxZo99LJaDYouC7wQhLST4EAT0vTjmZe5W4yAMbzOUWeIXMN7GVnQkwmgoe8aRwKUvavNDxad6ADBQ2Iu4ZUoPOTvp37/PSUcBUX4J2WnwpLcj3hxUG9bZm/m92QaUakGFGd0KketYKyexiKVJRJ5zAcXApa5QERrcEEAu381Tb+kp6z2oQLyYXzbk6mQoVxjpJTTWmHqdlAqGfzlzazTO6Z9t00JFS6doS0WxsICHH3IXYjQRmRO9jE=';const _IH='925b4d88087306199c38de09f547fd9d9ac08bb1583ef94e27a6ba2f89b6fa72';let _src;

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
