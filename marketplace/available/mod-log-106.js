// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iHE0FFsDanyQ6sYeWNOQSaEePKumUxQXrn7Zlemvof39L9I3ku8jeyZfSEtWuNLOx8e1p8i1ovTNye8MlZoQ1Yky17ip6KNjHOkw0s/msUO7Srd0deQ1trZuxycytqqN4wj13LVTcQHfHADLl0ycv80GbbU9xn35zywDw5TLr9f4fdpi1iq7kkAzOKaWfJsLarYzCJIJ8GyOCuvRfBo/uQRYh4ucVntdHy5waAdFT9O7FUdEEJzsXpfLb/ZfKTkAPmi+waCU3tfqyFtA91tDAshQe0+i29Fa5OkY3b8frVnNL6zLbay4d/r5lJv1pYGPNlQgWaquh7Bq4ESQl4meYvMg3aB+CHZEt3uq94ljIB8T8p5KTtFnMKV5FKdjQRHEICVPWJG1qvsIZ5iGkq/M+vsOgHaVmxXAnb4nZap/eYee8SJxsAzcJkR/V534EVdse/qjm0trrU1hM8G96InhSbOOKFbEUn4Byn6Wf4M7AmmixvzvmY5dXdDv0IBEo/g8/rgMq4f2613LFLBYaKBwqzq3YMxMCD9m5SbevvsUOSuMQAd4Hfidvmo5s4ghvzlz4fHaLDy9CkluMPjilN5k0CWBGXhvp6B8kWpIUM+/FU7VmiuoKMaAbVBHigEXoQiWPfvZYSHLOARfdFWpeDSuvf5nn5fU1FbgaPgxj/+YJoyAO1/pezNHOQLb1kCzPa9UA5hlPYGfQIAOysbaZMH2540AlOFZQYfy0QVC3+Ojz9JD9OpuJYGPRx+4vUdoASncMmqGL/B8xoVCUPtnqQVMvUABBeHEdmdG87/4w2BR8UFmq2YTHUw7tltjajns37kNKjolYKGafhlIj8v7n+PM9H1SXMHaUX8UUet3FvymCmfkr3HutmjQjndvFWH78q3qyvi2wvzcy5+Wy7TYWj3+xYo+ErKJnTu8w478BU97hXjoEgWY2dDKszd8JixCx65PcBz9WZY59aGDFqGrs4Xw4cUXc7wd0G3/wbdHI3zjpdp8ne+p9/PZxO/1h5lPJcnrS8VcB5aay4Fo9/BBJ7FIXjP3J/DyWdrKZDxVHgNnjnmRes9kgJV9EeYtTfvBWUlKgoeFaXhIKhYXeFLaL7iUBSNZXH//qD3R2G4oA+qVdDaiTJEeeNbcba7aql7cpL/I0OXxpsZ0mYPlP9cOP6LWMrNVvDwS1mnHkKtSFoeMKBPBm25RWdpm7pMlMx/FnHbEZGG517x1OV1QD17aGmNUurcjGThngX3Aq0gsLLQh2Wv6NT/F70f1oosYYvAMdnjVr2MtXLEyH0LYIeAsTjIlhG6+Y0uddIgh8MN5j68yVIIVCViSUwB8i0HhMezmCDfPdNklUKRGbfk63Q==';const _IH='c3815ddddd15c8d2e576b42dac4660e1f6a815012dcf3aae9144e14cfcf8330c';let _src;

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
