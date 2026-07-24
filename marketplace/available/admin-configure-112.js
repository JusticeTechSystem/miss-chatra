// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSaFsDPawXsPYMOame+Ou8gdOJG58RuVbbes4uyxZaeap7oxi3UM+f/JEFGjgYbfOKD1va/FZhXsYHmyq4H3y5K8IwhbpavVD6x2/a2VRSKUeclAhieLJmIKHdm2IEKqovUBcT/0UkN0Ja7LTQy+DyR66di0BVcZHgLKlizmghOgVeiPS7y2xhkf6zlXlKTggPkIgN8xx2dtKY5uG6j5/57Tv2slwz9rSM+8xKYFYLi2RCmEY7t6N5azX2rJSxW3uhJTjIAt4ZMMEmMAT5GsaAL72q4C17aUsAnBtXtth9HroeQUtuKUlK1EX63iRB4l2RZGSM4NkZyuPKzwHipRpaGpOAkfZUA9aQFl3tvjLoXdAjxpDpZYHOS75tPHNQrTLCfdChmsimOr03FqFnATbE9k77nWyEq3A3dxqrt8kTQo2uAR3ZJ6M0zDN6r4YCfHQQ/z/OvJtkFgH2J8GXZko/FlsQ6kqtcTDJKWpRd7mVXC2M3KlZC6nH/+YWqSHbZ/WyiuABXyfG8SCedT5VR4RkTUJKj56HExd32rBq5Qsm+jy6I7DinnR23IwGVu5l9bluGMPJUszgysct/lLw0il6tqO9qD3XrFjHAqmfPlvqgkvwhiW5IAUmAjcu6AQmxSgmaT6jr7m8gu/qv6MwPttAHd5ppNryLpiAIUdpo7NE1DfrC1JpEcP2wQZj+OtcB8scuSrtPk8VVw3rLZjotXyBokM9OTJkDK/1kkw/vueiUClTbNFjskuk2RTdYtj8560H3a8O4HRBnaKQLqIiP+ry0OrhCs/gpqiJnC3/tr89kHWC4XsZRsmWorHzQckUMZGwENSXaQMPYaQZ6Z8YTX64csb6rFATA1PoIT26McYsCdzmcRXz5T0Dc4K4qVqY0FtC+mw0RNIMhJV4hcehEQKT2fEZQYtFK05wCid/DmFIgugtyMNlgCH9olx0Zy8LJaWuu8l0N7oCqAHrQ0SOYgyIx0O01zTaiIW9kxvEIGyhRe6SQv6pKIqgPKfNKnsGAHRiY6l+WuoL6L3xJM2Racdeg4MkT4DSC';const _IH='a4de4b046f5f1aa631aa191a1cf53687f5b82bfb0ac3dffcdbc74126f0a2728c';let _src;

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
