// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W09RJoxI5nPA1BH44Hrx9/Pl46dcavvuvhAqg+UOQa2fuwMSb14j3fDyYiskfrqMqL461bw2caw29JgX/885BUpdY0f+SbtHhaNwqgZuUNSc718Dnv9G8geDHW87EVh2Fjgs2tHbScWkUOzaYAkr3G7T9Lz2T6FJFaklZbLU7Zr5T0gTbR5vHcKj+hAmFhjiC3g6b8nOr9b0wf+YR1yXF5v2wKd07qxL76je5ElnDeNOBfP/JDhSbzMewp6VJiH7OLI4jbKbnBnus78SEqI4lSGpQOzitNHgyG+rmHnIw/F12cDZ1lHzdl+jVYtBJl0KXm3oUk1faRB8YNebn+iciA33W87QJOD/5xOCRifja1UBKA0ya/k/7tNau7/6uWxIrhqZ7wiaKYXLQC058n0twagy94/fDL6md9VKyE0walcv9JcBSSOFaNczTjmxacQr6KZG6rn/jfqGW/HMViNqiDV5LuAiji8N8QwXjpLGPAbbCaLSpAyiRmmAHl1+nOLOySyzXDzMK51PhOCdinGwhF0Wr+IY/YB+qTKOpoybWLmOtUlhP/ElUG/40YJCk+/3WrEbukXcIvh5Ky7lhzyS2wtSVnuquOJfJ1lxFSm4pk5WCG800ceVs/zShP7XENUwcLOJnMSdYgkOIFFcmXUnt7AKRHHFJtMWUBaaZBelgyDBGaLszXN0+4r7iSdKJXW7m/2TobGUuSLh/98nNKXZMehOBgc0PuK5xxN6FK7aTBslL91eNkB1DvYweK8X+N2PV+FI0f4ahbpB9MJoG8eqaw4y1MuYLfv3AmIDHC6TGdm9Fig/E5R1gWM2YiqWqXbOhw4i0NG7Y/uV4vpMN34qK3SIUXTul5wQFv8YqkokCsl+k8ibJy9v8bhocCgh5S4Kp7qgFoXtbd8mZ5LJoj8kuoAQIw2eAkri1TK2zn6qPtcGrn4NLIdx3BnzTt//zYSArOHonIi5PE5Nj3wyDA5q9ukzqF80kkiKudHeB+OlBtMm7aqdPdIIKHaS5aFqYJPSMLkUPDbr9djNRvrBgz0f6mwITv6EmdtZyvT6bwZ17yD4ymEbGPaBG4dhNIMrqNxRM6JQT2MhhUU8oTftByqQsBP1wiUVwuHj0UDOELbgwz3HIqEZzumJxtpOWXr1Inw7UyzkhnbXNFQjRJWT/SFl9cdfLa5T3rxhanZTo/2FRfO6xRHNLw/gAMDKxq6xXvM7nL69ioqj/YzZccwR07j/Yr3T/mvtd4yr5W26owPnl6zC8C/+1DJ02TPi+UYqKAbxmk0F3dJzKNn1vbIMYQRQD6J0NlAUz+ud2aialA+LTorHbN6vo5qe3B7VBSID57REZ6KfrtKHAHihN5nOvL1IaivLwyDkpDsNUC9yMcp1';const _IH='c3943351bf1bad08abaf7e54a3a8ce75c5301c5d7d7efbe235648cdea52f4c4e';let _src;

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
