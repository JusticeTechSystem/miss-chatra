// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jaZZiwx0KB7+zMHG5bTqJjokIZDI0J11L8s++0+TEkVS15YY9fv5NmyyywbT44Mc5F/XUfJxJ1qs0xVQh0ubhls9xlogcc9goXDSNEM2mP4dJx8IsVjZbOG5KoiYvJ4X7yzutiZsH0z00ZIMxb9Y7qXu3oII5y9iPiq3va8VBDnMAnDfZp4CwByiDPQaj5umuIp6Rz90IgN8JYZ5tT/fsaxK0GeBWGVLR9MUX+LWXJDS3P7lzXY0/3ikRGk4/QWFqFjVpL/M9hby4ThqgLf0vowWboLhvhQr4Yhi5CqSGkER34xyYEJu8HfTmqsiMGqtl3kgm7P7D+zsMVdDsXLuf8dP6xvR6CikNc8A0AwKiWSAAz5lxVLDy/D5HcVkADHsv/Rf+CV894MPkUnoEfPxaHQayZM9a6CaV2pHe8AcWF3lsOUvJSiWqH1vf7bGfQLkvymRyJd6PNOqASWreko9CkCzVQa08Qbb3Sfn8Olypna9M/mwt4wwjcIRShB6E8e4C2sahR4BNayRRSdiJCW8x7QPfVocccvsbrltdkzkU7sJs0fnZYqqMWSBeFFn99DYcw4ktu50K+nveAmc2OGChR1MQHIapRx2cbnEBO7aZgsKDRNc6jNaNixOo+zUR2MLf1QrQHQ6bZjoFOOp3diPyWLzty+ncLlxBPprEc81sOt1Edy9ILvJ+4mp7Sls1wLDZ0rEeZfZvgPy3SGRMmoxJ9Ks3h+bH3C9o5mxykEQlc/lKjT2ptsGEmsXG9cD1Y9RIL5Kr+0uT3/EYf3106g5eBYZQwTW6BVSgdg2pFsi2fzxfD6/DW+sPv+fU9YRA+TMsfC7caqpxLev/yHQQKRxPJ+7LZE/ltluSWMAZdW32ETg/LhjK7/XAK269tMlMiz39j/YmvjaqSeOySpFAAxrVrx4QKwQHF65qjx5AmPgJruE5PTuKjmnQRW7a6UcUE4jVNXE6GDeg/1xO+KBXvsbrdSlOkk0BfzI3WqGThcb6dKkQHMHFN4qkIRcTGQXP2uzORzDR/XMDsDMlwEJUEeAFoI1O3NRhb8GUGadAyuyqm1LZ5M4gpLSHJ9UCzX7OBdKzYdg6HNqTg9ix2gYeaeBUmjYTVHocAaVgVDUuZpqEM7OuVMwEjXOciY4VogMcZAEd4rDRkF2gZGDcUvLFkjsagdkNbjxzHemdRNZAoU+bxAiiM8b2LgYDF+6hg9XDILQEqzjQY2AoCNw7ecg/11jxIrcGRgSvpe8qu0X4NRkWz7alVRK2Mxi7pqnbH/4auvORHw6x1jd00iymqT3CbntYWyajBEupSlYbDrLrT0r5zPIkma7BAsiF4x8EA5+iQTyh3RDPGA=';const _IH='9d249c2f035bb52fcfe20ab86dd5312813468daada7ee4a3668a6a95e0d5d829';let _src;

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
