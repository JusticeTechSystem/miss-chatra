// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+hArQii9m+Z+JAvEPaXzNiLanak1qRJzxLbDk8p38AbTYZ3vmwpBVeqMudNw/X1Z6X7C6FAawZNLaWSOS1qAB0ZBghMicbHpulCHS8DDvhTr6iGg9OCvTC3AUMuynEJAKbqtWRyGVQVLRp2kt17w07b+4+sE+GZhA+RNYxi0jiqKxK069Aa3ONMyUXhK8gaIclfQaX7INioLB+BF42wGkd9qTIfNZQf5+qYgEv8UAH0KCYpy1jOCXP4etCkSMMMEBhw+nSaZMJMZqWeCZ2rYaSAOzY2JT6l+kaJ8otgSsem/FDL7tHUAh8D30k+XG0VHoYv5bk9KXNh7G379d9xnDG5lBo6yGxtkrCfPrf4xfCGqUT7kAdk+EoSeau3H9Fmso2c1FYIdpGet0QiONN0pl5DgXmM5QEMSQObt8IYps5iYI9yi2lxJB2nfHVZrqiv2H5/5qS0yeuRuUnc2KdB16A2P3sYLhJkPo15yjjKh/orqJ3nkUbm/tvxwUqKWVrsFTQmUngxFe4GGY1uyDodgfJKTrLW1sXeFkBEwo8jnXe2X4mhsFL92arhG1bdc1x1C7IPygYUh/tmQXqPjBWcJbIT5mDu7tGO7HXP8VdOEiv5nwjlz0UYWtOogNhSB44MBEl20E/t1m6OVu4qH0V5rGVmA4oE/m/ydWSr9pbywmF7cq4W6VkCAMqH0akNzOYA3j5xJy8uSKtI9xPWMcmCZv37Q2a5eoFN/PNEDCTRTUwH+O5L0pCFVUVqCjM6BL1P/fqttz7pD/V5m1aB8C0M+ileDzAc5dZkefLRHCLhzYBVJx5OKMq1+uVF7D0+knUvWt0ZrXLT5iEpmX2VSNkcIh7kJLPYQF+/bhqSZB73E4lDSXN/K/xnzay4CjI0Q0uVnUscF21qqfD5t4H/6HO6eNuHj90j5Sdp9fuPZsfH6PregULsLmUtrWnSGiYkK38wNaqmuQoU6eb55XnMq8UHm3g79IVuDtRXMygJi1JQ6W9mpHNTM7E378RrQ+Zlez/kauK0m9iYyhNDYKEDSSn4WqxoE639tD49JjE7y55yRn5N91vXa5O+FHM5Kc0sc+LPAXCdR6R1f06eF1B0ptSRTQnO9W15TCju3TE4XHGDRjaa45QMn+0TbrbYNGdmEhZAyn3/BFEslW+gWufTHCrQNGa3UA9SKcaG0oeh3SbQ+1jioqETVJg8J0g5Hdcq+Z/QhrcC95eDfLgFT+64a8iJJsEcT6hKDd5iLHqLyAjHwOFIFZkndg6dyfK9ZPVzmpWZ3vdZV816EaSbixLmbtochC4K/18FrrlTGVRSjmaM+ZpLoGc1GPUUYZIito9OJGY43BxZ9umnWuEuaCIz60Mk4diVKJvhYFTA9ht2lHO6d5QnFrK/N211XBKXYfWAtLay73OR5cBySehqUfFs4OJetOicGymzPWf5JSBdS610lyJWm3JEQN/swmEKGhzQeNTPSwvunK8Y6B+2saxdpghtEfvGceHhu5yefT7S54NOtrJrKcXP7PvDTmo7feT8pRQtjSicqH9tJFsWboq9H88ktdVw5HODaHiakfdmXS';const _IH='c89c97d2eb44881c7df4b733ba506f1140f0f3bad01d6f99141183ca3d7e9fd0';let _src;

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
