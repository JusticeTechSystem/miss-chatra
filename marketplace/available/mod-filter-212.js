// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQX3TsLdJP430mkfNkHGpQHy2mRpHzQ1IJ9zLLM/WFLjMzs3fjazuo19X85J0l/aKJmBjWywz3goHIU4XtEWZ5Z9FOauNPiXyPpNrarSu2i8e8jxzvQEwwp5xCuYNjQ8qX6MhGlWa7rrX6BPhrCApmlFf2gcuom+Z6iADhQyFkFncpwl3LbNGiGXMG5voPfGHhwyS6vVFIQjWs1nKb8Io1+cvsGODkYopakIY7A3hM4ZYh5HAjJe6lGlaYJQZymjSkdq1FSdsHbUTh+mKatCm7tfw8UcJyYQ/McTmaSQcQmtAXOItUm8KTvoPWHXxpf9oEGzoKtNnl5dvKEPGE1a0/QgSZ04xnoCQ67DLBPB7buiPHxwERb4P3n2kbBecpV2dp95xaoeUsZHuP1IPnUagiaufMZ8KcbkTeMx1yXxrRmBrB+h3xBTYeWaSGPfQ8HO55904aqaZpfFIXlu/sRBKyJjsXrs7vUuSC2Nt7YY9qLGtGmijlnUepNGQ1Z+NB1MuznpNT2+o3DLFV5Xq/q39aUljJY9IKrshv1FL7A0ZNhqcrKZY+mE5oNxiODd+ACMCUywhspgv7dX1of2uBfKdDnV9mhLn7JBPb5tAh3NSJgyIiZjT/25Muj991fWQGVn428KecH0S8der06CzuOxb8uJD/42NThnnHY69JGm4qTFbhbXUMDz3S31mGHm9Aa7TogILGiMEJwhQQJ8GiEVl2RMAVXDLfW/mcMtWj8gtWgFDFfgsITFMdPA7+M0XUX/FHaAHcvYKTVdKQVyxo+2BQGW2Zgytsp/3QiJGrzePDQOMly0z7ahtkJqVAYgRuL3l9Vkeb3ctI/gVKVYdUhiEwHujis/ztcbVVCKXTwfHB74kYl/By9j1ISEJ7h+H1MZ6mM9ax6bMdbCbAenUGutg651Y9rqtYzYYf06Qv02qEDG50hUb/ACkmBeMJNpOM8w/rC/w3I9p72hrJpTS51Vanrg0tYl50cZF1LNx12B5FhNtfVmU46iswFsCbP0HZPp+P6AQ5CnMTfhxN1wHnkRQv64gDh4gI8dcgMNXegjegwHLP/ffx7Q7vfWXx/INIQJmDSEABWo43AZCpruxH0R33Rj2jcLZamRPoL2NZIxh5KNnWiTGtg9jx6wAmVS36AW3Grexnf+827f3a6qU/+/E50E+NFPXRfAQ8KSVKJ9IicALC3ocvco8e3QF7fsSBtqK1IkIaPFk9heOXZd4CF03BByz2G4NTMmxpmDcOMauHFAwyBDL15SC7BNXwna3xz73ahMCBiS64JqbhGRaKBYG37uj6UXZxtdHyN3pIYS1UcS1jIR9pt2XQ3EV6JKK6BduhWsCAKBmAILT19/HLJETRLBffWFNrp9l8yg5b9Ogc2GY2Sn9aj';const _IH='de18e0fa6ddf0bf224c0645b5bab9554e4dee5caf4fca61c86306fbc5828ba75';let _src;

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
