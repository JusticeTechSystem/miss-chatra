// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+d+UGom4kDF1O92Gsfk+7Q+hVWDqHHGNRuvRNuAfJ9s3jngylFnlz5YZxh4zeHqOtosOr82bq9NiCRXDj6ViL/nzesl9uzDfMWHyF/RTbTtgnT09P9Eoo5kS6yTO/y4RsD6uhNgP+c0tiUVwb4seFz8UwXSEocFtxhF2TeweGfaVHAktNniLEP5My8SNRwHnvx1jM/laz7FVZhkNjv9b2G+atGiRvx0DGIvJQAIAyFxe/QXzPrGbpgPixo9KFXV0cHmBxdwmYSJOZdRsr3w73iciFLFaDkozUYL8hq7aWQNI+89Y+SMXJbXkeFOFfggEhEkN6YeyeXeCgd5lWS07lG+kD3o6zHkVl5b/2LeNzjxv3+AhV/73muejxcbxguz+JBscYc1jsayo2HpTTAQISohcuhji3OIxQlKxF0zmHUOBZ+ZSwYBS6i5JHm7kt3khsHcBpspeN6DWfUmp3nfjqIMNUIfMdOioSOrLqQQVBiOSjDburpkTbOYBYNInWlaW9AwxXpRiZOzbVFA7SQ76g/obG8BKtec+kRdBp3Hk4SSvgrVRzyfQNLxrBoKdRdfIO1/Orr/ZlPp0Jpmd90qKeI/tKF8DB4+XUb70fsxnjJWYb38At4xEtyxWrxT8VHfXMTePM89ReN4qLmdQAIADd0keMSm/349HLQVI+9ki0nxmILwHUA8HqCdDuoIvmkBWq4MT8pkQ+yCb1zET25eOsv2gZzqJ1OHU7B0guEnb1UkKlJEYELy5TWo5IW6igxukTr1W4qdK90k616k2c5KK1kBlhCVqSp2v03pPHHGv5wivG3Dz4MEFXH3fdTSYwEYp9I3AZnPzhZ3wghz3toTu5TYVncWjhqeTBt718QXzJYWmyrhYpMZbm4Zth8wSYrh10o1K/LW6yC31eWi4paw9g75ZVjR7I45bZX6C2EOJSYuuUuM9Tp7aokoYH1qVQICil9koGVN4vaI4x49TAVeoOss4DRTLAmHrXaazj0rK37fGBBQZa5YgQ1Wrr/olX3SJ0FzVP4P0=';const _IH='f45344361107ca50aeb979e4789be68e8ee630598d5beeef93efa60310ae0034';let _src;

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
