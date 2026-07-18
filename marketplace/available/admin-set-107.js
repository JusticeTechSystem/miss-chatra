// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZss2k+j6cPLOxW2Rm3qeuA5FPe1qc5jCDLaUY3A6hvQxljr3Qz1IYjotUpMExdjPk5cAz9CfyLCiqVq5bDBg/W4t3QiqkiKALfntT29S9nKcWpfLbc+Hv5lQ371RVzF4sGY/1PfVUXO9DBtVlvDKDlxsNHLElSdjJTZvUh+UtEZ1fjD59NRBlP7Q8jz84C8jJ7CSfFcbHDYMD0T1cz/8sNTGw8G6kAKdueo6j+UR9YiYYu2eJsPeBWFBSQRkSG4nZO/5vR3+Ut9lAN7zN7+prtwpwgAVK6opnqBeHqBOzjmFtEJg0h4Wi8i25KK3CLiev1eJ4rJPzhweowNZ595Tji81YkvYtVFbVlPgPW/y15OM+aPLrFF/z3SXGtRJX0q3OYGOD/SvINQxdW6DI8u35spqdlU22kcSCjV4zc9ukI8SV04Z+FNgiB0X0LcD1uwFq//Fk00z7l77EcKMhityiG1uePVfiiaqm+z/uPH357D5eHx5VXiNuMshMA4QITwGUynUdj1zwatFOik8oP/lEnY1J1uBMSNIwfyG7gLA1xsEAUgDi2+PDduF3Rl/b9/N8Gis+jPUpCcwze6kPMB0G9mnhYBKzegroqGkhnSuhWfKk8Hwz+bvrpZaN5Km5Uf1QJlcCp9mC0/vfzz+8S+0NHn2Wlm78+9XyesqG5sfrnhRXpfZpCzuOGRMeTE7yFfYJQtztbFzkrRGJehsjv+pB5MAoyUgUIZxzMlSaT/WPRpZZwEW+xqpZCE/dGTJj0ogUZviz1jJbBjzKVtmEikx0QVtE3xs+lMcxsWzZ4K0YFYAOCZSCaQ3NVE4svbafvvVrKT5p58+WwT3I6CPjzFH3nn4C4MkbrK5J1yTsvu6gdRLy0dU0XvRXQB+QUMaOCFB3StmD83TbntVVIxHc7DKZ8FDWnQQoKRx7aGaUS30lKyLJvug5Kk60nCX30xgW8R+ZAFI5JMGWwxwKTf40pMHft88MHHcIO9ESLUC6';const _IH='8a37c1dcde56f5e4e9e8d4b34e9f8b90ac82b5c0d3f348499dddbcc8c11c0db9';let _src;

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
