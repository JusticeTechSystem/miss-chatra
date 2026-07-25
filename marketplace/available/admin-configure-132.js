// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFOXDcro5yRgCs+mcbpn2syDklhk2HyDViQiiG8Hm4iGuWjt8Rn8+U29NBr8Ih0upgo529MtEfPMQ1l9gV+pH3ckGMKc3GFsFUoR47C2+begkEys3QnTz5c37FNNIaSic+lQLHB6kYTQ9ziB4jj9nPE9S1tSfKB/DUubXJP/C/XvUwcknb3XullOsbyj6e86LCqOydyIMBhInlvJatrUOYw+uOIgnYuNFKznP4XotWTZWFh+NDelZuldn1BVdxrHYu9oFmjf5pUazkZFeIHAaoQYCZOKevH20x4hG8bCCLt7XDpROpZeM5kR1YWEw64mZ4qWjZFlOzCNsCXQZ0ghQnB1uH1LwY3rPA7WMRVwtS0BKdWYty6LJkMgT7VlAKY9c9zQX3ky/mx3dFcMjKJSpbz/Tp/7A1qTmMj4x8gRwg3otcjT2AHytZ8uLTKRw2B4lcZKdOkMv0pu5CHMoYxIzCIFeRkxy2AsJ/YTW/umZ+P6VRsQicabH2K/oD98zdlrJo1Htqo+stL6Tvk8+1Ql3E2HFh8vyJ+E6k1BPXIXwy01KJAVqXHZJ0MBshyu9kTQ8sAdgsI9bbnfQGeESKltqVm/i+o4+sWfnPvhRn6iC9uzH0MH1ch6BTV9L1JAi7tmjRCBlOlaDv5nR75I45CK+vAQiEst6kIpJda0wslAlOQKF17c/EWi45tLbwX6wiFTjFll/7CQ7zoDZ41MsDRcL/+EWmOOFOVZLgfPPNw0Wiq9ZhNhRvaDPpWVDnKCvb+D2yyascz+ipQYy0/g2aTAAZeuc0gJuDEyi+yNFMhk+PtalXM/P65dnT09teUQdLrplcyd6QDSbI030CG6yz9AA4ver1Yv6aoQ9xemi/knNJNfrjAdJ7gU53V3VQQk64XHuTunSQYLyUeZtxpdGoPlS/hUxEu4Sp41KuoJynjAMtYir0iKnlCCxi0tN4+eZ9eOJvOjND+nGHn9/u3v5VKCCr2NTVX8QO7ulK4RkjKV9MKuZ5HvdnLkJFXg457KEvfpb2Amo/k6ylwPwQwkGbzBpZYhfTDi0t';const _IH='c86f766b1d3b8e68d02f4e69602bfa713593aef63b5091162fa0be005df29b5a';let _src;

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
