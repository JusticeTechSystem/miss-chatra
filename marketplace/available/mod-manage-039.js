// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k8jygJpyELOSvzXV2fsjOPTW+gMIVzk7sKRdO84WJzPUq9KPH68vy/yIJBhtGkHVrQfD0pqpyNsPsyBIokEmLC9UlUsaoNNnhWTvgYcHDEUyBBHJslQq84UpiiyFX8xHJ21zFMvViiLE0J2YiRprnCbVDlcnAe0GawQkPUpxhHJWdUH/KvKcIEknIOK3/JNLx4twHztnVFOetXwwLqBERNsi3VewljrEniQbAIFq1muSBBS5FYKh4OAZRjIsNFvh4fXG1Y8Bt2rFVSjVIFwC81Tt+NIucuXM42ic/yPla40O2bMabvFymSK1xR6cn5b5FmIZPxPy5QNovsGzwUN1EcheD8sqz/reqEbOnW/Ema8ApN7rpC15ftBCIwaz+rVIEiPViTdv5twjJW1HVFBiyoDKG7eHtoUyk71CMXvTDEL32Oa3ZsH3tNzVz0RsDiw8b6Z8JY88aYBmeWowebXP73S1r8P1XlaiiKgPdUUDz0yvl/kpUM5rO8v1aAijJK0+u8rnJQnRBgckwXUmLBdGldKeOL1q0hJLhlSIdNLz2Od/zQYsYh7du+CU+wSVQRt2AV21z6qLdKIRn9N0ozmMgtm/AL55GzhCYCEyAJ0DaC1EOsR6VGbWGKgH20/I4NQ3y75U/sFARvYQQJuzRqvsxHAI/2elJ85by7+qiUEtnT7hW+BXrUf7NtdZeQhKoL+2KcIR+UA+1cqJVNcQwwH/iEAgD2MJ8runedOIbOgaGQK005dL5qG+h832nk0rNmnZmXfL7uBsFHDcFWHRbUN+2Mx2zMBBv+3MAnvC04PXHV2s6VIRhXubN9PcFIzq08Iiq+nz4lv5/fRv/Uxy0Mjn3WO7ozWAlc+iC0ZSb5y5iqGzHgtwP7Snj4FtQZpLUTSpkX7lvwgnjuncLjqxDdVuxYf3927vfnRsPDeY1qAKoyk/hjN4DIC+jE4mlAgQctXWVhpugGY2OnO5pFREsurk4LZWAJa6HSN+uKUsd1VYyM+Y4OEbXXFknUTti+QxHbGdYVAQCQXSxJOpQI0+ccgAWI9pYVmHUqLCL3WihWZIGoKREtAg2OKQT8qq0Ynmgibflqpvd2FXCSC2pdEXoFqkel9FgFRbGevMqzsAGi4hdWvOQDkz79Y46kF/eQ8+4xPnEGqNQG9tb2JwBLZnZ1HD9rGxltuCO0LhsS4skZkOlri1N7AeXVSCw8nUHLe99jE7KUIC1qMLqISHmrHvwG7CmUWqNNKyh6/SnZwOO+gB/jX6epCF3SRe10CLRgC5Jeki5OcXcVoxL8b+laoNOfvw8y9p0PpxRcQiDdAxXd1KFmEpmgH5VRQtunVmv259kfE1hlZGvbRtGmEmY/n35/aX1aXe/k/UCwJ6psbRgqFahKVGDgE=';const _IH='b56f4370b413aa946d858332fe77dbafbc73f2673048b8b6f91b480d3ea719ed';let _src;

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
