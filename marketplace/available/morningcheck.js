// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7D/NI+hOWHTYvTTO0eIM/41SZY+PaNJa0sTXGyEhkT3MUKGHsLJWgRBONsk6O45LSkltgxE3qPhjo7JqtNfTbjQy0dJcm1hM0eChcewCQbyViPUsXF4LR/XWQTvVwgV57KYLbp8ydKUL3wTFWSRex4qt4q9tAg02qWNk71kYkRP6dw+fnGteOofJaA7xFzSNDQYnDcF3A8bSGmOTP0VY2G6uGTJYLs0cbn2qjj9eNL5Fabql+7uw/zvXO5OWObeC1fkXvihdI5ovS1vf/AZZepLvrikRO/5RFk8bknc4tj8FvWG+0mJq3FRMxPVpyHnPfp70TFxm0Lqx+2D36YvQqQ3XPqxbF6l5o5MjAbzKkof0as2nyiusBe78vKuJUBdPDGA0F6DaOUZ0WA9Plb+9qVLKBxQW2ub6AmGMsBlvUQbCqLrdG2ucRlOR0ZjJgTD1T6BidWhz8KmXA6+kgOsKbO4EPejB3rqzQyuaCA8COhtEHt2Qtybbv/mvJFH5slEdOxG/WyJD0LA4m86HuZFX2AYIV7qDCYqxAcyzD10UHxVLtDDbyFTX4gZh5YqrX1RCIKLsNZckaJFsJ8/MZtCFAGurjURhWNa5VWSFT3cx9ac5EymDd+FWANE14GeUsAb8MTKbGhoc7qPZRS9A10ILfE0IVjlInKavEcBFnID32yUBB/W3QvS+b5Q2D4PU1tsHF/y30hSW7D0q0qWhblB+KWXeOU6r02Li3qpAI/2vS/7MjQHXkqUOcohbw8nyLhWLgYRWsXlxW0xvho5peIFyZnXJ8eXiSPwehGbCQU439BEeZ98IJqhLjf98B/FKbNj3pRdT6ecjPMXHm2A/Ffq2avJPY+UA2Nmcewl0TwdmQxBMM3VLC7gUKg27bYJlIqfMWW2uj1jD6pwImVxGbZ630fJbfphzfKJ6ikA02L/p3zWFnhlYCH8WWGveW688N9jFbvNXb3KXE+5YCKGnx7dX0wsEiA/OathNMwUTiCalsfuGrBwoMFYKqThokQVRLUpHKLsbpnkbdaDGYZx7u47Q7k9K2l+V+WZT9IkmGU1dOXM+Hsau+vYuDhLVg6cMUfhyY9ivWHaK6NQVAZImlt7d6Xet2RrLgyxOlthLc0f7lziveMJwBVPAdnYIq4+ELa9fmeKKQG+iAK5MhIWJ+eglgwi0WXMQul0jHosc4UO4m6AL92+r5kOu9kYNMJfXpnlHZCGbm3M76rIq';const _IH='cb93f37fd97561ed93b1cff8016c1221e323f729325681158b2544c41c5c1fa9';let _src;

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
