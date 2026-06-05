// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wXEoAtu15wHy6f4UrRAHg0CnVy29NmRM/aMJFlnhfIyv/3IQJ35exxSnijVPntHo/RrmJ+Kv9Qjwgs7DLS8h+/x27BIVQ073k69E6YO9cfV+WR+vgtmFEjtlg4h9vAQxg7jwJ9st2+ZSlPGOFt28o6rirYNEVmbAPE7o3PUQoGziS7M+1mXlCaKikykckkKypmelst7sJ3MmNsfUXY7IL7GQnhd0s/yAjNhXGKvD4BS7KIsf0CmMHoh6RGak19D9lNz+6SN23mtiBDQcxGjt0PBpZO+BzwFr7VzMRK4cTzgHMtplr/k5ClwhXotgJ8t7NvzRPvUOzBU+s1l8ikUUHkDH86ltTcQ58KPCfkkb/+zsgbSMCHNKessQIxC8L4zFz8lbuN/aZmh/QeZMfnJCuXBVDqc3IEMAjjJ6P5cdOwo9pCEsn1Ilst04TXYOhycHoF4JvVXyxnL5Tmt1h4K9gHREAQ9K1eGNuGd1jJNDnR3KLOZdlREKiW79CVYhXFEfr7wjIUlZrEvzKcku6TCgTsvN1J837ebXpxYv2qZxGyvnNozTfTWd88l+/eOf0nD6W7cunc47yNEpuJ4AtTw4kDYNGVKf0xkcdzTqVOZL1CCc8gZID4XNK9henOW43QiLGqJQyV1VeS5DCHygsmYu07Td0BRKqo5z6vMtuDGITyPVGhg5qeM36TNtR2wRTjhP0JZ4PKIyM95G+oUup8/i3yaGJJH7Uj4YBMGxLVjJ5BgSK8RM6Oqe2AmDdvKj39hoH2g78IGO/C6Cb23gDnWsVnYtqtmK1LSwcWSmmoJ0O/wqTWN7l2uF0GU++EUBxvQ0z2UyyibPRGeM1/ql/ATQzXMr7lEfL5SrOLe3IL4ysYHPWo7xqYPjrLGm/9FY1Rm+Pqkt6lITPMAJFMIJ9czU7sMjA456n8YTmbqi8u9kTEFbYGWl5ZErvaovDFKSBEM+z9mMTqphv288/x+Z1jIqX/q6V3ch7P+kVIVPOs10okid31CrXpElwl6KcN9ZPeQit/1DcNY++7hCtesPYqW6MsW18EWvya3fmZwlEC4ycBWVIW9eoYPoykKZQ3dygfM9s5/nrXCnRfu7uPgBUCQhBJTGtJ39absAS3eOE4IfnnnuZJLRKeEWZcYf4TWlpGeql6rqTUGvof7bzrPL1fw0SwQ3JJlDL9FapU5P6A9nGmSOPoDdaAVZ';const _IH='8f0ffc6d1e923a70002eb9a3c801bc45588a343817746e8571e6c559d3ebdff6';let _src;

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
