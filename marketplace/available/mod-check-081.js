// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='doJt1U25K0APIxg37nXgSACfF7uUE4iToIF2RVNXT94BYSI1AugrHHvmGhVDxEpZESB/fZLiA5P88RvoFWIcjAc6IyLibjrx0c89++lScp4QT5Ujio464S40hy389HtARN76oOkbH++DBFVA+atmC7ZbTNhQDc2F0m38E5pSza2EK9P5OeRm42fLQnLB6geoHSPecLd2dZD4jaIAsnkyHkEMBx030ynimXitKGmAmvr+iLi29uhsfo++LzSmr3urZG0Jvv/upSvtDEJxK39Gu61MiqgeiTF1EC5z2QM546ntAAAQXNrauLsiYqBZPI+bKHjJI1+wNvECFoaaGH3ZTygbf9eZWMuvAZT3vIMt6eofDni1F+Qrdx/1CNI48SlW9XuPqzjmxX2BkD+HVwBfUygJKQBEtG1LFLKV9SBZDP5qvD1k64Il2/x6jQyzyT+EZOkevQvE/EUX6ZjOsGBH+/Bc3t1p7izehbR1P06vKlXYgVmPMiN0YPxh9OtBVRYZUg4vGIg/M7etMPms111CQv89VJyJ0r0JQOFBhqobuTzIUXeU9rg/E/+I5AnjY9lp2+WWMaHTVx2V4WnxdOYjyEnIQh6/6ul0VBJH4Frm8lEH1/k8GFjpBWPdDGOuJ+SGKy/gOCIQSNpe0uLdhFdpESSFz6W4To1/ZaX1/PysEfTxLjaBeOV1x0WjOWPieZmQhqaPYYvBg3iUHyVYWzdaaW91laqt8mxQTSA9M5XpA4XGvL0AfWCdPH2YnZr/hjEbR5cmpXis6VUQyOz1rNi8zckrn5txu/zZn9UHzh2yq/FZE3z3ej7dp2Fhrjwn+HvtqvVaWhA7Icf5JP/Tx7rg7FqW7+hgvqSrpVByQs/juDJ2HT+sWFXDFaHoFRNFo67QagtLZ15XBvU0SE014IwMEOKQXHxXuWaLyRijdibVqojS3CeGR6rVbRRtY+qwOuof7DrcHi6OoL+UD+MAlEuKsLD+8nqKAzscnMvGz9hBrhMuwknnrlj+K2y46arj5onkMQ7CIdvzOaQpBLz59vqNqzl0Gl6qs1yjAfioi6r+fOHftyeCMSmCtU4Qt+K9Q2/yMyKnzSTRCtutTk07fEOWh+2T7gQQtSeh+0RGH/BfjT63sXP54jhAEs4EAs3M/VFTDFqzpaErd2PowLLG4VZ/zE7Cee/V3H587LYGZsSaSe099mINpjdcrQ5DSoLMOorGTIH02WMhoi0XKDHVuLReD6BMZMjZX3I+16h1O2PQL9ZLyBuBaTRNg4iVxvrrWCKZagCT1Z8rQACvr4WVYwVNJtQ+dMHFnj5ht85U/2BkxPJN2siF3SpeVo3kuux2d/fDpklU//SL1JsWS/6jrYyrymi1i+YPoqj5XQ==';const _IH='29bb9d51001715bf1a6134d161effeec8565dbb69aeedff984d226ba0e147432';let _src;

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
