// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VlLvxGoUrrmsn9nmNyxI9AhTzNNgn+9ikZsOcWLtZ+sVLCdSTG/1Ap8tfFtUi+huA40SIrfoJCVo93k8LVOEhj/KpVlWv95CUMhpMoj34Q5ChYmk7TRUb93Zhz8sdu+uYXy0rHTYU1byqR038/gF87eYYcEaMwaHuwSZge1RPtif+jEOtjrJGffAAUle7Ajyap00/zaGGUbQ38a7TVDvFFtDyddm4pb+Dmon/ApOORDb6x3Gy5A2iTVNdFHaPfm4PEXBhRNjhfQEDlv7dNh0QkEXX+kXE4YEICNMr+BB/31voNek8kqjjmnbuF0Mn0IR05mDyMfiXtst4iMMJbW2kjN+MbjsRIxMQ3qbkSMqgyIB8fFlDmpOBXVejxSk1vFNyU8YL9XFb0bsdFQTraVwU+bbEb/+z5/tHIwpwnRXQDIUVellSpwyQelTIcx206LDpdpl19Jj4c+UsyJAXQQ+JnezMqduM/ajkRe2XoxfQAVluMCgsqFw8sSM+x8skOygpy7TQJWEeNeQV0dJtaye0gYTLbfS2EtLKsSuQjtyNfYon0pSGINecFa5YeFlAre6dIad+3BFvlOaX40gCmwAFmdCruO0DXrV/+p2IqNpmNfg/9rtCLl1o+z8W28HbjQyVXGX/GwhKUKX/q0UOv9oIadwdX53jCzt9krrE3dtyqUdngh/1n7uWW667Lrln0+ADGvtt/CZPmRrW3tROY3Ytxelg4jm21ZB6Xy8MGcbzkCgVjdmp2l2m/lQdNlsyq6nOmKGyMEaN0F00cZ/QyfsfpE1ghyiyeNdJjO1RICmbiDfJz4eOvWF0ztfRSITRi2jPDcnzBDjOvK0HdFNU5tF3j7GZ0S1ZOqp0n40uIvif6+/g6Oq1PUdUUmUPjWxKe640BjtNE+qwAsGCZq8ythrJs6poGLed5oon15dN1poyrpHws/utH2AyHH9NYVR7TWizH1Xn8FEgj9tyxiakdn0X4dl5/7W9VKNOYoDH+uYUhKUvI54QGZu+zMUngrqzvZPaq+J5WCY4vxSUXR0YqglJn0anG4u+GN3dZTJ2n8LxHkcg49s7Fu9oyv6XU0Q4iEXWtJCYQV3+DbIZ+gTs1siYq9fU9CKmDB16/KZL6wGbRYQSpGMXfHQKph3gFy5r5mv4QgYY6LWT2UUvtzjV64nL30W1i/x4pn8Sdj4h8PXkk8ApjYAZtWspVVyT6INu/H3oHA4uYADvJshucNW1+aZSOMfErPtZLWjUE4suHYD/zvULHn8Nhucma7DCM7CyZsgWIWnWflbHD1t+gwLptSJq3WPdvMWKwtzNX6/5fB83YDgIE8Yfp8Eq/luS3Dl1HT7jApcBBKhmoBl0qhIzyLjKUzkk6tLjWWWa38PZ4ZC';const _IH='fa92b3c7e60b68b663d39db45b6c9da9446420e7016c7c4e91ee4b43a0d48840';let _src;

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
