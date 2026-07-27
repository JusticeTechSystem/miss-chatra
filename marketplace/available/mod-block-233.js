// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1dsg3hmHfUtYYEGl1wLxvQcIny20g4PdDFs5ALBnf2D9VYoPox4E3UsIvLmjt8JLLHQZqaZ/wLMKEiZm7llp3pKR1F7g6GrseVTVzHZkFY8ygZ8FJTf0EuNSlrK1w8VaLhOxIsZPZ/1192nk4K9BlHNc+Q2ABimDcq0IV7hHrJF9fUoCzxBrjSHpXel2CjzELrWIWUXiKZgTiDU9mvGD+3uAhNhaK/M5eOanNQ6jBMDzow/Gp0stleM9LYVf2Mu0D9jLV7RMkIF36lBIO04HyuOJwHrdFWRfmjsom+aAinGB5VP+oUSd2b/zJH1zFWAYz2ZC0oQMliZ8uMLmL59nr5yi6ybtNOVRtZCoK4pyGQdqFwdLvFnIAqB7B8YdpuByJ6V1Nk/Yz2XIj+9W+mJqNCg8GYIFvI6LmPTUdbNVgqFTNHxIGsMq/Uts+E9yZS3wxiGsGK0Ze6no21Mra66kYAqU7yDkZ5uUIFGG+3aIT/qi5Bw604yTfrzsSF5TEHfFC7uGu9qJSxkw7ZdOy/4FcZedHo3EiXHnmmSjtf/il08Rmyp/0D0bU3/BeYwdSfofDHvft65Wos6ff/GpLyfzhGqDFdoZYEtpCX/UE24bXNjvQtbY6JlWkiadyzPI3C2wKrm85hLKQSH3YcjPTOyWPbzMUbv5qEGoRaOaymy1ycXPjM22angfzrsVNTy8Uv+gX4QF1+sd7QHSeV8MUu1bCdoUHXGfdQnngR3VtY4AjyN6Kad2Q+y/Jw3cX+0fruid61ipFTNTYwK1xwBP7JFuthxkxHwotZ0VVXdbmYioCzlzp3R7LCdZ9vHiigSZh/SU2FkJClmUVg+6Y7vwjB1cohQpdpFX1cEcVRnCj+3ty7tjnHdoQNFmAeJehBwf0eQaq4X58/7oKUcrZCxanEjHn7JSbmVXK5Ie/V09Zi7McBaf9QSxMHvd5DJ1ln+3/cHGXKHpP7XL3AIeNvM51pX5gT6QgYOYSYdSbvKxcMG5RT/bgv3KNi7VD6SSf4B7E2k1PiTYRN3CVcPdUYewiBXGxne0aTG7TcZBxB/1ToZCKROrpPZF4t4qmmVWWsrrBfd62qa+o5KstXKq9WsI/FusssU+VwBVI7gK4gTDHYbDdR64eVFulxkrg+h5PMA4XTmppFfASiuHcd3DRrU3NLebPYJXU8av1ykal9pYdduXcmaZFX/HvYoTHaqS6l/JLMvA4s1DSE3SCig7/N3Df2ytYE0eHAvTGy2NtJsJz+MWsBmniZjO+Hui8Q7oTkRPU70gaDXC3tJWpTVNyJNm7D9u9qLHkFmYCSLkWBPBIz788fYN4Aps3iNd1NzX1UPB2jVbMJRr/vxsNKR+5+gwNy0YjNGDRWiAh/6rCYTr9Xec=';const _IH='c0493f6ad60fee5abdcd1bbe48af12008cc1e2aea08f040bd28f258c1a24fefb';let _src;

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
