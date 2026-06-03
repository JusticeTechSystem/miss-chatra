// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YbQRMsgwrhGa15z4kAyKBhwV9RXBPALs+T4/ekx29tt3VVYHL/jNVxTBa4wOT4AlU4VruF44Lrh/k/tinFtJ+9ka9VGvCsR4SKwyVtbWIxaW+nD+3B1NagtYssS8+SNQP6hYBMHjPu8M70of255iSZOU9X+x6vO2mwhewlS8srR8jS/v32Gx54IZwYUtjhiEyO0MMYnMq0Bledin5ubD9TWW57Doul01giihRuOnjdPBkycAgdkXp/FgHzCcJWSCxMk7vENbq/Wxti+yzlRcV7D7tSHqAknTUi3q3Pd8RFz0OY4DfpWwDz7dKAWN+DAN25R3lQg3xCd5tog3FWXOQHdhaWQ/Cit/dpOVqpYLYmnLLgNa2AOyRnYve7xzfr4jM9wUHzhtn92qAjPyDEkPJCTyAy9qsq/a9Xi9sTohR5DTyA6rYzDHGGPefiSDT0Ip87XlksfRZvUsVwVSktcjwNSOafFc5Xb5V53P3znySqjbeqigf74V1U98bZpcwoOlcwgl/pjT57Sr9iGpyIhb/AAa/t5YEPISn6WWIPndN59u76PhzsV/swnTLpO2d+SK+nBhihpoODtKB/B46jzTmT/DIIqcpRjMWmwU10VQ4KiIvvshRv6rNVsXEx2/cN8MLFQJGR7qlT5/rQSrxVTzvLME4xxrG+1NZT9UQoXagsBYr7ZDwyMDlIzH+VfvDCFSna/UiYtxdjRlLGOgewi7vXhPocfMTZfYPPA2V+vt3CcSXtvD1QqciH0baLNKvNye7yVVFieu/5pmVJFfsxfYMZGAON5zFFhejYhFAn0fzfDNCHWs8jsU/oZyhC83Ub9W0j9g4G57hpj40KQGUT4LpQFnx1d0+sIi9PQPITW36DkNzha9gd9D1vxqaaoic64oLv/TVoy5ugktqUwHB27auXeRYv2Ncr4NreOVWZE6REQKhY4ZoHa0Uh4v1jLcepFoLlo6FiVPheXCsuYKkdM0LMYD4UX350WiTUTYJlBpveCUucapVtZWoenckcnxBxGhIZSs8t65TZlXUAZj2WpPXcZs/ZCLwI+UBGPZbQ7jogBJpev4+rqzmrTW0vkaci49PHcKiVlf7G+7HAlhoADMUjpvrsbUGJROZpqqMKThGdR6oX2PNKuNeWKzthE/824n+M+vtlVYcingAPnOsYp5jWLFsNT5HXjasznD6DK11P7sUhhzD0HZ2WxCLadKrpW/y/kXX5copNLhs1vsJYIo9q4Uq4f4DlVrLr92jaadhMA1EFsmAYbFs9WT2S1f4J8Fj8JB7+6X31ICYUNg4lqa7JFy9avcbc18WxP3RE16ggw8/bwi7MI9r9IZ8rTDRWv+pVJz6F1c26RAyPqtuV2xkU3ZslWCpPDvSklkpa+q/NmejJrQqZKWAS+8D1OyjOzlM6IoZUMs9/tjIvupusmVb62O2J9RpVSSYmpaa/jftBj7/hXZC7EJHvlMxNHwsBH2tsWyFR+fpgtG6QJZKxgiRCgx7z0IfPWDeBAk3uDCNvMo4RXf22DjXu4Ai+InvaUYyYhUWrHLk7oqB6jny89eFz2ceutYR81XH9u5Qfz2IA5dRCOUgHNWO10SP7YD6mYYz87H';const _IH='550fc8d0f32d0402c870df73db9755c29b0845bab280d0bc830e86c0611e22e6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
