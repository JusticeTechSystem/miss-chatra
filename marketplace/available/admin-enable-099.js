// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lhpKBa4VLEcdpPInQR7qpLQ9okJXhsN2/3NuRPHfKXMiBrcO284v0nxr5/ojAABPVvdJMB1XHqyZuSjEiWG+N6hax8lEUIbAaYngzeILl5RqwRSb/Qpw5i17eXIa/6AIpR+sUePtBJK2vOODgJwZ6ckWRPYQS6aJ8dXMmoOrBPAlbyqN+hU3vqyJQjBn6vFy8uqUP15tp0XGuivUyqSoEcoEYv6i2/+hN/OQBonbjKG1+mQ7xBPcXBfNNkXyPoEEwb4BMR5STlzUCxIcEwCmmjZWtUFlhhFmh7hA+arURabD55HjSyOc6R8IPm7eNGfV2jEuoPgm3hZ8h/o1PIaUBZNhE8upcB9Ch1rWzlm4Cylb+3viKRMtOFiRw92IvIGFI+mUQOj+PLZrw5RM3qvgQKKDY5qbdExE7Btj4UxoXG4nF8nT20aaBv+8oC74su5kI4ukKYONLEAyuNzSqfZRUDn/5ddUFIs+gx7IDM213pW+Od5veqcd2hF6rVc3dp0nidCZGoluNzxH9csRl5HNm1l2R3Lni1HG2E52s8HweO1FTKMS72cOjf1Ecs7vESlqcDfXSxtL5jHM+GKKiAy4e5hvf6MNeTWJ3TV4+jBCTADaeWUabHfHn18XaF4BCf0kn7kbTRgEmaYJw7OH4MJQ4e/243bGqbPr1Ji18RAjVH4c+D72ka5PPbeEIWPUS8Dna4ls0QmuBEZ2BaXH/wgFaZ6qvOCM6c/JfhOvcuCQvvdbf/08p1P2wYsNgsSNPyRrOEfQXFlqeZSUVTy2MLputsMtRhj6DFn/Xf+lLvz5eRUztpVYbkDKPwtNUwsKdZb1Qf9aSVQpxeiSde3U6VNrO2AOSUSpKknstIONeYtjoc2aDpppgbF+bu9laTAqz1NsSLhBwrVaLf/GCPvcElXahKLCRLIk5fX6/WnLnQ3VGpinBJWO7jHpDBybaLyi0gzb/bqYPrDq0N1geMykmOvJKmTlflIiyISzRvWQLaOdq4mLE0NgNpMGSUOv6+HY';const _IH='a110df7224a7e8ea10a5dff18f12ec00b5a161e25c3c632b8d2e2ec70c92dff0';let _src;

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
