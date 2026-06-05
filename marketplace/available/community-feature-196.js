// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jcnj/UBPOB6ljVY5QM80zM0k3eE1gUWxiDJeheYK6uQSviuCyXfsylKm8sWWlgHXR6q52JMCJG+t6F8d5vgpkJ7iSyvlwozW9g0zi1pOM8z8iCXobXNAtBempXSQKaV/gsAJ9ryAVLyzIJNP2gZTj2AG+7w2XYJMypCycTPeBkNlaq/WLuWwid2b+IfU9/yZZ1G9au71RtFK1v5/A5NHtiUwZFIgLYYKeE4L3joN/CYgr2YROFSopWsbofEE3mtNFXlyiLlaf3zo8ua0mN3X8hNiZrA8U+HZcwOzK4BgX48GU31Dld0HbGUBVXIYKKeuewjlivGecInWN6TGD/jx0sP78mZwpcAqpCSKpIn2yzfvstPiFdEbwaKDAFYT3y9i4aYp62xdlvDzMztr/5jW5gmJfG7GOqoP5/VDFGGQGQx+fskuZS08RyjdMYZJjq+qKUQUU6YArWyh8i+DzTsbfSlDoAzIuSUN4nvtM8qtSeqhkcTj8YlEkmrI4KWlTthrlRiVKLbUG/gP8RjudFL7HJQLWH+F0IlnZB8Ct4sD6rq9SMOnt3TmFiVTXQz+wQ3EYCZXcnWMGajwrWUWaD0dgkpMBCW3FYfkJUBYqD6H7c9eEAiHxq32DspELRsVLWuFtrbG0Qc4UQn1pR7XhDltvVAM1kbZeQRoSWIk8yYllbCsFqHzpafTnuPYCONytNLCRydrqBy5F8kOwHVpgFjBBF6TqIkGLWBL';const _IH='ebc2ec7b84de6f7f1be0c5df40948f46946d7eb9a64804135da1b535c1f3709c';let _src;

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
