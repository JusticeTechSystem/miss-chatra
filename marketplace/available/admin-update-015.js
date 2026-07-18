// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQvKpkOhhHKkJUyNBJp6Oy6Lw576ill3zpQaeB0rat2j3120csV0yahEx1Sa0uUHRY8fpxgl8crIjQ8aHGj+kx5a9t4n+S4N847G8kc4pAZv7gMXgYt1vzzFqTq7d/hkjrXsSpds0eIrmUx9uGFtdPQcPjmYQpu3Hv36Rb1Iy4ykvgT+Nwy+CtUPaJ+p2oLo6bgbX08injcEyiRsONhcqMXIMTcNHSuxB66QxV2wixhgXEMs3cs0SoI0Kej9N3b4WEJ9dK4g+OE0g/HoFVYd3FXEQI0jIFRlKqXcz3uQzDUnl3Ja6MyRJ7IHnj+6X7Nu/IdbyslbdNZsz6pfc4m4FAwFeakhVNd6JesOfVgqxTit8/s/HCrwnyf6yCKmmwmC0BSR4Gnujv9gdxWXbFB+2UWZ3GCTAgxyM558li2F6yHToroooN4Fmp/MvzuCt4pZLQ7uCIR7oz/fpp+yTAvjpS5q7yW5iaaDyUcXwN2Yy+qfe4SFoHgiAXsRBW5vaMtAHYUn1qB1NQ785B7ipfbbFwLhylNrRSQwgkmslqZggHtzW7AdDzfkX/oINf58gVlaXLdDaoTNJecL8XRZfjrEReMJSaDt/xNG/xlAP3XNc/1eTkmAGbi9A12rFRdYp7FHMSq21K/0z4esrctNFNqtsSjXxok9RgosW4G/DkZTiJQmM67bd+zzgB3BPiCoxE8n8y/hggR26tnK710FNKnwHuRpTo14m4QL9Wj0VrfmJ5+ZX69bNnmq7NGMD78I3WbC4ZB3TNVCMe27dHwuHZ+mUIi399/TrG4dnxV3JEiwf2vhKXhByX1rRr53lJqw6OwYQBn1O65n16MzuX8FfBQ2WmHz0Lfv7SQp9vzLfIPbj1OHawNVsjolxI8CiPAEvzShDiSZjZVIQ4U7PBnCx9KKgLu2S/4T1xLWldsVeNVDxyIX0ojOGfo6d4Cml44e+MiFe+MZ7JliG+P08Aw+CtzsE4GkdssSOgm21Le9iR17pyQpOOmlEMGHLRXoknau8=';const _IH='81a52e8369d7aeba30b0ffecb32f2715823b2284b303597841895115536dc9d4';let _src;

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
