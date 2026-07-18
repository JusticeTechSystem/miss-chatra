// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTm4FtLGnbmvgWiK1fsvwfMYbPr2ClJ5oVoPdnNCRxdUo/J/SC7l/zw828z16ZCeVfoZMrDP+rkt2Doeuie816xoDMODysiVjtmB1yZIWk9HzWYiQc8HKrtjORyLB/mE/Dg4biASrq0C3qGhtqid8feRZDUXohcP4hV5aEuFidkS1wAM7eH7jVdkizRbexM7YYISnDyzDGwPJ+PiHvXEytmT+JjDSVjXEvjFiBuwiI8GnHLRcGzQBm8dWvn65cVqzw6CwBAB+qq9vTkHccRXn9oDwFJlZPZZqpCREHyeW6zqaVhrYJb2gKVtAwf4BkCUph1OEBd9A9g37IPx6JVMukcg3v6twDK6mRV9eS/Px3XKtFNcnaSW6GwMeCE0lawIz4VrxXjhANe9xCIpjJssKCo38dvGFBfHMj/PAedvRD2ZoPlIX8d312Y8ptMJ9o94ZaKmStIlVWE4kVSz7QysXVtlAYCBkO3yIhftJkJIMObfrimVARhrytC/OtD5ydzK83JekH+brWuIqeMwVYH5LfOIEAJI66QyB8kcK9sw4yFZX0/bzWOntn+bwkG2NcFLONHYDoRaA+pdbVHVIzvn4Xx+GBFIl7lSJ0cHx8x0w4g6zim1S1QT0P4l4q6HDPaPF2onTWcX3O58TAOPYKHbCWTy7KhgUuBd6Jb7MptV5mv9+8ptNLif3OXn7QKTybXz8D7lJAPhUS++KTSyNx8GnP7rItsH23++OXQ41/0cym1gdcUYH77XS8twn0LlxCS7Sctke4JPqp1gxERsagNwxv9st32jvOf6JmqphZhtzGt/hIVjTm3wXxDIBToANXCxc2fMXG7BD2Q75tPDjbTsYzsYEozggYCAm7evM3qvgLGZjRQIJCJWy9t5fQlY1dntP1l+8F8FNYfTf1PCpKG2fSeRQpnu6f1tvHeN8/0+AyQL81Ss3ZGI3QP+9EG3ExsWhAfVCx4wE0lwl1sHNX6Am4i8TGV0gp2qhugumZ6mSAAFNcOA0ZDrDuJj7+1vxW7e5qoKy1xOZ+Q22oMorvxRgylANaltSVjALE1nBGsSxKGmL9tSDTF+be6mbPaJm29FKVQ7zCoexgDCXB0noX0CcWDkHQAQ8htaGCeZmfuFWuQjftrbVUxCYqqOGkxgC6QNaWvT5ozmwdNcR3MVUWOq52b7gYyU2Ug4DS3l/YxNK0IeOAHFYTac2aLezcvefdbQ0jErDp/IE3XzJqh0JGqPBrZtGmkOynGLoh+6T9Mp9VzIw70o0/s5HLFjXhKRw552pZkTD9pd0p/8Ccg5VqWGuUw+gE6tRl3cUQP+hkypiRgjmrvBWX8dqYxT0gNUoMyhPABEGIYSyvoalTL';const _IH='fcb8e2227f0a9b646d7751ba27213a46d7696818bf85ca3d21dedfa5f4cb810d';let _src;

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
