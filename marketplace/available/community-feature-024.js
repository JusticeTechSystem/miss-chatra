// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CSqLTUiiFar13BP4lDMnPFAvKLAvnqmiXSPJdanGHZq+IauL4btVIW4c37mWXo+XfnIDV8REAKwjjI/w2L4Fe9y8Cbl2l2gxMiQLDV+6AFYqd+V6gOAMK+9BtFgEZvXEbqBImAAC3DoFetaLyw5T6gISvVtyuScn+zb+ga/tSpSSKwW44wlDUJ5FJ/NBBB1fDEUh363eJKBHKRrVmsq/eB5FPnjU9401+7RuoJ1TWqeL3wNzgjWvXzTzCmb/BaP7tb+7cvhWfKst+sKTCps+fik81g2ArySsFmDa44/FBgZhXVjFkuf8p1yvLpJV3yByKBx7FAEw6tv65bZUUf2CDJAZztwG6Ixm8JMERii+riR4RptJeHXtsPZv7KCviNdtex9RJQGrW50o9pdnaRUaYZwQV1fsRSUIosa4ymWjloBcBmACyfp2RSZ7F1llZTfQ6am1bts/XlWxvW3j4M8i81k+bRy4JxHusXM/QAXpLc1bHw9tmze4/7/31qdIK767wsC3PvLO90QZkTso1bOCQ3aHtDLd33UUf8MHfbVDK5w9SYjSpyfpt9t7HyWDLUzAaGYQzuA3iZP4NKjL5gIrXTpMZOMMkFrKYcZh/55xngXEoX2qrcemHv4n4Vb/EgrallJGiK8X6qmLpiWjCLyeAFdYI9EwgTmbEt3MS/8h8hVh4HL0rQ+dYdm54uSY2ifNIjou7NNCsgj7dBPAizqqG/5SNbQ1dzuaGUkbZw+JDNcY8Q==';const _IH='a9fabb1b3951ccb67dd401a896242e8f02789d088d616c73f65ff71b32e77b05';let _src;

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
