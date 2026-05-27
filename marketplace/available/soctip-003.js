// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FjPFjzkZOE73je5poBlbbd8P39LhcDvuFnzcju8l7M1Z3RGwbK9Dz+o5F6SGzCJG3FCkmlkHwFrdKgGeUPKzb6efaEuq59cMTW1TO3Mv0ND/PCakTF4e3n2NZ6HjUnyY10fNn2t2RKmHvuKBn/1JARWL92UeigDG5auZ8N6/b3XO4Rioow7YKlsG74sJdGwlM9zK5f3S34BjxyDFh0ArQtzZJbjbPAdciuaGWZh6JxvE/0qZ/qrY4EiRLm09s+MeUG91QS3u8FfSWOW+QnBw0jeQzeER9Np+sLs4+qZTrq9bn61Cj+YkSp7+1onrq4N8c9VCZ/IvV2253mHUjB5eEflIZWVC4OjTpHikEDRRdmpl+s+CXmXujkLL4BYU2mm11YCOsUFvEFI8kty+KAMfHFgV0/5C0D/m6vR8lk5KQdkvaKoQL+hLpZjax++KdVHoMEqRyp+vJOiY18TKP0biqzTSVgdupxOwHPYaf00RUVYDE2C2NBDfSWh9cw4JGceXDEV975CnTeWH6Gh1S/plsVkPrYaHlU+x2j0XQoUCCx3ZJ2D9xA2kvON83y3ICRzmncnXIgVLuPGMESw4Zi7rINJPJYxoCjLsXF+OFvjtXOyBrg2jBJLVcf0CWGT0o/QXZ/C2eIr4QSX/ZSURDHqdKCFTdDQxW1Se5R8zFHNZNXubBAvZkL4W+RVn+G0iTk+hsbC+ZvB1EEBOwe5HN0DL5umicg21pDdqGp6asn+ZZElD5l0sRSrbUVWD3XGoqjXjyU8/Y91I98NVeqGy5lf7HWFTJB7ipoLALtm22ncKuG3QiAcxY55K4Ztl6oazWTjQe1NDwmHiFtNXOYAJ4IakjXbnZdBiOfMi1jOW4Q1BgzkhgZ4FzTDz2MTHCTEUhAhWewgj5md40BWad14goQyM+kK7qBPeVRP+R0OtMImt+tJ1aSeEBPq+EYt+aRyLYIFh23O48dEUPY9RKBzpBIPqZNsxjiT19TpFc/Xy0kdcVv5tEEAYytKslPJXKZcJ5GxLrAGbUV49DGV7LJBI++Fhd/oDw8Q2qXySpVVPb3xLa9V9uniOW2+iS+eDQM9blWradbIPWTP17dKCL34=';const _IH='cafc987b4d3214825277b8a152da3156aec6db6183be2407f38de615b40e07e4';let _src;

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
