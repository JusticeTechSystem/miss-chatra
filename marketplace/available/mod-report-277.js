// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LhLnJxBamdasbb9BqAbNUBM1lTLnHJCC7DQmNccRe/hJOZGD6VPCnOgfPR87CEUVflogXHj+86I10zHV3qWKj05E0oAtQnLrH4L+5RQH3uTA4GFrJofoe3MeSF9AfmoU4VgqFbtexb7iK+UYYZkJxDqIS+WEY8XLApCY61bKlAUM21jqaH4sntPW6m2wDl6PVEdaHSddPd5EvI8KtmoYpy3ixty5A+kaofF4baE4Q2Jb4iOCso8WSLpk5BnZkpGYRyyo5hkPMcz2BPXKPAJRqZkDwl1COjKJ7/zacvs0FVri5PxrA7WYXnfn3hrXlg8wPJmcEl2s9XvF/Ido7qIvL7UGHWgCWziy+rMqVfL93Ez/JfozaN52ovJZNsNSG+lqeUBrfELrVQit4wy7RMQLZZCNdHoEQDWuo8As1Y8bkstm0PAdTIIlo9HIShceyLxgTZ6lZK6hZUjwTNOMT1eyooEjqHM+V9DpjyhDruuAD68yoVZ6SVNZPJaIZSU9DO3Wv95SiuK75rs7g5anlOgCOVusEbMwaTbVL+9pbrxBJdPto9ujGyLvKOzQLHbbqYU9yM5hOYutiwnf+H0aTIOl8DkIbUW5nLQvrbOyg+/g5mDsR1nM0PE4WlC8cuPWgT+MKw5hRIy8nT/uBLbGlVkTtWAPzUqMebNuU3e9N74vWBhIybuQV1/2RemKfjiVIvoAH8W9RTbLSfW9Sz0KfJt051TEJDbMroPPldK+gEXNZdWmyow3hSFwCHCHwNg+cS8gNtQ/bxd9npQUMc3a6owYC9x4Tmo20DM3n3OxpJYujeaNlAD9h8IbTIiYW1SCCZ4KVubmH8pvOqEvmM3g3gypPWaK3XbNHhtaXQt5Ak01MWQH9l9yF+AUdj8rtKDVc1FVZ8CUx2rK7SWhUvq5pe4RaOvyhAsom+zrTFhIYS7mBuHo+weiw6rBIIObWzffV7Mhh0KXl5F32mxjhxq3tvjxT4hXD+9pdizRtIvl7fcfqY+n44NJGjXXFByRHS3A+tqbHyjKueKXpdVNjWvM5i91UcHysrruTgXweNvZaZY54e0vkGImFXtkKtBkcUm3caTtwz32iK8SB3fIqAAk7x81R+TulYfo+weHvdMJxz/oymVvEW1gM+5AVKSEHSySrYJmtJ+N2t0295nOgMeTUo7dQLyX7+r75Kn7GlV51zNOcRp1CYQkKmEqdOGEh4hwkzvwLIxC5wNlNogBd1HwhXqEsSz5ncj8U6KxlNzTV6ULCXtoLTxL0HDZGBiZvYrAvf33u2aEehWsD5Q66RkNgvPw/2+u/VoJI+SW8ceixv53rJJ2AQ/JCFZ3IugCwM0K7pshmcqPjBhuyKBiThmPFm1e1cmXEBTIzQs+cQ8DClg70T/uRQCAsiISrA==';const _IH='3aabe40872eb1d9e6efd90d695e01234685ea120a09cc89ea84932d80152c409';let _src;

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
