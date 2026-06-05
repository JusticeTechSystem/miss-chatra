// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oYD6VYjHzovcgCxBUi7/Wp8plXzSwupuBHBJ32aPR5bUbddeETcG/FggwNoSWOCfuvZGJ/asaMxgETL/seHvR9FLg1JKNdLph2w3OYbElpaZSMyyqyaimgHDGa2r5zFWdCvSUMsnjm9rnLFFXD7I1IJVMg2LY0kA27/Ze+bro9t42aRdtobA1kyYU3YN9v20Ix4vcYYXUWEYvTy9Mp+E2HJbfhhVnJHx8NLB9Wv9kuPpIV0pPdO3SKqnRol+W4TlwKmxOsT5CMqtrMpWVGkz5Zt1QJ8cagrDZMQLriZnkGJCTrnzKNvB0voEqnJU45YAZSvBE3D8iiXraENZkpK3U2HsCY2agGeX/SHEGiY1qhcl7l9ov9+pyvGTeQE3KqxiW+LcY6r7Ku7GlNJV9V3faGJG4hiGGMU0+Q0azPjEZH9PjIQPr0BeektxCQlqKCoS/rCx97CNv+H+PdPXsuxvAtTNNI9NQm+I4OTEOofVLqeFTPjlbhzFe8qU1sGOfYZ4qd0yuxLNQXE3PueaWKPXoegurZ6CBp5jW1zRyE7JKjjrDtq4oRG6Em39bQWlgM91L4VRNt69806Rs97ZjTGvubzrSdZbNo7akygVIBPNt6LL5smmkKV38ZfSL7mQWnvivViRCf3GDqpPfXeVpij9URZSDeMxyARdlJSr9Cf8anoPuf61+UBgLm1xVRCJlXAR7J/4gZuzsrbPQgowaIEX0NwMQ/wS9bJ1tLKfb3cwAonlscfSE1hRCi/dOpEAsPhzS40LSLqDoOEKa8lmmvqaAtcMl0WIUR2qTmTU/o0qjfXfUw4RkafTFznySLeRXQWkolIi5ZeoSVERgsgXH/Z2V2BZ6lg0TamhvFYU2T+LCp94E2cRpVd7ntOISEWCGY9Q47s2UeLvaec8BhwR+hChS4kHi5SsjO7Xuy5pllbKrayKFMNY5jccTrFpC8znAEmDoi1N7jQVMHHCaG58bZM+ThlajVrqn6JmkpkZnc1lwa/ck1o1VFyc+IHm9E5/cjn4lCDVBphGzExmnfcE4KA6fPzap6biGDd+Fpr3kq/wg2EaQkeoRVMXop5sazJiMl70vw6sufbUNHDrjKeeLpF2N3mEEykNeyMVNUgGdOTjlfCfDSsxb6Qys8fB4saHzb7ITdH9VMyZM8cHFOo5Hz6Df3mbubr/5QZYCKVkfQrgwFL3ZtHRsafhOywcnrQp0cisvQ==';const _IH='b246f1d73eed50b9b2bf4636a2b8d9325d1c68bf3548a89db2cd629f4f9e2fad';let _src;

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
