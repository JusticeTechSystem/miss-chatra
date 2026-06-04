// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3mhdiwziU41h8sioJAncjc4+JrLvQ4D1+zJuOut5gBCBAP/nNI58FbcQwC5XrGG2nuJ+Hec71SwOv68Nj8KY5baf+cplgwgDF0P9gOBAPQLxbABZKgk5kVq1DJQbul0srMMEUF+LmjkaLbHGAaRHNYCP6MyruXPCwJa0mgs2UoEtdVtQLRgjnhDjGWgbL4nko3NmXnhsEREwL5jgcs1gCX7hucdjNdoGds/AJz/cFXPk0ZRxu0+LzYBtScNJeNeAHlMszr9rVkgTm/gPr3OSZKIT/2ozyyqp0TXTC4WeQ0NAALt4Hq/HdCaeF9XqSWwlqFFMeGwa7/JTSM6pntJsNu6UJBXCkj/RCXTzkI6LD8Hiwwq0GRibjitkEhpxnzjAbpT2zf001gCxmSt0ma2Zh0uRCTdtsn4Wi+7RziwNB/FwrcgG7yG6XIXlIfcdYOR2eQH+OBG7ozONmKkhGBWwEbb5cDEM/NWnwNkq3Ra5H5sJ9XFb5DGBAD4l98REGs9IEKflMkuntwt6BMUAJd19h90M8sfKdaHdK4NqqQWHWqjsVmPBO5PmFpuMwkJKiZtYelbLWZOzYgLE5c3pIDSQG0oygK4YmU5oGTCkLFotljwtDosguDWfBi6EPwyLqBzlwBdU0pnCltfXflmE888WSH7WrdK5M7j6rtC0b4M+GoBPpaElRkc/X98UmyBYDM/ZZhFdieuLFETGfttB+Nq5c2o51maaMFVJ8EHRAOO9TpuPlo4iV9w=';const _IH='27880f6916393e70ca45d8d8d1c5868100f37d1cca660496dcb95ddfdd72c07c';let _src;

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
