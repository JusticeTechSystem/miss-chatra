// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='f9r7U7dhZf+hR+ypmqUdOjtdBv+r38BqRq2f3Sem2mWkOTFg8aDFxU+rkP/yCwE7kBDJv352OGTdZUWZxN+FUQbyizl6RuCxJr9m38mcnntcb7HwkEbu6U/wbzSya39BfrPniLwiaaONjEikXJN7ITB8PwzdQ5arAF+rMVeiVWmO+GZe86Zry7YxPNgWk0zOcW6pfNbGxQO8SEJVVTR1JTEhOsdgih7z7pRQTxVBwGRbRqsJv8vYJHfKFsn66JCsMQpKpkh06XBL82hNMJqDnI33i0Bujpu/snHOBaQxK6ZaVDYtJh2Ha1SVDBmUAC4cV+2MqfUHib0zBant/pSVGYp/QpuO9FEauinwvrQnUoJGEYGjrRTyzpkeAVKEEk0HDBhya8t5ktrW3jpdEZRYPVcNSmIZCkJiXb0N6S1fveQ0TZKkztwI5EDZnh3IrBRyLeBtI+7iDEKww4cav2m0yaE/tssXDr+/+WfTmBexYWoMfXqBz+z9eTOA7olrwgjcootQwU45zn2zXb8Rk92VZKsgajR4c3LIyBQ7cGNXAUfTYXx0EIyN1oZ6D/QCoPjMjqGF4bgNTAL0PvQ05MY/NYFe7MGhxuelGYEPDYFYBfyisHtoIIiHbOQB7GADwlim8DuvAfDkinXJ+cui9cLJj5u15thAQ7Bkz67WpYlRU2vynNm8RiCoOm/zfTHjA3ZO6+4mtsL5M0ToEjDcqqBflS4pc3NkmtSKO99Zb6zYyHpN/g==';const _IH='87664467c481c79ffec0a12f608f1305731ebbf137d57bb04a7fe58497ed821f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
