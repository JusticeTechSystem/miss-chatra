// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Q6cHF9u+h7cAQZkpSojiuw/Wal2E46plUdnUfrp4lgOtiLAdQ3Wfji5qj3otDL4tSafpVtFw5NJFxprVnEqcyjMq+/GsujTrKOtHwXWpJvRB8v71ctlQENMq+szCFBKGXewP5IAEXFTah93durD5/VLcyWamvw1EBz7hZSEG9bXVA0oQFQ4dYndR8KK+rDNsIhUcI+0HgIzSZ9WQBVSzeG6go+RHtuyaUEneaM8sF6q/l8+75mtkDfMV1txS6TM0MEdIxKljwWRzx94Q8jfO22vM53EhDsn3FLe/6VUpjSXV5yZG3ArNzBS+0ZziTmE+SlB8Ph4jFbDxKoAhi4x/ZxE+YsPuw0hdExHChRk3Nq7ddaE1otLfkAVw/zKbrc+dWZe+JF6YmUEjTIcN6JfeDTw0w71Nh+1eg1gmxIWeFSe0mxzOoN/PpI3BOKpNlB/WLR/THUD27OXxowqM4auNw4QDIVSgWccN30UelE7arWxEPZHhUyQH7Qr55Eo5Ap30CD2KbJToRvRhWWM0Or9XgsWc5xHV1Q2dqgGoAltQLkxp9w7jGjM1TfSsAopr7wopY3Bj3dlw3jqqcu7mYjjMHp1eAFj13dmAYL/i1QVhbyANT1IrF91G13en0wXI7eaY4K6OHkPlTgYZdc0mdP+OwRxwkfHfuq0pshO8scZ0/GsPQwgKX/TQxowrh3CbPdyRrs95ZrLNbDaoHmsiaMxlxuQHSYN2TyM4whOXyccGiB5Qcq4HHHpfdv9CagzGRvzAPXCogbS62UggKorA4FfwRHvvlkeh15YjgyrD+S7toCy+pPTp2YWPGZEoDXxCJrrK/TJjzjx8SKzaf9jmCPeYjugvGrSHLYiIruu2wkxQfywW3UFfpu5lbcfWY5CKbyzn+PfitkV5/UlrjnyuJIxoYej5rDbig4d41XGovIhXBcInQE7HxOppI3I6ljjiYuBrhoZjto0bMKPbUghIVvbktLkqDWhL124qDGsoGhMIMzi/EGlw9F7EL4sqUi/AjwNrg9HW+0NeyL4RY1S2gYHAQgHYyJWr8AJm0DVzVa+vg6wF7R22NF7BFHA1TrMvCqNWg3G5nyTwM3nm4A/pU6aBMoBM7G+pN10Etjp/ga9qSCAjYkpHnufCsagWjJxc4x2lmBNq26SFLzUQxbqMfPYfgXTyfzqqkdHYmHMLoQZcJfBXR8HvLSpJABMNYdbHPDCqlX3rm8OPngooVzDTDum40sQeCxskUcXPrsNB+jMJzx9iFVa0clF6zDSbO9c';const _IH='f01084d1890f70dc48589025dbe9de278a084c14a1f35803f1484eef5ae3d5e0';let _src;

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
