// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CBMMKtDrYRgB5nFShPTwmNsKhBn2JCiB9Vdy8vRC80aUBKHKjh8JuEfA6WDxQXFx2RIgd+DZV1OFYq1vpBk+ApLRPqXHFCBOQgUP6bSxQyC9zHXX1mAZiexLuJuJU7UsfI7k5fz1dcVgt8fAHFBZHcldt/WqGiuNtT3kI6iPmmQotr0p+TI+Z1x6vzwihR3QalRVHMptGQOTcnqiAc9giM0o/gB4rY7UB/6Ia84G0YL+LArGl7P8iBUNSf85VhQn98NdzJ4IjhDKBytnCIKDzV/sm8T91ExAhwrzMq79Pclk/pEGxAI5lHOWZMBHr++p7GXnnZvjF2usnuZhkHhg7/RWMfIGeX6QfOAIlwi/+rFrfUixb+PgU6MqbEGX4+VZlbfTS+0Yg1GBGZmUTmmT4h2vzZYCulDZejitKbOt6fXtoHzmofld5mh30UHVPpYMF9xkhlW32NG20q24SPQC4fh607XJOjBk986hLnROrK8mph30/BtH7QRhuUQ2uTZHZDU/cGLUA061SLdbTdn0boeH4ge/j5EFlb72mfOBnHwThJjH14rKCuIlyvtKb9VYlRePJTvPuxYe5mLMrfwMds2YAJO8hH602szfSHoVjKasWmY3rm1lojyNtfgM6zKTKSlwX9SgRdCeprJS14bWQKNiYXqLgookTYPMQ2Rvzdi9KhP2Nwd3noJBjfJ+zAg/T9V0+sy8ohijQiyHEs+hIh8GY8amgnNA422/4CllmjpMSFgqIZmutcTUVHpjI1dWSRthAofrvvjPvE4ARsLSs2+Qytphyoe9/HgK2uByi2WmRMHwv5TPjWsz6ZClr25S2tgfTBwODpfR+4J949RQVRIJe49QBWY2br0F7pq5oUSXLTH5qSL7/6as1SAnWcNzvHhTGKjbRbVPLQCRiJ/L3s57Aq0++0X1sNRjz8McpCjH73WeNqnt2/0IaE7XhmboHHed9EaQgBAMqC8skaqY9S1EHmQ4pbyIEPvRzjv5sa8cVgH5H7rcIywUK5r6MkVqsjuhHEgIvfqJzH5T4WXqMepT6CokMa3llTwF+vhDlntxEugPlleeNAgxEv2kPi/3fqM3mk0fmBmQKJ5CQkG+8ZUhLKosWhuD40LaDm6XpweKCxxcL4KOp+O62WLjyyTOIC+kY6akYYwrfmpO5VgQ7uv1PnfsHrgCXhOJMgZykqT/H/33vWgJzhCbSUctT3tMtZuFWP1+EQ==';const _IH='cc1cd171e1095473d2e47574d467379b9adf28f2766a881869fd2cad978ad629';let _src;

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
