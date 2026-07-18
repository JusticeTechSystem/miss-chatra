// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQe8kxBWwf1VdeTm2+PbKQggBOnRzPpCwoi+kNYUJ2FAAtU/jmY5M54YQMFcQSqn+s3AdQZUK6wAwdLH9458Y/TzVxwxJk4d9Xss87pI2mOqXY73+kO3E3xKJ2Ex/acQHRXxCQBIGhaehNU+aiBX6TYVBVBX/jUqkvXtA9H63tGhAmn1lwp6Pw7VGYLnJzPxn17Xayem5rcafqwSclJi8FwP+uU5R1DyAqEcUsP4CnKqubr91dgP7QHWEm9mGamAwWHmJ5bmhXYYISrhx0gJoWWF38Qc74l/ow7GexoWiikEl0httXTNMP2KILGx6r+TZRBx3NGXWmL/YvBaCPA4E32vSSMSMdFd2RQNs0QpFwFFo6WOgfHN/bIvgQwEB4Fid8c1T7lPNng+NVrReerv9zURNDXCS67ZSF9LfIXCCX781quE9EaaUX+o+wOLuGllTfKls8Ahjwm1mii/aCqqabo8ewu0LGtm97+1rx3Ufmw902kqNG+ymlLTKy323ikJGzxmjSr5skhIGt3hEH+hTqwt0cUxFbCyWYvVd3PysLbak1HOWEJTLwz8pgBb8MG9tH1dUtUZNYIPIfJ75Np3wY5zmAH4fi8s7iWB3gWICNzqzXTEg4NBhtAIVGKQqwkwCdWo1uxuZR+oqE7sutgp4kyBxe2PqwoCipquNTFlLUQmlDL6U3OjseI62nW6pvgQyF/8h7kwGRPy20nbZgYPr823vGnMbsz6xJLRPEQMIjU+bezxzbi0FmGe1YE5nm7uhpGCtkp2qlINA6oFaeYsInSzxRwsXgdtrFjo1RDh53cfbs7uJIbnc8hvf4yJb4WzDvNiEdwfzFGP47oEUy4U4MBQpENsnjdepfynEXFpLTmYHncBm/HPlYUL7uR9EOtBCDMofjP1YQrl0pKga3Q8EIjpdWQV+VGJJBsCGD826mabsLovti2lp6L/01PuVqzvU+XDQtmICd3dpVROWF/W8ObhDS1nlBU6Z4XwcuI9PETaBrxHDzR0V8vTIiKHpQTfO/1O6MdXcqQcGTq5O891mPdeWRbMTQBKnvpdluvOtKwH2vmcnt4oEGaeHjw/7efgqnnECKrD7jJbtE1mHdta6KJNxEIa8MxsIr5tzYziMyRJyG4bvztty7pAdLRiJRBFBGS7cVat9rS8hbzybmzRFWfVsFdMr9dMrpPmTkx0f/cuUIkDBnsCDHG1w8+zFB9ryZKxv6QojQ=';const _IH='9b001380a96d2d2ddd7c59a58b74bdf367f3e60152703ff499e3574a1ff1b625';let _src;

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
