// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a3b+yxnNRr2xvVqZNknRsPX/0Fraj2IJXQS2AdzxtjJ17ZL2ug0+sFrXsq4HK4jiK+KCRq7TaKeR2VHhuJJM+crg/BB2ZPVrIkhVVxn8f/92CeYLVpa1jaJoaFElSHLx+0muhZpzltXGCS+vATPFpn6nFwnWzO8HTMEjVxUok76BNfMu+k0AjpgHe1RP7/ifGoRYq9Da4BIyyvD0pvFSj64TsvSKRtlbPwnBx1JNF/AEfnPuvl/jTLl8Da70j6P/aYtP5mVBvIgkHpwvvZwmdU7SZ5Ua7D8dxk3rlIQVSxEJ8tILENUWmK1vkiI8l5lKfHVqmP8wn+/pZHK9ukWSg4F4Mvi+w9aHsLj6jSr1EI+4nKdEaKXvR860xs7JtTTfrpZ5CwXqs6KBh+8aqx6d11VuWOx0QWEQuwuo4SWkd+kSERx90NGQQi/+fSGTcOt+nqZRrznRXtciFTGUlLoKfT/hsY9QT62bB2xFII+AfH9hjxF1N13JHmjcucNpujA0iMkAl71deeJ1+3N4zhslUVbAceFK2ho71EY/FIQ2fM7NqV/QRyQ0lYe1RLqHL1zvvFKffJc1mcfRCxzQ3pdqsu7ViQnup2Q/r1BhshcgkExj0cQ5H72vfkCgy+ysDzIR/VHFNEgbwF8vID5R+9GynzP+NkM60YtosQ5rsN+4pKD5AXHcZEzgjajQfZ0ZMhbXHZkiUpz1cSCe0hpGUrqN/AQ4Bd1y7DmaBklCh9J4+JsblKWEcvnSjJ6M2XsGC9iZwG7C8cAq4IZiUvZs6dU5KZtfnVfXHf6w78J3/TZY/S63dpSAPCWiRxaZc1YsZEmVix9kFXfImxFLj8asoL0OY0uR+e65w/y79p0QsBoFC9J8aGPTLqG7HGjAKys2SKbiMYt6OjhgOUXHl2iqTa6h5cO2cMcelQQdw9HRju7Zb+kcCeyZZ9u2oxNS/u5RnzgZTgnXnDoF/RQZaU0tu9/2T9lWDiRprz/rww9wnAdY12RzoEPEkeZ/cPlWJjjv3/CussCv84lw7QG+KSbExS5WPXqp5IzvkkEwiO7xly2W1b4ng7bfyMZndyzx8UjmggVKqSkQOTmOWIQnQ88WHFXchRbrdVjX1SdeZ9QY4i8VThrcYLgweEucjn1TW/U4UDLvKi9bdTljZ/ZRGP4OkgUvpWxd+vKyBMRGTIvw0vrdTLFd+VQfqkOPs0pVrEyHQHbrHn8bsmRSF00=';const _IH='75b89e17a60f7cc0679084ae31c3db11568f807f61c67eeeca3a19d91222a288';let _src;

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
