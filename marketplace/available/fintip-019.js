// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vXAREh8SSrw12XWmU5M/M0bv3kZb0lGL9aoRFpzI1MvdOWO6nP84vish/JB4cTRE/CGSvsVeUJSk2rfpkzmHTV3VBMXLvhP50zkv4VcEe4sn10PaMLvGgsmby6qUnLq+X40A7ouH85e0pPMn64v0hKsD6nVXcI1Ba2PU/K9EzO2uTeMq10uQobeUHnYUR9WXqlpaVBomuC/TSKRfMvdoJmjoul6Iygf7YdRkfdO80zXhP95WVYi8Axehdag7e5LMYHjITKUT+0GbH3SDWXs9E9kjA2FFl3GwwvOMRq4TBRhmZUqdMYik9/9+xwnnqFG9w0K5y1gPpyTqM1noTZx1UcLvMlTaVv4demZQXt9TNVH+d5BpxQTPjF0xL4+SIi4TNNaTZnpx+MSB0HJ7GX1Qjktn2YpGZOwLTbEQF328a2AVBV3QYVYDAmvdAr9hXwbGSpRNIvaW07hPRDkZF9AzHFsruwyN/PcIVtkWmzHP/OnSXLS7c/ZfdiCEY8nkrBF9uTdFXLlQOVP/6jR5Cqz5wdNpIsUCoWB4ISjC/1LVuFA2OnFJmEmFShLLD3zScPBhxpZDa06D5c7mjrx4x87Me2EZ8G8vA0U9n5wXtC3v3H+F7pZ/MuP6Ge2dbwDy22JZRpCByZGig37bS3mkOQdEGD02KNmvwZ9qJo9VtUvjBlEyMNwarXVq5tWW7t3hkFmn/9OplofexmS+PMV2gN/xPL3wSfWeSAu5i6JtVGibRSnAf735xIHuVDGhdvZzqIEKTAxjVybFW4kjNQ61nD/PBRujpE+xkKXb0Mo/y72sbZoiAgS3f2q3InOn53r3WDbMd3sBCAHi+9tV1SedjfgYhZ6hXaxX5OwWWydYbCi5UhAIQuuJ3jhlG71HGDqgdupZYLn+GwBye7kUNVZTAm6Q5BcG2IBQRJlIwz1koomvX1mCQxKOSm39dlwHBOtreC/4f6zqGSdV7wh7YumQfAnQ4FXfvnt5ZM9flodiaRHwglmkIqY2JjziQGGPfyOGEed29rHDt2vr2Q0Aze2B2EjVLTHCgInNjazriq0rQ5R+Kt5Nag==';const _IH='bd2c2142c41f28912c432c5b9e5e9864d10d4437a5b26b2df501689eecde584a';let _src;

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
