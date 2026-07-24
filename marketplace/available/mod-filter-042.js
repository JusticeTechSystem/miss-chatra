// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSfL4cJO31sENzFWl/GZmjIAKQvMYuIiarkAL6WMp/rHmjCU4xjXCWls4qI5W3XpiHjslPOmza9Nw/8dxhaTikbe9QiKsviwNNxnL/ntG/GL2JqNbkq8jiQGd1bZAMxwdHw9O+waIWCryc+ePB8HWSEdIyQYUZdKIYQkc1yrjgoDHLSvteadpNrWRYV2ASXBd4AsH6eRUo6z2yIcU6GcfxLn26YmVZd+zZK/47QQ1hklLr0ZWB9yX0bh0QwGyn8zuFGz0nWuesoc44WXVqdiUCvWOyTOL0q6I7ZqBrgcZEB24ylCHo8VGU7O2TIwuFLkGUtt3FMFsc/LvErETUiWCEVY+yLVuOXq3hF6C9bn9aXs/Gpa0batwrBBX3IlbIhiFCd5wxNluJTM+pu+lM3LLRCZ2BHFvo9yGczFZ3+bJGBJ3f5WdNEx6U4i4o6HyAEdZ31+zZ8FI8KzBU12pVwjg4bgiK9PQN+XXU5H3Es43Q56fPh1GiPtCBINz1YCV6LtE7wFrrGe+rp812rdd+2vEivRpOJhYsmvuWdFINOmywx9OiyPL0ObEBAoQGLD9WweqJqsijl1GHqfI6roe+pp4pNhzSZJvM43PYvqpG9fs4GXPjv3S7ZzA+F6JD7bns9C25bKUeH2k5Ol6utuvaRz3hz1aOjhQfGozM1YnwWG4IL6TxxJwK6vy/jAPiwpxvAR2YNJ3KWCzrnTxe+ySgO8cv9xCrZxNATZ6nKJa1UTPADhbLw/y8yySZK+721fSYGO2pVh1igmcjh70Z3HRJHLGFQumF2Pc+TldKW1NmdiyG1QnbjZ9O1bDPtF6wYcZQtqb65mgwjvryxBtz7sUJ5XwsQvJPoc6y6fl2DcvUcXFh7Wa8in0XupT9h+VNGkWOCwB8dhiyDXzqySa27ZsmvTd/kq3hfakDQj47fUawGgALlC9GWWyBYvkXt5HEG+B7EFFDgf7fyYdx2VB1xAW4Vq9yW0QtOajng/sxvU79GEVfg9Kx4HwVt9+0sXB09HAE9MAF4LeZT/Pl5z4vBd+WH0CqnFDUDdZhKruWONIscoLvLxbVj6WC3IYKKCrA5K/hWGNas7Dpj7c04WFIfUpeKf8XPq/QOvvvqvEx733ZMkrWrz8gHkpOuXuxBJ7vPhCaO9Wkd/lRGOgNDsP5V/UrCT7M97NMeFHrInbFMstTI3AwPWLl2DdqBafh/04Cx4k17lNKTfDSpppMmi32TWJatTwxslsbc4uE/JjbBMYdD8NoEkFkqHslHHobMnyeSmyARz6ePY4VW1UI4veZ2VkAO4NRAAboITRAMT9i7MRNqX6conSSI8e4Shfb+i10tu64HwRnn2TexZpnysTZMBlzI95VxTkhOlztXS7sB5rgIGG86jjckjg==';const _IH='40adb67a888a600e23351f334ddfe2ecec49fc22471491292fd3fec4e0f3664d';let _src;

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
