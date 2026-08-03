// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjCbtYnAS7QAjY4zvLl6/0B8OYyc/0pUS4OhE14Q7VK7XcMmp65NXHtGT1cUAHil06t25G8C0v7EVM2zFjp6DDG+rBqbjpp2ihn1rviz2+R2508MExvktuethIqkQH2O4CTWXX4AaH0inWoHFmgeNX+TOtsblLqfRLnXHWeipcBxfhcue7bKkbX+F/j0FtsEqd9PiAOXQSW67mhplxADEg2t8Hi5I0N7XPphbwlKzrWZFV28KUU6pAysnZY9gomKmRb/7xRwFsjonEqhGiSYL5Thz1MM8qN47wdrrfloi0vNs0ZsqEXoCuJ/27ZHdxRRKTBHMOF2aaXF76v+TCcPxcnKeUtDLu2iubkR6Ye7ybSPQqY7LysAp7x7jn52yB8ZmuQOSmJb4WPXrrhmZ48JiDtCjvLfVn6+8CoEjxjBwaq2olCihJMyX/HF6U/BOlMryE0ngXk77I5SrjOA0J/1CVSzYRweUMamx74ucmVeSpzkPKTxNOP6EJJBA1Jw2ZyT4G6Y+HQwMsNd4Owu72uYxaSlCRfBVFrqz5y+dLFFLMo/aphQqaxfKA0TaNvJ/WYslFLuBmWNsiurOl0FmxnMveJrCtKhQHmVkv0y/FN7+i4mBpXWkyoxuETBYYGo3M1kxze1F1tU11zRrs8bOB6RJjbfCLQmXCF/QJkAJGRPht0LUYsk6bLzCfzhl5SiMwCVbuRWQxqdJRpGlWnp6TTHtz9unui3mkEojPlXIGVaRnToGwUeBcYJM5uyvlecDcvcs3tPHQIxc8x64nigzWIoZOmbFZAJD5p6bzuXnueYnyVMRzRgIKltnmoSFRipCvF6prUH007zu3GB9o6F6ZtHZk27DNi0XzHQRFiCuYjvfeEWrkDrNGt6MO8S7tWvjYaV028/0k9UvJbNhI47sITWsCoWZ4TN7P0Tp9psydZtlc/K6mz7NEjhVYHzD71xXdIAgYq8yV1DumPH/pJC4mc1hs7Tr+mj3EecOIs3IhNP4YKCYqqW2SC1n4t8qPOuwdP9SbjIILeLuWuVMLL2cOvnWlF1rxi6u+lO07lv2vCfWfWFmbqbZtqDi2+wZXYIkcLPJBELkBPQSLbc6CjkK6XJN2Iexv2MW1gtiODO44SM5e9YG1rw8G5t04zaSaVbzZB08VA3u5dUP7s8kN465KO1JkrIFPDPvPR/qeV9Wg3CdGExchv4E6HQDp6RGANUapcmGA8jInpoflGXvxh2PPx2WHcpeIT2dx5HG9XHzjmRjQ1gs/GGCtpq1Gj6UMPQsMdjpFF1PMXsK8Mm6snoMvlD3xVf+ToQXs4ifJBQRtYQuXAP5qksTqXQL2MdR83ukrnHnu5YCv1spKeS5VXby7nWHgkI/QMnjx';const _IH='18f3253280d6b17ed29020746c1b691b879135356393cc0ec73364ca0fa8cf7a';let _src;

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
