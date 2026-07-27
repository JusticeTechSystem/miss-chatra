// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSop3HtaCTpDfbAnGlJm9gqKntnhSGpvxzdpSpa/YWXhaudjjGSrxl+9QYQxtE0kosrIPcpEwStNTolwGAqcmVJV71WyQX8iK7wXscFcLOVKdM2TSRR7avhs4pGsTYh4QYS0NNeI7pWwwqZ84QV2HdJ5MEEN2Zh3q5/39cQbQuOsgDROJ7tUum/tdmApyWvkptpXeMUQZR2dJIXychXQ5QGxQAQRm0+wxlaDWb72AW5nL4RiZqVVdilLUplGHs+LkEmF+fCcfsJbmXBMKhvWSYqG83w+WWd6Pama7T8k878C6VqmtcnnXnlIiQiXkCfL22nTWGHovd0rAKVEnvYWZrLiSww2K7wPmUTw5B6Z7h2NNCS8x7xOmsLgoLLv5t8EtMUttHzy+u3MoIKOECyF7EvzDZub6VRaJwQgBG46dPok6jtHRH8PRJMGeKc4SqQWcPL4gCd/ixrj/QmwUyx6k2AFWjdt8Wq5MpHLl+6BZC916sHOdoUF7xIgZrIb8YE7DAgF8UnTGGwQwDdWyVGp5aZ1hCjcyhNuL9vd2D1EkuZPPxXY+jNE/SntLIaaNTauWxH/eedAfPwwiIUzTXz3cJ1v8I/MgyXi8KzIEwTMnVhjq+e488lQooqq/v4C8qDDDpa8trUHcn9/CpZKQcHJdOHUsZ5Ta+h48zCo/ViklYvUI93o+UkVzjUXbBACJle5M/kC7wOKeEAXig9RPaaJSwGbh5XEeD2IRGWzIUg8NHJEE4ZOuBzoA6j5PXhZJwwLA9wIcZi/lE58L5DWy5KCn0LR2x614ev5GGLOgHghx4T4+26DmdmgBnw8hCj231SHUeBUtpp53T/SMCPJ/F8/Y+a/+4EUWR8Fg/e13dKTnsmcycnjKIRBqmaSBRlyNn2xZOMFVN8JmHTrBlVBokphoCz28jQ3n/fg4pfxnDxSXjI9v5Le0vKY6aZjUoRRjpD3rtH8APKRzKgoDGRTjgWMt0UQK3uJ7f+yw1F3ArktTDvT/w7jGcxv40oO+TG3ELq+k7xf1xDXhCrueLCFfAaOw==';const _IH='3342c514ef93ca73ee2daa31be3ce3c4c6f5bd35c28a0f6f51a2b78f75445cd5';let _src;

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
