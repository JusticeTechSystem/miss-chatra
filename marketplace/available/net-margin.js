// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yzh+jrT8VHlxWu5Oqn8CG6uxr27gKnOD838mp4AauOGYALg2oLuhoDyagd7yTtANdk4kKrO78wiDCZNUeQCYKr1BVQevw/Qex2knwh8QwhzQDJwCaGjBwmwymZkIPMTrnwLhfIgNAB5zBHEVjRmYK5dUtimnld2UpMH7h34AULW/6A2ha1KvR/RVkw8fKkMa/I/vp7U/Vi5qI3uRqZmrl8wzA11Dp3XQxywdWC+GlrU0hykfwqfjWcueQoRWqX8Tk5hAX9ZJoCS3wepI23lbFIYC76nLEGMxcl7yIbVuZ+pOiExewbEoao6CKPsMTYePvaUUjDHBiy8sFRkRkvRfNd64aaDXiBlpCs97H7nAY4ixhY1WRw89xP0AYccT0yGvu2ayvgrxWHXEhJDHnFTU1ldQ9RsMx0AcVlzuDykg7rotkBGLW2SqrpKGsy///sJ9mmITZo45qE1ZxpSqLj6KFuaHjIR1m0/vBN18ZC8mUBrJ6JtcMaTmliMm9r/NR6ffRLqFRBXZVKC/GH408q1CM+JBbqqgJHtnkVOF5f7ow8jxjp4hNLxuusEmkzTdgBqDWFzCBiA+Y0Lmu6RN14D6rcXyVnNCrwsdWjtb36bSWeoKx/rBeCt673zIqqkSirE7ypDuQ34VA9GPvq09QUa90JQei7B+d6CPFSm/j467e3YhpWvTKQ3bGLclgJQfwyCzQ7AC8wbUYw1bnvOT33Wj4NWKtkKUimp4nAkOPr/3VpJCmEpQG4WAV9qTaJNaWAGTOyhr4d7qavbLP8Se03TVAZd510tCpDbjgtn/EK8EbVazgTXPwjtjCJL7UpvhyjXqtOtZqWqc60hLnjHomNU9GlbaKQL9s3Eng453ZGfMPngFO7KlLV3NPMDjFSCI8vwqs/49p2MCZuBqtcStAJ5zxecBIe258d/gngX9Eosb6dCIG2Y0FR6RDWstxByBzWU6Fiam4qO+r/dgArIKCGa7bpTUYTN82NGshDsVZakKOryuhDcN9XqJhK4l0lLuE1o/ZGF2+dYd9gwt0MiKptKSjRbxJkZzNc0mxEsgULFJ+2Kt8i8V49gW0vgpJFmW1Dwe8f3+3998vP9RLTpWiyRBTmOg6uByeGx5N3z/ylxHTn07VOxbjiptaTmfb9WKVqPaCQ8RAkrVs3lts91GG3H+KOI0PshZ51d91+xRWMiPc+MtDsPK2Y+lnLw5K8BiZQcAdnGlXusoiiAcZjzRXdveqbhKoXBqeX9/KsYKUA==';const _IH='f77fbc161bc921408abafe17753dc59468d124e5e05be0c54d2fed10ea252fff';let _src;

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
