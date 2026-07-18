// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSsYCQeSHkmUXAOJvLNjC7SCRYdrcMN0FN5o5902rwXCp5wPhNgT3YenAxLpmQq7NbfAC2+rq7usWMgyOadALat6+7DilT9lGh88oRG7+gg47uZa9+js94kZs7do0Zga+MnDMtXCMtkHXLryF73/RTOdlHIfmbAVEOrqezsWsQHYvedHeXbHTBx/gNqR++4dhxhDNMl3hI/lxctHfa9XlHC1yuWdB2VilYatxqKRHx44HwUrBQyQu/VDBycZr5Tu3FRSGTq2OqT/ACFSYog/sF2e7D5YnR78REkHp3dWPLg0Llp3fBmK4PTi/TMiVw6NtLHwi2qmQUxPRaCQLCXt/1B/597HkwTW0XWwV+Hq8wRXdZfUmK5MO/JNDm2mieflwaZGB5j9qhyWzg4rubavmr+FiwEEvXxi1YK6SloM6ItOK4+DdWl5KL2XxvT9XOAUVP4IwkyCvjQ8WTlv6D4lH6E3HfG6rvR2kQU2n0bAjtQoFl6+pZC8YcpWdP3Oouc3zWiIjuo33BwCHZ6lfzRc4vATyUIQOwFlJY4Td8+NgHv/zrYMY/XjNJW59e61ZevEUSIEVlT+Ob3wFxBZ6ed84P2ES65XxyjSHcyLrY3bIemEPkmwQT/FfAagNuF59UHOoKETKH9XSJz9eVrxEJig1Q1brockGhRNwkOl2UY9GkCOsOkgcnREgwg1r3kLJtptu4+QlJ7r2rmTwJ1Ve7gew4mTZ6dJme/Fs4c8CLwg5yTH/vFsG8hEgzuLn6H9GBGYXUcQXWjVGk+G3SR4bCrvV4yOTSlKF5L4R2/iw2ISwvH6+oUkxBB4JpwDnuFfiAenDKY4zisbsSTjubt6t86KThdjYVDLnZiid0C/DevZIGadfl1R9OOBShs8I0tS2XfyIqbEuDhrOqWCezsUfCYzr7LPeadnGNeUr3w9wzNpX6WpnNv2opDY6ylzAzjhVDoPG2sqmVhWqUHeoFrLaqCzAdQtRoHBDUIcatvXmXj9wh8i4MlLryba/Df860ca+UqowZcpU9ys/RN7ll/+HXlEFj0eUo52d8kcH5ryoLKfe2YzQF5t4clNuaZvRi8ZyzdhO1vx/fED3uUqM8OGsvgzUThgBpuCxIxqL5s7vMdWi4GMsLGFKBCJe+NBNNtBSf/+zLQTKrAyE4Z7GQIATul9ZzYTqIg8zZ+K8l8slw07fD+skjj7tB+xa4uRlA9nlTn9KtuQnt+V1uwCIBEOkn3ZyDYfqzwqUUVPThRoje0MUSsUpCEzawnRwlEeiiGnjGJjGyHqdos15Aujgtg6AUzf17nqw73JGUVXUOxXxCC1qvnc17OQ1PYwPc8yUW3BWBFpsCxjBWKV+9Ra3fU';const _IH='877d983497897465e3d2c2494ee80ef38b4afdfb6f15c90c0a2d63ed6e7903b3';let _src;

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
