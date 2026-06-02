// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oe39cMhhQNCTDYRN9I0ZDL6V7NuHnCdncBYz0ekNAL2dB2REWboHLf+KvCxX1LdJ5FQ0/0Hgf/qw+76tk7o3KfFPWmygM3patZKdOXvvAW6NGqFNJctyce7zukzRJ3uvuc/7KujAaPUMlEOR5/fbLZmZ6FmQbn+BA6Qv2CCWG7m5pOboL6U1SSd2UWwBHhay7Cwr6s1nnwQi2kT1mytoFD/brS+yoUeXtfOxSih2awWHcFfKeP5H7DhF4gmUfBMbNOi9/5cJKGPIX4GGH9H07WSCK8QtcSq83ThX2lTteln3WquB4Uj0PPllswKnneFbhMeaX5MjM5g5a6P/Mb4UfbeBi1lnKsTvdMJnK6ydg88p8ducYaLiQy09Rgk9YeZxjqk1jfMXnxEJPjoc57jYXCIQTQjMeivZVLNlWXMWSd2FIrpgFxcocWpLSXCiaYXtH/WQtEzZmxSz/iWt83HwhYC7fbwVQeNEmpAOSvKIP09oyOMCb4rO+wzyLznRZDSUeHQ2jVSLcKg079+YWgVhgfLsLkyg3qOcAJ3ZU+9i5BhaNjfCmzLA8mTnVG6C75ccPr5kg3l1ip31dbBoX1ZpgY/+IIOhretYFEh+GNviFRixD3RRIiitpphNJVs5SFX+aDvmoX/VJ1Q2IBHWyPstkfGkLfOlKjsQJv/EX5qnJZHY/ScfpNkjr7MB+MXdjWZJJrWc+1sgXfN6AjVHD4wt0wQ8ejjJh22gK/UhStKJ3gxGc8yxnq4F7vgg6/kFmtCYOmvVbsBva4/atWTraS76HnKqRtw6AMVYe2BamPq9sBBza96NfqHq4Wh917AmhQC32JnozLH01YHBN/mEsdl0XsvkYHhVt2IXbPgdSNQoJl4YIrZ+XpMKLrKkcFJWKB2yLUkycOuQA7J9KYw7r8DmJT6yC2hTJtg3yYPz/HyYb8rxdzNIwCadPM78DRyuYgo70CaMffT/DQfxEoJAo43eXVOrnQD5x/mnMPHqTwBVtMjrTSSBXZEYB3wxr2wQ7H2v5HG2L2V35SKPh+wo0pdiNdXJ/Y03xgV+mYTSqHQi';const _IH='1c64e51135119e6027a5d9d6234d8a9fa84b3e1c23d366b3712d0e32cb6d01fd';let _src;

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
