// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYxEKTWQQBHRt0NJbAqVfH12wa1ZsmCoRo1fMJ6aFvAg+jHQGXwouCFoO31oQ16OPklfYFJJYpt2LMot1D9l1Yz+2YEpQo2QL5jztQZY/8Oc6S/Uu+ydMCsK6+VkGMqk6U46ghy+9vFVBVkD2ObViQ9kLI51rXBu9flBOv5dKBfaYC/qMRQJ6lAtnJiB1U4undQye1ukQVe4Pzm7hGlPOLeLs6R/8KDoD8uP1vhRkQ4apHq1Db2KV11BkUfzgdUJgaSHCEnEqxDpXW2DLy5uevWjCdYBB3txljfk5vyB4y8JFazWQOFGajkPR8x9s0h7JfqX6CnN3HlMu2XYF22k6DWO3V78kaEQO2c1UmVyRqRS/6gNn4Q0ZUjBZ8CYlu7TJfnMlbMgHWJ3TZxOIpNJLeH1vMNjgB4wjX+eliDDzKuN/lXY9SaU0XjgRhAsYAt+/Q/mXW0oLF4LdZPzPyUKhGkflwVrRXik246djWO2ZJvJMMF1s6e2Mcac2Zvu195aLR3uCsj6FvnSjfDr7k/CEOZioJ/aTz/rplM6mC/JO55GptOMfI1OAzAOD4NOd9R1aqolY8evCxInmzi5G/jb8DpqYgmq/oeNxGn7xfGQ0n2dzTwxn40IsySvPooV1UKYI0LHiai7N/oB9kbzMQOkafc1tBBqueaP9sHKmTyPMoCVo1EJc8AvwKhvtH1WIb6RDiJEe13vppZvRB4qKFmR8RiLN6E28lPEAIN7XBVMdxKVgkpTIIrsvinGqlJ+xtExnoq8YR3EmI0K2+KcZp/13P26aeY/jD/P7xUeJXO4FujU6a+QSu8cq2DvlBh4KbhOJZPmEC56l+DMwP472M2LH2pRCqyiOJkT9OGdm7Ig7uYIKOEK5HAtp3iNwA0hsvchzwCCXwBNzCXc8m+AE5Hi/4YFLb7EE0sY6I6aBOIPfLsDVXq8JFy0PfpIbmJ1bWcMynMhbZuvEuU1kU7FvxkvBIlaowNML4txOyzOrcqXC5VgD1TXmFU0hXuQrVxeCMY+ZPzDayBVxmh4tkx7PJvrMiVKECxfUcco9Twr5a29MDYO5h5+nXKJ3ifRqDwSxTD5YRNDtVWIJIXaY62A37msqu+ASZ81T65L5kSMztYk2LdfnsV92d6Cnlh1S1gaQKCp5qqXcxcsuwSJujDPSyaGdBVWL/aGaM3LExJu+1W+Kr67MnF+sd/EPWPZH2eUusZQ902+Q=';const _IH='9df5a475e8b17010dd54f7ad8262a08033a1aeadaf18ce11d7412e30d39ed6d3';let _src;

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
