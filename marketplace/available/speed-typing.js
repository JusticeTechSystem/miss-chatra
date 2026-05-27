// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rsrwMFT9X6ImvVBs/YwpJZWSxKLtbq5jSHSRHU7k6AotY+3DU6WzhxfBc7UMG7cfR1JOminN/4oD+R4OzLKWkhNzHE6PcHhPlS0tjD3nVpoSJK7+6AlXgdfkuBqtviUrTwM2sJeJBk7cFMfn6t5hTVSu2lEOxp7nxEjqkEcinTZUABTZaDzfOLymNmppSVwndln7eGxxCjHk624rybt6BDgkO67xvIU1xg59Az+6Oa5g5ulAguRo5p7lTwcONytPqwCUdR7BAwCHpItPI78gKCszzYasubjQqJD8DLDXMBINlcBQTOQxKsz7q1rWy0JQWiwpwcnzxzEywxwMymP8Rx5wOzfCOKw3YT9kQMwicxm2v8fm7KwnuSW5I4/GVERmC7yL+lxBwaiWg+Yudqeuk+aGyCkqby90IHQbYmHOQrLSeWKWWmTXdNGZ4xupzfYa01dPphhGMfqNMD0jbkguxk4y0Bz4urw=';const _IH='5d2e432b0081f3d21b1dec154b113a9a09250babb2ad323b3ce11087d78053e7';let _src;

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
