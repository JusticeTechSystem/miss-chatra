// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aw+aIFwXFTffGTUFkz/by85l2N+MLB77s4VSm2ifHzvRDL07DMud/GxvbzIXqun5bQMhal4GMajLCi6jAMTM5OwM7GmGst23zXpvuDPsxezml/0hLn+Rc+Xnss3ZxHWBiwmc6jKrrgHZT4nX0UpZol4ZglGCGiDYoGYNsLC1ud6qeTvTbULee+xX2Pb4Nbb3W04nEI+kzz3uSMf4uXBGX31P2Z3vHxd6bf3AhH1N9SdUL8/GoTdpcgifB/nH2oLLVVX1934TBDzr5CV4lXGf/ST5Fpp1xdwBGPYYiCKcs3Cj05ND2pUSM2qzfldUIMo8FyzFBjF4lb06YqYQbaeczEyABB2k4mLCmI+VSUwAMp/u/w/1/6o/NrTg5Tye32OhxU7gzL5xs+OWfKp2g48ymmyUAf5tXgtQQ+g+4L62uLFHvIDrWejbIvIl9m9dgRMn1u1gCaG7ZA0LgBCXUlqjDTuXcMIeOiFwh11ncGGeWiQKMo7dQDTMuibqxJZI5pFliV1+vQ3wXJZxtnOv6Sn6Mn3vZc30ZJ0oQkb0Lu3DxiWqyyOY7ld9gHpOFhzlaAXIYlTRfDLmgdYMPrOM77Fa9OX2b/UnndToKwkuoo9pTDBJTJCHwIKi6bf6Y5oaS4c96WjpMI9bmh/zn0tPrQ7j5D+0x0uq+JDnnUVi1g3QlZ0t+PyH6Z1LTCPtxS1Ma6sQf+ATfiV4MT6a+rGKnETc7M/qN7olhob2Qneu4DLX4wwiGA==';const _IH='30573168f806322303a3ffcfbaea1e679987205c00c9b19f009ac75ee3def7ad';let _src;

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
