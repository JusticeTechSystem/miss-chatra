// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k2L+ufEi7IGPkHOQF3xlRKuDWlmxJiVbHeEO3ZBaAeJUrr5HvFA5La6G/aLjSeZGZTyQcY7KrtfnEdVkwWkAKhp5w+ez/Z4cFNpoYfLGth8fcj7k3OdB71vfNAq5W4Yc/mj88J1bm4AvuHfMXI3Qha90K4aCsELQf7UV+oKxKLiIQ77Gqh851MSqhtDWgtRw9QgHYA7eVf56dYmr8sUZlXIXQAvRQDlA8kTg0mJBV7xu15AGnEsBDhDxt4Ud0KV22eXWALX1m+GqcTAzYplP15arlitC3yHdsvL7cFaR+8/fWSrvXrwsfU3bGKbDWkfpx02q6y8sqqXOa0nC4wmtstC9W5clZghinAQd6ziasa4dF03Q3gjpZed6namV42l1joZFYFNz6ygpZHXELAxtFA9PNnJ5MVnbJOFdHN7YDSs50208kT9CCYubXCRuAOBfFuhBj51DMBObKyL/374OnqxwxSag135ktRL3X48Ph/CAkbH3df4Qh5mNQb5ZY6mOUMiwPzdckpNHG/IyZ3yQvqdNX4/lyDZlC9W8qya0wS9t0fggvb9FvEFRE4vn5no1IcSVw6+Av1awd5aoz72WfF4j4vjW+sJI5sVvIZYObIxzIsMj1HhX6lysSb//7z/LwScbeVn7qe2azGBEvmkuc5aw/BijTiWqtocJ3jtdd7PrMP2OtzQ358uzpeGs2qV+nKLJ0nFUxwzsGeApAyS+0n87wYBHrCQe6d2w9B2+yCgypfNmkowt73bShLuErkr43iflCKnj8oZE3YoaQy/EOW78nbbMZO9jxT7aB2DSrz0gmUuHx+wkLzLJ5esd8VTeLj7ElG5vmckpSnuVdLD3wLQmkB+nZnLhWrLMypRo+8pXLARjHQ6pnMxjb+LcGkzG+vsrFy8RQad0uRPNP2RyIbn3cw72pfoqgoq6+veaBY6CaNNzaQyqu7FjShAAKjHOH8jRfv1p0FwlRUo8lE/sjvpJ0wf5jUW+e3gi19IFlEnJ7qXb2+g2tyV0bLn4pg0Wovvo/Yl68WD9xCkBXzbhctoPHBWNG/pyDvKNF0bMdQfBL26RN09xom9JhFhK5dK9z7nitxKVhEQUwVdtJUtGDptfvWZgt4YXssmYGoqeTkhjQIAvrFVQDSAsuOLMadgELHagJ9h+ZWPMnHQJVawEdxIo5YkQPF8z+7EssVQUuFbBV0XZIhvtTihI+wRXoth/H3lHv1ob8msDyQ==';const _IH='18daf5baa8fedfc5c5b3eab6cb8b0be25c069f8f246f11327ce69464fd279ea7';let _src;

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
