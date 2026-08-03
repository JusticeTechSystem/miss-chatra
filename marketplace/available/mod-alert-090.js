// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSf3VoeJexyAw7iLFSGneBmBP2YIGylugRGmRI1gGPWT68BZq7AXGlzApGXm0t6NG137tRI8zR7Tt4fhFLeIEC/Ga46qBbcqEk+iqH+YrQ64tWRTF0g599J1H5++NiPdEQxuO5V9RPvdMEaDFUFl8U18MUNJmv+8/YxVJrXFneWIW5zVGYu9KxXMhdMacMDmmFWHefN+lNTuSiT6q5gNzmeUCTwX4euTNKNvCYaMnigAk/yb0LCHSHXVxY7RN1g8zTL9vWEo8GweoAU/iEzC38jY/7eogrb6mm111KKZWW0ecHs13UrJBdq4Iy40SPB5gv9Gb0MvnCDLfmn2ePZnlVJCYhrRtYnwjsu4DqIWuv7nxgmBsfO2LqsOCtsbwdN6+tLe/WsGBMCU/Ll/816jbUe0GwImeHRIBQ5zQkuak7UB/t7jiqF5oKdrBoOIELYYgZGt0qXdJF6hi2V1PnReUIWS+ahutQpu4NNuq4agwS7gQywxm4cZhC/L7ckwKWsh4+C4WglTYwE3sdvA9tKLrG7wwubQ5UWyZUAoOW5beCdFIAcDmXlmiF9qnFsXh+YN6mOdUgpn+SXpfPl2uxikC19BO693J6dDI5dNi+/Rlf7bFpBeznUhmud7GOyQTSvbWVt2X1It/fl2663QQMpzrYW//P2OGydOcnG7k10/fbTskzha0JFeagN+kp9gpNVNeSoXaq9gNsKczZagaY/DukQXGlpYpFaGoVqKLvUr8YacRRYguR5sbyD4AgdBXPgFSQbrYpiQPc9nfxUaKJ1efu8dIZQMcqhGtfvqeNZw4lecWbJE7lpMl3KdbKWKhS14XTH5k6wiXrUFpbFK4C4z6d1Io1KoMFiKvygtbmg1zV1X1P4R66jso0yNjClROk/7Ea3HxOYpa1jBR2f0nzb+xhHa72O0CZtp9SBLCIeFbjIFX2NKtJtww7WOZSlQg2+ahd9a+stZfcHi25HkLRG/86t07PU1KVYXyF8s7xIMIazsg/p5Qj/pwzsrk/BlYuYJavouVrckTqWmwNZrSGLGbLXP2ltU8OgqWFZtvZY7eIzdzch4MZFZaKiYRE4a+5TDayqvlMpEvd9HuN8fN690yUHeL7Cvvi3tyJC4ZmDoHYhv+O9UCK+lypHHT0aYgAE5Nf5+8KmgdKESl1TI8LzL6ScT91Dj81JfdYEMPo2MpszYOlYbjwQUOBng6hZ8SyeFvMfmxOYwzxQ/mIi+OcLnaGA8kGgh2ZgNSfZ0lPu4bLW1p3lr5O/KJKClD6oNCM753cleAuKKPhYbZknA54ZfJsflbTU+c1ls9ysPaKt8ffKkTg2JrxK8dExmpE46QNmU7pVBwbk0uC6z57eU+Ua281KQ0YUqK8s';const _IH='678c887ae4fd4773009cda7800d8051f818e5d8dfd76cae6877334f77491b9fb';let _src;

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
