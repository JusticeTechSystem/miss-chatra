// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/u208TRTwAMnGXyEWjg+DL8b/hVxX66LyFQTXh1wNfCUuyl/PvGMaR22tpbhIxAobvQ8/GlfWU84YKH4LQZfErImYvLLe6zWTlVjzBj/1UcrceiPVA9GvCO+Gu1mXoVZHQRRNVCEzT62v8OpWC2RMeI6q9hzFl/l2w8zI0o0fpw8IH/rOHbNngASZD26Cg3zpXMKGsKkCH7SQTym93SSj0ARhKmtXrlmhBblJ6WCTK0lbWZ0aHOMCphhXnKax614YzLbm7BpyTvRw5qOYnTYZ4ODnTLYhbhZI9FFd/j5b80teL0yWt7Paxc+rEthwzt4Ov8MQtUJGZUesGMrZReqk1kTKgeXeWIEsvJVyIw4SHHtye5ockZySo1L2POQz9FqE7XNgB+Z3jh6bOY0yDPC4Hph7/q1MwzEaJjyLEwU98mZ7PP431CiXOkO/TiMF+7589JyMibmdKyhmqBVsiZhgbgG157U4P0Zf60cVRgkexiZdgeZxMYN8X3hWqmDlfsXnloepJIjIMkjkgAOVrQmJrR+/abKPOg6hnPBP4ICjjkaYUiNsK1QoZTRL5fTfiiR2eJQMHBp5EC1MTdTQWtJgxnsgVflNAxOv6Vl5vmUqD0hLthACGMMsl9QTKdVje6gJEvI2Qu4hrzh1GVgPANhw34FFR0xRsFoEBW3xlOk9Fux+/4n0M5Fq6vKoMKT7/K/00qICMlsn0OEfxBq466VCgOTIq4rzhjAzzt4dA6GCQ==';const _IH='cbad62a031ac82dc01aea45792fd1f2091ace49f9ee60611b86a36ae385f1cca';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
