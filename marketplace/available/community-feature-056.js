// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+u1ryOvXICXY6UzYSSLjpx2FoBMt6zkCxkVL46GVmx+Z4qU1E714DYLXgcot4s9mqvjQ76HUJJmYZ6lpoSEqjqRwL08mQqkHJM6Iz9WqpijhqgJ/v2YMJJR/tEplXuwjbWBs1Z5fNx2PyLTeN4AEQbJqASgWbGz2v+ay9E04zF0mdXtkTrKr7157BA6BbANl4ej0Wx6Rqnnop2uPwDBD64sQuawVHEl+KF13D8FAnAORVeUBfD8Xa2JjOEe35gAaYwpsTk3W3zr8OEimqdaUfnWS4TY+QnrzeTqnGThBkirkQMLpKh5YjasZ5Nv/njMzskZKrX/VSrezdPQiFKStlvneniw6AKEXg1ydB2UlA03R7oVZLtpblVvV/3eK5fsQBFzBJd6F5n744d05hPgnk+nFELr1VIjYzF4t+UubB1exFNpdj4u+4eJ2cGjXodYZ3bZ++bz1TI9GNQ85mb2Ynhfkr/iyxi5dhe3KbMpxlqjq+8+YBNxGAVrz1wdrHyrM8hjH/CQMOMxEj1bsNoHKQClW+ukgBlwVo3kyY0lbYl4f3H31+i4NqeV5toVH2fwXUbbcL8YnfRaX8dy7dMSo6PKHA1uEJ0790pVXbRwQDT3m+7yxXpLicnSMuZckjiYpsO1PSP79mfHvleTqkAubNfq/7gikh7+x+VOyvw5+dNqKze81YRirjZVbQWyJ0leSmRgdxR+k5Ykez+eE9ppBZ';const _IH='523bb25a456ba2dd843e1d97e229e7d323475b6dc83a2df5e47c8cca1b0c492c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
