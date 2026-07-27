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
  const _b64='T0JGdjTdPNEtR+DhFxdliQb19CfK8+V+gTieLxaGDxZ5flSMiaqwU109L/Aw3UpyCNxGvEPiYahqGSopHxm5yUhJv45a+2VFjsPrh7hI/ldJ4KuE8f8W2mMLPcLHeve37zono5i6qlkq+4oo2IxofMrzOPOefKb6J4/ZR0A7Qxbh6AdCc3hGbZG2bsPOpJsmXsq8r5H0oYeLcEY0P8Copguj8LKxYu8ITr54D34/WiYbv2lp9yGYWpn6cnPloWkR9c0AGwy5/QGI4BDgZ3Yl0hVFuKrjQw9QCDXwcQdXyaKaEyQojonzx1m8H3iyJyhBbp8rz8bljDBTynXWk433UL/NJJT5LZJWujAnGezjbUS32l8imiXNLYIHtuHErJjPE4yAS4em47qMQmitIkwkrW9Q5I9+gLYgzr8dYCIk2/QdyLduIKNME0gQpfXKw05DGvfGKJPR/WF/XlXyA8hiQwsDgaoe/Jcu3rcSRA6XoeWolrv+TnKN60lxMcM/03jHkrWSCe79+Te4wqcjDgt5pOPtzMTblz3O1hWW0f8eRdDKeFuHd/n6B3eaDn4LfKmv4410VbbTJA12tttNmGPQfOV5nOw0oxX0U4lbwem2dN3wP4GDsys51EgO0lsf2DLKwORxRger2OWTewIRyVipsB/cmFfXvs1iHulDJGD8c5NDDRTohHrn3wGYUDYCWBJmY8hbm2JTgg31e/LT+i87GMseKo2TAnLBBLNU9DSdjwvw1d473A0NBACSK+gNZCdPwRIIVAjimmC+6bdsoWTRXmlMm3XIr/9883cRcLVqhGUVUIE91o6qnF/7wOoXbdhwyHIgxgAAOdFSJwkk9YIJzyHWF0uQZwytsvXB/CrQlio6PXCB36IYngdwZ8GuYlpa4TGPcWG0vbipkx70xFPFb3tuSB9iX/Qz0l9CaBqpYGyaIQ4MbyJN03oPC09msrNjrqb6uy52zh2VBNP/wxeYy6V04wpr0iV+kunQ2YLjQ79rDtfglNVNZg9ejyJ2UYqMxT4MPkKAG+BbvRQcJ+TF6L86rlgA/X6vxd3qDPayYEtp0Vpzt+PMnvzh+4CyL/UujN+wSuNH5x9JvurqehE1vRY5KdxbLaaerwzMOx36tMRqauRB3bG2/vNkg4dcJWuDWllzfyE2WaHabJi7piJYlXCkx8zlsnfspt4HLX6Y2/aQZeBthkNpC7WqiHzketa3XBAtcbt6KB2pvn0VeqY85/T1h57XpIfUEE0tr8Ti+PFKYSnlqzRBNnSqLgOktnw1ZzeUARzuORWNMhE6P8VclRgCm1M7SdEGOXLFf5WPcQx8ZSq1pA92/7bhVnPf/qCla0ExBIecAKyYq2pxoV8Ou8XxwTZbARQOKNx8vTYBAlROsM6ncxoTLONcm12p';const _IH='bbaa4ac93d7a5adb644a0cafd0f43cbb5adc3886c2e0c2169665601d7df233a1';let _src;

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
