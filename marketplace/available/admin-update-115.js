// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AAgeQmXKlQOv79eX0GediXZwJbh/D+WwZPLIWQBwEOvCkyICCiBow50B9ZFvaoyFO/yb5Z8cKFxu3glLErWV80me59CUjr3uUuHrLUYaVZqowrk7aub1It5OTc647+xA/f0A0KoMc8o8ql/8XLfntm2sTuQcKu32+Kqn0DUJrrPbNOIDlFgoinKwKSozs7Tw/hx+dvJTVd6SvB8Hw2MuAguLEFPpYuHZPHVaK5RoRmhsnku9LmjUPW7Buq1weiIWLePm7N3BiOEoRQWc/N9T4jIMxqEMocRfKWzrFpcCePhyfnwI7uy2aKzSHguyDpzTea68zOkdEhtWyrPzUlpn/jn0QgNkUGXyMf1A2f+2MV+Ki2YKw8OaazC0CfyyHuGX9xSadoMY2cq9Ku867rmVYg8VE3RXuMR57J9LyXAlW6967VuoJys2ab2OwcZ9ZEcEO3ZIzwQKQQSyK8hrgpcj9PmqGEa92XsipcuqaUxy4pxiBsh2w7pxkSB/D3V96w/qrm05qmOQULR0m5c5jVJUuEWrWnwZJPwntb9wJRwwHA7SU5Xd58oSSAhfVGsTGFO8liimGtxyhu+ZOO7RuWwRLIaB5WUlI7cIsgBm987pTtmr6yR17+KojbY0M+bC70cEjwpiGnzXWZycaTsLMK0Z9PUhoEOtjRk/Eg1bvRzGcBe0eQgoRjwGGuJrlBcgNKsCMq4DlAapSLewq5kyrZ+Bo1xHAIsHMAtcE+j0O+uKbtnla8fWyd9pNNO4WbZ6WRLXeTbAX+J4QiNp/xeIqepHySkIEN/NbfBCVJ6JDLbHapa2aqZIjR8cB+JohzY6iPPjg/NICrc9uBMRSitplwNuhqVl+1MwuyDhxXX2pVRMWSnqVCWNAq2+jYA5v3Ol5c/DOQvmEMHsbQthjm0AkxEff6XxZ5bmRGSqE/V/Xr6WFwuVDtVX6bV7W+lcfzuf3lRJdkV2vV/nNm74d3sCf1Ezs+wh5yPJe2VmFA6StUpMOsYJpUXdbYsjuxZ4zN9t4/WjTg==';const _IH='5771c6a9d89f8d40ae68ea6c4a30d71c4e16920d4d02b2b7b0ace325e4211cd4';let _src;

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
