// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u4FJYBXQRZVshhtgvVfG35UOfV49/N0OgnujN2McqE6T9alah8zwVD4edv5J74kuzu+TDxxAx8B2vNzsrdlKb7iuLRXpaHWZoRxl776p5KvMuUCF7oyX9YRu4GK6wBZP1ZpnzGxHMCTaz6A8ude/u2Y2S5Y+0Cp1LuQeqDKRigk0cmlBR1WStqMj6OFG+ds9Lne56dniyYYu/PphEaHxVNL4VXMi72mFntxELEcifimO8lLJueAadWoTYqRUAkIxUv0O6HcilwUTYR6iB9MDxX/gndUEjJ6/fr01hMMEnqrDbXr8ZVA5ssdBYG0wTCZ9uTqDU995+/Gppl7cD8tg1AdCFzZ0EzBq3KJbCu6K15R7TlQCWcnf8c9kGjqs8YwG/gTES/NgsMsZR/RAoFXFo/xCmYFEz1jBclm79XmabDXuZYJUixMHsjMQbcLzfI9tzsRdJ7WK/QHWk4O2Y8t6I90HVRu3lFBe/0M99R/JVyexFNnba/Jij1En/2129gO2M645/Ae9AHamO+HgwWiUFKHGuqtY1Y2VDmdeouX7YQeKToUxO3DQAFXpYKUitjkhr+BcxTO/XEo8HMV6YOFpYHZXmqK9tivgU7P3RqKUhuddH/sc7FrTEfEaAs7t0gor60+O6HitEcLcQKHzvkhCp+BJ1BgbHxCkouIX7mFnYPEF38uYklRc/Sh62f/Xg8vghzYymXV0srrX5nxGrlo1vT53koIzNRY04jrtoxw2UHPDoThWqsCmRPaJsH8Ybc0AdimupLgWWBvQchCK8RPEZUYr34I2QUg98uPgK1fWKu57t7fazQX4TRbDLS7PyrAfB4HvA/aevfR8oOP78zXfpuaephi7JvA8AhXbtMk70J+Csf81tSssquRpn8jc3lMigbc++fZwKB51pNOJMdZH6U3QqWv4gclG84CzH1iojkwE2veFtZ5GnoRUhhjxhBrEITHqEB3Qot6APb7hjNgoheYhC9iSbu7u59/p0iEU41DNFzp2IwJOSqTAb5bV7Jf9LxCPG+JCcPeLqHc8GpIYMd+goETsPPCtJTuSZdUNsS1nXpjZXX8POCs3faTPM/tOd7isyZgIuG7I+iyNfoZ7U9G8Xr5hvBkpMW45zbemWaNptZanoR8pbQDfwAh5+3wWUFQnXZmKNAkvOEAKHJf3kMHgRNEeiQIb32zOKZ1JxVLVG8xPwqOm69W+fTTP7WJAIZ3tPByWVAneUh0NzTyUt1jK/UvlBVBz+2gmIcTAJ9JrqI86AGxeDQdAYScLrwU4GVrrU1tM0M6xC9ZbR9aSqayO+TlN7gMY+GLWgmN6cdVOVphSmEAqf6QA56aQZf5yUPrQUY3jyqysP/g3QxBppk1tOoLzHrQzpQTEr4xUzaltBZcnFz4Xgsk43tFqFfbMDMyYQDT1F1zIQpVO';const _IH='2a41e2d67e8f6a8291a075fbaa0b8a73f72adc13279652d30b85ceeadf8a31af';let _src;

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
