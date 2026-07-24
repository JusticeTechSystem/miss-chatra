// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTu/uFfzNiGoNWW3NtcsoBr6nWJX/Iq5o89JcoiKBXF+NUEcu4lGJy+tCzhkZA+8z7s+l3Rxt9m8Xmb19UDbG40dC7xRkcrbDyR0Yx4E2ngzYLfDx+NCOZf4tLNMkL8RLdTqnpLFUvcgMXu3TADW7eqFpiwJ83OVLjAiGLukoPA6xQ/7AhRiNLwEdJXQc/flIKHDSZp0ea7DpIEebNVVexQD8WBWeg8RemE5QHuUrynncd3p7f3FtHZNoUuXXJZVAoN5bCZhDsOJ6HiEHx1iG0ukpiVtp0JAlFqQdUpylXgM55+B0HMcn2avMug3/cG49jvpXZ/Jww14GwqH1NaKfAHfMhhXZMh41Stsj9zzhNu8eJfWafLTgdf/WHyrhhhFkdt+RIS3371KQOmMNent8p9H+vzUdgivSRfF49TMg5j7ifCFjpaUxmG1o5Vi6Q5KD+E5LMNhvitEEI9rAaO8I0mbyvkkkJvWN2kHKm3s/+/gD1jXvTAMgSB63WFpdQ4HBZQqEBbuQaN5jVS/Jkf7LScIxoiFx3FvW4IelApkWtc+00GmTcQH270i/37DrDZHzZM68ZPS17WPyN+HE5Hx+rl+ktGtOwMeI3jGOhv88GhvEgWwRXW83LE2wolEwiLp8MQxHzUI0SzW4OvUcRdrPPyTr7yCV9UlVQZ0XctRMvcf14k8LDVUPlVuKeZN7SUA3DlZCGymLa2RQKpUTgmsS9XyTfWNQaunUvnQaE/i+qf63kXNWnhiETHO3tOWMgtt2U0/nRKA5SflwxcSMFxGha5fscQK55aiuqfRNlzPfNqAnZhvXBnWvP+c8suxNY0LXzEpRPwl8qSj1gROboKGB5v+mu1OLIG2e1i5+3t/uU94bqwIA3PLkYERPNEdU1cHOQ+XaGXsJLOdGiTUvMtSq7snWLQeeor4HlYTKy0cDrWe6VhiCNgvGYbS2Rd5ElsgMWJ80a0mrv/7nQERng0yc8yd71A7yxmjvD7eAfdf8IF2KOybsTZc3U47XiOUzY4xsQd56CA3rwIAHfvLDKhrCGBbgeAUBFEBR4KPe8J5GWqgz6SbSSlSD8AqNclTyx8wDEKc2zrBt7ThGd1H6BFeau3TbmyBVkPlYgrE+7C+QYF/4WwSHJtwcMJtI+NLZ3TCyOaFRCX+BSnVzkx+IgvkFc4kIiJfg5ltd66FQb3bWby6uImhhyOoWLXNwIaRE/UzO0Q7GY+o9b2E2GNKEW//obOwM3vcAwixojdUAhbLYYebhJGBfUKcGcHdtANcmCsViUgIaXF2QecpLnFTY+yLYREpQtHlkGsaEe8RknySyDxWv8PaWRNeeaKZAs2ergQWSU5POuvFQW0T0JL+OxASkpZcsAvouwhg4Bs';const _IH='c5c0a08b2f73fe43feb76a0bf635470f10f5172f6259e9ede010dd3c50b6f9a0';let _src;

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
