// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVzzVTM0D5drkRCSAiBFZY7WvqIlu1+uxqaGwpkRJNOmLCfzYo1TywfvrOYDnemdrAP5QXWgaAD+9AAFAZ+rrSVdp/TII/KFRC/SZDHiKmi0tzqrPWtDtr7daSHef7pn1IYyHWO/hWqHQsiW+jhxsJKiyJs/j9uDF1dG0SkRadH4E37zXrMA3p9acRbVuBd/d7vC3MsYp0xP7YRAbSYrzzS693qEYLm4YT0bGDPvL9b3dPtMZLQm6utGQLsqeYbbas5KFDwHmyvZLpq9TTaobBytFtwK0VrmLIwiUCFaKs5fYm891y7n/XZaHYe2oWU3wC0prFrtz+2fuz/FWs6iqhvuFBATY70fynOl+5kMz/+PbfO3lP1Qt9Cep3IOtIZUi/b71E036mMOV2n1r3oPDzXz8kAsoI/KfE+crZGpFLla64br1MO8t0xIYdLtA5pdPMmUlWWgmZdqHy6uB98VniUWdHPHh6Ax2jCQJHcPBLlqAWQ3kw8dSq2cFhMjq5WZKLrXxx4crrTr9sJx9K3JCbaQ5RA2J0rpacrmbUQCpq/IkcAjYBeSOoEwez/ojzQgxX6DRo1o16duBIkfhuIzdZwWTcfr92yupHlEw9dJj4BDABZP3xxZE+6tI9sZRKd13Aqk4WTF8RWaVkM/8fZlmvVJyJkVVTDelL6QFBP0x0fuGmyviIdAhXs/hpCTivntZiHZdtxBMCJUazfO6ez7WbizPr2/+zsJQo8squwmgLXcFUHch95lPhNDmYYE9H5zZxW2jkBJEz8JKvxsEU85g4TL91Tc+7B7RDEzvTLUp+eyogosTLmCkLo+Zwz5C1D3uKbIBCsSDXrPtW3HpwjiKmH9l1vpt3LGjMfZKMOWOF7vbg1d/Td0jXe48kkBNUa44ZIfnW2SnVNk2EqaFY01uG3QIUCWWT08P84yUih3kfVnYKj7jXTvXcYxyApNL1lOI8YHdRLu0xv2seBF9FqHf36wTJLxmPjEyqA4qS8J6hKobc/+g/bo4LfIKV3pl8zHlODW+kQaE809beR72VBrdhJ28oUQ==';const _IH='3ac452099f2a1c5f3465305c5b45325c0b2d1321203c828b4adef8bf4fadb25b';let _src;

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
