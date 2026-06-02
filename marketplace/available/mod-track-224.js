// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Me1dRVTM2tb+AkD+NV/5A6yLWbGBm3YbLDiUt7Rf2ln7RvVCu7qL7knd3uHCSdfHGeLkUhktD1PS4M3W3DUP8bYAgm4ELxh3lcyDPEPcyXosG5pJ4eu9lQdS7qTQLDOoso84E0DlzDMvNbHVMnAFXCpilZccdHHig1WcYdBGqTpEfdqhhDtDNWDISYaFueMDWa+SoGxWcW8EcxyZijwve5N8BV+VolvgJbYkik3eCr/QARlziR9Cn1VylJ2LWgTChbzBZuZpAaBTeEH5kFU5WZGN1mb8L52u2NuOGUEbQONq/+HQuIaaoMhW3GRBbLW6vpqvq93qxtvnk/oHSCzs+XFKjOBXdcmYl291z0VQwO7BJXc53LENm+ajCksuYDeGl7ATfhNgw5mf//2hzc1b9DywM4yGRdcMbWfGaYN3J5aGzS/enb6KcYHIcCF3YHTF3b2ThPFqoaF0nU1HHG6oZ6nAXdJNuXfcFOy9q66Med6bWQHsC7/WXi2XmC0cbyL75n4lgbeUAN3aN3X4P/bof0SVQD1PVw+lVWQJmD1AANlj43SKLkYumz0VXJ7ZjaLLveZZgB3gIe08Mq3cmqDwNvapJwnA9Mid2PYQ1squzz+6lE9PQXH60GKk+FyrQuHziB7lUi/Mjp/FAv5+WlcCfDn323YYFCuClBRQ/WHddhMsnBASYz1l/EqcqQI4u5m533HtWXA8GszF2AtYhHgVRWIZN5dNE3PHzj6VgXC/+Ta/oBQIZUp2iNjtD8Ja/NPGqPqHEMHdNSN2dMuxSuMULACB++0Q4yLBpMmVTRvM+C3Hccadp0ddLrOvXKd0+ZuH6eCD9d5qMVPiXL7Zzem+IH9wXZyGv+7oW2sPhohhiEnja5/bvh3DSegt36M/PBGCumTHNeoKIV64G0Av8SGKKEFi0LYhhByuJu4m1ZHU4I7HCnsPxEatiYrH99RclxYzqQjiEujm4i09j35m3yRzzgB+7uejUTspUDS90IJ1i0d8BiTWh+R40YizhYJ+mFiyMTxEeQfyXsaF8Wr3rMOwzOOjCZELRRo/ykbaJ4VcvXvWYwz93YTgpJaQbuQeE8Oc70qZ03UJDImDKAOJI7RxpI54RbhAMUyFdupCttvRlNBQgCY60M3uEkLQle54fd4WUTO/J591U3+5luHmXcqsI1oq/U8tSXu5mHT+Dkw103RcE4qgsj/Ln79c3b+/9oLqrWOIbRZ6Q+VvJFlfpzXzcJUfb7cWRZFnq+HJqvmNtqinF9fmYURsmIdfuuo2Rg8ZcC89i3F5INmq7rn4nh0kGkwXJ11k0+MQa9yp8Br2+vBCS+Zy0mcJYmNcUZgyJcXW/orp1sHAE3/TgYie+wTbqCgN1eVeBnagjPNMeepr';const _IH='ec2ab03bc01052f599834dff1df3289dd1533c807e7c3d97d9e21646b737a715';let _src;

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
