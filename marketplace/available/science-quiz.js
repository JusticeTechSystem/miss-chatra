// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/3uOuNPtHIMAHFxiuMQdYgDXKIZxL13Ern2eWK/2607XBPM+1a5TcGT+Nm0Mfo0xWqIwRaPcpVOeb9gk3KQ+BFgn6+V0Qob/3oOmSsEYrm46XJJlM6WCseV3ycIXOrZHHWAzmwo0Fa9WG42fdyaKVlKL/jR62TVoH9YyxxXmB6UuWuO63cA4Khk0vYkTMQO6livkiqigWXrc6b57T7shIXAUlbO+ILDZnK6WcsxA1wpFoWeXkzuK3iZcDqX/hya9SvjXdUx1wrzc620os3vIW/WBZhSBQT/Zt/eBC8sdPY7UfD2TRFADOWwTFrg/f0CybHd1sVs3s1lc6jd37VSI66FyeoBmCvqgtwlo1NvFTr8IEwBuYOkF3OJp/42423h3g6BFuqQbmhAvXxd301pVxFT9Atkvr1ltQ5HtuhSzUfi5oP4DYrQL/wGYb1xHaSPHllkmoHBqf2y0Aa31bu2NjwR9Fn/nyMpfvZoW28yOXqfUtgCF+xxnGSHAMT+kKt57MAbXpnRmTPtYBig3CZkT0AbrDIvDbgqyxtpOheYddwAQnrk2tfiJZlVc84RmgIkhCrBTfq4mC51oAhaoLeaimZet6o/h5XXMxbFTI+xj0fao89EP5Wiueac3VQvGQOsnexTQ4DH69VGVPTJfI7IpoXcA38Wbx7wNVzAYbWsg8WnU/yLHLN9DQh9v9Csj+LUTBiesvVezmN8Ov7CFX3WhwuPdxZ2roZVX42gI/AhU0/Arrvo7Jqf1JHXMtx1mC0OZOk3vugN78rzOD7brfZQOCh2dKv9ub7vW+ElGvZcdZFMNWTOCvnKyTKMffmY4xz0UH5wos0o2Hy6Pb2dZjD2IqRRQg8omZt4copKOFy1gv592hoU5bISI3V7fLzUVggZbHyF7huKJBzNTvRkufDjv2C6QoSTjAbn0m8svQlW1gTCJae2vfDNjAppRDp/lvJDg+r4LpSuwP5CpS17sg1mwHrjiYCcrtzWyBIeWLBXxXrWkcRsYo2nl+QLm5m5e6YC13HoKXPBVTobJkjXaRnOc+KhezXmubbe35BbTAh/wYycRjfHcvJ12bvm1sFFynCxx499oIfsHdwHB6PcHaM8pkfcrCnv8L1+HH7LFAgPhhYd4ptyO6oejAZBO6z/UQFaxfPgsSu1FikuOvUnhTY2iDqqEBStFgL5jdKYwxntZpgeasy6CQbVG6k2WDgL7PdPF5NZquy5VrZpPJ1JPNtTVs8f7uBiUmofNrQH5H7kjyvwFyZWvh3J+V+LOhusqbFJd1CINI7oFeKZnO5WdyNVeQMOxJ32rzSVlGOKvBH38km/a5vl1F0LFX1s67utNe4kVf+v1FmKljg7oF+xhIDjCSAJ5rcFA3jarjEYLaW9y78GYscAteSNzmmb7OyRj3dlGfN7001TEW1pqkv9aAMm6cu7x+u+5zX4tBfcWGdlJG';const _IH='9695793c17a1e88bb4d2569a936701f7e7fc696903a39b676e9e2f2f9bfd3bec';let _src;

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
