// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HgexHU9xCcV+cly2Hmh4lVhmuSwUS72vgMtdVcU5GlrxPYRXIYFnF9anEgJKjPjfb3Db4S0Qu4kDzkaUdGlZnj3uch2NyoWvJuRC6Tcoc1HhJip8ng4DQKPLfxO8Rukw2qyX7xO1Mndrb/DF0FGDz7lLkHWiwRJ/tKg0jfMOZKQuCjhvT6thpeoaxU+ezHDnKjbXLsCPFuN+71s+cBHP0XNCbHVY70JWRXfI/ngArkNTL6a/sOSsuMAQAiOnOL7uyXVLZF5gstXt29x7uFS7tIfOKva9vreWeyIQGwdxy4/wmTzhuPa+3FduqlkdAKgaZJUvKHEh6wN+NVa76glhMHBKRr5iGLGkJraCfwe7Jif21EBESE4UtZtYP7IH5kCyjnNJUpdrvWG/UafoBKGYzv5l6Dnn7eDSPeQBFLqLdD+deMVGi8BnqUrZJ2j9/e11R1WNK4t60ClZVvNJiujuVypCmrgBbwbpJM9u07iMBB/m8NjyIcvOIiCnbL/01CAXicVA2MU4y3suSG3XTkAyeFXQhs5FQIglQZrlx/A1M9fDQHR5zH0HYbrTPCjfdHPtf0civ7MOqkUiUPxhPzcCrngV5Uj5wvg4YGT+kdz+Ehax7jKLCxIijtLXcCZg7A5ZscqN4F5DquId8cNcqUOV7rRWVEd2//FcpeC07WA1rM1DySpwfDqvsYTXitKrfenDujTk/J9+2CsJI6IrUGBAD6YiRDTjZRwb3VYwRTJAG9SbAl1Mlb/eXY/RjJRhgG/27kni3OFm0rBqQWPm+ZIieERX/YHk2LfslN+BJ6CnIS0upuhlboYXtOW4SGt7FAJ9Q25nringajaNBqkWTKbNdkNlw0eUO0FeKXCnXVDs2NOkp8PgKGUr5R2a2rvsZf7evhBJj435mbjIiUS3sc+pml7rRI/AHtUBDkxG5Sr2BxmP5uJekth7nIrUtMKpK9rBuCeSF52t6/DOVXd2xj7ZE7F1zfoKn972f4VKH/El8BQYgvyML0lhdToFHONgpa7T2pMHgtUPf4OFp3W4zqixlm/g9QODDN8RENHA1GhiUi8YDFzoaTFHirpCUaBWcfiSDP2xXw/jKhFK3hef2BcV1gpgiorAX4s6N97m/r3ohEloi5aMUSTrBnjGdZ7F7EpL7/c+1DZKSN3xrJZpliFsw2ZaccwMWMGJ31MbwTCrE/d+JNPRbBRQ0CUo9qwc/W40Pelk10fx8BciI23wEjp8LkIL35NfnN2pcQVB6//RHJorn8e3S9MBi/v74GI8HyR2YGeJnzurOHEO5N2ieWqaHHh/x6t7Hfyyhr8KM91lN4TJBKtpaEBvye6t68UCBWnK5ww0IJcJeMBGVNp44P39e3EFrWhDLFbql/k66vdD';const _IH='73277cfc55e283904a24a96715e8f29ce291cbb47b2223074abaaf2792aba4aa';let _src;

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
