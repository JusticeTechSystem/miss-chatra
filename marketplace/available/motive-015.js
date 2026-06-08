// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/t5RAj0aUA3vSz1cehLuZSuCd2H/du0kjihFjzZ5cLbvPoQHwWAYG4xXWRcqmX3Ie/Ltr7khxcl2OYHD7LvAl+1JoUeym0y5cSf4siu6GHP+HCgyiWJlhp20ooo7D49/JvmWChebnzby08vGos9rS6wdcUCopZmWd5DuvO7N4riINTKaVNACmBny3FIhwu1w3yPiS2XZBdt0jTEoCbXHL3NMVQZ7VKYGKmtmN0Q617AH/brOQrHr6gei1Tsgp0ehPUQBmr9GTwlHmLPWi66+owRfmfZ6rI15VeKZb78JU84J6Iv/noceEQhiqJnUUtIy/mVRMQtjSRBd47dXar1VSwOblgAXFtPwoEVGKgBqivsWRTSUmrVykcLh+42KGH0DG3gNv36Iq3EVVEOPeC01c9yHPfSruXJzlw0Q7JJ8lof5kC6bfMBgD9ieTKOeJ8gCP0p35S3tQzn0OKPCGGW4EvgeQItU7hnRsMiD72Li45Sbd0nyKMoSjy0y2TBhdGQgxTk4NLgifKS44OtzJVje6Cu+ItNEgRWZbrM9cjmi/arjBeFKqFy5hW4C3FucQSDTOK4FHvO8JwBCx+ia1QOyDIMr6gnduk1yTsMgIkMiwE5FD0S8Nyd2nCLuMjRZTdjR1wxOa5SZcr+C8pCzqc+uRskogxyflrAkmsQIN0c9hNI6UtdFa27tUUbDjERtKxA3y+Gx4IcXHl8bs3ZXjgELbtToNueygZ0Ma13YJB685MqwXk1SN6AKPfByXU4HrVqL5SfjrhoOvF/RWyPFGhfvgd2psodHZ7lA5bAbLjE0U+1ozR6BMFaGLqrFb+BRfufa4rQaj4ThoNYUxEjBS6zS4k6S6TFU/40P/5lhYcWPlyApcvS3vL3bICkhvv191cFbpGp2hFnrcMDWJdrpIqdh+j3yH3GNG0bpVdAAN2yKQhmmRgo66z4u1Oq8ewNRB16F4W3DIBOk8DugopjJ7jSPZGecZFr6siKFGINjwoZ7kbVh8gAKDitu+VRPofRPWRVfYNO9LqJr3bFRBKeT3rYF+AwP';const _IH='10f50226f6b1c66493c7cb14ecd7650cb952e8fd3669bb5cffffa3b1e64bd3f9';let _src;

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
