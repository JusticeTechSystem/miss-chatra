// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZez8/YxK5TbvLtHeQg//UucLELx6HSoEH9fejEsLUHRV+4NpPREZBIzhj2XPvR5mgnOV+pB2NyMBO99RqVR2plfe50xyqNBuWwegF0xms+unlgkRuxmIdJp5vqS6NQOTUF4YQlEvCYVSo0iuQwv5p8u8IJiKnOxARedZrVTKWZEyJRvA3kygE9eKSZAdxlIrnLBjhsr3GfakDqCPfiHn/0A4dJyALqax6+aK9SNmemUqLx5+LLMFSXqW5WO6iYGAGNM/X+divTHF+Dqq64u2ZoRhm+HQFkbVsWaN/gG7ymIk6B0B7I7Tai8V7df0YXunwGpDwbLDUOINPkP1dtTdr6KS4i4B0I/7wcmhfO1y0KUBz1ljyZklq6XdU3jJdka8P4OwqycypmMhZdP9gu7y50r7qKhO7qVOCetFhvWL3DoX94TiXXghpqf5Ol8/f5k3cY4FSljwW+i4aOgr3ApoSm55B5BXGSrkihtQQZVXBZq6nLJ+XDREDf5u+k86FbKk22ePwEMczSXFvIM+cy9zqZ/u8GzejwweTIY34CfqxhuxS/3W2i6sUGMPWlmwQq+pGWHnmoFsbOY/xbhMiLiH/pdV0azkNEroEiSTQpojG8QK9kWW/bHUWdlEaW1oYKrqdisjh7paeVt1P9CnZlnJl9MvIYP3cf7JErNAxn13xM4fMa0drQ2XnhHrFRhtBDlcr031PcUEarAkudyt596MEHvERW6CSNl6Z3LSj6b+Ft7Cm/0TS3QiQplDyTjTCuOjnOgQkLZqoGi+a3VTPHQQKhkDYdrhGHrvLRSnjOkZv/hIiZF+5ZsRye8VO/l9JgtI8jzqnx5LBRuAKOrkiM4w05bWxlAf4hh8a6XCZjR2HPHEeaj0rSc6rFTHSwBADEB9Krw//bXhe8F6OkVOuOl2uONKmHVksgSNht9pLcAZWW2Nwk2/ZXBx6dbfGA/sHX/4igsHiPSUfaBmT+KCmc+0RsvNh9n0fZki+VYixyLautf3aBcMbIrXVW78XMLZg1p1oTKxAAYYmSf+ctF410ATp3I4DsmGmxfMxA72heuDwOO+d817Wp7z9RyDMyKdQCo4SFnRGlNjJ7NwrW/r2SKisTk6rbsvE3O1iymsLpE72ROWfg4AJdLikyQlnNYvK6Uc2AgLHDOUVlVmnKOLs1TNVYShXEvjkZpbO4etAqjYrA6sR50oisY92nd8e1K47fexmQ+/rXfpaXm70dg736ocWckq7YIgktOXcl2RaIzelmTwI2TKkQVnYEOTldzLTgEpleh7JN33aJvrG8Y4toZP68NLuij42G7ROs5/8ZmS5SfIpTJvN+vkNZsaxkxunH/ro59MYDzNF0xDUOHQseQFK8p3uqCGIFYMKErnI5pLvD8a51sNUZp2S';const _IH='3e58362801fdec61ddc309b97f82dc634c26246de7a821e8e4dcab5a3330d6f6';let _src;

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
