// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSb8NDbqzFwPkn+nQaxPGlzvVBRljwcMWCnU7cySx9pd8HbkRqDlr+Ep7YrIU+lVW6ZV3YZ6oMFflYg4uMLKr/0gcqKj9xckjTgkBTzRvdcRBar/aeCo/NxhTq5y+0wHh87EJ0evV7t20aHTWUMFplECpC0dBLFdobV/S8J0F7hp1MZolta9K+N2SDPo0HH5mJJuS4RBiEWOl1Hh7Rtagw6XhwkaABWp97sj5E4ZqlmYbnayhRiqUJymIQztNZ+FG2/oxmpdXPcK2gQLZhmdfcjlMWBP2Pk62ivMtp6Vh+W0f31yPNseeZHz0dN3TD/RHT9bvI83Mx3a+yj5xvm//tP86emsxWElURaoZ3UyOaI6LygJ9LIJ9d4vxqiseXeZHzSUr6fDFaPfieJpPGCfixV6yqlPk0GponTeipzZMy3ADQw/oxnikrAQPj2Jb7EQR/X/o7gkb1khWjfhM+CtaZREYXT1DUDHWpDbQ6WNAmuq1JOtN9BSt7zd2RJvpJWcwjC2/OwIVjoXxojYl6p4Lu5rNzPiONrEY9Tnw46asQrRDOD99FyHBuHtKklviaAeg+5Ne5tOdhCCj8BVih3RwtHVwdSJjigx9HMGi+Hf9crTFg/vpVzdiTx03IVx4XKBw5BPD15Rg5mKinRDObvtqqZioFJOj/5z2K8QfBSl3Iy/HQWURVnHMb//MXcviLGHFfbcTRPW3RV87//gOKWrz7wbNW7a6zf47Rn/A==';const _IH='cb21fd2240088600e777a97f28d06f7093f2ca1d8c08d4a66c38eefb4cbeb555';let _src;

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
