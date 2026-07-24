// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQE1hXgP2lZYBo/uhnVYc0Jz990pRGedvKouPi3VykR7R3sDhUYAeUMcI/DP2/PmqDb3RMQo6T1nYyF486T5t5uVFNpwjZ7Ih9s/jf6UapUtOg74kP+FXIXJ/HiKUGXNgmKGqBE9jTsjY5FjyFI3YspKq6OpROMd3cfwaSghfQVLBIhWOlSaIvry2tmH0fwlclRpkKb9mYJY4DDylgBiGv+HueHJCjpG21DNCZLgnRPjBhJpp0o+Yy4+8fI9V41x18Wy5IaP+W2KEI3mQ285z77P3Djue1Vmb0eA4aIVHllLIyv2gIZE1Roqc97iUSlu1RyJWy0J2Y/itOScGxfIqRM/r77FBqIR00aRe+BeI3GRtCA7FPZBmwSx3TjwGN/gD3w9Skwc13/MbXJyxmyKIqVg/WE5tzM00Zyu4BiZRdieMJgdvDAAamrYK4PrV/9U7lqJgCM/C0h4WJq+6BLxJPl8BuE4voflZR18/Rlqac/UO/kc3/TB30tnKQlK+vmjyBK/jWhhVabX/brnZdcTRVm9kp/yliu8kchY2a1YnIpFoVYOCjnlpGjKfKb+bDPgIjC8vDd5VbqFSpTJiMfsER8E8Dh4y6LarMGYhw8SvG92X6pphEbLfmsVIN4b4fB408HBfcvzC76DrEQKnednuByQhSXIkZtB9e0VwNGSdRLUAveaptvA0W+4hA/pzj4c0XZZ1fMFW2alcGQC8Fpv1x0xTSfT5/lg/v+/dalP0eG9TaIQgb9IgSk0RJMciWfyniG2bnha8vIt+PLs1IpisFzxJYFP3FJZtIJNU64smnXnJM7z6HNOnZPkV/br9mzWEVvW4Jb2whtDBk4/fRE+wTV9pmnPuraWKVb823ZmmaWB0zO5c6Fu2zlF26vy4HpxWtgrYDdjT0DL2qTBL4HeNUoh2m29PHptPSv8CPzvgQJAEP8+8yDT0bUeZDp2c7thCXezl+GwL3XW8Q10LVJzRltyP8zgrjclWkp0Y2MOgbrU3FVFCh1KY+Db0Oz/f+Y21fDi9dypl7c2fN93wuRPt0hyv7xhiJWLb9ungO2t9RJNQ6K5hwEHC8jQgRVTM22rL2SyDqFVqo7sukBtyDqfvPSQY8s9B4LAU/aiun7JI/2Jt6tCzUIcchNz8DEZRRxOEz2t3iJpAMQkrM00M+Eida4z+/1PVKDPnUMjkfL7yifM/sF4I3kROTwjKNcLtoyx7xjASH2C4P8n0YwOgIyAWnCo7OpUbMGHNojQrAHViardw6nrlR4JzPouEG3ADLhteYupkWA3lNjAT4KQlATVzkbE5mesNAkMfjNDF3yHiIt+rH27DkCfu+q3PMkcTEnul6ymg/ODk+3JyqzRZQQjqX0QZXmTUnnd/gZN+LvHHI=';const _IH='6b4744cef662e3895926c3f40e37966e1541f461a0a2891a85599321f8efd711';let _src;

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
