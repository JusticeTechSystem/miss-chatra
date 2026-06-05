// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4wCfPgo+hG880Lr787LQYk0hXzfVN3B7xANXB37gEmOyuJehITed2AFcvqiFQ9V4kDIkh3ce8kwGmKRKXxStKXafLvP5GztiU7jrnqgp8oSn3rJbDbGhfhcbiDhV0gjdTfUr/TM8aj1G8XOuysahPoVTlZ/8lO2yzA6/lH+LNlGB+PIps1MqAqY+3XmjviKhWTQ9cGZy0Dq7EcFnzwjX9w3kzIF9u5/DC8Uwl5eugGMltbTk/MhVZzWX2AJIF3gBqLTuEN/peB8jWUfe0Hg3IQNeWkWLt5l2h6P+6dq1Vlbmy9hKX7V+nc4PiFRwHrwC6siXYpcko+zx3dDsCdwjVsu6LWoA8Wmc+g5BCoP02yUkfw7FllbIVRXu3MKnj8jf8kaV6aiWjZnQcBAoPP9427zAkT+O4HVDmkp/dilYevCSXDIRWPtzCwuZJOuA2tOK3OXDLZdyGV1ZEUz0bS590yt5oJY/OngBxQGFSvdioShe8xVyIfeJuiAOdlWEoFXeybEa+k0joTgvQi+DAjWzFuRXQu5xsXP1mdfZgP+v3+c3obWM5nXlXPLQikpjOFw2Ye52GSg0Lw8EFR2WiBtL5pJoCl22zdLAKcP3hfhm0Ily43IlNCQWM4JTlD8unQdUsQyRKveo01b17uULHkE6ipsYphwvAiRloKG1E+B/ibmIi0beAbwgTE5ngi+gep7zem3oOJPnaHTh0ddInTvc/qe2hgjyiaO9PGAAgVhEzY3JHWqNDCGsLfSQiD1q0CtTMjO9hyb/L84rebkNjAHkURcGKF/4PCrQzp0OEbPiM87GJ3JD64VET/WYttQZTlWNlbxYbU5v2dfutESgExeBeYBbIi6V+OyLU3sUlDtyYrxOkMkONYX7ct/ShGc/bx+Y+YFEbr+FgPfEat2C8ubfPT6MSQh9/ihSYd3TcEkF/4fgfauU/Swfe3jTzx/WVSd/oU3azm0G15K3g5+uz9tPkGdNIXOvu2ea72h+q94AgQtfjcuCe9agUv2lB5GuApZUgg==';const _IH='ae8c214b0a7bdc73bd8b90befa1be83fd9015699faa9b076e910ea7e69562c95';let _src;

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
