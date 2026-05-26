// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7G2UK5AnkhEeVwsX1ntiT0REmH+ucHUUPHCAhwKPnksH/qI4mPtcFzseHKH9V5MXtoMDV7f3JNsYRvuXPX73Q3yFETJOq9A4USOeQET+7fsDxpc647wSDr7kOVZafZYg+HJQH6I0cWpFP6WOmcixf9uWfdE9bTd6bAPb+2nI/ttPJGqzYCU6Jt2DyZrZ9UrLjbHDu4Y4O1vDSDhHvpYv13Ycqo4Jyn6j6Y39CG4CaVd3mvTEbw/oV8FQlQ+3g/RpAW2JMEZSt16h66HExQECGDqrxLgtQswSzsGRFNiawwR7KkWqxIUZbxtVeHl/neFgwkcS/nRAF6LCJFgdWa1OcfPELKDIKLzYe7vBu3ORWaBu/Sk9EsSSly8UJv4fAbyBL6mlKvrjvVak+/mJX7QUqWRIt8K07YKHz4lTmlmUcZWjw5wQ7CpDGbpMZOBJnQjYxFTnRm8zL0u3vPUjz9r0+KYESX+BoFatVDoy584NyjlhmZ0XGqYOEKafym6bQ36NxO737VRirYmzqHjxyt2M0hJzHBDkVOcputyQcj4P2csXLn4auNysQvukam0tq54lxakYU1xzDj3elgKYAi9KsNQMHeGw3V8w2waRdYbh+gWX23SLZlz6etyd+ZxG75NynP1PCHd22zPXkp6PIIchhhsos+eOKsWGQWy+gNI+vYMusYyyOE4IpmzcMtp+8rcfL7pAA+mTecSV6mj6APpZ3y1a697x7btdMPDW/ha/Ip7I0jNfrZlCK6HFsJwB4mrcC5P0ZLhuSKnrR9L9pnBEtO+MqjhzURyJLnrGCEM7qr8NIUnDPU2QdHhFutk032mZi1rMh1k5Ilz090lvokjDd/pSa7MRf6rTQCj5+P5k34Ks5DRR15bTrT26WdTdXpsn9sm10/qqU2KidJYX9Wo1tn3a6pFOhLo2P4QcLtwIF5AmfAhPZNzPZXPEDSpsnHx9h4d8C9mseCQCYp9/P9qBuKyNBsv9uz9xiTwdljTHBvY4i0b0QV0kn/7KXcjcKvGCdK2ny14cutAlSToCLYauGUL83MYHeF3vapJ0EeYz1wuygccwibnXodIr2QprY/VhmtkpmhZHRtnfU54VPmRo1iXGMHTUD8HMlv8guQ5yzSCrrjUGLeiLZHQ2Z72laNWnEfNogG7nVQateh6ylIqbzrUGx4sOGlrHEVFmtvQ3Myu8guDdr0JQo3MkSNmKPVGp9Vl1OugVcEIPcrc7QbbWW0KFjVD3Evumfj5w9A6pD4kaC/GdRtK3kmgI66LwsZlthjCxcLQHViBWj3x64ShgXgJScjTQw00LOlw80VgSUQ7UMb7I/hR3g4sOnPqVHVMPAl5n5/hSmffVhZsaxrhykLI+yos44TJ58vCUh8/+zFM2FCRQBCtxTxUi0juOUYL3ueTLTrH2sE9mO1GV';const _IH='baf335dd06708074ec0a4410970a976f715ca7e71bff18083bf00c43fe6a861d';let _src;

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
