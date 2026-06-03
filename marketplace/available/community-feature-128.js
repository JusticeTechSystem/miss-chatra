// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qkRu3Toh1JjStLfEgW/Zt+IdKkibwc+O/RrYUKlbs3rsHyyr4mT/bx0xyL7SxaG3LwJG+Rq9k/2aejJe1vn292gKQs+1184tBxDbuAtHfdV84nzhLM2B6yxP4W5eUMEhp50b9ZEx0e29cHr0Ugjb2ZEoL8BDg/bsU3Ryuztd2ZVNuc3K4W7x58y5eDwRfhvKnVttodcTXykMnrKFkmyW384bogX3OLrBflLkn27xDyNqzFz8SHo7wENDa/tCqyEUsvirVWvuP602NrchHAM2NWuCHdTai+cIKPWoS5I8Ho2LbIlJiuS9+u0R5OeB3k8wT2jU9dVOE0XclLuaubgAfd0QEvGRfiDvpp7nZm2RKCx5dinlshb/TtKDHsPV1hFQVEy5lq/qOb6ZuahK3B8oC1ed1+P6aMwt8MxUWt5A2P5EorYKgu7Xj7a4+lb+rdDeii5G49w2zsUwNgqZE6UoaF6ij80PLqbzUVXF5CS7lQDfGokyQEne4pvydlPqp16rFFWvi0I7MoZJflq5co+kr9pcAse397DepA+G54oZNPJLeC5d68X0bIR88QBRsC+KnHQGFqME2Nh07C5cLoXSOZBiHdPYYF+Uw9Kwj0h89p6f9HlKMgG9XY29uFsxmud3D7uc7wK0dX5QGnRmzLlLNxu7McRK+qsZssnyAw9e88nE9k/WPVhwHKr5o7xXzBWZmm69quazszFm97rmYI4i7N7HBtc3SXYLUYjVq4E=';const _IH='c2b3be16f217e6d012d02a8453094d7e1c89b16700a8dac7a5742dfd9fe81ee5';let _src;

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
