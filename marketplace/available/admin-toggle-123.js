// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRi0OFhS5RtylVTYfrdlAlUpOqxiCtg4khhsEITr/wclXBG2BQjt6W1g/VrBzXA/WQ9+EPmXltX8EhvrPNfP/NBSVo2YkYjn0bpfcbhj+cqtcKDq6WWL+UTTQtXtPgYzuCNaeZWqQMCJyP0kPqOcFe6VVQLUD0Jq0y4ARNkzc8jVcntZURPR08tNO/9e6koQXKjhiB/q9chKVIjlJtwTMtfPnKWWbZs8WV0Q11SeOcE/BrF6zsPPow0oqUzMxTI4+P+KaGR5ZHbVcl/RFkMM+LM8lskgGoBisL7e1iDAUo+5nUsMPIK/QLmhd7BnKxfZpLTUbx2umIxZwPD7QkzyMtkK1AKFBMVp6t00feYq3J5DKEtvWtf25uve3eqERUnSdC1x0APOPV/Ly4OUtY6WQKpIiE7rflWb6alHxJN5p0mdg6vkW+wEBsyhYbGX1Q5o20IdOWNmkn6O49Ed7Np5p8Hxa/ka8/qUpfKiuSfIN45r6LT8agPNHp7BfnAUxKxvXqYG83k7OsSCgGxnXZvpwrTw8OrhzP/+GNQE12SfhNRYP6vrL4vZBgBT+O1fbJDptsn8jB4lB5XQobvnjB29qQslje+W+5E1eg2kttKKpBv5lbYC14DLu/45ztOuo2vywQxvyTG4zXt05kF+IlzTBc49E5Lwcnc356JIBOIHlODI5SFI6y7kwofZW0Hus4gE+GVDWu2UrHVeURGicnJ+59JCJ7N4keUYhZZquJvFZ8eE2REkSeJ+EE7wFphvrMvFzlFb8Tf6CsC+TGIAumQn06lSEtycLN9qCdpuom93jCzSyKd3MA6VICVobtyvAoNE9bI1QCRRr/O/IVpgW6IgTKqTce080LeoX7E8PE22btp7jQgbr6ei7V92siEju99PclKgVcrFPLOAcAfcxpRx8Stk/4VfTZRyq0DSrO7YoRZMUR8tw91o3U7o0L6vNTcH5PhiTPg0zCYGQdIKXajiTgpPQi76vZ89VRiCuOcxoZHB3SO143BJKPepWqcEZxOHdsq';const _IH='650a40a5657c68c5d11c8aafd89c30a628430a81c90d68edf909f6fbc9d3a070';let _src;

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
