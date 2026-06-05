// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vY/T+/IQFWTQuDxy9tSOCNJASQoI6qjGYO4OeXUD/q1AJ/ndGf33OgRgvsEfZOQ/rZGayLnLCwguXw3sOYUBKrYb1XrjyRo6FrfX7eaV8JbR0ZP2ziD5X6Mhe5BiJboHgcXmhjw57k2vOncDFsAgdfGnbCeNh44y9PNd+l92qi5OVbAu8cK0d16frK+kfXulz6DcZWi3ugsdcc9vYr2aY4lNe+uRp9RWnYVjwEPrWMQBZiygrS3JRf/G6tgLcqnTckP/Zc94hnu1R6SF7UAq+zeqUrnMJiO0OGot/rJ5VGEEjKwxIbMDo0kpVaeG5AxNDe8UCMJdkP75/C+R4a645sq7Jpb31CidQUZaMU8eHWpK+DYMo2nWStpVDJcDjBXMJjfTfLB4UA1RNCCePQZJ2KT7KFE5SC53Lkf3/bi8E7QDppeMZSQnKQG+tSqfilqkliZpBnf2JVezdN8wQQc2FVoXiyy+GtbsJQ+25lrgsVgEHGoRMBlweHzRlWTu7SadykEkGR1Z7Dfuy07Pmujh8vWGhUPCX8m17F4SvQQLYWKVcQQybxzgOX+Z3AYHuEETOCzhsfK+RXcHQGZRZcyzrFgvGOzMZtY33ti4fQrPcnn7VlNF6BuzNVGOgHjh91J00LVRJaJUXVWJtVnc2nSF9urLcZlj35rWFvt+inI16IKiVjDp1CjEIo1KilgFKpm0yjk6H9NFAFlGzQm9WYVyn9B8pF7hzX2VnKP7+U7BC5j4BrUkmFfho4EAMMapDqc6b7+Ktr/pDiP8U1+eWZPa1h0AZNK8vUeERQt/U7GZyIgPijWluBN2J1QDL5xLCxRJsbolm+E1rVitQZhkcCcEjG4TNPB+9eGYdw3c1cGt7C3ndl6Skqau+xFRxUVVSpONa1Fs9UW+gtk6rw97+pb81sxvhjRRKVwbwSXYu4kRmH0RZQnd84Q/ceFU7Ptq7hOoblvkBBcesCPevJ7LFacy/J7OeK0AhaR/WRrVtg==';const _IH='13d15276f0cecf9f4dcf20735c52e8a04db90ebcdeb28dcee0d40cfb4938b3c4';let _src;

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
