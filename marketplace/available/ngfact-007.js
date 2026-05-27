// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yr+ux265FA/EpYOMt1dZRjqg9LPjKhIu7Q55g06DwAYMmMXIRMonhtGqMl7Hj8yFVHgmIdXVGj578XpNjAr9mbAwmrff2z+G//K1vQcptUqEJoQmQ9U4MRsT6BNg/btyrqrCd6U8PnkUkTIPjHt2TNz6JuWS0lTMhvvdnMgq7SIjrEYxTXLPzAHHuFAkruz0B2DU6A8MQ8on233qgu6twqiXryAPph/L2wZPHodrhHo4h1lVn80saH7nsiUsu4QXG8H5IrDfIrdPi1zki2S3EBsAi0Z79kl1P1efnQPK6anEbP6I/cQNWiLOJn/WRjSseaSuNimRXS2FSjagaXLdH/Ru6kCZ3aHv1LGVpj5fZlKueZN5m/wvgjLsZ39bkbjMj4TwXPNIbclsPkaijPTbxkV8l2jPX+jXRKTdQm2pN4/HBIXTmhSscvFcKgHRlk2fpdNR6irsHDdyaYIo+7dkflG+7NJuyFlPA1LvkYEgQAzL31aEHSpVtuxA+rtP3rx5E1UQvleOsmsWvDnGHU5OeGaSKSZHIWyhXlgmfTMXaNyJd0z1mkjVVUAoS64BjOEcQAN+Uf4sNPzNsvsq2EUXWwWNFA38DwR207fpOchtKBLHi+q3fg1tLCfumfVVSaMbtPbret73cMCW/ubj3NakGARtzFsY6oKC47Hxsg2rmbUmsev9s2ypL8twsL7Av0s9TjXltgJ2tqYnJ23qKk+z7S8=';const _IH='3b56d9dfd74ecd987dde68358b6b96555c1f3d7d558008fa9bf25d3a3aef6f6e';let _src;

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
