// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0nCM8luh2Rw0vXtQ+cQv7KUkPdW7yyeE4L8Hsf/dGLnrk8dZr/rIUTGWJvhiatLURV9LmCKHLPK0lfrdWdH6OfvJTFXfZMkPIenSfq9raiYOMZJvO9Mw/pDvdLP88lwHoppaRymYKaZQTgUA66uGoyraGfi3jD+Smvisi5BjeQu4pIHO8Y0g724bMW1Il8D2uYQZbGESRnqQEW0dtBbyciP8Vwg6bQQrxYPBmPfdSvuiNtDhXe9NyL0Q7aomyVzFkFWzjEqYXfD6poX9Oa3/I7q0nWgkEbxm0IYkIK7ljLL8Um9smxneyreUvL1DErdCgQJm7MdoAsrZwvguReKTjYju0H9ucHZ6f6RYMfTZu3ljcd1XbDcdRCQzLJNdsU6xNI1barvg0yCNdpQNq7JL5xJE1QlDJbzym3V02161AT5Y0VeFxlTX9FN7ajo+4rLcM69QuBeSDLOG0Oy1PPA3nTPw0sV+4932UtCm2SGz8hrzHozKYQQFgbx53SkyN+EcqnZGkC9/qR5GZQCiuSaGnOEq1busSkrJV9ttRLHY0S5JeDwp8++4P2oSvBhOnWElfRIOerbl8Qv2u06MYXJpkm/QNC7fFEleusMeduZcTFwZdqpZqOUVQThYI5ofmPmQ0+mt52Vxhb384mzfrrW6ylmrk+9/cACp00dYCgQhCQZfPk/ZwvCH4XOeLBZNmRoFAF7xCL680xOgCfd0PBgWD1ZZaUVxG7W1zEsom2ngLIKc+Z5Xo4n++BfbTk8LMlMnTFM8pHI4x+X5sUabFRtAId+aGgNSn/xVbBs9QumZMYEF9FyIeCUB+1fjgQ8wLxJpWq/i7WrYBO2QzrMXIaUzPQXkkiEq0nqKIQm7welvVxx3YHvsXGfM9VN4mp8ftNdruhSdApNZDYEq/VX5UnieBOOS/E+rVYsuZWM07kqPOYIfHG8Qu6z99jrR7BECHjuu83kMJw1ZnYNIt3iAmh38aapy6NyAaSSBlJ6lyUQSFlySACWP0YiCtCRiCl7N6lUYxaz1jeic2XnnaEo5rO83NrPoe7rlCAw6/j+f9mVO48Wp1ZlZh3/6vWbMIAlXY3qMg64iEOUjnAdCmZSbUnfMO1S4jiKa+IZ7lYteiICYoMGoiwDN5BgRrX8i4475ykWPTYT+h3muXGHW9ZP8O0t1Il6hxUKaEg67TEhCC9jjObF3FXtl1s5Ol61aQdkNY/g+OAlWvDVSFgkufknLl8poRp6sVY+eVlzohFSW4/830AlpKd/JNmvooHsN6rLu7kjQeYfYJPOUCazAnOjq+FTsQ+/U9y+YVetSJso5Fa68jQTw+vE/iqTpK3W5KWgZ41RpHldjKLCHeTaDxexmiUe6EmlDyn8DghRu5c6DZ5UzrfOYu97Uw5FW7k=';const _IH='2d01a8b01b9a7280e97bbf693b3823b6ad433659ec518180c9a222ea4f8cf03a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
