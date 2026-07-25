// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKuY6Htpq+OiXtSpFge8QbFHJqJ0uWwkgeWmeFyPMFYzuL0FlC7+TXACPYttB6ZqKUxGSr3/eK9+r3yZ7azjRJVLxxFIN2d1s00UDotKtfYmmGxLoFc6eCMeEcMQ4wyW7zZpvpAwKCXAryWwV4bO57WftePRjJ4Wduon4maz3hioy7wUQ2WXXVwldtHNpVavetwUKR9dYAyRrUrAg3vWDUYRwTpJrXuF7f2UGuyC50p2BYov5RIerRQnskY+7WKAzgLy/vZQ4Kxon1IiSfoihkOphnj/9jbV26uahB30pvH98Mq3Bul9qWDl0iVORFmARjyT7IbVnhzlUUEXxU46bfpEOddALU89U7uh0/EPjhA0XVAJ6jgThqddKwRgkVd20I6NZaVe88IoRvBMZekBl6AyrL5FKskHtixSJLcR/aai3XTUuWa4K1Ir9e7P1hziAyrv4DRFykuJeFdTQI+0YxVW6d+q2jG4M2W0Q1RtDyyY/CJza36IfJksMFec2AKyVv0ZCPGY7+9K7/J68gjDk/q8uhpzB0MiD3sYgc+f+ibmHioRWTiWCMIvxx9k406VQqHWgCZYIlMNuBj+hKshX7iYCA1qUaOx/RDX06kM1PIuzSQuCi1vxzOtoobQcnwD/PRDieXNDxCjKkdNxqtPhFtNhPE3ZGuwf4QKYlH5DPRR1NUHhf1ykYfKDbQSFzUOMXCyBp+j/iyDi3lZkmET8rJrRRa+tBorUzy+2HwaY/k2gF5/3PHDy47Uyz/lmQXZ71Q5M+xqM6x3oEpjGKv2TxTmC5w/0K+VFl2tVCXVdQQ+CnPXOS//UGlrkxCfiGo3jmG8004lLchonqAvz2oSGRc0uOodArthHC+Vp9TepoJbGHDTj1yNwTkpWPXtT9fv4vO7GdNYO3TJFwm4ecneDK9o9F8eQxad5els2Rmm3mEj67nfj6w9EneSHVjfBiaUTBEvf1RzYYVjRQbKe3+U73EeSvcij2897rDCh4jn45WDC2FUjLxgj5gXKlcumSYk/3YhxEWjy6vizlP5Fhn5JQIb2p0DvwTvUVI17o3WlZ2X2u+9FYMr2DYlP94ZsNFf0MoVYVWUux522RLd9NOhVlhNbRT3js0zgKpp+mlyZhAltzrdPXBiCUwoKTXImALmbp6IksjMYeTzhkLrvldqBC911RIIu1MIKu/eDHDTSSrM+NqeLSNpSwt1jRp34Goews/ADJ4Ph6RWa1hzMKQ9dRM6bu1SLBo8utl93VHDFL4uI0tfCSVdqhaOy5DWu4bG/NnVn8EZ91WlBWvK0pwl5TeCNVX0WgPScX7xk1ziw3gO/rWH1IQJPwbOQN2SVS1baQJ6k4pRTE3GzubR8CllotNAdQiFbNZfDzVP+9s7M=';const _IH='574a29c92c046d578107895d9b0a49841f66e9df4ad8b965b62e49ce3d30f79f';let _src;

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
