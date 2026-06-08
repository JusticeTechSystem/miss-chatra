// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XUsC8NUcGhBXLI98C99TmRqi8djVMbqb5GfXFH+Qc8HPwnRM6aVMisMW25v2AwbFynhuTBzxHtfGdYwclBsWjzz5Ud08KWs4ICghTX18ykT/Cvju1jWPV01czvoa3KvheoypxaBX3UJJCrhwlFEEToyfb1ntehXfl9k+C6mTdQq77Q4iFjF7vRf3mXUXPNxKowB2rO7JolYGFtC89cSW21wmtVKuV3Z9JnseXfwNe7ji/Ykzic12n8g8XYVSrCNVN1+fxrbZ5yw/sgX4+eNIFUEfUhDaZAP/5VAd8Bxg2KDkswnNEa+2b4KxeVy1t+LfUjDVvCzTZmOx8Ry6ByguBkoFKQvr4QKzdP/4y2DIcY06hBYFe0zdI0C2ZMcXmhIWmPINX8Y7YL6hk/989NAx0XgumZPOW0SMWGDZ+gajgbu6+jnkvXkTxkI3VjM2Dzm+ciu0D3UZc4ucMsXRRLQOwcUlRFKP1Wx6xO89zuM6Cg4mEmBI8ZKXqC0VooXtLN3e2x12b6sT1z2NlMVvxBfJ6X/XSUdI6VNeSREhvxJLfw2eNe0ElyZLjvgVMG6k+rAbfUqJCfvgiWbiZc3CfnqZmAPFK8qiP5NeV23HFdBtCjIL3k4khOtM6o3Uih95pRcEGBHo0kiu9RFKEFH+RPN+jvcDKljFoPjv3x5SoRfhfXsTnO4qw9n8N2puQjCGyIl8L8+ksRxJi1Bo6TovTqqWCK/BDa1D9XC615W/HAdhDm6ywHyKRbeG1ssU1dOXZn3zJAf9iq5rUtHtMveEvn6/7M6YWgrO7FvH0RIOwgQbJc+/ue9q8Zl445xdFcURBxW3NWkhEMrb+9rtKodYRNiwEPjadWQVPgPn37ak7+EWZBQCVUoK/zVxn0iCdA5GrZAztV2um+A729qQu5Fk76lg/W5biABe5Egn1AryrBewObbNI5ex2zgZv3U5MX3oIJCHx5q3OVU+4Oi+iyvupJYuImZfOZElPyDSIjNawhlYWqdQPnIZMDU7AtAe';const _IH='21e5325726e445efcb30206ceda122b7fb9d96b8e79297c0376f9c0ba43c07f2';let _src;

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
