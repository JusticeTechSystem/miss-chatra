// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pwyLgK5cmb/QL2aNUUoGXRNsV/2eFI/iHFZLSfJnPd6/eodf7vlZ0+Sc0QW/KUWH8wGNF/AnqCzoyLMzYweARIfe+OeHVn1rcEz9UD7LblvdKcxoegAj2kx3CuTpq6oxG39fUOowKDgPiIQl78/JisgDoVY8xmrSS0xcRuTBlfbhYoy22DZJohTt7d1c3S2YmuMQaNYuwwsME8vE2PKnPXCONGbJxGUWp8m4tl6oxt7Htb3fa5cgrb//ryiu9mvAQGoIGz1UFqIWSp8fxATkuJU63yGk6nGXpXy168fLVGu6GPJsA1EtsaEnBv2FoBKCcWWpNZsCFIWr0HmbT0c7Vgq0dLEnTzyBqKhQvHbIe7hupniG1MSSCWQjWSyDx54omwExbHjAMoH6Ld3TgQI8T01sABdbO7no0PhM0olwcL1Vak3DxlohULzWHV1YsOtIHb1Dur2e5vm0f3lU9ch1xYZtTT2oYYCT4bFNAd7BoY9GlD8NBbptvvhmBqANkQ1U+ketv2QWMxZ8UqJjK5whdYwlS/mief8H/4BfE99ew4vWoKGkuAoxDrUDhTvBItrCGV5de9zr9PLyOyoDfS+/jH9rfk/wzzsV/riCpK9XtuZPHUkzSv4detnW1m4wNrnjkPekjtOxR9ccUTVLG3c7iAsd2v69j0AtJwCAYKRwo52aFRewhofMl7E/kvWxFCp5gHMc8oKxKGg7361s6PrfPZ4L34Jq2MPpWQK4TY0j/odOYxgJMsVRAqsi+TSZPszFeRu4EkzV3j5uG+tdg6+Gg4kbqX/uM/tfyIn2mDH2+r9DscBYtrRVW+9vSQXxSfAJQDEX2B7WVEezOJqWwb+6T0bPrbTvKHhoAOaQ/FoEurmR4xBuDY8MVuw9Lj33kWmvEnxcyjXtvnWY7CS7wLUzMNaJTE8AcYf/rBLuaZ/zEWI6RuNhUttr7KiHOINIKhh2rnLyjdhCRvSMp96OTGWG5Vt7xRVx1ayZ+cXfnG9ClJFodXpW0ser2ihjjVs+m+jxMoU3eLInQ29fDcxlpNEOcEAxEtXXlrZRt9nQvrgutXcg3+Kz2ZxT0AKeMcDAEWQsJYH0jqpS0BBT9yzBXhCZl9M55OGfIj5LMtjZcfthbJbV047Njy23HxOgzr8IxUTxgCvwUE8sEpPNcln+p7FyfCWCIHvxx1okAy3IRunqGvTGgp/DPwXyt5qQdHBx6l5eKY3ceg+szim0DnS2Z9EkS+R6cdTNwDd24/9eZiqck4sS8GCHw9INkAVqkKOPMhVPeHGqjh9IsMQaaonm04BIkwFlCUBIiGvxhAJ0+TEWeimexixQcv4YelBcjofBwwZuUg+KAry/kHn900cTRzWDlpkJR5SYnxQAAhCDTv5lgpzmxSCfLfrffJiOM95lB28PWUr9kxqGID0kpZWow8DV2gNn5ynoRV4Iley1DCbIic2Fgz2VbPEQunCb/hMprvF9DqS8G2/nvpqfeoz/rYpYhh2Fxk0F+mVRiejqRVo=';const _IH='c2d10679600d97a002f3aaa5a72129bfad27909238aabc918beb82c7e896852f';let _src;

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
