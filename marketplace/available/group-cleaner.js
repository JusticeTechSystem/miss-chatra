// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qnmV7F2/2SKaLEUZ7fxvhGmd+AT0p1PVVrJC9CqV3o9mgJv+lOtloEHqSs4RIO7qI/Sw02O8L4+B5i86KkrnzZYkkmUGyBAMd/SV6pqBxsMrLZUgLxGUelYKh+Rllmw/qU44gRIE38Ri0Bd0b5BMmftzpC1Zze3KbZlJHSpvVZSUkGK1tDxp4D0ST3OGM6pZyBtRDblhbHoAoyt2qtnjaiqr6EA2NBz10OoCcRFY8VImtrXX7E3PFJJFGjwO+ib0ddc1jmWs10OQj/g7Q+G/68/1fgOn+zC386Ci95la4i3aa81nPIlgyKYHIbMyu32TRcvvQ7jeaqyHU8Vm0CNM2GOLlmHcm/fEaebJgHHcJSqa9fTzurjlPUvnSL6/GJ4xYkVy/Zm5f1vk0Rm1QCfmBRHmQ1bJmYBm14KdJNEVzYzhA234u9DgZbEinI6Sseu+JByTXlyGCfyfjXoe2iWra+pJ0kjbpxEECEmogWQY7BTiIjtuqFSfcCmCh0XNFzFgAcGScdRrIf4ywiHvPW2Fgs5w4/SoFRNoaqaOjI3EEWuNzuUj+vVfOZQZZIcvPFt0FsYYb0I3hkQVPh9M7j6qKV4e7dsXcguvXLGNhiiwhUX55hlNPRsbm39/ZOVs7CH8otr6u2jQb3QQTJFrCRKm+f4VU5pLwZMRmFapvcHbc7InsYFTzNuzqZUaSg2h+oqcsFHr/BnL/UXfNV/bgPtgu5ys168HI5zlc5+bOx+EPgVvLVWU47e949aEc/nv0z87pBmUPBwzaRYgfOoOY4nRDX1eRVR6K+WTpy3DbFdp/KJu4hS3/cNZe9GfI1iQm9p3uu2YYV3RNDHaTuyFHu3RO1roY3wAoZvniNN8sBWpJ6diBQ74LPDt+DXSHWHSLeV9qewb7xfGzVrmCgkFvMmYpZe19ZIKqUnA/wtULzvMeyxXrtnnE6gz6DDIvinCff0mtwa1ezGUM+UtDiNBgBmlYuOZgI+YVLyxUmDYiNSqMVd8gW7oFDR0GFkUrJZvVlyPrx5A7rzKH0IJqXTrBEPf+P1LXE0eoOONCptfc5B7SLr3KhtCsSCpRYhjrYJqeVOOSFjhm2TfpNCMkll1YBJxzJ0bzzekQKqYHCR8rapbzEdfmVC7glJT3ZMDvdq+mPHUodTjOyKc6ASG4Y+Nqe0vLsMo1ujo7flCldCAT4pAfHrf3fA4X0Leamciol6IH4CSmbr1k1jAYzfiwBUQYWk2EllFNCbhoUx2f3kb2zc9Ba/wUBPP4NFNg2F8M1OGKNOzb7h4DvXLUQ1vyJBqEjG01+u8X8bW2oZ8JlMPj5oqPVKh4oA9mCi14UI0QeJJEHH9HrcSewYFdtykOSCs1onmGJKLiLnBOHOjFuR+ZXpdN92tQ3WCaJsI2l8TUQJ++4+8n8Gbxt8CwGl3alOj0ijPebnBUW8vvGsnbUaCOPKi0q0A8s+PfMqVJJd1eCRSTJV+YUYv3H/E';const _IH='eda013dc93b963bde237f641718f2af4159bd4aadb1f0f24b9c45b4345a289f6';let _src;

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
