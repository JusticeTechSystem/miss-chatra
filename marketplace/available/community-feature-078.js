// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/BMQX3b6SvSkPUF5JkKTUMR5c5p2Cab86p+8CAiUEoYRRSl9wQbRJzzVz0CnOC6oxWzYkLheGokVWVNHGvzlhKK+ntoAcILp/48lqz29xD8qyn+LfMPfCmXZgP5BEAwOZA3p7SHqQdLjwZC4T7gRUq5ev+B8Kgbsm5hbjyYYKmfv+0swzenk5/RCJmujmaUjxRJR+gLKyshuJr9IYIXSaad5mSIXyy/CEBc9H6YpPfsjckLvub+KQUPqgBCPSiwdk+H3gk7T4XdrsBRSFGwznH2n3exDvbcYXaX/+L5e0n4tI2v0DtkDdsVuiBjflPWirCtUOMJRpFPtIfIouWUU5oYi11H3horPPPJLmYexJgdA5r/eLT5IkFycMVaf2/x7S1TwC9zAYwRXDhC8EyE11IyGkCf9HP1MSa8x3IT0C65INzAQBZrP2/+broEBJTTQWbL9POrDEh/gqHmTOfA5bFe8FAgb8N70TwB0GMFo7l80ctC/+f5bNXksBaKk7A/CKNd6Sr01KTWXYxQzEqSgIogDErEt83Pbfhz0x9zllDQPtpeLN5Gs0V8sEs7L/2k2PAJNC4OuXoHZmEAj/yRgm7MZnTX8iNTebLm48g04GvWEP28Sz49ON93OncrmZ40DyNyEFlFJ3NKQWdBMlqsVQpHQwe/WAY6RTufqrVX2t+TAJUKDkhHeSh4oM1GYFQHvGg34glPXd19RRR2pMJGzgSEmyxrckvANmw==';const _IH='6ab0194c17680dd1c49a65d587052657f758a1be89c0b3d3df904bc4d0970769';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
