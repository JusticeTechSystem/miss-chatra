// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRJsZBxf+t92lwcgKPQDT5K1mpdHm94MlCp+W+9ow67lvaKUGeQbkLl6vbUWqHfnRfHqDsZ/y5D1lv3S/UCxOyWgA2EBGYz+/Y0bItDYIXYlY240mr1Sqi90Fn4j+JYkdUslkJ22DUqTXgz+tardAN4N1hS96uiveGIG20QM+Ut+y5W7O/XDExf99kKNgL/1NjoCyiQRue82tGXUWdLTEt3cCHXEGk6oli4WjMjZQHk6pcsz+9qzmSzbDeE/g/G5bZMiSGeFHv5OCVZeHTBIpBHkjyjQGscFyncMIhAW9lzKrEV5QrHkPdXBARr8PCPojhcyOntLpPCthwPJ4tpAxKM7TUxkH5FBiFONMgymKx+ty3p6rMxj6JEniU+PhKPbkuGhnO4T4VT/atm4BX/gjuna0Qj0YDwbSHfr8bmeeDiiRKT7qmjmO7ODgEYJZ5B+y0VveQbtymCpsCGtrAQsS8horLLHcQcmPWMKRkeYaMMC9l+qAu0tnOhKLSuWodJkRp3pedLhxDnf0tDXU5onMINjsNQ4ivjvK9poMIbtANIo+lmC0iSE3Msse1D0TT8qBulxNISaoNBmqT4pqDse9nY8NRDY73RmyA+iE4fwXF9qneacTmwhzOUEHpL0KRcqnJORzAWHkwwHhU7GryrLSNk0k0DQ2GkpgpjSc6IM2abccbt7wJ0N81qHlWmOfZHbz9rmGVvgujEQ0PCJsl+NnNQJ2mglD/1as4AZChUPjyUki52kYwje3FwUL5X3K3EfjQduW2BDm6RXKashSyAQPMIziwVw//qiXF/fZItVHvMeZUQ5U/xtm+bJIaoyS9JTiH4XrgrI1BoY0ZurEz80cpgo9tKhenNxidP8qVqAJu4kaWH1Sj6dcFPUda7gMNBB7G/sxp1HZx6+zxWVJLIHgDI/f9hEY3vcH5xet8u6Xf31f9YL4Y7nTh+eJ2Nhufadw8ebMCBR98D40I9sCnek0Pv2phIL2QRaT3gSm3/FpfeZcuWxFZkkY9eeCNS0PJAc6Fjo7K3xkKtJn1yatSpLEnKozr8qOs4NF9snu0kHbFVQDS4SUgW/Pcd7II6v1VrVOJhx9ekUt99nVnXWCFpHxMoBDsdya8Ti3h4jgAokj+O5tYmsz7/rvwNWrGZ7bZBkPcLErmVYdaAGGsn9IW37SF20ZA/RiQYD7q/GiVIRik2jfVyyevlL4ZlXV3I5sUL6fm09bKcYwfUwEojW9a2EFqj0LuyfAJGQnpc85qOl8fIzVbl4rQMtqusF8/cfZ/YZUYfuQffkX3/0banvI0Juejnk0SxnftBD2yEqKy3ay7SRoWD6OnYHMjXxCG4me86NBL0py/pZQ4iyJEPd7BYIVgyBKsb301PHb7w/1JgIVZK8DBnPw==';const _IH='2393a57e1d59f9410c9edddf9e602ee1a465d07010fbb5eff5a2153ea6998da9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
