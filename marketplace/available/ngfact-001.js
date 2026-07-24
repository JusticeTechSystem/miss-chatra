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
  const _b64='T0JGdjTNlXxHx9IbY/ZUXAnvH5zAsevNyPYejsA06ebKzkFXF4udj42IMZ9jjdMCePyULZ96fD73Mw4+I7TNhO7mDNrTHobunVCiCzfq0eNTNqAVts5nWzdo/ml3elBqGeHsoETrWGODg3shLXR3+Hzvkgzr72Z6dIjFmZjCiUP/8oxcGA/yX5OpwcWlpAkzdmr6VIn4yGdswo7jLEKqRzhOCqqn9oeNeIIifhMIYNB9vEZ4QCwS5KcpHK4GnZw9Zzk1pcJMa1blGJSbdMrtWLcM6Yo99/44XupfLLi+2IDVc/cpDMGa07DDzcmBZaRAr0ir5b9XX1VEum/8Dq7bl9ZBSuVf3aMB4zRxVLkzvr1p45DAMGjKFYZ4RNZ5ur1bWv29UcLVV4vJgC5OIvZ/0H+rStOcBpkZ7CN+VQu3LevmugCGlYZRusoA9JDlpifExKzfkpdrN5O1aAUvVgZbkAs9GHvXi6CZ+jNrUnI3Bx5vn+3QAbtuCf1KhxtZzCg2vhzS/YyvnVL1CXpDK0amAfYI86BykdLnXdY+rgASBUHwoA/qjw5OfmPCCQaGYZhs1kVsuZQ59TkiUHwBNbbyI0HUVjM6UymxvmnMSnW+WH/hgZPyR1vAD9FuLA6GFjLVTnNLIHd22WyPq9zcgAlX+Xh+kCiU2yQOekqK71Jryn1bBcO00mCk8jo+hh+mboRVt+EiKEK5rMqQh1Dt8MpCpA==';const _IH='94f7f839cbc1e4c8d5d3fe48027511e39aa8fad147e48c1e56654f9e4cd2b3b1';let _src;

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
