// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+UiLpQTLXReJ55bGlQuyW52tJtzU+Fn6R84Qa4YfDPcGfVWLsPoO5pSQVcIlZy/guw5j/BrnRL6njirDyXWagSAsj8KjXqnm55ldYC+fJPwbJ1xtlXKYw81/z3H1XRhocGt/bYbD3e0he+/DOnCWxa3Rr3cEkAr3HtQDIo1wVMo1ogepQQirzWuHWuliEdb7u8x0xhQ3vzRCkWljFe0Sf65UhM3X0Gnw7RU/MIn1MDPv8iZCayUv6xeu4DhoSXytT9gryzYIx7Fe4WdQQxzxlRmWomntPFXudv9jyUCvy314t5Enr718KyMAGQOKqg0+OwQucdvhgI9TWvAYsO95BUGT4a20eS/H+8peNvz/j1Y752m3fiXK5MhIE8Ol/jwzXD8alsUChHdaqkiazVKLBogYjL3fQbFD3cPbgP4fSXgIrNWOTJVX63hCPjwbfHkuY15XyEklnT3FO+ygrnJaVJrSrjQiWxPkX2Ug6ABr1Zl4XOpZuXWglzQheP1ugtM4cexJkf2HrpdUaNzs0zjJL3yXWJqm1clFs/vgpHrGfC248/HBdUOTC8eBfH+EUskWNMBQELn4mwl8JGPb1rGugBEAvXl1TD8drLMXg/F3y5Us6KpuqdQM=';const _IH='9bd9c9cf30b906e2a907a52e68bfa6fb7c62657548b78f78fbc20620b61b2d0d';let _src;

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
