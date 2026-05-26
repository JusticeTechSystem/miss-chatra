// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4YWDrsWAesWXiVN1mAAfQp35qOAUTlKwECH5xd9EZhI0AatrrfD5nAOQj45jGGIUOMzY1kfdTxnZmL2goJJu7zEr+TU7zRFtB68dzoS0rWFtofo79j1FyzHLLu415d+q5YUeryk+n/MFCU4W3QZQm9u0Rm0siS7hJIqoa8r9B4DG3fFGxA3hjO4ZtWGYQIAPE1NNWnQK0F/1DRuYhoN770bBh+xd8I2+6PHzg/2W5Vq8CmCH6wZvaIds9vvOFgz7Y4F2g4+MpA7uw4t7rKyrvlg9b3SRB4XuKCIoWFbo4An/oUGwQTtpWMhI+bsNRulGhIv4SYPW1HMjhOa3iAmE9qneIOe5qJ1hZgyaxE5GK8vHoEKH2q7/T/CeXUiiVHN0lLOJ+gRn/hpV72bAqARMX/7evAGhhtN42U4imo2wmqgdCCs4/JehOgYpFNijMCy5tf1QS2AN+pLmXvbw8WZn0NtNxiz9F7rV7z0fyeI0TePZ+q4Twh2GVGGmTUxhsrAn87hw5N9PsK7WMKtU5Hqt8rr81lqzYAu+H6LzbfWE42/BnvxKuIP1NPJCl9Bh0hZ3//534BlqubhITd8zBIgrFaOfnebEp/Seo0Rm+u9o9g6T7vMeJh2bUgwqqiuQh4lP1B/kGpIQ0blYmpmEN+g6gIjrCc5HK7vgq973X2Tdtu4St2JJDazDQuvAPiyaLby596MklkgitF0WZjREDtlpWkzOYvG/mn3ZTsVoycy5dH+tIUJSHiW+5hObp3SOKl/uulUghj5GiEtWsGjHsVnKSXGO4XCTpbp3tvVlCaxbSykEJ3PyRVgLWpa+jCkgcG/BNMI/A0KVFJTg7CNK85mpIySD5lxCGR7q7nQjLmHEUjzkBv83FZQkJgRyU1nuacrZnfpo9AVDy3ARrAn8/D0lw4EY2NJ+ncAbIHDZcJ8vCoqetC1EuGSWIznwkOwykEHZmihd0w7kh1rBBf6OV7+UjWtzylog2w9QJvglJIQRM5fJ+yrtvZ/bd84cVuDes+Q3N7XUZd0hzm57B1l1ZlKMffyHSo9vkWfVVgpH8mUHKGw3mWxxFjw2ov13lwTezOcZCYe0plRzUi27r7zUSIzO/DBOTSBGrcRyPTjQp62ltm3CgIwcfcBm117k7+kRPmnRZIU1ZJdLXtfsnPz97KOqlqCyds1Vp2oixN44/z4MLrbML8RiaN9zok7ujW9Y9KDhYg6gTVVNHF3paK7xTBn1iDxStKriwE4nDlRHB8IuRbIBm1Om5hCbq80nal6rNdkAB/KbALcEDiN2wJ5a2BGl3HWSZTrVdJnvbIwXs4wjnoAOdkT5TUsxpCiC3OzCi8MobfNXJ830BLeJTG7hot3Lu0zVO092n2EYzNNu+JYVLAT0NsU=';const _IH='b01b07bc62edff8a3e5516334e04d675cc85d066494ea85294a4181b77a7748c';let _src;

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
