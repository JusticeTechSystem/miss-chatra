// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lY3weQknFoyd2NpEvzUxjY5tgV6cxQ3aqXYhAw9SdCRmiK0E8moGsn55oAWX1vANzGb75Rh/sdrD4j92E12vY9x1AOAmrIOYIdQj5Dm1mgcxPtZg3qd5MkR6L+Tjzsd6LrLf19fhkfGH/Dfhdl5EGiNQ4pdX1iZEwYNPL3zvpxLm3m0t8TZTxI35iDgsTJv+obpvOBMT6eYB4wzpp1xqEfaPJ1B3zqGP7UBKCEZxfKeqVIILpuxxds9B5dpVM4UrJdTiFRfioldzHmJsdLaagCuUWRxKiGFRy8MtIYCytbz4zGLQ0Lj61z5TEmJ6813EEWZgsx7iof/MFSghp0SvZbD7CDQqrLxvC/z5MPGxM2WyOZv2j2q3JRHIAR8ZkNDb9so8xoql1+hq7UNu/6JQUrJspfIHgH6ldV2vGnytWotXQ1hTo11tcT5JzELS0epioirIDoeMSY5ncjmkGP/p6LFe0rIEWDKlkHrSAMSX++UJeadIwfE1Fy5cYNQ0XlMnP64/kf6o9QMs43IwjPFFJLQqg96c1q9/o5emoPPB4YepamHOJJaVDxjJ3ff6S5qjqs8TnFfA5XRjVBXlp/DQ0KV94qJwXPfI64qLmZkYJwqciLPxjUSvr7c1B56TK2RCJ0N7/Vgn9MqGf1nYar4cj3MZSs4oxpIOc0O9x5gKWMppB2ibbPcRyic4mHvKU5eXxv8cFHPrpbjvILKqIilLANsqZTvcgIJGTCBtuHKBP3jaeeJ1v52bADp/IqhpT6gltmbO48d0THZjOt/LGtNu23Z5y3X6bHa1/3GOstDv+XUqHxKpjVE/lt8q49BHpvJFnzII/QLWpRysoGXw6jTnwcEH6vkMoOrn3WhS+NRkFue+mmwn3O1dmLlkAroj79eAA/XDJ/JM4YBThMdX2uAYZ1d3qK53Du2/rMsmEnQEgbFc87fYzPYnCAnpOsP+sdRv4P1zjxjusikZ3svpYOohWeV9OHeZIWCaLtxrT6AWQYxIfb/JeOFcAKCBXzqj';const _IH='caead66f52be8acbdb6566c48f2312db4b36846d2f57cee4a03dcb2272bd7659';let _src;

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
