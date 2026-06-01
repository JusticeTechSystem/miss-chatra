// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9IilcE7doJI9hGutnNaG/0w9KPVgne40qTf8fpttLJNpi60h1Ae/PLvizU3cYeAW/4spcgqzJXxIM202lCgsAfdp0Q2JZndo+87XuHZH8GsFscFm+csG83EuHToKGgmt/9h+6VZtZIVJMTuJ9m/OOeuVjzZavQZAdkGoAwGCj2YWH3bIsibfn++ydSRmPBTQpuefkP8UbgjHoaaguTJoxtHQplODKCKSwRC0UvBDOL9oo/ywrzQ6+KfAaKBgOKGEYmL+EuHnaz39UVhVVT50h4596T7yiWWzXXf4SXKPsI+Izn+ff9nXvhSn9eMc2ieeFZIPbfpUegXhG6s+kBba/4OelbFeWBzzVz1VQfmMI96jOeWt6jy5FlfjfT3xkFByDpJRw0Rvjd9vS9OyPfu1yBROa41giS2CE5pMLo//YwZz8BFkUxQf5HVDEey8yh9si2fSJeh6+BBTleA7FQgB2ZuNuKfYdx2cx8w5zanlf1G9mmeklfRwRtDl3F58q/rKmy8l8CVioVR5uHGfNDNenzO4Nal7AkkFz0mZGSkDHAWuCZvnfjWzkvmHJXMojaku3bE4a1qMBvlHmaW2IR6nip9WmCsnZ5lO18j4kQ481ZQNlQKT+w/cL3d7v2EU5mMCw5VzZ4mmvuRZ5YlZUb8f2awTmlEUuDT9lDaeXtzkPpFT5tJ0KPtxWQKxoaDc4MU8tM/10h0ZG0knEj47my7KQPNqPLdcbPR7ovQ58heqVX3c/ErjWM72S++O7sg0k+QRcNPL82dH2HWaxyTSfVLBnXAwSn0QmM4VPjqb2/5quYmX1cQCk8uqs4WM+i27QKti66kSYHDlHbQbP3V4GXl0I04MiVqTo5nPaB4amQKXQ1yjkuV1JXi44otEpRVbEBOZT60pfBUBooJOIBWAlD5OVN3fieP0O2jyxvpFpwfl1dZmc+Woz5OSLOLCyz2/cMyFCCNe37C95y+7Ul8d8uf/IKAwjQW/+P8eNyHx+NGoYtK17uv7ZqaUemeP6pCOK9LjViSB3rFSwm1Xhd2hAcg';const _IH='daebf569852a8780e8d6d919b1b06030510014c3f051bb3bac8c486e015c3711';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
