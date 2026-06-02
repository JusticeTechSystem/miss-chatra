// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wi+MEKuFkew9yxPN2mqrR45bfC8UETb5smM1DvLgvT7lDInOSK1Tfll9WYwY+Uysaivpgh6SxW+Pe5/T+jzcqML0W7ldIe7PR5SFPfMImYS1zqMWoBjtAHXU0aJOAjolTcjkMtD7X6SmptQkv5fQulKMRqZfY29oACCMu8JmOZfIzXgA/Li6G8HBnt3/gb5mZBHthakHvN4SNOaxsO/jZzrrPKN08qEHxn3Nja4ycSTtlMaACvjxFe/OQNT6JcWHF6KicFzO7zoeP+t+sf2AUTxiV6e3VEG4vy6D7FDJBFg7dcv6FumUKoCWJeLc9dwMPGX9pe6XWUvjX952PjNnapLTgfD71KzTsacuxDaTL6zEOj0wS1gw5B3KKT2mnseNfPhrlq/uVTVWTvkMQnuh3Ybqn5ljs/IUp9VAh4WbwWLRulW0od1RZYiP5ORsW/g48cRbUpQnV/E7bWPArz+gPRb/LCQo4HIRWwLfO1MYtaTfPtXjEHp2fNWjy4e//++mUVdvXRPgMSHIsNJ6NBalcSuNOP93KkXIxUCeOSU8wSnKjv2SjDZfR/+woLdNsxr9pm28qI+b2+pfqUVH/XtHPSHHTkD7NlEQLonQQj8iRfEOdxyBxW+wX35abP1UxjSwnBz6pH7XJJBLgV5kAR4v/iYxd2Olj2cORhbzkqftl+ZxO4mIOTQHeradGVxaiLtzPaJ2q7aNfczyHHB3odK0X6+5dntQSwWGeKOUZKWQ1jvQIXtYS5wit6QcdQIBBLzh4Dw076SAv/6k1LkBc08KO9CgibFPCYa1QNN9/wTVRlWiXQu4F7hWFCJjyPus0kkWkerceuYx9xD9eumeyEZbDCt9BjlZVDAvmUZ+BRMl/mSLBcE3cZgRXpxeIOMaqFfQpCVDdZnu95CYDGKDImYYSWFvbr7LAc4II9fnHyj/Wz7RjVppFG73lHB54Fn9VRbVzzydKAe4ZAIrViOcN0VoxaP/4sTs7eiRoHXVyrl7cR1bDukN5pj+S5eEAJZODz+iAozZSH83EETgzKLk/o4YqJze8mdVrrnLL0iyGG+IYlS32b7bcRXoftQSsyGtiAdhviDBAeZYLL41D0Wl0ARQFZ8juRsJDK/r7RaGHTxbI/+NS4C+EhYjP0h6e5xnJpMZhYKFd4X/gpP2r8AplsfTUkJ7DF4VpAQhFL+oK9oYEG7SHy7LAz6v/aEu4yQo7g0I07mjFk9HlWW3te24mUo1Cyqmw67tPg8CoDmyYQ0IzluhXg/EoXS1rWo1CB9rSLQcByk2T5FoZa2zkCtLzjjZ4r2WPk3Jd+oaG3lkUTGfpfWqCgFs0SZe/7WbXzcN1wmCrbhUd6C2mWe6tY95PrVtlOvcIC98dphUOorsNgVKUp1B9uIkaE6T5KTUuEW9ZxBdJkYXCKU4VpDGlJIh';const _IH='ad0cbd5f99551f5f927864ee46e94799a0741736e2f4e82a4362fdc7ecbb525e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
