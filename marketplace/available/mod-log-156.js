// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V8HXzv7MqjjUpBmqF8zgbiR3cjBgNlRSJBRypWFRsGT5l//LhIohy7Dj/mncWGwB55290woJB4mgWH8jjSa2pMvixnlicqThNA38vIgNO5nJdBHZYhplaNW272EuQqmSwuaXe0dTC0dlkhCR2MXqGxxrAZac2JRYzSwqn3zlWhL+xmmmbFmebYGECrh265Xh2vwmUeYVFFKNZUp8uJofavEYRoPBTVprkbardFUYGA98sUNeBGIycfNvtbtMN2fhjXnBR2RmPUGT62V7/V6cRieDTkRxAt2MBPnERh0qOJF85g9BFxn3ZdpqX1mLxXkAPn5eHD3MiHBZH4Ywa1S6LyXBpBSo9q7X+LnfmWkYZcXGTT+mkAi1ms9L3tKv9Qm2CdalyLDYu4UotwVtU2XPjkZ6otMYOfEvcg+xANvuAkxyFW3hLiwt5RANLWeWCH+fmqvVwTU2e4qhxZRNMpJtlwzqw2oR6QbaX6XEfnJeKC3PsPkO0UWutDbGWi8VCiRZm3D662OryHlh+W3QEt1M6Zr+SiCvG3bE26p/P3uDKa5EZLBKEELyOIYr3Tt6DgWkDmgF6edFjYI9+ZUxrvZGAnNSZnxf3BFLby9Tg6kxhFSBGUK5KzbPMHJ/YQQKizBJSGs2EYTNV8JFcgqVW4Ybx8jgyoMs/VcalqfelWFrVY+pVHGDQUjRgR0/Ej0ExJuxUKJ29QYz0fSp7Kd+mQG4uIXIHFExBlQxs4CgEX2/3jv7Ji5dIxi+PyUxG0NMiSy6IYBnMrSabtxslUkAlrawrOHZhoA5P7srSfYsvuwQ2T671JY3dZ+A1Om6lBYldVap9YnhGShzH52BCU9HjmH1moeOuw8X8hFeg9nk+omSfbgZu/mhqtFT99VngOl0RzqzcbCmZG1bciKAVuvKC/f5EcsywYrRGGtfMD9SNOVysXBr9wmYwPG2Uu8Tj6ZK0eiBQTeZ/z+ftXxfuPyKHb71JLAXOWlgHsRQN4El68RIkl/3ik46/LnyeDRndqMaQbFwpQFNeBTnDS9knD7lRo4WYiIvCQn9W51fGEwraJsGc6x/np7ATDsi+pTEJIDUFMftdv4w0yGlFLGjOzttjXqNIj8v/gwdRsuK73kZdHeL7fy613wiXRBLsD6yvnBymhQ7Bnpv+RNula2ehos22n2yx6DRk8PNErQPCVaqD4OnYW5RY2UGdXgfPMIWHWhcp2utd42GWvoIAmR7dloV8NfxZ5ehjaRTmHzOZopA0WDXgLCd7xXGdoTVICvpW4xAbq0wi2f1U2eD3SXCDfxoSrTHbNsEXYsBV3kOqIQgJd7mMhFxscqJoWchRX6Fica64WI7qTbZ6hvr2ps0+A==';const _IH='487cd2ba47c3720ceebf2d74c2d46adb54a648779b629e18ed249b8d27e8fe65';let _src;

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
