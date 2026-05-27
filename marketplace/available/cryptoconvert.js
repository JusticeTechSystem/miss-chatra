// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yPdTUvv7vzzwy5nZd7teh8lcNMgFaYk3tR+U4P1Y4mB23AXlTfXX3Zpl702AtfbPBdw/4ER3u2YtfIMNu01Il/blApJ6Re9fIlbqCO7InPMn7p3QPXFEwrhcbi5wbAwIDqOC3QC1rJ9LWsoehbOOryJsxdcRsAGtKRakVsvj8E1dmoZhXspJpuHbbO9YQQiYzhEK3Ex2qHX6IwdTE15rlWYJ1HU5CmvbkhM26qgLmeE9sTGyq3mP1Bv9Oh7ERN+EslmeEKLG6Xzicmzq+A1CYgf7l61AQ6N45agFpjd9Fm99EKztps574ZJlA1ulJum2ACvwZXy4L8utyYgjwcso533ijC14aXdOLEhxG724U3G7W6pD8Y/gTc5UAfpeB21fSBJ1g2Ty996xO0V02TWjGBhPWdqWsyNDdOmJLFg+WPALdQAMkBD+NWC3GKdHOHC9Y2DVG8Dj4b78PZLnhf7000kwbD67wDVOkY5F2HwZ0lfkAewI+5c/Df+5K38ko5wbPFx/zt+ZJncbju9bYKXwp/y0ObBm2LVnJL1JYXmCOk/IV4D+ofqdwLRIPR3gXBr5SCOuw6tTWKrSux+nfpxOwgky11LRdWTbhrg9vQTsXSq4VXRVWwB7Jy3jPv/tynUUXBY27ZLO6+ZZYESMtwCT2YJS1Zm0C5hZV3OmaWPskTCkxJg0HnhsGBPn+qgunNJ9ipqtgxUIH5g4pqYPxTpvqmIqYJXJWWUf69irQzVtYgRtEE5CGCrMC/Ysrtl+okxbFKgh8q2h5mmdhcY2JTqVowIza4BMneXpot/yaCU9Yb0cmjSioXczKVu+Lf4M5KYhbSxzj38+UyW/l7LmyLuAfQ+++8nZ/lECtSTGYMvBqhScdgvdiJOX5uX6GXRvocXkvd6liKppL/3RGjVi4nvCyDmS5eTULSoORLFts/bnwbea3j0/vMtEW5ffly1AA3x3iklIo4U/k5zkp2CrY25Nk3CPTS/73qwimds59C+yGbibdwKSaGMGRPCud3LA9UOo4huHckSJ/OSv4ss/eoulDQDsq31dyUN/d0LXu18INl9JdMkiGMV5/7bpt5vcNOa8kADRlwdrhNpr+HRJYwnwpaE5akOYG5tcaihgQUR4aZQkUJawGm4Q1BIhnGSpIK8a01zXm9iyawVmh2gQi1FG6bfWkyIJwuTKE1MIWOFkJ92heigX5qSnGOXfdZ5Luk0ja4iW66qBiGPSHw==';const _IH='d1eeb0258fb2e40fd50647d6e19d533352659ed2c3222ee47844233fe4948589';let _src;

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
