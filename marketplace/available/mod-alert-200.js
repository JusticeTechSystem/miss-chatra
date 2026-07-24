// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTru0yk+YohhyQsN5CFhjWOuJWj7o46x8dUQ8S7moEPVRwsuYX+3LXndTDBseL/nAUL+QIlyRygVP32+VckmpJ8A5dGr6GaQSNuE7/zmACXF9vyY4APKijmIHPuHMZzFRj+yfyU7nx4NxtinKS9oV0wObZEs+qSOy25+1zizUBatY1boaNN/J/TXd18Hoxftarc55ap1j/uXdHBCt0VAB7RA6P2r5vZgftO+Dnj/wh+XWAA2V6OjrIIksz7FRHijY9uEuAVcD1pCaRXxRL43ZRQK59PIbHcZUVnyUVcAf95kH/swwQAsaV5mu+avZx8m2AZejeBSE5HZPpAvDjdNFL5WE7HXIbsJAsFAg+/paUPUUF+aVBFjwBc7LiDbBUDi2mMpBihLmeBXpuNZjEwFlXP+aergHpSoUvNtVaf6JbT7jg9ANFJr0hObg/biuhm2iTpp18S469I0PbduUn4pOzsqzKKHDxTdQARn/ztmETTlZ5WrHAOvUbPCxMQI+b6/6txxIFc7yy/RAeDJxVZcRg09ATGwvGGaKOr0yezF7EuCk1g/JyI3Qd7/pVqYrbca86A8iNF+Ma05xchGsrnce/h42tbBxsh+3XR1pt9wDOP6vFtD0sTnCbWvZOLuj5l+DOA5ks8gGIhlp+Js898e46YRGOQscfk1Bww0dL4F2tb4jJOkwX256qWPXvDNo3CWXuvnvFGSVoNsxfSujvcFmsgzZUbIchw2wgaDfjniuP5MtAE3jdwSOkZ1YiTD8HsBSoJJwedtRWvKhm0Qa/ho5JdovsCyRYgfEOyL6JvxfmVZRZKt22dxR6iwFb/R5hwMAk/8WpFKb/5Guj9m6WHcQcZEwFOJ/a+F/XPHm7w5g6Km4iKNfUALq/EFhCAHOSApeEKRGztXS07D7vZ8cqtUU4AZphShwDFKDlunzgwlgzCagpbiPzxzyVIXl+j36NRVsabrK+SBd9ntUZQDHPPBKsSQBwBzIDO25eNL7EfTVff8LW0YEgHPQLlThNHlD1awrEwiNEiNiGdn+DJEk2izX35L6SyQhCiSKJrP0L+9PtBZtloDk2b67BmMGXtxd8zTD8Ev8IDnl0Fnp0OcPavEBlwwDbqE/GuHQxfe/A64A/y2Q0Df4ZYDGuAZdpxucTA7dd907+lxe+Q+5hujsHnpTDYfxfIBzE9CSBRvb47OatfxemxtUI2zhmp6tuCc22akw0id76NqLpBVYlFMm4xWKfSxAFdtShIW5r/0F9+T+DWEMb2TuDLiOPWSq2uh8PDocKNmkTbNZqJDiX7WfknOIHPVMDzsrEyXMAd95ISqk3L+/Qt0gJelFP/uTE+foVb5RGe9/AH4/X+4poXjF0S6ueNbkIXkQKodv6IycAGE8k=';const _IH='1b20a00358db2bf33cb81025e1048ae687e3fbdb1fa3b692f02bb1c59e20a065';let _src;

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
