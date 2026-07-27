// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtOqvFz6o0aOOcSlawJUQ+niHA54pbmUwB6G8i4pOq/CthY4ZT8bmaC2Z+ZierxyMUjVhjhZCs2oJU0zJM9bFqM4jramOW7xia8UTRMD6b6DSJqDw+YFS2EA+pYScq0fJJNy5+rgGk9vN0Pq235PQ83FbfsF0M5JymZRV5dDuz5SdSoO2MNQIjMDmEFtfCkigT9/PdSixY5n1kUvr8HmCsJllZ+caIaVaiVy2aDxsLjBUWIoa4NACdxp74MI537vP/PB6hs2WXVdYcXPOrS5JMXZAusfFVXLz3G+xhhJkPNY3TswV7WLOjvRxwTNUdGpKHdSK59xflDE8nujHuGb+qUXvHSW0zDokfUaTujTji/bvbscYGfMIGYYvR23mkCtr6lcDyGDB++tv9DH3rH+N8R8pkhZDJlM8LU6AhOnOdOo/ZXyHLoRmfATX7SK2h4vtjVbpIk1pBf3SkE/HTENImY1n4zrijvweOqkzVJ4CxOjAlLiSLB8B4JP3zOvEtIKgLenyTrONaU7m8lRhcVPiTfd2WFS0wX9DKUsefnX1fxwxwjHPWqgIDEagTqP3sHKYfCM8gpHSdwg8JelxcbFJdG+hRsETljNLf/yFKrkk75GnRD76+ZTTgjXm+xqQHchRzNOCWHZKyTLhd+X7fKVejC01YT5bbGdYMZe9D6F4wM8QJWqDRjPlwze/+7YID47D4i42XUjGFC8nhUUdmmBZbIr76KDNpuM64uJxYKq6GXmI25FKGAkBZUyIIam/OMlLXMBXzrbB0sJ1ra9MWw/nhqgaslc3rG0JxeVEQu45PJRr7idZcS/kqWTAghhUTUR8cwSPHEWzudsZ3DzHqcF//TPk/n0OVgKguZP1zVMd6q6V6/JiOUHBRVMK+FnUZWoCoFBy9xMQm9uuzREMA3JMDL8oW79hFPOYONsp1Q1wgu2faHB9Iaf4wF2bkJOeQTbWZ055BymvRN79Ww7kUm03gB7ymZnjX9xOL37WUiR3QyNbQcKQVhss4+7Bk1NMMa9Tg';const _IH='ccee30309a6f97f3ca4e2a5fc0bec4e9b9d1f8c3eecbfaf205f40ebef74a1ff7';let _src;

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
