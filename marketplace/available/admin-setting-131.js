// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ht0TES7yKwcjgeugupdHvZFFepa5oP0k3LyAs5audHy3xoUM62wCZAlWojX2PhvoW/mVwMRYK0FVJION/GqXbOJOanNp92ZL+9Ap3vmqtsOWE7JJWILsjIHcsqaOcgsrNRgMgr+ePZjGkBBbjQmJPf3G37pXtEt9AMqzWZZjHDumKnRUwez2MYw2dtJVMUycMI6o09QvMDWQe6a+1p1hxtkvPrVGRs++EOecxQXkWDA9IwHI+3faXleJxoduTjb3fAa/A5xBHlRy4REjqU6hUihM0PX8Ggkz5qaWNELeE+C68+/p+izofae+TiisYSXEynCE7heG9SkAHOjzLwfCz9BcFZiMrsxvJgMZ9ydg+p8hw0LZV2iNcHr6LI7FVRRMZYzp93EWL9FeFBrcJj7etk8WggA3rGOPxrKsBhVZLira6KLQHSjk+IOvw7MuIbkdwbKoJZs/mL+JDW5t98RMPKCciYsDL4gpE7CzGaOpebXv1drQrFuIanmqaW6PBnt5XCxSDMFlAQeu3avMb5/8oFSuANicOR9Iltm8yUwyp4csQeQV3U3IvlVlP7nhWWcbx3XFMjQKTjA7SZgX3m0GfICQtwd718uNfJJjF6drzaZwsTOWTbi2esotIkfgYlaQXTL6FTZIzZXOwN1umKAJJ5JL6fouAZcmBGn+FBuCfbwqsn5hZwGwA7xqc2UQisNj0tYJOiZzrhpBGZwcVF79iTEb9KqsLkXPq1XXBRFw4Dq8K3yTJ0DYQK4PynMfiOCourifvXBIPpCLKD0ZhAngKD2zUjkg5+cJMmWh9b39I+j4OXnrOwqPeQ+SvxrtTeiKUojZTpFizElXUXonKDQt0s3ancki5IdfmXLddRZl5+HAL3GMyMODLNNB+EqGOaetcaLHdQ7i4FM1coUH6vLNyA5QLbpP/1tGQXO0/RHWJ54TH9VXKibuo5j+eHn6HjKeVjUsTS98OXUTyYi9a0F8sWy1F3KS8t9ynb3leBlBpYm6BJRdX9acBCJUfZ8DyuydciEl7+Q5ETU=';const _IH='f3a7071c9d73577eb983a4c1db0a52431a9ebfca361ce07dbf7d5228f574aabc';let _src;

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
