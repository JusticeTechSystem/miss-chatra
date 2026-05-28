// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='faFaPJDtUYPc4eyJ1OJ02acE8/VfQkU8/mM9sYCNjVIYaD2DJy7YRqhsiOGpPrYLRf7vUzrr58m/32atQ0s47qFMfSn1i440icjPWZkXf6C27nnzBDe76q6dIu5YR1iJC9J3Gdr6vGQt/+3qC3g4VheMA3uSUvXUbY4MR8OsMj+24ub7leu/ZQCdYfU1vdsiDjzeMyCeNw04B2P79ibudA8Rt54/sJFrUZLJ6DENxx/9UbVpFF3TYOqUrQmcAu0j2Al5K1hgVc0WJmUP6bjprg8SfeyYk7X5X1hJhZVvs9yULq0UfhfecpF5zA71QmeX+MUyoa8yaNKDF6AsoCiuum88RfQtcK0unSKEigZFlv3vScLElnoQwo87okVrRf8vAikRPD6OiPH5Q8p6JWwIpvDUU9qeEUPADJHi5QXFBfP2DwGPh7hqskgZm7uh1S+5iNQPqdIHQsdDXQdeATpAeTPcbOR1ZM9eXq5XM+nYLv1F7IxjUxP7vW1IdcsR+cZNTB6IAbVzPZTfsThjSP98Rafl7JD/IDIBN2Ul+JoyWMlCl9Csx5DM7DdBAJKzRAPkq/Pgtxvw0x9pJW8oDDQWmacW25viwtqCSv/baWt7ml1cDZIOUtbWBskAinhu2+YK9zEh3FuCyqZqUVqEJnkeQ27ls3dx5tj3ESYUgB8rw1Ku+gpM00KnJbWNvZyuTInF39HogB3vqyzBgBlhwqbEfxRanCHTxJoLk43z6QR/0guRZSwU0yGrY0pOs189SbvLdJwnqcGBOFvDAYSgSiC+UZKZ+jRt2BpBS9cYqrtfHLVn0++7AFeGLS+niM/S+VYtyxYWraLPrxxPWWwU7+cnz5g6lRFHUoAwK3V33C2/MoUGwSAGPbLgusrxbywq6Q/aVguDYEpN6yGnR2gzQADvl+3Mp6JuKkDGPZzFhopCjEhnYpyS/ye35o7udId2V6u8TTFOzKpngB8NauYXpjHQhWG9wU1ct6ut+7Y8dy2PlOTCFO4lC6aNuoUuisoSh1Z7kBVKrQoFOM3X2fyVXDQ7i0gvBTLmgw==';const _IH='637adc8ce95526ac8d3d3ba43e3bd7c3635653682b972a32a2a2324149c41727';let _src;

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
