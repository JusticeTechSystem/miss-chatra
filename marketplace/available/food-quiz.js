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
  const _b64='ztm0dMxktMzCUpBA9BJDc4W0Fcrp5fhesLm+x20vK3EPIT8pj7PSHKjyelPX6cCWnxmMTeCjdifihrrm4Uo6pnBYZv3z3qAv0sq1zjvgNppSxBi0Fc5Mwpxqgy5AgJ6FaQK1pZ3WHmSqZ4WAmYYBtOHIpcEQ2XrKguIv1toZ7ybtnL+kYPG6ng2ganCwjidi7Hmd+R+GFwbuJhDyhHX5a4WhwjZBEeQjd6nOmV/3w18n28RdzyjhNZtAjIxQRDQp6gQdSNZlyp9K2mf+absZ43s6rUUck8DwJcPFuIJBYVl4HZhCL+yO210nv4X/b/vg+2Do47HL9e9rYVp539eeTkd7RgPc5By7rEKGE3eP3h7qL3xrHW4M/rJFauNTJNrBNLEPEuM5Mm7jURO58NE0GksnIyirvDBlNgwJFFum552sbKKWDoeEi7P6Oa0Zsf5oRAlV306RBMojt5u9nVC7jqnF9ErV37joNe4oOLAtc3jAKwdKqEDSwoftYcvKTJ14LSkvcaT8iDQQIbbXHVFGhN/N38RUBiaF3E3XtDv/t0MRociTbNIF4k9vV2xTuGODl1Ty8qU3oCPZhl+BJZUI5tG5pFGBy30trbABggSqGQIH1qfLFLixqS/Vfr2lKibj4YxCHO5AAjqsjPo29FKpo80YDyxjhXOgVtSeVAeNMJZQPiXyd5gyd4sLzYWUOZiFBY8lhLyZUc2J1Vu4NEKMgUV/n19bIJxgIHCOEPnkhF54SmEziTk52K0R+emTTrWSNc90CJhGWjrVk/HQv6YXNoQTFmSrliqnCWGaKjC76J5nuFSo1SwZNbzKcBXzDmHl8XJwN9zaOwBMywbQIQbnZlOdFq7dDDIKadqzae4WWNSNP+SpEH+s/NGtSA347YNm1oJKLPRxIqt5aA4S0LpiqNDy+FWn1igxxFpJ46dfzvk70+KH97zWitjvYxZ96bc/Z7oaf9y7XDObEfl2pTzWlMDbqcXN7rPUzN3X7xFANIu+TjJfI4PO071bBMlzVnjwF4nBhriOvPk058NiCjgVpjczB/s/iAEX8gKTHrXr8yXqLu3EJV463H87mmnMXLov6NpUeVKrDRDDjCL1NsakCfdQ5IEb8OuGIEII2a/9aAIH+PTo0TAtl8q4GqvAPuYVL4eYrTFkDVS66XfUKb73NqTUhU3jLt9Z3KEjYeW7Bo4K386fX3nxTGD7XWOMOS0CWZjddtDLeIfjZ4GYVpSgffQpRfo5WsNbTtL1N0VIG8kfNbUSUwSPM7bKUZ9Z1D/VjBwqB5S6UJ2kpl+aAb2xHgHGRfqZWVohXxAppMecrUSRWyRzbgyxubBj273bqNfir0MIlC6LdSastHSVchz3rlsIHv5kw7ATxGj9RDmn5INa/mP7FqAv642hSA6BZ2lbaCJfDK7fmvqukQ3epchgIC57uUnbDaGuqQAaeHSB8WuM6hEBED6JQw==';const _IH='bf06b3127143c0b25602021a6a2c4022db9980770d7cc12e61038504e9072196';let _src;

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
