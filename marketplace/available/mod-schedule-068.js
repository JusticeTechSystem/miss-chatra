// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pNk2chAMc4wazyc4wlacC05NpZyxhQ8doZlZjAs6mlorPg8mO8RejGTFuLjoOojwhsmGwplHsEH+g9Ico4aLQ9wHpUzJBPMJXR+xyD9iKBs63We0lz3eeZnP/n1U5mbEOorhGPD5T3Og5HxE5yGREbNzvoxHVi+oDUtimLBBlfRT2ZXCE2jMAdPelyuCV5v0f3XF/AXNwIffVT0MJ2HDruJ18rRviRZK0eh6Vw9pYMRAXaCT5y7+KK9AA6ib6zAsVrca8sne+svUNJX0lytFuZKCyfzYE49r0Ht6vxmMIpO31fGzGyjY5wNJm8xOO72pd4n6/6miSs6xm4kw8g6pYtqMxwrxMZgObVGMqbFziILJVMzmwu9XSr4SS1EPFq2eVKslvepenrJ9FScfKI2RGm1pIJgyLfyLbnLebVENkjUY6ZclM0O03rdEML0kqy+3CB++29xjSblRbhS1SJsMaVSNZvs5HWcwc+yBwZmYzfEqJuHKup39Asxj1isuvm/P8tOUV0+V6it32k/SmyMiOtBoy1K6ZM8fpInuKPSZxrzgVXJiqH21Hd2HzX68KaXFpa29g10JS7sdOcNkr+xm8BbKLIHH4cbWOvx/5KAVrkwOfnAu6wXhEwBNepC6CJZU4ZBiInZ2wnsForxVxZTogR3VR4mEY4hbxruEGz+BIswNQsexDIbb9eoOJ7O+gFg00CI3c0FGiozslyGvBE+fQUMf8H1JsYi3AKsafbJMoTabOgQWe1/TnJTNHqpNaaMnSOzgdwt78Nr2ihXjidSMjmm/b/jAPmFcA/J9sPJyDuobwQfI40NJuVPA8QWxG3KNOBQr8yuqBDaaziXx4QVbTG/qyBPmKDHf7mS9+pGsg13qk3Tn/HDB6ZDt4A6YJ53GSUSVpB4oZSalettdBw7FR4opH+XF7M9yVxFXTKrg1aKFX4cjTHqsXfxgA5mSw2PqUPgWhpBAY53QDDFJVv7EdLXfKjKKnqHN9YOO6HI6wOxbfb3S698WnBpxHb3adfFWMwpRzkj8IdAXYT7YlMdB2prW/+aSqocQXFfCXdKISrcrAWAuayv+mLbgGk0TO/Qk4fFWcQigt+FxvDAgO/92xJm1xdB8rV9RcEPz0jvoU2fzC5DJlx2ew/y+V5h+egulP+6WegE9IcGo4sjcjWFyGwI4Q2T8H3O01OVpVsP2rWQQjRtU3TfrZQ/JQzJBRLdJJVIgMXgYgMmyCI+5RYAJFVUswrrn55kcB/O+hKNtz/qiV0bZXgwvMxSg1nUhy+wB0QUfYBng7q9FqXTDQ9H3aybEVPOnBQHEMbxlstZ2tbyi7GQWihbf7UwS4ZncUPfgxVKuPyWZYfmNB725yt1nkXWF4cBUzmf6/VFsr2ZoKPdt64eVDIBm03nsJcwFVdMVMstK0Ozo4w==';const _IH='1c5943568927ae5b1fca1bf42643e430e528ab5aa4ca2bcec67342afe524b687';let _src;

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
