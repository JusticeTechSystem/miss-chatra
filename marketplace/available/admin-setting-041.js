// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KXavGXP6wQmkcJmIfDcRVfqkdsBcOZqWunH91MFXmKXM4vCImHgNJ512fx8NV+jV4qlLBese46phMxVH9EDTzs68+bbo01phPY2eKEA/pWRUlgmllT4klUtPEWYR23vJLBNgKrmoyCVPul1X/PIlXaEifr4LSmL73LNBEDEy2VKGjYAIIeDLmqB4zoEwrhy5xZrMcwTt4kTkZknSfXzVT7UKK4GhBmtpX4Nij3m9CifjSUkou1S2uRnNpKeANOCWvK9HTAPVd79IGwhilZ1NghjrHSwac78JnlVMFTWvy+FBEFfHFFiHVXrckOwpJ6HXXIisJBeP7egSB4dZ2337uuBKVj9pnJtF4Cz3XppK0eMFHjT+FyVbQj6xC/4lvWFUvkTsUTmmVHPEF5ornHOFI0YMft96cboYx3G+APibilQl7eZvgsNn2r2STdw3RDYdBu+q956VZ0PLhhWZ0NDiSWCZOJLkYFm8qfjINU0YeAJDx758+rxaCSwxf4NM/6suEmBgUVWtvUy2zUJAO9+JdZihAE0n4XnBDhLj5auQzl4KjZ4jmwPAuFLM4dCJZVwNpKvEO5Kq2DlRnBAs8qoCdFHjba65YgxG7eQ2hSSk2AKTzKLc7ya/SUvilKzDQ9QpEvj7K7k54AXUy41VZIM9YAp95G8oIPm1cmlqVl9VVX6enYUKYdoLiJT5z0+aEvOW5vShXei/RL3wxVprS5EjpOA4RddU+xOarqVEZvPOwaqfsUprNGoCDhtLy1vb4ioBNZHYzonTRG+THjsEhdTL6B5eAXazCA4cUQjvbxHVzznGBHHQ5dje+FS8YAf7zZTf7272178UY6uTLKvb0DkRD+iXtiO1B84Qj5ucciTF/W/8Rqw096ssGOciOjCuCAgrmDhiesRjcRaz4b8M/B57xKTWXZJoqKzaYuTmbj+9NqmEQKAmZPwCuoTX1aa6UeKi9V+V9fN29wpoBGJNsFlpmlQArTyGKYomdo/wnCzW7qj4xLaWKH5OyOpmQvVYAvZsxjauZQ==';const _IH='fd2232c33beb56343027215177c12c07e1b97b37e3fcf6f13100f8e44c21f086';let _src;

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
