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
  const _b64='YMYkZv9qEeCq1qP8qTHz2r7NOyFTIDawnIpqDRErzWA4zG9rgaxZRoG4+Y7XFnGZA497jN9gnhX/zRiIYg2fBPOIFY4evann4zDgUM9eqrKDjCaKBGE+gEcs1vnP+S3YbKLFenPKPh6euInWngwOWDp24xUQEUYVjVewGx6TjVoWDfAFCxfXv67bHBrBPMG1qrmoFbEPErgnQsbWMaXJucRa7JoOxI4JYCvML0cO5E7KubWaoGfUxsYM7LsHXbSLmHSRKr4e4OowL86N5VoX1ojoBbq2HQKRJzl9ao0XdlfTfJHASReaM+lcqkT8t+vWM0kHJh7PJ5ovntn2+ISN/J9VATQrq0ItkKowflTbTjjNHfwWs6sbDYias0zmQGCVrc7et9jxKd3jOg18ZPc3HjLbKe+WJypCxr52mJuIYTOYko/cxGyqOxxtl2EaOyRFpa+An8rR1YLM/4eE/XLaNpMYWIbRrj+sErEtQc8im/q0wrnJaBDC448b/tlyaTsQb1JsJouLm5rNT0HtDHzki2vN5zLjVyC0xP0q4aripkvV41lNEoMeRhSD9iP7xv9iWD5o7lDJR5yDWqZX5PxKLWDWaYHI6TIoIpbox9dWOZQc4IWJmIXQ2vwreXszyTxk5w6gYRQXBQYWFxbTmQyKvdqJt4JtYFk+eXaqatFGRggRdIxd8zQgwvJLWLU3uPaoI0Fs/4JnrNo+8bjh523opV1ORAM3gWo1nc1nRfO8QtYr93B+GriG77m18vdb5OL2LvKWU0mWqsKLmdasHY2pQoOL6NqxSsI7KfOvI1+hYq3+rCmNMqWHoaXSooKHM6GHk9gxYCGVQSiLUUrUygGsO9edUyy9n5o5r4Js70CUrHwzsvev6gsdFuW2l5BUciS6hfkrhJA6aJjJsHNDjNmfSwS+ce9xWDC2SJL21J6KAbriGAgsD84Y4yjYFdi/t0tc//l8vBVYoxQjuiJeizPchlcHwgs4VYqS82nM/D8AH0Tk9ewUn3QOrp4JxuSH';const _IH='b1b833a2aed03006d94bf2520bc7d9eb23f798db40830b99715b00ab929dd6b3';let _src;

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
