// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UWTeHfglOYQE2JiJgsPv42VO/EXPguFslZcLnoXvFFDQXOVzl2UmXcxcXjuRU5nQa4BzNAqqAD5nzRFiKzEtYxgXtTgrMNMpO3HeKxcFP7Pb4W+tGX7OL/XnnAgh9dKzgp5fk4pgn3ZgZUVfN8uk/rBUindtW1McNLUMkCMQtCD5wEcNjzqWksgM+ma3sa5bwoLj68Zjh+v8CV3b58nkzIWUfFYlp09FAwMrD89ttBQIBq/GRXzEkaG0AaJgh1raviIW01aKlR0CBW93YrC6fXdm6bdl7OE2ir+/YmLK8RnJEnh3FEwiYyOZIZjbzKuYMiRkpsqXFdtXemoiz+rdPRVZz46ZacxndOZ2/k6GdMHCWmwakAfBaMtg2wN7kXPz9soNdSK+4vQHH8mSGK0HDK84g5UmRMyhGLUqW0vXWFILFwc1HYRpSsdz10GFoMqRrXNu7p/OvN6pe11WGaxnrvF/acTe1JX1ic8j+GtvV41I/ZkJnFuQ49sVJcKBQekPrBB/+aaoz3oi8md3YFWLTWL26kA0bxj4KXTfFpN2+fyZmA231URTpKj+eaYqIWKDsgKKvmgaEDWnbpkiSc9DHd3A9XdmK62Tyy0Kw9Ydm3tbQQSHV50WJbOgfvQxpptmCL7LzyhL04mAY8uLQNtM/7tPAYwoFYCLorFX9xNY1RWf1PF8jZ/hsczEJKAi4OPJCRFe/4EJBrjkBoFk6sefsl7ZyFvZRcNszSdJx4jz1zR9WuuHox/+YbsATS/3VJio0H8KFzIzdpKyMm+etfVg144SzAhGt8iUBKCWMa/knCO+6xQarpPc+hog4JFeTRRsjkUSZ/M7YqAfYLVzdjvsT9wzos5W3eK+GQ2rWnTaht8YQKE0M/nrVjrgBWItx1SHK4x6046ZorJVj+N1E8ol9WxgezTfxhvUp5j5XwPF0UqcFyrbPNgl7cZuMQOssRJtP0xp59seugJg4Gnl8IcIcvn6CfwpbNh/lKd2WFDFiJ39QpM7O5reAQgsxJKGZXL/r5QG9UvDs+VFM65PG1qCpBHRpir4trlB86U2ai0YVv5ti6bNM4JVYWZTJ9dFF7HhND67QyciHJzlv4A=';const _IH='550330e8e22480265bf1156f3bb2a6772f6a147f2f22f9c23e0279569253c595';let _src;

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
