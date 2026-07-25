// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTkDlfDsv3KN7USzv/Y2i7lO5JnbpxVyrFMQY5IzZAtbZ2ognIeii+5UXrao6GpOR4WhVCPUwoUg6Wrdaw76i9MfVU9c0KZMRHi/V1HjCDy+mO3mJmkeInqZC292ZRQWEa0HabWwfIN89kDLsc2Sr6FD2wJwI7QoLYA+5Q4SRzoE6vYweg+R0conKXi4TwUIAzhjlk62iAUC/zfNFglNVDmAAinIqEXZRkUZCNFqm9iMB8rEoetPucnpb4zAYqjgVJMcDYi7jkknU2pzuO9zK/d7eNzhFI9E0KDm+CkowObHJFWrY/l+6BJgWEjkYqRrgycZOV9IXElOF6+FBXAxxrjxesIlRU/BceoyIMA44clGD1QlZf4egOddttpLAAcv5JTNutBJCihFTmQIsD1LBIpnUxLF3TteR5R9Su3ZPKMJ9jIwN3Ev+1g5D0zYgnhoEeIjdZtuSfv9Df+ed9/iw29Vvig0cL1ewpjtMVMcwLLK1UEp3mqYxxg9wyoFVupnrH5rxzPKvGPGQc2wX92MNRDBS1NTOUef+hMCP1pdlHuHYLCUR83N+Cv2b18MrZF8XD6HHH/jUsiHkovQ/oKTBfLP5/4CRzITI7bKTHaQoC9l07Ka7g8yN+zmgvIcpavl3IOAseGNlxIYm7cspYxei3Mm811sR9xS4G53ANXpy4Ph0feWPAjzhW8mdvcdSP94z1jNIRgWvQXL7MzmJzAe0F3LPr+nGJPx7/g4b5Z3rSP2u18s1ZqQIv64iFdnIM46VNFMd78H7lDcOjhzUP0UEjmcNHGVvb4Bq893K9LeI1Yrcim73gUfZNSeik9DV6vqeA0xRbD2yxdq4+0F7wejo6rcOLEXWhL3R6Erh+MnA9ZJYbvLiDiKP49rfgn7PRBv7HHnkH/AjhMzWaOzE1sgM1he5sRN0Qskry/vPr4vpknqg0gWVwSwHbZJdVcjBt8Miyxian4jJ2b6fudOIR4rMbxXvictyr/WAdI+rMyKpFsYmyHhIvQ9DxLC+3hJN1YnD+oorIpc2hB9ah8Cwx6HCvtm1k1fw9lJQWLof1tD0+5HuhDZKfGNjdV+PwQxOAcNfrxLOkQwR47s2KnSq8WqHDCwdMfyHy6Te9UOG9S0cSl8GwjC9Knj4HKLQuukvwuzEKPEEpgyWk97EGrxD7yjZK1uZMCxWAAjRUSqsAY62nspvw+IkmbWgKaqYntKyM9Met/HX2RyAXO43YRndSj';const _IH='550ec77344e61b6fccd6297ac1488e87d027ad1da88035d4206a6748bf6bb441';let _src;

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
