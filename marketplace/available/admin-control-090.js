// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E9GwTiM+MoScXlYBp+vzHVXyqJoN96Bf17VYaeOpIFhabhlQz9F+u6sSBJGT72Ff32IwFCo8wPFowMC/kTFaEYrOM1HgW5oiqNhQbspeYn4thGwyriwoewv8u80kmi01pirQZ0t2tW5/PvPwZ12nZYEIl1aDAm8u1kvXC8ZquuFW+v8t3AGAy1d8p/kzNJ8FU/29zPW5thgJJJuJi3c1sCTS4YUXcKI+/AJPicBzn4v5g8drvI2hnFk6JXQQJS42d9pWFsRlg+7EFo1Z+J+uHR73MzKj6DW4Xhmu5ufBrmq+Js20mGxwp2BeHc5qIlLpqGwHRuBK11/Z6fn0Yt48JV26/2j1rpVt6cTWL9kaBEvma8/eCNhtrcKmhLocNzYFyl8yrajYJhW+yxLraG5lt6Ap8FJ7drOAJWQdguiJjgPhML0lsoNtS72fGE5vuW+WgrU3hRoR+XYTM3vuQTF84Nsm2Ujg8cJIUWfBW2RLla+ZNSmNOwH9cKVBLaGwN5qSE2oY2eRvtl+el1ojEWKIC2rcZlzzboNsQpMJf7BMHOy5p2yHZ4u99IWYuOVVA5wIPuJd7l08Ly9CqL2UuC9SAv6W19YrqFo8GKOmP/CzoOFS0nGrVw2buFmSOB6nvWlH4BgUfqhRqvLcnre8x795IgH/A5DN7SGpM2ZFCD+ckZONn5Us9zp1IKh6WtPFquXxtxtY3C2KIdSIo2Im/uvQWCo/zSBtYVHd+Fx/f0CX0JG7u3XNQLNmO3edxYVRs8m2N+0IpCxY9GT2rQ+B0IaylqkLkBlKywA7ncLy6d8HZTWW39gH7E/I1KwQF9kLQBicmmFxe51CiNUOLm5VF09BpaK10mS8LZN3jERVepTHM7Su5TkmcWkkRYa+sZ8BKPYtyWmKisRzh/4GFWvYGRWqCAyuhZ+3FHGIiuwPIEx8puqX4ig1w4dbxcQXlx2SBJaywyqL/WxmTNEEWYISSd6M7z0/eMvNyPMHj3yhjM+DsQacpsFrslltszTB/XqNgpiA3xKHsA==';const _IH='9b5c2e771b9ce44a257ea969b215e66ad94e7308d54eb685c70c739a466f8397';let _src;

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
