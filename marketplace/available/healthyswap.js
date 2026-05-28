// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NRBWlYTAnpIiGuixHNCrDqAuDAzg//FIReUEVVftGL2W64aLo2/u83XgtcNVlwU6VrZdyLpfwPvThzVpzLSW442kTkKDkoAtm60LwWNOuaPHMKvD8wrhA/Uphm154MM3qI933mBg2vPaWl6VQWLgYo+uQrkEzR3yG4eFmG+UK55aZCBqaSPn+Jrnzl9leJYYV4kLIZ6hQdvP0xXBopOcn8oEZdWhoMUifENJiQMAX0EsncZGVPWr9x8XUxbhy5iW53JJZCskQ0/XUlWIouXhJp3E08WEvCk9dInjYAsRVbUOqhHpny40afyLnBXfxaqEg+XCPsr7au5laRN/PHemhMD/qDLcu8GByYsqDRUFl/TMxWoryV7AXSRvALozNcWpVphAH/AeEQ6zCBGBypgchI0vq1JnPvPFomrNzXJi4kUcnoBd7OooPErV0YPWcV7u5TD39a2A0bgi6A8MuC05bY5KvfGjGks1Pt4Si6jurPaKGYQ5mBY45Sy6Xu6rYpwRjhV0fFaY/rb1QkWQ3bPkAlkr4Thpeetf0DxJd+AOH927xg8KBUNbuXMB4HbHv+J1lci1VvW1YGTfSYV4i8d6oBQLKZ1xMu8qgVBFh6lH5pP76Hekq1mZh5X3Mx6htc7Xhh8P1WR2Hzfyn7iRagImFWHlTQPvM5TqqDQhx4GcJsRBVvrKWO48yGMrJs3rOwnt9NjcVBDPG4o4vHbQhw7enPZ6R1ad/aaCB9nyfJA8z1+GFyUhQl9/9im3luQ4eNgd62ixCWfsJkchLhJZcrG0y+e8KhdPRMjeM5nKjChBB/wNifP0XeqlhVVjbGwlYvtL8tam8svAE+P9o10DBmhUPpTeCpR3hWb2dwxLLQWcyFnkizvkung4ChdCXmpHM4uBYg/t1aS6Kb5NIYIiU45MB+wkl+jTBOhvvIey407Hn5Vly3dI3jyz45UzEh1W7NoCk4WdPWAqeI6stMiHY4na833DWOaW0d+keUBurxK7+wYNlTTdLYVK05zpxyCcwH3/HwV0KIyaChTBE9m0OXyPBZIDaH2BMQxchZIMTG0Txb75vNZ7RcrN7erDgHmab928OVznJQ+hpOeu9l9LLW4JejM6ho1xaLSlKV+SZf5tG7ut02YK+fK6JFc5mdiqoqJiDmCJEahbSpgw/63JAClEmzNf98qZmmxJYVduVge/VP3RMxA+l3zR3WRd3YJ/lHja3CSn';const _IH='ee52a47c08b43000af4afb05b97775195706af69f30142c8ee86b8d6f101ada0';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
