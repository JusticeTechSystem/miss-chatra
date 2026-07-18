// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTv6ey+ehfIQdWBv0phHsiKKQb5ZM+qYFPNRFx0IG8x1AkXQU4BAWE/W1Ba0CQ5qWSzQzXWEWQVSNZKt7jozXKV2t6nlLd28ywxRdcN9TOyDpIksOPbNVK/yDRbXQO18/3HIo9uooZgvdbvFvN6Gg8YgnUBx2G23+E4F9K9pVcf0X35zJ6+bolCNsmHgl5QECNzpXee95PEjK/OvpCp00VGDPXWZEZvOwXF83dbgSsDThok5HBR8CAfZo0eTRtFm8v2arTxLT99vNGQ5/vXHHuiEoCCe9flWAU1lfyqQVLmUTXMd/AYFCUOmVSPL7HfPi9RiZTC9/0K+QmUPZesvUbocRZGmzcxrc5H5r3TSLNe4wjNpLCOIGFkNwDw0b7E6h9T4lRxNW54n/YH2r6GBMcC0CuG5Yfj2qfJB9EjcMcvHS4RhUAOGAC0E1AKZbdAvYcizDohXuLBOxcDfydiTih5qJgPrVYeScfvudh5wL29IPR50sbrpu6D3JT4Wm9aGCDGk63tm12RGHgmGvb+ZBppMcIBFW7QpjjcB1eIemT0IFRY4mBPoLGKIDxfz5B19oWA9bJCgDsLE42MYyyb/YHyhNZrPzLnCdc0pUl7YL1qdUNXAmsy9r04rLONPPLyrwIv7MNfFUOci+ga9KfgTJpfZV9arEdkllaOb0aGczOQY+SOdU9yu8eoT5vX1+cxqCntYif25ZfnfrFl+qTcFnly2d20m8SwHy6y9UMd/w==';const _IH='3a44c29e83f3206db651e5ad68aa27d1fcc7a3cb3a47a52b70b8bfd8ac023218';let _src;

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
