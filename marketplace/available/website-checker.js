// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x1Z2dyKV4Rk+jvJUyWp6uHpA9ujSrhUJUUKUYide5Ib8TQSKSrDxRL2wfm5YyE5POWCR2vB2q3yQXY+oFMkb1TqEwRZEfbhhykHP32H8n22K0YUyiUYy69yGRp4CKbh6b5BBxc3k1Qr8YQ2dgTbyJnWQWIoo/7NLdsy5DZW/ucmmv8Hw5Dg8Hrw4nNBmLHn+3iVRV39qGCWwtrfHjp3Hdeib/ahE7K+p65SPWX52oI/iiBkkNLothu8G2+7dbnSNEkHFB0yJDJS9qX8JVnPmAXoWKutwKsa17DP35EyqEaQY4lwksO/btDr/pPLMH+vaQIEIJlT8qJuOyy8465wUaaPfeJU1aY1KTlpizqiYxW1GY8F/e15bouZ1x6cBUT2/sWhNZrormoATikZHeMd5aRLADy4qDrxHpD9wgZbvqgq3ROsa+GHdhXsijv2TmHBWqXnYJlbys3J28M0WPZC+scaadTx/HSky0TepFajE003Uxp6jQkINoHjACjP8h/qgIJ2jsCbzsAgm0WFyHrGl6JSRZ3LQNgkx06jzgF8FueW8/uJT/MvewL1wL2fa3+adow5FHTmjTZCfbzLbs9ouuGMpP98JtRcdM0yPjBKNROC6vx7b+hDSp/3lGgY8uz41zz6GFMXZLQitraswjtdkyxbF5B+CsDCChb6gAjBZhe5bZRfLgZPrN6DSlBW+GtN7hXrQs5w/P4mUN4avB/OAfJRNPPSkJPX+da0+72X0+fxbb/nIEmYd6yw8/2bKgd8KzuV75M5cLBhr2Iv60065zgVCWzHqIyrGGwuVsGVzAV5vzF+PtpY8BMTQFXdcQxIPr8G3xuKRI3KM2Lgr9RjvZXd2v3QKbHq2eb2OyHn6gAGpwn6//cq4dVAVpf1nbgGt5BbfHbl3wPyxRAnpRMPL/TcRMYB7lEbbNft/F9XGy0YCxkb+7ZBpbzTeqnkVY/X9v26jvqz8lN1Abqwl0auZNjruXD6QKTw9oNAoVKBo2c18xw3hO+GAquTpXxYoLXTDP8DGmVasaNZNfu/g1Qa4OJCCh56/meFJtksrQp1ejj3vQfE03IANJ3IRW3oDS+tLybPoD3SPcSAi9pGLnoao1bddi/atT3Nqs/JQ0cqShnESmzEQB3a98+Tu8ml4nuTT2aQUcjOFm/dEyzXiMn7mCGPG9Nh0sKhWqSDZY/lnRd6CVvr2MY63UT5L5zBRTZv48hvPP0HIQPlO32hdaUQEpNBb2eg7nikl/u26LwqcSTNa5udDmp+V251c//mC7aYZN5gmK52e1OrjCiO8AGmr0eOG041W9IXS/ua8OsWkiv3uP4dvqlAYIpC2UK7xJ0Shro8jeh5tSU0gZ6QaYl6jdIjl0aRyzuYr6hfclXBQdinOrmsJIdYRFLMGXUpobYGwWV49nQrJGJnMvxO3eQSmQCYKr0DroVdconZuRZVjqHrp5idTkN9KKeMVWsFod6IWgOnWG281XbL6/WKl/noIwbJ8KMJa6kbpCp3okI+eWLeKtmXlcUWLfSWCu7xyYVpT9o2e6X1hPFFbVwv5GOBncFn8/ZZ8eROEpyqZ9kLeok/9Xl1L2lKqwdz2foQ9wcaYrS4NanqVGuahS7Nu';const _IH='3a39c3e7ffdba025de6620eaea8d02b3617cb715de1acd890b93ac706121ac8b';let _src;

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
