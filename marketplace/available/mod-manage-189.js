// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m1FkLxspTvS+q4698rCXVeTInC9pNstiH9kY7s/Bpg3Bzltghfj+juZ79e5zLiKP77xyQazEjk3m4FoMkjxA2G5lVxU10u9wB5KalD2Wek+IZTffLOBPH4CiqmWTGAI0VKGideLzUna7rl8n+XNjeecgGfTfaOYm8VHjSsGAiDD0joTCk49j+u8X07XwkOUEYwo+VrRbFeY5YSyfA2g4iuWErXIIcv/sKVgEtqTKnadRqZF5siB0YKIClLwcndo1o1Fv7mgo3cauqtdoiE31WOcpq7m2xfy3VOmQBHG0YGhyuZDluQHNnCEv/6ecRAGpDBxe2PnIsaclgIrini689C/AmLxXM+KG7Aw25E2yUtj8InXuJQ4JKDo1S+x3vB2U2u/qOIV7xefqavb4K3BP7EUzekY0Tv1XVNM21wHZkinVbbfQfZn0MJSV0wNpYBdrJE/leYnygZq56sUHlslEUA0n5351ZjSbkLaUzCKP/3aAlVoEp8TaLmM1SOP5GrNMvp2QmBwtfbysFAQMHY8loK4umGfqy6KUD4GAn/so8eR1CaSlyRA/B2yaPPYVsJnD9lF/7H1r/Bn5rA6uKkeG8iLc+T+CSZnOWbY3E79b23ZvVwgJ8NOhC3N1ozAYeIhur/3UafPcVme2Z2BxY417x+MpDpU7jEa0IrTvMtwsWrOqSHS2PX/cKsyCgt4dSpIPvknIFY9/Gqyy6pyZNLmBnSEstDrKLfqpiXfKOX25RDEBzWTxPzRN+wAypozSufXzKbLSQujAkgk2Uo1iLcN1y664vM9gtb2oSYwc1dA0y08T6neqvtoRFGxfEbwNJpyAIGUJPUePc5Y9MZ+8n5pzoY/O4urK5oRBsTt1osZ81WHYFlpnmHCvenwVSu+3i4KTUN/055TT0hC8mNU+5rBsIVZnBfp6dmAoxGLP2F3JB1OjfGiRSiTYQbBoW+5OMVGiWGclcnl8sktETkr4mh5IKYVUkIUsvh28WRB/nGQLb2X2j7dqwez94XFVqJay4t5RpQvxdHt9czRMyis/DAWF7ocxn7ec/M6BnTiTnixH9oj9M8IJ+sUvcusHRG73UbXEdQRLA+98A+P9aIJArGfQXjYJW5bLYkAr8vJplkWCyLRsS+nQ8MNqg/EnCtt2V1J0ESZKy9VVA34q5OG8+rLlO4tpEL1MuxjTpnU36tspWW8onf9A9kT71d0JvvLJTQoOAlQ6SoGuwZH4NeI36zL7/AsGmRXKNdnUGpVPYtSut2cvb7VtepjBTRRmlxaHdYuHNA13t0dpB1eqGgBZ5hqtlZHPFP1++FLv518Vvc1onI6MZtksa08QNLTCpi5peWCE/DHbIGQnLTKjAc9NQejNxcgH81xj4UlDSR68KRUIsv2ns9B28NYu5g==';const _IH='1d515ed83207800c32796c3a85ff5eaa63a3d497a4208441a167bff74a670e53';let _src;

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
