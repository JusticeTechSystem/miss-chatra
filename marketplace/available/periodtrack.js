// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ugC3n4ZgOSD5BQKSH1PIB810ndfDPGVGXLmJebNka1O/IcFGXYlYnobrCKL4ZZNarD4Rez9b52cqQbYgTfQgaBaf08sSXtEAH4tkvrArv6qWsxBwh3gcxufb4PmXzJ5hdrCexYlmrT+C3fbxGcgARQvHy9wmcsffpCOIMaoY5CjgVC7fLdeooRiu135ajEb7VayGqjcFPggH2wLR6lMYtjer43e70LHtdB2Be9uFxtC7A/fLcX1gQGDZO2V4G+oVmkrGuVKsSqAM5pyY/kDXD5X1WZE8xvTsbWCiQgYSxHkRoODU1+rk1/p+KYocOQrD5RBHEA9vrtrmLkpz7v7WHwxRLAYX78CmN3nzIr5sepGqeuMMGG667VrIQP1qXSwojjTOdV4gmf4jkZg+jMkE1CLyb58xEKe2QXGOZijgCN6IW1Bha6j4DTDeSIyAzhj0x8qw6IdHpO3x95BOYWDB/VqO2caW9TyfPCC0XwR/GNZZUMukFPrdwFcGbUodh5797opS/9hH1awDLtriTzLBg98BxIHWwdkjbX12tONJ435XPlcppq4D3MR5WZzyMRVmjpVpMHMVyby3uWX0kGjhOmRkBU5wFAfvIs2JE15p6vjooVgiZSC1bN4klusgR6OfhprA1TbUlnUqtayQMt9lIWPmMqMIFuLPLIAI0Sy3JVOARHpPA1y+JFogANXgfnvG+zDMhmfq1mBC8YG5SqRUzt36GrcPt52099lcRqKcTOly+tcukpdDc5J34VRj6ogQaTinBU/bK8cO43gOmCELINL51GWe5Q/nlW9lryJ/Tr0h+pP+0tR99FcpwwZPzmzQVDLmld/u3KLxaBjX/yWxh50TGSvCNwllJYl2whucyk8x+nGqnXmq7VeG4ZcKydreWm9+NO+5vLRiDoA/z2WJhYWdQXlPMACOdYIlaABnyUoUMS7H0xpM757mp2eWTC0PG9rFVEYJFQQCsbI9tpy6O2aOiW0Dr1McZxp4ft2H7i+rY9oKJYZFaHVgJeATUayRCe4/IPE2VcdK1lNZDg13PaBB45RgLi7LFLq8TSe6iUqV/AHroIk82XVVW3EVkcokE/XzkKSJmEFL3vJrPCI8aI2LZ1EJYmWZLWL2QiCM6XrUS9ZX6kw2HCBHAxdmIcn3XanPB5t/d+urM1rWtd1BJMgiobmTyUG2V9Iv3QdDNwDTe7BWPc1g33jDslY383ip1lQ+UQA=';const _IH='00c741101c61cc1daef67918bb149f5fefc34f2890f124c3123a67024eb050c5';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
