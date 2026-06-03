// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='naIcJ39GzbiknjILKA9liunl78UFjG3osVEwfB9Y/auRS9R+eJciG4y++8Eo7wLrGOFFFuHYEeKFMxMT29mMqUXNvJRafDYkyKvNG/H3/eWFR6q/MW9I4NCwQdPyFBURZRB9uz+Z/t7Lb2NWoAxXh0ICZVmbQq4V92/WSW0YQEgoccw9fywUhj1XfagGMhWkZwTQYNdfq+7MHKHQOGI35p4lR8uUE4+ui6a61UR9xKS7k+wMYCxi2gNFBP9x3r/1H8YIY+ZF+IeDLQeCVRsCvaxODO/cK8XrpQFlyW7ZHNVx9VPeCie2rO2aHLu9aXb1Lwg9VWBhkWvUDz2NtOo2Hy20HiYuIPdBoBRR8cYwkLigdr8LgNKAX9VxMxgFCLu5abgt9JK2dsJO2R2pcaPVVMNFJ8vCh7a3S+IbrP7S8h8VSc2cG0vMWIHlZaWkPPq9cGQX2a3V/Kwa6feqe8lflnVRLwPpdJIHLH3paE/Xgu3fOH+eDh81qV9qYutCIwXNXxTWVvQ6IHTcckQP4yXZkT/XdNE8xq7BmdHH6BSvLllaP7Pjq6QjR0tnabeumGPawI0bR6WqgeS39mX6XQiG6MvGfvsQHitzUnqtxsszt3Inw/Os2EVJTsh7DgY6P/hnYrc+5OoIlPYO+n54kXcdgyk2HPVeA8gQsDOfoSMXwMD1oh8QXAYR1F1MzSbqmOfpXw46lcxSWO+tdSYfKi4pXZRpdRNDtOXCKhkS1+hLMjk4q+ZiXw+R21k+KNv/F6HIUoB5ATt7BJES+sxS1WUGOw01EEqzz1po3ZRb8Lk60Iu7M7NO7IAjrMRjUk9QUpIprFTeCQyx7vlSizrmZHGtgqHa+y5Q/phmJK+OnZDeyzVO3TMK04QSFJnGJoU4ysmGSfHjAiFKgH/sHw5YSm+31tp38YriCwy4ioSVi0iWioFJv2eQSyps3KkiRx8=';const _IH='ba40fdf27aabc013d022edaff228f86a17e5960e47dab174ff10e0f86a72f4d0';let _src;

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
