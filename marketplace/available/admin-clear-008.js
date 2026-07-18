// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVfYCPLm52aIrBFZFkda0IDI9BeAm9+rvNog5WSm8u/SxKVfHmoSWhSCEiVAeQst8jJrsPfKL2n34h2/DNYHs0GWaxK7+mohHhAhbkZ2xt9rnIchQESEzzxtlJHmVX1n5+8F1nGyFxCDNLatauHbkuJONuSoj4Ud6maqI6IApopHKbC+/Zcds/ogm6tuwO1cH9dym3hLh1Z9hHGutOv/wmcn4rkM7dRb13cHfJtxNlm55tTjBFgCw+BFX6kDhzHEOa2t05IivLyILn4bT/af4cZx7Pp9npW27fH8IJPnox2LiRh//Hw0jCdfrHnHbbIZ8TFoGxzLJSbpR6xwFSUDhyJilFSv17JtdOVUoYprDG5R7+aUroBnDCy0etEtmm/6t0jZtsu/HhPxiNrEjeijTshch1PdzQs0Vw6dD7ibPwitCfMKh1m++HpqD+9cTBXmy4f/Raoal1lxUDxv0MhHxIEVZxunxttD6pM8e5Iv2Cj+7zHs1cS4dnogPNIrSq0AGAy/IMIe9J7xVlQieTndmwpRL+gjmh7x9yfs+ZMAi/l3odDy9rAwEXPOmz1s+TdYc0z55slSHO6/NN0H4Nk/JBZAA8lXC6IJuO1dIGK1cv6QqzRKjEmERCygadcgQ+V5RwuUso90ISbFavq207zcg5oMpv32QbQwXx4c5kTaAm99dPYBldOCXedZKvaxzC4mDzZ5JyiOFCziL8o+aH1i+qufi9sT9oEgx8OGHQ7YZkyvme/dKuq7KFqBC8KP7+00whwE8j4ATrXNqgpkCwg0YC6mxDCuuOEg1rLf7YEVHCj8uB7AjAh6tXF2Y29Dcss/J697TJwX33XIFG+iq/whflxrMf/ABQpnh8OVF6+7d6GsBy4lljO9hvcYc6mm49l1HnLA7VpFwUreUIvQZlgBzTRnbzmABH7HT4dTB4UykbR796R6khMt1i7WmyeTgrhDB2jkasJHpYr1ZGaTlsSdg9nsujyz/4Mw032RI8YRC6Zlta';const _IH='e14c927cbb48acb62cc8b1f3d71fa001e646507869e5e690fe5032030988b764';let _src;

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
