// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q+e8oTWtdq+BSfEv2X0r3f856u8z/NqGpeDPsG7ogfKyiVQI8hdW5qkdYJeMPrj1R00jLnjv3Z8bpbjQxr2meuO3k3dUt5k2CXnjspqXBmBwQvuooTpA1TDrzMIGYOOnYAJPRaacRA9qs2Dk/qsbqfreoykYJ7dWTezaU0L/e/JJ4U81SWVCighR5Mqh7PpZ0uH4YvPtFo3hDpRME+IzYICvkjxWzG+If+/e+lWGknKBpdwOAyAyh8xWwNUiFeKLGB6sqHUCrg4paM8/U9eO9mbUhRF1HqjDFpbCW8La8J50IMt6WDENp6zvQLiocRnXIDYlcfuD4snhq8fnH8QtD7V3lMtJeoqGIXAGDOk4B3VyMi4rq2AoO+naJfItQdmy9zOd3Bx0LrcDGtkM6c6DSDUdYsCURybb1juUdWWRQTqHBVIPwpbdUgitB49JpjVjqhLAE+VxddxvjQqtKjNfOq51cFDirjlITMUbXiHWwQiMO9/kB6tEfL2VscCBS4a5gTz6NvMnC82QPfValvnY/k41jqjLrP9MTYvOQV1Jiuyg3lKh2v6cRpqFKbtXCthpDPo9xUYZrUVmidg4srH1IBYO3VYmqRqwqzGQwJm8bAwIuRmJxiiWravcpqvXhvuzBzprtsqpBfFS1A02hXt9w5SMMeAr7oFRXYLIyxGQ30Cy2l9DpkG4oG0LnsCwRDMAyGp4e7l/9LAvOVCCefAmRyl3OoCSzRybzD7zpo0zr2x5ZIaI2nDDsLShH8mUCW3E8qvdvoRVzST1Z+jEJqmRyGFJocMRE13Ey/pEU1sZ3eQ1QCoSUly5YuC5kkRTiaLlLhnRTuLXaPKRNIvau1fQWWx5abea3TEfhyzytoSVqivDoTHQptCCANak0wVaA84JrToV478absWOODCRv1KePZ7EXwI/ywliBU2ICBJBoqE4yUDh0xGNDsdyuDgWw9htmxHl1JMAPX/gQ7ehPJtMCXsM7N1/KY1EKpB5D9yDoc/GRC/fwUX/jtVRhI2CwAV06/AHcmN6yjFNsDenhjUPGX1GaZmGjy2d0kcVlRB5wRd5olUovRXmdMFnrK+5iyRu9tbMn0H5xy+7SBDBuBAdKHzAzstKbQjEawSZCV8V/QJe0nXsP8dfofccB0Kk7mkR+eJAq52p9RCrBAF0oHwbOEK+vfui8kjj8BYPJbYd3+NEBFe2A/j242O9Xre1dGO2VTPczY0Wxfx5Px1u5Gl8mCEQJ4V/hFSD9Aun0IbeoZ6whi7EMjv+YDe90u7c+4pTxIWhpnR1GlWcUCGZ7iuWJ2skLUiLtCMcYxt1nJ9BW3ugkbU07TIsqFE7QZIpfdcaBGtxgROmUHVCOwtdlfqf6GkRQHctP0sg26L4782mKT8S4i4=';const _IH='0568ba57a405cca22d584dc568a1079e2dcffffb1e9ca2055150f5a0d505cc29';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
