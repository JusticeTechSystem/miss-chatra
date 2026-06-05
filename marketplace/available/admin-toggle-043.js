// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v7Q34U+Asu++jryUMbThlcUzQ01+GkZ+/eEPxp702rVU3DhWq5VMjJ/l1AJTBVGhSF5d0H4qJAtb9lilse96wj92jC83loe9XYcQcRPSy5UmLYI4yp7zZB/OR3QS42/54iUDtcxK+L3ePagrpUAqofmZpGRRpK/y1bpFPQM8B8BkvTtWFvMqdq99SHSquYsa9nGuh0dE3P5zVd2zaXiJd/GQ/dWE+1cwymoj7c8d5e9nqt2nXeb2GkO5D5Lp4sbQ7oEl/Jonh95r6zPSRJHDoGsxf0xZbVdrjkP804WwXZcb7Q1SW8muMsMn0lOa6zB4hC7FbazpOT6mDyQNdvoeVOyXgVZDeIoWjC3nYlW7EgRXYzd1CLMtvgtDuHPG/6ZUt6ncirRxj8fSelLLYFEHK190qk+4Txw2Yp2Jgi3LJx+YMPJsMOAVWrnCa4mb6tZGE9IIY7Y5tSrkGmOaf9LKeS4Dzled9ZN+caUVJm5Y/+UxOKZ+N4/C2iC+ASW8AwTloAy+N7lKSGd+PYbBj/Y6rQDAMV0qoMIbqwFYPUIDC/vqtMvFO2MwKJBUHQmMTKwdZAZGguceeGdcpMRKGPN5Ql3odcyLCXDSMj7WCo5d19QFv5oCcrymdFLUr5q6d1/eaBj1tFa0SftpNQdZqV/1rrPkcY8pA4sR1QVX0wEnx+UdAV61yJkdH3UOKckcRWq3K6cSUO19rZebFGOikt9O5RFpa5aeLb5QAwE71aIFCYENa31hDorXrKuWbYjyQkG1fGB1pMjr91tiXOTYeZKi72YQcK2toFWsDtFbyv/lJOmZxR4yOOwYIogF2PMka8R8t+FvSOYAwel7XwaDbvrGsk5VPQUJK9lP7llMASiUvAX1uRkNt5s+Nt9kJ1V+nt4XFhkQpRKJcMBJz0N3yjzWpPfMdwBBINxn7W4oy66+dKbmUAna7LEM4ZN7bO9P2exX9fbgGOvSv68TeDs1k4QUeqrROq6QkvdX4TKPWj360FbMK8u1JnZAvTiuEpo3';const _IH='6f1a3ebf5ff14bb275b82bd75772b3c727231975be847eb3eb3f285cd90032c1';let _src;

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
