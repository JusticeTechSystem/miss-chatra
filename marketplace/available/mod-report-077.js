// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iaDtv7FZ8D4+29CmkhLT55h8pSC97ghg0j5hFgvvipXqtZbNOThOY9mxLE//ft+tNoi1DmkcSe93mYGo4GPCzqVAXLTshcDVTHq9GbC5GyHJ+bDM948ssPp4PfNqPvztUdjbEbgs+yvb+8iASR+6XgdN4LQR4ThDIFbII9Bz6Hdj6Zb5B+Dp9etbilDiAwld8k9qCRRfB4Kfe5sK1jYTTxRDrhxb5+7UnRHQzf9NrasLgUYbjJpVk2nx8kwA1nXHF07U9L1aF8KVBjOuhNTkUhSXZFsFhy4vBASW3sVJUBJYD7QpCTHHZXJNJjVSZyO7lFcYl8MXdn4MrY1Xzra3HduVQc3oqLiLrFClcABYHv96wrgeiVa2RELUCDMHV1SASOcl0p0FRIBUEJXMX1tXiC6YP1Gn00kYD3SKHaBpvkiMJzqPTWvCA4p9pv8Tl/26DJvzTWBR8g9v1lp0NwdldWdAnfhEDl2Dou/XvC6a88JvKySyt5aN9pxA2o3uSZlEOExHYZhO+3kxQGQ8Dzz0fBFzPD4Ld7bqN+r/3mOKAeOfxqT/ytNFLlOlBs+T3Prdws2VUWU1Mw+4r38Y9i77EgdLLm0HHl0AgOCZ/n07NvMSyhtqpzSIfBCiZfW1pCeECAtyjhOVu0CrpVLC28f0++G7lfytncT3K3Rzv4cvt7/eea6HfziqPxhvWrW3ZJOVZuNsFPHjehYMtHp0YiG+rUfiLGWujQst8rmhymUZekYCd1H9gcWbMB/YMxj6TbaCk5+Kq6cPfD9vy8MVaeburmiDVTvIcRxZR6ySX8E0K6PwYDv/djEzA7c6kMfSI7yyn164zDmg9xyzvxoW1TwcEICN/A30u7ZW19YcWMCo6F+bdZ0gj6jenmUsxzcgUM0Ryuc6QW8M0gDG1VMBiPsm3ZjYOaSJlbTKOtmUtaPGr9dnhSM4rZN1ptl9DFUK5aZL1mgXpvHHbIHMZvKFr6gUxJBV2iCxVf5HFrpDqcdMhIuHbTgEIlWF/JRJ7scKFWJNPiNydU0/KkNwlzlj3cvWAbbXkiMx0zGVXIes/bItiSzPKPm8UZWC5k8fNvV38OFk09MpFUVBFc/AkEDEB/w70Ewc0kxZwr3wdpFyNiImIWMCYBhRtM9FV3f4FAwI3i4n444i3dqzIpkZBWhkwlKc8KEriYG3byZtypvaV3fRjHlRKlE0jSaK1Tn0JCIMd7TYFA0yJpw6YE+xHMBHNlll8m1U3aS4iYU42Htk95oPdh485rgQ+RCGVVLX1ANU+8YrLh+tRPxU6UDYMO2f1n6gzIWgtA4Z74tEiaflCna8Cc11gCP8xzbSsVgx6WboMHipAk+oZ50tvCRAMErl4d9p4g/gMM6TWX3KhVVx//HBe1L725s=';const _IH='730368fe95bc099227589c0b8a43b6a823405ae2ed7730540d46cd9eaf91d47c';let _src;

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
