// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6wcyE+SiE7cXIkVgHoAQwf71D7z5XJMPOpss28yrOHHm8FZbcB6ZZzseV3M6hADWKIISS9BZF7rmCcS70j+Nt4WxYtV+TRczoEp15fDDqCKqMX/wllp+gKRoxnlRr6idzYnsdC/gUoBsWub5QTdOYegzUsWKyUvG9H3kGC4IMXAYVwJ8gTsVM0jjZNKUJuLfUBA473OEqo1K1Yx3vT4dNba2TxilcjPfbcQB/AICaw84Q4IIsoSq3soyzzNPllj4oVm9fdm3idc1jfQ9iAa8FykisrM6+KR3YIcW+7nq+kPu23kFzQBIl7El2DAC858+wD6PtT5eXZmIhehn9oDcCh/YEQVc5iw9lJSId54b3LgfVck3lbF/HrGFlsSs6ZUnn+zExN45PUBlfnFizcf6OCEuW6x2N1wdwz6U49/q29Rka6nKEWSAhdwLzLfHgCsN5vqgF1Jd12IDb8P0JvwAxCv7P1u9/AqHPCibbTmQVO6SV2hIsWxrk3yKgzw6NmcdwmZX6hHuXuGY6PXPuzU4G+P+BALEo9becj4jQ6EkMvFSZshC2h+LdjjXKIRcriFNPjL63JQDgOoY4JsTL4ENvvr9TNUqafxRhOo9OnXdwnArEVEVPSo85oJwrUjKNdIOy6filj9d50mHGpnyxq+a43zY5e+tRXeXE5cZA/kJW67ukmPfUw19TMEzthhb2zLrwTKYI1tsnBYc5IvJnxKjidQZrM06KzHAoVdLEh90D8GaiRf3YwgBDekZufCihawSfeJziGXVTIew4/rk3ex53bjVZaMW+ObfI26AJIgOpacrWUieooOhVRBjgMg50aa1TTRHzrUMMYnZWZq1bsi30WN/MbrQ0RdylDRt6U2zVUiNG29/2WosZwjH1yur7u/pJmYnBtOJqcT6XjkqGrFFPH/plGLiCNnffP3F97wBASx5YpRvi2WkoDxg7bNbWhCuXuuYauE93J96qPutjtSD2i38YY4RxhQauI4maJo1e6jVhLSGgvptcuBfn0ffGjnICYGFJIwkUbQpl+wk7oxn+Z+6+5K4oE7pzE0Dm8fju9ebMwKReOfo7VZjOw6Rt02HMxxRL5PECJayey6Yb55IpjnzLCuybAUP6wpjrsszJ6H7Pucj9g6uuWO7EYcLvTQBVypNr/Xb4+lx14G5Ww/MIIwrtnCG1aWIPebUrfcGonOsgP5nIYn8LF9ZD7j+sAnXqwl9ze5591xx1gONa8bEf+caR6iLTz2wX6L4wZ4vUARu5I3XVso39FNkKEJ1RJrDZUXPpumeF1zTqgvvO6z0KJ7Bpd2q+GUKLvaneafHNsM/WmjB19RZboo5RdLTFMNQsgr4iKsg5/OjzQ7LYPpiZlPwQCOYRzsG/w==';const _IH='18286cde584c2f4ea937f02373ef91323bd197a0fbcf69a3a69a812d00bd1bfa';let _src;

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
