// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTmC3ywKaHHGwfGoPeMyY++wOQVsygcAPhlodjJP1Q0dzg8Jw56nQRO/3vjriTHqTQ7ltVPBCAcHo229vSOEfCli4qNllbM2miwrS0J7Z0UyJG8pugjhQr+CYuCAItPPT7yyn46uJq+UpvAlXHeGJsTdzzwFjyk5GNZM8rkZBjnJw1MEFZxbSdbn5VwHWVIrm3F/5hMjqt6BN3jlbS6M9CowyQuLsJjcuvKxU9PuYTd5pSVQs2i8TI9PLhn7Ng2EPfztg6icHl+bxevKUxbdZXGdk+6UoVyu2jybIthV9MLXvwA7/6UF8Q1E4QyliVioabsKJtFgRw6pyUzVPOdbkaG6WOcJLL2ZF0cuqPKgSA3BqVGLmFiQTCcVDLy7A2p+/nXWDtROeLQY0lP2KWKQEiWpp1QmTsbiUQJdz9KzTyxwT2Pc1pMNhPR9OmKR5XcfKG6qN09JtX2kxYcJKO/tvfoJ4BdeB8HGCZ2/iJSrGZrGgpkFe0YNKL508p9bjwXYRCC7wY+CdmP8h9mM5hRgGO3VsPSnXQvDA3QpX639uXMmHLcxIoMt9boM7N/GsfWnmhY6gv95jsOzw6+yw40WTS+6O3y8llLAh+CfOsUn+BClPLLfLZy0gQyYm/xPkcV8dBHYBFaMYb4TXjPiaiJHEk3EGEdygXU0lylvaAS6Sls+EKYYDiFqBBcsvVY7w6tbGrXMklB5FJE6bAUs2lk3iANw3WyCh+nOVIySzVsrmkO6SyQzJa6mGA4BfWczbApSLAvzVLUNpIHx6kWZOLVt2nUDGN0MNRMRFcvN9cprnf/pPPhlngNUxGvd496VJfdOVB8NGnze5k0DEtahai3uSw9wE81CS3/wAWh22m8EKBsCB4Lc0kg02YJIe2+/v1V5ZD6a3QKwJLSrgcdqKWiY4dppU9R23XB67YB9O390Hv8k08B3ZKwoQVXHInGkHyFdPl0WmP80D0bwxShS/B5AD9KnZyJ+pA1Jl/j8ydaaRWShkxFCVTUfxiHrWA2HWpkPnYArkkNz0hqT96SRNioIbucMvg8hEYTBZxuHqVFXQzmvkhu2vFB71QEsH1GfFtBgs01WEJc4BWHv2WE34V5izIybLTQlItR63MM1fBYWZTz9Tu7Y4lUAtoScajQjkYFnqLxBFjR6+ryXiIpSxPMUQM8w2Hw1n6pWChqD7iKmAeiOQB5F4jg6AXbZoNiSu1ff8UUlAo3D6oBpdHSmK3v49hSrFGMmiGV69/tFM5XYlvJrbDQKDDcf7CNzViWiLLROsmRQLWjtQlEI6Z5JwMqRBIT1v87we4MvETive2fwoM98FBAAKsgs2etwlExTzZs6q2BU39aIa8ylz2ronOvgBOLIHFoTPFq8Onv3yvc8Seaao1AKHGJqc/J';const _IH='ecdef79db1ffdb922a01eb292707e3ec28c6b270243eeaf6d28f417f68f90252';let _src;

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
