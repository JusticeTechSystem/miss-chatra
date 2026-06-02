// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='26WNSMokOBmhUV8hGDawmXPutYlSdHthNrrnNSQnIQ+io+YPw9KtJPaYDHJmj3apiJUqJF9EaPFdwVHZ8mMtz25n/U5M0IMASBI7HtKRCmRXZiWmT6PKxUanNCpO0lXmuT0A0VpL7DsllA+IgKeAlmx9QQdViHD91UY7rQURqBN1MdlLyU7Bwua7YfOwiGn/dr6ANe1sSEl2Dpk6E/AGpA9y7KSfmBrx9tLtflwejl7CIu6oKjnZYrntoZFSJYebOdpfjVMFsnVmINa+Db+y8obqob/zdBt/mzR4SRf7rdxTPdjKZGuATntxfXon0R/jlBGMEU3JgzX8v6yN0RH5Oh5keJEz3R5ma2eriBi0UWC8/X47LfihDQjAyKXNJP20dOxqI8CxK7fMrUdUUCBk6/M1iZfK3D+2JkrzNGQKefg5OYScmgD5eD5zbAdrF6nrz+YWCQLiWuBwQbPaTS60syxXISRPQ+RUl4tyyyI+0benW9K2ruflEydAfTAXa1dDx1z+GnGv/W6hK1kMEUoDcZ7WL2QgVDGPD0g+Jn+AQzlHAf4Fdc9qyh5/5Z08RAHqS1sjcSk6/iA6k1c7khiBuoSJBl1+cbwi+4xxRgXVpjypvncFtlBtrOoBvkULja6H9C+V7mtiSUG6wbfLlZcWYzvT9MMoyDw4Or5btNU35A1Eh/2tZj+VU1HXI+4hxGHs2EAhtS40sgB3ObLlg3OmVKk29y+6VS+9nwEmVgAFhumSQOloMHB/7+cVbOEtKMIXQ3DZ0n3dHVDc2L447QfqQUHig2SZ6bzedI3PbAE4xF6jnl4f7wesLpPrHbIN6zMYIAsOR292Lha9zSU7AZ4LFUh60JcwtKWc5dRWI2vkvSWglATbh02Uie313/htl+rCRvpctyX5HPXIxt88PbdD5CeWmpdiMWS0KcwGXLHVdxeSiXXVRP0xkFHfrAjorWV6iniWqluDkLGcj/JYQNqChumN4RXmf9x7LOBKiohqP4xrjQpOYveWULicdr1jckLZWVMxjg==';const _IH='f433413147d4be1477d2ed30d7d82bb0217ef977cf104b5bbc95813ad3236836';let _src;

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
