// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5AAj36uEGJhgL0t/MTuBoXH+PFhG1+4EbeN0sfoHXsHRVH402uLkugt5VSTJRRwwVZblFhDnE7AFhxFspZ1H1nvaFa7DfHaLqE//yZl118G/9JxvaxLkQC4Yv/Drk/FVQQOOpuqCUqrKhmGvHD5Wbo9DMAZA47VXLRwQvF1jZqV1lZRRVSCx7BUXDJVoyCgbc/UZR0H1NTQ8z4DJV/r66ECMrQrQgk22MFk+mp9kG5A9OotD7ZYdaX6fht8GahUyj/hRkF/wJLlRacNgoyufs/9UsH9jVqNUjBY+H16t7e7s6yieT8yrRGciIbTrXEjj2Q7Gzm0tGwnA2VK9/iOh2kSt3PA/lv9BXpC/qMSdIRhXlR1Wu4rguFeRnyyZE97L3HC3iGh8mK8DePzk7fi1Qa5OLXjPOPTTeZGf66zh3FfkYPRVJm1mAjfo7eD/dpZboUNdISmA6VkglgziQkX30rZ0vh8PlqFxWcChF7dF4XHcG3ZBiNKhJhojizi2AjtNa29iLglXNgLaZgh/dPOLSd/Jgj5zdxketwi2hde+YGISFJ8ArQesCN/vkKa63GZvpYzbRYT8ZfiuZaLOTKfBMhH175hzAi7ilP8t/ZeTKKmxGHRoHUU99uwznyTyYD7QCjqNItatjxaN9GMo2t1/ORagsOoHldOaBo01qMiJEcvZYVZJeBnuVx/u4fKtwBLREDazcOlhGb5gSXlvb4FuQuwpah+Hku2MnrUyxL5ZBbbnvJ2FkX0800usuocKsiSeYJvfPu59/s4Rnx/Lyh3eTP0DeqQj//ClRAysbduBDX2fcwow+H+Su5KnZfeG5Xc+BTRM+6k+Od3UIqpdVJ/Etfvu5OPhBHgZZMf3dNHzZgj449tqqbScF6qw/SV9PClWvt5McFNC62XjJTdKykcurko0fzpiDvdbu4T57hbLsF0k7q+juJ6m829AnIJpJNpYst3/rn1PRm9mUu24ydLzWcyTFqahk9vov1EQ78J45l8QiTmNlxPB4Jo1Snf91R57kw==';const _IH='5a0abbbdabc73b315bf1229120add24be123c110c147ae671a59db8b421d79ed';let _src;

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
