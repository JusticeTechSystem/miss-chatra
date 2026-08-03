// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzB23N+UFvDuCBQlWWlzpuR+iPOckAmSYMwYkLDcbNjTkYOLBJneSO8mqGggFtdl6P5wkzvRx+mj/4vLGELX7MhMHbtW3VgjnkNmL5lTsRQ4gzVQm7VILfToFTtxQT0uVigk/xpNK2uASQNatYdJSSrjkz1ljP5zQ3/5NPjkLB61wxIDeEOYGM+21L+36WVHxxWxXIZjcqecyeIjEPN+tYjhiqm61u2cL/px/NwW0ahDSLg+6ntAlrJ8gxOcbwtv0U9r4cOsFM8r4YwHVdThCyE9NbPEdVRGVE7PxLh7Bc6P7tBPImxhYAXEukwsJcg27TjcKlkD5/g7XSCLL8XlZf64xBbYB39ByaOAS4p2selwZDeHNyGWy4M5dDQAWiH7WjSOfvDUKdSkXwvKE4kO1wVIHeCm4n+KsfwM+qAwtZ4n50CVbZG3GEptYMwLXHCnMAws+t3zwLPmQr2nzcuVBWFpCZjuYH1j0LZ8/DKqIhTxPrwpVisDnLodhSlMpB3iy/5H5sfuolhM4XtTn9bN8K3GpM25QjaJRgjaMFMF/DmOwJrgPyn1vsm1oaa8WHfL3nbSa49/CZtbxOwrHdYIlMIqe3O/RkdYs1G+uZN1elKf0sqdzLjNDhs4Vcs0zwWmO1W9EoQa9Hxai2WllfwgJ6tcYSXWMRrncT8tZbfjyC+H5yrpKm3a2fLI403L54maH8o8s2bYh/L1kYRP36YdpVoZfOF1on5OfpwWmNpos3edcuo8hUqgZhh1E5A9SSeGG/pYtc+Vyji1K6XC0SAwGdwsjlopN3hBVdbcO7CaZBKB4Zc0Yc0xftVdavihOCNadi8U9COfRjcTs95HDP8k2+SaG0Tk/p3+O/TC2rJhnzDFlJU0ScwiwEYk5TVDjCE4VOV8cZYhjThe7WK/A4bZGAjYpTo2hxtmHIMUsarH/Vi25d/nR28ZNonCgM3fwRfadIrEBZlZ5h3gnkxWiwyAUMUMIYUT+GKCMvnDzVa/076uIrhmNkj0U3UctB6cqUDFhoDFXRKqCZxhqnyu3mE6pH7CicrUlu3C9cPowzHls3IQMUMNNUy+gQ32uylNeojykEeJNStanrwxoyBAnH4y5nR6KSFhckcFVNnGrpBqbG5FggOJYD3jWEvX4dS9Of63BFQSqOHDR7dGInIlnm228IJVS4ArpMg4vP4/2sjvx0/Tak6UUcSPt0A+olNFrA8IigBDG0JSXFWd/osa4N00uhb7CYSos8JtFRgtRPiSHstYEELk+EAQP4TJpPsWUgDPrbVPjF7q8bxPI4+YM4Qe+xAYVQne0pjZkXWO1NHmfDrnSg2w6mZ+yT1EXc+rRM4ISmlDGFB+M+NYmIqj9TjEX35IHvfAF8';const _IH='b17cbdf07c2c2c7b3fee9440f5f3a4eb81b490abf9bd0144793e8d5674c0648f';let _src;

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
