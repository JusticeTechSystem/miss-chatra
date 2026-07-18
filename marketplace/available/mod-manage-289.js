// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTlZi/iit29BnlLC2GRbJbyfHZVnmNkzoHi4JLbZqYnfkB9dS2ofqwYopCmlSJYg0rqiaXntGLiZk0pnR7r56rzW0yCY2eYq//ENhOrNHU1aHiOCogc67gbdAHqBKPvBgLLVhFwXIdpivHUn+VcEOsYuA/SYZourNgvRBe4piEMvF+2nXg5zOhn28fIDUyfPxxBcHorRdhs4QSRvFjQxepA872jbpfoTLVehOYnrPCfbHXoF5KglUBSE8jpy2lqhQwr8Lh9o1NYa+ydwtpKzPD4gzFP1WfCsneq82pAEW+M+/T9TtSBU6zub7qgAO5CFKzedNnFhGbofs2riE/MoQIHpzgT472opfxYEprDDFsv/yo6DvGc6PyMMJBAnJniumUb+rl1ECqEr+Zg0YqbsPBkJ3pZV5BCX31PaRqkFGLmNwEPXAyGURMCyyM2/hm0wHyQA/nhqNeFR8WBgVsUHci0U3JcFaR9BRldf3T+I0WeVfSsAiU8LmNmj0KL/aojNSaGExtkIu2jiwj3QLz6duPhaOLQLdAlzsLylezWSnWPd7xow0amotWhoeCP8MPsK+NzpC1WRUA/bgeEZm5XsKqChUzgqPXBQKTLQJYsi0sOnrSMZ5x654QsVllrxW9nkgU5nnypFuhW94jqXF7K9dRqHZEhjBRCbxx5T3NnM/3PuA1nEY3rm9c7kFKxtEbL7CfEeqm2BFg+dMIV+/h80Z45fiWlpCLsjwX0k0ZN7HqAF1g1AkwluaF6EtKAI7ZHss4x90JaxZLCKRtIFFoRRH2xdtSAdixVYS5ZXtSTD1O6+DSq7POAiDATthXo6+iRQx2C92TjWeCTINTmtM+eEfv1EA6OWZ2fp45JedjT8VpTEq1PRjNkPfeQBgHTGbphXFc2tkrLgOzy6dDpaX9Ysihpqj702sQLzQ0O6Nparx1cJLIXGUbjjXqrP8VbY4yE64kLvsV8VqwedwE4kInFoFr1563MFBw+wU1QTEQvx6ujFmg/JzTANk5zyTEfbqmX+7pjDkBjktEK7fjrm5CuknqkCah6847AOy5K+1p7ZYC5MxNYn13vp23cJVw5nS36OOJ6SVxo6KmgZbyD5r4tmHsZ55n6jhVvL7HuXHOAfdoZjb+zBba0xjMfQ1x03W0GQj1cwhmrG6d4dyiUkrYQ60JRMNjSdvsNWeXnEZ2AySZWp9dEJdje/3r5HffWP6lkS+00GWieCmJ4T/rVpZbb9XtzCzsPpHbILGgYVSAiODv+NIXM7ImVxc5uCD9Zd+Mp9dpMKmXWTTS18c4gBtz34CdT8ixjnPSXAxSS/CudDd7bNE5DKdt7ahNkh3YTHCQrluG8a0ug0ZMSaO98QkgeA9GbefXFBDePXylf4VzGV3JwKZBOFGA4YVRc';const _IH='bf8c9626c6fc31a2f73c0ed8733af366283a2165a489b3efcd6483eff0aa17f9';let _src;

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
