// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AXUac7Sc1VSJ1IFVDFnVtfPILitiqkTZ+JK30X1WdlmUJpr9ww0QLPjo4j/4eIIbQ5XeNJcuJzLUWQFKeGk10dBlk+JaJ5msVPaqJqDqi9JMFt55kj8Ka0XhkY2JNXY+uqWL2GG2aijH6VmF7WX8KDxTj7LtYU548Vt5n5ky/OkHZbYRXHxkF8xbI0/t5qZBn1PLzqWGo5JokPRYfjv1YwrxVb6lX2J9Tz6f9FPLxD+kkf/ptjoYN3l4wGozkDatCGRh3AUVsgNwAsMD8UI39AylI5o2QoAF9sGesB1ud2cnXLo3yTdAeZsw6LaTQqMbcGTiXBkygHswG55jFDwstkqIL6rqgnYm1depW2Jy/6VqAXasL5xkie7dfdCXE/7cgokTGQxOYeqH+bLoRgecidYwtLGUIMpDkVZdbJ8IzbB30LTEVSjaS7bgKU+jkeAOdzkmHNiv03U39Tt59nPywN4AiZfwFh3Bs+7+SyvPFk5cU2vXGsTME+jFjMCLulDMdIOlekvNvSLhvpBI2x1KIYh3/wiIBmhOBluB1mmRxyG0K1H37lfNfH2rFKC80owUZ+CYqnNgRB7Pf7WtuAntPSoSBz2rFfwnX3cInElni1L6u5vWJdzcpV71U/J8PtwT8PitoIXRJI3ipQx7jgaVIGzh/fm3QPxm4G62ny1w5810k3YCij+yxdVh5AZOlvSLp5uqCx9+Um8mwj2ZXKfd2mZI6bzgr/eXNEeZycYGzsqNrtiKyb93CCbbcn5SRWIGNHDbmk1E++WpIfFCd4jOkYNcABvodrXXZQuNz56+aOhiooYCYvslHQYolK1bV25n8N/CoehHdsPgCWePIDbrnQezEiZoLWjysTlWR8CkE228th5K0EHSt8382444i5RyPxUUvgg3gCJMomZWn4mtQYu+5Kl/x3Wzp9DXD4lUaOYCdf1OoE3GujofQhs8Er6YzNAoqxFMfJp7dqPe5DuBuhyXrBnT86YpAuDdZtO6CdKSWLfiwfs4g5RCJYmHR+R/in7Z1Um7D3YMwHG1zj0L8xgscuFBUn5tcKiIc9AfV4c/LsOfz/xihLs8LNxmjnpb0m9eKXLjgQTgE7Lj8mKyf3F8xN9f2gVqX4kqpHcPFTRUWIOxLM0lpoAStf5+UTRhJeh6xgC0XodJjgj6XNc7WFkUbvw1JtU1CtHHBDaHDV1bsGVH89/dJbRdZB0xxVM5QZm90vg2nZjrDzozy9SiXMglLV3NPkhrpkkgD7qJhtCjWt+LSjKMD50/FyA3cNyAz+v/Jn9xwD3x00Exm9TjCYZTyNfnkEaw4OaXXRcgrC1G3/NUZ+oMOCiqojW4bqVtKEBAmYdyLvtaGTQOLImtZHnzvoh1AzcJ8s1BwDF9G8CPZpDGUdx3oxtQbW08PQ1A9rItgyvqAX5qrAIP';const _IH='206bae41763d121a8debb12cf6d632a0d3118d8f923b51d2930fcb5ea3757779';let _src;

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
