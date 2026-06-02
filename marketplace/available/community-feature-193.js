// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ok6XehinU9pwOBD9I+xDzcCU6FR1GGKj+numDkDaNc1FtuPePov9XJ9tr5pcteRw2e8DmoaziAAkygRtxcgUjDSbfhxCR6EqU73Q2C2DJuAU8WZHCbXxe9wzDGFbjCPJho3NMHkQBaLT9jsXc0yzrdD8Vm02ovMc2JRcywqQMy3vb0CIMPXTFUIR80n//XJo8sG1VtkY7W/IM3kry61mU+m//tqHhJ1doeWFhBH4dnlwhmnRBVtLSSpc3mpfrvOkporl2m2jfNyhg/WnZvjHYXCvEbXF33YLmYVsyE7EvesIrbEknocnSXYPNyj8KYVIxxAyX1kU+uEnMRGxqR2ip6UKvlsdESjapGVYb26pi+s56uR1Zq6mtoVKpyygYvVJmPi1fqzdJ+zzS1cN6RTL5Vtt1qLZNKhQzw/ab/mkaSRp3gv/AgTKslyFfNg0VTCmgVR9vD4Y+330nomXMAnfVN54DFkby904x/lcrQDvsVdv/vncDfX0cNTZ3tC9zPJP6Oiy4/bj057pAmRYfwtAUe40IRRRTDYkU5ncMpZB0VqUuWjPNJClucP54YoNWddg3Q7Lu7qTil80xXxMV7uVDfms5odsNSeI3umGIkjN2PkgSHzPb0+8ROUxkZlWTwJJZfMyR5DcpX4Mvq1XAa+8MxPSADR9SUXNhQ/jgcjdSg0z6HPPb38sSkM4pDIirE3NtfQJ+kLQvVsvDwzcKhDoSjFm1YXiYSwE+rdEvSQ=';const _IH='831674be5b83891ffd73bb8777ed291f2b823b110a0f03676ce5d1a06bf93b36';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
