// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KpCqmYydqgQ1oj9vQeZZSy9qUXUfePty9YRMdEfNitMT4y+qxTYnRT5na91MKgF0zLvcWR5n1UxCuLjQfiPnVjg5dIy0xoOYwpnKqzvBxju3TKLv8OoMWkOvX4iYmbB/i+wMFtfWXTvY0VTdzcqQpckKzEwtUmukoL9gntvneiyM+2tTsMY+71rc3n6LtqZfWvZ9j4aQxqz9DGK6ne9oYG7kS0LDl64Jl4o36/t/s4Bgx/OYajwEaAfFxxbUlqDCUISeWUOoCbPoHz6QISuLcpJTE7wg00UC4TdYRk+/2wb8tx7ce7qybsesZV23Whepq9D1WHXqS1zEFYsYY2skhoxFDbYMQ9V26boQIJLk94/e5ZMO8gAqCcvTEmea+hgYDEG9CdZOWMOiCSnw19hn8IwDEPcQR3IS2hEk1Y4s31iOCLkROzAEo4GE4zVn0mnGcyY7z/ey2zCZTkxa9x3eeiB/TcMBsRuwRyzwaw2d+Qh1MqMZbL37Hv2D/+HR66yXHqwf4eMeEjO8hh1d6tfmU2xo9M1r9Vm9M7vFiTZFialko2iU3OF1lMFu7MWg2AyU618PxYEFsd5hZsRnq4OR+cOlqTG+5SUN+vQQ4zHXwPHsW8r4ZUMuOTBXlZUYNHiqjCnZC6O8V7W49o2mZdGtKJoSmqDlf77FNyQIPYqsWfBPg9BEp1AXgAl7H9ZBISh5kES637eeopv5rNn3parBmC/VvjofHdJCDCE5ADZjjlIRxagWb1OvXpHjRjbZV6wSRwTcU2hFGptptd0rAMSTLskUsovEw4NpW6j2CZRAtDyAFe7lKphQMo+oKP3qeMsquQPXRxgg/6Y1kVJoExxmK1siBef/Qhx9w3q22W69mXF4kj0anFU1emeHdjVkJZ5kk+0RQwv0ssdEntGtZLu5fd7QnloXJ9qb4OqxtWWj5e5X+MWlbcjZ047g/+lxmZeNg2oRWLvCA9y/hj8hruCNui3Qljki4tal5bjfhfs10PNKsTK8h4V5nScFXcTUc1u7bhKXjvhMdaquLXm94WmlJ+ucFkWXDj5oTtMJd4MOZy2Y+KMgtILHaDlaTG/3XvMmaXNMZ4jUihWMFxOCmKJngnbtsLyjeOcYVBh7UBKUky9TWp8Ywy5jaoSGNkj/mUltGM2Ibz9YntO1yHmd4hRYaWVkXs6Gw32HEO3x9p6nFbcgv9+Qk+g4MBicDUW7BCag0//aKkf3MF9CM055aDsOHCZjm+Mf/OEqAEgBJiDNUv9m8nHJewdN415WCgHBDD0V7bB/J3FhIWprcLZalHXU';const _IH='cb5d0f47aa9233b0f74be36188c4bbdba58f1bababe0963588f6bc29fd4f070a';let _src;

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
