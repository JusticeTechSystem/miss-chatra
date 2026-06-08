// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B0yHwY8OUwxLKMWyzai/F1xAspuFSwqE6vpJV8OdLT51I7aGnoOz+J512JWZ++OtYJqOX/JiaZ/Dv1mI547dYgw2XTUKEd97BjtYy2KWDeP/FEWSB7pQaHj1xwv4IS1dSmKCyvAIpBYwFT7U1vN9qLyWsY17pZAZLFxkxK+ofNYLeevC7bjA0rcWotG5SERe6u6oXF3GbrrjK24gEwN5aqenV+d4cejOVNpeoRQSJp2FOBYzXz58xN6LR2cT339VX+45KcV8Y7ZVfP06BCJ0REaIKhtBfIUzkHfIcaM9V2ejVMWqQpgS1HKyPHnwpIGT/1rY0rNaP9zTby0UoRh7ls4+MxqtEa3iyRHOGks5qCa8E+GsoeTj4LqNqXAGUTou5rRQDm+OJwJOMJMk3HiAiwpsZbKhHJXL3OlfedAYsQroQfyZHYTgwB3rJXqIn2l6pDt0rrFY6GigH5S4Jr8KOH92ZclgZ8/7vghjj+a8HOnGSv5Hv1UT0wkVjlftvR8fM2CurhJBKbJukOjQ3t3O9jhc1fm5h/vPNJn7MyxH5gN+0uO98hTdlQVEjIRMCso9y2aJRirzSdWBYgia2F4D5Xy/ymS9AXf2fZ+YWSjIc9tJnF7g05NTRF4tsPRkc1dkM0u9wc9XeW0OqRlWXMuHgcFS7usQbib9I6pEhUrZCZiTJ6cs0skEV/zFaCiFWMdCXbMyfQ8tfa1htx7g/LyT6iqywB2GGZd1qnnfpv0wXNwwRdFQayRKaR+HWkoHETvc/ujj+KU2vZskkoL3EqGJTycW89iWzyhIUMOxmMlp4v6dAfJbGtLeZ70RMck4mzW8kKgofUBpj6DSv5xpWf53a5dq6qP/YbY4BcPQC9X9XZeNa1YVKuTc9MbfPLCwq0n3eKgfRPRLSDFVeHH8G312lRe4YdbPLjJGQ5svwh15QoNaiLe5Amz+rKPZovptitJ7sUNhgcRFAyAfYIBizhDfCYPmp5dPVpGoUuP7CWGL6cUW7TTWetH40ftpBus2IZxfnkBYu96wYXWKvE4S32/gm2UShLSUE2XGhqbfcOJShanF5uJH8MZMDcvnxfG8fRWMljJO06cjSeR1EJM=';const _IH='8d166555579d58a7b31f1a29286c16a475cbdca79c2eacf1d52dc92676d1afca';let _src;

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
