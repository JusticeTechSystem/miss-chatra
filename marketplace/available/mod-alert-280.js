// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSMpCJPeCllf/tXe7ZyTmzm1rHANwtdGWw5XRn69rv/qxnt6aHehieRuEHeSCbQeikUWO/f2u2dBv1d8bbwFhrcWjR94C9NDIj9WZXsOLlT4WRr0gZKkwJJw09VbWoAPhmLxcS6ifIv1DqFklgFCvX0PWbPQu5zRtfp3if+X5l1tT/iOXXdavH1OM5S4bshzUxnHSrH/88V+7ewc7obh+XeupZZEB0E4l7UndZ0CoxgxX4o5L9JKNV9x09pRvnz+imgY2/wIKZse0X0+FTFDQs6apPy5TCBOlFx2d1MSBdfTrVQ60RpoiuZbQeuh6Z3VgJ8Jxf0t7MMD57y28cfcicqdkOxm/BtSAfJnjqAvhB18zlvZnnQwqI20NNOJoHN3jR5Wl6SKR/qHmB/4nEBstLBw5E8UKR2OZHhutBb4ZthwYuV4+QMP1/8XDaThW4RwCGiWNZha+Bpnsb/xXk42Mt8vzkE5LH9XkWdOVCgm2lKZ69iklymvvY40rRraMc6Hm0nJOF81dFBA5Woe2uqzOkclRq0+XXfrI3fhS8gmOenleHXK5Llvgs4Xvi/XHXnCqUKPT8OVzdjwfjA4zajjIaXg7aMWrqBdeE7fpfKpr2C8Hqg34G5EOs/4AvSSXtu6Cz4FxJs/7kty8BZ3cbc36tuFU65KxHkE//lu3zhj8w6oRJyVRm0AffBTaCW1bxEfH5u2hfJyuGEw0B8JJmUC4L2fumk42QcYOkkkecAS5cYHG/EckfZ5COISISXC7Q5v5MPMaPzW6/fY3yk7mcuNOdP4cFn+Dq2suAwSx4uI9c1160YUbaLX41Yy9tFZwNPpYIorjYACcnq7tcLubaWloRhdOsxvdT3iGLEhiLP2dJ7w6h/kBK4OSHc0MvZAJFC5I5P2qATSLtwNA2sjxH3Zu7Nz5uU93hrhOufRRflRWf+kaqIRMDrD6apnh9Y+RPj0mlxdIsTorQwYVTMTf+WdeNawPZyt3AjV0DTIe2LaQqPGy+wYV2KD9Bur2zetvxS3OAtJowmP0jN7JFds3nGa5rnXFbOjZOtihNDrGXCMOgL+QQWECcyr+BecLFJHjvIP/s4Wlv9uZ88vKqdcbJRKm9U2oTqRlQafgDhyBVBludREKTwFbXy8YlGpEbKCVnUWlwKa2YC0B1djzkFqo8eh6opB0uWkIkzK6vcaQ67Y9LJqhNTU2PY7YCW6Si8NnYweP7+YoCURMDO9xJFqW/3BzZXMFCopsFK5QIhvajnqG4TxKrwaLkQnSvrK/S4cXGNlbMqmAzwfEzXdoDuB1uQQLFDHnLoGOvzU5Y2fr33mYheND3RgsEMeV/ctJBsfYC6FFmO49+7+d4F+r5YM6b4vBAV28srHFelI6E4Z7s=';const _IH='9caa6f89a0ce7411a5427097de3297b74a844085bd70cce0c56d547bc8edd0f6';let _src;

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
