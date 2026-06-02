// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ryb/KAmhYmUumyRQUD3yoRtgYYQK91l3GbPR6Rf5opMpbwADpAtkm+opKZnYy1tO9VWuS1t7pCFvlX/d7gK+AukLlXOaTVVGsUsUtZQSuyHF6oZCjYU44kgL7/vCnET+XWErS9JXKkeHj4xzlRYBCdSHI5IQXpu07LDgt/OrMt8+hM+BXQweJ1LiAyTXCv4LsQwCFyxJxNwN4H8Mx39Pe4GEDCsRlH/hPwySu41YEHTsW4b4qH7E2hXX4yX25NsNtSbhOw7tykhoC3rUD4sLwHUHZtYhp8am9ttI/ls2WeLn+ezwp94+x/FYT90luJlj+6qQjq1si8yuVgyf43pASihHQeZtAi6v288cpcZFait09DSNq7+9HEBH41bm9d4wrF/jtMr4+ABuhK+FA2ZwKw6ErkmVUAgnVAYMosuo6BxOURNzmOpJ1q2CKmRaNpNOQF2XXGyt3WK32mgOZTS/Ednp5y2d5KTiist8TTfp1TonK4edapmXn3iwNwfnWK+FNKorf2W73e3IFvDg8f3ffUL27qoc+dyqKzzOsrBnXaa/uEpmXj60YNjgi0q/ME8Q3oKUJFCfkGWqiLaBRe+/A/gu6e5ceY/fn7FNMBmt3GQadw50jByMOw63JYfFaaAiHxvvhXTmbZz+3qyx30oOTJWU4qLe14Lyu9rDPGyW64XgqLFCfMdByIZmg1G6LfV24LFKZXpcYG8GebNe8FSDbvKpkvqqAi4g2jBOgwfSaAgLs0dmtdNN1ZRaCskP+lzX+UCbdmd1noCUOhBkCShZrlOXdbPcUO637/83yLJdbi/MPAfRJdePESNAqKNwRqQkGqWq04ChDkl+LL0EnsYcS9vQbzvHVggOauRoqLRbpu0JHPASF6Xx0n8Ec3P6I23mSx09zi47W1Ky3Kxxpx4xozf9Zg6Qan1VbuVqVZCwo9zCZD176q6WiuC6o5hvsxxbQOCDxvheCXkvKtnxnLaBDCRm2fE7fTYlX5r0YniWnXFudra15A7qbviXgdaTk2VsvN8bq5meuk/mNpYmTHJcLN6Esfqemhz6hkRH2vy6BOF2lLTEnUTCr/96ZcBbrWaGpcZdnXcPNb7JHlVlkOULKOm0Y/FuvPAs2+i2PEFAMJ5chcP5eyvFcJwBYl9mlEB5/9lWmD6GGN0FXyiiy8rvgPZY/IlhYEdFZDhRpR/havvT8jyLVigsP8H/u97cCyS2vf91t6vVqw==';const _IH='0294e5f659a7f9db18543eb720b19cf2a3ff396f55b2b7b421445817404e0b50';let _src;

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
