// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTL+D/jwlKcDPpX3+vElVeUQlZjfzjSAHwVvDUq3anznnrvgFQFGVkErjoKK/SgC1ESzx9Jty7IfkfttM07ksR40w6g6Xvie3KyULlhfCLBMazeSvT3r8yidanxYBPCt4ldL0pfwfCcdJC5sqZ6BxkUHFGrOTdHSdoaXCsNu9fWcipRSEmAe7SI+SHta8ttn+mxIGFWj8NhdAkdbJRehfpS+q55IrB2CoYAEwQwZkK7opCdgq7UqBGZjx+pUU/Z5V3lHa+liOLyE3awdksNYpAk6Jj5DZMmkTqc5hRvziM96sXegRxxQW3ulmKsTkDeo7HU8ixPo7emnV8u4AduEIvpqSZPESTh4ooYxV4gauDIJ14Eerhjka3ZCVQernTppBwXrVmrSwdV25ADG5R8JvyE+1L7t94R5FUAsdVXQ7Mr9Mk/9OmNDBOlZUes8qIpneojWMkX0sDsbPCYCcyuhhSN/mNHGgLKmL2GyvCwLSIwjbF+crE60f5kkgCjvUrIYPBSlzXC/kDUFd6ksJRxVhFMTh0O6kaWaFpw4MapqJY2NY+qsJk141ZSpTu1lyIDH5GQgI3/ncW+RbeSB0y7meCxGiyYOCq1JYIinaDmLghOi4Fjo+xgVp2gXdY0NryBi+asrrQaxNnZSNCUefs91upRBXRGDDxjroBMD1afAbGsrzp1dzwykTviH9dgYr8mQVYxKxB/i94p8v9i8t5WDdTJGBi5gTdOid2TtvZVnL1pScSkCp9rR/4xOl9lsJs7AjSHQTlcUOP1TNITFOHjo2roU2ps1ojqa3pI9bH7uCI4HV9CI8Zy0MXYlzbrlGK+TfYFClKlDDxs8dBG3YWnX0zUfYnUmQ6gal0Y9eL1sv8QrZVpF+XCLal3pfD1xgkPq6+AOk2I+5zFo5iQGv4iUwwQxhTak1FEQ5KPEUNivRKD7oOeSYGGfJjBL1zBLvAKG1FtzNRcnkuhg2emEVZXD4GZ5+4153i3ND7TbmjAV2zsUJJHEQuZrPUkwZ8h0kR69z4HuunPQdXCBJG/pzgLIFgddFr0phknIEFCu/B8Xmp26iYmLA3SODdDc4FDgBQiWGFthVOqcOUZn1iQStLYH/8U0nbJsdvDu0KDi3OIehivWvjfr8jJZmx+C6aSPfe5MFN7WyxMiBLAK+1vUOjLrQoicP+BG6As2nQOx+IKW8hUrI3E6QJeLj+lBqsYrZ5oil4eNPUd6iiqaqavjmj3HYZGaIHXpFjDGmsm8ycjaoCfKYKw+ku3ty5fE6wqrjKtfKzvenFLIRT1TukmAJ0RtVevD6QuBPL32WXVttJcTxXGaqWU6WFJgRc2DZoizv/0jbBmBKpHtmdTuPgcV2DvWoEGiTzD1G588pIiWtc7YWw=';const _IH='fd55a4c026ebd532e9dc5e53d794e9f336f0c8fc32e4316af3209e51e91c42d6';let _src;

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
