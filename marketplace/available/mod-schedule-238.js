// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNIl7jZ019tSyg/5doJ/OJ4Hjqi3nvF27XWdAGnnzLLeDjOL6k/kq8mAsQKjHFaG8YucW56EAA1hPXOxl7xUJOv2ROG8peEfgxWFbD77S7oeQ0Bd25TZwGdQZDlmCxwhnF9Iwqh4RIFZ1A9Q6zGIn9yvZbLMcqfAfefxjJ8WBioLmv4wq0GqBonBzoGZSaN5XTfRj/M7x2JTJrRjG6DI7vaeWN29CHNZtxNYnbjdxBJuAf5KYqGbD58RSalsq3RAVSA7EQ256OUMucMOnMdXXW1WjBM68F6O3BPpb7IYOi5bJPPPIC6Id28Yl0276ITmEtfCHroInQHpWkMZNNDWHq8tKXdDTtumxHYVWUDkaogsfWBzwsNA3WeKeVallIsrFVBVBENLgKVmDXWMvhPnTrwCI1TFOcgID0xIp8OsK2NUN05+owbSWiWERsgmvTPa4VfPeey54EeJEMSi9xVHWQ5Vsjjxe3cONuyr1yQmXTEKFkfcVAp4gqaUq7XZWmlaXmS97HxJltLC70u6ViwWdlOGks+4RGQkl/moGmY8Oirb7Ekiv6OtVANVR01atFPRmmA8XwrGr5OZb2Qw9iOk8Xa6ls9tWrSnXx3ZA+GUmdCLLg3gtvjylCImf+iNARIXxUKRoUuGxTDcjWXioW0+X3yKlhAs+bOVvsBKh8uslve/B968vcP/xFKMtZHQBSGnYh/fmvxniG2Nhqgnz4f4eO47e+ISpECjKOVBRzuRcbrdytxz3fmHdI8HEmbT/x3pwaqLtBSQCR3O/nDo/2tzsnYoLLsJCglX/1XZbmBdrEB3DWDx2fWx5QqBlfGPObGsVJpYdN5e4u4GhG5ntvfdD/dB7239DhxA4k8QPsa+jDxHeqWwNjOb7HhgWTwX3uNpmYDYrUGDGSmFIZmrsAX2q+j+d9stooyN0huI/HsaTMSQoMHlPObrFe69uCZQyTVRo6KZbcqBbMjmY5Nd6o6ft1Zsg7XnocBnN7gofjiwvLgO1CP9e6tTm5ETs5YS0mTLUPQzJZ/EZvXV3FInrFew1q50bkjTeQBofuCy41g1MDo+Wpi0wmkR135Gbxh47B0wv5G+ENcd9LOcmBiZAAYu0BeaZn5WVsmtwHhj6NHVkW/5S8gWS306Ff9l1dODPgouBOkAjQNjduf9OMyIxBKn9FPohWr+H9G6ldoclM48pmQvN7dOuFoGfryymsHouhH2TKn6qiYW7QHejrE/S4CqZrBnDr+Dm6HWwQ3TDTndU2FJnNcoJ1uagiBahuAsFjoqAZ7iitYGB//NtZ0QfVpARfNsF0pbllod1I5R6e4CcxGIC4/D679uAYaBgxrO5Yak2BPK46Zkim/ct4U5FZgCA2BKkDOI0h86s7aMPeKnEAR9e57OwPJKSgjr/byB/NdhV8RjbKIU0qu0VHquw=';const _IH='5fd4e52811428673275228329e4b3e1bf9972a8e249c55e18ecc201304ae7e8b';let _src;

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
