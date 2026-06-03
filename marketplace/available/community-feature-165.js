// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IisvX5vNLjxsM1iJ2/zyEq1/YxY9Ub/iuGwlNdpoJ0nMGFrr/LUd1ahlAVhjDpAxR7OUAryM/JD8XezW84iAotu9iJcmVvpnAwbnqaSGprjdsE0g0VVejfN/0RLP8iZhy7ty1tehqbHqS4QODbtYbbAep2p8xNGAh1C/+YY9oM7lMwE2msEyQAHJu0H9DR227HdYQw8abGi1VbhCU0rVYMbyHTHQ5HyJwB7QUCPMTtrIYJPVdbsLW1Lwap/4TIvtvC/HDwUZIcAA8uv/UhlMZOl9iyJ5uHuMP8hYxKH9gJXyQz7LJ9i+tR3h0lUGB58zV2yccXbH/JRNZ0r8jmDk5ZHVDftp3soOYX23hTXOnbbqibEpM49JIUrtbWbp5PrOdi3l+G5phO9ImRjhX1w0OPBv8P3DxrKETER+k4lsX9Xmym7j8jjfuOhv9JW3D+JRE6VJ9YrchUcgeITbFCMdH8DimqoxnI8McL0ThUYDWbrwu2s9xJW+dJj3lshS5GXEH1EXoDUn+NZ6EfKwaHTZmMAupxhhOPP5KmUqv8SmjhUeieGIm3II/rvaQdbA6SOMk89ECdWF4YeyDMBY70qARW31tOQ9sruSBMmdz2lb3gB83mJkEP06o46YLLg7Q1I2WNTjAwsMTOKX5k8svDMLzZ+QcdgY2xanctBTBqT4jsRz3R46OvD/f/7RSISiiMfuyVkEi2sf+vHnH+FbhSqRpNimKS/itNnpDpuc6MSjthbNyWb1LCpmTDML';const _IH='ce84a046d588b038f7244d8d369ce9ece863671b2758545a8c4886d890576922';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
