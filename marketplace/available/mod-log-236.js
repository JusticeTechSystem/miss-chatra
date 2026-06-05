// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CXyE8nhi/PmmtR1kJXuytOQB1EyZolbww/RhEUZbaFtc8nXUXVwkcIBmgtJY3/I17Frinro+gwxQ5hQi9pETiKE/9CbhVeQUB2yuZ17sNSbwyZgNboXzxPIAZGagAYThk+KXMZ0tr9zTZkGaV+lMHGzS132o9cqmvyVPsZJprmi4HTv/X6vxkYCHAl4GUhgzvgc7zzxnfkBfQ31uF5W3ed7Kdgf7xxmvudy5TxfLtdycxK6VtXeXcu645jA/RkAoL6400APArtQFYM2cVZTlJtPNh15+4MQGpF7Z5i7k3L1xCvXNVkH8FlbHPm+c6CvOZwzlHT/ZSjmPY8uuPyzGsykiQVFkOcqWPFc0UfEDfOMPmTe0ldhbt72Ixd1Fv18SkafI6WKfW7LTKZLgILbem5w/qOJfc1HfkgJoICi4rAZ0PyBwf7yXIAgDA8RYmIzr/9x7RoFIiP3McAZW7bB1Ov/atIKYyr2iemFuV4h3LjwVC8angXn1dpySnlrgTc5mYORPgDT0y00mUzaZZFpaWtuP5q8RNd8xqJiC6z4zGjNx6EDz0HRm2Y5/aYJf8RCsbRHlJL/+IolwQp0NR/8uq9tSJGfoZ1ztq3nBGtyNoI6moL64Bgks5ErRMnk5hLz0kg5/cCZRizRw9mFRV97UkBGjcZAW+SBNSEYuTGh311f0OlH86lTKVtaEawroTmi9mMguDbR6AaQ2kziUu1VTlWnyHXBQy/ZgznrjFxYv5So8XaKOaRzltW+LpuIHmukwf7N6DGkyLtUvF/pGnkfCGYc5nzl3wWDzirHYBF+CZPvgNqmozKtKtfSc7Xzdd1wtCYCyg8606TRMWOgzyTVzwHmY2w667Bj3aLtqH36YD51bcOKV+mA6+AIeo1ZNIJ3SzTVr/lA+V2YW+HniOPclwczzPTlDdTJLpYWRDNuT3aNRt5ayNa3bSMVmZ5EwDj1KYbuoskdJV01ZyJsCEbOFCaupHMVHM2fLpRW7HNMkZWZ3CN1Rjn8qKhQ11LjbNaFj44izGwmrVqddyjCSq+sVIAEjO3jayb5B4LgH/S18b0puqwyhn8N9rmQk9X3A15beuRonxZyiXjyaiaH6BPgOxohsoxyw2fzKzRqxzFDx7JEZigtUUgXkfMWrv8ieFMvfOtjmGAQSel5EQQmDgABiV4tVSwQdRO/UbyfoxOB9eTfWMgRODp48L3btF0xVTSl1tVTEPpXpygM+f1UCv2Xw97E/ecmbKv62tzVzbAKIHbCrJ8boeEOg+BG5/2XeXRD4VFlkGEjDBE1IvK1zNsj7/VWt/zWQYdVJ6iYQTcAwAx/KzcVOLZY7V8U7r37imn+eml+99+dav6DHIQ==';const _IH='c5f34085e76b5b2a7ffd0e80130378a1d6742e2e86dc309e046efe9a2b68d4ad';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
