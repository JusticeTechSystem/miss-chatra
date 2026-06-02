// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w35huz3jAzv+JBTrUqUGqSjHvsp+6skpAPao9sL5J6xaQ0yjjfO5JY/4OxrNeXFVs7hVxf+XLrjNejxdbYmQL8Ga+k38hWieE6hD3QxjV9fO4wmF44XoUynVnVd7pM4mJaiErtKocQVuFjECPixdWLpmmZlmwCkGA3lq5ubDUdrisLY+06VWgC5NVS8OwLY4JLNpDZeiFbb9OlCRn5jfBRv6hfGY0yKlD9RJsit0Fl18kSJ7heJD/LTI8xmM234W/iV00MpwlZey4PSVSXtIOaGbVh8J4yDTkErDhAqn6dEuCtWgR5DsOvyBbM5Soiz1RRGDTJdd30n0CVIJ/RjxelACTMm1ubMLB3ZHejZFfGBfW3mBuaBqBb2vlMIQDlPBGEa/zgdN51Nfmbqi6uihT/QZ+jULndAsS8ujEFhvzCnqaFNzlfgPyf4nxuvtM04+RpeyT20WC73k9zReWohEfhS9Nd2EFZuL3cpcMb2IStmkkDw+H9w259/DBufP8/cSKumUJDK7JLMUeMMOJ0+56typazzRvewfsvG8o8BWirtj3BPvDXDm4by9LKB7GrXKcGAi7sjbmvuiuiNYuOVpjRsCBBMqqZ3MZgU5qf9zITtKeO4LVGZfv8AMCV+HiFk87v+Gxca/M1vJCCrP/g7YZOWwzZ/h+ht/ioNIFA7DBw4fPlT3rYEE3ri2hJ8wcoaL0TE3u0JV1rQdEMTevq2HuI7lLSN4jXFVAc0A3+CtmkP6RTY=';const _IH='dcce2aa5ce281d7837f3d25c29496c943d3673fd03cb8b6d86c08fdca493a237';let _src;

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
