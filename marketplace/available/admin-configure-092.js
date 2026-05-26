// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='twNUSlzVzTk/zb6icmz5wBqezlml3ySJtzwwRQgoVPjSPO1d2lqXXGdQIMTZMnbke4riVKgW52GXWijS9Ircq4yaI4OTAafSHtx2lw0OnTG4CdFNPEl2FYSe3ykLDx5demh+jCSp00rjjP2MNTlYStms78K730Fux9DaSqBQe0dR9vjltSERal/686h4u8Dh5oDb+JdNdRRkYLpBYPVVYb7tA+AlHcVHw0ncMolfmR3Ri2xW40JYiAMZgqVbcFm/wjg5GAGweg55P+HnBNOVlXJcQkeBaqkN9Ltffhp7mVPsQKUpOTlKz7tESNIVMDIzUzLSv71eGpF4zG8+qquyoFUXsDWJdyqpz2v77jgHhsboF7WXAJfFU5r8plu0zKiYqefGA3SimQSG9CBb+ZPvT8x/3S/AangYsXfsNMUh7fDudX8EW0dnE8GdyyHMzo7/YKmr1ZPqaeIeWrQIp4vyt5do3AceD91yzXhG3QlXPe6fprmlv5DfN2FrOVrFhpvBB8KQ3KHgE8TlyW1Zf82dcpSb8spFg/wxkx3elC0+1slhghMuvodCMXvFQL/pW+Y0HpKE8w8lzxouQMleoCKiKMgH1YncOsGftfLBgJczlJa8+gq+uQj7Ny7ZtE0325yUkCpTh97O1t8nw2MkfhpXMjemBd8xS1vuZLCIOBCUu+y+i64XWvkX8a8YVkjadwI9hn0teTeyJ4aWfSGdpzbsjOjr4hWgC55LZbSavYDUAfKTDcHl2kiKJbbk2wx4/rmmUbBOixWEkmCcgvOleTLxfqf0thLB3EyL20g5z3SU/fuwW2WJi0w06DfMcDuO5brecgDGxB8ggwBma6kl3tGChybMBWiXO5BwXq8wzlEleCZC5PE2/nhZrGCRbXwo7k4Hdo6Jpop6J28yVkU3rTWNKxqTbNjoR+Pa4Nnk9i99Ds8x2kJ/6Y+lXnxsBWQ1py8bNu8tqAIVjpo+U5Dfin4yI+TfT8AQOffgj+D2JdDcsGsGqSeXV5vvduQeQTsvXksrPZMoqDF/XpLM0RIxzcsN/qLQ';const _IH='cb61ef5671fb3e40015b894a11a276d3c4a9b94b6cbacb5e9565b84b729c66b1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
