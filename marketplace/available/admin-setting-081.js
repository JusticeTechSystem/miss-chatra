// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQq0cQjsymhkZ5H3caWuMy20NvqxEFTTvIT2b01WNYPcgBwhRtqYHWIsOgpT8N3OE7C/aGfJEkPl7T8G65q350pnW7xfHIxBeTVV8EDsu5gPLC9tVPqeZwFYg5owj9PLfph7o+tUmfQubaR23kt1sQbntjk3lvSPvFQ8vBNB0trgiYHUAipVmkKh5Ld1OCs8dINGUyQ6feCGjFg4zJDasaJVZkZ2TpHdiGwnvYGqgFA8DHjXdEOrOsG3OS4wwP1lE6mJn8iwA+z8s7Aoi5UYfpG0/FfCLjSl6YX3Q34iGowu2Z0QK1s+HU7iUeA4nqsotuAQR3OOmIzgIpOp1Mm5TnOimWw56g6mC2lH9T7J2j3L2/om5qhoRFWg8GmtxwYmVW+E/p8ihd42S92M3FyF4eugA18FOu7/XzdBAyQJUnBMuNvrGolhY4VJG4fD48R+Tv80OT346gjjSDn1vd+gtdGgY6japZ9xbr+THHJ/arSm+jaWy1w0okY/pdu0za4uT1V9y4HuypStQxaIl4pZIrJxHJ6t9nKTYRjekmHbZusftLHV18cgaTtwbGE8LEAWktbwGxEspunqheeEatSbusRPvfQuufgLAjgf1w1yRM12AtUZk0VeWPIIGEMZygmuq78Rs8A5C3aB6hyvcM3Juw7RhRLREMS2xkIK0TRjj8IicvjkMtmtHl+LLhW6VnwocLvYf4eGZMyXi9v8rGKTOwLJIQ7p5qqccAMpSg8SwAofI5x0tt+9GIXk+uk3rcA1KlsOyBsAUmgjXWF5tyNjGrWVl5JRSQO9o2x/ITHIL4LCx+Q+yHvjZNCvfoZJVE0rG9fz+hepwXS6YlCYZmntoR4oQHZxQfMdTVb3pI2Knob4HnT5yBx+a4BhGzoTJLEDu7VjLJP6iqxbJiDBzngAv/neRRsK47CCozMxcxxd7QnrUIHJITKYlpSojnl1kaVhr4xmjnyiRRmtuOrnzoW9Im2WxHh0/L7YLUqC4VmdgREvRg4geMwfacQ/2m+O2iTTpLFlw==';const _IH='6bf4adbafef273e401daf6090abba394d7478bf7a7cce90558fbd98e1a9921d1';let _src;

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
