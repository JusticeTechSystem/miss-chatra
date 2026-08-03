// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSSHe/pPstu57jgxb3ICNq72zouRChYtXfmjiWbqUzYnIJIvlkG0Ez6YIG5tjlfzjbWDMCSVSkCA3QDTtMrxp9ZbVtV4nVwLsRREREeayMf2sigYt4ubjJLzvukdQ2fAXKXrIQlbupRw3TKw60jnUwOk7SpAKt92rbZj4SU/2/lgfEAS7pV0BdSEq87/+q+TIYXpibRKUZcGoc8gSo9E8fYG6Wo+hBig9szMU2C4WFhQ6QvxfzQ2ClhHkvgn70dBwwvJcmrtdzZxPeDt+uu9vCLyF52DUgHAY1b0Pfj9K97SR+/S25j63oXfvwK98GNaNq5jjolKeUFCPE/SwG78hbjd2m4gpLD+IE7hq47Q7goMAsf1vrv0lfHelc4lsaV4pr99JE9QD33BsdfuOz8YUVshnszO6OreDU9mVDiDXGMXOnEpfcFNKaEDmx2C3EhbhLxd8sP+z8Lte/MywsWJEVVL2hxtZAre5fnRTNV10vXGFAgfgHQaQekg5wrCt0woyg2brt/WOLbNQa7dNF7mH1P4bkVpn0SkGxQ2XNHxjqUIq0w8Jpx85FX5wIDOhGLjE5rrnBWxCF0sY1mCdTz1FSadD+zfoIGa2xZXLaTIYtnM36WSpvDcREbTGZO5m9CWEFh/8iToZjevAAW9ynM1M8D9eeyspnNA1XJCYegINGJFMf59bYqyq6f125feU+zFmkbBP3NpIRM42QFDTAaWQb3fz5ZyX12ZhC3EyLpAZAx';const _IH='f296646afe6afe9e4e0b03ab74bf1b51ee9c0fe693651107cfc7fb138eac084d';let _src;

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
